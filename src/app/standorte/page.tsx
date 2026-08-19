import React from 'react';
import Link from 'next/link';
import { MapPin, PhoneCall, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { CITIES } from '@/config/cities';
import { COMPANY_DATA } from '@/config/company';
import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildBreadcrumbNode, buildWebPageNode, SITE_URL, ORG_ID } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Standorte & Einsatzgebiete in Mittelhessen',
  description: 'Ihr Meisterbetrieb für Sanitär, Heizung & Klima in Wetzlar, Gießen, Marburg, Limburg und ganz Mittelhessen. Finden Sie Ihren Standort vor Ort.',
  path: '/standorte',
});

const pageUrl = `${SITE_URL}/standorte`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Standorte', path: '/standorte' },
];

const standorteGraph = buildGraph([
  buildWebPageNode({
    url: pageUrl,
    name: 'Einsatzgebiete & Standorte in Mittelhessen | Batherm Haustechnik',
    description: 'Übersicht aller Städte und Gemeinden im Einzugsgebiet von Batherm Haustechnik in Hessen.',
    breadcrumbItems: breadcrumbs,
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
  {
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'Batherm Haustechnik Standorte & Einsatzgebiete',
    description: 'Regionaler Handwerksmeister für Sanitär, Heizung und Klimatechnik in Hessen.',
    publisher: { '@id': ORG_ID },
  },
]);

export default function StandorteOverviewPage() {
  const phoneClean = COMPANY_DATA.contact.phone.replace(/\s/g, '');

  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd schema={standorteGraph} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#1a3a52] to-[#0e1f2b] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
            <MapPin className="w-4 h-4 text-[#c69c6d]" />
            <span>Mittelhessen &amp; Lahn-Dill-Kreis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Standorte &amp; Einsatzgebiete in <span className="text-[#c69c6d]">Mittelhessen</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Als Meisterbetrieb mit Hauptsitz in Wetzlar betreuen wir private und gewerbliche Kunden
            in einem Umkreis von bis zu 50 Kilometern. Schnelle Anfahrtswege, persönliche Beratung vor Ort
            und handwerkliche Präzision.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Wählen Sie Ihre Stadt oder Gemeinde
          </h2>
          <p className="text-slate-600">
            Klicken Sie auf Ihren Wohnort, um detaillierte Informationen zu unseren Leistungen,
            Anfahrtszeiten und regionalen Referenzen zu erhalten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITIES.map((city) => (
            <div
              key={city.slug}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-[#c69c6d]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c69c6d]">
                    {city.region}
                  </span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {city.distanceKm === 0 ? 'Hauptstandort' : `${city.distanceKm} km`}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {city.name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {city.description}
                </p>
              </div>

              <Link
                href={`/standorte/${city.slug}`}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-slate-50 hover:bg-[#1a3a52] text-slate-700 hover:text-white rounded-xl text-sm font-semibold transition-colors group"
              >
                <span>Details &amp; Leistungen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-24 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a3a52] to-[#12283a] rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ihre Stadt ist nicht aufgeführt?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Wir sind im gesamten Lahn-Dill-Kreis, Landkreis Gießen, Marburg-Biedenkopf, Wetteraukreis und Limburg-Weilburg
            unterwegs. Rufen Sie uns einfach an – wir prüfen sofort die Verfügbarkeit für Ihren Wohnort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#c69c6d] hover:bg-[#b58b5c] text-white rounded-xl font-semibold shadow-lg transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{COMPANY_DATA.contact.phone}</span>
            </a>
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 transition-colors"
            >
              Kostenlose Beratung anfragen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
