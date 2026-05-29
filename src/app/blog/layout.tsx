import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Ratgeber & Blog – Heizung, Sanitär & Energie',
  description: 'Expertenwissen rund um Heizung, Sanitär und Solartechnik in Wetzlar. Aktuelle Tipps zu Förderung, Wartung und Energiesparen.',
  path: '/blog',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
