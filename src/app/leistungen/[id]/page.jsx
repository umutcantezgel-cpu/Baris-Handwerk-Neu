"use client";
import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight, Phone, Mail, Users, Award, Clock, Shield } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { createPageUrl } from '@/utils';
import SERVICES from '@/config/services';
import { IconWrapper } from '@/utils/iconMapper';
import { COMPANY_DATA } from '@/config/company';
import CalendlySection from '@/components/common/CalendlySection';

// Default process steps used if service doesn't have custom ones
const defaultProcessSteps = [
    { step: 1, title: 'Beratung', description: 'Wir besprechen Ihre Wünsche und Anforderungen in einem persönlichen Gespräch.' },
    { step: 2, title: 'Planung', description: 'Wir erstellen ein maßgeschneidertes Konzept mit transparenter Kostenaufstellung.' },
    { step: 3, title: 'Umsetzung', description: 'Unsere Fachleute führen die Arbeiten termingerecht und sauber aus.' },
    { step: 4, title: 'Übergabe', description: 'Wir übergeben Ihnen das fertige Projekt und erklären alle Funktionen.' }
];

// Default benefits
const defaultBenefits = [
    { icon: Award, title: 'Meisterbetrieb', description: 'Höchste Qualität durch zertifizierte Handwerker.' },
    { icon: Clock, title: 'Termintreue', description: 'Pünktliche Fertigstellung zum vereinbarten Termin.' },
    { icon: Shield, title: 'Garantie', description: 'Garantie auf Material und Arbeit für Ihre Sicherheit.' },
    { icon: Users, title: 'Persönlicher Ansprechpartner', description: 'Ein Ansprechpartner von Anfang bis Ende.' }
];

