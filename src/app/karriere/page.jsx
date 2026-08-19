"use client";
import React from 'react';
import { Users, Heart, Award, Clock, Briefcase, ArrowRight, MapPin, CheckCircle2, ShieldCheck, HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { COMPANY_DATA } from '@/config/company';

const benefits = [
    { icon: Award, title: 'Überdurchschnittliche Vergütung', description: 'Attraktives Gehalt über dem SHK-Tarif, Weihnachtsgeld, Leistungsprämien und steuerfreie Sachbezüge.' },
    { icon: Clock, title: 'Geregelte Arbeitszeiten & 30 Tage Urlaub', description: 'Verlässliche 4- oder 5-Tage-Woche (Montag bis Freitag), keine ständigen Wochenendschichten und 30 Tage Jahresurlaub.' },
    { icon: ShieldCheck, title: 'Top-Ausstattung & Markenwerkzeug', description: 'Voll ausgestattete Servicefahrzeuge, modernste Maschinen von Hilti/Festool und hochwertige Arbeitskleidung von Engelbert Strauss.' },
    { icon: Users, title: 'Familiäres & respektvolles Team', description: 'Kollegiales Miteinander auf Augenhöhe, kurze Entscheidungswege und echte Wertschätzung für Ihr Handwerk.' }
];

const openPositions = [
    {
        id: 1,
        title: 'Anlagenmechaniker SHK (m/w/d) für Sanitär- & Heizungstechnik',
        type: 'Vollzeit (unbefristet)',
        location: 'Wetzlar & regionaler Einsatz',
        description: 'Verstärken Sie unser Montageteam bei hochwertigen Badsanierungen, modernen Wärmepumpen-Installationen und anspruchsvollen Heizungsmodernisierungen.',
        tasks: [
            'Selbstständige Installation von Wärmepumpen, Fußbodenheizungen und Sanitäreinrichtungen',
            'Komplette Umsetzung von Premium-Badsanierungen im Privatkundenbereich',
            'Rohrleitungsbau, Trinkwasserinstallation und Abgassysteme nach anerkannten Regeln der Technik',
            'Inbetriebnahme und Einweisung unserer Kunden in die neuen Anlagen'
        ],
        requirements: [
            'Erfolgreich abgeschlossene Ausbildung als Anlagenmechaniker SHK, Gas-Wasser-Installateur oder Zentralheizungsbauer',
            'Handwerkliches Geschick und Freude an sauberer, präziser Ausführung',
            'Gültiger Führerschein der Klasse B',
            'Zuverlässigkeit, Teamgeist und kundenorientiertes Auftreten'
        ]
    },
    {
        id: 2,
        title: 'Servicetechniker / Kundendienstmonteur SHK (m/w/d)',
        type: 'Vollzeit (unbefristet)',
        location: 'Wetzlar, Gießen & Umgebung',
        description: 'Sie sind das Gesicht unseres Betriebes bei Wartung, Reparatur, Fehlersuche und Optimierung modernster Heizungs- und Regelungstechnik.',
        tasks: [
            'Wartung und Instandhaltung von Wärmepumpen, Gas- und Solaranlagen namhafter Hersteller',
            'Diagnose, Störungsbeseitigung und hydraulischer Abgleich',
            'Kundenberatung zu energetischen Optimierungen und Zubehör vor Ort',
            'Dokumentation der Serviceberichte über moderne Tablets'
        ],
        requirements: [
            'Fachausbildung im SHK- oder Elektrobereich mit fundierten Kenntnissen in Heizungselektronik & Steuerung',
            'Erfahrung in der Fehlersuche und im Umgang mit Messgeräten',
            'Führerschein Klasse B (eigenes Servicefahrzeug wird gestellt)',
            'Freundliche und lösungsorientierte Kommunikation'
        ]
    },
    {
        id: 3,
        title: 'Auszubildende/r zum Anlagenmechaniker SHK (m/w/d)',
        type: 'Ausbildung (3,5 Jahre)',
        location: 'Wetzlar',
        description: 'Lerne einen zukunftssicheren Beruf mit echter Perspektive! Bei uns lernst du von Meistern das gesamte Spektrum der modernen Umwelt- und Gebäudetechnik.',
        tasks: [
            'Montage von erneuerbaren Heizsystemen wie Wärmepumpen und Solaranlagen',
            'Planung und Gestaltung moderner Designer-Bäder',
            'Installation modernster Smart-Home Regeltechnik und Trinkwasserfilter',
            'Besuch der Berufsschule und überbetriebliche Lehrgänge mit voller Unterstützung'
        ],
        requirements: [
            'Guter Haupt- oder Realschulabschluss mit Interesse an Technik und Physik',
            'Spaß am praktischen Arbeiten mit Händen und Werkzeug',
            'Zuverlässigkeit, Pünktlichkeit und Neugierde',
            'Lust auf ein starkes Team und sichere Zukunftschancen'
        ]
    }
];

const karriereFaqs = [
    {
        q: 'Wie läuft der Bewerbungsprozess bei Batherm Haustechnik ab?',
        a: 'Ganz unkompliziert: Sie rufen uns einfach an, schreiben eine E-Mail oder nutzen unser Kontaktformular. Wir benötigen zunächst kein langes Anschreiben – ein kurzer Lebenslauf oder ein kurzes Telefonat reicht vollkommen aus. Danach laden wir Sie zu einem entspannten Kennenlernen bei uns ein.'
    },
    {
        q: 'Gibt es Möglichkeiten zur fachlichen Weiterbildung?',
        a: 'Ja, wir fördern gezielt Produktschulungen bei führenden Herstellern (z.B. Panasonic, Vaillant, Viessmann, Buderus), Lehrgänge zum Kälteschein (Sachkundenachweis) sowie die Weiterbildung zum Meister oder Techniker.'
    },
    {
        q: 'Werden Überstunden bezahlt oder ausgeglichen?',
        a: 'Jede geleistete Überstunde wird auf Ihrem persönlichen Zeitkonto minutengenau erfasst und kann nach Wunsch wahlweise mit Zuschlägen ausbezahlt oder durch Freizeit ausgeglichen werden.'
    }
];

export default function Karriere() {
    return (
        <PageWrapper>
            <SEO
                title="Karriere & Jobs | Batherm Haustechnik Wetzlar"
                description="Jobs im SHK-Handwerk: Anlagenmechaniker, Servicetechniker und Azubis gesucht. Faire Bezahlung, 30 Tage Urlaub & Top-Team in Wetzlar."
                keywords="Jobs SHK Wetzlar, Anlagenmechaniker Stelle Wetzlar, Ausbildung Handwerk Wetzlar, Kundendienstmonteur Jobs"
            />

            {/* ── Hero Section ─────────────────────────────────────────── */}
            <section className="relative bg-gradient-to-br from-blue-700 via-blue-900 to-neutral-900 pt-32 pb-20 px-4 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-blue-200 text-sm mb-6 font-semibold">
                        <Briefcase className="w-4 h-4 text-blue-300" />
                        Zukunftssichere Arbeitsplätze im SHK-Handwerk
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                        Karriere &amp; Jobs im SHK-Handwerk in Wetzlar
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
                        Werden Sie Teil unseres erfolgreichen Meisterbetriebs! Wir bieten erstklassige Rahmenbedingungen, modernste Werkzeuge und ein echtes Wohlfühlklima im Team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#offene-stellen">
                            <Button size="lg" className="bg-[#c69c6d] hover:bg-[#b58c5c] text-white font-bold px-8 py-6 rounded-full shadow-lg">
                                Offene Stellen ansehen
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                        <a href={`mailto:${COMPANY_DATA.contact.email}?subject=Kurzbewerbung%20Batherm`}>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full">
                                Unkomplizierte Kurzbewerbung
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Benefits Section ─────────────────────────────────────── */}
            <section className="py-20 bg-neutral-50 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-display">
                            Warum Handwerker gerne bei uns arbeiten
                        </h2>
                        <p className="text-neutral-600">
                            Wir wissen, was gute Fachkräfte leisten – und honorieren das mit handfesten Vorteilen für Sie und Ihre Familie.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-xs border border-neutral-200 flex flex-col justify-between">
                                    <div>
                                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Open Positions ───────────────────────────────────────── */}
            <section id="offene-stellen" className="py-20 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-display">
                            Aktuelle Stellenangebote
                        </h2>
                        <p className="text-neutral-600">
                            Wählen Sie das passende Berufsbild und starten Sie Ihre Zukunft bei Batherm Haustechnik.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {openPositions.map((job) => (
                            <div key={job.id} className="bg-neutral-50 rounded-2xl border border-neutral-200 shadow-sm overflow-hidden p-8 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 mb-6 border-b border-neutral-200">
                                    <div>
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                                            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                                                <Briefcase className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 bg-neutral-200/70 text-neutral-700 px-3 py-1 rounded-full font-medium">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    <a href={`mailto:${COMPANY_DATA.contact.email}?subject=Bewerbung: ${encodeURIComponent(job.title)}`}>
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-5 rounded-xl shadow-sm">
                                            Jetzt bewerben
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </a>
                                </div>

                                <p className="text-neutral-700 leading-relaxed mb-6 font-medium">{job.description}</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-neutral-200">
                                        <h4 className="font-bold text-neutral-900 mb-3 text-sm tracking-wide uppercase text-blue-600">Ihre Hauptaufgaben:</h4>
                                        <ul className="space-y-2 text-sm text-neutral-600">
                                            {job.tasks.map((task, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white p-5 rounded-xl border border-neutral-200">
                                        <h4 className="font-bold text-neutral-900 mb-3 text-sm tracking-wide uppercase text-emerald-600">Das bringen Sie mit:</h4>
                                        <ul className="space-y-2 text-sm text-neutral-600">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ──────────────────────────────────────────── */}
            <section className="py-20 bg-neutral-50 border-t border-neutral-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-display">
                            Häufige Fragen zu Bewerbung &amp; Einstieg
                        </h2>
                        <p className="text-neutral-600">
                            Transparent und ehrlich – Antworten für Bewerber.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {karriereFaqs.map((faq, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
                                <h3 className="font-bold text-lg text-neutral-900 mb-2 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    {faq.q}
                                </h3>
                                <p className="text-neutral-700 text-sm leading-relaxed pl-7">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ──────────────────────────────────────────── */}
            <section className="py-20 bg-neutral-900 text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                        Lust auf ein starkes Team und echte Wertschätzung?
                    </h2>
                    <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Schicken Sie uns gerne Ihre Bewerbung oder rufen Sie uns einfach direkt für ein lockeres Erstgespräch an.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg hover:scale-105"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Direkt anrufen: {COMPANY_DATA.contact.phone}</span>
                        </a>
                        <a
                            href={`mailto:${COMPANY_DATA.contact.email}?subject=Initiativbewerbung%20Batherm`}
                            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>E-Mail senden: {COMPANY_DATA.contact.email}</span>
                        </a>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
