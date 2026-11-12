// Reads every creator TikTok post's views, likes and post date from TikTok
// and saves them (only this can write views). Called by the admin page
// (with the admin key) and, when CRON_SECRET and CREATOR_REFRESH_KEY are set
// in Vercel, once a day by Vercel Cron. Each reading also goes to PostHog
// (`post_stats`), where the StyleFinder dashboard picks it up.
import { readTikTok, rpc } from '@/lib/creators';

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

const POSTHOG = 'https://eu.i.posthog.com/batch/';
const POSTHOG_KEY = 'phc_qgibCB4iraQParpBbNDyDJ2Wwi79jj7yiwrsbxsjntQg';
const PER_RUN = 60; // the oldest readings first; the rest next time

async function run(key: string) {
  const list = await rpc<{ id: string; url: string; creator: string; handle: string | null }[] | null>('creator_refresh_list', { p_key: key });
  if (!list) return Response.json({ error: 'not_allowed' }, { status: 401 });
  const batch = list.slice(0, PER_RUN);
  const rows: Record<string, unknown>[] = [];
  const events: Record<string, unknown>[] = [];
  let failed = 0;
  // A few at a time, so one slow page doesn't hold the rest up.
  for (let i = 0; i < batch.length; i += 4) {
    await Promise.all(batch.slice(i, i + 4).map(async (p) => {
      try {
        const s = await readTikTok(p.url);
        rows.push({ id: p.id, views: s.views, likes: s.likes, posted: s.posted, handle: s.handle });
        events.push({ event: 'post_stats', distinct_id: 'creator-program', timestamp: new Date().toISOString(),
          properties: { url: p.url, platform: 'tiktok', creator: s.handle ?? p.handle, creator_name: p.creator, views: s.views, likes: s.likes, posted: s.posted, environment: 'release', $process_person_profile: false } });
      } catch { failed++; }
    }));
  }
  const saved = rows.length ? (await rpc<{ saved?: number }>('creator_refresh_save', { p_key: key, p_rows: rows })).saved ?? 0 : 0;
  if (events.length) await fetch(POSTHOG, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ api_key: POSTHOG_KEY, batch: events }) }).catch(() => {});
  return Response.json({ total: list.length, read: batch.length, saved, failed });
}

// From the admin page: the admin key in the body.
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (typeof body?.key !== 'string' || !body.key) return Response.json({ error: 'not_allowed' }, { status: 401 });
  return run(body.key);
}

// From Vercel Cron (it sends "Authorization: Bearer <CRON_SECRET>").
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET, key = process.env.CREATOR_REFRESH_KEY;
  if (!secret || !key || request.headers.get('authorization') !== `Bearer ${secret}`) return Response.json({ error: 'not_allowed' }, { status: 401 });
  return run(key);
}
