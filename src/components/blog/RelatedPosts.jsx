import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { IconWrapper } from '@/utils/iconMapper';

/**
 * Related Posts Component
 * Shows related blog posts based on category or tags
 */
const RelatedPosts = ({ currentPost, allPosts, categories = [], limit = 3 }) => {
    // 1. Find directly related posts (same category or shared tags)
    let candidates = allPosts
        .filter(post => post.id !== currentPost.id)
        .map(post => {
            let score = 0;
            if (post.category === currentPost.category) score += 5;
            const currentTags = currentPost.tags || [];
            const postTags = post.tags || [];
            const sharedTags = currentTags.filter(tag => postTags.includes(tag));
            score += sharedTags.length * 2;
            return { ...post, score };
        })
        .filter(post => post.score > 0)
        .sort((a, b) => b.score - a.score);

    // 2. Fallback: If not enough related posts, add recent posts
    if (candidates.length < limit) {
        const existingIds = new Set(candidates.map(p => p.id));
        const recentPosts = allPosts
            .filter(post => post.id !== currentPost.id && !existingIds.has(post.id))
            .sort((a, b) => new Date(b.created_date) - new Date(a.created_date)) // Newest first
            .slice(0, limit - candidates.length);

        candidates = [...candidates, ...recentPosts];
    }

    const relatedPosts = candidates.slice(0, limit);

    if (relatedPosts.length === 0) return null;

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

            <div className="relative p-8">
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
                    Das könnte Sie auch interessieren
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map(post => {
                        const categoryData = categories.find(c => c.id === post.category);

                        return (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group"
                            >
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl border border-white/20 group-hover:shadow-lg transition-all duration-300" />

                                    <div className="relative p-6">
                                        {/* Image Placeholder */}
                                        {post.image_url ? (
                                            <div className="h-32 rounded-lg overflow-hidden mb-4">
                                                <img
                                                    src={post.image_url}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ) : (
                                            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#1a3a52]/10 to-[#00b050]/10 flex items-center justify-center">
                                                <IconWrapper name={categoryData?.icon} className="w-8 h-8 text-[#1a3a52]/40" />
                                            </div>
                                        )}

                                        {/* Category */}
                                        {categoryData && (
                                            <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-[#00b050]/10 text-[#00b050] mb-3">
                                                <IconWrapper name={categoryData.icon} className="w-3 h-3 mr-1" />
                                                {categoryData.name}
                                            </span>
                                        )}

                                        {/* Title */}
                                        <h3 className="font-bold text-[#1a3a52] group-hover:text-[#00b050] transition-colors mb-2 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-[#2c3e50]/70 line-clamp-2 mb-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center text-[#00b050] text-sm font-medium">
                                            Weiterlesen
                                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RelatedPosts;
