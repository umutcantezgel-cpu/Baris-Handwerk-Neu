import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import TrustSection from '@/components/sections/TrustSection';
import PartnerLogos from '@/components/sections/PartnerLogos';
import LatestPosts from '@/components/sections/LatestPosts';
import PageWrapper from '@/components/common/PageWrapper';

import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildWebPageNode, SITE_URL } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Sanitär, Heizung & Solar in Wetzlar',
  description: 'Ihr Meisterbetrieb für Sanitär, Heizung, Solar und Wärmepumpen in Wetzlar. 24h Notdienst, faire Preise & persönliche Beratung. Jetzt anfragen!',
  path: '/',
});

const homeGraph = buildGraph([
  buildWebPageNode({
    url: `${SITE_URL}/`,
    name: 'Batherm Haustechnik | Meisterbetrieb für Sanitär, Heizung & Solar in Wetzlar',
    description:
      'Ihr Meisterbetrieb für Sanitär, Heizung, Wärmepumpen, Solartechnik und Badsanierung in Wetzlar, Gießen und ganz Mittelhessen.',
  }),
  {
    '@type': 'Organization',
    '@id': 'https://www.codayweb.de/#organization',
    name: 'Coday Web Agency',
    url: 'https://www.codayweb.de/',
    description: 'Experten für Webdesign und GEO in Hessen',
  },
]);

export default function HomePage() {
  return (
    <PageWrapper className="relative min-h-screen">
      <JsonLd schema={homeGraph} />
      <Hero
        title="Meisterhafte Installationen für Ihr Zuhause"
        subtitle="Batherm Haustechnik ist Ihr zuverlässiger Meisterbetrieb für Sanitär, Heizung, Solar und moderne Klimatechnik in Wetzlar & Region – von der Fachberatung bis zur nachhaltigen Installation."
        backgroundImage="/images/uploads/extra-07.webp"
        primaryCtaText="Angebot anfordern"
        primaryCtaLink="/kontakt"
        secondaryCtaText="Leistungen ansehen"
        secondaryCtaLink="/leistungen"
      />
      <TrustSection />
      <Services />
      <PartnerLogos />
      <Testimonials />
      <LatestPosts />
      <CTA />
    </PageWrapper>
  );
}
