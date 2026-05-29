import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Förderung 2024 – Zuschüsse für Heizung & Sanierung',
  description: 'Bis zu 70% Förderung für Wärmepumpen und Heizungstausch. Wir helfen bei KfW- und BAFA-Anträgen in Wetzlar und Umgebung.',
  path: '/foerderung',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
