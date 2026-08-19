"use client";
import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import PageWrapper from '@/components/common/PageWrapper';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSkeleton from '@/components/blog/BlogSkeleton';
import { IconWrapper } from '@/utils/iconMapper';
import Link from 'next/link';

const Blog = () => {
  const { blogCategories = [], blogPosts = [] } = useContent();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on category and search query
  const filteredPosts = (blogPosts || []).filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = (blogPosts || []).find(post => post.featured);

  return (
    <PageWrapper>
      {/* ═══════════════════════════════════════════════════════════════════
          PREMIUM HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative pt-[var(--spacing-32)] pb-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />

        {/* Animated Mesh Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#c69c6d]/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#c69c6d]/20 to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#c69c6d] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#c69c6d]" />
            Expertenwissen für Ihr Zuhause
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#c69c6d] mb-6 leading-tight drop-shadow-md">
            Ratgeber &amp; Neuigkeiten rund um Haustechnik in Wetzlar
          </h1>
          <p className="text-xl text-[#bfa181] max-w-3xl mx-auto leading-relaxed font-medium">
            Praxisnahe Ratgeber &amp; Neuigkeiten zu Sanitär, moderner Heizungstechnik, Wärmepumpen-Förderung und Solaranlagen von Ihrem Meisterbetrieb Batherm Haustechnik in Wetzlar und Umgebung.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ═══════════════════════════════════════════════════════════════════
              MAIN CONTENT
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="flex-1">

            {/* Mobile Search */}
            <div className="lg:hidden mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Artikel suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white shadow-lg focus:ring-2 focus:ring-primary-500 outline-none text-gray-900 placeholder:text-gray-400"
                />
                <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Glassmorphism Category Filter (Mobile) */}
            <div className="lg:hidden mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              <div className="flex space-x-3">
                {blogCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 backdrop-blur-md border ${activeCategory === category.id
                      ? 'bg-[#c69c6d] text-white border-[#c69c6d] shadow-lg'
                      : 'bg-white/80 text-gray-700 border-white/50 hover:bg-white'
                      }`}
                  >
                    <IconWrapper name={category.icon} className="w-4 h-4" />
                    <span className="text-sm font-semibold">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post Hero Card */}
            {featuredPost && activeCategory === 'all' && !searchQuery && (
              <div className="mb-12">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="relative transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          width={600}
                          height={350}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r" />
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-5">
                          <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            {featuredPost.author}
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>

                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>

                        <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                          Artikel lesen
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════════
                POST GRID
            ═══════════════════════════════════════════════════════════════════ */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg mb-4">Keine Artikel gefunden.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              SIDEBAR (Desktop)
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <BlogSidebar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </PageWrapper>
  );
};

export default Blog;
