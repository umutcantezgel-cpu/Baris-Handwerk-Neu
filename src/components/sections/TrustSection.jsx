import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, Award } from 'lucide-react';

const benefits = [
    {
        icon: Clock,
        title: "Termintreue",
        description: "Wir halten unsere Termine und kommen pünktlich. Wenn wir sagen, wir sind da, dann sind wir da."
    },
    {
        icon: ShieldCheck,
        title: "Meisterbetrieb",
        description: "Qualität und Sicherheit durch zertifizierte Handwerksmeister mit langjähriger Erfahrung."
    },
    {
        icon: CheckCircle2,
        title: "Saubere Arbeit",
        description: "Wir verlassen die Baustelle so sauber, wie wir sie vorgefunden haben. Garantiert."
    },
    {
        icon: Award,
        title: "Faire Preise",
        description: "Transparente Kostenaufstellung ohne versteckte Gebühren. Handschlagqualität."
    }
];

export default function TrustSection() {
    return (
        <section className="py-[var(--spacing-20)] bg-[var(--color-neutral-0)] border-t border-[var(--color-border-default)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-8)]">
                    {benefits.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-blue-50)] flex items-center justify-center mb-[var(--spacing-6)] group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8 text-[var(--color-brand-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-3)]">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
