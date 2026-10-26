import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support · StyleFinder",
  description: "Get help with StyleFinder: contact us, manage your subscription, restore purchases, and delete your data.",
};

const EMAIL = "support@stylefindr.app";

// Questions people ask most, with the exact steps in the app.
const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: "How does StyleFinder work?",
    a: (
      <>
        <p>Take a photo of an outfit (or pick one from your photos), crop around what you like, and tap the items you want to find. StyleFinder searches retailers and resale marketplaces and shows you the closest matches and cheaper alternatives. Tap a product to open it in the store.</p>
      </>
    ),
  },
  {
    q: "My results aren't quite right. What can I do?",
    a: (
      <>
        <p>Results come from AI, so they&apos;re not always perfect. These help the most:</p>
        <ul>
          <li>Use a clear, well-lit photo where each item is fully visible.</li>
          <li>Crop around the outfit, leaving out busy backgrounds and other people.</li>
          <li>Tap <strong>+</strong> on a result to see all the matches we found for that item.</li>
        </ul>
        <p>If a result is clearly wrong, email us a screenshot. It really helps us improve.</p>
      </>
    ),
  },
  {
    q: "How do I cancel my subscription?",
    a: (
      <>
        <p>Subscriptions are managed by Apple. On your iPhone, open <strong>Settings</strong>, tap your name, then <strong>Subscriptions</strong> → <strong>StyleFinder</strong> → <strong>Cancel Subscription</strong>. You can also get there in the app: open your <strong>Closet</strong>, then <strong>Account</strong> → <strong>Manage Subscription</strong>.</p>
        <p>Cancel at least 24 hours before your renewal (or before your free trial ends) to avoid being charged. You keep Premium until the end of the period you&apos;ve paid for. Deleting the app doesn&apos;t cancel your subscription.</p>
      </>
    ),
  },
  {
    q: "How does the free trial work?",
    a: (
      <p>When a free trial is offered, its length is shown before you start it. If you don&apos;t cancel at least 24 hours before it ends, your subscription begins and you&apos;re charged for the plan you chose. If you allow notifications, StyleFinder reminds you before your trial ends.</p>
    ),
  },
  {
    q: "I already paid. How do I get Premium back?",
    a: (
      <p>Make sure you&apos;re signed in to the App Store with the same Apple ID you used to subscribe, then open StyleFinder and tap <strong>Restore</strong> at the bottom of the subscription screen. Still not working? Email us and we&apos;ll sort it out.</p>
    ),
  },
  {
    q: "How do I get a refund?",
    a: (
      <p>Payments go through Apple, so refunds are handled by Apple. Request one at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. We can&apos;t issue refunds ourselves, but we&apos;re happy to help if something went wrong.</p>
    ),
  },
  {
    q: "Where are the items I saved?",
    a: (
      <p>In your <strong>Closet</strong>: on the home screen, pull up the <strong>My Closet</strong> tray. <strong>Favorites</strong> has everything you hearted and <strong>Recently Scanned</strong> has your past scans. They&apos;re stored on your phone, so deleting the app removes them.</p>
    ),
  },
  {
    q: "What happens to my photos?",
    a: (
      <p>Only the part of the photo you crop is sent to find your clothes, to our servers and the AI and search services that identify the items. It isn&apos;t used to train AI and is deleted as soon as the scan is done. The only exception is a find you choose to share. All the details are in our <a href="/privacy">Privacy Policy</a>.</p>
    ),
  },
  {
    q: "How do I delete my data?",
    a: (
      <p>In the app, open your <strong>Closet</strong>, then <strong>Account</strong> → <strong>Delete Account Data</strong>. This deletes your account and everything linked to it on our servers, plus everything stored on your phone. If you gave us your email, write to us and we&apos;ll delete that too.</p>
    ),
  },
];

export default function Support() {
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
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Support</h1>
        <p className="text-sm text-[#1C1C1E]/40 mb-10">We&apos;re here to help.</p>

        {/* Contact */}
        <div className="rounded-3xl bg-white border border-black/5 p-6 md:p-8 mb-14">
          <h2 className="text-xl font-black tracking-tight mb-2">Contact us</h2>
          <p className="text-[#1C1C1E]/60 leading-relaxed mb-5">Questions, problems, or ideas? Email the founders directly. We usually reply within 24 hours.</p>
          <a
            href={`mailto:${EMAIL}?subject=StyleFinder%20support`}
            className="inline-flex items-center justify-center rounded-full bg-[#1C1C1E] text-white text-sm font-bold px-6 h-12 hover:opacity-90 transition">
            {EMAIL}
          </a>
          <p className="text-xs text-[#1C1C1E]/40 mt-4">It helps to include your iPhone model, iOS version, and a screenshot if something looks wrong.</p>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-black tracking-tight mb-4">Frequently asked questions</h2>
        <div className="divide-y divide-black/5 border-y border-black/5">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                {q}
                <span className="text-[#1C1C1E]/30 text-xl leading-none transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 text-[#1C1C1E]/60 leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1 [&_a]:text-[#1C1C1E] [&_a]:underline [&_strong]:text-[#1C1C1E]/80">
                {a}
              </div>
            </details>
          ))}
        </div>

        <p className="text-sm text-[#1C1C1E]/40 mt-12">
          See also our <a href="/privacy" className="underline hover:text-[#1C1C1E]">Privacy Policy</a> and <a href="/terms" className="underline hover:text-[#1C1C1E]">Terms of Use</a>.
        </p>
      </article>
    </div>
  );
}
