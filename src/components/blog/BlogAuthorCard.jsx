import React from 'react';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

/**
 * Blog Author Card Component
 * Displays author information with avatar, bio, and social links
 */
const BlogAuthorCard = ({ author }) => {
    if (!author) return null;

    const socialIcons = {
        twitter: Twitter,
        linkedin: Linkedin,
        facebook: Facebook,
        email: Mail
    };

    // Normalize author data if it's just a string name
    const authorData = typeof author === 'string' ? { name: author } : author;

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

            <div className="relative p-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        {authorData.avatar ? (
                            <img
                                src={authorData.avatar}
                                alt={authorData.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#00b050] flex items-center justify-center text-white text-4xl font-bold shadow-lg ring-4 ring-white">
                                {authorData.name?.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#1a3a52] mb-1">
                            {authorData.name}
                        </h3>

                        {authorData.title && (
                            <p className="text-[#00b050] font-medium mb-3">
                                {authorData.title}
                            </p>
                        )}

                        {authorData.bio && (
                            <p className="text-[#2c3e50]/80 leading-relaxed mb-4">
                                {authorData.bio}
                            </p>
                        )}

                        {/* Social Links */}
                        {authorData.social && Object.keys(authorData.social).length > 0 && (
                            <div className="flex gap-3">
                                {Object.entries(authorData.social).map(([platform, url]) => {
                                    const Icon = socialIcons[platform] || Mail;
                                    return (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-md bg-white/50 hover:bg-white/80 rounded-full transition-all duration-300 hover:scale-110 group"
                                            aria-label={platform}
                                        >
                                            <Icon className="w-5 h-5 text-[#1a3a52] group-hover:text-[#00b050] transition-colors" />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogAuthorCard;
