import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildContactPageNode, buildBreadcrumbNode, SITE_URL } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Kontakt – Ihr Meisterbetrieb in Wetzlar',
  description: 'Kontaktieren Sie Batherm Haustechnik in Wetzlar. Sanitär, Heizung & Klimatechnik – kostenlose Beratung und schnelle Terminvergabe.',
  path: '/kontakt',
});

const pageUrl = `${SITE_URL}/kontakt`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Kontakt', path: '/kontakt' },
];

const contactSchema = buildGraph([
  buildContactPageNode({
    url: pageUrl,
    name: 'Kontakt aufnehmen | Batherm Haustechnik Wetzlar',
    description:
      'Kontaktieren Sie Ihren Meisterbetrieb Batherm Haustechnik für Sanitär, Heizung und Klimatechnik in Wetzlar und Mittelhessen.',
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={contactSchema} />
      {children}
    </>
  );
}