const ServiceDetail = () => {
    const { id } = useParams();
    const router = useRouter();
    const content = useContent();

    const servicesData = content?.services || SERVICES;
    const serviceList = Array.isArray(servicesData) ? servicesData : (servicesData?.services || []);
    const service = useMemo(() => serviceList.find(s => s.id === id), [serviceList, id]);

    // Get other services for "Related Services" section
    const relatedServices = useMemo(() =>
        serviceList.filter(s => s.id !== id).slice(0, 3),
        [serviceList, id]
    );

    if (!service) {
        return (
            <PageWrapper>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-[var(--spacing-4)]">
                    <h1 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)]">Service nicht gefunden</h1>
                    <Link href={createPageUrl('Services')}>
                        <Button>Zurück zu den Leistungen</Button>
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    const processSteps = service.processSteps || defaultProcessSteps;
    const benefits = service.benefits || defaultBenefits;

    return (
        <PageWrapper>
            <SEO
                title={`${service.name} | Batherm Haustechnik Wetzlar`}
                description={service.shortDescription}
                keywords={`${service.name}, ${service.subcategories?.map(s => s.name).join(', ')}, Wetzlar`}
            />

            {/* Hero Section with Background Image */}
            <section
                className="relative py-[var(--spacing-24)] px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)]"
                style={{
                    backgroundImage: service.heroImage ? `url(${service.heroImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/80" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link href={createPageUrl('Services')} className="inline-flex items-center text-white/80 hover:text-white mb-[var(--spacing-8)] transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Zurück zur Übersicht
                    </Link>

                    <div className="flex flex-col md:flex-row gap-[var(--spacing-8)] items-start">
                        <div className="flex-1">
                            <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-[var(--color-brand-primary)] flex items-center justify-center mb-[var(--spacing-6)]">
                                <IconWrapper name={service.icon} className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-[var(--spacing-4)] font-display">
                                {service.name}
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                                {service.shortDescription}
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link href={createPageUrl('Contact')}>
                                <Button size="lg" className="bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-primary)] text-white border-0 shadow-lg">
                                    {service.ctaText || 'Jetzt anfragen'}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subcategories Section */}
            {service.subcategories && service.subcategories.length > 0 && (
                <section className="py-[var(--spacing-16)] bg-[var(--color-neutral-50)] px-[var(--spacing-4)]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] text-center mb-[var(--spacing-8)]">
                            Unsere {service.name} Bereiche
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-4)]">
                            {service.subcategories.map((sub, idx) => (
                                <div key={idx} className="bg-white p-[var(--spacing-6)] rounded-xl border border-[var(--color-border-default)] text-center hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-[var(--color-blue-100)] rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-3)]">
                                        <IconWrapper name={sub.icon} className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                    </div>
                                    <h3 className="font-semibold text-[var(--color-neutral-900)]">{sub.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content & Features */}
            <section className="py-[var(--spacing-16)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-[var(--spacing-12)]">
                        <div>
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)]">Leistungsbeschreibung</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-[var(--spacing-8)]">
                                {service.detailText}
                            </p>

                            {service.features && service.features.length > 0 && (
                                <div className="space-y-[var(--spacing-3)]">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-secondary)] flex-shrink-0" />
                                            <span className="text-gray-800">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar CTA */}
                        <div>
                            <div className="bg-blue-800 rounded-2xl p-8 text-white shadow-xl sticky top-24">
                                <h3 className="text-2xl font-bold text-white mb-[var(--spacing-4)]">
                                    Interesse an {service.name}?
                                </h3>
                                <p className="text-white/90 mb-[var(--spacing-6)] leading-relaxed">
                                    Unsere Experten beraten Sie gerne persönlich und unverbindlich.
                                </p>

                                <div className="space-y-[var(--spacing-3)] mb-[var(--spacing-6)]">
                                    <a href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`} className="flex items-center p-[var(--spacing-3)] bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                        <Phone className="w-5 h-5 mr-3" />
                                        <span className="font-medium">{COMPANY_DATA.contact.phone}</span>
                                    </a>
                                    <a href={`mailto:${COMPANY_DATA.contact.email}`} className="flex items-center p-[var(--spacing-3)] bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                        <Mail className="w-5 h-5 mr-3" />
                                        <span className="font-medium">{COMPANY_DATA.contact.email}</span>
                                    </a>
                                </div>

                                <Link href={createPageUrl('Contact')} className="block">
                                    <Button className="w-full bg-white text-[var(--color-brand-primary)] hover:bg-[var(--color-neutral-100)] border-0 h-12 font-bold">
                                        Kontakt aufnehmen
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-[var(--spacing-16)] bg-[var(--color-neutral-900)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-[var(--spacing-12)]">
                        Unser Ablauf
                    </h2>
                    <div className="grid md:grid-cols-4 gap-[var(--spacing-6)]">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="text-center relative">
                                <div className="w-12 h-12 bg-[var(--color-brand-primary)] rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-4)] text-white font-bold text-lg">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-[var(--color-neutral-400)] text-sm">{step.description}</p>
                                {idx < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-[var(--color-neutral-700)]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-[var(--spacing-16)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] text-center mb-[var(--spacing-12)]">
                        Warum Batherm für {service.name}?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-6)]">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={idx} className="text-center p-[var(--spacing-6)] bg-[var(--color-neutral-50)] rounded-xl border border-[var(--color-border-default)]">
                                    <div className="w-14 h-14 bg-[var(--color-brand-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-4)]">
                                        <Icon className="w-7 h-7 text-[var(--color-brand-secondary)]" />
                                    </div>
                                    <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {/* Quality Promise Section */}
            <section className="py-[var(--spacing-16)] bg-[var(--color-neutral-50)] px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 bg-[var(--color-brand-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-[var(--spacing-6)]">
                        <Shield className="w-8 h-8 text-[var(--color-brand-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)]">
                        Unser Qualitätsversprechen
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        Wir verstehen, dass Handwerksarbeiten Vertrauenssache sind. Deshalb garantieren wir Ihnen nicht nur eine fachgerechte Ausführung nach neuesten Standards, sondern auch absolute Zuverlässigkeit und Sauberkeit. Ihr Projekt ist bei unserem erfahrenen Team in besten Händen.
                    </p>
                </div>
            </section>

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section className="py-[var(--spacing-16)] px-[var(--spacing-4)]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] text-center mb-[var(--spacing-8)]">
                            Weitere Leistungen
                        </h2>
                        <div className="grid md:grid-cols-3 gap-[var(--spacing-6)]">
                            {relatedServices.map((rel) => (
                                <Link
                                    key={rel.id}
                                    href={`/leistungen/${rel.id}`}
                                    className="group bg-white rounded-xl border border-[var(--color-border-default)] p-[var(--spacing-6)] hover:shadow-lg transition-all"
                                >
                                    <div className="w-12 h-12 bg-[var(--color-blue-100)] rounded-lg flex items-center justify-center mb-[var(--spacing-4)] group-hover:bg-[var(--color-brand-primary)] transition-colors">
                                        <IconWrapper name={rel.icon} className="w-6 h-6 text-[var(--color-brand-primary)] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-[var(--color-neutral-900)] mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                                        {rel.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{rel.shortDescription}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Calendly Booking Section */}
            <CalendlySection />

            {/* Final CTA */}
            <section className="py-[var(--spacing-16)] bg-[var(--color-brand-primary)] px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-[var(--spacing-4)]">
                        Bereit für Ihr {service.name} Projekt?
                    </h2>
                    <p className="text-white/90 text-lg mb-[var(--spacing-8)]">
                        Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
                    </p>
                    <Link href={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-white text-[var(--color-brand-primary)] hover:bg-[var(--color-neutral-100)] font-bold">
                            Jetzt Kontakt aufnehmen
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
};

export default ServiceDetail;
