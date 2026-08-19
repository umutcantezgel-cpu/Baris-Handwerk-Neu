import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildBreadcrumbNode, buildWebPageNode, SITE_URL, ORG_ID } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Referenzen & Projekte unserer Arbeiten',
  description: 'Abgeschlossene Projekte von Batherm Haustechnik: Badsanierungen, Heizungsinstallationen und Solaranlagen in Wetzlar und Umgebung.',
  path: '/referenzen',
});

const pageUrl = `${SITE_URL}/referenzen`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Referenzen', path: '/referenzen' },
];

const referenzenSchema = buildGraph([
  buildWebPageNode({
    url: pageUrl,
    name: 'Referenzen & Meisterprojekte | Batherm Haustechnik Wetzlar',
    description:
      'Erfolgreich umgesetzte Projekte für Sanitär, Badsanierung, Wärmepumpen und Klimatechnik in Wetzlar und Region.',
    breadcrumbItems: breadcrumbs,
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
  {
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'Batherm Haustechnik Projekt-Referenzen',
    description: 'Bildergalerie und Dokumentation von Meisterarbeiten in Mittelhessen.',
    publisher: { '@id': ORG_ID },
  },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={referenzenSchema} />
      {children}
    </>
  );
}

