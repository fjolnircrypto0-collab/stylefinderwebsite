'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const SUPABASE_URL = 'https://ffdgcicaykuatijjiitc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_AzR7i_s0Pp3aXHUqQMPRHg_jxZO0LKS';

const REWARDS = [
  { friends: 3, label: 'Early Access', emoji: '🚀' },
  { friends: 10, label: '3 Months of StyleFindr Pro', emoji: '⭐' },
  { friends: 25, label: '1 Year of StyleFindr Pro', emoji: '💎' },
  { friends: 50, label: 'Lifetime StyleFindr Pro', emoji: '🏆' },
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
        <p className="text-[#1C1C1E]/40">Loading...</p>
      </div>
    );
  }

  const nextReward = REWARDS.find(r => data.referral_count < r.friends);
  const friendsToNext = nextReward ? nextReward.friends - data.referral_count : 0;

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#1C1C1E]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-black/5">
        <a href="/" className="flex items-baseline">
          <span className="text-xl font-black tracking-tight">Style</span>
          <span className="text-xl font-light tracking-tight">Finder</span>
          <span className="text-xl font-black">.</span>
        </a>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-16">
        {/* Confetti header */}
        <div className="text-center mb-10">
          <p className="text-4xl mb-4">🎉</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">You&apos;re on the waitlist!</h1>
          <p className="text-[#1C1C1E]/50">We&apos;ll let you know when StyleFinder launches.</p>
        </div>

        {/* Position card */}
        <div className="bg-white rounded-[20px] p-8 text-center mb-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1C1C1E]/30 mb-2">Your Position</p>
          <p className="text-6xl font-black tracking-tight text-[#1C1C1E]">#{(data.position ?? 2723).toLocaleString()}</p>
        </div>

        {/* Referral section */}
        <div className="bg-white rounded-[20px] p-8 mb-6">
          <h2 className="text-xl font-black mb-2">Move Up The Waitlist 🚀</h2>
          <p className="text-[#1C1C1E]/50 text-sm mb-6">Share your link with friends. When they sign up, you move closer to the front and unlock rewards.</p>

          {/* Referral link */}
          <div className="flex gap-2 mb-8">
            <div className="flex-1 bg-[#F7F7F2] rounded-[12px] px-4 py-3 text-sm text-[#1C1C1E]/60 truncate">
              stylefindr.app/invite/{data.referral_code}
            </div>
            <button onClick={copyLink} className="bg-[#1C1C1E] text-white text-sm font-bold px-5 py-3 rounded-[12px] hover:bg-[#1C1C1E]/90 transition whitespace-nowrap">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Rewards */}
          <div className="flex flex-col gap-3">
            {REWARDS.map((r) => {
              const unlocked = data.referral_count >= r.friends;
              return (
                <div key={r.friends} className={`flex items-center justify-between rounded-[14px] p-4 ${unlocked ? 'bg-[#1C1C1E] text-white' : 'bg-[#F7F7F2]'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{r.emoji}</span>
                    <div>
                      <p className={`text-sm font-bold ${unlocked ? 'text-white' : ''}`}>{r.friends} Friends</p>
                      <p className={`text-xs ${unlocked ? 'text-white/60' : 'text-[#1C1C1E]/40'}`}>{r.label}</p>
                    </div>
                  </div>
                  {unlocked && <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Unlocked ✓</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-[20px] p-8 text-center mb-8">
          <p className="text-4xl font-black mb-1">{data.referral_count}</p>
          <p className="text-[#1C1C1E]/40 text-sm">Friends Joined</p>
          {nextReward && (
            <p className="text-[#1C1C1E]/50 text-sm mt-3">
              Only <span className="font-bold text-[#1C1C1E]">{friendsToNext} more</span> until {nextReward.label}!
            </p>
          )}
        </div>

        {/* Hero image */}
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
