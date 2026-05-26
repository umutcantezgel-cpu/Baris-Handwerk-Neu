import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function createPageUrl(pageName) {
    const routes = {
        'Home': '/',
        'Services': '/leistungen',
        'About': '/ueber-uns',
        'Projects': '/referenzen',
        'Blog': '/blog',
        'Contact': '/kontakt',
        'Impressum': '/impressum',
        'Datenschutz': '/datenschutz',
        'AGB': '/agb',
        'Login': '/login',
        // New standalone pages
        'Foerderung': '/foerderung',
        'Karriere': '/karriere',
        'Energieberatung': '/energieberatung',
        'FAQ': '/faq',
    };
    return routes[pageName] || '/';
}

export * from './iconMapper';
