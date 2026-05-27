"use client";
import React from 'react';
import { Users, Heart, Award, Clock, Briefcase, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { siteConfig } from '@/config/site';
import { createPageUrl } from '@/utils';

const benefits = [
    { icon: Clock, title: 'Geregelte Arbeitszeiten', description: 'Montag bis Freitag, keine Schichtarbeit.' },
    { icon: Award, title: 'Faire Bezahlung', description: 'Übertarifliche Vergütung plus Zusatzleistungen.' },
    { icon: Users, title: 'Starkes Team', description: 'Kollegiales Miteinander und flache Hierarchien.' },
    { icon: Heart, title: 'Familiäres Umfeld', description: 'Inhabergeführter Betrieb mit persönlicher Atmosphäre.' }
];

const openPositions = [
    {
        id: 1,
        title: 'Anlagenmechaniker SHK (m/w/d)',
        type: 'Vollzeit',
        location: 'Wetzlar',
        description: 'Für unser Team suchen wir einen erfahrenen Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik.',
        requirements: [
            'Abgeschlossene Ausbildung als Anlagenmechaniker SHK',
            'Mehrjährige Berufserfahrung wünschenswert',
            'Führerschein Klasse B',
            'Selbstständige und sorgfältige Arbeitsweise'
        ]
    },
    {
        id: 2,
        title: 'Auszubildende/r SHK (m/w/d)',
        type: 'Ausbildung',
        location: 'Wetzlar',
        description: 'Starte deine Karriere im Handwerk! Wir bilden aus und begleiten dich auf deinem Weg zum Gesellen.',
        requirements: [
            'Mindestens Hauptschulabschluss',
            'Technisches Interesse und handwerkliches Geschick',
            'Teamfähigkeit und Zuverlässigkeit',
            'Motivation und Lernbereitschaft'
        ]
    },
    {
        id: 3,
        title: 'Kundendiensttechniker (m/w/d)',
        type: 'Vollzeit',
        location: 'Wetzlar & Umgebung',
        description: 'Für Wartung und Reparatur bei unseren Kunden vor Ort suchen wir einen zuverlässigen Servicetechniker.',
        requirements: [
            'Abgeschlossene Ausbildung im SHK-Bereich',
            'Erfahrung im Kundendienst von Vorteil',
            'Freundliches Auftreten',
            'Eigenständiges Arbeiten'
        ]
    }
];

export default function Karriere() {
    return (
        <PageWrapper>
            <SEO
                title="Karriere | Jobs bei Batherm Haustechnik"
                description="Arbeiten bei Batherm Haustechnik in Wetzlar. Aktuelle Stellenangebote für Anlagenmechaniker, Azubis und Kundendiensttechniker im SHK-Bereich."
                keywords="Jobs SHK Wetzlar, Anlagenmechaniker Stelle, Ausbildung SHK, Karriere Handwerk"
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[var(--color-blue-600)] to-[var(--color-blue-800)] pt-[var(--spacing-32)] pb-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
                        <Briefcase className="w-4 h-4" />
                        Wir suchen Verstärkung
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                        Karriere bei Batherm
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
                        Werden Sie Teil unseres Teams! Wir bieten sichere Arbeitsplätze, faire Bezahlung und ein kollegiales Miteinander.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-[var(--spacing-16)] bg-[var(--color-neutral-50)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-4)]">
                    <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] text-center mb-12">
                        Was wir bieten
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[var(--color-border-default)] text-center">
                                    <div className="w-14 h-14 bg-[var(--color-blue-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-[var(--color-blue-600)]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-4 font-display">
                            Offene Stellen
                        </h2>
                        <p className="text-[var(--color-text-secondary)]">
                            Finden Sie die passende Position für Ihre Karriere.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {openPositions.map((job) => (
                            <div key={job.id} className="bg-white rounded-2xl border border-[var(--color-border-default)] shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap gap-3 text-sm">
                                                <span className="inline-flex items-center gap-1 text-[var(--color-text-secondary)]">
                                                    <Briefcase className="w-4 h-4" />
                                                    {job.type}
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-[var(--color-text-secondary)]">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location}
                                                </span>
                                            </div>
                                        </div>
                                        <a href={`mailto:${siteConfig.contact.email}?subject=Bewerbung: ${job.title}`}>
                                            <Button className="bg-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)] text-white">
                                                Jetzt bewerben
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </a>
                                    </div>
                                    <p className="text-[var(--color-text-secondary)] mb-4">{job.description}</p>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {job.requirements.map((req, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-secondary)] flex-shrink-0 mt-0.5" />
                                                <span className="text-[var(--color-text-primary)]">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[var(--spacing-20)] bg-[var(--color-neutral-900)] px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                        Initiativbewerbung willkommen!
                    </h2>
                    <p className="text-[var(--color-neutral-300)] text-lg mb-8 max-w-2xl mx-auto">
                        Keine passende Stelle dabei? Schicken Sie uns gerne Ihre Initiativbewerbung. Wir freuen uns, von Ihnen zu hören.
                    </p>
                    <a href={`mailto:${siteConfig.contact.email}?subject=Initiativbewerbung`}>
                        <Button className="bg-[var(--color-blue-700)] text-white hover:bg-[var(--color-blue-800)] px-[var(--spacing-8)] py-[var(--spacing-6)] text-[var(--font-size-lg)] shadow-[var(--shadow-lg)]">
                            Initiativbewerbung senden
                        </Button>
                    </a>
                </div>
            </section>
        </PageWrapper>
    );
}
