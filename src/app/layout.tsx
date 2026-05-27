import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { HeaderWrapper } from '@/components/layout/HeaderWrapper'; // We need a wrapper for state
import Footer from '@/components/common/Footer';
import TrackingScripts from '@/components/common/TrackingScripts';
import SchemaMarkup from '@/components/common/SchemaMarkup';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Batherm Haustechnik",
    "image": "https://batherm-haustechnik.de/images/logo.png",
    "description": "Ihr zuverlässiger Partner für Sanitär, Heizung, Solar und Wärmepumpen in Wetzlar und Umgebung.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Linsenbergstrasse 9",
      "addressLocality": "Wetzlar",
      "postalCode": "35586",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.5567,
      "longitude": 8.5022
    },
    "url": "https://www.batherm.de",
    "telephone": "+49 172 9475061",
    "email": "info@batherm.de",
    "priceRange": "€€",
    "areaServed": ["Wetzlar", "Gießen", "Marburg", "Limburg an der Lahn"],
    "knowsAbout": ["Sanitärtechnik", "Heizungstechnik", "Wärmepumpen", "Badsanierung", "Klimatechnik"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "13:00"
      }
    ]
  };

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
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <AuthProvider>
          <ContentProvider>
            <TrackingScripts />
            <SchemaMarkup />
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
