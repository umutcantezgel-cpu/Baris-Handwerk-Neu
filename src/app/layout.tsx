import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { HeaderWrapper } from '@/components/layout/HeaderWrapper';
import { ClientWidgets } from '@/components/layout/ClientWidgets';
import Footer from '@/components/common/Footer';
import TrackingScripts from '@/components/common/TrackingScripts';
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
  metadataBase: new URL('https://www.batherm.de'),
  title: {
    default: 'Sanitär, Heizung & Solar in Wetzlar | Batherm Haustechnik',
    template: '%s | Batherm Haustechnik'
  },
  description: 'Ihr zuverlässiger Partner für Sanitär, Heizung, Solar und Wärmepumpen in Wetzlar und Umgebung. Professionelle Haustechnik von Batherm.',
  keywords: ['Sanitär', 'Heizung', 'Wärmepumpen', 'Solar', 'Wetzlar', 'Batherm Haustechnik', 'Klempner', 'Haustechnik'],
  authors: [{ name: 'Batherm Haustechnik' }],
  creator: 'Batherm Haustechnik',
  publisher: 'Batherm Haustechnik',
  alternates: {
    canonical: 'https://www.batherm.de/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.batherm.de/',
    title: 'Sanitär, Heizung & Solar in Wetzlar | Batherm Haustechnik',
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

import { buildRootGraph } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootKnowledgeGraph = buildRootGraph();

  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable} ${plexMono.variable}`}>
      <head>
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Wetzlar" />
        <meta name="geo.position" content="50.5567;8.5022" />
        <meta name="ICBM" content="50.5567, 8.5022" />
        <JsonLd schema={rootKnowledgeGraph} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <AuthProvider>
          <ContentProvider>
            <TrackingScripts />
            <HeaderWrapper />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <ClientWidgets />
          </ContentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
