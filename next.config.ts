import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared finds and the app link: stylefindr.app/i/?s=… shows the static
  // page in public/i/index.html (the find, its products, and the App Store
  // button).
  async rewrites() {
    return [{ source: "/i", destination: "/i/index.html" }];
  },
  // stylefindr.app/open (email buttons): the /i page with from=open, which tries the app, then the App Store.
  // Not an app link itself until the app has an /open screen; email buttons use stylefindr.app/i?from=email, which
  // opens the app straight away when the iPhone allows it.
  async redirects() {
    return [{ source: "/open", destination: "/i?from=open", permanent: false }];
  },
  // Universal links: iOS reads this file to open /i links in the app.
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
