import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Energieberatung Wetzlar – Sanierung & Effizienz',
  description: 'Professionelle Energieberatung in Wetzlar. Sanierungsfahrplan, Energieausweis und Fördermittelberatung vom Meisterbetrieb.',
  path: '/energieberatung',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
