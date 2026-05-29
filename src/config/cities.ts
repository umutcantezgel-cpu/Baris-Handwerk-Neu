export interface CityData {
  slug: string;
  name: string;
  distanceKm: number;
  region: string;
  description: string;
  mapQuery: string;
}

export const CITIES: CityData[] = [
  {
    slug: 'wetzlar',
    name: 'Wetzlar',
    distanceKm: 0,
    region: 'Lahn-Dill-Kreis',
    description: 'Als Ihr lokaler Meisterbetrieb direkt in Wetzlar sind wir in wenigen Minuten bei Ihnen. Von der Altstadt bis Niedergirmes – wir kennen die Gebäudestrukturen und Installationen in Wetzlar wie unsere Westentasche.',
    mapQuery: 'Wetzlar,Hessen,Deutschland',
  },
  {
    slug: 'giessen',
    name: 'Gießen',
    distanceKm: 25,
    region: 'Landkreis Gießen',
    description: 'Als Universitätsstadt mit vielen Alt- und Neubauten bietet Gießen ein breites Spektrum an Haustechnik-Anforderungen. Ob Studentenwohnheim oder Einfamilienhaus – wir sind Ihr kompetenter Partner.',
    mapQuery: 'Gießen,Hessen,Deutschland',
  },
  {
    slug: 'marburg',
    name: 'Marburg',
    distanceKm: 40,
    region: 'Landkreis Marburg-Biedenkopf',
    description: 'Die historische Universitätsstadt an der Lahn stellt besondere Anforderungen an die Haustechnik. Wir haben Erfahrung mit denkmalgeschützten Gebäuden und modernen Sanierungen in Marburg.',
    mapQuery: 'Marburg,Hessen,Deutschland',
  },
  {
    slug: 'limburg',
    name: 'Limburg an der Lahn',
    distanceKm: 35,
    region: 'Landkreis Limburg-Weilburg',
    description: 'Auch in Limburg und dem Landkreis Limburg-Weilburg sind wir für Sie da. Professionelle Sanitär- und Heizungstechnik mit kurzen Anfahrtswegen.',
    mapQuery: 'Limburg+an+der+Lahn,Hessen,Deutschland',
  },
  {
    slug: 'bad-nauheim',
    name: 'Bad Nauheim',
    distanceKm: 40,
    region: 'Wetteraukreis',
    description: 'Die Kurstadt Bad Nauheim mit ihren historischen Villen und Jugendstilbauten erfordert feinfühlige Haustechnik-Lösungen. Wir verbinden moderne Technik mit dem Charme historischer Gebäude.',
    mapQuery: 'Bad+Nauheim,Hessen,Deutschland',
  },
  {
    slug: 'friedberg',
    name: 'Friedberg (Hessen)',
    distanceKm: 45,
    region: 'Wetteraukreis',
    description: 'In Friedberg und der gesamten Wetterau sind wir ein verlässlicher Partner für Sanitär, Heizung und Klimatechnik. Schnelle Reaktionszeiten und faire Preise.',
    mapQuery: 'Friedberg,Hessen,Deutschland',
  },
  {
    slug: 'butzbach',
    name: 'Butzbach',
    distanceKm: 35,
    region: 'Wetteraukreis',
    description: 'Die Friedrich-Ludwig-Weidig-Stadt Butzbach und Umgebung gehört fest zu unserem Einzugsgebiet. Zuverlässige Haustechnik für Privat und Gewerbe.',
    mapQuery: 'Butzbach,Hessen,Deutschland',
  },
  {
    slug: 'herborn',
    name: 'Herborn',
    distanceKm: 20,
    region: 'Lahn-Dill-Kreis',
    description: 'Die Bärenstadt Herborn liegt nur wenige Kilometer von unserem Standort entfernt. Ob Altstadt-Fachwerkhaus oder Neubaugebiet – wir sind schnell vor Ort.',
    mapQuery: 'Herborn,Hessen,Deutschland',
  },
  {
    slug: 'dillenburg',
    name: 'Dillenburg',
    distanceKm: 25,
    region: 'Lahn-Dill-Kreis',
    description: 'Die Oranierstadt Dillenburg und das gesamte Dilltal vertrauen auf unsere Expertise in Sanitär- und Heizungstechnik. Faire Preise, kompetente Beratung.',
    mapQuery: 'Dillenburg,Hessen,Deutschland',
  },
  {
    slug: 'haiger',
    name: 'Haiger',
    distanceKm: 30,
    region: 'Lahn-Dill-Kreis',
    description: 'Auch in Haiger und den umliegenden Ortsteilen bieten wir das volle Spektrum der Haustechnik. Schnelle Anfahrt und termingerechte Ausführung.',
    mapQuery: 'Haiger,Hessen,Deutschland',
  },
  {
    slug: 'braunfels',
    name: 'Braunfels',
    distanceKm: 10,
    region: 'Lahn-Dill-Kreis',
    description: 'Die Schlossstadt Braunfels liegt direkt vor unserer Haustür. Kürzeste Anfahrtswege garantieren schnellen Service für alle Haustechnik-Anliegen.',
    mapQuery: 'Braunfels,Hessen,Deutschland',
  },
  {
    slug: 'solms',
    name: 'Solms',
    distanceKm: 8,
    region: 'Lahn-Dill-Kreis',
    description: 'Solms gehört zu unseren nächsten Nachbargemeinden. Hier sind wir besonders schnell vor Ort – ideal für dringende Reparaturen und geplante Installationen.',
    mapQuery: 'Solms,Hessen,Deutschland',
  },
  {
    slug: 'asslar',
    name: 'Aßlar',
    distanceKm: 5,
    region: 'Lahn-Dill-Kreis',
    description: 'Als direkter Nachbar von Wetzlar gehört Aßlar zu unserem Kerngebiet. Minimale Anfahrtszeit und persönlicher Service zeichnen uns hier aus.',
    mapQuery: 'Aßlar,Hessen,Deutschland',
  },
];
