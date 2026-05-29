import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Beratungstermin buchen – Kostenlos & Unverbindlich',
  description: 'Buchen Sie eine kostenlose Beratung bei Batherm Haustechnik Wetzlar. Persönlich, kompetent und unverbindlich.',
  path: '/beratung',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
