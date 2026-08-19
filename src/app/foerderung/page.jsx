"use client";
import React from 'react';
import { Euro, FileCheck, Leaf, ArrowRight, CheckCircle2, Building2, Zap, HelpCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';

const subsidyPrograms = [
    {
        id: 'kfw-458',
        icon: Building2,
        title: 'KfW Heizungsförderung (Zuschuss 458)',
        subtitle: 'Bundesförderung für effiziente Gebäude (BEG) für Privatpersonen',
        color: 'bg-blue-600',
        items: [
            { name: 'Grundförderung', subsidy: '30%', description: 'Für alle selbstnutzenden Eigentümer und Vermieter beim Einbau einer förderfähigen Wärmepumpe oder Biomasseheizung.' },
            { name: 'Klima-Geschwindigkeitsbonus', subsidy: '+20%', description: 'Für den frühzeitigen Austausch funktionstüchtiger Öl-, Kohle-, Nachtspeicher- oder mind. 20 Jahre alter Gasheizungen.' },
            { name: 'Einkommensbonus', subsidy: '+30%', description: 'Für selbstnutzende Immobilieneigentümer mit einem zu versteuernden Haushaltsjahreseinkommen von bis zu 40.000 Euro.' },
            { name: 'Effizienzbonus Wärmepumpe', subsidy: '+5%', description: 'Für Wärmepumpen mit natürlichen Kältemitteln (z.B. R290 Propan) oder bei Nutzung von Erd-/Wasser-Wärmequellen.' },
            { name: 'Maximaler Fördersatz', subsidy: 'bis zu 70%', description: 'Kombinierbar bis zu einer maximalen Förderhöhe von 70% der anrechenbaren Kosten (max. 30.000 € für die 1. Wohneinheit).' }
        ]
    },
    {
        id: 'bafa-ebn',
        icon: Leaf,
        title: 'BAFA Einzelmaßnahmen (BEG EM)',
        subtitle: 'Gebäudehülle, Anlagentechnik & Heizungsoptimierung',
        color: 'bg-emerald-600',
        items: [
            { name: 'Heizungsoptimierung', subsidy: 'bis zu 20%', description: 'Hydraulischer Abgleich, Tausch alter Heizungspumpen und Einbau moderner Thermostate inklusive iSFP-Bonus.' },
            { name: 'Solarthermie-Anlagen', subsidy: 'bis zu 30%', description: 'Förderung für thermische Solaranlagen zur Warmwasserbereitung und kombinierten Heizungsunterstützung.' },
            { name: 'Ergänzungskredit KfW 358/359', subsidy: 'bis 120.000 €', description: 'Zinsvergünstigter Ergänzungskredit für geförderte Heizungstausch- und Sanierungsmaßnahmen.' }
        ]
    }
];

const benefits = [
    { icon: Euro, title: 'Bis zu 70% Zuschuss', description: 'Sparen Sie bis zu 21.000 Euro Direktzuschuss beim Umstieg auf eine moderne Wärmepumpe.' },
    { icon: FileCheck, title: 'Antragsservice inklusive', description: 'Wir stellen alle technischen Nachweise (BzA-ID) aus und begleiten Ihren Förderantrag.' },
    { icon: Zap, title: 'Laufende Heizkosten senken', description: 'Moderne Heiztechnik reduziert Ihren Energieverbrauch und schützt vor steigenden CO2-Preisen.' }
];

const foerderFaqs = [
    {
        q: 'Wie läuft der Antrag auf KfW-Heizungsförderung ab?',
        a: 'Zuerst schließen Sie mit uns einen Lieferungs- oder Leistungsvertrag mit aufschiebender oder auflösender Bedingung der Förderzusage ab. Anschließend erstellen wir für Sie die Bestätigung zum Antrag (BzA). Mit dieser BzA-ID registrieren Sie sich im Kundenportal „Meine KfW“ und stellen den Antrag online vor Beginn der eigentlichen Montage.'
    },
    {
        q: 'Welche Voraussetzungen gelten für die maximale 70% Förderung?',
        a: 'Die 70% Maximalförderung setzt sich zusammen aus der Grundförderung (30%), dem Geschwindigkeitsbonus (20%) beim Austausch alter fossiler Heizungen sowie dem Einkommensbonus (30% bei Haushaltseinkommen unter 40.000 €) oder dem Effizienzbonus (5%). Die Boni sind kombinierbar und werden bei 70% gedeckelt.'
    },
    {
        q: 'Gibt es auch Fördermittel für die Badsanierung?',
        a: 'Ja, über das KfW-Programm 159 („Altersgerecht Umbauen“) können barrierefreie Bäder, bodengleiche Duschen und altersgerechte Sanierungen mit zinsgünstigen Krediten gefördert werden. Zudem bezuschusst die Pflegekasse Maßnahmen zur Wohnumfeldverbesserung mit bis zu 4.000 Euro pro pflegebedürftiger Person.'
    },
    {
        q: 'Unterstützt Batherm Haustechnik mich bei allen Formalitäten?',
        a: 'Selbstverständlich! Wir erstellen sämtliche für die Bewilligung erforderlichen Fachunternehmererklärungen, hydraulischen Abgleichsberechnungen nach Verfahren B und helfen Ihnen Schritt für Schritt durch das Online-Portal.'
    }
];

export default function Foerderung() {
    return (
        <PageWrapper>
            <SEO
                title="Förderung & Finanzierung | Batherm Haustechnik"
                description="Maximale Förderung nutzen: Bis zu 70% Zuschuss für Ihre neue Heizung. Wir helfen bei KfW & BAFA-Anträgen."
                keywords="Heizungsförderung, KfW 458, BAFA Förderung, Wärmepumpe Förderung, Heizungstausch Wetzlar"
            />

            {/* ── Hero Section ─────────────────────────────────────────── */}
            <section className="relative bg-gradient-to-br from-[var(--color-brand-primary)] via-[#163045] to-[var(--color-neutral-900)] pt-32 pb-20 px-4 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-blue-200 text-sm mb-6 font-semibold backdrop-blur-sm">
                        <Euro className="w-4 h-4 text-[#c69c6d]" />
                        Staatliche Förderprogramme &amp; Zuschüsse
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                        Förderung &amp; Zuschüsse für Heizung in Wetzlar
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Nutzen Sie maximale Förderung &amp; Finanzierung sowie bis zu 70% staatliche Zuschüsse für Ihre neue Heizung in Wetzlar durch Meisterbetrieb Batherm Haustechnik. Wir prüfen Ihre Ansprüche und begleiten Sie von der Planung bis zur Auszahlung.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/beratung">
                            <Button size="lg" className="bg-[#c69c6d] hover:bg-[#b58c5c] text-white font-bold px-8 py-6 rounded-full shadow-lg">
                                Fördermittel-Check buchen
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/kontakt">
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full">
                                Direkte Anfrage stellen
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Benefits Section ─────────────────────────────────────── */}
            <section className="py-16 bg-neutral-50 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm text-center">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Subsidy Programs ─────────────────────────────────────── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-display">
                            Übersicht der Förderprogramme für Heizung &amp; Sanierung
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Die aktuellen Konditionen der Kreditanstalt für Wiederaufbau (KfW) und des BAFA im Überblick.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {subsidyPrograms.map((program) => {
                            const Icon = program.icon;
                            return (
                                <div key={program.id} className="bg-neutral-50 rounded-2xl border border-neutral-200 shadow-md overflow-hidden flex flex-col justify-between">
                                    <div>
                                        <div className={`${program.color} p-6 text-white`}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold">{program.title}</h3>
                                                    <p className="text-white/80 text-sm">{program.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            {program.items.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-xs">
                                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                    <div className="flex-grow">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <h4 className="font-semibold text-neutral-900">{item.name}</h4>
                                                            <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                                                                {item.subsidy}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-neutral-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ──────────────────────────────────────────── */}
            <section className="py-20 bg-neutral-50 border-t border-neutral-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-display">
                            Häufige Fragen zur staatlichen Heizungsförderung
                        </h2>
                        <p className="text-neutral-600">
                            Praxiswissen für Eigentümer in Wetzlar, Gießen und Umgebung.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {foerderFaqs.map((faq, index) => (
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
            <section className="py-20 bg-neutral-900 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-2xl mb-6 text-blue-400">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                        Jetzt Fördermittel sichern &amp; Kosten sparen
                    </h2>
                    <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Vereinbaren Sie ein persönliches Beratungsgespräch mit unserem Meisterbetrieb. Wir berechnen Ihre individuelle Förderquote und erstellen ein passgenaues Angebot.
                    </p>
                    <Link href="/beratung">
                        <Button size="lg" className="bg-[#c69c6d] hover:bg-[#b58c5c] text-white font-bold px-10 py-6 rounded-full shadow-xl">
                            Jetzt kostenlose Beratung anfordern
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
}
