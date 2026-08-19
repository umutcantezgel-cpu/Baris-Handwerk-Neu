import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Karriere & Jobs im SHK-Handwerk',
  description: 'Werden Sie Teil unseres Teams bei Batherm Haustechnik in Wetzlar. Aktuelle Jobs für Anlagenmechaniker SHK – jetzt unkompliziert bewerben!',
  path: '/karriere',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
