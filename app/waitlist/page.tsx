'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const SUPABASE_URL = 'https://ffdgcicaykuatijjiitc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_AzR7i_s0Pp3aXHUqQMPRHg_jxZO0LKS';


type WaitlistData = {
  position: number;
  base_position: number | null;
  referral_code: string;
  referral_count: number;
  is_top_1000: boolean;
};

function WaitlistDashboard() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';
  const posParam = searchParams.get('pos');

  // If pos is in the URL (fresh signup), show instantly without waiting for fetch
  const initialData: WaitlistData | null = (code && posParam)
    ? { position: Number(posParam), base_position: Number(posParam), referral_code: code, referral_count: 0, is_top_1000: false }
    : null;

  const [data, setData] = useState<WaitlistData | null>(initialData);
  const [copied, setCopied] = useState(false);

  // Persist code so returning visitors are recognised on the homepage
  useEffect(() => {
    if (code) localStorage.setItem('sf_waitlist_code', code);
  }, [code]);

  // Background fetch — updates referral_count, base_position, is_top_1000
  useEffect(() => {
    if (!code) return;
    fetch(
      `${SUPABASE_URL}/rest/v1/rpc/get_waitlist_status`,
      {
        method: 'POST',
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ p_referral_code: code }),
      }
    )
      .then(r => r.json())
      .then(row => { if (row?.referral_code) setData(row); })
      .catch(() => {});
  }, [code]);

  const copyLink = () => {
    navigator.clipboard.writeText(`https://stylefindr.app/invite/${data?.referral_code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const font = { fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' };

  if (!code) {
    return (
      <div className="min-h-screen bg-[#F7F7F2] flex flex-col items-center justify-center px-6 text-center" style={font}>
        <p className="text-[#1C1C1E]/40 text-sm mb-4">No waitlist code found.</p>
        <a href="/" className="text-sm font-bold text-[#1C1C1E] underline underline-offset-4">Join the waitlist →</a>
      </div>
    );
  }

  if (!data) {
    // Returning visitor with no pos param — show skeleton while fetching
    return (
      <div className="min-h-screen bg-[#F7F7F2]" style={font}>
        <nav className="flex items-center px-6 py-4 border-b border-black/5">
          <a href="/" className="flex items-baseline">
            <span className="text-xl font-black tracking-tight">Style</span>
            <span className="text-xl font-light tracking-tight">Finder</span>
            <span className="text-xl font-black">.</span>
          </a>
        </nav>
        <div className="max-w-lg mx-auto px-6 py-12 flex flex-col gap-4">
          <div className="bg-white rounded-[24px] p-8 animate-pulse">
            <div className="h-3 bg-[#F7F7F2] rounded w-24 mb-5" />
            <div className="h-14 bg-[#F7F7F2] rounded w-40 mb-7" />
            <div className="h-2 bg-[#F7F7F2] rounded w-full mb-3" />
          </div>
          <div className="bg-[#1C1C1E]/10 rounded-[24px] p-7 animate-pulse h-32" />
          <div className="bg-white rounded-[24px] p-8 animate-pulse h-40" />
        </div>
      </div>
    );
  }

  const position    = data.position ?? 4800;
  const basePos     = data.base_position ?? position;
  const goal        = 1000;
  const spotsToGo   = Math.max(0, position - goal);
  const totalTravel = Math.max(1, basePos - goal);
  const progressPct = Math.min(100, Math.max(0, ((basePos - position) / totalTravel) * 100));
  const referralLink = `stylefindr.app/invite/${data.referral_code}`;

  // Celebration screen — top 1,000
  if (data.is_top_1000) {
    return (
      <div className="min-h-screen bg-[#1C1C1E] text-white flex flex-col items-center justify-center px-6 text-center" style={font}>
        <p className="text-5xl mb-6">🎉</p>
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">Top 1,000</p>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-5 leading-tight">
          Congratulations.<br />You&apos;re getting early access.
        </h1>
        <p className="text-white/50 text-sm max-w-sm mb-10 leading-relaxed">
          You made it into the top 1,000. We&apos;ll send your exclusive early access code the moment StyleFinder launches. Keep sharing to hold your spot.
        </p>

        <div className="bg-white/10 rounded-[20px] p-6 w-full max-w-sm mb-6 text-left">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-2">Your Position</p>
          <p className="text-5xl font-black tracking-tight mb-1">#{position.toLocaleString()}</p>
          <p className="text-white/40 text-xs">{data.referral_count} {data.referral_count === 1 ? 'friend' : 'friends'} joined through your link</p>
        </div>

        <div className="w-full max-w-sm">
          <p className="text-white/30 text-xs mb-3 text-center">Keep sharing to climb even higher</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/10 rounded-[12px] px-4 py-3.5 text-sm text-white/40 truncate font-mono">
              {referralLink}
            </div>
            <button
              onClick={copyLink}
              className="bg-white text-[#1C1C1E] text-sm font-bold px-5 py-3.5 rounded-[12px] hover:bg-white/90 transition whitespace-nowrap"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal dashboard
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#1C1C1E]" style={font}>
      <nav className="flex items-center px-6 py-4 border-b border-black/5">
        <a href="/" className="flex items-baseline">
          <span className="text-xl font-black tracking-tight">Style</span>
          <span className="text-xl font-light tracking-tight">Finder</span>
          <span className="text-xl font-black">.</span>
        </a>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-12 flex flex-col gap-4">

        {/* Position card */}
        <div className="bg-white rounded-[24px] p-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1C1E]/25 mb-3">Your Position</p>
          <p className="text-6xl font-black tracking-tight mb-7">#{position.toLocaleString()}</p>

          {/* Progress bar */}
          <div className="w-full bg-[#F7F7F2] rounded-full h-2 mb-3 overflow-hidden">
            <div
              className="bg-[#1C1C1E] h-2 rounded-full transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-[#1C1C1E]/25 font-medium">#{basePos.toLocaleString()}</span>
            <span className="text-[10px] font-bold text-[#1C1C1E]/40 bg-[#F7F7F2] rounded-full px-3 py-1">#1,000 · Early Access</span>
          </div>

          <div className="mt-5 pt-5 border-t border-black/5 text-center">
            <p className="text-sm text-[#1C1C1E]/50">
              <span className="font-black text-[#1C1C1E] text-base">{spotsToGo.toLocaleString()} spots</span> to go
            </p>
          </div>
        </div>

        {/* Goal banner */}
        <div className="bg-[#1C1C1E] rounded-[24px] p-7">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-3">The Goal</p>
          <p className="text-white text-xl font-black tracking-tight leading-snug mb-2">
            Reach the top 1,000.<br />Get exclusive early access.
          </p>
          <p className="text-white/40 text-sm leading-relaxed">
            The first 1,000 people get exclusive early access before anyone else. Every person who joins through your link moves you up. Keep sharing.
          </p>
        </div>

        {/* Share card */}
        <div className="bg-white rounded-[24px] p-8">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-black tracking-tight">Share your link</h2>
              <p className="text-[#1C1C1E]/40 text-sm mt-1">Every person who joins moves you up.</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <p className="text-3xl font-black leading-none">{data.referral_count}</p>
              <p className="text-[10px] text-[#1C1C1E]/30 font-medium mt-1">{data.referral_count === 1 ? 'friend' : 'friends'} joined</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 bg-[#F7F7F2] rounded-[12px] px-4 py-3.5 text-sm text-[#1C1C1E]/50 truncate font-mono">
              {referralLink}
            </div>
            <button
              onClick={copyLink}
              className="bg-[#1C1C1E] text-white text-sm font-bold px-6 py-3.5 rounded-[12px] hover:bg-[#1C1C1E]/90 transition whitespace-nowrap"
              style={{ boxShadow: '0 0 20px rgba(200,222,255,0.4)' }}
            >
              {copied ? 'Copied ✓' : 'Copy Link'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F7F2]" />}>
      <WaitlistDashboard />
    </Suspense>
  );
}
