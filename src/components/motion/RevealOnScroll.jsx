"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Premium Tech Stack: Reveal on Scroll Animation
 * Intersection observer-based content reveal
 * 
 * Features:
 * - Configurable animation types
 * - Stagger support for lists
 * - GPU-accelerated transforms
 * - Respects prefers-reduced-motion
 */

// Animation variants
const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    },
    slideRight: {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    },
    stagger: {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    },
};

// Reduced motion variants
const reducedVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
};

const RevealOnScroll = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    threshold = 0.1,
    once = true,
    className = '',
    as = 'div',
    custom,
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        amount: threshold,
    });

    // Check for reduced motion preference
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const selectedVariant = prefersReducedMotion
        ? reducedVariants
        : variants[variant] || variants.fadeUp;

    const Component = motion[as] || motion.div;

    return (
        <Component
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={selectedVariant}
            custom={custom}
            className={className}
            style={{
                willChange: 'opacity, transform',
            }}
            transition={{ delay }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default RevealOnScroll;

// Export stagger container for lists
export const StaggerContainer = ({
    children,
    staggerDelay = 0.1,
    className = '',
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = '',
    ...props
}) => {
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <motion.div
            variants={prefersReducedMotion ? reducedVariants : variants.stagger}
            className={className}
            style={{ willChange: 'opacity, transform' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};
