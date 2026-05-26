import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '@/contexts/ContentContext';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';

export default function LatestPosts() {
    const { blogPosts } = useContent();
    const latest = blogPosts?.slice(0, 3) || [];

    if (!latest.length) return null;

    return (
        <section className="py-[var(--spacing-24)] bg-[var(--color-neutral-0)]">
            <div className="max-w-7xl mx-auto px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-[var(--spacing-12)] gap-[var(--spacing-6)]">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-[var(--spacing-4)]">
                            Aktuelles & Ratgeber
                        </h2>
                        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                            Tipps, Trends und Neuigkeiten rund um Haustechnik und Energieeffizienz.
                        </p>
                    </div>
                    <Link to="/blog">
                        <Button variant="ghost" className="hidden md:flex text-[var(--color-brand-primary)] hover:bg-[var(--color-blue-50)]">
                            Alle Artikel ansehen <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-[var(--spacing-8)]">
                    {latest.map(post => (
                        <div key={post.id} className="h-full">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>

                <div className="mt-[var(--spacing-8)] text-center md:hidden">
                    <Link to="/blog">
                        <Button variant="outline" className="w-full">
                            Alle Artikel ansehen
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
