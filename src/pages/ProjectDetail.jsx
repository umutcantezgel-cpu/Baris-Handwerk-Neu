import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Ruler, Clock, ArrowRight, Quote } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/common/PageWrapper';
import { createPageUrl } from '@/utils';
import { projects as configProjects, categories } from '@/config/projects';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const content = useContent();

    // Simplify data loading: prioritize context, fall back to config
    const projectsData = content?.projects || configProjects;
    const projectList = Array.isArray(projectsData) ? projectsData : (projectsData?.projects || []);

    const project = useMemo(() => projectList.find(p => p.id.toString() === id), [projectList, id]);

    if (!project) {
        return (
            <PageWrapper>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-[var(--spacing-4)]">
                    <h1 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)]">Projekt nicht gefunden</h1>
                    <p className="text-[var(--color-text-secondary)] mb-[var(--spacing-8)]">Das gesuchte Projekt existiert leider nicht.</p>
                    <Link to={createPageUrl('Projects')}>
                        <Button>Zurück zur Übersicht</Button>
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    const categoryName = categories.find(c => c.id === project.category)?.name || project.category;
    const primaryImage = project.images?.find(img => img.type === 'after')?.url || project.images?.[0]?.url;
    const beforeImages = project.images?.filter(img => img.type === 'before') || [];
    const afterImages = project.images?.filter(img => img.type === 'after' && img.url !== primaryImage) || [];

    return (
        <PageWrapper>
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px]">
                <div className="absolute inset-0 bg-[var(--color-neutral-900)]">
                    {primaryImage && (
                        <ResponsiveImage
                            src={primaryImage}
                            alt={project.title}
                            containerClassName="w-full h-full opacity-60"
                            priority={true}
                            sizes="100vw"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neutral-900)] via-transparent to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-[var(--spacing-12)] md:pb-[var(--spacing-24)] px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] max-w-7xl mx-auto">
                    <Link to={createPageUrl('Projects')} className="inline-flex items-center text-white/80 hover:text-white mb-[var(--spacing-6)] transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Zurück zu den Projekten
                    </Link>

                    <div className="flex flex-wrap items-center gap-[var(--spacing-3)] mb-[var(--spacing-4)]">
                        <span className="bg-[var(--color-brand-primary)] text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                            {categoryName}
                        </span>
                        <span className="text-white/90 flex items-center text-sm font-medium backdrop-blur-md bg-white/10 px-3 py-1 rounded-full border border-white/20">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.year}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-[var(--spacing-4)] font-display">
                        {project.title}
                    </h1>
                    <div className="flex items-center text-white/90 text-lg">
                        <MapPin className="w-5 h-5 mr-2 text-[var(--color-brand-secondary)]" />
                        {project.location}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] py-[var(--spacing-16)] md:py-[var(--spacing-24)]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--spacing-12)] lg:gap-[var(--spacing-24)]">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-[var(--spacing-12)]">

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] font-display">Über das Projekt</h2>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                                {project.description}
                            </p>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="grid md:grid-cols-2 gap-[var(--spacing-8)]">
                            {project.challenge && (
                                <div className="bg-[var(--color-feedback-error-bg)] p-[var(--spacing-6)] rounded-[var(--radius-lg)] border border-[var(--color-feedback-error-border)]">
                                    <h3 className="text-lg font-bold text-[var(--color-feedback-error-text)] mb-[var(--spacing-3)]">Herausforderung</h3>
                                    <p className="text-[var(--color-text-secondary)]">{project.challenge}</p>
                                </div>
                            )}
                            {project.solution && (
                                <div className="bg-[var(--color-feedback-success-bg)] p-[var(--spacing-6)] rounded-[var(--radius-lg)] border border-[var(--color-feedback-success-border)]">
                                    <h3 className="text-lg font-bold text-[var(--color-feedback-success-text)] mb-[var(--spacing-3)]">Lösung</h3>
                                    <p className="text-[var(--color-text-secondary)]">{project.solution}</p>
                                </div>
                            )}
                        </div>

                        {/* Additional Images (Gallery) */}
                        {/* Quality Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] font-display">Qualität, die überzeugt</h3>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                Bei der Umsetzung dieses Projekts haben wir modernste Techniken und hochwertige Materialien verwendet, um ein langlebiges und energieeffizientes Ergebnis zu erzielen. Unsere erfahrenen Fachkräfte sorgen dafür, dass jede Installation höchsten Qualitätsstandards entspricht.
                            </p>
                        </div>

                        {/* Testimonial */}
                        {project.testimonial && (
                            <div className="bg-[var(--color-background-surface-secondary)] p-[var(--spacing-8)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)] relative">
                                <Quote className="absolute top-8 left-8 w-12 h-12 text-[var(--color-brand-primary)] opacity-10" />
                                <blockquote className="relative z-10">
                                    <p className="text-lg italic text-[var(--color-text-secondary)] mb-[var(--spacing-4)]">
                                        "{project.testimonial.text}"
                                    </p>
                                    <footer className="font-semibold text-[var(--color-neutral-900)]">
                                        — {project.testimonial.author}
                                        {project.testimonial.role && <span className="text-[var(--color-text-tertiary)] font-normal">, {project.testimonial.role}</span>}
                                    </footer>
                                </blockquote>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-1">
                        <div className="bg-[var(--color-background-elevated)] rounded-[var(--radius-2xl)] shadow-[var(--shadow-lg)] border border-[var(--color-border-default)] p-[var(--spacing-8)] sticky top-24">
                            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-6)] flex items-center font-display">
                                Projektdaten
                            </h3>

                            <div className="space-y-[var(--spacing-6)]">
                                {project.duration && (
                                    <div className="flex items-center justify-between py-[var(--spacing-3)] border-b border-[var(--color-border-default)]">
                                        <span className="text-[var(--color-text-tertiary)] flex items-center">
                                            <Clock className="w-4 h-4 mr-2" />
                                            Dauer
                                        </span>
                                        <span className="font-semibold text-[var(--color-neutral-900)]">{project.duration}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between py-[var(--spacing-3)] border-b border-[var(--color-border-default)]">
                                    <span className="text-[var(--color-text-tertiary)] flex items-center">
                                        <Ruler className="w-4 h-4 mr-2" />
                                        Typ
                                    </span>
                                    <span className="font-semibold text-[var(--color-neutral-900)] capitalize">{categoryName}</span>
                                </div>
                            </div>

                            {/* Tags */}
                            {project.tags && (
                                <div className="mt-[var(--spacing-6)]">
                                    <div className="flex flex-wrap gap-[var(--spacing-2)]">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs bg-[var(--color-background-surface-secondary)] text-[var(--color-text-secondary)] px-2 py-1 rounded-full border border-[var(--color-border-default)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-[var(--spacing-8)] pt-[var(--spacing-6)] border-t border-[var(--color-border-default)]">
                                <p className="text-sm text-[var(--color-text-secondary)] mb-[var(--spacing-4)] text-center">
                                    Planen Sie ein ähnliches Projekt?
                                </p>
                                <Link to={createPageUrl('Contact')}>
                                    <Button className="w-full bg-[var(--color-button-primary-bg)] hover:bg-[var(--color-button-primary-hover)] text-white min-h-[44px]">
                                        Projekt anfragen
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ProjectDetail;
