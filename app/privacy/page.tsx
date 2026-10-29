export default function Privacy() {
  return (
    <div className="bg-[#F7F7F2] text-[#1C1C1E] min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F7F7F2]/80 border-b border-black/5">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-baseline">
            <span className="text-xl font-black tracking-tight">Style</span>
            <span className="text-xl font-light tracking-tight">Findr</span>
            <span className="text-xl font-black">.</span>
          </a>
          <a href="/" className="text-sm text-[#1C1C1E]/40 hover:text-[#1C1C1E] transition">← Back</a>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#1C1C1E]/40 mb-12">Effective Date: October 28, 2026 · Last Updated: October 28, 2026</p>

        <div className="prose prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[#1C1C1E]/60 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[#1C1C1E]/60 [&_ul]:leading-relaxed [&_li]:mb-1 [&_a]:text-[#1C1C1E] [&_a]:underline">

          <h2>1. Who We Are</h2>
          <p>This Privacy Policy explains how StyleFinder (&quot;we&quot;, &quot;us&quot;) handles information when you use the StyleFinder app and the stylefindr.app website. StyleFinder is operated by a sole trader in Iceland, who is responsible for your personal data. You don&apos;t need an account to use StyleFinder.</p>

          <h2>2. Summary</h2>
          <ul>
            <li>We use your photos only to find the clothes in them, and we don&apos;t keep them.</li>
            <li>We don&apos;t sell your data, show ads, or track you across other apps and websites.</li>
            <li>Your photos are never used to train AI models.</li>
            <li>Most of what you tell us (your answers, favorites, and scan history) stays on your phone.</li>
            <li>You can delete your data in the app at any time.</li>
          </ul>

          <h2>3. Photos You Scan</h2>
          <p>When you scan, only the part of the photo you crop is sent to our servers and to these third-party AI and image-search services, which identify the clothes and find matching products: • OpenAI (GPT models): finds and describes the clothes in your photo. • Google: Google Lens image search (through SearchApi) finds matching products, and Gemini (through OpenRouter) compares the matches with your photo. They process it only to return results to us and don&apos;t use it to train their models. We ask for your permission before your first scan. We don&apos;t keep your photos after the scan, unless you choose to share a find.</p>

          <h2>4. Information We Process</h2>
          <ul>
            <li>On your device: your onboarding answers (such as your first name, style, fit, brands, and budget), favorites, and recent scans. Your height and weight never leave your device.</li>
            <li>Anonymous ID: a random ID the app creates to link your subscription status and shared finds.</li>
            <li>Shared finds: when you tap Share, that card (your scanned photo and matched products) is available at a private link for 180 days, or until you delete your data.</li>
            <li>Subscriptions: handled by Apple and RevenueCat. We never see your payment details.</li>
            <li>Cancellation feedback: if you cancel, we ask why. We keep the reason you pick and what you write (with your plan and language, not your name) to improve StyleFinder.</li>
            <li>Technical records: basic, photo-free records of scans (such as time and errors) to keep the service working.</li>
          </ul>

          <h2>5. How We Use It</h2>
          <p>Only to provide and improve StyleFinder: finding the clothes in your scans, matching products and prices, personalising results, running shared finds, managing your subscription, and keeping the service secure.</p>

          <h2>6. Who We Share It With</h2>
          <p>Only with service providers that help us run StyleFinder, and only as needed to provide the service: Hetzner (our scan servers, in Finland), Supabase (database and storage), OpenAI, Google, SearchApi and OpenRouter (AI and image search, see section 3), and Apple and RevenueCat (subscriptions). They&apos;re bound to protect your data and may not use it for anything else. Some may process data outside your country, with legal safeguards where required. We don&apos;t sell or rent your personal information, show ads, or use third-party analytics. When you open a product, you leave StyleFinder and that retailer&apos;s privacy policy applies.</p>

          <h2>7. Notifications</h2>
          <p>If you allow notifications, we use them only to remind you before your free trial ends. You can turn them off in your device Settings.</p>

          <h2>8. How Long We Keep It</h2>
          <p>Scan photos are deleted as soon as the scan is done. Shared finds are kept for 180 days. Everything else is kept only as long as it&apos;s needed to run the service, or until you delete your data.</p>

          <h2>9. Deleting Your Data</h2>
          <p>&quot;Delete Account Data&quot; in the app (Closet → Account) deletes your data on our servers and on your device. Deleting the app or your data doesn&apos;t cancel a subscription; do that in your App Store settings.</p>

          <h2>10. Your Rights</h2>
          <p>Depending on where you live, you may have the right to access, correct, delete, or get a copy of your data, to object to how we use it, and to withdraw consent. Contact us at <a href="mailto:hello@stylefindr.app">hello@stylefindr.app</a> and we&apos;ll respond within 30 days. In the EEA or UK, you can also contact your local data protection authority.</p>

          <h2>11. Children</h2>
          <p>StyleFinder is for everyone. If you&apos;re under 13 (or the minimum age where you live), please use it with a parent&apos;s or guardian&apos;s permission. If you believe a child has given us personal data without that permission, contact us and we&apos;ll delete it.</p>

          <h2>12. Security</h2>
          <p>We protect your data with encryption in transit, access controls, and private storage, and we keep as little as we can.</p>

          <h2>13. Changes</h2>
          <p>We may update this policy. When we make important changes, we&apos;ll update the date above and, where appropriate, let you know in the app.</p>

          <h2>14. Contact</h2>
          <p>Questions about this policy or your data: <a href="mailto:hello@stylefindr.app">hello@stylefindr.app</a></p>

        </div>
      </article>
    </div>
  );
}
