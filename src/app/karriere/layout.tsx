import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Karriere – Jobs bei Batherm in Wetzlar',
  description: 'Stellenangebote bei Batherm Haustechnik Wetzlar. Anlagenmechaniker SHK und Ausbildungsplätze – jetzt bewerben!',
  path: '/karriere',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
