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
              <a href="#" className="hover:text-[#1C1C1E] transition">Blog</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Press</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Login</a>
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
          {/* Social proof pill */}
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

          {/* CTA button */}
          <a href="#download" className="inline-flex items-center justify-center gap-2 bg-[#1C1C1E] text-white font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-[#1C1C1E]/90 transition" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
            <svg width="16" height="16" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Download on App Store
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pt-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <img
            src="/hero-phones.png"
            alt="StyleFinder app — scan a clothing item and get instant shopping results"
            className="w-full rounded-[20px]"
          />
        </div>
      </section>

      {/* Influencers */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-16">Worn by the people you follow 👀</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { handle: 'Erika M.', img: 'https://i.pravatar.cc/96?img=1', quote: 'okay so I screenshotted a jacket from a tiktok and this app found it in like 30 seconds?? I\'m actually shook' },
              { handle: 'James T.', img: 'https://i.pravatar.cc/96?img=12', quote: 'my girlfriend showed me a coat she wanted for $300. I found basically the same one on Depop for $40 through this app lol' },
              { handle: 'Priya S.', img: 'https://i.pravatar.cc/96?img=5', quote: 'finally something that gets what I mean when I say "that kind of top." Google lens never understood me like this' },
              { handle: 'Marcus L.', img: 'https://i.pravatar.cc/96?img=8', quote: 'saw a fit on instagram, circled the hoodie, and it pulled up three similar ones under $50. this is dangerous for my wallet' },
              { handle: 'Sofia R.', img: 'https://i.pravatar.cc/96?img=9', quote: 'the fact that it searches Depop AND regular stores at the same time is crazy. no other app does that' },
              { handle: 'Alex K.', img: 'https://i.pravatar.cc/96?img=11', quote: 'used Google Lens for fashion for years and it was always trash. this actually works. like, properly works.' },
            ].map((t) => (
              <div key={t.handle} className="bg-white rounded-[14px] p-5 border-l-[3px] border-[#C8DEFF] flex gap-4 items-start">
                <img src={t.img} alt={t.handle} className="w-11 h-11 rounded-full object-cover shrink-0" />
                <div>
                  <p className="font-bold text-sm mb-1">{t.handle}</p>
                  <p className="text-[#1C1C1E]/45 text-sm leading-relaxed">&quot;{t.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="features" className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-16">What does StyleFinder include?</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#EFEFEA] rounded-[24px] aspect-[9/16] flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Logo size={28} />
                  <div className="flex items-baseline">
                    <span className="text-3xl font-black">Style</span>
                    <span className="text-3xl font-light">Finder</span>
                    <span className="text-3xl font-black">.</span>
                  </div>
                </div>
                <p className="text-[#1C1C1E]/25 text-sm">App Screenshot</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { emoji: '🔍', title: 'Visual scan', desc: 'Circle or photograph any clothing item to identify it instantly. Our AI analyzes color, pattern, material, fit, and style.' },
                { emoji: '🛍', title: 'Multi-retailer results', desc: 'Shop new from top brands or find secondhand deals on Depop, eBay, and Grailed — all in one search.' },
                { emoji: '💸', title: 'Every price point', desc: 'Same style, different price. From luxury to budget finds. Look expensive, spend less.' },
                { emoji: '⚡', title: 'Powered by AI', desc: 'GPT-4o Vision + FashionCLIP for accurate visual matching. Understands every detail of what you\'re looking for.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="text-2xl shrink-0 mt-0.5">{f.emoji}</div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{f.title}</h3>
                    <p className="text-[#1C1C1E]/45 leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why StyleFinder */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-3">Why choose StyleFinder?</h2>
          <p className="text-[#1C1C1E]/40 text-center mb-16 text-base max-w-lg mx-auto">The only app that searches new and secondhand at the same time.</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Save your time', desc: 'No more endless scrolling. Scan any item and get visually matched results in seconds.' },
              { title: 'New and secondhand in one search', desc: 'StyleFinder hits top retailers AND resale platforms — Depop, eBay, Grailed — so you always find the best price.' },
              { title: 'Find it anywhere', desc: 'Runway photo. Street style. Your friend\'s outfit. Circle it. StyleFinder handles the rest.' },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-[14px] p-7">
                <h3 className="font-bold text-base mb-2">{b.title}</h3>
                <p className="text-[#1C1C1E]/45 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Feature — Dark */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-[#1C1C1E] rounded-[24px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block bg-white/10 text-white/60 text-[11px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-wider uppercase">New feature</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
              Resale results —<br />find the same style for less 🏷️✨
            </h2>
            <p className="text-white/35 text-sm leading-relaxed">New features added regularly :)</p>
          </div>
          <div className="w-44 md:w-52 aspect-[9/16] bg-white/5 rounded-[24px] flex items-center justify-center shrink-0 border border-white/10">
            <p className="text-white/15 text-xs text-center">App Screenshot</p>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section id="reviews" className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-16">Thousands of users talk about us</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Emma W.', img: 'https://i.pravatar.cc/96?img=16', quote: 'I\'ve been looking for this specific coat for months. Found it on Depop in literally 10 seconds. I almost cried lol' },
              { name: 'Daniel H.', img: 'https://i.pravatar.cc/96?img=14', quote: 'honestly use this more than any other shopping app. it just gets what I want without me having to type anything' },
              { name: 'Mia C.', img: 'https://i.pravatar.cc/96?img=20', quote: 'took a photo of my friend\'s sweater at dinner and found 4 similar ones before dessert came 😭💓' },
              { name: 'Ryan P.', img: 'https://i.pravatar.cc/96?img=53', quote: 'downloaded it yesterday just to try and I\'ve already found two things I bought. 5 stars easy' },
              { name: 'Jasmine L.', img: 'https://i.pravatar.cc/96?img=23', quote: 'if you shop based on vibes and aesthetics rather than brands, this is literally made for you' },
              { name: 'Noah B.', img: 'https://i.pravatar.cc/96?img=52', quote: 'scanned a streetwear pic from pinterest and it found the exact pants AND cheaper alternatives. wild.' },
            ].map((r) => (
              <div key={r.name} className="bg-[#F7F7F2] rounded-[14px] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src={r.img} alt={r.name} className="w-9 h-9 rounded-full object-cover" />
                  <p className="text-sm font-bold">{r.name}</p>
                </div>
                <p className="text-[#1C1C1E]/50 text-sm leading-relaxed">&quot;{r.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings — Dark */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-[#1C1C1E] rounded-[24px] p-12 text-center">
          <div className="flex gap-0.5 justify-center mb-4">
            {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-black mb-1">Over 5,000 5-star ratings</h3>
          <p className="text-white/35 text-sm mb-8">App Store 4.9/5</p>
          <a href="#download" className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1C1E] font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-white/90 transition">
            <svg width="16" height="16" viewBox="0 0 384 512" fill="#1C1C1E"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Download on App Store
          </a>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section id="download" className="px-6 py-24 bg-white">
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

          <a href="#" className="inline-block bg-[#1C1C1E] text-white font-bold px-10 py-4.5 rounded-[14px] text-base hover:bg-[#1C1C1E]/90 transition mb-6" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
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
                  <a href="#" className="hover:text-[#1C1C1E] transition">Privacy Policy</a>
                  <a href="#" className="hover:text-[#1C1C1E] transition">Terms of Use</a>
                  <a href="#" className="hover:text-[#1C1C1E] transition">GDPR Notice</a>
                  <a href="#" className="hover:text-[#1C1C1E] transition">Data Disclosure</a>
                </div>
              </div>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-[#1C1C1E]/25 mb-3">Company</p>
                <div className="flex flex-col gap-2.5 text-sm text-[#1C1C1E]/45">
                  <a href="mailto:stylefinder.app@gmail.com" className="hover:text-[#1C1C1E] transition">stylefinder.app@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1C1C1E]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-[#1C1C1E]/20">&copy; 2026 StyleFinder. All rights reserved.</p>
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
