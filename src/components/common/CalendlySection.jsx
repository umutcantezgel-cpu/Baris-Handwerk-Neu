"use client";
import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/batherm-info/30min?hide_event_type_details=1&hide_gdpr_banner=1';

const CalendlySection = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="booking" className="py-[var(--spacing-20)] bg-[var(--color-background-surface-secondary)]">
            <div className="max-w-4xl mx-auto px-[var(--spacing-4)] text-center">
                <div className="inline-flex items-center justify-center p-4 bg-[var(--color-brand-secondary)]/10 rounded-full mb-[var(--spacing-6)]">
                    <Calendar className="w-7 h-7 text-[var(--color-brand-secondary)]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] font-display">
                    Beratungstermin buchen
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-[var(--spacing-10)] max-w-2xl mx-auto leading-relaxed">
                    Wählen Sie ganz bequem online einen freien Termin für Ihre kostenlose Erstberatung.
                    Wir nehmen uns Zeit für Ihr Anliegen.
                </p>

                <div
                    className="calendly-inline-widget w-full h-[700px] bg-white rounded-[var(--radius-xl)] shadow-lg border border-[var(--color-border-default)] overflow-hidden"
                    data-url={CALENDLY_URL}
                    style={{ minWidth: '320px' }}
                />
            </div>
        </section>
    );
};

export default CalendlySection;
