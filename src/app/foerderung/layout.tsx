import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Förderung & Zuschüsse für Heizung',
  description: 'Bis zu 70% Förderung für Wärmepumpen und Heizungstausch. Wir helfen bei KfW- und BAFA-Anträgen in Wetzlar und Umgebung.',
  path: '/foerderung',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
