import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildJobPostingNode, buildFaqNode, buildBreadcrumbNode, buildWebPageNode, SITE_URL } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'Karriere & Jobs im SHK-Handwerk',
  description: 'Werden Sie Teil unseres Teams bei Batherm Haustechnik in Wetzlar. Aktuelle Jobs für Anlagenmechaniker SHK – jetzt unkompliziert bewerben!',
  path: '/karriere',
});

const pageUrl = `${SITE_URL}/karriere`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Karriere & Jobs', path: '/karriere' },
];

const jobs = [
  {
    title: 'Anlagenmechaniker SHK (m/w/d) für Sanitär- & Heizungstechnik',
    description:
      'Installation von Wärmepumpen, Fußbodenheizungen, Trinkwasserinstallationen und Premium-Badsanierungen in Wetzlar und Region.',
    employmentType: 'FULL_TIME',
  },
  {
    title: 'Servicetechniker / Kundendienstmonteur SHK (m/w/d)',
    description:
      'Wartung, Instandhaltung und Störungsbeseitigung von Wärmepumpen, Gas- und Solaranlagen im Raum Wetzlar und Mittelhessen.',
    employmentType: 'FULL_TIME',
  },
  {
    title: 'Auszubildender zum Anlagenmechaniker SHK (m/w/d)',
    description:
      'Fundierte Ausbildung im SHK-Handwerk mit Zukunft: Lerne moderne Wärmepumpentechnik, Klimatechnik und hochwertige Bäder von Meistern ihres Fachs.',
    employmentType: 'FULL_TIME',
  },
];

const karriereFaqs = [
  {
    question: 'Wie läuft der Bewerbungsprozess bei Batherm Haustechnik ab?',
    answer:
      'Ganz unkompliziert: Sie rufen uns an, schreiben eine E-Mail oder nutzen unser Kontaktformular. Wir benötigen kein langes Anschreiben – ein kurzer Lebenslauf oder ein Anruf reicht vollkommen aus.',
  },
  {
    question: 'Gibt es Möglichkeiten zur fachlichen Weiterbildung?',
    answer:
      'Ja, wir fördern gezielt Produktschulungen bei führenden Herstellern (Panasonic, Vaillant, Viessmann), Lehrgänge zum Kälteschein sowie Weiterbildung zum Meister oder Techniker.',
  },
  {
    question: 'Werden Überstunden bezahlt oder ausgeglichen?',
    answer:
      'Jede geleistete Überstunde wird auf Ihrem persönlichen Zeitkonto minutengenau erfasst und kann nach Wunsch wahlweise mit Zuschlägen ausbezahlt oder durch Freizeit ausgeglichen werden.',
  },
];

const karriereGraph = buildGraph([
  buildWebPageNode({
    url: pageUrl,
    name: 'Karriere & Jobs im SHK-Handwerk in Wetzlar | Batherm Haustechnik',
    description:
      'Stellenangebote für Anlagenmechaniker SHK, Servicetechniker und Azubis bei Batherm Haustechnik in Wetzlar.',
    breadcrumbItems: breadcrumbs,
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
  ...jobs.map((job) => buildJobPostingNode(job, pageUrl)),
  buildFaqNode(karriereFaqs, pageUrl),
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={karriereGraph} />
      {children}
    </>
  );
}

