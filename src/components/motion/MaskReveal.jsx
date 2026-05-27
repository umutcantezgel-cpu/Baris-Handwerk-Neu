"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Premium Tech Stack: Mask Image Reveal
 * "Unveiling" effect for images - much more expensive looking than fading
 * 
 * Features:
 * - Slide mask reveal (colored block slides away)
 * - Self-reveal (image slides out of a container)
 * - Clipping path reveal (advanced shape reveal)
 */

const MaskReveal = ({
    children,
    direction = 'left', // 'left' | 'right' | 'up' | 'down'
    overlayColor = 'var(--color-brand-primary)',
    delay = 0,
    duration = 0.8,
    className = '',
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Determine direction vectors
    const directions = {
        left: { originX: 0, originY: 0.5, x: '-100%' },
        right: { originX: 1, originY: 0.5, x: '100%' },
        up: { originX: 0.5, originY: 0, y: '-100%' },
        down: { originX: 0.5, originY: 1, y: '100%' },
    };

    const currentDir = directions[direction];

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden inline-block ${className}`}
            {...props}
        >
            {/* Content Layer - Initially Hidden */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: duration, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ willChange: 'opacity, transform' }}
            >
                {children}
            </motion.div>

            {/* Reveal Overlay Mask */}
            <motion.div
                initial={{
                    scaleX: direction === 'left' || direction === 'right' ? 1 : 1,
                    scaleY: direction === 'up' || direction === 'down' ? 1 : 1,
                    ...currentDir // Apply initial transform based on direction if needed for complex variants
                }}
                animate={isInView ? {
                    scaleX: direction === 'left' || direction === 'right' ? 0 : 1,
                    scaleY: direction === 'up' || direction === 'down' ? 0 : 1
                } : {
                    scaleX: 1,
                    scaleY: 1
                }}
                transition={{ duration: duration * 0.8, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: overlayColor,
                    zIndex: 10,
                    transformOrigin: `${currentDir.originX * 100}% ${currentDir.originY * 100}%`,
                    willChange: 'transform',
                }}
            />
        </div>
    );
};

export default MaskReveal;
