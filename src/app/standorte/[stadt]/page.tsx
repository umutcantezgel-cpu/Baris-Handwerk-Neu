import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES } from '@/config/cities';
import { SERVICES } from '@/config/services';
import { COMPANY_DATA } from '@/config/company';
import { notFound } from 'next/navigation';

// ---------------------------------------------------------------------------
// Static Params – generates a page for every city at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return CITIES.map((city) => ({ stadt: city.slug }));
}

// ---------------------------------------------------------------------------
// Dynamic Metadata – city-specific title, description & OG tags
// Next.js 16: params is a Promise and must be awaited
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const city = CITIES.find((c) => c.slug === stadt);
  if (!city) return {};

  const title = `Sanitär & Heizung ${city.name} – Batherm Haustechnik`;
  const description = `Ihr Meisterbetrieb für Sanitär, Heizung und Klimatechnik in ${city.name}. ${
    city.distanceKm === 0
      ? 'Direkt vor Ort'
      : `Nur ${city.distanceKm} km entfernt`
  }. Kostenlose Beratung & faire Preise.`;

  return {
    title,
    description,
    alternates: { canonical: `https://www.batherm.de/standorte/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.batherm.de/standorte/${city.slug}`,
      siteName: 'Batherm Haustechnik',
      locale: 'de_DE',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

// ---------------------------------------------------------------------------
// Page Component (Server Component – no 'use client')
// Next.js 16: params is a Promise and must be awaited
// ---------------------------------------------------------------------------
export default async function StandortPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const city = CITIES.find((c) => c.slug === stadt);
  if (!city) notFound();

  // JSON-LD Service schema with areaServed for local SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sanitär, Heizung & Klimatechnik',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.batherm.de/#organization',
      name: 'Batherm Haustechnik',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    description: `Professionelle Sanitär-, Heizungs- und Klimatechnik in ${city.name} und Umgebung. Meisterbetrieb aus Wetzlar.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-[var(--spacing-32)] pb-20 px-4 bg-gradient-to-br from-[#1a3a52] to-[#0e1f2b]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8">
            <span>📍</span>
            <span>
              {city.region} ·{' '}
              {city.distanceKm === 0
                ? 'Ihr lokaler Meisterbetrieb'
                : `${city.distanceKm} km von Wetzlar`}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sanitär &amp; Heizung in{' '}
            <span className="text-[#c69c6d]">{city.name}</span>
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Batherm Haustechnik – Ihr Meisterbetrieb für professionelle Sanitär-,
            Heizungs- und Klimatechnik in {city.name} und Umgebung.
            {city.distanceKm > 0 &&
              ` Nur ${city.distanceKm} km von unserem Standort in Wetzlar.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c69c6d] hover:bg-[#a67c52] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Kostenlos Angebot anfordern
            </Link>
            <a
              href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full transition-all"
            >
              📞 {COMPANY_DATA.contact.phone}
            </a>
          </div>
        </div>

        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c69c6d]/10 rounded-full blur-[100px]" />
      </section>

      {/* ── About this city ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
            Ihre Haustechnik-Experten für {city.name}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {city.description}
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#f9f8f6] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#c69c6d] mb-2">
                {city.distanceKm === 0 ? '✓' : `${city.distanceKm} km`}
              </div>
              <div className="text-sm text-gray-600">
                {city.distanceKm === 0 ? 'Vor Ort in Wetzlar' : 'Entfernung'}
              </div>
            </div>
            <div className="bg-[#f9f8f6] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#c69c6d] mb-2">24h</div>
              <div className="text-sm text-gray-600">Schnelle Reaktionszeit</div>
            </div>
            <div className="bg-[#f9f8f6] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#c69c6d] mb-2">100%</div>
              <div className="text-sm text-gray-600">Meisterqualität</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#f9f8f6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-4 text-center">
            Unsere Leistungen in {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Das volle Spektrum der Haustechnik – von der Beratung bis zur
            Wartung.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/leistungen/${service.id}`}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2 group-hover:text-[#c69c6d] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-sm text-[#c69c6d] font-semibold">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#1a3a52]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Jetzt Projekt in {city.name} starten
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein
            unverbindliches Angebot. Wir freuen uns auf Ihr Projekt in{' '}
            {city.name}!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#c69c6d] hover:bg-[#a67c52] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
