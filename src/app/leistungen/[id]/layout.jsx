import { SERVICES } from '@/config/services';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return {};

  const pageUrl = `https://www.batherm.de/leistungen/${service.id}`;
  const title = `${service.name} in Wetzlar & Umgebung`;
  const fullTitle = `${title} | Batherm Haustechnik`;
  const description = `${service.shortDescription}. Ihr zertifizierter Meisterbetrieb für ${service.name} in Wetzlar. Kostenlose Beratung & faire Festpreise.`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        'de': pageUrl,
        'x-default': pageUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: 'Batherm Haustechnik',
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
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
}

export default function Layout({ children }) {
  return children;
}
