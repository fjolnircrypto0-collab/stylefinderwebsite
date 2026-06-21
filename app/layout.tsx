import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StyleFinder — Spot it. Crop it. Shop it.",
  description: "See something you like? Scan any clothing item and instantly find where to buy it. Same style, different price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
