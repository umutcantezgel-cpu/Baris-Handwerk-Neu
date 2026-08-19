import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Kostenlose Fachberatung buchen',
  description: 'Buchen Sie einen kostenlosen Beratungstermin bei Batherm Haustechnik Wetzlar. Persönlich, kompetent und unverbindlich vor Ort oder online.',
  path: '/beratung',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
