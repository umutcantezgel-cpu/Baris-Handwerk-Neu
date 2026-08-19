import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildAboutPageNode, buildBreadcrumbNode, SITE_URL } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Über uns – Meisterbetrieb in Wetzlar',
  description: 'Lernen Sie Batherm Haustechnik kennen. Ihr Meisterbetrieb für Sanitär und Heizung in Wetzlar – zuverlässig, kompetent, persönlich.',
  path: '/ueber-uns',
});

const pageUrl = `${SITE_URL}/ueber-uns`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Über uns', path: '/ueber-uns' },
];

const aboutSchema = buildGraph([
  buildAboutPageNode({
    url: pageUrl,
    name: 'Über Batherm Haustechnik – Ihr Meisterbetrieb in Wetzlar',
    description:
      'Lernen Sie Batherm Haustechnik und Inhaber Baris Aydin kennen. Ihr Meisterbetrieb für Sanitär, Heizung und Klimatechnik in Wetzlar.',
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={aboutSchema} />
      {children}
    </>
  );
}

