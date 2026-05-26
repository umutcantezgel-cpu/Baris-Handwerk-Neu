import { z } from 'zod';

// ============================================================================
// SECURITY HARDENED AUTH SERVICE
// ============================================================================
// Credentials are hardcoded and cannot be modified via browser/localStorage
// Only profile information is stored in localStorage (no sensitive data)
// ============================================================================

// Zod Schema for login validation
const loginSchema = z.object({
    username: z.string().min(1, 'Benutzername erforderlich'),
    password: z.string().min(1, 'Passwort erforderlich')
});

// SECURE CREDENTIALS - Hardcoded, not modifiable via browser
// Password: Baris61
const SECURE_CREDENTIALS = Object.freeze({
    username: 'Batherm',
    passwordHash: 'c3187f839d505e0230579469ae8140d299bfd423323faac5458869f80c6a357c'
});

// Profile data storage key (no sensitive information)
const STORAGE_KEY_PROFILE = 'baris_user_profile';
const STORAGE_KEY_SESSION = 'baris_secure_session';

// Default profile information (no credentials)
const DEFAULT_PROFILE = Object.freeze({
    name: 'Baris Aydin',
    email: 'info@batherm.de',
    phone: '+49 6441 123456'
});

// Helper: Convert string to SHA-256 hash
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export const authService = {
    // Get user profile (no credentials stored)
    getProfile() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY_PROFILE);
            if (stored) return JSON.parse(stored);
        } catch (e) {
            console.error('Error reading profile:', e);
        }
        return { ...DEFAULT_PROFILE };
    },

    // Save user profile (no credentials)
    saveProfile(profile) {
        // Sanitize - ensure no credentials leak into profile storage
        const safeProfile = {
            name: profile.name || DEFAULT_PROFILE.name,
            email: profile.email || DEFAULT_PROFILE.email,
            phone: profile.phone || DEFAULT_PROFILE.phone
        };
        localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(safeProfile));
    },

    async login(username, password) {
        // 1. Validate Input with Zod schema
        const result = loginSchema.safeParse({ username, password });
        if (!result.success) {
            return { success: false, error: 'Ungültige Eingabe' };
        }

        // Simulate Network Latency
        await new Promise(resolve => setTimeout(resolve, 800));

        // 2. Verify Credentials against SECURE (hardcoded) values
        // Case-insensitive username comparison
        if (username.toLowerCase() !== SECURE_CREDENTIALS.username.toLowerCase()) {
            return { success: false, error: 'Ungültige Anmeldedaten' };
        }

        // Hash the input password and compare
        const inputHash = await hashString(password);
        if (inputHash !== SECURE_CREDENTIALS.passwordHash) {
            return { success: false, error: 'Ungültige Anmeldedaten' };
        }

        // 3. Create Session (credentials verified)
        const profile = this.getProfile();
        const session = {
            user: {
                ...profile,
                username: SECURE_CREDENTIALS.username,
                role: 'admin'
            },
            token: 'secure-session-' + Date.now() + '-' + Math.random().toString(36).substr(2),
            timestamp: Date.now()
        };

        this.saveSession(session);
        return { success: true, user: session.user };
    },

    // Update profile information (no password change allowed)
    async updateProfile(profileData) {
        // Sanitize input - remove any credential-like fields
        const { password, passwordHash, username, ...safeData } = profileData;

        const currentProfile = this.getProfile();
        const newProfile = { ...currentProfile, ...safeData };
        this.saveProfile(newProfile);

        // Update current session if active
        const currentSession = this.getSession();
        if (currentSession) {
            currentSession.user = {
                ...currentSession.user,
                ...safeData,
                // Keep hardcoded username
                username: SECURE_CREDENTIALS.username
            };
            this.saveSession(currentSession);
        }

        return { success: true };
    },

    logout() {
        localStorage.removeItem(STORAGE_KEY_SESSION);
    },

    saveSession(session) {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
    },

    getSession() {
        const stored = localStorage.getItem(STORAGE_KEY_SESSION);
        if (!stored) return null;
        try {
            const session = JSON.parse(stored);
            // Session expires after 24 hours
            const isExpired = (Date.now() - session.timestamp) > (24 * 60 * 60 * 1000);
            if (isExpired) {
                this.logout();
                return null;
            }
            return session;
        } catch {
            this.logout();
            return null;
        }
    },

    isAuthenticated() {
        return !!this.getSession();
    },

    // Migration: Clean up old insecure storage keys
    cleanupLegacyStorage() {
        // Remove old auth config that stored credentials
        localStorage.removeItem('baris_auth_config');
    }
};

// Auto-cleanup legacy storage on load
authService.cleanupLegacyStorage();
