import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Über uns – Meisterbetrieb seit 2025',
  description: 'Lernen Sie Batherm Haustechnik kennen. Meisterbetrieb für Sanitär und Heizung in Wetzlar – zuverlässig, kompetent, persönlich.',
  path: '/ueber-uns',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
