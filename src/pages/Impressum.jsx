import React from 'react';
import { siteConfig } from '@/config/site';
import { Phone, Mail, MapPin, Building2, FileText, Shield, Scale, Gavel } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

          <div className="relative p-8 md:p-12">
            <h1 className="text-4xl font-bold text-[#1a3a52] mb-8">Impressum</h1>

            <div className="space-y-8 text-[#2c3e50]">
              {/* Provider Identity */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  Angaben gemäß § 5 TMG und Art. 3 Abs. 3 DDG
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="leading-relaxed font-semibold text-lg mb-2">
                    {siteConfig.legalName}
                  </p>
                  <p className="leading-relaxed">
                    Inhaber: {siteConfig.legal.owner}<br />
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.zipCity}<br />
                    {siteConfig.contact.address.country}
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Kontakt
                  </h2>
                  <div className="space-y-2 text-gray-600">
                    <p>Telefon: <a href={`tel:${siteConfig.contact.phoneLink}`} className="text-[#1a3a52] hover:underline">{siteConfig.contact.phone}</a></p>
                    <p>E-Mail: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#1a3a52] hover:underline">{siteConfig.contact.email}</a></p>
                  </div>
                </div>
              </section>

              {/* Tax & Registration */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Registereintrag & Steuern
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <span className="font-semibold block text-sm mb-1">Umsatzsteuer-ID:</span>
                      {siteConfig.legal.taxId}
                    </div>
                    <div>
                      <span className="font-semibold block text-sm mb-1">Handwerksrolle:</span>
                      Eingetragen in der Handwerksrolle der Handwerkskammer Wiesbaden
                      <br />
                      <span className="font-medium">Registernummer: 120707</span>
                    </div>
                    <div>
                      <span className="font-semibold block text-sm mb-1">Registereintrag:</span>
                      Als Einzelunternehmen nicht im Handelsregister eingetragen.
                    </div>
                  </div>
                </div>
              </section>

              {/* § 18 MStV - Responsible for Editorial Content */}
              <section>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">
                    Verantwortlich für redaktionelle Inhalte (insbesondere Blog-Artikel und Ratgeberbeiträge) gemäß § 18 Abs. 2 Medienstaatsvertrag:
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="font-semibold text-[#1a3a52]">{siteConfig.legal.owner}</p>
                    <p className="text-gray-600">
                      {siteConfig.legalName}<br />
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.zipCity}<br />
                      E-Mail: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#1a3a52] underline">{siteConfig.contact.email}</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Supervision */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Aufsichtsbehörde & Kammer
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <span className="font-semibold block text-sm mb-1">Zuständige Kammer:</span>
                      <a href="https://www.hwk-wiesbaden.de" target="_blank" rel="noopener noreferrer" className="text-[#1a3a52] hover:underline flex items-center gap-1">
                        Handwerkskammer Wiesbaden
                      </a>
                      <span className="block text-sm text-gray-500">Bierstadter Straße 45, 65189 Wiesbaden</span>
                    </div>
                    <div>
                      <span className="font-semibold block text-sm mb-1">Berufsbezeichnung:</span>
                      Installateur- und Heizungsbauermeister (verliehen in Deutschland)
                    </div>
                    <div>
                      <span className="font-semibold block text-sm mb-1">Berufsrechtliche Regelungen:</span>
                      <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-[#1a3a52] hover:underline">Handwerksordnung</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Insurance */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Berufshaftpflichtversicherung
                  </h2>
                  <div className="text-gray-600 space-y-2">
                    <p>Es besteht eine Berufshaftpflichtversicherung bei:</p>
                    <p className="font-medium text-[#1a3a52]">VHV Allgemeine Versicherung AG</p>
                    <p>VHV-Platz 1<br />30177 Hannover</p>
                    <p className="text-sm mt-2 text-gray-500">Geltungsbereich: Deutschland</p>
                  </div>
                </div>
              </section>

              {/* Dispute Resolution */}
              <section>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h2 className="text-xl font-semibold text-[#1a3a52] mb-4 flex items-center gap-2">
                    <Gavel className="w-5 h-5" />
                    Streitschlichtung
                  </h2>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                      <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#1a3a52] hover:underline ml-1">
                        https://ec.europa.eu/consumers/odr
                      </a>
                    </p>
                    <p className="text-sm">
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Copyright */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  Urheberrecht
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="leading-relaxed text-sm">
                    Alle Inhalte, Bilder, Grafiken und Designs auf dieser Website sind urheberrechtlich geschützt.
                    Eine unerlaubte Vervielfältigung, Verbreitung oder Änderung dieser Inhalte ist ohne ausdrückliche
                    schriftliche Genehmigung untersagt.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
