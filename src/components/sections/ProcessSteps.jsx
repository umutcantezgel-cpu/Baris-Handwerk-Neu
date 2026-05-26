import React from 'react';
import { Phone, ClipboardCheck, Wrench, Smile } from 'lucide-react';

const steps = [
    {
        icon: Phone,
        title: "1. Erstkontakt",
        description: "Sie rufen uns an oder nutzen das Kontaktformular. Wir besprechen Ihr Anliegen und vereinbaren einen Termin."
    },
    {
        icon: ClipboardCheck,
        title: "2. Beratung & Planung",
        description: "Wir besichtigen die Situation vor Ort, beraten Sie individuell und erstellen ein transparentes Angebot."
    },
    {
        icon: Wrench,
        title: "3. Installation",
        description: "Zum vereinbarten Termin führen unsere Fachkräfte die Arbeiten sauber, pünktlich und fachgerecht aus."
    },
    {
        icon: Smile,
        title: "4. Übergabe & Service",
        description: "Wir weisen Sie in die neue Technik ein. Auch danach sind wir für Wartung und Service für Sie da."
    }
];

export default function ProcessSteps() {
    return (
        <section className="py-[var(--spacing-20)] bg-[var(--color-neutral-0)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)]">
                <div className="text-center mb-[var(--spacing-16)]">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)]">
                        Ihr Weg zur neuen Haustechnik
                    </h2>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto font-light">
                        Einfach, transparent und zuverlässig. So läuft die Zusammenarbeit mit uns ab.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-[var(--color-border-default)] -z-10" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-8)]">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center relative bg-[var(--color-neutral-0)] lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none shadow-sm lg:shadow-none border lg:border-0 border-[var(--color-border-default)]">
                                    <div className="w-24 h-24 rounded-full bg-[var(--color-background-surface-secondary)] border-4 border-[var(--color-neutral-0)] flex items-center justify-center mb-[var(--spacing-6)] shadow-sm">
                                        <Icon className="w-10 h-10 text-[var(--color-brand-primary)]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-3)]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
