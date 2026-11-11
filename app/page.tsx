'use client';
/* eslint-disable @next/next/no-img-element */
// The app on the App Store. A plain link (not a store badge script) so it
// also works from TikTok's and Instagram's in-app browsers.
const APP_STORE_URL = 'https://apps.apple.com/app/id6787039372';

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-[#F7F7F2] text-[#1C1C1E] min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F7F7F2]/80 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2.5 text-xl font-black tracking-tight">
            <img src="/appstore/icon.png" alt="" className="w-8 h-8 rounded-[22%]" />
            StyleFinder.
          </a>
          <a href={APP_STORE_URL} className="inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px] hover:bg-[#1C1C1E]/90 transition">
            <AppleLogo className="w-3 h-3.5" /> Download
          </a>
        </div>
      </nav>

      {/* Hero: the app is out. The app as it looks in the App Store (icon,
          name, first three screenshots) and one big button to it. */}
      <section className="flex flex-col items-center px-6 pt-28 pb-10">
        <div className="w-full max-w-xl mx-auto text-center">
          <p className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-[#1C1C1E] mb-8">
            Out now!
          </p>

          <a href={APP_STORE_URL} className="flex items-center gap-4 text-left mx-auto w-fit mb-8">
            <img src="/appstore/icon.png" alt="StyleFinder app icon" className="w-20 h-20 md:w-24 md:h-24 rounded-[22%] shadow-[0_8px_24px_rgba(0,0,0,0.18)]" />
            <span>
              <span className="block text-xl md:text-2xl font-black tracking-tight leading-tight">StyleFinder - Clothing Scanner</span>
              <span className="block text-sm md:text-base text-[#1C1C1E]/50 mt-1">Find any outfit from a photo</span>
              <span className="block text-xs font-semibold text-[#1C1C1E]/40 mt-1">Free to try · iPhone</span>
            </span>
          </a>

          <a
            href={APP_STORE_URL}
            className="flex items-center justify-center gap-4 w-full bg-[#1C1C1E] text-white rounded-[22px] px-8 py-6 hover:bg-[#1C1C1E]/90 active:scale-[0.98] transition"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 0 32px rgba(200,222,255,0.6)' }}
          >
            <AppleLogo className="w-9 h-11 shrink-0" />
            <span className="text-left leading-tight">
              <span className="block text-sm font-medium text-white/70">Download on the</span>
              <span className="block text-3xl font-black tracking-tight">App Store</span>
            </span>
          </a>
        </div>

        {/* The first three App Store screenshots, all three side by side on any screen. */}
        <div className="w-full max-w-xl mx-auto mt-10 grid grid-cols-3 gap-2.5 md:gap-5">
          {[1, 2, 3].map((n) => (
            <a key={n} href={APP_STORE_URL}>
              <img
                src={`/appstore/shot-${n}.jpg`}
                alt={`StyleFinder on the App Store, screenshot ${n}`}
                className="w-full rounded-[14px] md:rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Meet StyleFinder */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="tracking-tight mb-5 text-[#1C1C1E]">
            <span className="block text-[2.5rem] md:text-[4.2rem] font-black leading-[1.08]">Meet StyleFinder.</span>
            <span className="block text-[2rem] md:text-[3.2rem] font-semibold leading-[1.15] text-[#1C1C1E]/70">Find any clothing</span>
            <span className="block text-[2rem] md:text-[3.2rem] font-semibold leading-[1.15] text-[#1C1C1E]/70">with just a photo.</span>
          </h1>
          <p className="text-[15px] md:text-base text-[#1C1C1E]/50 max-w-md leading-[1.7]">
            Scan any clothing item with AI and find it across retailers and resale platforms at every price point. Same style, different price — so you always walk away with the best deal.
          </p>
        </div>
      </section>

      {/* Shop From Anywhere */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Shop From Anywhere You See Style</h2>
          <p className="text-[#1C1C1E]/45 text-base leading-relaxed mb-8">
            Instagram screenshots. TikTok fits. Street style photos. Runway looks. Items in the mall you want to find for cheaper. If you can see it, StyleFinder can find it.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Instagram', color: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]', text: 'text-white' },
              { name: 'TikTok', color: 'bg-[#000000]', text: 'text-white' },
              { name: 'Pinterest', color: 'bg-[#E60023]', text: 'text-white' },
              { name: 'X', color: 'bg-[#000000]', text: 'text-white' },
              { name: 'Snapchat', color: 'bg-[#FFFC00]', text: 'text-[#1C1C1E]' },
              { name: 'Facebook', color: 'bg-[#1877F2]', text: 'text-white' },
              { name: 'Depop', color: 'bg-[#FF2300]', text: 'text-white' },
              { name: 'Grailed', color: 'bg-[#1C1C1E]', text: 'text-white' },
              { name: 'eBay', color: 'bg-[#0064D2]', text: 'text-white' },
              { name: 'Google', color: 'bg-white border border-[#1C1C1E]/10', text: 'text-[#1C1C1E]' },
              { name: 'Magazines', color: 'bg-[#1C1C1E]/10', text: 'text-[#1C1C1E]' },
              { name: 'Real Life', color: 'bg-[#1C1C1E]/10', text: 'text-[#1C1C1E]' },
            ].map((p) => (
              <span key={p.name} className={`${p.color} ${p.text} text-xs font-bold px-4 py-2 rounded-full`}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Save Money */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Save Money</h2>
          <p className="text-[#1C1C1E]/45 text-base leading-relaxed max-w-lg mx-auto mb-10">
            You already know what you like. StyleFinder just makes sure you&apos;re not overpaying for it. Every scan searches new retail and resale at the same time — so you always see the best deal available.
          </p>
          <img src="/save-money.png" alt="Same style, different price" className="w-56 md:w-64 rounded-[24px] mx-auto" />
        </div>
      </section>

      {/* Why StyleFinder */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-16">Why StyleFinder?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F7F7F2] rounded-[20px] p-8 flex flex-col">
              <div className="w-12 h-12 rounded-[14px] bg-[#1C1C1E] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-lg font-black mb-2">Save Time</h3>
              <p className="text-[#1C1C1E]/45 text-sm leading-relaxed">No more spending hours scrolling through Google or jumping between apps. You see it, you crop it, StyleFinder finds it. Done in seconds.</p>
            </div>
            <div className="bg-[#F7F7F2] rounded-[20px] p-8 flex flex-col">
              <div className="w-12 h-12 rounded-[14px] bg-[#1C1C1E] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-lg font-black mb-2">Save Money</h3>
              <p className="text-[#1C1C1E]/45 text-sm leading-relaxed">You&apos;ve been eyeing that jacket for weeks. StyleFinder finds you the same style for a fraction of the price. Same look. Different price. Every single time.</p>
            </div>
            <div className="bg-[#F7F7F2] rounded-[20px] p-8 flex flex-col">
              <div className="w-12 h-12 rounded-[14px] bg-[#1C1C1E] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 className="text-lg font-black mb-2">Upgrade Your Style</h3>
              <p className="text-[#1C1C1E]/45 text-sm leading-relaxed">You already know what you like. StyleFinder just makes it real. Finally get your hands on the pieces you&apos;ve been drawn to and dress the way you&apos;ve always wanted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Waiting — Dark CTA */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto bg-[#1C1C1E] rounded-[24px] p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            Stop Waiting. Start Wearing.
          </h2>
          <p className="text-white/40 leading-relaxed mb-8">
            How many outfits are sitting in your camera roll right now that you never did anything about? StyleFinder is the push you needed. Spot it. Crop it. Shop it.
          </p>
          <a href={APP_STORE_URL} className="inline-flex items-center justify-center gap-3 bg-white text-[#1C1C1E] font-bold px-7 py-4 rounded-[16px] text-base hover:bg-white/90 transition">
            <AppleLogo className="w-5 h-6" /> Download on the App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1C1C1E]/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div>
              <div className="text-lg font-black tracking-tight mb-1">StyleFinder.</div>
              <p className="text-[#1C1C1E]/50 text-xs">Same style, different price.</p>
            </div>
            <div className="flex gap-14">
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-[#1C1C1E]/50 mb-3">Legal</p>
                <div className="flex flex-col gap-2.5 text-sm text-[#1C1C1E]/60">
                  <a href="/privacy" className="hover:text-[#1C1C1E] transition">Privacy Policy</a>
                  <a href="/terms" className="hover:text-[#1C1C1E] transition">Terms of Use</a>
                </div>
              </div>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-[#1C1C1E]/50 mb-3">Company</p>
                <div className="flex flex-col gap-2.5 text-sm text-[#1C1C1E]/60">
                  <a href="/support" className="hover:text-[#1C1C1E] transition">Support</a>
                  <a href="mailto:hello@stylefindr.app" className="hover:text-[#1C1C1E] transition">hello@stylefindr.app</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1C1C1E]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-[#1C1C1E]/40">&copy; 2026 StyleFindr. All rights reserved.</p>
            <div className="flex gap-5 text-sm text-[#1C1C1E]/50">
              <a href="#" className="hover:text-[#1C1C1E] transition">Instagram</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
