"use client";
import React from 'react';

// Using text placeholders styled to look like logos for now, as we don't have SVG assets for brands
// In a real scenario, these would be <img> tags or SVGs.
const partners = [
    "Viessmann", "Buderus", "Vaillant", "Bosch", "Grundfos", "Geberit", "Grohe", "Hansgrohe", "Duravit"
];

export default function PartnerLogos() {
    return (
        <section className="py-[var(--spacing-16)] bg-[var(--color-background-surface-secondary)] border-y border-[var(--color-border-default)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] text-center">
                <p className="text-[var(--color-text-tertiary)] uppercase tracking-wider text-sm font-semibold mb-[var(--spacing-8)]">
                    Unsere starken Partner
                </p>

                <div className="flex flex-wrap justify-center items-center gap-[var(--spacing-8)] md:gap-[var(--spacing-16)] opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {partners.map((partner, idx) => (
                        <span key={idx} className="text-xl md:text-2xl font-bold text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-600)] transition-colors cursor-default select-none">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
