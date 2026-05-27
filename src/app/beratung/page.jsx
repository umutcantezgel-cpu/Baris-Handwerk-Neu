"use client";
import React from 'react';
import { motion } from 'framer-motion';

import CalendlySection from '@/components/common/CalendlySection';
import { COMPANY_DATA } from '@/config/company';

const Beratung = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-[var(--color-neutral-900)] via-[var(--color-neutral-800)] to-[var(--color-brand-primary)]">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
                <div className="max-w-4xl mx-auto px-[var(--spacing-4)] text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
                            Kostenlose Erstberatung
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                            Termin vereinbaren
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Wählen Sie einen passenden Termin für Ihre persönliche Beratung.
                            Wir nehmen uns Zeit für Ihr Anliegen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calendly Widget */}
            <CalendlySection />

            {/* Contact Info Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-[var(--spacing-4)] text-center">
                    <p className="text-[var(--color-text-secondary)] mb-4">
                        Sie möchten lieber direkt mit uns sprechen?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:${COMPANY_DATA.contact.phone}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brand-primary)] text-white rounded-full font-medium hover:bg-[var(--color-brand-primary-dark)] transition-colors"
                        >
                            📞 {COMPANY_DATA.contact.phone}
                        </a>
                        <a
                            href={`mailto:${COMPANY_DATA.contact.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] rounded-full font-medium hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors"
                        >
                            ✉️ E-Mail schreiben
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Beratung;
