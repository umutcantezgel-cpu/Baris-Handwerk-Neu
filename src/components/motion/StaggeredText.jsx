"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Premium Tech Stack: Staggered Text Animation
 * Cinematic "Typing" effect for headlines
 * 
 * Variant:
 * - 'char': Animates letter by letter (Dramatic, for short titles)
 * - 'word': Animates word by word (Elegant, for sentences)
 */

const StaggeredText = ({
    text,
    variant = 'word', // 'char' | 'word'
    className = '',
    as = 'h2',
    delay = 0,
    speed = 0.05,
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const items = variant === 'char' ? text.split('') : text.split(' ');

    // Framer Motion Variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay * i
            },
        }),
    };

    const itemVariant = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 45, // Slight 3D rotation for premium feel
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const Component = motion[as] || motion.div;

    return (
        <Component
            ref={ref}
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            aria-label={text}
            {...props}
        >
            <span className="sr-only">{text}</span>
            <span aria-hidden="true" className="inline-block relative">
                {items.map((item, index) => (
                    <motion.span
                        key={index}
                        variants={itemVariant}
                        className={`inline-block ${variant === 'word' ? 'mr-[0.25em]' : ''} origin-bottom`}
                        style={{
                            willChange: 'transform, opacity',
                            backfaceVisibility: 'hidden', // Hardware acceleration hint
                        }}
                    >
                        {item === ' ' ? '\u00A0' : item}
                    </motion.span>
                ))}
            </span>
        </Component>
    );
};

export default StaggeredText;
