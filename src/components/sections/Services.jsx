import React from 'react'
import { useContent } from '@/contexts/ContentContext'
import ServiceCard from '@/components/ui/ServiceCard'
import { IconWrapper } from '@/utils/iconMapper'
import { cn } from '@/utils'

const Services = ({ className }) => {
    const { services } = useContent()

    return (
        <section className={cn("py-[var(--spacing-16)] bg-[var(--color-background-surface-secondary)]", className)}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-[var(--spacing-12)]">
                    <h2 className="font-display font-bold text-3xl md:text-4xl mb-[var(--spacing-4)] text-[var(--color-text-primary)]">
                        Unsere Dienstleistungen
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg">
                        Professionelle Lösungen für Ihre Haustechnik – von der Planung bis zur Wartung.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8)]">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.name}
                            description={service.shortDescription}
                            icon={(props) => <IconWrapper name={service.icon} {...props} />}
                            href={`/leistungen/${service.id}`}
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
