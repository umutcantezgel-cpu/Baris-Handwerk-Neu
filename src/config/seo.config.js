// seo.config.js
// Source: Gemini 3 Pro Official Reference Documentation (v1.0)

export const SEO_CONFIG = {
    // Global SEO
    global: {
        siteName: "Baris Aydin Batherm Haustechnik",
        author: "Baris Aydin",
        language: "de",
        locale: "de_DE",
        charset: "UTF-8"
    },

    // Target Keywords (Lokale Sucheintentionen)
    keywords: {
        primary: [
            "Installateur Wetzlar",
            "Sanitärinstallateur Wetzlar",
            "Heizungstechnik Wetzlar",
            "Badezimmer Renovierung Wetzlar"
        ],
        secondary: [
            "Sanitär Service Wetzlar",
            "Klimaanlage Wetzlar",
            "Heizungswartung Wetzlar",
            "Rohrreinigung Wetzlar",
            "Wärmepumpe Wetzlar"
        ],
        long_tail: [
            "Sanitärinstallateur in meiner Nähe",
            "Hilfe bei Heizungsausfall Wetzlar",
            "Badezimmer umbauen Wetzlar kosten"
        ]
    },

    // Pages SEO Configuration
    pages: {
        home: {
            title: "Baris Aydin Batherm Haustechnik - Sanitär & Heizung in Wetzlar",
            description: "Professionelle Sanitär-, Heizungs- und Klimatechnik in Wetzlar. Meister im Handwerk mit Garantieleistung.",
            keywords: ["Installateur", "Sanitär", "Heizung", "Wetzlar"],
            canonical: "https://batherm-haustechnik.de/",
            ogImage: "/images/og/home.jpg",
            ogDescription: "Ihr Fachbetrieb für Sanitär-, Heizungs- und Klimatechnik in Wetzlar"
        },

        services: {
            title: "Unsere Leistungen | Baris Aydin Batherm Haustechnik Wetzlar",
            description: "Sanitärtechnik, Heizungstechnik, Klimatechnik - alle Leistungen im Detail. Kostenlose Beratung für Ihre Anfrage.",
            keywords: ["Sanitärinstallation", "Heizungsinstallation", "Klimatechnik", "Wetzlar"],
            canonical: "https://batherm-haustechnik.de/leistungen",
            ogImage: "/images/og/services.jpg"
        },

        portfolio: {
            title: "Projekte & Referenzen | Batherm Haustechnik Wetzlar",
            description: "Schauen Sie sich unsere abgeschlossenen Projekte an. Von Badezimmer-Renovierungen bis Heizungsinstallationen.",
            keywords: ["Projekte", "Referenzen", "Portfolio", "Wetzlar"],
            canonical: "https://batherm-haustechnik.de/portfolio"
        },

        contact: {
            title: "Kontakt & Terminbuchung | Batherm Haustechnik Wetzlar",
            description: "Kontaktieren Sie uns für ein kostenloses Angebot. Schnelle Reaktionszeit garantiert.",
            keywords: ["Kontakt", "Terminbuchung", "Angebot", "Wetzlar"],
            canonical: "https://batherm-haustechnik.de/kontakt"
        }
    },

    // Schema Markup Definition Helper
    getOrganizationSchema: () => ({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Baris Aydin Batherm Haustechnik",
        "description": "Professionelle Sanitär-, Heizungs- und Klimatechnik in Wetzlar",
        "image": "https://batherm-haustechnik.de/logo.png",
        "url": "https://batherm-haustechnik.de",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Linsenbergstrasse 9",
            "addressLocality": "Wetzlar",
            "postalCode": "35586",
            "addressCountry": "DE"
        },
        "telephone": "+49 172 9475061",
        "email": "info@batherm.de",
        "areaServed": ["Wetzlar", "Gießen", "Lahn-Dill"],
        "priceRange": "€€",
        "sameAs": [],
        "openingHours": [
            "Mo-Fr 07:00-17:00",
            "Sa 08:00-13:00"
        ]
    })
};

export default SEO_CONFIG;
