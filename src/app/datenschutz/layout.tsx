import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Batherm Haustechnik Wetzlar gemäß DSGVO.',
  path: '/datenschutz',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
