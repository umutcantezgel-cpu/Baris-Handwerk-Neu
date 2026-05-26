// services.config.js - FESTWERT für alle Leistungen
// Source: Gemini 3 Pro Official Reference Documentation (v1.0)

export const SERVICES = [
    {
        id: "sanitaer",
        name: "Sanitärtechnik",
        shortDescription: "Professionelle Installation und Wartung von Sanitäranlagen",
        icon: "Droplets",
        color: "primary",
        priority: 1,

        subcategories: [
            { id: "baeder", name: "Bäder & Duschen", icon: "shower" },
            { id: "kuechen", name: "Küchen & Spülen", icon: "sink" },
            { id: "leitungen", name: "Wasserleitungen", icon: "pipe" },
            { id: "armaturen", name: "Armaturen & Accessoires", icon: "wrench" }
        ],

        features: [
            "Badezimmer-Renovierung",
            "Küchenausstattung",
            "Rohrleitungssanierung",
            "Notfalldienst",
            "Garantieleistung"
        ],

        detailText: "Umfassende Sanitärlösungen für Wohn- und Gewerberäume. Von der Planung über Installation bis zur Wartung – wir kümmern uns um alle Ihre Bedürfnisse.",

        ctaText: "Kostenlos Angebot anfordern",

        heroImage: "/images/uploads/sanitaer_hero_premium.png",
        gallery: [
            "/images/uploads/Gemini_Generated_Image_398sct398sct398s.webp",
            "/images/uploads/Gemini_Generated_Image_5q5ntx5q5ntx5q5n.webp",
            "/images/uploads/Gemini_Generated_Image_5vimo25vimo25vim.webp"
        ]
    },

    {
        id: "heizung",
        name: "Heizungstechnik",
        shortDescription: "Installation, Wartung und Optimierung von Heizsystemen",
        icon: "Thermometer",
        color: "secondary",
        priority: 2,

        subcategories: [
            { id: "gasheizung", name: "Gas-Heizung", icon: "flame" },
            { id: "waermepumpe", name: "Wärmepumpe", icon: "leaf" },
            { id: "pelletheizung", name: "Pellet-Heizung", icon: "box" },
            { id: "solarthermie", name: "Solarthermie", icon: "sun" }
        ],

        features: [
            "Heizungs-Installation",
            "Energieberatung",
            "Wartung & Reparatur",
            "Fördermittel-Beantragung",
            "Effizienzsteigerung"
        ],

        detailText: "Moderne Heiztechnik mit höchster Effizienz und Zuverlässigkeit. Wir beraten Sie bei der Wahl der optimalen Heizlösung für Ihre Situation.",

        ctaText: "Kostenlos Beratung buchen",

        heroImage: "/images/uploads/heizung_hero_premium.png",
        gallery: [
            "/images/uploads/Gemini_Generated_Image_5xh9j55xh9j55xh9.webp",
            "/images/uploads/Gemini_Generated_Image_7ty3xz7ty3xz7ty3.webp"
        ]
    },

    {
        id: "klima",
        name: "Klimatechnik",
        shortDescription: "Lüftungs- und Klimaanlagen für optimales Raumklima",
        icon: "Wind",
        color: "info",
        priority: 3,

        subcategories: [
            { id: "luftung", name: "Lüftungsanlagen", icon: "fan" },
            { id: "klimaanlage", name: "Klimaanlagen", icon: "snowflake" },
            { id: "luftreinigung", name: "Luftreinigung", icon: "air" },
            { id: "feuchte", name: "Feuchte-Kontrolle", icon: "droplet" }
        ],

        features: [
            "Lüftungs-Installation",
            "Klimatisierung",
            "Wartung & Service",
            "Energiesparen",
            "Luftqualität-Verbesserung"
        ],

        detailText: "Professionelle Klimatechnik für Wohn- und Gewerberäume. Optimales Raumklima für Gesundheit, Komfort und Produktivität.",

        ctaText: "Kostenlos Angebot anfordern",

        heroImage: "/images/uploads/klima_hero_premium.png",
        gallery: [
            "/images/uploads/Gemini_Generated_Image_7yx3xg7yx3xg7yx3.webp"
        ]
    },

    {
        id: "wartung",
        name: "Wartung & Service",
        shortDescription: "Regelmäßige Pflege für langlebige und effiziente Anlagen",
        icon: "Wrench", // Needs to be mapped or available
        color: "success",
        priority: 6,

        available24_7: false,

        subcategories: [
            { id: "heizungswartung", name: "Heizungswartung", icon: "flame" },
            { id: "sanitaercheck", name: "Sanitär-Check", icon: "check" },
            { id: "filterwechsel", name: "Filterwechsel", icon: "wind" }
        ],

        features: [
            "Jährliche Inspektion",
            "Funktionsprüfung",
            "Reinigung & Einstellung",
            "Verschleißteil-Tausch",
            "Dokumentation"
        ],

        detailText: "Eine regelmäßige Wartung spart Energie, verhindert Ausfälle und verlängert die Lebensdauer Ihrer Anlage. Wir kümmern uns zuverlässig darum.",

        ctaText: "Wartungstermin vereinbaren",

        // Reuse an image or use a generic one
        heroImage: "/images/uploads/wartung_hero_premium.png",
        gallery: []
    },

    {
        id: "smart-home",
        name: "Smart Home",
        shortDescription: "Intelligente Steuerung für Heizung und Klima",
        icon: "Smartphone",
        color: "primary",
        priority: 4,

        subcategories: [
            { id: "heizungssteuerung", name: "Heizungssteuerung", icon: "thermometer" },
            { id: "sicherheit", name: "Sicherheitstechnik", icon: "shield" },
            { id: "beleuchtung", name: "Lichtsteuerung", icon: "sun" },
            { id: "energie", name: "Energiemanagement", icon: "zap" }
        ],

        features: [
            "App-Steuerung",
            "Energieeinsparung",
            "Automatisierte Abläufe",
            "Nachrüstung möglich",
            "Sprachsteuerung"
        ],

        detailText: "Machen Sie Ihr Zuhause intelligent. Steuern Sie Heizung, Licht und mehr bequem per App – für mehr Komfort und Effizienz.",

        ctaText: "Beratung anfordern",

        heroImage: "/images/uploads/Gemini_Generated_Image_w5ni2lw5ni2lw5ni.webp",
        gallery: [
            "/images/uploads/extra-04.webp",
            "/images/uploads/smart_home_detail.png"
        ]
    },

    {
        id: "wasseraufbereitung",
        name: "Wasseraufbereitung",
        shortDescription: "Sauberes und weiches Wasser für Ihr Zuhause",
        icon: "Droplet",
        color: "info",
        priority: 5,

        subcategories: [
            { id: "enthertung", name: "Enthärtungsanlagen", icon: "droplets" },
            { id: "filter", name: "Trinkwasserfilter", icon: "filter" },
            { id: "dosierung", name: "Dosieranlagen", icon: "activity" }
        ],

        features: [
            "Kalkschutz",
            "Trinkwasserhygiene",
            "Geräteschutz",
            "Wartungsservice",
            "Salzlieferung"
        ],

        detailText: "Genießen Sie perfektes Trinkwasser und schützen Sie Ihre Installation vor Kalkschäden mit unseren modernen Aufbereitungsanlagen.",

        ctaText: "Angebot anfordern",

        heroImage: "/images/uploads/Gemini_Generated_Image_wnggl0wnggl0wngg.webp",
        gallery: [
            "/images/uploads/extra-05.webp",
            "/images/uploads/water_gallery_premium.png"
        ]
    }
];

export default SERVICES;
