import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

const SchemaMarkup = () => {
    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.name, // "Bariş Haustechnik"
        "image": `${window.location.origin}/images/og-image.jpg`, // Adjust path if needed
        "description": siteConfig.description,
        "url": window.location.origin,
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.contact.address.street,
            "addressLocality": siteConfig.contact.address.city, // Assuming zipCity string needs parsing or is fine as is? siteConfig usually has separated fields or we parse it.
            // Let's assume zipCity is like "35586 Wetzlar". 
            "postalCode": siteConfig.contact.address.postalCode || "35586", // Fallback if not separate
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.5518", // Wetzlar approx
            "longitude": "8.4893"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": siteConfig.contact.hours?.weekdays?.split('-')[0]?.trim() || "07:00",
                "closes": siteConfig.contact.hours?.weekdays?.split('-')[1]?.trim() || "17:00"
            }
        ],
        "priceRange": "€€",
        "areaServed": siteConfig.serviceAreas?.map(area => ({
            "@type": "City",
            "name": area
        }))
    };

    // Organization Schema (often good to have as well)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.legalName || siteConfig.name,
        "url": window.location.origin,
        "logo": `${window.location.origin}/logo.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.contact.phone,
            "contactType": "customer service"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
