/* -------------------------------------------------------------------------- */
/*                          COSTANTI E DATI AZIENDALI                         */
/* -------------------------------------------------------------------------- */

export const SITE_URL = "https://studiowebdp.it";
export const SITE_NAME = "Studio Web DP";
export const OWNER_NAME = "Stefano De Pasqual";
export const EMAIL = "info@studiowebdp.it";
export const PHONE = "+39 350 5439819";
export const PHONE_RAW = "+393505439819";

export const ADDRESS = {
  streetAddress: "Via Pietro Pagello 17",
  addressLocality: "Belluno",
  addressRegion: "BL",
  postalCode: "32100",
  addressCountry: "IT",
};

export const GEO = {
  latitude: 46.1396,
  longitude: 12.2167,
};

/* -------------------------------------------------------------------------- */
/*                       SCHEMA BASE — Organization + WebSite                 */
/* -------------------------------------------------------------------------- */

export const organizationSchema = {
  "@type": "Organization" as const,
  "@id": `${SITE_URL}/#organization`,
  name: OWNER_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_RAW,
  address: {
    "@type": "PostalAddress",
    ...ADDRESS,
  },
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/images/LogoStudiowebdp.png`,
    contentUrl: `${SITE_URL}/images/LogoStudiowebdp.png`,
    caption: SITE_NAME,
    width: 512,
    height: 512,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_RAW,
      contactType: "customer support",
      availableLanguage: ["Italian", "English"],
      areaServed: "IT",
    },
  ],
  description:
    "Studio Web DP è il tuo punto di riferimento per dare valore e visibilità alla tua attività online. Realizzo soluzioni digitali su misura per professionisti, startup e PMI: siti web moderni, e-commerce, ottimizzazione SEO e manutenzione WordPress.",
};

export const websiteSchema = {
  "@type": "WebSite" as const,
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: OWNER_NAME,
  alternateName: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "it-IT",
};

export const personSchema = {
  "@type": "Person" as const,
  "@id": `${SITE_URL}/#person`,
  name: OWNER_NAME,
  jobTitle: "Web Developer & SEO Specialist",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/LogoStudiowebdp.png`,
  },
  sameAs: [`${SITE_URL}`],
};

/* -------------------------------------------------------------------------- */
/*                    SCHEMA PROFESSIONALSERVICE (potente per AI)             */
/* -------------------------------------------------------------------------- */

export const professionalServiceSchema = {
  "@type": "ProfessionalService" as const,
  "@id": `${SITE_URL}/#service`,
  name: SITE_NAME,
  alternateName: OWNER_NAME,
  image: `${SITE_URL}/images/LogoStudiowebdp.png`,
  url: SITE_URL,
  telephone: PHONE_RAW,
  email: EMAIL,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Bonifico, Carta di Credito, PayPal",
  address: {
    "@type": "PostalAddress",
    ...ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    ...GEO,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Belluno",
    },
    {
      "@type": "AdministrativeArea",
      name: "Provincia di Belluno",
    },
    {
      "@type": "Country",
      name: "Italia",
    },
  ],
  knowsAbout: [
    "WordPress",
    "WooCommerce",
    "E-commerce",
    "SEO",
    "Core Web Vitals",
    "Web Design",
    "Next.js",
    "React",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi Web Professionali",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Realizzazione Siti Web Professionali",
          description:
            "Realizzo siti web professionali in WordPress, ottimizzati per velocità, SEO e conversioni.",
          url: `${SITE_URL}/servizi/siti-web-professionali-a-belluno`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Realizzazione E-commerce",
          description:
            "Creo negozi online professionali con WooCommerce o piattaforme italiane, ottimizzati per vendere.",
          url: `${SITE_URL}/servizi/e-commerce-belluno`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ottimizzazione SEO",
          description:
            "Consulenza SEO tecnica e contenutistica per posizionarti su Google.",
          url: `${SITE_URL}/servizi/ottimizzazione-seo-a-belluno`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Redesign Siti Web Esistenti",
          description:
            "Ristrutturazione completa di siti web datati: velocità, UX, sicurezza e nuove conversioni.",
          url: `${SITE_URL}/servizi/ristrutturo-il-tuo-sito-a-belluno`,
        },
      },
    ],
  },
  founder: { "@id": `${SITE_URL}/#person` },
  employee: { "@id": `${SITE_URL}/#person` },
};

/* -------------------------------------------------------------------------- */
/*                          HELPER PER PAGINE SPECIFICHE                      */
/* -------------------------------------------------------------------------- */

export function buildBaseSchema() {
  return [
    organizationSchema,
    websiteSchema,
    personSchema,
    professionalServiceSchema,
  ];
}

export function buildFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function buildArticleSchema({
  headline,
  description,
  url,
  image,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    image: image ?? `${SITE_URL}/images/LogoStudiowebdp.png`,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "it-IT",
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "Belluno, Italia",
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    inLanguage: "it-IT",
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Combina più schemi in un unico @graph (raccomandato da Google).
 * Se passi schemi che hanno già "@context", lo rimuove per evitare duplicati.
 */
export function buildGraph(schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((s) => {
      const { "@context": _, ...rest } = s as Record<string, unknown> & {
        "@context"?: string;
      };
      return rest;
    }),
  };
}