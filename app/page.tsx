/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const Logo = ({ size = 20 }: { size?: number }) => (
    <img src="/logo-icon.png" alt="" width={size} height={size} className="inline-block" style={{ filter: 'brightness(0)' }} />
  );

  return (
    <div className="bg-[#F7F7F2] text-[#1C1C1E] min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F7F7F2]/80 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Logo size={22} />
              <div className="flex items-baseline">
                <span className="text-xl font-black tracking-tight">Style</span>
                <span className="text-xl font-light tracking-tight">Finder</span>
                <span className="text-xl font-black">.</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-[#1C1C1E]/40 font-medium">
              <a href="#" className="hover:text-[#1C1C1E] transition">Home</a>
              <a href="/privacy" className="hover:text-[#1C1C1E] transition">Privacy</a>
            </div>
          </div>
          <a href="#download" className="hidden sm:inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px] hover:bg-[#1C1C1E]/90 transition">
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
              <img src="https://i.pravatar.cc/56?img=1" alt="" className="w-7 h-7 rounded-full border-2 border-[#EFEFEA] object-cover" />
              <img src="https://i.pravatar.cc/56?img=12" alt="" className="w-7 h-7 rounded-full border-2 border-[#EFEFEA] object-cover" />
              <img src="https://i.pravatar.cc/56?img=5" alt="" className="w-7 h-7 rounded-full border-2 border-[#EFEFEA] object-cover" />
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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-[#EFEFEA] rounded-full px-4 py-2">
              <svg width="20" height="20" viewBox="0 0 448 512" fill="#1C1C1E" opacity="0.5"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              <span className="text-sm text-[#1C1C1E]/50 font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-2 bg-[#EFEFEA] rounded-full px-4 py-2">
              <svg width="20" height="20" viewBox="0 0 448 512" fill="#1C1C1E" opacity="0.5"><path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
              <span className="text-sm text-[#1C1C1E]/50 font-medium">TikTok</span>
            </div>
            <div className="flex items-center gap-2 bg-[#EFEFEA] rounded-full px-4 py-2">
              <svg width="20" height="20" viewBox="0 0 384 512" fill="#1C1C1E" opacity="0.5"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
              <span className="text-sm text-[#1C1C1E]/50 font-medium">Pinterest</span>
            </div>
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

      {/* My Closet */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">My Closet</h2>
          <div className="flex flex-col gap-5 text-[#1C1C1E]/50 text-base leading-relaxed">
            <p>Every time you scan an item and something catches your eye, you like it and it goes straight into your Closet.</p>
            <p>Over time, your Closet becomes your personal shopping list. Every piece you&apos;ve wanted, every deal you didn&apos;t want to lose — all in one place. No screenshots to dig through.</p>
            <p>Just come back when you&apos;re ready to buy. It&apos;s all there waiting for you.</p>
          </div>
        </div>
      </section>

      {/* Why StyleFinder */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-16">Why StyleFinder?</h2>
          <div className="flex flex-col gap-14">
            <div>
              <h3 className="text-xl font-black mb-2">Save Time</h3>
              <p className="text-[#1C1C1E]/45 leading-relaxed">No more spending hours scrolling through Google, jumping between apps, or reverse image searching something that never leads anywhere. You see it, you crop it, StyleFinder finds it. Done in seconds.</p>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2">Save Money</h3>
              <p className="text-[#1C1C1E]/45 leading-relaxed">You&apos;ve been eyeing that jacket for weeks. StyleFinder finds you the same style for a fraction of the price. Same look. Different price. Every single time.</p>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2">Upgrade Your Style</h3>
              <p className="text-[#1C1C1E]/45 leading-relaxed">You already know what you like. You&apos;ve been screenshotting it, saving it, staring at it. StyleFinder just makes it real. Finally get your hands on the pieces you&apos;ve been drawn to and start dressing the way you&apos;ve always wanted to.</p>
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
              { quote: 'i have a folder on my phone with like 200 outfit screenshots i\'ve never done anything with. working through them all now. send help', name: 'Tom W.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { quote: 'ok why does this actually work', name: 'Leila K.', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { quote: 'ok this is actually insane. i screenshotted some girl\'s outfit on instagram like 6 months ago and never did anything about it. uploaded it to stylefinder and found basically the same jacket on depop for £19. downloading this was the best decision i\'ve made this week', name: 'Sophie G.', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
              { quote: 'Downloaded yesterday. 5 stars.', name: 'Marcus D.', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
              { quote: 'I\'ve tried so many of these apps and they all suck. this one doesn\'t.', name: 'Jade R.', img: 'https://randomuser.me/api/portraits/women/79.jpg' },
              { quote: 'the fact that it searches depop AND regular stores at the same time is so smart. found a vintage bomber for £22 that\'s identical to one i\'ve seen all over tiktok. obsessed', name: 'Amara J.', img: 'https://randomuser.me/api/portraits/women/21.jpg' },
              { quote: 'my girlfriend showed me this and now i use it more than she does. found three pieces last week i\'d been looking for for months. actually crazy', name: 'Daniel F.', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
              { quote: 'used to spend hours on google trying to find stuff i saw online. now i spend like 30 seconds on stylefinder. the time i\'ve saved alone is worth the subscription', name: 'Nia B.', img: 'https://randomuser.me/api/portraits/women/32.jpg' },
              { quote: 'bro i found the exact shoes kanye was wearing in a paparazzi photo from 2022. for $60. this app is not normal', name: 'Kevin S.', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
            ].map((r, i) => (
              <div key={i} className="break-inside-avoid bg-[#F7F7F2] rounded-[16px] p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-xs">★</span>)}
                </div>
                <p className="text-[#1C1C1E]/55 text-sm leading-relaxed mb-5">&quot;{r.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <img src={r.img} alt={r.name} className="w-9 h-9 rounded-full object-cover" />
                  <p className="text-sm font-bold">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Logo size={24} />
            <div className="flex items-baseline">
              <span className="text-2xl font-black">Style</span>
              <span className="text-2xl font-light">Finder</span>
              <span className="text-2xl font-black">.</span>
            </div>
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
              <div className="flex items-center gap-1.5 mb-1">
                <Logo size={18} />
                <div className="flex items-baseline">
                  <span className="text-lg font-black">Style</span>
                  <span className="text-lg font-light">Finder</span>
                  <span className="text-lg font-black">.</span>
                </div>
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
