import { MetadataRoute } from 'next';
import { posts } from '@/config/posts';
import { SERVICES } from '@/config/services';
export const dynamic = 'force-static';

const CITIES = [
  'wetzlar', 'giessen', 'marburg', 'limburg', 'bad-nauheim',
  'friedberg', 'butzbach', 'herborn', 'dillenburg', 'haiger',
  'braunfels', 'solms', 'asslar'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.batherm.de';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/leistungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ueber-uns`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/referenzen`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/notdienst`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/foerderung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/energieberatung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/karriere`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/beratung`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/widerruf`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/leistungen/${service.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/standorte/${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...cityPages];
}
