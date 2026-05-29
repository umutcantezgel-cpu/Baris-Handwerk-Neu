import type { Metadata } from 'next';

const BASE_URL = 'https://www.batherm.de';
const SITE_NAME = 'Batherm Haustechnik';

export function createMetadata(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = `${options.title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description: options.description,
    alternates: { canonical: `${BASE_URL}${options.path}` },
    openGraph: {
      title: fullTitle,
      description: options.description,
      url: `${BASE_URL}${options.path}`,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
      images: options.image ? [{ url: options.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: options.description,
    },
    robots: { index: true, follow: true },
  };
}
