export const navigationLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Projekte', path: '/referenzen' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/kontakt' },
    {
        name: 'Mehr',
        path: '#',
        submenu: [
            { name: '24h Notdienst', path: '/notdienst' },
            { name: 'KfW Förderung', path: '/foerderung' },
            { name: 'Energieberatung', path: '/energieberatung' },
            { name: 'Fachberatung', path: '/beratung' },
            { name: 'Karriere', path: '/karriere' }
        ]
    }
];

export const quickLinks = [
    { name: '24h Notdienst', path: '/notdienst' },
    { name: 'Impressum', path: '/impressum' },
    { name: 'Datenschutz', path: '/datenschutz' },
    { name: 'AGB', path: '/agb' },
    { name: 'FAQ', path: '/faq' }
];

// Additional footer links for services and info
export const serviceLinks = [
    { name: '24h Sanitär & Heizung Notdienst', path: '/notdienst' },
    { name: 'KfW & BAFA Förderung', path: '/foerderung' },
    { name: 'Energieberatung & Sanierungsfahrplan', path: '/energieberatung' },
    { name: 'Kostenlose Fachberatung', path: '/beratung' },
    { name: 'Karriere & Jobs', path: '/karriere' }
];
