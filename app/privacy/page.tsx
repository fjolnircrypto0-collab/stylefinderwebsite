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
        <p className="text-sm text-[#1C1C1E]/40 mb-12">Effective Date: October 26, 2026 · Last Updated: October 26, 2026</p>

        <div className="prose prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[#1C1C1E]/60 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[#1C1C1E]/60 [&_ul]:leading-relaxed [&_li]:mb-1 [&_a]:text-[#1C1C1E] [&_a]:underline">

          <h2>1. Who We Are</h2>
          <p>This Privacy Policy explains how StyleFinder (&quot;we&quot;, &quot;us&quot;) collects, uses, and shares information when you use the StyleFinder app and the stylefindr.app website. StyleFinder is operated by a sole trader in Iceland, who is the data controller for your personal data. You don&apos;t need to sign up to use StyleFinder: to run invites and sharing, the app creates an anonymous account for your device, with no name, email, or password. Signing in with Apple, Google, or your email is optional.</p>

          <h2>2. Summary</h2>
          <ul>
            <li>We use your photos only to find the clothes in them, and we don&apos;t keep them.</li>
            <li>We don&apos;t sell your data, show ads, or track you across other apps and websites.</li>
            <li>We don&apos;t use your photos to train AI models, and the AI providers we use don&apos;t either.</li>
            <li>Most of what you tell us (your answers, favorites, and scan history) stays on your phone.</li>
            <li>You can delete your data in the app at any time.</li>
          </ul>

          <h2>3. Photos You Scan and AI</h2>
          <p>When you scan, only the part of the photo you crop is sent to our servers. To find the clothes in it, we share that crop with these AI and search services:</p>
          <ul>
            <li>OpenAI: identifies and describes each item of clothing.</li>
            <li>Google Lens and Google Shopping (through our search provider, SearchApi or SerpApi): finds visually similar products. So Google can see it, the crop is stored in a private storage bucket and shared through a link that expires after 15 minutes. It is deleted as soon as the search for that item finishes.</li>
            <li>Google Gemini (through OpenRouter): compares the crop with candidate products to rank the closest matches.</li>
            <li>Marqo FashionCLIP: a fashion image model we run ourselves to compare how similar products look.</li>
          </ul>
          <p>These providers process the crop only to return results to us. Under their terms for business customers they don&apos;t use it to train their models; some keep it for a short time (for example, OpenAI for up to 30 days) only to prevent abuse. We don&apos;t keep your photos after the scan, unless you choose to share a find (see section 4). The app asks for your permission before your first scan, and you can choose not to scan at all.</p>

          <h2>4. Other Information We Process</h2>
          <ul>
            <li>Onboarding answers: your first name, style, fit, brands, budget, and similar answers you give during setup are stored on your device. Your height and weight never leave your device.</li>
          </ul>
          <ul>
            <li>Favorites and recent scans: stored only on your device.</li>
          </ul>
          <ul>
            <li>Email (optional): if you choose to &quot;Save your progress&quot;, we store your email together with your first name and style-profile answers (style, favorite brands, budget, and how you heard about us) so your profile is saved, and to send you occasional style tips and updates. Every email includes a way to unsubscribe.</li>
          </ul>
          <ul>
            <li>Sign-in (optional): if you sign in with Apple or Google, we receive your email address (Apple may give us a private relay address instead) and store it, along with your style-profile answers, with your account. We don&apos;t ask Apple or Google for anything else.</li>
          </ul>
          <ul>
            <li>Anonymous account: a random ID the app creates so it can give you an invite link and know if you joined through a friend&apos;s invite. It is also attached to your subscription record at RevenueCat so we can confirm when an invited friend starts a subscription or free trial.</li>
          </ul>
          <ul>
            <li>Invites: your invite code, which friends joined through it, and whether the App Store confirmed they started a subscription or free trial. Your friends see none of your information, and you see only counts and dates, not who they are. We also record anonymous counts of invite links being opened and shared, without IP addresses or device details.</li>
          </ul>
          <ul>
            <li>Shared finds: only when you tap Share on a find, we publish that card (your scanned photo and the matched products) at an unlisted link so the people you send it to can see it. Anyone with the link can view it. It&apos;s removed after 180 days, or when you delete your data.</li>
          </ul>
          <ul>
            <li>Subscription status: handled by Apple and RevenueCat using an anonymous ID. We never see or store your payment card details.</li>
          </ul>
          <ul>
            <li>Scan records: for each scan we keep a technical record (time, country, how many items were found, how long it took, and errors), but never the photo. We keep these for up to 12 months to keep the service working well.</li>
          </ul>
          <ul>
            <li>Search results: we cache product results for a scan (not the photo) for up to 24 hours to make repeat searches faster.</li>
          </ul>

          <h2>5. How We Use It</h2>
          <p>We use this information only to provide and improve StyleFinder: finding the clothes in your scans and matching products and prices, personalising results to the preferences you gave, running invites and shared finds, managing your subscription, sending emails you agreed to, and keeping the service secure and working. We process it because it&apos;s needed to provide the service you ask for, or, for optional features like emails, because you agreed to it.</p>

          <h2>6. Service Providers</h2>
          <p>We share data only with these providers, and only as needed to run StyleFinder:</p>
          <ul>
            <li>OpenAI, Google (Lens, Shopping, and Gemini), SearchApi or SerpApi, and OpenRouter: see section 3</li>
            <li>Supabase: our backend, database, and the short-lived storage for scan crops</li>
            <li>Microsoft Azure: hosting for our scanning service</li>
            <li>RevenueCat and Apple: subscriptions and payments</li>
            <li>Apple and Google: optional sign-in</li>
            <li>CJ Affiliate and partner retailers: product listings and links (they receive no personal data from us)</li>
          </ul>
          <p>Each provider handles data under its own terms and privacy policy and is bound to protect it. When you open a product, you leave StyleFinder and that retailer&apos;s privacy policy applies.</p>

          <h2>7. What We Don&apos;t Do</h2>
          <p>We don&apos;t sell or rent your personal information. We don&apos;t show ads, use advertising identifiers, or track you across other companies&apos; apps and websites. We don&apos;t use third-party analytics.</p>

          <h2>8. Affiliate Links</h2>
          <p>Some product links are affiliate links. If you buy something after tapping one, we may earn a commission from the retailer at no extra cost to you. This doesn&apos;t change the price you pay or which results we show.</p>

          <h2>9. Notifications</h2>
          <p>If you allow notifications, we use them only to remind you before your free trial ends. You can turn them off at any time in your device Settings.</p>

          <h2>10. How Long We Keep It</h2>
          <ul>
            <li>Scan crops: deleted as soon as the search finishes (usually within minutes)</li>
            <li>Scan records (no photos): up to 12 months</li>
            <li>Search results: up to 24 hours</li>
            <li>Shared finds: 180 days, or until you delete your data</li>
            <li>Email and style profile: until you ask us to delete them or unsubscribe</li>
            <li>Anonymous account and invites: until you delete your data</li>
            <li>Everything on your device: until you delete it in the app or delete the app</li>
          </ul>

          <h2>11. Deleting Your Data</h2>
          <p>&quot;Delete Account Data&quot; in the app (Closet → Account) deletes your anonymous account and everything linked to it on our servers (invite code, invite history, and shared finds), plus everything stored on your device (onboarding answers, favorites, and recent scans). Deleting the app removes the data on your device. If you gave us your email, contact us and we&apos;ll delete it and the style-profile answers saved with it. To cancel a subscription, use your App Store settings.</p>

          <h2>12. Your Rights</h2>
          <p>Depending on where you live (for example the EEA, UK, or California), you may have the right to access, correct, delete, or get a copy of your personal data, to object to or restrict how we use it, and to withdraw consent at any time. To make a request, contact us at <a href="mailto:hello@stylefindr.app">hello@stylefindr.app</a>. We&apos;ll respond within 30 days. If you&apos;re in the EEA or UK, you can also complain to your local data protection authority.</p>

          <h2>13. International Transfers</h2>
          <p>Our providers may process data in countries outside your own, including the United States. Where the law requires, these transfers are protected by safeguards such as the European Commission&apos;s Standard Contractual Clauses.</p>

          <h2>14. Security</h2>
          <p>We protect your data with encryption in transit, access controls, and private storage, and we keep as little as we can. No system is perfectly secure, but we work to keep your information safe and will tell you if a breach affects you where the law requires.</p>

          <h2>15. Children</h2>
          <p>StyleFinder is not directed at children under 13, and we don&apos;t knowingly collect personal data from them. If you believe a child has given us personal data, contact us and we&apos;ll delete it.</p>

          <h2>16. Changes</h2>
          <p>We may update this policy. When we make material changes we&apos;ll update the effective date and, where appropriate, let you know in the app.</p>

          <h2>17. Contact</h2>
          <p>Questions about this policy or your data: <a href="mailto:hello@stylefindr.app">hello@stylefindr.app</a></p>

        </div>
      </article>
    </div>
  );
}
