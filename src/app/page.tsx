import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import TrustSection from '@/components/sections/TrustSection';
import PartnerLogos from '@/components/sections/PartnerLogos';
import LatestPosts from '@/components/sections/LatestPosts';
import PageWrapper from '@/components/common/PageWrapper';

// Keep the metadata
import { createMetadata } from '@/lib/metadata';
export const metadata = createMetadata({
  title: 'Sanitär, Heizung & Solar in Wetzlar',
  description: 'Ihr Meisterbetrieb für Sanitär, Heizung, Solar und Wärmepumpen in Wetzlar. 24h Notdienst, faire Preise & persönliche Beratung. Jetzt anfragen!',
  path: '/',
});

const agencySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.codayweb.de/#organization",
      "name": "Coday Web Agency",
      "url": "https://www.codayweb.de/",
      "description": "Experten für Webdesign und GEO in Hessen",
      "sameAs": [
        "https://www.codayweb.de/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.batherm.de/#website",
      "creator": {
        "@id": "https://www.codayweb.de/#organization"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <PageWrapper className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
      <Hero
        title="Meisterhafte Installationen für Ihr Zuhause"
        subtitle="Wir verbinden handwerkliche Präzision mit modernster Technik für Sanitär, Heizung und Klima."
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
