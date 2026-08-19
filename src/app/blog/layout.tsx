import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildBreadcrumbNode, buildWebPageNode, SITE_URL, ORG_ID } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Ratgeber zu Heizung, Sanitär & Solar',
  description: 'Expertenwissen rund um Heizung, Sanitär und Solartechnik in Wetzlar. Aktuelle Tipps zu Förderung, Wartung und Energiesparen.',
  path: '/blog',
});

const pageUrl = `${SITE_URL}/blog`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Ratgeber & Blog', path: '/blog' },
];

const blogSchema = buildGraph([
  buildWebPageNode({
    url: pageUrl,
    name: 'Haustechnik Ratgeber & Blog | Batherm Haustechnik',
    description:
      'Fundierte Fachartikel zu Wärmepumpen, Badsanierung, Heizungswartung und Fördermitteln vom Meisterbetrieb in Wetzlar.',
    breadcrumbItems: breadcrumbs,
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
  {
    '@type': 'Blog',
    '@id': `${pageUrl}#blog`,
    name: 'Batherm Haustechnik Ratgeber & Insights',
    description: 'Fachwissen, Anleitungen und Ratgeber rund um Sanitär, Heizung und Klimatechnik.',
    publisher: { '@id': ORG_ID },
    url: pageUrl,
  },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={blogSchema} />
      {children}
    </>
  );
}

