import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Leistungen – Sanitär, Heizung & Klima Wetzlar',
  description: 'Unser Leistungsspektrum: Badsanierung, Wärmepumpen, Klimaanlagen, Smart Home und mehr. Meisterbetrieb in Wetzlar und Umgebung.',
  path: '/leistungen',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
