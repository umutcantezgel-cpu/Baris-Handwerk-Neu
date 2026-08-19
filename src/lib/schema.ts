/**
 * Type-safe Schema.org Linked Data & Knowledge Graph builder.
 * Uses interconnected canonical @id URIs and standard @graph notation.
 */

export const SITE_URL = 'https://www.batherm.de';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#local-business`;
export const LOGO_ID = `${SITE_URL}/#logo`;

export interface SchemaNode {
  '@type'?: string | string[];
  '@id'?: string;
  [key: string]: unknown;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JobItem {
  title: string;
  description: string;
  datePosted?: string;
  employmentType?: string;
  location?: string;
  baseSalary?: {
    currency: string;
    minValue?: number;
    maxValue?: number;
    unitText?: string;
  };
}

export interface HowToStepItem {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

/**
 * Wraps individual schema nodes into a unified Schema.org @graph container.
 */
export function buildGraph(nodes: (SchemaNode | null | undefined)[]): {
  '@context': string;
  '@graph': SchemaNode[];
} {
  const filtered = nodes.filter((node): node is SchemaNode => Boolean(node));
  return {
    '@context': 'https://schema.org',
    '@graph': filtered,
  };
}

/**
 * Builds the canonical Organization entity.
 */
export function buildOrganizationNode(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Batherm Haustechnik',
    legalName: 'Baris Aydin Batherm Haustechnik',
    alternateName: 'Baris Aydin Batherm Haustechnik',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: `${SITE_URL}/images/batherm-logo.png`,
      contentUrl: `${SITE_URL}/images/batherm-logo.png`,
      caption: 'Batherm Haustechnik Logo',
    },
    image: `${SITE_URL}/images/batherm-logo.png`,
    founder: { '@id': FOUNDER_ID },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49 172 9475061',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['German', 'Turkish', 'English'],
    },
    sameAs: ['https://www.instagram.com/bathermhaustechnik'],
  };
}

/**
 * Builds the canonical WebSite entity with SearchAction.
 */
export function buildWebSiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Batherm Haustechnik',
    description:
      'Ihr Meisterbetrieb für Sanitär, Heizung, Wärmepumpen und Klimatechnik in Wetzlar und Mittelhessen.',
    publisher: { '@id': ORG_ID },
    inLanguage: 'de-DE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Builds the canonical Founder / Person entity.
 */
export function buildFounderNode(): SchemaNode {
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Baris Aydin',
    givenName: 'Baris',
    familyName: 'Aydin',
    jobTitle: 'Geschäftsführer & Handwerksmeister für SHK',
    worksFor: { '@id': ORG_ID },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Handwerkskammer Wiesbaden',
    },
    knowsAbout: [
      'Sanitärtechnik',
      'Heizungstechnik',
      'Wärmepumpen',
      'Klimatechnik',
      'Badsanierung',
      'Hydraulischer Abgleich',
      'Trinkwasserhygiene',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Meisterbrief',
        name: 'Meister im Handwerk – Sanitär-, Heizungs- und Klimatechnik',
      },
    ],
  };
}

/**
 * Builds the canonical LocalBusiness entity.
 */
