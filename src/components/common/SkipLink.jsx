"use client";
import React from 'react';

const SkipLink = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-interactive-primary)] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-transform"
        >
            Zum Hauptinhalt springen
        </a>
    );
};

export default SkipLink;
