"use client";
import React from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

/**
 * SafeHTML Component
 * 
 * Renders HTML content safely using DOMPurify to prevent XSS attacks.
 * Use this component whenever you need to render raw HTML strings.
 * 
 * @param {string} html - The raw HTML string to sanitize and render.
 * @param {string} className - Optional CSS classes.
 * @param {ElementType} as - The HTML tag to render (default: 'div').
 */
export const SafeHTML = ({ html, className, as: Component = 'div' }) => {
    // Sanitize the HTML content
    const sanitizedHTML = DOMPurify.sanitize(html || '', {
        USE_PROFILES: { html: true }, // Only allow HTML, no SVG/MathML by default for stricter safety
    });

    return (
        <Component
            className={className}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
    );
};

SafeHTML.propTypes = {
    html: PropTypes.string,
    className: PropTypes.string,
    as: PropTypes.elementType,
};

export default SafeHTML;