export function buildLocalBusinessNode(): SchemaNode {
  return {
    '@type': ['Plumber', 'HVACBusiness', 'LocalBusiness'],
    '@id': LOCAL_BUSINESS_ID,
    name: 'Batherm Haustechnik',
    alternateName: 'Baris Aydin Batherm Haustechnik',
    legalName: 'Baris Aydin Batherm Haustechnik',
    description:
      'Zertifizierter Meisterbetrieb für Sanitär, Heizung, Wärmepumpen und Klimatechnik in Wetzlar und Region. Fachgerechte Installation, Modernisierung und 24h Notdienst.',
    url: SITE_URL,
    telephone: '+49 172 9475061',
    email: 'info@batherm.de',
    image: `${SITE_URL}/images/batherm-logo.png`,
    parentOrganization: { '@id': ORG_ID },
    founder: { '@id': FOUNDER_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Linsenbergstrasse 9',
      addressLocality: 'Wetzlar',
      addressRegion: 'Hessen',
      postalCode: '35586',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.5567,
      longitude: 8.5022,
    },
    hasMap: 'https://www.google.com/maps?cid=batherm+haustechnik+wetzlar',
    areaServed: [
      { '@type': 'City', name: 'Wetzlar', sameAs: 'https://de.wikipedia.org/wiki/Wetzlar' },
      { '@type': 'City', name: 'Gießen', sameAs: 'https://de.wikipedia.org/wiki/Gie%C3%9Fen' },
      { '@type': 'City', name: 'Marburg', sameAs: 'https://de.wikipedia.org/wiki/Marburg' },
      { '@type': 'City', name: 'Limburg an der Lahn' },
      { '@type': 'City', name: 'Bad Nauheim' },
      { '@type': 'City', name: 'Friedberg (Hessen)' },
      { '@type': 'City', name: 'Butzbach' },
      { '@type': 'City', name: 'Herborn' },
      { '@type': 'City', name: 'Dillenburg' },
      { '@type': 'City', name: 'Haiger' },
      { '@type': 'City', name: 'Braunfels' },
      { '@type': 'City', name: 'Solms' },
      { '@type': 'City', name: 'Lahnau' },
      { '@type': 'City', name: 'Aßlar' },
      { '@type': 'City', name: 'Hüttenberg' },
      { '@type': 'City', name: 'Linden' },
      { '@type': 'City', name: 'Pohlheim' },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Überweisung, EC-Karte, Bar',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: ['https://www.instagram.com/bathermhaustechnik'],
  };
}

/**
 * Builds the complete root Knowledge Graph array.
 */
export function buildRootGraph(): { '@context': string; '@graph': SchemaNode[] } {
  return buildGraph([
    buildOrganizationNode(),
    buildWebSiteNode(),
    buildFounderNode(),
    buildLocalBusinessNode(),
  ]);
}

/**
 * Builds a BreadcrumbList entity.
 */
export function buildBreadcrumbNode(
  items: BreadcrumbItem[],
  canonicalUrl: string
): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => {
      const isAbsolute = item.path.startsWith('http');
      const itemUrl = isAbsolute
        ? item.path
        : `${SITE_URL}${item.path === '/' ? '' : item.path}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

/**
 * Builds a WebPage entity.
 */
export function buildWebPageNode(options: {
  url: string;
  name: string;
  description: string;
  inLanguage?: string;
  breadcrumbItems?: BreadcrumbItem[];
}): SchemaNode {
  return {
    '@type': 'WebPage',
    '@id': `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    inLanguage: options.inLanguage || 'de-DE',
    isPartOf: { '@id': WEBSITE_ID },
    breadcrumb: options.breadcrumbItems
      ? { '@id': `${options.url}#breadcrumb` }
      : undefined,
  };
}

/**
 * Builds an AboutPage entity.
 */
export function buildAboutPageNode(options: {
  url: string;
  name: string;
  description: string;
}): SchemaNode {
  return {
    '@type': 'AboutPage',
    '@id': `${options.url}#aboutpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: { '@id': ORG_ID },
  };
}

/**
 * Builds a ContactPage entity.
 */
export function buildContactPageNode(options: {
  url: string;
  name: string;
  description: string;
}): SchemaNode {
  return {
    '@type': 'ContactPage',
    '@id': `${options.url}#contactpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': LOCAL_BUSINESS_ID },
  };
}

/**
 * Builds a Service entity.
 */
export function buildServiceNode(options: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  areaServedCity?: string;
  offers?: { name: string; description?: string }[];
  image?: string;
}): SchemaNode {
  return {
    '@type': 'Service',
    '@id': `${options.url}#service`,
    name: options.name,
    serviceType: options.serviceType,
    description: options.description,
    url: options.url,
    provider: { '@id': LOCAL_BUSINESS_ID },
    areaServed: options.areaServedCity
      ? { '@type': 'City', name: options.areaServedCity }
      : {
          '@type': 'AdministrativeArea',
          name: 'Mittelhessen (Wetzlar, Gießen, Marburg & Lahn-Dill-Kreis)',
        },
    image: options.image
      ? (options.image.startsWith('http') ? options.image : `${SITE_URL}${options.image}`)
      : undefined,
    hasOfferCatalog: options.offers && options.offers.length > 0
      ? {
          '@type': 'OfferCatalog',
          name: `${options.name} Leistungen`,
          itemListElement: options.offers.map((offer) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offer.name,
              description: offer.description,
            },
          })),
        }
      : undefined,
  };
}

