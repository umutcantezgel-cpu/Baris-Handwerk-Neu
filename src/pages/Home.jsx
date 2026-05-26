import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import TrustSection from '@/components/sections/TrustSection';
import PartnerLogos from '@/components/sections/PartnerLogos';
import LatestPosts from '@/components/sections/LatestPosts';
import PageWrapper from '@/components/common/PageWrapper';
import { createPageUrl } from '@/utils';

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper className="relative min-h-screen">
      <SEO
        title="Baris Installateur – Sanitär & Heizung Wetzlar"
        description="Ihr Experte für moderne Haustechnik in Wetzlar. Sanitär, Heizung, Solar und mehr - zuverlässig, kompetent, innovativ."
        keywords="Haustechnik Wetzlar, Sanitär, Heizung, Solar, Wärmepumpe, Badsanierung"
      />

      <Hero
        title="Meisterhafte Installationen für Ihr Zuhause"
        subtitle="Wir verbinden handwerkliche Präzision mit modernster Technik für Sanitär, Heizung und Klima."
        backgroundImage="/images/uploads/extra-07.webp"
        primaryCtaText="Angebot anfordern"
        secondaryCtaText="Leistungen ansehen"
        onPrimaryClick={() => navigate(createPageUrl('Contact'))}
        onSecondaryClick={() => navigate(createPageUrl('Services'))}
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
