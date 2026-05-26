import React from 'react';
import { Lightbulb, TrendingDown, FileText, ArrowRight, CheckCircle2, Zap, Home, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { createPageUrl } from '@/utils';

const processSteps = [
    {
        step: 1,
        icon: Home,
        title: 'Vor-Ort-Termin',
        description: 'Wir besichtigen Ihr Gebäude und erfassen den Ist-Zustand Ihrer Haustechnik.'
    },
    {
        step: 2,
        icon: FileText,
        title: 'Analyse & Berechnung',
        description: 'Wir analysieren Ihren Energieverbrauch und identifizieren Einsparpotenziale.'
    },
    {
        step: 3,
        icon: Lightbulb,
        title: 'Beratungsgespräch',
        description: 'Wir präsentieren Ihnen konkrete Maßnahmen mit Kosten-Nutzen-Rechnung.'
    },
    {
        step: 4,
        icon: Zap,
        title: 'Umsetzung',
        description: 'Auf Wunsch setzen wir die empfohlenen Maßnahmen direkt für Sie um.'
    }
];

const consultingTopics = [
    {
        icon: Thermometer,
        title: 'Heizungssystem',
        items: ['Effizienz der Bestandsanlage', 'Alternativen (Wärmepumpe, Pellets)', 'Hydraulischer Abgleich', 'Smart-Home-Integration']
    },
    {
        icon: Home,
        title: 'Gebäudehülle',
        items: ['Wärmedämmung', 'Fenster und Türen', 'Luftdichtheit', 'Wärmebrücken']
    },
    {
        icon: Zap,
        title: 'Erneuerbare Energien',
        items: ['Photovoltaik', 'Solarthermie', 'Wärmepumpen', 'Speicherlösungen']
    }
];

export default function Energieberatung() {
    return (
        <PageWrapper>
            <SEO
                title="Energieberatung | Batherm Haustechnik"
                description="Professionelle Energieberatung für Ihr Zuhause. Sparen Sie Heizkosten durch optimierte Haustechnik und staatlich geförderte Maßnahmen."
                keywords="Energieberatung Wetzlar, Heizkosten sparen, Energieeffizienz, Heizungsoptimierung"
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-500 to-orange-600 py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
                        <Lightbulb className="w-4 h-4" />
                        Energie sparen, Kosten senken
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                        Energieberatung
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
                        Finden Sie heraus, wie Sie Ihre Heizkosten senken und gleichzeitig die Umwelt schonen können.
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold">
                            Beratungstermin vereinbaren
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Savings Highlight */}
            <section className="py-[var(--spacing-12)] bg-[var(--color-neutral-900)]">
                <div className="max-w-7xl mx-auto px-[var(--spacing-4)] text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-4">
                            <TrendingDown className="w-10 h-10 text-[var(--color-brand-secondary)]" />
                            <div className="text-left">
                                <p className="text-3xl font-bold text-white">bis zu 30%</p>
                                <p className="text-[var(--color-neutral-400)]">Heizkosten sparen</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-[var(--color-neutral-700)]" />
                        <div className="flex items-center gap-4">
                            <Zap className="w-10 h-10 text-amber-400" />
                            <div className="text-left">
                                <p className="text-3xl font-bold text-white">Förderung</p>
                                <p className="text-[var(--color-neutral-400)]">für viele Maßnahmen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-4 font-display">
                            So läuft unsere Beratung ab
                        </h2>
                        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            In vier Schritten zu einem energieeffizienten Zuhause.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.step} className="relative text-center">
                                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-amber-600" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-neutral-900)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">{step.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Consulting Topics */}
            <section className="py-[var(--spacing-20)] bg-[var(--color-neutral-50)] px-[var(--spacing-4)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-4 font-display">
                            Unsere Beratungsthemen
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {consultingTopics.map((topic, index) => {
                            const Icon = topic.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-md border border-[var(--color-border-default)]">
                                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-4">{topic.title}</h3>
                                    <ul className="space-y-3">
                                        {topic.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                                                <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-secondary)] flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[var(--spacing-20)] bg-gradient-to-br from-amber-500 to-orange-600 px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                        Lassen Sie sich beraten
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin und entdecken Sie Ihr Einsparpotenzial.
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold">
                            Kostenlose Erstberatung
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
}
