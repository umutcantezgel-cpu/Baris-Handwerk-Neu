"use client";
import React from 'react';
import { siteConfig } from '@/config/site';
import { FileText, CreditCard, Shield, AlertCircle, Scale, Clock } from 'lucide-react';
import PageWrapper from '@/components/common/PageWrapper';
import Link from 'next/link';

export default function AGB() {
    return (
        <PageWrapper>
            <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

                        <div className="relative p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <Scale className="w-10 h-10 text-[#1a3a52]" />
                                <div>
                                    <h1 className="text-4xl font-bold text-[#1a3a52]">Allgemeine Geschäftsbedingungen</h1>
                                    <p className="text-gray-500 text-sm mt-1">Stand: Dezember 2024</p>
                                </div>
                            </div>

                            <div className="space-y-8 text-[#2c3e50]">

                                {/* §1 Scope */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        § 1 Geltungsbereich
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
                                            <span className="font-semibold"> {siteConfig.legalName}</span>,
                                            Inhaber: {siteConfig.legal.owner}, {siteConfig.contact.address.street}, {siteConfig.contact.address.zipCity}
                                            (nachfolgend &quot;Auftragnehmer&quot;) und dem Kunden (nachfolgend &quot;Auftraggeber&quot;).
                                        </p>
                                        <p className="mb-3">
                                            (2) Diese AGB bilden die Grundlage für alle Angebote, Aufträge und Dienstleistungsverträge
                                            im Bereich Heizungs-, Sanitär- und Klimatechnik.
                                        </p>
                                        <p>
                                            (3) Abweichende Bedingungen des Auftraggebers werden nur anerkannt, wenn der Auftragnehmer
                                            diesen schriftlich zugestimmt hat.
                                        </p>
                                    </div>
                                </section>

                                {/* §2 Services */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3">
                                        § 2 Leistungsbeschreibung
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Der Auftragnehmer erbringt Leistungen in den Bereichen:
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 mb-3 text-gray-600">
                                            <li>Installation, Wartung und Reparatur von Heizungsanlagen</li>
                                            <li>Sanitärinstallationen und -reparaturen</li>
                                            <li>Klimatechnik und Lüftungsanlagen</li>
                                            <li>Beratung und Planung im Bereich Haustechnik</li>
                                        </ul>
                                        <p>
                                            (2) Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder Auftrag.
                                        </p>
                                    </div>
                                </section>

                                {/* §3 Offers */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3">
                                        § 3 Angebot und Vertragsschluss
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich.
                                        </p>
                                        <p className="mb-3">
                                            (2) Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn
                                            der Leistungserbringung zustande.
                                        </p>
                                        <p>
                                            (3) Angebote sind 30 Tage gültig, sofern nicht anders angegeben.
                                        </p>
                                    </div>
                                </section>

                                {/* §4 Pricing */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" />
                                        § 4 Preise und Zahlung
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer,
                                            sofern nicht anders angegeben.
                                        </p>
                                        <p className="mb-3">
                                            (2) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar.
                                        </p>
                                        <p className="mb-3">
                                            (3) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5 Prozentpunkten über dem
                                            jeweiligen Basiszinssatz berechnet.
                                        </p>
                                        <p>
                                            (4) Umsatzsteuer-ID: {siteConfig.legal.taxId}
                                        </p>
                                    </div>
                                </section>

                                {/* §5 Warranty */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                                        <Shield className="w-5 h-5" />
                                        § 5 Gewährleistung
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Für Installationsarbeiten gilt eine Gewährleistungsfrist von 24 Monaten
                                            ab Abnahme der Leistung.
                                        </p>
                                        <p className="mb-3">
                                            (2) Die Gewährleistung erstreckt sich auf Material- und Ausführungsmängel.
                                        </p>
                                        <p className="mb-3">
                                            (3) Von der Gewährleistung ausgeschlossen sind:
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 mb-3 text-gray-600">
                                            <li>Schäden durch unsachgemäße Bedienung</li>
                                            <li>Normale Abnutzung und Verschleiß</li>
                                            <li>Eingriffe durch Dritte ohne Zustimmung des Auftragnehmers</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* §6 Liability */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        § 6 Haftung
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens,
                                            des Körpers oder der Gesundheit.
                                        </p>
                                        <p className="mb-3">
                                            (2) Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung
                                            wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren,
                                            vertragstypischen Schaden.
                                        </p>
                                        <p>
                                            (3) Die Haftung für mittelbare Schäden und Folgeschäden ist ausgeschlossen,
                                            soweit gesetzlich zulässig.
                                        </p>
                                    </div>
                                </section>

                                {/* §7 Cancellation */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        § 7 Widerrufsrecht für Verbraucher
                                    </h2>
                                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 text-sm leading-relaxed">
                                        <p className="mb-3 font-semibold">
                                            Widerrufsbelehrung
                                        </p>
                                        <p className="mb-3">
                                            (1) Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe von Gründen
                                            diesen Vertrag zu widerrufen.
                                        </p>
                                        <p className="mb-3">
                                            (2) Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
                                        </p>
                                        <p className="mb-3">
                                            (3) Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen
                                            Erklärung (z.B. per E-Mail an {siteConfig.contact.email}) über
                                            Ihren Entschluss informieren.
                                        </p>
                                        <p className="text-amber-700">
                                            <strong>Hinweis:</strong> Das Widerrufsrecht erlischt vorzeitig, wenn wir mit
                                            der Ausführung der Dienstleistung auf Ihren ausdrücklichen Wunsch begonnen haben.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-amber-200">
                                            <Link href="/widerruf" className="inline-flex items-center gap-2 text-[#1a3a52] font-semibold hover:underline">
                                                📄 Zum Muster-Widerrufsformular
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                {/* §8 Final */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#1a3a52] mb-3">
                                        § 8 Schlussbestimmungen
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm leading-relaxed">
                                        <p className="mb-3">
                                            (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                                        </p>
                                        <p className="mb-3">
                                            (2) Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig, Wetzlar.
                                        </p>
                                        <p className="mb-3">
                                            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit
                                            der übrigen Bestimmungen unberührt.
                                        </p>
                                        <p className="mb-3">
                                            (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                                        </p>
                                        <p className="mt-4 text-gray-500 border-t pt-4">
                                            <strong>Zuständige Aufsichtsbehörde:</strong> {siteConfig.legal.authority}
                                        </p>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
