// The creator program's data, through Supabase functions only (the tables
// themselves are locked): a creator's private link reads and changes only
// their own posts; the admin key sees everyone. See the StyleFinder repo,
// supabase/migrations/20261112120000_creator_program.sql.
export const SUPABASE_URL = 'https://ffdgcicaykuatijjiitc.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_AzR7i_s0Pp3aXHUqQMPRHg_jxZO0LKS';

export async function rpc<T>(name: string, args: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export type CreatorPost = {
  id: string; url: string; platform: 'tiktok' | 'instagram'; handle: string | null;
  views: number | null; self_reported: boolean; likes: number | null;
  posted: string | null; checked_at: string | null; added_at: string;
};
export type CreatorView = { name: string; rate: number | null; posts: CreatorPost[] };
export type AdminCreator = { id: string; name: string; token: string; archived: boolean; created_at: string; posts: CreatorPost[] };
export type AdminView = { rate: number | null; last_refresh_at: string | null; creators: AdminCreator[] };

// Views and earnings: all time, and posts from the last 30 days.
export function totals(posts: CreatorPost[], rate: number | null) {
  const since = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
  const views = (p: CreatorPost) => Number(p.views ?? 0);
  const all = posts.reduce((n, p) => n + views(p), 0);
  const recent = posts.filter((p) => (p.posted ?? p.added_at.slice(0, 10)) >= since).reduce((n, p) => n + views(p), 0);
  const r = rate == null ? null : Number(rate);
  return { all, recent, earnedAll: r == null ? null : (all / 1000) * r, earned30: r == null ? null : (recent / 1000) * r };
}

export const fmtViews = (n: number | null | undefined) => {
  if (n == null) return '—';
  const v = Number(n);
  if (v >= 1e6) return `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1).replace(/\.0$/, '')}M`;
  if (v >= 1e4) return `${Math.round(v / 1e3)}k`;
  if (v >= 1e3) return `${(v / 1e3).toFixed(1).replace(/\.0$/, '')}k`;
  return String(v);
};
export const fmtUsd = (n: number | null | undefined) =>
  n == null ? '—' : `$${Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const fmtDate = (d: string | null | undefined) =>
  d ? new Date(d.length === 10 ? `${d}T00:00:00Z` : d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';

// "120k" / "1.2m" / "45,300" -> number
export function parseViews(s: string): number | null {
  const m = s.trim().toLowerCase().replace(/,/g, '').match(/^([\d.]+)\s*([km]?)$/);
  return m ? Math.round(Number(m[1]) * (m[2] === 'm' ? 1e6 : m[2] === 'k' ? 1e3 : 1)) : null;
}

// One TikTok post's numbers, from its public page (no login needed).
export async function readTikTok(url: string) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
    cache: 'no-store',
  });
  const html = await res.text();
  const stats = html.match(/"stats":\{"diggCount":(\d+),"shareCount":(\d+),"commentCount":(\d+),"playCount":(\d+)/);
  if (!stats) throw new Error(`no stats on the page (HTTP ${res.status})`);
  const author = html.match(/"author":\{"id":"\d+","shortId":"[^"]*","uniqueId":"([^"]+)"/) || html.match(/"uniqueId":"([^"]+)"/);
  const created = html.match(/"createTime":"?(\d{9,})"?/);
  return {
    views: Number(stats[4]),
    likes: Number(stats[1]),
    handle: author ? author[1] : null,
    posted: created ? new Date(Number(created[1]) * 1000).toISOString().slice(0, 10) : null,
  };
}
