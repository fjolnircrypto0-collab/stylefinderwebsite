'use client';
// The owner's overview of the creator program. The admin key travels in the
// link's #hash (never sent to the server's logs) or is typed in once.
import { Fragment, useCallback, useEffect, useState } from 'react';
import { type AdminView, fmtDate, fmtUsd, fmtViews, rpc, totals } from '@/lib/creators';

export default function CreatorsAdmin() {
  const [key, setKey] = useState('');
  const [typed, setTyped] = useState('');
  const [data, setData] = useState<AdminView | null | undefined>(undefined);
  const [rate, setRate] = useState('');
  const [name, setName] = useState('');
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => { const h = decodeURIComponent(window.location.hash.slice(1)); if (h) setKey(h); else setData(null); }, []);

  const load = useCallback(async (k: string) => {
    try {
      const d = await rpc<AdminView | null>('creator_admin', { p_key: k });
      setData(d);
      if (d && d.rate != null) setRate((r) => r || String(Number(d.rate)));
      return d;
    } catch { setData(null); return null; }
  }, []);

  const refresh = useCallback(async (k: string) => {
    setRefreshing(true);
    try {
      const r = await fetch('/api/creators/refresh', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: k }) });
      const j = await r.json().catch(() => ({}));
      setNote(r.ok ? { text: `Views updated: ${j.saved ?? 0} of ${j.total ?? 0} TikTok posts read${j.failed ? `, ${j.failed} couldn't be read` : ''}.`, ok: !j.failed } : { text: "Couldn't update views right now.", ok: false });
      await load(k);
    } catch { setNote({ text: "Couldn't update views right now.", ok: false }); }
    finally { setRefreshing(false); }
  }, [load]);

  // Opening the page updates views if the last update is over 12 hours old.
  useEffect(() => {
    if (!key) return;
    load(key).then((d) => {
      if (d && (!d.last_refresh_at || Date.now() - new Date(d.last_refresh_at).getTime() > 12 * 3600e3) && d.creators.some((c) => c.posts.some((p) => p.platform === 'tiktok'))) refresh(key);
    });
  }, [key, load, refresh]);

  const saveRate = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = Number(rate.replace(/[$,\s]/g, ''));
    if (!isFinite(v) || v < 0) { setNote({ text: 'Enter a number, like 1.50.', ok: false }); return; }
    const r = await rpc<{ ok?: boolean }>('creator_admin_set_rate', { p_key: key, p_rate: v }).catch(() => ({ ok: false }));
    setNote(r.ok ? { text: 'Rate saved. Every creator sees it now.', ok: true } : { text: "Couldn't save the rate.", ok: false });
    load(key);
  };

  const addCreator = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const r = await rpc<{ ok?: boolean; token?: string }>('creator_admin_add', { p_key: key, p_name: name.trim() }).catch(() => ({ ok: false }));
    if (r.ok) { setName(''); setNote({ text: 'Creator added. Copy their link below and send it to them.', ok: true }); load(key); }
    else setNote({ text: "Couldn't add the creator.", ok: false });
  };

  const linkFor = (token: string) => `${window.location.origin}/creator/${token}`;
  const copy = async (token: string) => {
    try { await navigator.clipboard.writeText(linkFor(token)); setCopied(token); setTimeout(() => setCopied(null), 2000); }
    catch { setNote({ text: linkFor(token), ok: true }); }
  };
  const archive = async (id: string, archived: boolean) => { await rpc('creator_admin_archive', { p_key: key, p_creator: id, p_archived: archived }).catch(() => {}); load(key); };

  if (!key || data === null) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <form className="w-full max-w-sm flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); if (typed.trim()) { window.location.hash = encodeURIComponent(typed.trim()); setKey(typed.trim()); setData(undefined); } }}>
          <h1 className="text-2xl font-bold">StyleFinder creators</h1>
          <p className="text-[#6B6B6B] text-[14px]">{key && data === null ? "That key didn't work." : 'Enter your admin key.'}</p>
          <input type="password" value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="Admin key" autoComplete="off"
            className="rounded-2xl bg-white px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#1C1C1E]" />
          <button className="h-12 rounded-full bg-[#1C1C1E] text-white font-semibold">Open</button>
        </form>
      </main>
    );
  }

  const r = data?.rate == null ? null : Number(data.rate);
  const rows = (data?.creators ?? []).map((c) => ({ c, t: totals(c.posts, r) })).sort((a, b) => Number(a.c.archived) - Number(b.c.archived) || b.t.all - a.t.all);
  const owed30 = rows.filter((x) => !x.c.archived).reduce((n, x) => n + (x.t.earned30 ?? 0), 0);

  return (
    <main className="min-h-screen px-4 pt-8 pb-16">
      <div className="mx-auto max-w-3xl flex flex-col gap-5">
        <header className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <p className="text-[13px] font-semibold tracking-wide uppercase text-[#8A8A8E]">Creator program</p>
            <h1 className="text-[28px] font-bold tracking-tight">Every creator</h1>
          </div>
          <button onClick={() => refresh(key)} disabled={refreshing} className="h-10 px-4 rounded-full bg-white font-semibold text-[14px] shadow-sm disabled:opacity-50">
            {refreshing ? 'Updating views…' : 'Update views now'}
          </button>
        </header>
        {note && <p className={`text-[14px] ${note.ok ? 'text-[#12803F]' : 'text-[#D7263D]'} break-all`} role="status">{note.text}</p>}

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-3xl p-5"><p className="text-[30px] font-bold text-[#12803F] tabular-nums">{r == null ? '—' : fmtUsd(owed30)}</p><p className="text-[13px] text-[#6B6B6B]">Owed for the last 30 days</p></div>
          <div className="bg-white rounded-3xl p-5"><p className="text-[30px] font-bold tabular-nums">{rows.filter((x) => !x.c.archived).length}</p><p className="text-[13px] text-[#6B6B6B]">Active creators</p></div>
          <div className="bg-white rounded-3xl p-5"><p className="text-[30px] font-bold tabular-nums">{fmtViews(rows.reduce((n, x) => n + x.t.recent, 0))}</p><p className="text-[13px] text-[#6B6B6B]">Views, last 30 days{data?.last_refresh_at ? ` · updated ${fmtDate(data.last_refresh_at)}` : ''}</p></div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <form onSubmit={saveRate} className="bg-white rounded-3xl p-5 flex flex-col gap-2.5">
            <label htmlFor="rate" className="text-[13px] font-semibold uppercase tracking-wide text-[#8A8A8E]">Pay per 1,000 views ($)</label>
            <div className="flex gap-2"><input id="rate" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 1.50"
              className="flex-1 min-w-0 rounded-2xl bg-[#F4F4F0] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1C1C1E]" />
              <button className="px-5 rounded-full bg-[#1C1C1E] text-white font-semibold">Save</button></div>
          </form>
          <form onSubmit={addCreator} className="bg-white rounded-3xl p-5 flex flex-col gap-2.5">
            <label htmlFor="cname" className="text-[13px] font-semibold uppercase tracking-wide text-[#8A8A8E]">Add a creator</label>
            <div className="flex gap-2"><input id="cname" value={name} onChange={(e) => setName(e.target.value)} placeholder="Their name"
              className="flex-1 min-w-0 rounded-2xl bg-[#F4F4F0] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1C1C1E]" />
              <button className="px-5 rounded-full bg-[#1C1C1E] text-white font-semibold">Add</button></div>
          </form>
        </section>

        <section className="bg-white rounded-3xl p-2 overflow-x-auto">
          <table className="w-full text-[14px] tabular-nums">
            <thead><tr className="text-[11.5px] uppercase tracking-wide text-[#8A8A8E]">
              <th className="text-left p-3">Creator</th><th className="text-right p-3">Posts</th><th className="text-right p-3">Views 30 d</th>
              <th className="text-right p-3">Owed 30 d</th><th className="text-right p-3">Owed all</th><th className="p-3"></th></tr></thead>
            <tbody>
              {rows.length === 0 && <tr><td colSpan={6} className="p-4 text-[#8A8A8E]">No creators yet. Add one above and send them their link.</td></tr>}
              {rows.map(({ c, t }) => (
                <Fragment key={c.id}>
                  <tr className={`border-t border-[#EFEFEA] cursor-pointer hover:bg-[#FAFAF7] ${c.archived ? 'opacity-45' : ''}`} onClick={() => setOpen(open === c.id ? null : c.id)}>
                    <td className="p-3 font-semibold whitespace-nowrap">{c.name}{c.archived ? ' (stopped)' : ''}</td>
                    <td className="p-3 text-right">{c.posts.length}</td>
                    <td className="p-3 text-right">{fmtViews(t.recent)}</td>
                    <td className="p-3 text-right font-semibold text-[#12803F]">{fmtUsd(t.earned30)}</td>
                    <td className="p-3 text-right">{fmtUsd(t.earnedAll)}</td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <button className="text-[13px] font-semibold underline" onClick={(e) => { e.stopPropagation(); copy(c.token); }}>{copied === c.token ? 'Copied' : 'Copy link'}</button>
                    </td>
                  </tr>
                  {open === c.id && (
                    <tr><td colSpan={6} className="px-3 pb-4">
                      <div className="flex flex-col gap-1.5">
                        {c.posts.length === 0 && <p className="text-[#8A8A8E] text-[13px]">No posts yet.</p>}
                        {c.posts.map((p) => (
                          <div key={p.id} className="flex items-center justify-between gap-3 text-[13px] bg-[#F7F7F2] rounded-xl px-3 py-2">
                            <a href={p.url} target="_blank" rel="noopener noreferrer" className="truncate font-medium">{p.platform === 'tiktok' ? 'TikTok' : 'Instagram'} · {p.handle ? `@${p.handle}` : p.url}</a>
                            <span className="shrink-0">{fmtViews(p.views)} views{p.self_reported ? ' (typed in)' : ''}{p.posted ? ` · ${fmtDate(p.posted)}` : ''}</span>
                          </div>
                        ))}
                        <button className="self-start text-[12.5px] text-[#8A8A8E] underline mt-1" onClick={() => archive(c.id, !c.archived)}>{c.archived ? 'Turn their link back on' : 'Stop their link'}</button>
                      </div>
                    </td></tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </section>
        <p className="text-[12.5px] text-[#8A8A8E]">Earnings are views × your rate: TikTok views are read from TikTok; Instagram views are typed in by the creator. Paying creators happens outside this page.</p>
      </div>
    </main>
  );
}