/**
 * Builds a localized LocalBusiness/ProfessionalService slice for a specific city.
 */
export function buildCityLocalBusinessNode(options: {
  cityName: string;
  citySlug: string;
  distanceKm: number;
  description: string;
}): SchemaNode {
  const url = `${SITE_URL}/standorte/${options.citySlug}`;
  return {
    '@type': ['Plumber', 'HVACBusiness', 'LocalBusiness'],
    '@id': `${url}#localbusiness`,
    name: `Batherm Haustechnik – ${options.cityName}`,
    description: options.description,
    url,
    telephone: '+49 172 9475061',
    email: 'info@batherm.de',
    parentOrganization: { '@id': ORG_ID },
    areaServed: {
      '@type': 'City',
      name: options.cityName,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Linsenbergstrasse 9',
      addressLocality: 'Wetzlar',
      addressRegion: 'Hessen',
      postalCode: '35586',
      addressCountry: 'DE',
    },
  };
}

/**
 * Builds an Article / BlogPosting entity.
 */
export function buildArticleNode(options: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}): SchemaNode {
  return {
    '@type': 'BlogPosting',
    '@id': `${options.url}#article`,
    headline: options.headline,
    description: options.description,
    url: options.url,
    mainEntityOfPage: options.url,
    datePublished: options.datePublished || '2024-01-15T08:00:00+01:00',
    dateModified: options.dateModified || options.datePublished || '2024-03-20T10:00:00+01:00',
    inLanguage: 'de-DE',
    author: { '@id': FOUNDER_ID },
    publisher: { '@id': ORG_ID },
    image: options.image
      ? (options.image.startsWith('http') ? options.image : `${SITE_URL}${options.image}`)
      : `${SITE_URL}/images/batherm-logo.png`,
    keywords: options.keywords?.join(', '),
  };
}

/**
 * Builds a HowTo entity.
 */
export function buildHowToNode(options: {
  name: string;
  description: string;
  url: string;
  steps: HowToStepItem[];
  totalTime?: string;
}): SchemaNode {
  return {
    '@type': 'HowTo',
    '@id': `${options.url}#howto`,
    name: options.name,
    description: options.description,
    totalTime: options.totalTime || 'PT30M',
    step: options.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: step.text,
        },
      ],
    })),
  };
}

/**
 * Builds a FAQPage entity.
 */
export function buildFaqNode(faqs: FaqItem[], url: string): SchemaNode {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Builds JobPosting entities for career opportunities.
 */
export function buildJobPostingNode(job: JobItem, url: string): SchemaNode {
  const jobSlug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    '@type': 'JobPosting',
    '@id': `${url}#job-${jobSlug}`,
    title: job.title,
    description: job.description,
    datePosted: job.datePosted || '2024-01-01',
    validThrough: '2026-12-31T23:59:59+01:00',
    employmentType: job.employmentType || 'FULL_TIME',
    hiringOrganization: { '@id': ORG_ID },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Linsenbergstrasse 9',
        addressLocality: 'Wetzlar',
        addressRegion: 'Hessen',
        postalCode: '35586',
        addressCountry: 'DE',
      },
    },
    directApply: true,
  };
}

/**
 * Builds a CreativeWork / Project entity for Case Studies.
 */
export function buildProjectNode(options: {
  name: string;
  description: string;
  url: string;
  locationCreated?: string;
  image?: string;
}): SchemaNode {
  return {
    '@type': 'CreativeWork',
    '@id': `${options.url}#project`,
    name: options.name,
    description: options.description,
    url: options.url,
    creator: { '@id': ORG_ID },
    locationCreated: options.locationCreated
      ? { '@type': 'Place', name: options.locationCreated }
      : undefined,
    image: options.image
      ? (options.image.startsWith('http') ? options.image : `${SITE_URL}${options.image}`)
      : undefined,
  };
}
