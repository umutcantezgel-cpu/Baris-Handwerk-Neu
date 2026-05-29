import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB der Batherm Haustechnik Wetzlar. Allgemeine Geschäftsbedingungen für Sanitär- und Heizungsarbeiten.',
  path: '/agb',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
