import React, { useState, useMemo } from 'react';
import { ArrowRight, MapPin, Calendar, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { projects, categories } from '@/config/projects';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import PageWrapper from '@/components/common/PageWrapper';
import FeaturedTestimonial from '@/components/sections/FeaturedTestimonial';
import { createPageUrl } from '@/utils';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <PageWrapper className="relative min-h-screen py-[var(--spacing-20)] px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)] bg-[var(--color-background-surface-secondary)]">
      <SEO
        title="Projekte & Referenzen"
        description="Schauen Sie sich unsere abgeschlossenen Projekte an. Von Badezimmer-Renovierungen bis Heizungsinstallationen in Wetzlar."
        keywords="Projekte, Referenzen, Portfolio, Wetzlar, Badsanierung, Heizung"
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[var(--spacing-16)]">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)] tracking-tight">
            Unsere Referenzen
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto font-light leading-relaxed">
            Erfolgreiche Projekte aus der Region – von der Badsanierung bis zur kompletten Heizungsmodernisierung
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-[var(--spacing-12)] flex flex-wrap justify-center gap-[var(--spacing-3)]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-[var(--spacing-6)] py-[var(--spacing-3)] rounded-[var(--radius-xl)] font-medium transition-all duration-300 min-h-[48px] ${selectedCategory === category.id
                ? 'bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] shadow-[var(--shadow-md)]'
                : 'bg-[var(--color-background-elevated)] border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-surface-secondary)]'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8)] mb-[var(--spacing-20)]">
          {filteredProjects.map((project, index) => {
            // Resolve primary image from images array (prefer 'after' type or first one)
            const primaryImage = project.images?.find(img => img.type === 'after')?.url || project.images?.[0]?.url;

            return (
              <Link
                key={project.id}
                to={`/referenzen/${project.id}`}
                className="relative group block animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-[250px] rounded-t-[var(--radius-lg)] overflow-hidden bg-[var(--color-neutral-100)]">
                  {primaryImage ? (
                    <ResponsiveImage
                      src={primaryImage}
                      alt={project.title}
                      containerClassName="h-full w-full"
                      className="group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-[var(--spacing-6)]">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-blue-50)] flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-neutral-800)] to-[var(--color-blue-600)]" />
                        </div>
                        <p className="text-[var(--color-neutral-600)] font-medium text-sm">Projekt-Foto</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-neutral-900)]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-[var(--color-background-elevated)] rounded-b-[var(--radius-lg)] border border-[var(--color-border-default)] border-t-0 shadow-[var(--shadow-sm)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300">
                  <div className="p-[var(--spacing-6)]">
                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-[var(--spacing-3)]">
                      <Badge className="bg-[var(--color-blue-50)] text-[var(--color-blue-700)] border-[var(--color-blue-100)]">
                        {categories.find(c => c.id === project.category)?.name}
                      </Badge>
                      <span className="text-sm text-[var(--color-text-tertiary)]">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2 group-hover:text-[var(--color-interactive-primary)] transition-colors">
                      {project.title}
                    </h3>

                    {/* Location */}
                    <p className="text-sm text-[var(--color-text-secondary)] mb-[var(--spacing-3)] flex items-center gap-1">
                      <MapPin className="w-4 h-4 opacity-70" /> {project.location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[var(--color-text-secondary)] mb-[var(--spacing-4)] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags (formerly Features) */}
                    <div className="space-y-1 mb-[var(--spacing-4)]">
                      {project.tags && project.tags.slice(0, 3).map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-secondary)]" />
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-[var(--spacing-4)] border-t border-[var(--color-border-default)] text-sm">
                      <span className="text-[var(--color-text-tertiary)] flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <FeaturedTestimonial />

        {/* Stats Section */}
        <div className="bg-[var(--color-background-elevated)] rounded-[var(--radius-lg)] border border-[var(--color-border-default)] shadow-[var(--shadow-sm)] mb-[var(--spacing-20)]">
          <div className="relative p-[var(--spacing-12)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-8)] text-center">
              <div>
                <div className="text-xl font-bold text-[var(--color-brand-secondary)] mb-2">2025</div>
                <div className="text-[var(--color-text-secondary)]">Meisterbetrieb gegründet</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[var(--color-brand-secondary)] mb-2">500+</div>
                <div className="text-[var(--color-text-secondary)]">Projekte (Inhaber-Erfahrung)</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[var(--color-brand-secondary)] mb-2">7+</div>
                <div className="text-[var(--color-text-secondary)]">Jahre Berufserfahrung</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[var(--color-brand-secondary)] mb-2">100%</div>
                <div className="text-[var(--color-text-secondary)]">Termintreue</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
          <div className="absolute inset-0 bg-[var(--color-brand-primary)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]" />
          </div>
          <div className="relative p-[var(--spacing-12)] text-center text-white">
            <h2 className="text-3xl font-bold mb-[var(--spacing-4)] text-[var(--color-neutral-0)]">
              Starten Sie Ihr Projekt
            </h2>
            <p className="text-xl mb-[var(--spacing-6)] text-[var(--color-blue-100)] font-light">
              Lassen Sie sich unverbindlich beraten und erhalten Sie ein kostenloses Angebot
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-white text-[var(--color-brand-primary)] hover:bg-[var(--color-neutral-100)] min-h-[48px] border-0 shadow-md">
                Jetzt Beratungstermin vereinbaren
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
