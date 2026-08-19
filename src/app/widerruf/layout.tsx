import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Widerrufsbelehrung & Musterformular',
  description: 'Widerrufsbelehrung und Muster-Widerrufsformular für Verbraucher bei Beauftragung von Leistungen der Batherm Haustechnik.',
  path: '/widerruf',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
