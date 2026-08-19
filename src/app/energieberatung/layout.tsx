import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Energieberatung für Sanierung & Effizienz',
  description: 'Professionelle Energieberatung in Wetzlar. Individueller Sanierungsfahrplan, Energieausweis und Fördermittelberatung vom Meister.',
  path: '/energieberatung',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
