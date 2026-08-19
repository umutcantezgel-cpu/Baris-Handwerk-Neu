import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Kontakt – Ihr Meisterbetrieb in Wetzlar',
  description: 'Kontaktieren Sie Batherm Haustechnik in Wetzlar. Sanitär, Heizung & Klimatechnik – kostenlose Beratung und schnelle Terminvergabe.',
  path: '/kontakt',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
