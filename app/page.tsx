/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="bg-[#F7F7F2] text-[#1C1C1E] min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F7F7F2]/80 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-baseline">
            <span className="text-xl font-black tracking-tight">Style</span>
            <span className="text-xl font-light tracking-tight">Finder</span>
            <span className="text-xl font-black">.</span>
          </a>
          <a href="#download" className="inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px] hover:bg-[#1C1C1E]/90 transition">
            <svg width="14" height="14" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            App Store
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-[#EFEFEA] rounded-full px-4 py-2 mb-8">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-7 h-7 rounded-full border-2 border-[#EFEFEA] object-cover" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-7 h-7 rounded-full border-2 border-[#EFEFEA] object-cover" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-7 h-7 rounded-full border-2 border-[#EFEFEA] object-cover" />
            </div>
            <span className="text-sm text-[#1C1C1E]/50 font-medium">Loved by thousands · ⭐ 4.9 rating</span>
          </div>

          <h1 className="tracking-tight mb-5 text-[#1C1C1E]">
            <span className="block text-[2.5rem] md:text-[4.2rem] font-black leading-[1.08]">Meet StyleFinder.</span>
            <span className="block text-[2rem] md:text-[3.2rem] font-semibold leading-[1.15] text-[#1C1C1E]/70">Find any clothing</span>
            <span className="block text-[2rem] md:text-[3.2rem] font-semibold leading-[1.15] text-[#1C1C1E]/70">with just a photo.</span>
          </h1>
          <p className="text-[15px] md:text-base text-[#1C1C1E]/50 max-w-md leading-[1.7] mb-8">
            Scan any clothing item with AI and find it across retailers and resale platforms at every price point. Same style, different price — so you always walk away with the best deal.
          </p>

          <a href="#download" className="inline-flex items-center justify-center gap-2 bg-[#1C1C1E] text-white font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-[#1C1C1E]/90 transition" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
            <svg width="16" height="16" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Download on App Store
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pt-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-4">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-center">Spot it.</h3>
            <span className="text-2xl md:text-3xl text-[#1C1C1E] mx-4">→</span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-center">Shop it.</h3>
          </div>
          <img src="/hero-phones.png" alt="StyleFinder app" className="w-full rounded-[20px]" />
        </div>
      </section>

      {/* Shop From Anywhere */}
      <section className="px-6 py-24">
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
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Save Money</h2>
          <p className="text-[#1C1C1E]/45 text-base leading-relaxed max-w-lg mx-auto mb-10">
            You already know what you like. StyleFinder just makes sure you&apos;re not overpaying for it. Every scan searches new retail and resale at the same time — so you always see the best deal available.
          </p>
          <img src="/save-money.png" alt="Same style, different price" className="w-56 md:w-64 rounded-[24px] mx-auto" />
        </div>
      </section>


      {/* Why StyleFinder — Columns */}
      <section id="features" className="px-6 py-24 bg-white">
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

      {/* Stop Waiting — Dark */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto bg-[#1C1C1E] rounded-[24px] p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            Stop Waiting. Start Wearing.
          </h2>
          <p className="text-white/40 leading-relaxed mb-8">
            How many outfits are sitting in your camera roll right now that you never did anything about? StyleFinder is the push you needed. Spot it. Crop it. Shop it. The style upgrade you&apos;ve been putting off starts today.
          </p>
          <a href="#download" className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1C1E] font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-white/90 transition">
            <svg width="16" height="16" viewBox="0 0 384 512" fill="#1C1C1E"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Download on App Store
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1C1C1E]/25 mb-3">What Our Users Say</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-16">The reviews speak for themselves.</h2>

          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            {[
              { quote: 'i have a folder on my phone with like 200 outfit screenshots i\'ve never done anything with. working through them all now. send help', name: 'Tom W.' },
              { quote: 'ok why does this actually work', name: 'Leila K.' },
              { quote: 'ok this is actually insane. i screenshotted some girl\'s outfit on instagram like 6 months ago and never did anything about it. uploaded it to stylefinder and found basically the same jacket on depop for £19. downloading this was the best decision i\'ve made this week', name: 'Sophie G.' },
              { quote: 'Downloaded yesterday. 5 stars.', name: 'Marcus D.' },
              { quote: 'I\'ve tried so many of these apps and they all suck. this one doesn\'t.', name: 'Jade R.' },
              { quote: 'the fact that it searches depop AND regular stores at the same time is so smart. found a vintage bomber for £22 that\'s identical to one i\'ve seen all over tiktok. obsessed', name: 'Amara J.' },
              { quote: 'my girlfriend showed me this and now i use it more than she does. found three pieces last week i\'d been looking for for months. actually crazy', name: 'Daniel F.' },
              { quote: 'used to spend hours on google trying to find stuff i saw online. now i spend like 30 seconds on stylefinder. the time i\'ve saved alone is worth the subscription', name: 'Nia B.' },
              { quote: 'bro i found the exact shoes kanye was wearing in a paparazzi photo from 2022. for $60. this app is not normal', name: 'Kevin S.' },
            ].map((r, i) => (
              <div key={i} className="break-inside-avoid bg-[#F7F7F2] rounded-[16px] p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-xs">★</span>)}
                </div>
                <p className="text-[#1C1C1E]/55 text-sm leading-relaxed mb-4">&quot;{r.quote}&quot;</p>
                <p className="text-sm font-bold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-baseline justify-center mb-6">
            <span className="text-2xl font-black">Style</span>
            <span className="text-2xl font-light">Finder</span>
            <span className="text-2xl font-black">.</span>
          </div>

          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1C1C1E]/25 mb-5">Claim your 3-day free trial</p>
          <p className="text-[#1C1C1E]/35 text-xs mb-8 max-w-sm mx-auto">No commitment. Cancel anytime.</p>

          <a href="#" className="inline-block bg-[#1C1C1E] text-white font-bold px-10 py-4 rounded-[14px] text-base hover:bg-[#1C1C1E]/90 transition" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
            Download StyleFinder
          </a>

          <p className="text-[#1C1C1E]/15 text-[10px] mt-8 max-w-xs mx-auto">By downloading, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1C1C1E]/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div>
              <div className="flex items-baseline mb-1">
                <span className="text-lg font-black">Style</span>
                <span className="text-lg font-light">Finder</span>
                <span className="text-lg font-black">.</span>
              </div>
              <p className="text-[#1C1C1E]/25 text-xs">Same style, different price.</p>
            </div>

            <div className="flex gap-14">
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-[#1C1C1E]/25 mb-3">Legal</p>
                <div className="flex flex-col gap-2.5 text-sm text-[#1C1C1E]/45">
                  <a href="/privacy" className="hover:text-[#1C1C1E] transition">Privacy Policy</a>
                  <a href="/terms" className="hover:text-[#1C1C1E] transition">Terms of Use</a>
                </div>
              </div>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-[#1C1C1E]/25 mb-3">Company</p>
                <div className="flex flex-col gap-2.5 text-sm text-[#1C1C1E]/45">
                  <a href="mailto:support@stylefindr.app" className="hover:text-[#1C1C1E] transition">support@stylefindr.app</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1C1C1E]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-[#1C1C1E]/20">&copy; 2026 StyleFindr. All rights reserved.</p>
            <div className="flex gap-5 text-sm text-[#1C1C1E]/30">
              <a href="#" className="hover:text-[#1C1C1E] transition">Instagram</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
