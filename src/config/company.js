// OFFICIAL COMPANY DATA - DO NOT MODIFY
// Source: Gemini 3 Pro Official Reference Documentation (v1.0)

export const COMPANY_DATA = {
    // Legal Information (Handelsregister)
    legalName: "Baris Aydin Batherm Haustechnik",
    owner: {
        firstName: "Baris",
        lastName: "Aydin",
        title: "Geschäftsführer & Inhaber"
    },

    // Address & Contact (Betriebsstätte)
    address: {
        street: "Linsenbergstrasse 9",
        postalCode: "35586",
        city: "Wetzlar",
        state: "Hessen",
        country: "Deutschland",
        countryCode: "DE",
        fullAddress: "Linsenbergstrasse 9, 35586 Wetzlar, Deutschland"
    },

    // Tax & Registration
    tax: {
        ustId: "DE450483432", // Umsatzsteuer-Identifikationsnummer
        registerNumber: null, // Handelsregisternummer nicht vorhanden
        registerStatus: "Einzelunternehmen oder Gesellschaft ohne HR-Eintrag"
    },

    // Authority & Compliance
    authority: {
        name: "Berufsgenossenschaft der Bauwirtschaft",
        shortName: "BG BAU",
        type: "Berufsgenossenschaft",
        responsibility: "Unfallverhütung und Rehabilitation im Bauwesen",
        certification: "Meister im Handwerk (Sanitär-, Heizungs- und Klimatechnik)"
    },

    // Business Information
    business: {
        industryType: "Sanitär-, Heizungs- und Klimatechnik",
        businessType: "Handwerksbetrieb (HWK-Zugehörigkeit)",
        primaryServices: ["Sanitärtechnik", "Heizungstechnik", "Klimatechnik"],
        serviceArea: ["Wetzlar", "Gießen", "Marburg", "Limburg an der Lahn", "Bad Nauheim", "Friedberg", "Butzbach", "Herborn", "Dillenburg", "Haiger", "Braunfels", "Solms", "Lahnau", "Aßlar", "Hüttenberg", "Linden", "Pohlheim"],
        establishmentYear: 2025
    },

    // Contact
    contact: {
        phone: "+49 172 9475061", // Placeholder as per doc
        phoneFormatted: "+49 172 9475061", // Format example
        email: "info@batherm.de",
        website: "https://www.batherm.de",
        emergency: {
            available: false,
            phone24_7: null,
            note: "Kontaktieren Sie uns zu den Öffnungszeiten"
        }
    },

    // Social Media
    social: {
        instagram: "https://www.instagram.com/bathermhaustechnik"
    },

    // Business Hours
    hours: {
        monday: { open: "07:00", close: "17:00", type: "normal" },
        tuesday: { open: "07:00", close: "17:00", type: "normal" },
        wednesday: { open: "07:00", close: "17:00", type: "normal" },
        thursday: { open: "07:00", close: "17:00", type: "normal" },
        friday: { open: "07:00", close: "17:00", type: "normal" },
        saturday: { open: "08:00", close: "13:00", type: "limited" },
        sunday: { type: "closed", note: "Geschlossen" },
        holidays: "Geschlossen"
    }
};

// Marketing / Content Data (Restored for About Page compatibility)
import { Award, Users, Target, Heart, Clock, Shield } from 'lucide-react';

export const values = [
    { icon: Shield, title: "Qualität", description: "Höchste Standards in Material und Ausführung." },
    { icon: Clock, title: "Zuverlässigkeit", description: "Termingerechte und sorgfältige Arbeit." },
    { icon: Heart, title: "Leidenschaft", description: "Wir lieben, was wir tun." },
    { icon: Users, title: "Kundenfokus", description: "Ihre Zufriedenheit steht an erster Stelle." },
    { icon: Target, title: "Präzision", description: "Exaktes Arbeiten bis ins Detail." },
    { icon: Award, title: "Kompetenz", description: "Ständige Weiterbildung unseres Teams." },
    { icon: Shield, title: "Sicherheit", description: "Geprüfte Sicherheit bei allen Installationen." },
    { icon: Users, title: "Teamgeist", description: "Gemeinsam stark für Ihr Projekt." }
];

export const team = [
    { name: "Baris Aydin", position: "Geschäftsführer", description: "Meister für Sanitär-, Heizungs- und Klimatechnik." },
    { name: "Team-Mitglied", position: "Haustechniker", description: "Ihr Experte für zuverlässige Installationen und Wartung." }
];

// Mein Team - Flexible team section for additional team members
// Update this array to add/remove team members without changing the page code
export const meinTeam = [
    { name: "Mitarbeiter 1", position: "Fachkraft", description: "Spezialist für Sanitärtechnik und Installationen." },
    { name: "Mitarbeiter 2", position: "Fachkraft", description: "Experte für Heizungstechnik und Wartung." }
];

export const certifications = [
    { title: "Meisterbrief", image: "/images/certificates/meisterbrief.jpg" },
    { title: "Zusatz zur TRGI-Seminarbescheinigung", image: "/images/certificates/trgi_seminar.jpg" },
    { title: "Ausbildereignungsprüfung", image: "/images/certificates/ausbilder_eignung.jpg" },
    { title: "Zusatz zur TRWI-Seminarbescheinigung", image: "/images/certificates/trwi_seminar.jpg" },
    { title: "Teilnahmebescheinigung Flüssiggasseminar", image: "/images/certificates/fluessiggas_seminar.jpg" },
    { title: "Hilti Brandschutzschulung Anwender Professional", image: "/images/certificates/hilti_brandschutz.jpg" }
];

export default COMPANY_DATA;
