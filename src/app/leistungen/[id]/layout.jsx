import { SERVICES } from '@/config/services';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export default function Layout({ children }) {
  return children;
}
