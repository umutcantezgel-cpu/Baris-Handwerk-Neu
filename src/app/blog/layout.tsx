import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Ratgeber zu Heizung, Sanitär & Solar',
  description: 'Expertenwissen rund um Heizung, Sanitär und Solartechnik in Wetzlar. Aktuelle Tipps zu Förderung, Wartung und Energiesparen.',
  path: '/blog',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
