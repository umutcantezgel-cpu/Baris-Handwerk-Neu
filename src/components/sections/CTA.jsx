import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn, createPageUrl } from '@/utils'

const CTA = ({ className }) => {
    return (
        <section className={cn("py-[var(--spacing-20)] bg-[var(--color-background-surface-primary)] relative overflow-hidden border-t border-b border-[var(--color-border-default)]", className)}>

            {/* Subtle decorative accent */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-primary)] to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-[var(--spacing-6)] tracking-tight text-[var(--color-text-primary)]">
                    Bereit für Ihr Projekt?
                </h2>

                <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-[var(--spacing-10)]">
                    Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Anforderungen finden. Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin.
                </p>

                <div className="flex flex-col sm:flex-row gap-[var(--spacing-4)] justify-center">
                    <Link to={createPageUrl('Contact')}>
                        <Button
                            size="lg"
                            className="bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-hover)] shadow-lg border-transparent font-bold w-full sm:w-auto"
                        >
                            Kontakt aufnehmen
                        </Button>
                    </Link>

                    <Link to={createPageUrl('Services')}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white w-full sm:w-auto"
                        >
                            Leistungen ansehen
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA
