// A creator's own link: stylefindr.app/go/<name> opens StyleFinder in the App Store.
// Each tap is counted in PostHog (`creator_link_click`: which creator, phone or computer,
// and the site it came from, nothing about the person), so Jarvis can show which creator
// sends the most people. Link previews and bots are sent on but not counted.
// With Apple's provider token set below, the App Store link also carries the creator as
// a campaign, and App Store Connect (Analytics, Campaigns) shows downloads for each one.
import { after, type NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const APP_ID = '6787039372';
// App Store Connect → Analytics → Acquisition → Campaigns → "Generate campaign link": the pt= number.
const APPLE_PROVIDER_TOKEN = '';
const POSTHOG = 'https://eu.i.posthog.com/batch/';
const POSTHOG_KEY = 'phc_qgibCB4iraQParpBbNDyDJ2Wwi79jj7yiwrsbxsjntQg';
const BOT = /bot|crawl|spider|preview|facebookexternalhit|whatsapp|slack|discord|telegram|twitter|curl|wget|headless|python|node-fetch/i;

function cleanName(raw: string) {
  let s = raw;
  try { s = decodeURIComponent(raw); } catch {}
  return s.toLowerCase().replace(/^@/, '').replace(/[^a-z0-9._-]/g, '').slice(0, 40) || 'unknown';
}

export async function GET(request: NextRequest, ctx: RouteContext<'/go/[name]'>) {
  const name = cleanName((await ctx.params).name);
  const target = APPLE_PROVIDER_TOKEN
    ? `https://apps.apple.com/app/apple-store/id${APP_ID}?pt=${APPLE_PROVIDER_TOKEN}&ct=${encodeURIComponent(name)}&mt=8`
    : `https://apps.apple.com/app/id${APP_ID}`;

  const ua = request.headers.get('user-agent') ?? '';
  if (ua && !BOT.test(ua)) {
    const device = /iphone|ipad|ipod/i.test(ua) ? 'iphone' : /android/i.test(ua) ? 'android' : 'computer';
    let from: string | null = null;
    try { from = new URL(request.headers.get('referer') ?? '').hostname.replace(/^www\./, '') || null; } catch {}
    after(() => fetch(POSTHOG, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: POSTHOG_KEY, batch: [{
        event: 'creator_link_click', distinct_id: 'creator-links', timestamp: new Date().toISOString(),
        properties: { creator: name, device, from, environment: 'release', $process_person_profile: false, $geoip_disable: true },
      }] }),
    }).catch(() => {}));
  }

  return new Response(null, { status: 302, headers: { Location: target, 'Cache-Control': 'no-store' } });
}
