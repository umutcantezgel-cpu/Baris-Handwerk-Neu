import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'Allgemeine Geschäftsbedingungen der Batherm Haustechnik für handwerkliche Leistungen in Sanitär, Heizung und Klimatechnik.',
  path: '/agb',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
