import { createPageUrl } from '@/utils';

export const navigationLinks = [
    { name: 'Startseite', path: createPageUrl('Home') },
    {
        name: 'Leistungen',
        path: createPageUrl('Services')
    },
    { name: 'Über uns', path: createPageUrl('About') },
    { name: 'Projekte', path: createPageUrl('Projects') },
    { name: 'Blog', path: createPageUrl('Blog') },
    { name: 'Kontakt', path: createPageUrl('Contact') },
    {
        name: 'Mehr',
        path: '#',
        submenu: [
            { name: 'Förderung', path: createPageUrl('Foerderung') },
            { name: 'Energieberatung', path: createPageUrl('Energieberatung') },
            { name: 'Karriere', path: createPageUrl('Karriere') }
        ]
    }
];

export const quickLinks = [
    { name: 'Impressum', path: createPageUrl('Impressum') },
    { name: 'Datenschutz', path: createPageUrl('Datenschutz') },
    { name: 'AGB', path: '/agb' },
    { name: 'FAQ', path: createPageUrl('FAQ') }
];

// Additional footer links for services and info
export const serviceLinks = [
    { name: 'Förderung', path: createPageUrl('Foerderung') },
    { name: 'Energieberatung', path: createPageUrl('Energieberatung') },
    { name: 'Karriere', path: createPageUrl('Karriere') }
];
