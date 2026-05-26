import { Button } from '@/components/ui/button';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { cn } from '@/utils';

const Hero = ({
    title,
    subtitle,
    primaryCtaText = "Angebot anfordern",
    secondaryCtaText = "Leistungen ansehen",
    backgroundImage,
    onPrimaryClick,
    onSecondaryClick,
    className
}) => {
    return (
        <section className={cn("relative w-full overflow-hidden min-h-[85vh] flex items-center", className)}>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-[var(--color-neutral-900)]">
                {/* Image with object-cover */}
                {backgroundImage && (
                    <ResponsiveImage
                        src={backgroundImage}
                        alt="Background installation work"
                        containerClassName="absolute inset-0 w-full h-full"
                        className="transition-transform duration-[20000ms] ease-linear hover:scale-105"
                        priority={true} // High priority for LCP
                        sizes="100vw"
                    />
                )}

                {/* Scrim Overlay - Accessibility: Ensures text contrast */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                {/* Gradient Overlay for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-[var(--spacing-4)] md:px-[var(--spacing-8)] pt-[var(--spacing-20)]">
                <div className="max-w-3xl animate-fadeInUp">
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-[var(--spacing-6)] tracking-tight text-white drop-shadow-md">
                        {title}
                    </h1>

                    <p className="text-[var(--font-size-lg)] md:text-[var(--font-size-xl)] mb-[var(--spacing-10)] max-w-xl leading-relaxed font-semibold" style={{ color: '#FFFFFF', textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.7)' }}>
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-[var(--spacing-4)]">
                        <Button
                            size="lg"
                            onClick={onPrimaryClick}
                            className="bg-[var(--color-button-primary-bg)] hover:bg-[var(--color-button-primary-hover)] border-none shadow-[var(--shadow-lg)] font-semibold text-[var(--font-size-base)] px-[var(--spacing-8)] py-[var(--spacing-6)] h-auto rounded-[var(--radius-base)] transition-all hover:translate-y-[-2px]"
                            style={{ color: '#FFFFFF' }}
                        >
                            {primaryCtaText}
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={onSecondaryClick}
                            className="bg-white/10 backdrop-blur-sm border-white/50 hover:bg-white hover:text-[var(--color-neutral-900)] font-semibold text-[var(--font-size-base)] px-[var(--spacing-8)] py-[var(--spacing-6)] h-auto rounded-[var(--radius-base)] transition-all"
                            style={{ color: '#FFFFFF', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                        >
                            {secondaryCtaText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
