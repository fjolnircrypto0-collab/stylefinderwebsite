import type { Metadata } from 'next';

// A creator's private page: never indexed by search engines.
export const metadata: Metadata = {
  title: 'Your StyleFinder posts',
  robots: { index: false, follow: false },
};

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
