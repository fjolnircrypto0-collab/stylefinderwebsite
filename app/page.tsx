export default function Home() {
  return (
    <div className="bg-[#F7F7F2] text-[#1C1C1E] min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F7F7F2]/80 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-baseline">
              <span className="text-xl font-black tracking-tight">Style</span>
              <span className="text-xl font-light tracking-tight">Finder</span>
              <span className="text-xl font-black">.</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-[#1C1C1E]/40 font-medium">
              <a href="#" className="hover:text-[#1C1C1E] transition">Home</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Blog</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Press</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#1C1C1E] transition">Login</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#download" className="hidden sm:inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px] hover:bg-[#1C1C1E]/90 transition">
              <svg width="14" height="14" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              App Store
            </a>
            <a href="#download" className="hidden sm:inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px] hover:bg-[#1C1C1E]/90 transition">
              <svg width="14" height="14" viewBox="0 0 512 512" fill="white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Google Play
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-[#EFEFEA] rounded-full px-5 py-2.5 mb-10">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#C8DEFF] border-2 border-[#EFEFEA]" />
              <div className="w-7 h-7 rounded-full bg-[#C8DEFF]/70 border-2 border-[#EFEFEA]" />
              <div className="w-7 h-7 rounded-full bg-[#C8DEFF]/50 border-2 border-[#EFEFEA]" />
            </div>
            <span className="text-sm text-[#1C1C1E]/50 font-medium">Loved by thousands · ⭐ 4.9 rating</span>
          </div>

          <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tight leading-[1.02] mb-6">
            Meet StyleFinder<br />
            <span className="text-[#1C1C1E]/30">Find any style</span><br />
            <span className="text-[#1C1C1E]/30">with just a photo.</span>
          </h1>
          <p className="text-base md:text-lg text-[#1C1C1E]/45 max-w-xl mx-auto leading-relaxed mb-10">
            Saw something you like on the street or on your feed? Upload a screenshot or take a photo, circle the item — and StyleFinder finds it instantly, plus similar styles for less.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
            <a href="#download" className="inline-flex items-center justify-center gap-2 bg-[#1C1C1E] text-white font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-[#1C1C1E]/90 transition" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
              <svg width="16" height="16" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              Download on App Store
            </a>
            <a href="#download" className="inline-flex items-center justify-center gap-2 border-2 border-[#1C1C1E]/10 text-[#1C1C1E] font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-[#1C1C1E]/5 transition">
              <svg width="16" height="16" viewBox="0 0 512 512" fill="#1C1C1E"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Get it on Google Play
            </a>
          </div>

          {/* Hero mockup — 3 phones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="bg-[#EFEFEA] rounded-[24px] aspect-[9/16] flex flex-col items-center justify-center p-8">
              <h3 className="text-2xl font-black text-center mb-2">Find Any<br />Clothing Item</h3>
              <p className="text-xs text-[#1C1C1E]/40 text-center">Snap a photo from TikTok, Instagram, or anywhere.</p>
            </div>
            <div className="bg-[#EFEFEA] rounded-[24px] aspect-[9/16] flex flex-col items-center justify-center p-8">
              <h3 className="text-2xl font-black text-center mb-2">Circle<br />What You Want</h3>
              <p className="text-xs text-[#1C1C1E]/40 text-center">Draw around the exact item you&apos;re looking for.</p>
            </div>
            <div className="bg-[#EFEFEA] rounded-[24px] aspect-[9/16] flex flex-col items-center justify-center p-8">
              <h3 className="text-2xl font-black text-center mb-2">Get Instant<br />Matches</h3>
              <p className="text-xs text-[#1C1C1E]/40 text-center">Browse similar items from hundreds of stores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Influencers */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-16">Worn by the people you follow 👀</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { handle: '@stylebyerika', quote: 'I found the exact jacket from that TikTok in 30 seconds. StyleFinder is insane.' },
              { handle: '@thriftwithme', quote: 'Found a $12 dupe on Depop for a $300 coat. This app pays for itself.' },
              { handle: '@ootdarchive', quote: 'The only app that actually understands what I\'m looking for visually.' },
              { handle: '@minimalfit', quote: 'I circled something on a runway photo and it found me three alternatives. Mind blown.' },
              { handle: '@resalequeen', quote: 'StyleFinder searches new AND secondhand at the same time. Nothing else does that.' },
              { handle: '@wardrobefiles', quote: 'It\'s like Google Lens but actually built for fashion people.' },
            ].map((t) => (
              <div key={t.handle} className="bg-white rounded-[14px] p-5 border-l-[3px] border-[#C8DEFF] flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#C8DEFF] shrink-0" />
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
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl font-black">Style</span>
                  <span className="text-3xl font-light">Finder</span>
                  <span className="text-3xl font-black">.</span>
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
              { handle: '@nordicminimalist', quote: 'Found my dream coat on Depop for a fraction of the price. Unreal.' },
              { handle: '@fashionfinds', quote: 'I use this every day. It\'s the only app I actually need for shopping.' },
              { handle: '@thriftqueen', quote: 'Scanned a photo from a magazine and found 6 dupes. Love this app 💓' },
              { handle: '@ootddaily', quote: 'Downloaded yesterday, already giving it 5 stars ⭐️' },
              { handle: '@styleinspo', quote: 'For anyone who shops by feel — this is the app you\'ve been waiting for 🙌' },
            ].map((r) => (
              <div key={r.handle} className="bg-[#F7F7F2] rounded-[14px] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#C8DEFF]" />
                  <p className="text-sm font-bold">{r.handle}</p>
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
          <p className="text-white/35 text-sm mb-8">App Store 4.9/5 · Google Play 4.8/5</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#download" className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1C1E] font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-white/90 transition">
              <svg width="16" height="16" viewBox="0 0 384 512" fill="#1C1C1E"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              Download on App Store
            </a>
            <a href="#download" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-7 py-3.5 rounded-[14px] text-sm hover:bg-white/5 transition">
              <svg width="16" height="16" viewBox="0 0 512 512" fill="white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section id="download" className="px-6 py-24 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-baseline justify-center mb-6">
            <span className="text-2xl font-black">Style</span>
            <span className="text-2xl font-light">Finder</span>
            <span className="text-2xl font-black">.</span>
          </div>

          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1C1C1E]/25 mb-5">Claim your 3-day free trial</p>
          <p className="text-[#1C1C1E]/35 text-xs mb-8 max-w-sm mx-auto">No commitment. Cancel anytime.</p>

          <a href="#" className="inline-block bg-[#1C1C1E] text-white font-bold px-10 py-4.5 rounded-[14px] text-base hover:bg-[#1C1C1E]/90 transition mb-6" style={{ boxShadow: '0 0 24px rgba(200,222,255,0.5)' }}>
            Download StyleFinder
          </a>

          <div className="flex gap-3 justify-center">
            <a href="#" className="inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px]">
              <svg width="12" height="12" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              App Store
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 bg-[#1C1C1E] text-white text-xs font-semibold px-4 py-2 rounded-[10px]">
              <svg width="12" height="12" viewBox="0 0 512 512" fill="white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              Google Play
            </a>
          </div>

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
