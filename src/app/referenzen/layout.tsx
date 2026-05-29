import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Referenzen & Projekte – Unsere Arbeiten',
  description: 'Abgeschlossene Projekte von Batherm Haustechnik: Badsanierungen, Heizungsinstallationen und mehr in Wetzlar und Umgebung.',
  path: '/referenzen',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
