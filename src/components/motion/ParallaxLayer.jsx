"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from '@/providers/LenisProvider';

/**
 * Premium Tech Stack: Parallax Layer
 * Lenis-integrated parallax effects for depth
 * 
 * Features:
 * - Smooth parallax scrolling
 * - Configurable speed and direction
 * - GPU-accelerated transforms
 * - Respects prefers-reduced-motion
 */

const ParallaxLayer = ({
    children,
    speed = 0.5, // Negative for opposite direction
    offset = 0,
    className = '',
    style = {},
    ...props
}) => {
    const ref = useRef(null);

    // Check for reduced motion preference
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Calculate parallax offset based on speed
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [offset - speed * 100, offset + speed * 100]
    );

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                willChange: 'transform',
                ...style,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxLayer;

// Parallax Image variant with scale effect
export const ParallaxImage = ({
    src,
    alt,
    speed = 0.3,
    scale = 1.1,
    className = '',
    containerClassName = '',
    ...props
}) => {
    const ref = useRef(null);

    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? ['0%', '0%'] : [`-${speed * 20}%`, `${speed * 20}%`]
    );

    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        prefersReducedMotion ? [1, 1, 1] : [scale, 1, scale]
    );

    return (
        <div
            ref={ref}
            className={`overflow-hidden ${containerClassName}`}
            style={{ willChange: 'transform' }}
        >
            <motion.img
                src={src}
                alt={alt}
                style={{
                    y,
                    scale: imageScale,
                    willChange: 'transform',
                }}
                className={`w-full h-full object-cover ${className}`}
                {...props}
            />
        </div>
    );
};

// Parallax Text with reveal
export const ParallaxText = ({
    children,
    speed = 0.2,
    className = '',
    ...props
}) => {
    const ref = useRef(null);

    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [50 * speed, -50 * speed]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0.3, 1, 1, 0.3]
    );

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                opacity: prefersReducedMotion ? 1 : opacity,
                willChange: 'transform, opacity',
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
