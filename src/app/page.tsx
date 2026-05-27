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
  description: 'Ihr verlässlicher Partner für Sanitär, Heizung und Solartechnik im Raum Wetzlar. 30+ Jahre Erfahrung, 24h Notdienst.',
  path: '/',
});

export default function HomePage() {
  return (
    <PageWrapper className="relative min-h-screen">
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
