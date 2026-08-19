import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildBreadcrumbNode, buildWebPageNode, SITE_URL } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Widerrufsbelehrung & Musterformular',
  description: 'Widerrufsbelehrung und Muster-Widerrufsformular für Verbraucher bei Beauftragung von Leistungen der Batherm Haustechnik.',
  path: '/widerruf',
});

const pageUrl = `${SITE_URL}/widerruf`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Widerrufsbelehrung', path: '/widerruf' },
];

const widerrufSchema = buildGraph([
  buildWebPageNode({
    url: pageUrl,
    name: 'Widerrufsbelehrung & Musterformular | Batherm Haustechnik',
    description: 'Gesetzliche Widerrufsbelehrung und Muster-Widerrufsformular für Kunden der Batherm Haustechnik.',
    breadcrumbItems: breadcrumbs,
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={widerrufSchema} />
      {children}
    </>
  );
}

