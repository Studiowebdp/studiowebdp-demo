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
  title: "Ottimizzazione SEO Prezzi | Studio Web DP",
  description:
    "Piani SEO WordPress: visibilità locale, crescita PMI, e-commerce e AI Search. Scopri i prezzi trasparenti dei miei piani di ottimizzazione SEO.",
  alternates: {
    canonical: "/listini/ottimizzazione-seo-prezzi",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title: "Ottimizzazione SEO Prezzi | Studio Web DP",
    description:
      "Piani SEO WordPress: visibilità locale, crescita PMI, e-commerce e AI Search. Scopri i prezzi trasparenti dei miei piani di ottimizzazione SEO.",
    url: "https://studiowebdp.it/listini/ottimizzazione-seo-prezzi",
    siteName: "Stefano De Pasqual",
  },
};

/* -------------------------------------------------------------------------- */
/*                            SCHEMA OFFERCATALOG                             */
/* -------------------------------------------------------------------------- */

const PAGE_URL = `${SITE_URL}/listini/ottimizzazione-seo-prezzi`;

const offerCatalogSchema = {
  "@type": "OfferCatalog",
  name: "Piani di Ottimizzazione SEO",
  description:
    "4 piani di posizionamento SEO per siti WordPress: dalla visibilità locale per professionisti, alla crescita per PMI, all'ottimizzazione per e-commerce, fino al dominio delle ricerche con AI.",
  url: PAGE_URL,
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Local SEO",
      description:
        "Per professionisti e attività locali che desiderano dominare le ricerche geolocalizzate e farsi trovare su Google Maps.",
      price: "199",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#local-seo`,
      itemOffered: {
        "@type": "Service",
        name: "Local SEO",
        category: "SEO",
      },
    },
    {
      "@type": "Offer",
      name: "Crescita & PMI",
      description:
        "Per aziende e studi professionali che vogliono scalare i risultati di Google con continuità e superare i competitor.",
      price: "299",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "299",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#crescita-pmi`,
      itemOffered: {
        "@type": "Service",
        name: "SEO per PMI",
        category: "SEO",
      },
    },
    {
      "@type": "Offer",
      name: "E-Commerce PRO",
      description:
        "Per negozi online WooCommerce che necessitano di posizionare categorie e schede prodotto per aumentare le vendite.",
      price: "599",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "599",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#ecommerce-pro`,
      itemOffered: {
        "@type": "Service",
        name: "SEO per E-commerce",
        category: "SEO",
      },
    },
    {
      "@type": "Offer",
      name: "AI Search",
      description:
        "Per brand strutturati che vogliono dominare la SERP di Google ed essere citati come fonte autorevole dai motori di intelligenza artificiale.",
      price: "999",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "999",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#ai-search`,
      itemOffered: {
        "@type": "Service",
        name: "SEO per AI Search",
        category: "SEO",
      },
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

export default function SeoPrezziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline: "Ottimizzazione SEO Prezzi | Studio Web DP",
      description:
        "Piani SEO WordPress: visibilità locale, crescita PMI, e-commerce e AI Search. Scopri i prezzi trasparenti dei miei piani di ottimizzazione SEO.",
      url: PAGE_URL,
    }),
    offerCatalogSchema,
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Listini", url: `${SITE_URL}/listini` },
      { name: "Ottimizzazione SEO Prezzi", url: PAGE_URL },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}