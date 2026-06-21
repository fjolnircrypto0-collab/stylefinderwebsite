export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="flex items-center gap-0.5">
          <span className="text-xl font-black tracking-tight">Style</span>
          <span className="text-xl font-light tracking-tight">Finder</span>
          <span className="text-xl font-black">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition">How it works</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
        </div>
        <a href="#download" className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition">
          Get the App
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-24 px-6 w-full max-w-4xl">
        <p className="text-sm font-medium tracking-widest uppercase text-white/40 mb-6">AI-Powered Fashion Scanner</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Spot it.<br />Scan it.<br />Shop it.
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
          See something you love? Take a photo and StyleFinder instantly finds where to buy it — at the best price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#download" className="bg-white text-black font-bold px-8 py-4 rounded-full text-base hover:bg-white/90 transition">
            Download Free
          </a>
          <a href="#how-it-works" className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/5 transition">
            See How It Works
          </a>
        </div>

        {/* Phone mockup */}
        <div className="mt-16 w-64 h-[500px] rounded-[3rem] border-2 border-white/10 bg-white/[0.03] flex items-center justify-center backdrop-blur-sm">
          <div className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-3">
              <span className="text-5xl font-black">Style</span>
              <span className="text-5xl font-light">Finder</span>
              <span className="text-5xl font-black">.</span>
            </div>
            <p className="text-white/30 text-sm">App Preview</p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full py-12 border-y border-white/5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-black">Same Style</p>
            <p className="text-white/40 text-sm mt-1">Different Price</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10" />
          <div>
            <p className="text-3xl md:text-4xl font-black">AI</p>
            <p className="text-white/40 text-sm mt-1">Powered Scanner</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10" />
          <div>
            <p className="text-3xl md:text-4xl font-black">Instant</p>
            <p className="text-white/40 text-sm mt-1">Results</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full max-w-5xl px-6 py-28">
        <p className="text-sm font-medium tracking-widest uppercase text-white/40 text-center mb-4">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight mb-20">
          Three steps. That&apos;s it.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-3xl">
              📸
            </div>
            <h3 className="text-xl font-bold mb-3">Snap a Photo</h3>
            <p className="text-white/40 leading-relaxed">See an outfit on TikTok, Instagram, or walking down the street? Screenshot it or take a photo.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-3xl">
              ✂️
            </div>
            <h3 className="text-xl font-bold mb-3">Crop the Item</h3>
            <p className="text-white/40 leading-relaxed">Select the exact piece you want — a jacket, belt, shoes, anything. Our AI analyzes every detail.</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-3xl">
              🛍️
            </div>
            <h3 className="text-xl font-bold mb-3">Shop Instantly</h3>
            <p className="text-white/40 leading-relaxed">Get matched results from hundreds of stores. Same style, best prices. Tap to buy.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-28">
          <p className="text-sm font-medium tracking-widest uppercase text-white/40 text-center mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight mb-20">
            Built different.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🧠", title: "AI Vision Scanner", desc: "Analyzes every detail — color, pattern, material, fit, brand, neckline, even graphics and logos." },
              { icon: "🔍", title: "Visual + Text Search", desc: "Combines reverse image search with intelligent text queries across hundreds of retailers." },
              { icon: "👗", title: "Any Item, Any Style", desc: "Shirts, jeans, dresses, belts, bags, shoes, watches — if you can wear it, we can find it." },
              { icon: "💰", title: "Same Style, Best Price", desc: "Find the exact item or similar alternatives across price ranges. Look expensive, spend less." },
              { icon: "❤️", title: "Your Closet", desc: "Save items you love to your personal closet. Build your wishlist across every scan." },
              { icon: "⚡", title: "Lightning Fast", desc: "Results in seconds. Scan, scroll, shop. No sign-up walls. No friction." },
            ].map((f) => (
              <div key={f.title} className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big quote */}
      <section className="w-full max-w-4xl px-6 py-28 text-center">
        <p className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
          &quot;I saw a jacket on TikTok.<br />
          <span className="text-white/40">10 seconds later I was buying it<br />for half the price.&quot;</span>
        </p>
        <p className="text-white/30 text-sm mt-8">— StyleFinder user</p>
      </section>

      {/* Reviews */}
      <section id="reviews" className="w-full bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-28">
          <p className="text-sm font-medium tracking-widest uppercase text-white/40 text-center mb-4">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight mb-20">
            They found it.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, text: "Screenshotted a hoodie from a reel and found the exact one for cheaper. This is the future.", name: "Alex M." },
              { stars: 5, text: "The AI is scary accurate. It matched a striped shirt perfectly — same pattern, same colors, everything.", name: "Sarah K." },
              { stars: 5, text: "Found a belt I saw on someone at a café. Took 10 seconds. This app is a must-have.", name: "Jordan R." },
              { stars: 5, text: "I use this every time I see something I like online. It always finds similar options at better prices.", name: "Emma L." },
              { stars: 5, text: "Way better than Google Lens for fashion. It actually understands what kind of garment you're looking for.", name: "Marcus T." },
              { stars: 5, text: "Saved me hundreds already. I find the style I want and pick the price that works for me.", name: "Priya S." },
            ].map((r, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-white/60 leading-relaxed mb-4 text-sm">&quot;{r.text}&quot;</p>
                <p className="text-sm font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
            </div>
            <span className="text-3xl font-black">4.9</span>
            <span className="text-white/30 text-sm">on the App Store</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Stop scrolling.<br />Start finding.
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto mb-10">
            Download StyleFinder for free and never wonder &quot;where can I buy that?&quot; again.
          </p>
          <a href="#" className="inline-block bg-white text-black font-bold px-10 py-5 rounded-full text-lg hover:bg-white/90 transition">
            Download for iOS
          </a>
          <p className="text-white/20 text-xs mt-6">Free to download &middot; No account required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-0.5">
            <span className="text-lg font-black">Style</span>
            <span className="text-lg font-light">Finder</span>
            <span className="text-lg font-black">.</span>
          </div>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition">Terms of Service</a>
            <a href="mailto:stylefinder.app@gmail.com" className="hover:text-white/60 transition">Contact</a>
          </div>
          <p className="text-xs text-white/20">&copy; 2026 StyleFinder. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
