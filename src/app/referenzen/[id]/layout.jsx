import { PORTFOLIO_PROJECTS } from '@/config/projects';

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function Layout({ children }) {
  return children;
}
