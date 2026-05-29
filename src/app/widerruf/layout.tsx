import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Widerrufsbelehrung',
  description: 'Widerrufsbelehrung der Batherm Haustechnik Wetzlar.',
  path: '/widerruf',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
