import type { Metadata } from 'next';

// The owner's overview: never indexed by search engines.
export const metadata: Metadata = {
  title: 'StyleFinder creators',
  robots: { index: false, follow: false },
};

export default function CreatorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
