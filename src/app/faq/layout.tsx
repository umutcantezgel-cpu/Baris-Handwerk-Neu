import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'FAQ – Häufige Fragen zu Heizung & Sanitär',
  description: 'Antworten auf häufige Fragen rund um Heizung, Sanitär, Wärmepumpen und Förderung. Ihr Meisterbetrieb in Wetzlar berät Sie.',
  path: '/faq',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.batherm.de/faq/#faqpage',
  'mainEntity': [
    // Heizung
    {
      '@type': 'Question',
      'name': 'Wie oft sollte meine Heizung gewartet werden?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Wir empfehlen eine jährliche Wartung, idealerweise vor Beginn der Heizperiode (September/Oktober). Dies sichert die Effizienz und verlängert die Lebensdauer Ihrer Anlage.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Wann lohnt sich ein Heizungstausch?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Bei Anlagen älter als 15-20 Jahre, stark steigenden Energiekosten oder häufigen Reparaturen ist ein Austausch oft wirtschaftlich sinnvoll. Wir beraten Sie gerne individuell.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Was kostet eine neue Heizung?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Die Kosten variieren stark nach Anlagentyp (Gas, Wärmepumpe, Pellets) und Gebäudegröße. Gas-Brennwertheizungen beginnen bei ca. 8.000€, Wärmepumpen ab ca. 15.000€ (vor Förderung).',
      },
    },
    {
      '@type': 'Question',
      'name': 'Welche Heizung ist die beste?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Das hängt von Ihrem Gebäude, Ihrem Budget und Ihren Prioritäten ab. Wärmepumpen sind sehr effizient und werden stark gefördert, Gas ist oft günstiger in der Anschaffung.',
      },
    },
    // Sanitär
    {
      '@type': 'Question',
      'name': 'Was kostet eine Badsanierung?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Ein Standardbad beginnt bei ca. 15.000€, während Luxusbäder deutlich teurer sein können. Wir erstellen Ihnen gerne ein individuelles Angebot nach einer Vor-Ort-Besichtigung.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Wie lange dauert eine Badsanierung?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Ein komplettes Bad kann in 2-3 Wochen fertiggestellt werden. Die genaue Dauer hängt vom Umfang der Arbeiten ab.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Was tun bei einem Wasserrohrbruch?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Sofort den Hauptwasserhahn schließen, Strom im betroffenen Bereich abschalten und uns kontaktieren. Dokumentieren Sie Schäden für die Versicherung.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Wie vermeide ich Legionellen?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Warmwasser auf mindestens 60°C halten, alle Wasserhähne regelmäßig nutzen (mindestens alle 3 Tage) und die Anlage jährlich warten lassen.',
      },
    },
    // Klima & Lüftung
    {
      '@type': 'Question',
      'name': 'Wie oft muss eine Klimaanlage gewartet werden?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Mindestens einmal jährlich sollten Filter gereinigt/gewechselt und das System überprüft werden. Bei starker Nutzung empfehlen wir halbjährliche Wartung.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Welche Klimaanlage ist für mein Zuhause geeignet?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Das hängt von der Raumgröße und Ihren Anforderungen ab. Split-Klimaanlagen sind effizient und leise, mobile Geräte flexibel einsetzbar.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Wie hoch sind die Stromkosten einer Klimaanlage?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Moderne Inverter-Klimaanlagen verbrauchen bei typischer Nutzung ca. 30-50€ pro Monat. Der genaue Verbrauch hängt von Gerät und Nutzungsdauer ab.',
      },
    },
    // Service & Allgemeines
    {
      '@type': 'Question',
      'name': 'Ist eine Vor-Ort-Besichtigung notwendig?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Für ein genaues Angebot schauen wir uns die Gegebenheiten bei Ihnen vor Ort an. Dieser Termin ist für Sie unverbindlich.',
      },
    },
    {
      '@type': 'Question',
      'name': 'In welchem Gebiet sind Sie tätig?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Wir sind in Wetzlar und im gesamten Lahn-Dill-Kreis sowie Richtung Gießen für Sie tätig.',
      },
    },
    // Kosten & Förderung
    {
      '@type': 'Question',
      'name': 'Helfen Sie bei der Beantragung von Fördermitteln?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Selbstverständlich. Wir beraten Sie zu aktuellen Förderprogrammen (BAFA, KfW) und unterstützen Sie bei der Antragstellung.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Wie hoch ist die Förderung für Wärmepumpen?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Aktuell werden Wärmepumpen mit bis zu 40% der Investitionskosten gefördert (BAFA). Die genaue Höhe hängt von verschiedenen Faktoren ab.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Erstellen Sie kostenlose Angebote?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Ja, wir erstellen Ihnen gerne ein unverbindliches Angebot nach einer Vor-Ort-Besichtigung.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
