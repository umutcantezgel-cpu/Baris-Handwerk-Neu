"use client";
import React from 'react';
import { siteConfig } from '@/config/site';
import { Shield, Database, Lock, UserCheck, Clock, AlertTriangle, ExternalLink, Server, Globe, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Datenschutz() {
  const dpa = siteConfig.legal.dataProtectionAuthority;

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-10 h-10 text-[#1a3a52]" />
              <div>
                <h1 className="text-4xl font-bold text-[#1a3a52]">Datenschutzerklärung</h1>
                <p className="text-gray-500 text-sm mt-1">Stand: Januar 2026 (Version 2.1)</p>
              </div>
            </div>

            <div className="space-y-10 text-[#2c3e50]">

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-900">
                <p className="font-semibold mb-1">Überblick:</p>
                <p>
                  Nachfolgend informieren wir Sie über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Website.
                  Wir nehmen Ihren Datenschutz sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften (DSGVO).
                </p>
              </div>

              {/* 1. Responsible Party */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6" />
                  1. Verantwortlicher
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="leading-relaxed">
                    Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
                    <span className="font-semibold">{siteConfig.legal.owner}</span><br />
                    {siteConfig.legalName}<br />
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.zipCity}, {siteConfig.contact.address.country}<br /><br />
                    Telefon: <a href={`tel:${siteConfig.contact.phoneLink}`} className="text-[#1a3a52] underline">{siteConfig.contact.phone}</a><br />
                    E-Mail: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#1a3a52] underline">{siteConfig.contact.email}</a>
                  </p>
                </div>
              </section>

              {/* 2. Hosting */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6" />
                  2. Hosting und Content Delivery Networks (CDN)
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                  <p className="leading-relaxed">
                    Wir hosten unsere Website bei einem externen Dienstleister (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                    Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p className="leading-relaxed">
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm">
                    <strong>Unser Hoster:</strong><br />
                    Vercel Inc.<br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA<br />
                    <br />
                    Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://vercel.com/legal/privacy-policy</a>
                  </div>
                  <p className="text-sm italic">
                    Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
                    <br /><br />
                    Den Auftragsverarbeitungsvertrag mit Vercel können Sie hier einsehen: <a href="https://vercel.com/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://vercel.com/legal/data-processing-addendum</a>
                    <br />
                    Vercel ist zertifiziert nach: ISO 27001, SOC 2 Type II und dem EU-U.S. Data Privacy Framework.
                  </p>
                </div>
              </section>

              {/* 3. Data Collection Overview */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6" />
                  3. Erhebung und Verarbeitung personenbezogener Daten
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-lg mb-3">3.1 Kontaktformular</h3>
                    <p className="text-sm leading-relaxed mb-3">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                        <li>Name (zur persönlichen Anrede)</li>
                        <li>E-Mail-Adresse (zur Beantwortung Ihrer Anfrage)</li>
                        <li>Telefonnummer (optional, für Rückruf)</li>
                        <li>Nachrichteninhalt</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm font-semibold text-blue-900">Speicherdauer:</p>
                      <p className="text-sm text-blue-800">
                        Ihre über das Kontaktformular übermittelten Daten werden gespeichert, bis Ihre Anfrage vollständig bearbeitet wurde.
                        Die Löschung erfolgt spätestens nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen
                        (z.B. nach § 257 HGB oder § 147 AO). Im Falle eines Vertragsabschlusses werden die Daten gemäß den
                        gesetzlichen Aufbewahrungsfristen gespeichert (in der Regel 6-10 Jahre).
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-lg mb-3">3.2 Server-Logfiles</h3>
                    <p className="text-sm leading-relaxed mb-3">
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                      <li>IP-Adresse (anonymisiert)</li>
                      <li>Datum und Uhrzeit der Serveranfrage</li>
                      <li>Referrer URL (die zuvor besuchte Seite)</li>
                      <li>Browsertyp und Browserversion</li>
                      <li>Verwendetes Betriebssystem</li>
                    </ul>
                    <p className="text-sm mt-3">
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                      <br /><br />
                      <span className="font-medium">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technisch fehlerfreien Darstellung und der Optimierung unserer Website – hierzu müssen die Server-Logfiles erfasst werden.
                    </p>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm font-semibold text-blue-900">Speicherdauer:</p>
                      <p className="text-sm text-blue-800">
                        Die Server-Logfiles werden nach 14 Tagen automatisch gelöscht.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Cookie className="w-6 h-6" />
                  4. Cookies & Einwilligung
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="text-sm leading-relaxed mb-4">
                    Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Wir setzen eine Consent-Management-Lösung ein, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät einzuholen und diese datenschutzkonform zu dokumentieren.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th scope="col" className="px-4 py-3">Kategorie</th>
                          <th scope="col" className="px-4 py-3">Zweck</th>
                          <th scope="col" className="px-4 py-3">Einwilligung nötig?</th>
                          <th scope="col" className="px-4 py-3">Speicherdauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold">Technisch notwendig</td>
                          <td className="px-4 py-3">Ermöglichen Grundfunktionen (z.B. Cookie-Einstellungen speichern).</td>
                          <td className="px-4 py-3">Nein (Art. 6 Abs. 1 lit. f DSGVO)</td>
                          <td className="px-4 py-3">Session / 1 Jahr</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold">Statistik</td>
                          <td className="px-4 py-3">Erfassung anonymisierter Besucherzahlen zur Verbesserung der Website.</td>
                          <td className="px-4 py-3">Ja (Art. 6 Abs. 1 lit. a DSGVO)</td>
                          <td className="px-4 py-3">2 Jahre</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold">Externe Medien (Maps)</td>
                          <td className="px-4 py-3">Anzeige von Google Maps Karten.</td>
                          <td className="px-4 py-3">Ja (Art. 6 Abs. 1 lit. a DSGVO)</td>
                          <td className="px-4 py-3">Session / 1 Jahr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" onClick={() => window.dispatchEvent(new CustomEvent('showConsentBanner'))}>
                      Cookie-Einstellungen ändern
                    </Button>
                  </div>
                </div>
              </section>

              {/* 5. Plugins and Tools */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  5. Plugins und Tools
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-6">
                  {/* Google Maps */}
                  <div>
                    <h3 className="font-semibold text-lg text-[#1a3a52] mb-2">Google Maps</h3>
                    <p className="text-sm leading-relaxed mb-2">
                      Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist (nach Ihrer Zustimmung), kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                  </div>

                  {/* Google Web Fonts (lokal) */}
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-lg text-[#1a3a52] mb-2">Google Web Fonts (lokales Hosting)</h3>
                    <p className="text-sm leading-relaxed">
                      Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Diese Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt. Somit werden keine Daten an Google übertragen.
                    </p>
                  </div>
                </div>
              </section>


              {/* 5.1 WhatsApp */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg text-[#1a3a52] mb-3">5.1 WhatsApp Business Chat</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Auf unserer Website bieten wir die Möglichkeit, direkt über WhatsApp Kontakt mit uns aufzunehmen.
                    Wenn Sie auf den WhatsApp-Button klicken, werden Sie zu WhatsApp weitergeleitet.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    <strong>Anbieter:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland<br />
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an der Kundenkommunikation)
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Datenschutzerklärung WhatsApp: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.whatsapp.com/legal/privacy-policy</a>
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-xs text-blue-900">
                    <AlertTriangle className="w-4 h-4 inline-block mr-1 mb-0.5" />
                    <strong>WICHTIG:</strong> Die Kommunikation über WhatsApp erfolgt verschlüsselt, aber außerhalb unseres Einflussbereichs. Wir empfehlen für sensible Daten die Kontaktaufnahme per E-Mail oder Telefon.
                  </div>
                </div>
              </section>


              {/* 6. Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  6. Ihre Rechte als Betroffener
                </h2>
                <div className="grid gap-3">
                  {[
                    { title: 'Auskunftsrecht (Art. 15 DSGVO)', desc: 'Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.' },
                    { title: 'Recht auf Berichtigung (Art. 16 DSGVO)', desc: 'Sie haben das Recht, die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.' },
                    { title: 'Recht auf Löschung (Art. 17 DSGVO)', desc: 'Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.' },
                    { title: 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)', desc: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.' },
                    { title: 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)', desc: 'Sie haben das Recht, Ihre Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.' },
                    { title: 'Widerspruchsrecht (Art. 21 DSGVO)', desc: 'Wenn Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.' },
                  ].map((right) => (
                    <div key={right.title} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <span className="font-semibold text-[#1a3a52]">{right.title}</span>
                      <p className="text-sm text-gray-600 mt-1">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. Data Protection Authority */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  7. Beschwerderecht
                </h2>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <p className="text-sm leading-relaxed mb-4">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
                    Die für uns zuständige Aufsichtsbehörde ist:
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="font-semibold text-[#1a3a52]">{dpa?.name}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {dpa?.street}<br />
                      {dpa?.zipCity}<br />
                      <a href={`https://${dpa?.website}`} target="_blank" rel="noopener noreferrer" className="text-[#1a3a52] underline flex items-center gap-1 inline mt-2">
                        {dpa?.website} <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* 8. Security */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6" />
                  8. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="text-sm leading-relaxed">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p className="text-sm leading-relaxed mt-2">
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
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
