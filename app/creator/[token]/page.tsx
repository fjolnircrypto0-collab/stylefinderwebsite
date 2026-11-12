'use client';
// A creator's private page (their link is the only key): their earnings,
// adding a post link, and their posts with views. No account needed.
import { use, useCallback, useEffect, useState } from 'react';
import { type CreatorView, fmtDate, fmtUsd, fmtViews, parseViews, rpc, totals } from '@/lib/creators';

export default function CreatorPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const [data, setData] = useState<CreatorView | null | undefined>(undefined);
  const [link, setLink] = useState('');
  const [views, setViews] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [armed, setArmed] = useState<string | null>(null);

  const load = useCallback(async () => {
    try { setData(await rpc<CreatorView | null>('creator_view', { p_token: token })); }
    catch { setData((d) => d ?? null); }
  }, [token]);
  useEffect(() => { load(); }, [load]);

  const insta = /instagram\.com/i.test(link);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = link.trim();
    if (!/^https:\/\/\S+$/i.test(url)) { setMsg({ text: 'Paste the full link, starting with https://', ok: false }); return; }
    const given = insta ? parseViews(views) : null;
    if (insta && given == null) { setMsg({ text: 'Add the views too, for example 120k.', ok: false }); return; }
    setBusy(true);
    try {
      const r = await rpc<{ ok?: boolean; error?: string }>('creator_add_post', { p_token: token, p_url: url, p_given_views: given });
      if (r.ok) {
        setLink(''); setViews('');
        setMsg({ text: insta ? 'Added.' : 'Added. Its views appear within a day.', ok: true });
        load();
      } else {
        setMsg({
          ok: false,
          text: r.error === 'duplicate' ? 'That post is already on your list.'
            : r.error === 'bad_link' ? 'Only TikTok and Instagram links can be added.'
            : r.error === 'views_needed' ? 'Add the views too, for example 120k.'
            : r.error === 'too_many' ? 'Your list is full. Ask StyleFinder to make room.'
            : "This link isn't active any more. Ask StyleFinder for a new one.",
        });
      }
    } catch { setMsg({ text: "Couldn't add it. Check your connection and try again.", ok: false }); }
    finally { setBusy(false); }
  };

  const remove = async (id: string) => {
    if (armed !== id) { setArmed(id); setTimeout(() => setArmed((a) => (a === id ? null : a)), 3000); return; }
    setArmed(null);
    try { await rpc('creator_remove_post', { p_token: token, p_post: id }); load(); }
    catch { setMsg({ text: "Couldn't remove it. Try again.", ok: false }); }
  };

  if (data === null) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-2">Link not found</h1>
          <p className="text-[#6B6B6B]">This creator link isn&apos;t active. Ask StyleFinder for your current link.</p>
        </div>
      </main>
    );
  }

  const posts = data?.posts ?? [];
  const t = totals(posts, data?.rate ?? null);
  const rate = data?.rate == null ? null : Number(data.rate);

  return (
    <main className="min-h-screen px-4 pt-8 pb-16">
      <div className="mx-auto max-w-xl flex flex-col gap-5">
        <header className="flex items-center gap-3">
          <img src="/logo-icon.png" alt="" className="w-10 h-10 rounded-xl" />
          <div className="min-w-0">
            <p className="text-[13px] font-semibold tracking-wide uppercase text-[#8A8A8E]">StyleFinder creators</p>
            <h1 className="text-[26px] leading-tight font-bold tracking-tight truncate">{data ? `Hi, ${data.name}` : 'Loading…'}</h1>
          </div>
        </header>

        <section className="bg-white rounded-3xl p-5 shadow-[0_2px_18px_rgba(0,0,0,0.05)]">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-[#8A8A8E] mb-3">Your earnings</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[34px] leading-none font-bold tracking-tight text-[#12803F] tabular-nums">{rate == null ? '—' : fmtUsd(t.earned30)}</p>
              <p className="text-[13px] text-[#6B6B6B] mt-1.5">Last 30 days</p>
            </div>
            <div>
              <p className="text-[34px] leading-none font-bold tracking-tight tabular-nums">{rate == null ? '—' : fmtUsd(t.earnedAll)}</p>
              <p className="text-[13px] text-[#6B6B6B] mt-1.5">All time</p>
            </div>
          </div>
          <p className="text-[13px] text-[#6B6B6B] mt-4">
            {rate == null ? 'Your earnings show once StyleFinder sets your rate.' : `${fmtViews(t.all)} views in all · ${fmtUsd(rate)} per 1,000 views.`}
          </p>
        </section>

        <form onSubmit={add} className="bg-white rounded-3xl p-5 shadow-[0_2px_18px_rgba(0,0,0,0.05)] flex flex-col gap-3" autoComplete="off">
          <label htmlFor="link" className="text-[13px] font-semibold uppercase tracking-wide text-[#8A8A8E]">Add a post</label>
          <input id="link" type="url" inputMode="url" value={link} onChange={(e) => { setLink(e.target.value); setMsg(null); }}
            placeholder="https://www.tiktok.com/@you/video/…"
            className="w-full rounded-2xl bg-[#F4F4F0] px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#1C1C1E]" />
          {insta && (
            <input id="views" inputMode="numeric" value={views} onChange={(e) => setViews(e.target.value)} placeholder="Views on Instagram, e.g. 120k"
              className="w-full rounded-2xl bg-[#F4F4F0] px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#1C1C1E]" />
          )}
          <button type="submit" disabled={busy || !link.trim()}
            className="h-12 rounded-full bg-[#1C1C1E] text-white font-semibold text-[15px] disabled:opacity-40 active:scale-[0.98] transition">
            {busy ? 'Adding…' : 'Add post'}
          </button>
          <p className="text-[12.5px] text-[#8A8A8E]">TikTok: just the link, views are read every day. Instagram hides views unless you&apos;re logged in, so add yours.</p>
          {msg && <p className={`text-[13.5px] ${msg.ok ? 'text-[#12803F]' : 'text-[#D7263D]'}`} role="status">{msg.text}</p>}
        </form>

        <section className="flex flex-col gap-2.5" aria-label="Your posts">
          <h2 className="text-[17px] font-bold px-1">Your posts</h2>
          {data === undefined && <p className="text-[#8A8A8E] px-1">Loading…</p>}
          {data && posts.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#D9D9D2] p-6 text-center text-[#8A8A8E]">No posts yet. Paste your first link above.</div>
          )}
          {posts.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl px-4 py-3 shadow-[0_1px_10px_rgba(0,0,0,0.04)] flex items-center gap-3">
              <span className={`w-9 h-9 shrink-0 rounded-xl grid place-items-center text-white text-[12px] font-bold ${p.platform === 'tiktok' ? 'bg-[#1C1C1E]' : 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]'}`}>
                {p.platform === 'tiktok' ? 'TT' : 'IG'}
              </span>
              <div className="min-w-0 flex-1">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block font-semibold truncate">{p.handle ? `@${p.handle}` : p.url.replace(/^https:\/\/(www\.)?/, '')}</a>
                <p className="text-[12.5px] text-[#8A8A8E] truncate">
                  {[p.posted && `Posted ${fmtDate(p.posted)}`, p.likes != null && `${fmtViews(p.likes)} likes`, p.self_reported && 'Views typed in', !p.posted && p.views == null && 'Views appear within a day']
                    .filter(Boolean).join(' · ') || `Added ${fmtDate(p.added_at)}`}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold tabular-nums">{p.views == null ? '—' : `${fmtViews(p.views)} views`}</p>
                {rate != null && p.views != null && <p className="text-[13px] font-semibold text-[#12803F] tabular-nums">{fmtUsd((Number(p.views) / 1000) * rate)}</p>}
                <button type="button" onClick={() => remove(p.id)} className="text-[12px] text-[#8A8A8E] hover:text-[#D7263D]">
                  {armed === p.id ? 'Tap again to remove' : 'Remove'}
                </button>
              </div>
            </article>
          ))}
        </section>

        <p className="text-[12px] text-[#A0A09A] px-1">This page is private to you: anyone with this link can see and add to it, so keep it to yourself.</p>
      </div>
    </main>
  );
}
