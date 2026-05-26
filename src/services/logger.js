/**
 * Secure Logger Service
 * 
 * Handles logging gracefully in production vs development.
 * Ensures no sensitive data (like passwords/tokens) is accidentally logged.
 */

const isDev = import.meta.env.DEV;

export const logger = {
    info: (message, ...args) => {
        if (isDev) {
            console.log(`[INFO] ${message}`, ...args);
        }
    },

    warn: (message, ...args) => {
        console.warn(`[WARN] ${message}`, ...args);
    },

    error: (message, error) => {
        // In production, this would send to Sentry/LogRocket
        console.error(`[ERROR] ${message}`, error);
    },

    // Safe logger that strips sensitive keys
    secureError: (message, data) => {
        const safeData = { ...data };
        ['password', 'token', 'secret', 'auth'].forEach(key => {
            if (safeData[key]) safeData[key] = '[REDACTED]';
        });
        console.error(`[SECURE_ERROR] ${message}`, safeData);
    }
};
