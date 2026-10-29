import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared finds and the app link: stylefindr.app/i/?s=… shows the static
  // page in public/i/index.html (the find, its products, and the App Store
  // button).
  async rewrites() {
    return [{ source: "/i", destination: "/i/index.html" }];
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
