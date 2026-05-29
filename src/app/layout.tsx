import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { HeaderWrapper } from '@/components/layout/HeaderWrapper';
import Footer from '@/components/common/Footer';
import TrackingScripts from '@/components/common/TrackingScripts';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ConsentManager from '@/components/common/ConsentManager';
import { ContentProvider } from '@/contexts/ContentContext';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Batherm Haustechnik | Sanitär & Heizung in Wetzlar',
    template: '%s | Batherm Haustechnik'
  },
  description: 'Ihr zuverlässiger Partner für Sanitär, Heizung, Solar und Wärmepumpen in Wetzlar und Umgebung. Professionelle Haustechnik von Batherm.',
  keywords: ['Sanitär', 'Heizung', 'Wärmepumpen', 'Solar', 'Wetzlar', 'Batherm Haustechnik', 'Klempner', 'Haustechnik'],
  authors: [{ name: 'Batherm Haustechnik' }],
  creator: 'Batherm Haustechnik',
  publisher: 'Batherm Haustechnik',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.batherm.de/',
    title: 'Batherm Haustechnik | Sanitär & Heizung in Wetzlar',
    description: 'Ihr zuverlässiger Partner für Sanitär, Heizung, Solar und Wärmepumpen in Wetzlar und Umgebung. Professionelle Haustechnik von Batherm.',
    siteName: 'Batherm Haustechnik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#1C1F26',
};

/* ════════════════════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   Single, comprehensive schema covering LocalBusiness + Plumber + HVACBusiness.
   This is THE canonical entity for Google's Knowledge Graph and Local Pack.
   ════════════════════════════════════════════════════════════════════════════ */

const SITE_URL = 'https://www.batherm.de';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  "name": "Batherm Haustechnik",
  "alternateName": "Baris Aydin Batherm Haustechnik",
  "legalName": "Baris Aydin Batherm Haustechnik",
  "description": "Meisterbetrieb für Sanitär, Heizung, Klima und Solartechnik in Wetzlar. Spezialisiert auf Wärmepumpen, Badsanierung, Heizungsmodernisierung und Notdienst. Zertifizierter Fachbetrieb mit persönlicher Beratung.",
  "url": SITE_URL,
  "telephone": "+491729475061",
  "email": "info@batherm.de",
  "image": `${SITE_URL}/images/batherm-logo.png`,
  "logo": {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    "url": `${SITE_URL}/images/batherm-logo.png`,
    "contentUrl": `${SITE_URL}/images/batherm-logo.png`,
    "caption": "Batherm Haustechnik Logo"
  },
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Baris Aydin",
    "jobTitle": "Geschäftsführer & Inhaber"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Linsenbergstrasse 9",
    "addressLocality": "Wetzlar",
    "addressRegion": "Hessen",
    "postalCode": "35586",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.5567,
    "longitude": 8.5022
  },
  "hasMap": "https://www.google.com/maps?cid=batherm+haustechnik+wetzlar",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 50.5567,
      "longitude": 8.5022
    },
    "geoRadius": "50000"
  },
  "serviceArea": [
    { "@type": "City", "name": "Wetzlar", "sameAs": "https://de.wikipedia.org/wiki/Wetzlar" },
    { "@type": "City", "name": "Gießen", "sameAs": "https://de.wikipedia.org/wiki/Gie%C3%9Fen" },
    { "@type": "City", "name": "Marburg", "sameAs": "https://de.wikipedia.org/wiki/Marburg" },
    { "@type": "City", "name": "Limburg an der Lahn" },
    { "@type": "City", "name": "Bad Nauheim" },
    { "@type": "City", "name": "Friedberg (Hessen)" },
    { "@type": "City", "name": "Butzbach" },
    { "@type": "City", "name": "Herborn" },
    { "@type": "City", "name": "Dillenburg" },
    { "@type": "City", "name": "Haiger" },
    { "@type": "City", "name": "Braunfels" },
    { "@type": "City", "name": "Solms" },
    { "@type": "City", "name": "Lahnau" },
    { "@type": "City", "name": "Aßlar" },
    { "@type": "City", "name": "Hüttenberg" },
    { "@type": "City", "name": "Linden" },
    { "@type": "City", "name": "Pohlheim" }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Überweisung, EC-Karte, Bar",
  "slogan": "Meisterhafte Installationen für Ihr Zuhause",
  "knowsAbout": [
    "Sanitärtechnik", "Heizungstechnik", "Wärmepumpen", "Klimatechnik",
    "Badsanierung", "Solarthermie", "Photovoltaik", "Heizungsmodernisierung",
    "Trinkwasserhygiene", "Fußbodenheizung", "Smart Home Heizungssteuerung",
    "Barrierefreies Bad", "Legionellenprüfung", "Rohrsanierung"
  ],
  "knowsLanguage": ["de", "tr", "en"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Meisterbrief",
      "name": "Meister im Handwerk – Sanitär-, Heizungs- und Klimatechnik"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Leistungen von Batherm Haustechnik",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Sanitärtechnik",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Badsanierung & Badumbau" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Barrierefreies Bad" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trinkwasserinstallation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rohrsanierung" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legionellenprüfung" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Heizungstechnik",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wärmepumpen-Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heizungsmodernisierung" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fußbodenheizung" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heizungswartung" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Home Heizungssteuerung" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gasheizung Austausch" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Klimatechnik",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Klimaanlagen-Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Klimaanlagen-Wartung" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Solartechnik",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solarthermie" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Photovoltaik-Beratung" } }
        ]
      }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/bathermhaustechnik"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  "name": "Batherm Haustechnik",
  "legalName": "Baris Aydin Batherm Haustechnik",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/batherm-logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+491729475061",
    "contactType": "customer service",
    "availableLanguage": ["German", "Turkish", "English"],
    "areaServed": "DE"
  },
  "sameAs": [
    "https://www.instagram.com/bathermhaustechnik"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "Batherm Haustechnik",
  "url": SITE_URL,
  "publisher": { "@id": `${SITE_URL}/#org` },
  "inLanguage": "de-DE"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable} ${plexMono.variable}`}>
      <head>
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Wetzlar" />
        <meta name="geo.position" content="50.5567;8.5022" />
        <meta name="ICBM" content="50.5567, 8.5022" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <AuthProvider>
          <ContentProvider>
            <TrackingScripts />
            <WhatsAppButton />
            
            <HeaderWrapper />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <ConsentManager />
          </ContentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
