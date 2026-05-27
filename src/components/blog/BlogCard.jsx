"use client";
import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { IconWrapper } from '@/utils/iconMapper';

/**
 * Premium Blog Card Component
 * Features: 3D tilt hover, gradient overlay, glassmorphism design
 */
const BlogCard = ({ post }) => {
    const { blogCategories } = useContent();
    const categoryData = blogCategories.find(c => c.id === post.category);

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group cursor-pointer block h-full perspective-1000"
        >
            <div className="relative h-full transform-gpu transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:rotate-y-1">
                {/* Card Background with Glassmorphism */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_rgba(0,176,80,0.15)] transition-all duration-500" />

                <div className="relative h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-52 rounded-t-3xl overflow-hidden">
                        {post.image ? (
                            <>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </>
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-[#c69c6d] flex items-center justify-center shadow-lg">
                                    {categoryData && <IconWrapper name={categoryData.icon} className="w-10 h-10 text-white" />}
                                </div>
                            </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-lg">
                            {categoryData && (
                                <IconWrapper
                                    name={categoryData.icon}
                                    className="w-4 h-4 text-primary-600"
                                />
                            )}
                            <span className="text-xs font-bold text-primary-700 uppercase tracking-wide">
                                {categoryData?.name || post.category}
                            </span>
                        </div>

                        {/* Reading Time Badge */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        {/* Date */}
                        {post.date && (
                            <p className="text-sm text-gray-400 mb-2 font-medium">
                                {post.date}
                            </p>
                        )}

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">


                            {/* Read More Arrow */}
                            <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                Lesen
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
