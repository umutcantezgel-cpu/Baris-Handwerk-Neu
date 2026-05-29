import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES } from '@/config/cities';
import { SERVICES } from '@/config/services';
import { COMPANY_DATA } from '@/config/company';
import { notFound } from 'next/navigation';

// ---------------------------------------------------------------------------
// Static Params – generates a page for every service × city combination
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  const params: { id: string; stadt: string }[] = [];
  for (const service of SERVICES) {
    for (const city of CITIES) {
      params.push({ id: service.id, stadt: city.slug });
    }
  }
  return params;
}

// ---------------------------------------------------------------------------
// Dynamic Metadata – unique title, description & OG tags per combination
// Next.js 16: params is a Promise and must be awaited
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; stadt: string }>;
}): Promise<Metadata> {
  const { id, stadt } = await params;
  const service = SERVICES.find((s: any) => s.id === id);
  const city = CITIES.find((c) => c.slug === stadt);
  if (!service || !city) return {};

  const title = `${service.name} ${city.name} – Meisterbetrieb | Batherm`;
  const description = `${service.name} in ${city.name}: ${service.shortDescription}. Ihr Meisterbetrieb aus Wetzlar – ${
    city.distanceKm === 0 ? 'direkt vor Ort' : `nur ${city.distanceKm} km entfernt`
  }. Jetzt beraten lassen!`;

  const url = `https://www.batherm.de/leistungen/${service.id}/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Batherm Haustechnik',
      locale: 'de_DE',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

// ---------------------------------------------------------------------------
// Process steps constant
// ---------------------------------------------------------------------------
const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Beratung',
    description:
      'Wir besprechen Ihre Wünsche und Anforderungen in einem persönlichen Gespräch.',
    emoji: '💬',
  },
  {
    step: 2,
    title: 'Planung',
    description:
      'Wir erstellen ein maßgeschneidertes Konzept mit transparenter Kostenaufstellung.',
    emoji: '📐',
  },
  {
    step: 3,
    title: 'Umsetzung',
    description:
      'Unsere Fachleute führen die Arbeiten termingerecht und sauber aus.',
    emoji: '🔧',
  },
  {
    step: 4,
    title: 'Übergabe',
    description:
      'Wir übergeben Ihnen das fertige Projekt und erklären alle Funktionen.',
    emoji: '🏠',
  },
];

// ---------------------------------------------------------------------------
// Page Component (Server Component – no 'use client')
// Next.js 16: params is a Promise and must be awaited
// ---------------------------------------------------------------------------
export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ id: string; stadt: string }>;
}) {
  const { id, stadt } = await params;
  const service = SERVICES.find((s: any) => s.id === id);
  const city = CITIES.find((c) => c.slug === stadt);
  if (!service || !city) notFound();

  const pageUrl = `https://www.batherm.de/leistungen/${service.id}/${city.slug}`;
  const phoneClean = COMPANY_DATA.contact.phone.replace(/\s/g, '');

  // Build feature & subcategory strings for rich content
  const featureList = (service.features ?? []).join(', ');
  const subcategoryNames = (service.subcategories ?? [])
    .map((s: any) => s.name)
    .join(', ');
  const distanceInfo =
    city.distanceKm === 0
      ? 'direkt vor Ort in Wetzlar'
      : `nur ${city.distanceKm} km von unserem Standort in Wetzlar entfernt`;

  // ── JSON-LD: Service schema ───────────────────────────────────────────
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.name}`,
    serviceType: service.name,
    description: `${service.shortDescription} – professionell ausgeführt in ${city.name} und Umgebung.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.batherm.de/#organization',
      name: COMPANY_DATA.legalName,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    url: pageUrl,
  };

  // ── JSON-LD: BreadcrumbList ───────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.batherm.de',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leistungen',
        item: 'https://www.batherm.de/leistungen',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `https://www.batherm.de/leistungen/${service.id}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* ── Structured Data ──────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative pt-[var(--spacing-32)] pb-20 px-4 bg-gradient-to-br from-[#1a3a52] to-[#0e1f2b] overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-white/60 flex flex-wrap items-center gap-1"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/leistungen"
              className="hover:text-white transition-colors"
            >
              Leistungen
            </Link>
            <span>/</span>
            <Link
              href={`/leistungen/${service.id}`}
              className="hover:text-white transition-colors"
            >
              {service.name}
            </Link>
            <span>/</span>
            <span className="text-white/90">{city.name}</span>
          </nav>

          {/* Distance badge (only for cities other than Wetzlar) */}
          {city.distanceKm > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8">
              <span>📍</span>
              <span>
                {city.region} · {city.distanceKm} km von Wetzlar
              </span>
            </div>
          )}
          {city.distanceKm === 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c69c6d]/20 backdrop-blur-sm border border-[#c69c6d]/40 text-[#c69c6d] text-sm mb-8 font-semibold">
              <span>🏠</span>
              <span>Unser Standort – {city.region}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {service.name} in{' '}
            <span className="text-[#c69c6d]">{city.name}</span>
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Batherm Haustechnik ist Ihr Meisterbetrieb für {service.name} in{' '}
            {city.name} und {city.region}.{' '}
            {service.shortDescription}.{' '}
            {city.distanceKm > 0
              ? `Nur ${city.distanceKm} km von unserem Standort in Wetzlar – schnelle Reaktionszeiten garantiert.`
              : 'Direkt vor Ort – minimale Anfahrtszeit für maximalen Service.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c69c6d] hover:bg-[#a67c52] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Kostenlos Angebot anfordern
            </Link>
            <a
              href={`tel:${phoneClean}`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full transition-all"
            >
              📞 {COMPANY_DATA.contact.phone}
            </a>
          </div>
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c69c6d]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1a3a52]/30 rounded-full blur-[80px]" />
      </section>

      {/* ── Rich Intro / Anti-Thin-Content ────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
            {service.name} vom Meisterbetrieb in {city.name}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Batherm Haustechnik ist Ihr Meisterbetrieb für {service.name} in{' '}
            {city.name} und {city.region}. {city.description}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Unsere Leistungen im Bereich {service.name} umfassen:{' '}
            {featureList}.{' '}
            {subcategoryNames
              ? `Ob ${subcategoryNames} – wir sind ${distanceInfo} und garantieren schnelle Reaktionszeiten und persönlichen Service.`
              : `Wir sind ${distanceInfo} und garantieren schnelle Reaktionszeiten und persönlichen Service.`}
          </p>

          {/* Stats row */}
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
              <div className="text-3xl font-bold text-[#c69c6d] mb-2">
                {(service.features ?? []).length}+
              </div>
              <div className="text-sm text-gray-600">Leistungsbereiche</div>
            </div>
            <div className="bg-[#f9f8f6] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#c69c6d] mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600">Meisterqualität</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Features ─────────────────────────────────────────────── */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 px-4 bg-[#f9f8f6]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4 text-center">
              {service.name} – Unsere Leistungen
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Profitieren Sie von unserem umfassenden Leistungsspektrum im
              Bereich {service.name} in {city.name}.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c69c6d]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c69c6d] font-bold text-lg">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Subcategories Grid ───────────────────────────────────────────── */}
      {service.subcategories && service.subcategories.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4 text-center">
              Unsere {service.name} Bereiche in {city.name}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Von der Beratung bis zur Wartung – alle Fachbereiche aus einer
              Hand.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.subcategories.map((sub: any, idx: number) => (
                <div
                  key={idx}
                  className="group bg-[#f9f8f6] rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 bg-[#1a3a52]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c69c6d]/20 transition-colors">
                    <span className="text-2xl text-[#1a3a52] group-hover:text-[#c69c6d] transition-colors">
                      🔧
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1a3a52] group-hover:text-[#c69c6d] transition-colors">
                    {sub.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Process Steps ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#1a3a52]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            So läuft Ihr {service.name}-Projekt in {city.name} ab
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Von der ersten Kontaktaufnahme bis zur finalen Übergabe – transparent und zuverlässig.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-16 h-16 bg-[#c69c6d] rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  {step.emoji}
                </div>
                <div className="text-sm text-[#c69c6d] font-bold mb-1">
                  Schritt {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#c69c6d] to-[#a67c52]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {service.name} in {city.name} – jetzt Projekt starten
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein
            unverbindliches Angebot. Wir freuen uns auf Ihr {service.name}
            -Projekt in {city.name}!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneClean}`}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#1a3a52] font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              📞 {COMPANY_DATA.contact.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#1a3a52] hover:bg-[#0e1f2b] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#f9f8f6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a3a52] mb-8 text-center">
            Weitere Informationen
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Link to parent service page */}
            <Link
              href={`/leistungen/${service.id}`}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2 group-hover:text-[#c69c6d] transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600">
                Alle Infos zu unserem {service.name}-Angebot
              </p>
              <span className="inline-block mt-3 text-sm text-[#c69c6d] font-semibold">
                Zur Übersicht →
              </span>
            </Link>

            {/* Link to city page */}
            <Link
              href={`/standorte/${city.slug}`}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2 group-hover:text-[#c69c6d] transition-colors">
                Standort {city.name}
              </h3>
              <p className="text-sm text-gray-600">
                Alle Leistungen in {city.name}
              </p>
              <span className="inline-block mt-3 text-sm text-[#c69c6d] font-semibold">
                Zum Standort →
              </span>
            </Link>

            {/* Link to contact page */}
            <Link
              href="/kontakt"
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2 group-hover:text-[#c69c6d] transition-colors">
                Kontakt
              </h3>
              <p className="text-sm text-gray-600">
                Kostenlose Beratung anfragen
              </p>
              <span className="inline-block mt-3 text-sm text-[#c69c6d] font-semibold">
                Kontakt aufnehmen →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
