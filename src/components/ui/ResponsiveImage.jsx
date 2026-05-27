"use client";
import React from 'react';
import { cn } from '@/utils';

/**
 * ResponsiveImage component for optimized image loading.
 * Wraps an img element in a picture tag (if needed for art direction/formats later)
 * and applies best practices for performance and accessibility.
 * 
 * @param {string} src - Source URL of the image
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Classes for the img element
 * @param {string} containerClassName - Classes for the wrapper div/picture
 * @param {boolean} priority - If true, sets loading="eager" and fetchPriority="high"
 * @param {string} sizes - Sizes attribute for responsive images
 * @param {object} style - Inline styles
 */
const ResponsiveImage = ({
    src,
    alt,
    className,
    containerClassName,
    priority = false,
    sizes = "100vw",
    style,
    ...props
}) => {
    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            <img
                src={src}
                alt={alt}
                className={cn("w-full h-full object-cover transition-opacity duration-300", className)}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                decoding={priority ? "sync" : "async"}
                sizes={sizes}
                style={style}
                {...props}
            />
        </div>
    );
};

export default ResponsiveImage;
