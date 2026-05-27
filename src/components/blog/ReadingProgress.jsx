"use client";
import React, { useState, useEffect } from 'react';

/**
 * Reading Progress Bar Component
 * Shows scroll progress as a sticky bar at the top
 */
const ReadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            // Get scroll position
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Get total scrollable height
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            // Calculate percentage
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            setProgress(Math.min(scrollPercentage, 100));
        };

        // Update on scroll
        window.addEventListener('scroll', updateProgress);

        // Initial calculation
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gray-200/30 backdrop-blur-sm">
            <div
                className="h-full bg-gradient-to-r from-[#c69c6d] to-[#1a3a52] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />

            {/* Optional: Show percentage */}
            {progress > 5 && progress < 95 && (
                <div className="absolute top-2 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <span className="text-xs font-medium text-[#1a3a52]">
                        {Math.round(progress)}%
                    </span>
                </div>
            )}
        </div>
    );
};

export default ReadingProgress;
