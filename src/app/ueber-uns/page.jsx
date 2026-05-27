"use client";
import React from 'react';
import { Award, Users, Heart, Clock, Shield } from 'lucide-react';
import { values, team, meinTeam, certifications, COMPANY_DATA } from '@/config/company';
import SEO from '@/components/SEO';

import CompanyHistory from '@/components/sections/CompanyHistory';
import CareerCTA from '@/components/sections/CareerCTA';

import PageWrapper from '@/components/common/PageWrapper';

export default function About() {
  return (
    <PageWrapper className="relative min-h-screen py-[var(--spacing-20)] px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] bg-[var(--color-background-surface-secondary)]">
      <SEO
        title="Über uns"
        description="Ihr Partner für zukunftssichere Haustechnik in Wetzlar. Erfahren Sie mehr über unser Team und unsere Werte."
        keywords="Über uns, Team, Wetzlar, Haustechnik, Meisterbetrieb"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[var(--spacing-16)]">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] tracking-tight">
            Über uns
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto font-light leading-relaxed">
            Ihr Partner für zukunftssichere Haustechnik in Wetzlar und Umgebung
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-[var(--spacing-12)] mb-[var(--spacing-20)] items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)]">
              {COMPANY_DATA.legalName} – Tradition trifft Innovation
            </h2>
            <div className="space-y-[var(--spacing-4)] text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Mit der Gründung im Jahr 2025 bringt {COMPANY_DATA.owner.lastName} frischen Wind und modernstes Fachwissen
                in den Bereich {COMPANY_DATA.business.industryType}. Unser Ziel ist es, als dynamischer Meisterbetrieb
                traditionelle Handwerksqualität mit innovativer Gebäudetechnik neu zu denken.
              </p>
              <p>
                Unser Firmensitz in {COMPANY_DATA.address.city} ist der zentrale Ausgangspunkt für unsere Projekte
                in der gesamten Region – {COMPANY_DATA.business.serviceArea.join(', ')}. Mit einem erfahrenen
                Team realisieren wir Projekte für Privat- und Gewerbekunden.
              </p>
              <p>
                Besonders wichtig ist uns der persönliche Kontakt zu unseren Kunden. Von der ersten Beratung
                über die fachgerechte Umsetzung bis zum langfristigen Service stehen wir Ihnen mit Rat und Tat
                zur Seite. Dabei setzen wir auf nachhaltige, energieeffiziente Lösungen.
              </p>
            </div>
          </div>

          <div className="relative space-y-[var(--spacing-6)]">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-[var(--spacing-4)]">
              <div className="bg-[var(--color-neutral-0)] p-[var(--spacing-6)] rounded-[var(--radius-xl)] border border-[var(--color-border-default)] shadow-[var(--shadow-sm)]">
                <div className="text-3xl font-bold text-[var(--color-brand-secondary)] mb-1">2025</div>
                <div className="text-sm text-[var(--color-text-secondary)] font-medium">Gegründet</div>
              </div>
              <div className="bg-[var(--color-neutral-0)] p-[var(--spacing-6)] rounded-[var(--radius-xl)] border border-[var(--color-border-default)] shadow-[var(--shadow-sm)]">
                <div className="text-3xl font-bold text-[var(--color-brand-secondary)] mb-1">100%</div>
                <div className="text-sm text-[var(--color-text-secondary)] font-medium">Kundenzufriedenheit</div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-[var(--color-neutral-900)] to-[var(--color-brand-primary)] p-[var(--spacing-8)] rounded-[var(--radius-xl)] text-white shadow-[var(--shadow-md)] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-lg font-light leading-relaxed italic opacity-90 mb-[var(--spacing-4)]">
                  "Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung, Präzision und der Liebe zum Handwerk."
                </p>
                <div className="font-bold text-[var(--color-brand-secondary)]">— {COMPANY_DATA.owner.firstName} {COMPANY_DATA.owner.lastName}</div>
                <div className="text-sm opacity-60">Geschäftsführer</div>
              </div>
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-secondary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

            {/* Region Badge */}
            <div className="bg-[var(--color-blue-50)] p-[var(--spacing-6)] rounded-[var(--radius-xl)] border border-[var(--color-blue-100)] flex items-center gap-[var(--spacing-4)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-blue-100)] flex items-center justify-center text-[var(--color-brand-secondary)]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-[var(--color-neutral-900)]">Ihr Partner in {COMPANY_DATA.address.city}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Schnell, zuverlässig & vor Ort</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-[var(--spacing-20)]">
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] text-center mb-[var(--spacing-12)]">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-6)]">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-[var(--color-neutral-0)] rounded-[var(--radius-lg)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group">
                  <div className="relative p-[var(--spacing-8)] text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-[var(--radius-base)] bg-[var(--color-brand-secondary)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[var(--color-brand-secondary)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">{value.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-[var(--spacing-20)]">
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] text-center mb-[var(--spacing-12)]">
            Unser Team
          </h2>
          <div className="flex flex-wrap justify-center gap-[var(--spacing-8)] max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-[var(--color-neutral-0)] rounded-[var(--radius-lg)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)] w-full md:w-[calc(50%-var(--spacing-4))] lg:w-[400px]">
                <div className="relative p-[var(--spacing-8)]">
                  <div className="w-32 h-32 mx-auto mb-[var(--spacing-4)] rounded-full bg-gradient-to-br from-[var(--color-neutral-800)] to-[var(--color-brand-secondary)] flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-neutral-900)] text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-brand-secondary)] text-center font-medium mb-[var(--spacing-3)]">
                    {member.position}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mein Team */}
        <div className="mb-[var(--spacing-20)]">
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] text-center mb-[var(--spacing-12)]">
            Mein Team
          </h2>
          <div className="flex flex-wrap justify-center gap-[var(--spacing-8)] max-w-4xl mx-auto">
            {meinTeam.map((member, index) => (
              <div key={index} className="bg-[var(--color-neutral-0)] rounded-[var(--radius-lg)] border border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)] w-full md:w-[calc(50%-var(--spacing-4))] lg:w-[400px]">
                <div className="relative p-[var(--spacing-8)]">
                  <div className="w-32 h-32 mx-auto mb-[var(--spacing-4)] rounded-full bg-gradient-to-br from-[var(--color-neutral-800)] to-[var(--color-brand-secondary)] flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-neutral-900)] text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-brand-secondary)] text-center font-medium mb-[var(--spacing-3)]">
                    {member.position}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-[var(--color-blue-50)] rounded-[var(--radius-xl)] border border-[var(--color-blue-100)]">
          <div className="p-[var(--spacing-12)] text-center">
            <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)]">
              Zertifizierungen & Mitgliedschaften
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-[var(--spacing-8)] max-w-2xl mx-auto">
              Als Innungsfachbetrieb sind wir Mitglied der Sanitär-, Heizungs- und Klima-Innung
              und erfüllen höchste Qualitätsstandards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8)]">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-[var(--color-neutral-0)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all overflow-hidden group">
                  <div className="aspect-[3/4] p-[var(--spacing-6)] bg-[var(--color-neutral-50)] flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <div className="p-[var(--spacing-4)] bg-white border-t border-[var(--color-border-default)]">
                    <p className="text-sm font-medium text-[var(--color-neutral-900)] text-center line-clamp-2">
                      {cert.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CompanyHistory />

        <CareerCTA />

      </div>
    </PageWrapper>
  );
}
