import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Leistungen – Sanitär, Heizung & Klima Wetzlar',
  description: 'Unser Leistungsspektrum: Badsanierung, Wärmepumpen, Klimaanlagen, Smart Home und mehr. Meisterbetrieb in Wetzlar und Umgebung.',
  path: '/leistungen',
});

const offerCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': 'https://www.batherm.de/leistungen/#catalog',
  'name': 'Leistungen von Batherm Haustechnik',
  'provider': { '@id': 'https://www.batherm.de/#organization' },
  'itemListElement': [
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Sanitärtechnik',
        'url': 'https://www.batherm.de/leistungen/sanitaer',
      },
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Heizungstechnik',
        'url': 'https://www.batherm.de/leistungen/heizung',
      },
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Klimatechnik',
        'url': 'https://www.batherm.de/leistungen/klima',
      },
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Wartung & Service',
        'url': 'https://www.batherm.de/leistungen/wartung',
      },
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Smart Home',
        'url': 'https://www.batherm.de/leistungen/smart-home',
      },
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Wasseraufbereitung',
        'url': 'https://www.batherm.de/leistungen/wasseraufbereitung',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      {children}
    </>
  );
}
