import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'FAQ – Häufige Fragen zu Heizung & Sanitär',
  description: 'Antworten auf häufige Fragen rund um Heizung, Sanitär, Wärmepumpen und Förderung. Ihr Meisterbetrieb in Wetzlar berät Sie.',
  path: '/faq',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
