import React, { useState, useMemo } from 'react';
import { Search, HelpCircle, ArrowRight, ChevronDown, ChevronUp, Thermometer, Droplets, Wind, Wrench, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import SEO from '@/components/SEO';
import { createPageUrl } from '@/utils';

const faqData = {
    heizung: {
        icon: Thermometer,
        title: 'Heizung',
        color: 'bg-orange-100 text-orange-600',
        questions: [
            { q: 'Wie oft sollte meine Heizung gewartet werden?', a: 'Wir empfehlen eine jährliche Wartung, idealerweise vor Beginn der Heizperiode (September/Oktober). Dies sichert die Effizienz und verlängert die Lebensdauer Ihrer Anlage.' },
            { q: 'Wann lohnt sich ein Heizungstausch?', a: 'Bei Anlagen älter als 15-20 Jahre, stark steigenden Energiekosten oder häufigen Reparaturen ist ein Austausch oft wirtschaftlich sinnvoll. Wir beraten Sie gerne individuell.' },
            { q: 'Was kostet eine neue Heizung?', a: 'Die Kosten variieren stark nach Anlagentyp (Gas, Wärmepumpe, Pellets) und Gebäudegröße. Gas-Brennwertheizungen beginnen bei ca. 8.000€, Wärmepumpen ab ca. 15.000€ (vor Förderung).' },
            { q: 'Welche Heizung ist die beste?', a: 'Das hängt von Ihrem Gebäude, Ihrem Budget und Ihren Prioritäten ab. Wärmepumpen sind sehr effizient und werden stark gefördert, Gas ist oft günstiger in der Anschaffung.' }
        ]
    },
    sanitaer: {
        icon: Droplets,
        title: 'Sanitär',
        color: 'bg-blue-100 text-blue-600',
        questions: [
            { q: 'Was kostet eine Badsanierung?', a: 'Ein Standardbad beginnt bei ca. 15.000€, während Luxusbäder deutlich teurer sein können. Wir erstellen Ihnen gerne ein individuelles Angebot nach einer Vor-Ort-Besichtigung.' },
            { q: 'Wie lange dauert eine Badsanierung?', a: 'Ein komplettes Bad kann in 2-3 Wochen fertiggestellt werden. Die genaue Dauer hängt vom Umfang der Arbeiten ab.' },
            { q: 'Was tun bei einem Wasserrohrbruch?', a: 'Sofort den Hauptwasserhahn schließen, Strom im betroffenen Bereich abschalten und uns kontaktieren. Dokumentieren Sie Schäden für die Versicherung.' },
            { q: 'Wie vermeide ich Legionellen?', a: 'Warmwasser auf mindestens 60°C halten, alle Wasserhähne regelmäßig nutzen (mindestens alle 3 Tage) und die Anlage jährlich warten lassen.' }
        ]
    },
    klima: {
        icon: Wind,
        title: 'Klima & Lüftung',
        color: 'bg-cyan-100 text-cyan-600',
        questions: [
            { q: 'Wie oft muss eine Klimaanlage gewartet werden?', a: 'Mindestens einmal jährlich sollten Filter gereinigt/gewechselt und das System überprüft werden. Bei starker Nutzung empfehlen wir halbjährliche Wartung.' },
            { q: 'Welche Klimaanlage ist für mein Zuhause geeignet?', a: 'Das hängt von der Raumgröße und Ihren Anforderungen ab. Split-Klimaanlagen sind effizient und leise, mobile Geräte flexibel einsetzbar.' },
            { q: 'Wie hoch sind die Stromkosten einer Klimaanlage?', a: 'Moderne Inverter-Klimaanlagen verbrauchen bei typischer Nutzung ca. 30-50€ pro Monat. Der genaue Verbrauch hängt von Gerät und Nutzungsdauer ab.' }
        ]
    },
    service: {
        icon: Wrench,
        title: 'Service & Allgemeines',
        color: 'bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)]',
        questions: [
            { q: 'Ist eine Vor-Ort-Besichtigung notwendig?', a: 'Für ein genaues Angebot schauen wir uns die Gegebenheiten bei Ihnen vor Ort an. Dieser Termin ist für Sie unverbindlich.' },
            { q: 'In welchem Gebiet sind Sie tätig?', a: 'Wir sind in Wetzlar und im gesamten Lahn-Dill-Kreis sowie Richtung Gießen für Sie tätig.' }
        ]
    },
    kosten: {
        icon: Euro,
        title: 'Kosten & Förderung',
        color: 'bg-amber-100 text-amber-600',
        questions: [
            { q: 'Helfen Sie bei der Beantragung von Fördermitteln?', a: 'Selbstverständlich. Wir beraten Sie zu aktuellen Förderprogrammen (BAFA, KfW) und unterstützen Sie bei der Antragstellung.' },
            { q: 'Wie hoch ist die Förderung für Wärmepumpen?', a: 'Aktuell werden Wärmepumpen mit bis zu 40% der Investitionskosten gefördert (BAFA). Die genaue Höhe hängt von verschiedenen Faktoren ab.' },
            { q: 'Erstellen Sie kostenlose Angebote?', a: 'Ja, wir erstellen Ihnen gerne ein unverbindliches Angebot nach einer Vor-Ort-Besichtigung.' }
        ]
    }
};

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openCategory, setOpenCategory] = useState('heizung');
    const [openQuestions, setOpenQuestions] = useState({});

    const categories = Object.entries(faqData);

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return categories;

        return categories.map(([key, category]) => {
            const filteredQuestions = category.questions.filter(
                q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    q.a.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return [key, { ...category, questions: filteredQuestions }];
        }).filter(([, category]) => category.questions.length > 0);
    }, [searchQuery, categories]);

    const toggleQuestion = (categoryKey, questionIndex) => {
        const key = `${categoryKey}-${questionIndex}`;
        setOpenQuestions(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <PageWrapper>
            <SEO
                title="FAQ | Häufige Fragen | Batherm Haustechnik"
                description="Antworten auf häufig gestellte Fragen zu Heizung, Sanitär, Klimatechnik, Wartung und Kosten. Finden Sie schnelle Hilfe."
                keywords="FAQ Heizung, Sanitär Fragen, Klimaanlage FAQ, Wartung Fragen"
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Schnelle Antworten
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                        Häufig gestellte Fragen
                    </h1>
                    <p className="text-xl text-white/80 mb-8 font-light">
                        Finden Sie Antworten auf die wichtigsten Fragen rund um Heizung, Sanitär und Klima.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-text-tertiary)]" />
                        <Input
                            type="text"
                            placeholder="Frage suchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-14 rounded-xl text-lg bg-white border-0 shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-[var(--spacing-20)] px-[var(--spacing-4)]">
                <div className="max-w-5xl mx-auto">
                    {/* Category Tabs */}
                    {!searchQuery && (
                        <div className="flex flex-wrap gap-3 justify-center mb-12">
                            {categories.map(([key, category]) => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setOpenCategory(key)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${openCategory === key
                                            ? 'bg-[var(--color-neutral-900)] text-white shadow-md'
                                            : 'bg-[var(--color-neutral-100)] text-[var(--color-text-secondary)] hover:bg-[var(--color-neutral-200)]'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {category.title}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {/* Questions */}
                    <div className="space-y-8">
                        {(searchQuery ? filteredCategories : categories.filter(([key]) => key === openCategory)).map(([key, category]) => {
                            const Icon = category.icon;
                            return (
                                <div key={key}>
                                    {searchQuery && (
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-xl font-bold text-[var(--color-neutral-900)]">{category.title}</h2>
                                        </div>
                                    )}
                                    <div className="space-y-3">
                                        {category.questions.map((faq, idx) => {
                                            const isOpen = openQuestions[`${key}-${idx}`];
                                            return (
                                                <div
                                                    key={idx}
                                                    className="bg-white rounded-xl border border-[var(--color-border-default)] shadow-sm overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => toggleQuestion(key, idx)}
                                                        className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[var(--color-neutral-50)] transition-colors"
                                                    >
                                                        <span className="font-semibold text-[var(--color-neutral-900)]">{faq.q}</span>
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5 text-[var(--color-text-tertiary)] flex-shrink-0" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-[var(--color-text-tertiary)] flex-shrink-0" />
                                                        )}
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-5 pb-5 text-[var(--color-text-secondary)] border-t border-[var(--color-border-default)] pt-4 animate-in slide-in-from-top-2 duration-200">
                                                            {faq.a}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* No Results */}
                    {searchQuery && filteredCategories.length === 0 && (
                        <div className="text-center py-12">
                            <HelpCircle className="w-16 h-16 text-[var(--color-neutral-300)] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Keine Ergebnisse</h3>
                            <p className="text-[var(--color-text-secondary)]">
                                Für "{searchQuery}" wurden keine Fragen gefunden.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[var(--spacing-16)] bg-[var(--color-neutral-100)] px-[var(--spacing-4)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
                        Ihre Frage nicht dabei?
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                        Kontaktieren Sie uns direkt – wir helfen Ihnen gerne weiter.
                    </p>
                    <Link to={createPageUrl('Contact')}>
                        <Button className="bg-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-800)] text-white">
                            Kontakt aufnehmen
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </PageWrapper>
    );
}
