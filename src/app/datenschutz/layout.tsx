import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Datenschutzerklärung nach DSGVO',
  description: 'Ausführliche Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei Batherm Haustechnik gemäß DSGVO.',
  path: '/datenschutz',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
