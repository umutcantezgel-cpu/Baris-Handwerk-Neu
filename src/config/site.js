// Legacy siteConfig - maintained for backward compatibility
// Primary data source is now COMPANY_DATA from company.js
import { COMPANY_DATA } from './company';

export const siteConfig = {
    name: COMPANY_DATA.legalName,
    description: 'Ihr Experte für Sanitär, Heizung und Haustechnik in Wetzlar und Umgebung. Zuverlässig, kompetent und innovativ.',

    contact: {
        phone: COMPANY_DATA.contact.phone,
        phoneLink: COMPANY_DATA.contact.phone.replace(/\s/g, ''),
        email: COMPANY_DATA.contact.email,
        address: {
            street: COMPANY_DATA.address.street,
            zipCity: `${COMPANY_DATA.address.postalCode} ${COMPANY_DATA.address.city}`,
            country: COMPANY_DATA.address.country
        },
        hours: {
            weekdays: `Mo-Fr: ${COMPANY_DATA.hours.monday.open} - ${COMPANY_DATA.hours.monday.close} Uhr`,
            saturday: `Sa: ${COMPANY_DATA.hours.saturday.open} - ${COMPANY_DATA.hours.saturday.close} Uhr`
        }
    },

    social: {
        instagram: 'https://www.instagram.com/bathermhaustechnik'
    },

    serviceAreas: COMPANY_DATA.business.serviceArea,

    legal: {
        owner: `${COMPANY_DATA.owner.firstName} ${COMPANY_DATA.owner.lastName}`,
        taxId: COMPANY_DATA.tax.ustId,
        register: COMPANY_DATA.tax.registerStatus,
        authority: COMPANY_DATA.authority.name,
        dataProtectionAuthority: {
            name: 'Der Hessische Beauftragte für Datenschutz und Informationsfreiheit',
            street: 'Gustav-Stresemann-Ring 1',
            zipCity: '65189 Wiesbaden',
            website: 'https://datenschutz.hessen.de'
        }
    },

    legalName: COMPANY_DATA.legalName
};
