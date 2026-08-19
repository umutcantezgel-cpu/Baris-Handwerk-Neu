import { createMetadata } from '@/lib/metadata';
import { buildGraph, buildFaqNode, buildBreadcrumbNode, buildWebPageNode, SITE_URL } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = createMetadata({
  title: 'FAQ – Fragen zu Heizung & Sanitär',
  description: 'Antworten auf häufige Fragen rund um Heizung, Sanitär, Wärmepumpen und Förderung. Ihr Meisterbetrieb in Wetzlar berät Sie gerne.',
  path: '/faq',
});

const pageUrl = `${SITE_URL}/faq`;
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq' },
];

const faqs = [
  {
    question: 'Wie oft sollte meine Heizung gewartet werden?',
    answer: 'Wir empfehlen eine jährliche Wartung, idealerweise vor Beginn der Heizperiode (September/Oktober). Dies sichert die Effizienz und verlängert die Lebensdauer Ihrer Anlage.',
  },
  {
    question: 'Wann lohnt sich ein Heizungstausch?',
    answer: 'Bei Anlagen älter als 15-20 Jahre, stark steigenden Energiekosten oder häufigen Reparaturen ist ein Austausch oft wirtschaftlich sinnvoll. Wir beraten Sie gerne individuell.',
  },
  {
    question: 'Was kostet eine neue Heizung?',
    answer: 'Die Kosten variieren stark nach Anlagentyp (Gas, Wärmepumpe, Pellets) und Gebäudegröße. Gas-Brennwertheizungen beginnen bei ca. 8.000€, Wärmepumpen ab ca. 15.000€ (vor Förderung).',
  },
  {
    question: 'Welche Heizung ist die beste?',
    answer: 'Das hängt von Ihrem Gebäude, Ihrem Budget und Ihren Prioritäten ab. Wärmepumpen sind sehr effizient und werden stark gefördert, Gas ist oft günstiger in der Anschaffung.',
  },
  {
    question: 'Was kostet eine Badsanierung?',
    answer: 'Ein Standardbad beginnt bei ca. 15.000€, während Luxusbäder deutlich teurer sein können. Wir erstellen Ihnen gerne ein individuelles Angebot nach einer Vor-Ort-Besichtigung.',
  },
  {
    question: 'Wie lange dauert eine Badsanierung?',
    answer: 'Ein komplettes Bad kann in 2-3 Wochen fertiggestellt werden. Die genaue Dauer hängt vom Umfang der Arbeiten ab.',
  },
  {
    question: 'Was tun bei einem Wasserrohrbruch?',
    answer: 'Sofort den Hauptwasserhahn schließen, Strom im betroffenen Bereich abschalten und uns kontaktieren. Dokumentieren Sie Schäden für die Versicherung.',
  },
  {
    question: 'Wie vermeide ich Legionellen?',
    answer: 'Warmwasser auf mindestens 60°C halten, alle Wasserhähne regelmäßig nutzen (mindestens alle 3 Tage) und die Anlage jährlich warten lassen.',
  },
  {
    question: 'Wie oft muss eine Klimaanlage gewartet werden?',
    answer: 'Mindestens einmal jährlich sollten Filter gereinigt/gewechselt und das System überprüft werden. Bei starker Nutzung empfehlen wir halbjährliche Wartung.',
  },
  {
    question: 'Welche Klimaanlage ist für mein Zuhause geeignet?',
    answer: 'Das hängt von der Raumgröße und Ihren Anforderungen ab. Split-Klimaanlagen sind effizient und leise, mobile Geräte flexibel einsetzbar.',
  },
  {
    question: 'Wie hoch sind die Stromkosten einer Klimaanlage?',
    answer: 'Moderne Inverter-Klimaanlagen verbrauchen bei typischer Nutzung ca. 30-50€ pro Monat. Der genaue Verbrauch hängt von Gerät und Nutzungsdauer ab.',
  },
  {
    question: 'Ist eine Vor-Ort-Besichtigung notwendig?',
    answer: 'Für ein genaues Angebot schauen wir uns die Gegebenheiten bei Ihnen vor Ort an. Dieser Termin ist für Sie unverbindlich.',
  },
  {
    question: 'In welchem Gebiet sind Sie tätig?',
    answer: 'Wir sind in Wetzlar und im gesamten Lahn-Dill-Kreis sowie Richtung Gießen und Marburg für Sie tätig.',
  },
  {
    question: 'Wie hoch ist die Förderung für Wärmepumpen?',
    answer: 'Aktuell werden Wärmepumpen mit bis zu 70% der förderfähigen Kosten bezuschusst (KfW Heizungsförderung 458). Wir unterstützen Sie beim Förderantrag.',
  },
  {
    question: 'Erstellen Sie kostenlose Angebote?',
    answer: 'Ja, wir erstellen Ihnen gerne ein transparentes, unverbindliches Angebot nach einer Vor-Ort-Besichtigung.',
  },
];

const faqGraph = buildGraph([
  buildWebPageNode({
    url: pageUrl,
    name: 'Häufig gestellte Fragen (FAQ) | Batherm Haustechnik',
    description:
      'Antworten auf alle Fragen rund um Sanitär, Heizung, Wärmepumpen, Klimaanlagen und Fördermittel in Wetzlar.',
    breadcrumbItems: breadcrumbs,
  }),
  buildBreadcrumbNode(breadcrumbs, pageUrl),
  buildFaqNode(faqs, pageUrl),
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={faqGraph} />
      {children}
    </>
  );
}
