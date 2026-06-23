'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const SUPABASE_URL = 'https://ffdgcicaykuatijjiitc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_AzR7i_s0Pp3aXHUqQMPRHg_jxZO0LKS';

export default function InvitePage() {
  const params = useParams();
  const router = useRouter();
  const referrerCode = params.code as string;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/join_waitlist_with_referral`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        body: JSON.stringify({ p_email: email, p_referrer_code: referrerCode }),
      });
      const data = await res.json();
      if (data.referral_code) {
        router.push(`/waitlist?code=${data.referral_code}`);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#1C1C1E] flex flex-col" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
      <nav className="flex items-center justify-center px-6 py-4 border-b border-black/5">
        <a href="/" className="flex items-baseline">
          <span className="text-xl font-black tracking-tight">Style</span>
          <span className="text-xl font-light tracking-tight">Finder</span>
          <span className="text-xl font-black">.</span>
        </a>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <p className="text-sm font-bold text-[#1C1C1E]/40 mb-4">You&apos;ve been invited to</p>
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-4xl font-black tracking-tight">Style</span>
            <span className="text-4xl font-light tracking-tight">Finder</span>
            <span className="text-4xl font-black">.</span>
          </div>
          <p className="text-[#1C1C1E]/50 text-base leading-relaxed mb-10">
            Find any clothing with just a photo. Join the waitlist and get early access.
          </p>

          {status === 'error' ? (
            <p className="text-red-500 text-sm font-semibold">Something went wrong. Try again.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-[14px] text-sm bg-[#EFEFEA] text-[#1C1C1E] placeholder:text-[#1C1C1E]/30 border border-[#1C1C1E]/5 focus:border-[#1C1C1E]/20 outline-none transition"
              />
              <button type="submit" disabled={status === 'loading'} className="bg-[#1C1C1E] text-white font-bold px-6 py-3.5 rounded-[14px] text-sm hover:bg-[#1C1C1E]/90 transition whitespace-nowrap" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}

          <img src="/hero-phones.png" alt="StyleFinder" className="w-full rounded-[20px] mt-12" />
        </div>
      </div>
    </div>
  );
}
