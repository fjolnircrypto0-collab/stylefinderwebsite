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
        <p className="text-sm text-[#1C1C1E]/40 mb-12">Effective Date: June 22, 2026 · Last Updated: June 22, 2026</p>

        <div className="prose prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[#1C1C1E]/60 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[#1C1C1E]/60 [&_ul]:leading-relaxed [&_li]:mb-1 [&_a]:text-[#1C1C1E] [&_a]:underline">

          <h2>1. Introduction</h2>
          <p>Welcome to StyleFindr (&quot;StyleFindr&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).</p>
          <p>StyleFindr is a clothing discovery application that allows users to upload or capture images of clothing items, identify those items using artificial intelligence, and discover visually similar products from retail and resale marketplaces.</p>
          <p>StyleFindr is operated by an Icelandic sole trader.</p>
          <p>Contact Email: <a href="mailto:support@stylefindr.app">support@stylefindr.app</a></p>
          <p>StyleFindr is distributed through Apple&apos;s App Store and is currently available exclusively on iOS devices.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, process, store, and protect personal information.</p>
          <p>By creating an account or using StyleFindr, you acknowledge that you have read and understood this Privacy Policy.</p>

          <h2>2. Data Controller</h2>
          <p>For purposes of the GDPR and applicable privacy laws, the data controller is:</p>
          <p>StyleFindr<br />Iceland<br />Email: <a href="mailto:support@stylefindr.app">support@stylefindr.app</a></p>

          <h2>3. Information We Collect</h2>

          <h3>A. Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Email address</li>
            <li>Password credentials (stored securely through authentication providers)</li>
            <li>Account identifiers</li>
          </ul>

          <h3>B. Images and User Content</h3>
          <p>We collect:</p>
          <ul>
            <li>Photos uploaded by users</li>
            <li>Screenshots uploaded by users</li>
            <li>Images captured within the app</li>
            <li>Cropped selections created by users</li>
            <li>Scan history</li>
            <li>Search results history</li>
            <li>Saved items</li>
            <li>Favorites and closet information</li>
          </ul>
          <p>Images may incidentally contain faces, individuals, background objects, and personal belongings.</p>
          <p>Users are responsible for ensuring they have the right to upload images they submit.</p>

          <h3>C. Device and Technical Information</h3>
          <p>We may collect:</p>
          <ul>
            <li>Device model</li>
            <li>Operating system version</li>
            <li>App version</li>
            <li>Language settings</li>
            <li>IP address</li>
            <li>Approximate location derived from IP</li>
            <li>Usage analytics</li>
            <li>Crash logs</li>
            <li>Diagnostic information</li>
          </ul>

          <h3>D. Preferences</h3>
          <p>We may collect:</p>
          <ul>
            <li>Style preferences</li>
            <li>Saved searches</li>
            <li>Favorite brands</li>
            <li>User customization settings</li>
          </ul>

          <h3>E. Subscription Information</h3>
          <p>We receive limited subscription status information from Apple and RevenueCat, including:</p>
          <ul>
            <li>Subscription status</li>
            <li>Product purchased</li>
            <li>Renewal dates</li>
            <li>Transaction identifiers</li>
          </ul>
          <p>We do not receive or store payment card details.</p>

          <h2>4. How We Use Your Information</h2>
          <p>We process personal data to:</p>
          <ul>
            <li>Create and manage accounts</li>
            <li>Authenticate users</li>
            <li>Process clothing scans</li>
            <li>Generate AI-powered clothing identification</li>
            <li>Generate visual similarity matches</li>
            <li>Search retail and resale marketplaces</li>
            <li>Store scan history</li>
            <li>Display saved items</li>
            <li>Improve search accuracy</li>
            <li>Prevent fraud and abuse</li>
            <li>Provide customer support</li>
            <li>Maintain platform security</li>
            <li>Comply with legal obligations</li>
            <li>Enforce our Terms</li>
          </ul>

          <h2>5. AI Processing</h2>
          <p>StyleFindr uses artificial intelligence and machine learning systems.</p>
          <p>Uploaded images may be processed by:</p>
          <ul>
            <li>OpenAI GPT-4o Vision</li>
            <li>Marqo / FashionCLIP</li>
            <li>Remove.bg</li>
          </ul>
          <p>These services analyze images to detect clothing items, extract visual attributes, generate embeddings, compare visual similarity, and improve matching quality.</p>
          <p>AI-generated results are probabilistic and may be inaccurate, incomplete, or incorrect. We do not guarantee identification accuracy.</p>

          <h2>6. Third-Party Service Providers</h2>
          <p>We use third-party processors and service providers including:</p>
          <ul>
            <li>OpenAI</li>
            <li>Marqo</li>
            <li>FashionCLIP</li>
            <li>Remove.bg</li>
            <li>SerpApi</li>
            <li>Supabase</li>
            <li>RevenueCat</li>
            <li>Apple App Store</li>
          </ul>
          <p>Search results may contain information sourced from Google Shopping, Google Lens, eBay, Depop, Grailed, and other retailers and marketplaces.</p>
          <p>Each third party operates under its own privacy practices.</p>

          <h2>7. Legal Bases for Processing (GDPR)</h2>
          <p>We process personal data under one or more of the following legal bases:</p>
          <ul>
            <li><strong>Contract:</strong> To provide StyleFindr services.</li>
            <li><strong>Legitimate Interests:</strong> To improve security, functionality, and service quality.</li>
            <li><strong>Consent:</strong> Where legally required.</li>
            <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations.</li>
          </ul>

          <h2>8. International Data Transfers</h2>
          <p>Your information may be processed outside Iceland, the EEA, the UK, or Switzerland.</p>
          <p>Because some providers may operate internationally, personal data may be transferred to countries with different privacy protections.</p>
          <p>Where required, we rely upon Standard Contractual Clauses (SCCs), adequacy decisions, and other lawful transfer mechanisms recognized under GDPR.</p>

          <h2>9. Data Retention</h2>
          <p>We retain data only as long as necessary. Retention periods may depend on active account status, legal obligations, security requirements, and dispute resolution needs.</p>
          <p>Upon account deletion, we will delete or anonymize personal information unless retention is legally required.</p>

          <h2>10. Data Security</h2>
          <p>We implement reasonable technical and organizational safeguards including encryption in transit, access controls, authentication protections, secure cloud infrastructure, and monitoring and logging.</p>
          <p>No system can be guaranteed 100% secure.</p>

          <h2>11. GDPR Rights</h2>
          <p>Users in the EEA, UK, Switzerland, and Iceland may have rights to access, correct, delete, restrict processing, object to processing, data portability, and withdraw consent.</p>
          <p>Requests may be sent to: <a href="mailto:support@stylefindr.app">support@stylefindr.app</a></p>
          <p>You also have the right to lodge a complaint with your local supervisory authority.</p>

          <h2>12. California Privacy Rights (CCPA/CPRA)</h2>
          <p>California residents may have rights to know what information is collected, access personal information, request deletion, correct inaccurate information, obtain a portable copy, and limit use of sensitive personal information where applicable.</p>
          <p>StyleFindr does not sell personal information. StyleFindr does not share personal information for cross-context behavioral advertising. No discrimination will occur for exercising privacy rights.</p>
          <p>Requests may be submitted to: <a href="mailto:support@stylefindr.app">support@stylefindr.app</a></p>

          <h2>13. Children&apos;s Privacy</h2>
          <p>StyleFindr is intended for a general audience and is rated 4+ on the Apple App Store. If you are under the age at which you can legally consent to data processing in your jurisdiction, you should use the Services with the involvement or consent of a parent or legal guardian.</p>
          <p>We do not knowingly collect personal information from children in violation of applicable law. If you believe that a child has provided personal information to us without appropriate consent, please contact us at <a href="mailto:support@stylefindr.app">support@stylefindr.app</a> and we will investigate and, where appropriate, delete the information.</p>

          <h2>14. Do Not Track</h2>
          <p>Because there is no consistent industry standard, StyleFindr does not currently respond to browser-based Do Not Track signals.</p>

          <h2>15. Changes to This Policy</h2>
          <p>We may update this Privacy Policy at any time. Material changes may be communicated through the app or other reasonable means. Continued use after updates constitutes acceptance of the revised Privacy Policy.</p>

          <h2>16. Contact</h2>
          <p>Questions regarding this Privacy Policy: <a href="mailto:support@stylefindr.app">support@stylefindr.app</a></p>
        </div>
      </article>
    </div>
  );
}
