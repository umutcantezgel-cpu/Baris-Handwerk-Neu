import { posts } from '@/config/posts';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const pageUrl = `https://www.batherm.de/blog/${post.slug}`;
  const title = post.title;
  const fullTitle = post.title.length > 38 ? post.title : `${post.title} | Batherm Haustechnik`;
  const description = post.excerpt ? (post.excerpt.length > 155 ? `${post.excerpt.slice(0, 152)}...` : post.excerpt) : 'Ratgeber von Batherm Haustechnik';

  return {
    title: post.title.length > 38 ? { absolute: post.title } : title,
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
      type: 'article',
      publishedTime: post.created_date,
      images: post.image_url ? [{ url: post.image_url, width: 1200, height: 630 }] : [],
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
