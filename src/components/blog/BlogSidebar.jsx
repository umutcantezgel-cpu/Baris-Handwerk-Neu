"use client";
import React from 'react';
import { Search, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { useContent } from '@/contexts/ContentContext';
import { IconWrapper } from '@/utils/iconMapper';

/**
 * Premium Blog Sidebar Component
 * Features: Sticky behavior, glassmorphism widgets, CTA section
 * (View counts and Popular Posts removed)
 */
const BlogSidebar = ({
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery
}) => {
    const { blogCategories } = useContent();

    return (
        <div className="sticky top-24 space-y-6">
            {/* ═══════════════════════════════════════════════════════════════
                SEARCH WIDGET
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary-600" />
                    Suche
                </h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Artikel suchen..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-12 py-4 rounded-2xl border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none text-gray-900 placeholder:text-gray-400 transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                CATEGORIES WIDGET
            ═══════════════════════════════════════════════════════════════ */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Kategorien</h3>
                <div className="space-y-2">
                    {blogCategories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeCategory === category.id
                                    ? 'bg-white/20'
                                    : 'bg-white shadow-sm'
                                    }`}>
                                    <IconWrapper
                                        name={category.icon}
                                        className={`w-5 h-5 ${activeCategory === category.id ? 'text-white' : 'text-primary-600'}`}
                                    />
                                </div>
                                <span className="font-medium">{category.name}</span>
                            </div>
                            {activeCategory === category.id && (
                                <ArrowRight className="w-5 h-5" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                CTA WIDGET
            ═══════════════════════════════════════════════════════════════ */}
            <div className="relative overflow-hidden rounded-3xl">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-[#c69c6d]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                <div className="relative p-6 text-white">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Phone className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Beratung gewünscht?</h3>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                        Unsere Experten helfen Ihnen gerne bei allen Fragen rund um Heizung, Sanitär und Solar.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                    >
                        Kontakt aufnehmen
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
