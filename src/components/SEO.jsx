"use client";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

/**
 * SEO Component for managing meta tags
 * Usage: <SEO title="Page Title" description="Page description" />
 */
const SEO = ({
    title,
    description,
    keywords,
    ogImage,
    canonicalUrl
}) => {
    const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
    const siteDescription = description || siteConfig.description;
    const defaultKeywords = 'Sanitär, Heizung, Solar, Wärmepumpe, Badsanierung, Wetzlar';
    const siteKeywords = keywords || defaultKeywords;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            {ogImage && <meta property="twitter:image" content={ogImage} />}

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        </Helmet>
    );
};

export default SEO;
