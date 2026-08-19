import React from 'react';
import Link from 'next/link';
import { PhoneCall, Clock, MapPin, WarningCircle, Wrench, ShieldCheck, CheckCircle, Question } from '@phosphor-icons/react/dist/ssr';
import { createMetadata } from '@/lib/metadata';
import { COMPANY_DATA } from '@/config/company';

export const metadata = createMetadata({
  title: '24h Notdienst Sanitär & Heizung Wetzlar',
  description: 'Rohrbruch, Heizungsausfall oder verstopfter Abfluss? Unser 24h Notdienst ist rund um die Uhr in Wetzlar und Umgebung für Sie erreichbar. Jetzt anrufen!',
  path: '/notdienst',
});

const emergencyFaqs = [
  {
    question: 'Wann sollte ich den 24h Notdienst anrufen?',
    answer: 'Bei akuten Notfällen wie einem Rohrbruch, plötzlichem totalem Heizungsausfall im Winter, Gasgeruch, Rückstau im Kanalsystem oder massiven Leckagen sollten Sie unverzüglich unseren 24h Notdienst anrufen.'
  },
  {
    question: 'Wie schnell ist der Notdienst in Wetzlar vor Ort?',
    answer: 'In der Regel treffen unsere Monteure innerhalb von 30 bis 60 Minuten bei Ihnen im Raum Wetzlar, Gießen und dem Lahn-Dill-Kreis ein. Bei Glatteis oder Unwetter kann es geringfügig länger dauern.'
  },
  {
    question: 'Was kostet der Einsatz des Notdienstes?',
    answer: 'Wir arbeiten mit transparenten und fairen Notdienst-Zuschlägen gemäß handwerksüblichen Sätzen. Vor Beginn der Arbeiten erläutert Ihnen unser Monteur die voraussichtlichen Kosten verständlich und nachvollziehbar.'
  },
  {
    question: 'Übernimmt die Versicherung die Kosten bei einem Rohrbruch?',
    answer: 'In den meisten Fällen übernimmt Ihre Gebäude- oder Hausratversicherung die Kosten für die Schadensbeseitigung und Folgeschäden bei Leitungswasserschäden. Wir dokumentieren jeden Einsatz detailliert für Ihre Versicherung.'
  }
];

export default function NotdienstPage() {
  const phoneFormatted = COMPANY_DATA.contact.phone;
  const phoneClean = COMPANY_DATA.contact.phone.replace(/\s/g, '');

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* ── Emergency Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-red-800 pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/30 animate-pulse">
            <WarningCircle size={20} weight="fill" />
            <span>24/7 Akut-Hilfe bei Tag &amp; Nacht</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            24h Notdienst Sanitär &amp; Heizung Wetzlar
          </h1>

          <p className="text-lg sm:text-xl text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Akuter Rohrbruch, Heizungsausfall oder schwerer Abwasserrückstau? Unser qualifizierter Meisterbetrieb ist 365 Tage im Jahr rund um die Uhr in Wetzlar und der gesamten Region schnell für Sie zur Stelle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${phoneClean}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-red-700 hover:bg-red-50 font-black text-xl sm:text-2xl px-8 py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              <PhoneCall size={32} weight="fill" className="animate-bounce" />
              <span>{phoneFormatted}</span>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-5 bg-red-900/60 hover:bg-red-900/80 border border-white/30 text-white font-bold rounded-2xl transition-all"
            >
              Nicht-dringende Anfrage
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key Emergency USPs ─────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200/80 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-5 text-red-600">
                <Clock size={36} weight="bold" />
              </div>
              <h2 className="font-bold text-xl text-neutral-900 mb-3">24/7 Rufbereitschaft</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Unsere Notfall-Zentrale ist 365 Tage im Jahr besetzt – auch an Sonn- und Feiertagen sowie mitten in der Nacht.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200/80 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-5 text-red-600">
                <MapPin size={36} weight="bold" />
              </div>
              <h2 className="font-bold text-xl text-neutral-900 mb-3">In 30–60 Min. vor Ort</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Dank unserer zentralen Lage in Wetzlar erreichen wir Einsatzorte im gesamten Lahn-Dill-Kreis und Kreis Gießen zügig.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200/80 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-5 text-red-600">
                <ShieldCheck size={36} weight="bold" />
              </div>
              <h2 className="font-bold text-xl text-neutral-900 mb-3">Meisterliche Notfallreparatur</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Voll ausgestattete Einsatzfahrzeuge und erfahrene SHK-Fachkräfte garantieren eine sofortige Schadensbegrenzung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── First Aid Guide ────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-sm tracking-wider uppercase mb-2 block">
              Sofortmaßnahmen
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Was tun bis der Notdienst eintrifft?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Bewahren Sie Ruhe. Mit diesen ersten Handgriffen minimieren Sie Folgeschäden und schützen Gebäude und Inventar:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0">1</span>
                <h3 className="text-xl font-bold text-neutral-900">Bei Rohrbruch &amp; Wasserschaden</h3>
              </div>
              <ul className="space-y-3 text-neutral-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} weight="fill" className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hauptwasserhahn schließen:</strong> Drehen Sie das Hauptabsperrventil im Keller oder Hausanschlussraum sofort im Uhrzeigersinn zu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} weight="fill" className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strom im Gefahrenbereich abschalten:</strong> Schalten Sie Sicherungen in betroffenen Räumen ab, um Stromunfälle zu verhindern.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} weight="fill" className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wasser aufnehmen &amp; Fotos machen:</strong> Sichern Sie Wertgegenstände und dokumentieren Sie den Schaden für Ihre Versicherung.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center flex-shrink-0">2</span>
                <h3 className="text-xl font-bold text-neutral-900">Bei Heizungsausfall im Winter</h3>
              </div>
              <ul className="space-y-3 text-neutral-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} weight="fill" className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wasserdruck und Fehlercode prüfen:</strong> Notieren Sie die Anzeige auf dem Display der Heizungsanlage für unseren Techniker.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} weight="fill" className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wärmeverlust stoppen:</strong> Fenster und Außentüren geschlossen halten, um ein Auskühlen der Wohnräume zu verlangsamen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} weight="fill" className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Rohre vor Frost schützen:</strong> Bei Minusgraden Heizkörperventile leicht geöffnet lassen, um Frostrisse in Rohren zu verhindern.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Häufig gestellte Fragen zum Notdienst
            </h2>
            <p className="text-neutral-600">
              Wichtige Informationen zu Abrechnung, Verfügbarkeit und Reaktionszeiten.
            </p>
          </div>

          <div className="space-y-6">
            {emergencyFaqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <h3 className="font-bold text-lg text-neutral-900 mb-2 flex items-center gap-2">
                  <Question size={20} className="text-red-600 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Call CTA ────────────────────────────────────────────── */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Brauchen Sie jetzt sofort Unterstützung?
          </h2>
          <p className="text-neutral-400 mb-8 text-base">
            Zögern Sie nicht bei ernsten Schäden. Unser Team ist jetzt einsatzbereit.
          </p>
          <a
            href={`tel:${phoneClean}`}
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            <PhoneCall size={28} weight="fill" />
            <span>Jetzt anrufen: {phoneFormatted}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
