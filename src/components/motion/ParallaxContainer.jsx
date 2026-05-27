"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Premium Tech Stack: Parallax Container
 * Creates depth by moving background/foreground at different speeds
 * 
 * Perfect for: Hero sections, content separators, image grids
 */

const ParallaxContainer = ({
    children,
    speed = 0.5, // 0 = no movement, 1 = normal scroll, >1 = fast foreground, < 0 = opposite direction
    className = '',
    offset = 50, // Pixel offset for the parallax effect
    ...props
}) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Calculate transform range
    // If speed is +ve: Background moves slower (feeling far away)
    // If speed is -ve: Background moves opposite (very far away / creative effect)
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [-offset * speed, offset * speed]
    );

    return (
        <motion.div
            ref={ref}
            style={{ y, willChange: 'transform' }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxContainer;
