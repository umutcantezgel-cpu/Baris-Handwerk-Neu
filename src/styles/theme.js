/**
 * Premium Tech Stack: Styled Components Theme
 * Design System tokens mapped from CSS variables
 * Updated Phase VII: Luxus-Handwerk Upgrade (Charcoal/Bronze)
 */

const theme = {
    // Color Palette
    colors: {
        // Brand Colors
        brand: {
            primary: '#1C1F26', // Deep Charcoal / Anthrazit (Base)
            secondary: '#C69C6D', // Bronze / Copper (Accent)
            tertiary: '#F9F8F6', // Warm White / Creme (Background)
            primaryHover: '#262524',
        },
        // Backgrounds
        background: {
            primary: '#FFFFFF',
            secondary: '#F9F8F6', // Warm Creme
            elevated: '#FFFFFF', // Cards on Creme
            inverse: '#1C1F26', // Deep Charcoal
        },
        // Text
        text: {
            primary: '#1C1F26', // Charcoal
            secondary: '#575450', // Warm Muted
            tertiary: '#A8A49D',
            inverse: '#FFFFFF',
            accent: '#C69C6D', // Bronze
            interactive: '#C69C6D',
        },
        // Borders
        border: {
            default: '#E6E2DC', // Warm Grey
            strong: '#C69C6D', // Bronze Borders
            interactive: '#1C1F26',
        },
        // Interactive
        interactive: {
            primary: '#C69C6D', // Bronze Buttons
            hover: '#A67C52',
            focus: '#C69C6D',
        },
        // Feedback
        feedback: {
            success: 'var(--color-feedback-success)',
            warning: 'var(--color-feedback-warning)',
            error: 'var(--color-feedback-error)',
        },
    },

    // Spacing System (8px grid)
    spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        32: '128px',
    },

    // Typography
    fonts: {
        display: "'Outfit', sans-serif", // Geometric Sans
        body: "'Inter', sans-serif", // Clean Sans
        mono: "'IBM Plex Mono', monospace",
    },
    fontSizes: {
        xs: 'clamp(0.75rem, 0.7vw, 0.875rem)',
        sm: 'clamp(0.875rem, 0.8vw, 1rem)',
        base: 'clamp(1rem, 1vw, 1.125rem)',
        lg: 'clamp(1.125rem, 1.25vw, 1.25rem)',
        xl: 'clamp(1.25rem, 1.5vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 2vw, 2rem)',
        '3xl': 'clamp(2rem, 3vw, 3rem)',
        '4xl': 'clamp(2.5rem, 4vw, 4rem)',
        '5xl': 'clamp(3rem, 5vw, 5rem)',
        'huge': 'clamp(4rem, 8vw, 8rem)', // New Cinematic Size
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    lineHeights: {
        none: 1,
        tight: 1.2,
        snug: 1.3,
        normal: 1.5,
        relaxed: 1.6,
    },

    // Effects
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        focus: '0 0 0 2px #fff, 0 0 0 4px #C69C6D',
    },
    radii: {
        sm: '4px',
        base: '8px',
        lg: '12px',
        full: '9999px',
    },

    // Transitions
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    durations: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
    },
    easings: {
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // Breakpoints
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    // Media queries
    media: {
        sm: '@media (min-width: 640px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 1024px)',
        xl: '@media (min-width: 1280px)',
        '2xl': '@media (min-width: 1536px)',
        reducedMotion: '@media (prefers-reduced-motion: reduce)',
    },
};

export default theme;
