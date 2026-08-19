import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Impressum & rechtliche Angaben',
  description: 'Impressum und gesetzliche Anbieterkennzeichnung der Batherm Haustechnik, Linsenbergstrasse 9, 35586 Wetzlar. Inhaber Baris Aydin.',
  path: '/impressum',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
