'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const SUPABASE_URL = 'https://ffdgcicaykuatijjiitc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_AzR7i_s0Pp3aXHUqQMPRHg_jxZO0LKS';

const REWARDS = [
  { friends: 3, label: 'Early Access' },
  { friends: 10, label: '3 Months Pro' },
  { friends: 25, label: '1 Year Pro' },
  { friends: 50, label: 'Lifetime Pro' },
];

function WaitlistDashboard() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';
  const [data, setData] = useState<{ position: number; referral_code: string; referral_count: number } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!code) return;
    fetch(`${SUPABASE_URL}/rest/v1/waitlist?referral_code=eq.${code}&select=position,referral_code,referral_count`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    })
      .then(r => r.json())
      .then(rows => { if (rows.length > 0) setData(rows[0]); });
  }, [code]);

  const copyLink = () => {
    navigator.clipboard.writeText(`https://stylefindr.app/invite/${data?.referral_code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F7F7F2] flex items-center justify-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
        <p className="text-[#1C1C1E]/30 text-sm">Loading...</p>
      </div>
    );
  }

  const nextReward = REWARDS.find(r => data.referral_count < r.friends);
  const friendsToNext = nextReward ? nextReward.friends - data.referral_count : 0;
  const position = data.position ?? 2723;

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#1C1C1E]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
      <nav className="flex items-center justify-between px-6 py-4 border-b border-black/5">
        <a href="/" className="flex items-baseline">
          <span className="text-xl font-black tracking-tight">Style</span>
          <span className="text-xl font-light tracking-tight">Finder</span>
          <span className="text-xl font-black">.</span>
        </a>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-16">
        {/* Confirmed */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1C1C1E]/30 mb-4">You&apos;re In</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Welcome to the waitlist.</h1>
          <p className="text-[#1C1C1E]/45 text-sm">We&apos;ll email you the moment StyleFinder is ready to download.</p>
        </div>

        {/* Position */}
        <div className="bg-white rounded-[20px] p-8 text-center mb-5">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1C1E]/25 mb-3">Current Position</p>
          <p className="text-6xl font-black tracking-tight">#{position.toLocaleString()}</p>
        </div>

        {/* Share to move up */}
        <div className="bg-white rounded-[20px] p-8 mb-5">
          <h2 className="text-xl font-black tracking-tight mb-1">Move up the line.</h2>
          <p className="text-[#1C1C1E]/40 text-sm mb-6">Every friend who joins through your link moves you closer to the front — and unlocks rewards along the way.</p>

          <div className="flex gap-2 mb-8">
            <div className="flex-1 bg-[#F7F7F2] rounded-[12px] px-4 py-3.5 text-sm text-[#1C1C1E]/50 truncate font-mono">
              stylefindr.app/invite/{data.referral_code}
            </div>
            <button onClick={copyLink} className="bg-[#1C1C1E] text-white text-sm font-bold px-6 py-3.5 rounded-[12px] hover:bg-[#1C1C1E]/90 transition whitespace-nowrap" style={{ boxShadow: '0 0 20px rgba(200,222,255,0.4)' }}>
              {copied ? 'Copied' : 'Copy Link'}
            </button>
          </div>

          {/* Rewards ladder */}
          <div className="flex flex-col gap-2.5">
            {REWARDS.map((r) => {
              const unlocked = data.referral_count >= r.friends;
              return (
                <div key={r.friends} className={`flex items-center justify-between rounded-[14px] px-5 py-4 transition ${unlocked ? 'bg-[#1C1C1E] text-white' : 'bg-[#F7F7F2]'}`}>
                  <div>
                    <p className="text-sm font-bold">{r.friends} friends</p>
                    <p className={`text-xs ${unlocked ? 'text-white/50' : 'text-[#1C1C1E]/35'}`}>{r.label}</p>
                  </div>
                  {unlocked && <span className="text-[11px] font-bold bg-white/15 px-3 py-1 rounded-full">Unlocked</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-[20px] p-8 text-center mb-10">
          <p className="text-5xl font-black tracking-tight mb-1">{data.referral_count}</p>
          <p className="text-[#1C1C1E]/35 text-sm">friends have joined</p>
          {nextReward && (
            <p className="text-[#1C1C1E]/50 text-sm mt-4">
              <span className="font-bold text-[#1C1C1E]">{friendsToNext} more</span> until {nextReward.label}
            </p>
          )}
        </div>

        {/* App preview */}
        <div className="text-center mb-4">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-3">
            <p className="text-lg font-black text-center">Spot it.</p>
            <span className="text-lg text-[#1C1C1E] mx-3">→</span>
            <p className="text-lg font-black text-center">Shop it.</p>
          </div>
        </div>
        <img src="/hero-phones.png" alt="StyleFinder" className="w-full rounded-[20px]" />
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
