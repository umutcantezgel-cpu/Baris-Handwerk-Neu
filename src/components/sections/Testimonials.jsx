"use client";
import React from 'react'
import { cn } from '@/utils'

const testimonials = [
    {
        id: 1,
        content: "Die Professionalität und Sauberkeit der Arbeit hat uns absolut überzeugt. Unsere neue Wärmepumpe läuft perfekt und die Einweisung war erstklassig.",
        author: "Thomas Müller",
        role: "Hausbesitzer in Wetzlar",
        rating: 5
    },
    {
        id: 2,
        content: "Endlich ein Handwerker, der pünktlich ist und mitdenkt. Das Bad ist ein Traum geworden. Absolute Empfehlung für alle, die Wert auf Qualität legen.",
        author: "Sarah Weber",
        role: "Architektin",
        rating: 5
    },
    {
        id: 3,
        content: "Schnelle Hilfe beim Heizungsausfall und sehr faire Beratung für die Modernisierung. Man merkt sofort die jahrelange Erfahrung.",
        author: "Michael Klein",
        role: "Unternehmer",
        rating: 5
    },
    {
        id: 4,
        content: "Die Badsanierung verlief absolut reibungslos. Von der Planung bis zur Übergabe alles top. Barrierefrei und trotzdem schick!",
        author: "Familie Bergmann",
        role: "Rentner-Ehepaar",
        rating: 5
    },
    {
        id: 5,
        content: "Super Service bei der Wartung unserer Klimaanlage. Der Techniker war sehr freundlich und hat alles genau erklärt.",
        author: "Lisa Wagner",
        role: "Büroleitung",
        rating: 5
    },
    {
        id: 6,
        content: "Wir sind begeistert von unserer neuen Solaranlage. Die Beratung war ehrlich und kompetent. Klare Empfehlung!",
        author: "Stefan Jung",
        role: "Hausbesitzer",
        rating: 5
    }
]

const Testimonials = ({ className = ''}) => {
    return (
        <section className={cn("py-[var(--spacing-16)] bg-[var(--color-background-surface-secondary)]", className)}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-[var(--spacing-12)]">
                    <h2 className="font-display font-bold text-3xl md:text-4xl mb-[var(--spacing-4)] text-[var(--color-text-primary)]">
                        Vertrauen durch Qualität
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg">
                        Was unsere Kunden über unsere Arbeit sagen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8)]">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-[var(--color-background-elevated)] p-[var(--spacing-8)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-1 mb-[var(--spacing-4)]">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={cn(
                                            "w-5 h-5",
                                            i < testimonial.rating ? "text-[var(--color-feedback-warning)]" : "text-[var(--color-neutral-300)]"
                                        )}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-[var(--color-text-primary)] leading-relaxed mb-[var(--spacing-6)]">
                                "{testimonial.content}"
                            </blockquote>

                            <div className="flex items-center gap-[var(--spacing-3)]">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-neutral-200)] flex items-center justify-center font-bold text-[var(--color-text-secondary)]">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-[var(--color-text-primary)]">{testimonial.author}</div>
                                    <div className="text-sm text-[var(--color-text-secondary)]">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
