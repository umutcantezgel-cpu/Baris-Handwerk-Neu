import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils'

const ServiceCard = ({ title, description, icon: Icon, href, className }) => {
    return (
        <div className={cn(
            "group relative flex flex-col p-[var(--spacing-6)] rounded-[var(--radius-lg)]",
            "bg-[var(--color-background-elevated)] border border-[var(--color-border-default)]",
            "transition-all duration-300 ease-in-out",
            "hover:shadow-md hover:border-[var(--color-border-strong)] hover:-translate-y-1",
            className
        )}>
            {Icon && (
                <div className="mb-[var(--spacing-4)] text-[var(--color-interactive-primary)]">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
            )}

            <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)] mb-[var(--spacing-2)] font-display">
                {title}
            </h3>

            <p className="text-[var(--font-size-base)] text-[var(--color-text-secondary)] leading-relaxed mb-[var(--spacing-4)] flex-grow">
                {description}
            </p>

            {href && (
                <Link to={href} className="inline-flex items-center text-[var(--font-size-sm)] font-medium text-[var(--color-text-interactive)] group-hover:underline mt-auto">
                    Mehr erfahren
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            )}
        </div>
    )
}

export default ServiceCard
