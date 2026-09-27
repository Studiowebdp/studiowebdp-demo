import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildGraph,
  SITE_URL,
} from "@/lib/schema";

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Listino Prezzi Siti Web e E-Commerce | Studio Web DP",
  description:
    "Listino Prezzi Siti Web e E-Commerce, costi chiari. Per garantirti la massima trasparenza e un'offerta su misura.",
  alternates: {
    canonical: "/listini/prezzi-siti-web-e-ecommerce",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title: "Listino Prezzi Siti Web e E-Commerce",
    description:
      "Listino Prezzi Siti Web e E-Commerce, costi chiari. Per garantirti la massima trasparenza e un'offerta su misura.",
    url: "https://studiowebdp.it/listini/prezzi-siti-web-e-ecommerce",
    siteName: "Stefano De Pasqual",
  },
};

/* -------------------------------------------------------------------------- */
/*                       SCHEMA OFFER + AGGREGATE (per AI)                    */
/* -------------------------------------------------------------------------- */

const PAGE_URL = `${SITE_URL}/listini/prezzi-siti-web-e-ecommerce`;

const offerCatalogSchema = {
  "@type": "OfferCatalog",
  name: "Listino Prezzi Siti Web & E-Commerce",
  description:
    "Listino prezzi trasparente per la realizzazione di siti web, landing page ed e-commerce. I prezzi indicati sono da considerarsi come punto di partenza; il costo finale viene definito tramite preventivo personalizzato dopo una consulenza gratuita.",
  url: PAGE_URL,
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Landing Page (formula Poco Costo)",
      description:
        "Pagina singola web professionale con layout standard e testi generati automaticamente tramite AI. Consegnata a scatola chiusa, senza modifiche o revisioni incluse.",
      price: "200",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#poco-costo`,
      itemOffered: {
        "@type": "Service",
        name: "Landing Page Poco Costo",
        category: "Web Design",
      },
    },
    {
      "@type": "Offer",
      name: "Sito Web (formula Poco Costo)",
      description:
        "Sito web multi-pagina in WordPress con template standard e testi generati tramite AI. Consegnato a scatola chiusa, senza modifiche o revisioni incluse.",
      price: "800",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#poco-costo`,
      itemOffered: {
        "@type": "Service",
        name: "Sito Web Poco Costo",
        category: "Web Design",
      },
    },
    {
      "@type": "Offer",
      name: "Landing Page Professionale",
      description:
        "Landing page con design strategico e personalizzato, copywriting persuasivo su misura, ottimizzazione mobile-first, modulo di contatto e SEO base.",
      price: "800",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#landing-page`,
      itemOffered: {
        "@type": "Service",
        name: "Landing Page Professionale",
        category: "Web Design",
      },
    },
    {
      "@type": "Offer",
      name: "Sito Web Professionale",
      description:
        "Sito web multi-pagina professionale con design unico rappresentativo del brand, navigazione ottimale su mobile, tablet e desktop, SEO base e integrazione social.",
      price: "1600",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "1600",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#sito-web`,
      itemOffered: {
        "@type": "Service",
        name: "Sito Web Professionale",
        category: "Web Design",
      },
    },
    {
      "@type": "Offer",
      name: "E-commerce Professionale",
      description:
        "Piattaforma di vendita online completa con gestione catalogo prodotti, pagamenti sicuri integrati, configurazione spedizioni e formazione per gestione autonoma.",
      price: "3000",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "3000",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#e-commerce`,
      itemOffered: {
        "@type": "Service",
        name: "E-commerce Professionale",
        category: "E-commerce Development",
      },
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

export default function ListinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline: "Listino Prezzi Siti Web e E-Commerce",
      description:
        "Listino Prezzi Siti Web e E-Commerce, costi chiari. Per garantirti la massima trasparenza e un'offerta su misura.",
      url: PAGE_URL,
    }),
    offerCatalogSchema,
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Listini", url: `${SITE_URL}/listini` },
      { name: "Prezzi Siti Web & E-Commerce", url: PAGE_URL },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}