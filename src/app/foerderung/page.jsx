"use client";
import React from 'react';
import { Euro, FileCheck, Leaf, ArrowRight, CheckCircle2, Building2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { createPageUrl } from '@/utils';

const subsidyPrograms = [
    {
        id: 'bafa',
        icon: Leaf,
        title: 'BAFA Förderung',
        subtitle: 'Bundesamt für Wirtschaft und Ausfuhrkontrolle',
        color: 'bg-[var(--color-brand-secondary)]',
        items: [
            { name: 'Wärmepumpe', subsidy: 'bis zu 40%', description: 'Förderung für effiziente Wärmepumpen-Heizungen' },
            { name: 'Solarthermie', subsidy: 'bis zu 25%', description: 'Solaranlagen zur Heizungsunterstützung' },
            { name: 'Biomasseheizung', subsidy: 'bis zu 20%', description: 'Pellet-, Hackschnitzel- und Scheitholzheizungen' },
            { name: 'Heizungsoptimierung', subsidy: 'bis zu 20%', description: 'Hydraulischer Abgleich und Pumpentausch' }
        ]
    },
    {
        id: 'kfw',
        icon: Building2,
        title: 'KfW Kredite',
        subtitle: 'Kreditanstalt für Wiederaufbau',
        color: 'bg-blue-500',
        items: [
            { name: 'Energieeffizient Sanieren', subsidy: 'bis 150.000€', description: 'Zinsgünstige Kredite für Komplettsanierung' },
            { name: 'Einzelmaßnahmen', subsidy: 'bis 60.000€', description: 'Kredite für einzelne energetische Maßnahmen' },
            { name: 'Tilgungszuschuss', subsidy: 'bis 45%', description: 'Zuschuss zur Kredittilgung bei Effizienzhaus-Standard' }
        ]
    }
];

const benefits = [
    { icon: Euro, title: 'Bares Geld sparen', description: 'Bis zu 40% der Investitionskosten werden gefördert.' },
    { icon: FileCheck, title: 'Wir helfen beim Antrag', description: 'Unterstützung bei der Antragstellung inklusive.' },
    { icon: Zap, title: 'Energiekosten senken', description: 'Moderne Technik reduziert laufende Kosten.' }
];

export default function Foerderung() {
    return (
        <PageWrapper>
            <SEO
                title="Förderung & Finanzierung | Batherm Haustechnik"
                description="Staatliche Förderprogramme für Heizung und Energie. BAFA und KfW Zuschüsse für Wärmepumpen, Solarthermie und mehr. Wir helfen bei der Antragstellung."
                keywords="BAFA Förderung, KfW Kredit, Wärmepumpe Förderung, Heizungsförderung, Energieeffizienz"
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-gray-900 text-sm mb-6 font-semibold shadow-lg">
                        <Euro className="w-4 h-4" />
                        Staatliche Förderprogramme 2024
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display drop-shadow-lg [text-shadow:_2px_2px_10px_rgb(255_255_255_/_80%)]">
                        Förderung & Finanzierung
                    </h1>
                    <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8 font-semibold [text-shadow:_1px_1px_8px_rgb(255_255_255_/_90%)]">
                        Profitieren Sie von attraktiven staatlichen Zuschüssen für Ihre neue Heizung. Wir beraten Sie zu allen Fördermöglichkeiten.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={createPageUrl('Contact')}>
                            <Button size="lg" className="bg-white text-[var(--color-brand-primary)] hover:bg-white/90 font-semibold">
                                Kostenlose Beratung
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-[var(--spacing-16)] bg-[var(--color-neutral-50)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-4)]">
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-[var(--color-brand-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-[var(--color-brand-secondary)]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">{benefit.title}</h3>
                                    <p className="text-[var(--color-text-secondary)]">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Subsidy Programs */}
            <section className="py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-4 font-display">
                            Aktuelle Förderprogramme
                        </h2>
                        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            Überblick über die wichtigsten staatlichen Förderprogramme für energetische Sanierung.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {subsidyPrograms.map((program) => {
                            const Icon = program.icon;
                            return (
                                <div key={program.id} className="bg-white rounded-2xl border border-[var(--color-border-default)] shadow-lg overflow-hidden">
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
                                            <div key={idx} className="flex items-start gap-4 p-4 bg-[var(--color-neutral-50)] rounded-xl">
                                                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-secondary)] flex-shrink-0 mt-0.5" />
                                                <div className="flex-grow">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-semibold text-[var(--color-neutral-900)]">{item.name}</h4>
                                                        <span className="text-sm font-bold text-[var(--color-brand-secondary)] bg-[var(--color-brand-secondary)]/10 px-2 py-1 rounded">
                                                            {item.subsidy}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[var(--spacing-20)] bg-[var(--color-neutral-900)] px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                        Wir kümmern uns um Ihren Förderantrag
                    </h2>
                    <p className="text-[var(--color-neutral-300)] text-lg mb-8 max-w-2xl mx-auto">
                        Lassen Sie sich von uns beraten, welche Förderung für Ihr Vorhaben in Frage kommt. Wir unterstützen Sie bei der Antragstellung.
                    </p>
                    <Link href={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white font-semibold">
                            Jetzt Beratungstermin vereinbaren
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
}
