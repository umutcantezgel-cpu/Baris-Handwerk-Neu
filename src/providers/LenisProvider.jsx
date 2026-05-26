import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

/**
 * Lenis Smooth Scroll Provider
 * Premium Tech Stack: Awwwards-quality smooth scrolling experience
 * 
 * Features:
 * - Buttery-smooth kinetic scrolling
 * - GPU-accelerated performance
 * - Mobile touch optimizations
 * - Scroll velocity tracking for parallax
 * - Respects prefers-reduced-motion
 */

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const LenisProvider = ({ children }) => {
    const lenisRef = useRef(null);
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Skip smooth scroll for users who prefer reduced motion
            return;
        }

        // Initialize Lenis with optimized settings
        const lenisInstance = new Lenis({
            // Duration of the scroll animation
            duration: 1.2,
            // Easing function for the scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // Scroll direction
            orientation: 'vertical',
            // Gesture direction
            gestureOrientation: 'vertical',
            // Enable smooth scrolling
            smoothWheel: true,
            // Wheel multiplier for scroll speed
            wheelMultiplier: 1,
            // Touch multiplier for mobile
            touchMultiplier: 2,
            // Infinite scroll
            infinite: false,
            // Auto-resize
            autoResize: true,
        });

        lenisRef.current = lenisInstance;
        setLenis(lenisInstance);

        // RAF loop for smooth animation
        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenisInstance.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Expose scroll methods
    const scrollTo = (target, options) => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(target, options);
        }
    };

    const stop = () => {
        if (lenisRef.current) {
            lenisRef.current.stop();
        }
    };

    const start = () => {
        if (lenisRef.current) {
            lenisRef.current.start();
        }
    };

    return (
        <LenisContext.Provider value={{ lenis, scrollTo, stop, start }}>
            {children}
        </LenisContext.Provider>
    );
};

export default LenisProvider;
