import { posts } from '@/config/posts';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Layout({ children }) {
  return children;
}
