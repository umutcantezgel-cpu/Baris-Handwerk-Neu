import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung der Batherm Haustechnik, Linsenbergstrasse 9, 35586 Wetzlar.',
  path: '/impressum',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
