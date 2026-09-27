import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildGraph,
  SITE_URL,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Manutenzione Siti WordPress: Piani e Assistenza | Studio Web DP",
  description:
    "Manutenzione siti WordPress su misura: backup, sicurezza e supporto continuo. Scopri i 4 piani ideali per la tua attività!",
  alternates: {
    canonical: "/listini/piani-manutenzione-wordpress",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title:
      "Manutenzione Siti WordPress: Piani e Assistenza | Studio Web DP",
    description:
      "Manutenzione siti WordPress su misura: backup, sicurezza e supporto continuo. Scopri i 4 piani ideali per la tua attività!",
    url: "https://studiowebdp.it/listini/piani-manutenzione-wordpress",
    siteName: "Stefano De Pasqual",
  },
};

const PAGE_URL = `${SITE_URL}/listini/piani-manutenzione-wordpress`;

const pianiSchema = {
  "@type": "OfferCatalog",
  name: "Piani di Manutenzione WordPress",
  description:
    "4 livelli di manutenzione continua per siti WordPress: dalla protezione essenziale con backup cloud fino al supporto proattivo con ore di modifica incluse, ottimizzazione velocità e predisposizione per i motori AI.",
  url: PAGE_URL,
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Protezione Base",
      description:
        "Per attività e professionisti che cercano una tutela tecnica essenziale.",
      price: "25",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "25",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: `${PAGE_URL}#protezione-base`,
      itemOffered: { "@type": "Service", name: "Manutenzione WordPress Base" },
    },
    {
      "@type": "Offer",
      name: "Sicurezza Completa",
      description:
        "Per siti vetrina e attività locali che desiderano sicurezza attiva h24.",
      price: "50",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "50",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: `${PAGE_URL}#sicurezza-completa`,
      itemOffered: { "@type": "Service", name: "Manutenzione WordPress Sicurezza" },
    },
    {
      "@type": "Offer",
      name: "Prestazioni & Supporto",
      description:
        "Per aziende e professionisti che necessitano di un sito veloce e leggero.",
      price: "99",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: `${PAGE_URL}#prestazioni-supporto`,
      itemOffered: { "@type": "Service", name: "Manutenzione WordPress Supporto" },
    },
    {
      "@type": "Offer",
      name: "Crescita & Motori AI",
      description:
        "Per brand e aziende strutturate che vogliono scalare su Google e sui motori AI.",
      price: "199",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "EUR",
        unitCode: "MON",
        billingIncrement: 1,
      },
      url: `${PAGE_URL}#crescita-motori-ai`,
      itemOffered: { "@type": "Service", name: "Manutenzione WordPress AI" },
    },
  ],
};

const spotSchema = {
  "@type": "OfferCatalog",
  name: "Interventi Spot WordPress",
  description:
    "Interventi tecnici singoli per WordPress: pronto soccorso SOS, bonifica malware, pacchetti di ore.",
  url: PAGE_URL,
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Pronto Soccorso SOS",
      description: "Intervento tempestivo per sito down o errore critico.",
      price: "200",
      priceCurrency: "EUR",
      url: `${PAGE_URL}#sos`,
      itemOffered: { "@type": "Service", name: "Pronto Soccorso WordPress" },
    },
    {
      "@type": "Offer",
      name: "Bonifica Malware",
      description: "Pulizia radicale da virus e hardening completo.",
      price: "200",
      priceCurrency: "EUR",
      url: `${PAGE_URL}#bonifica-malware`,
      itemOffered: { "@type": "Service", name: "Bonifica Malware WordPress" },
    },
    {
      "@type": "Offer",
      name: "Pacchetto di 5 Ore",
      description: "Monte ore a consumo valido 12 mesi.",
      price: "300",
      priceCurrency: "EUR",
      url: `${PAGE_URL}#pacchetto-5-ore`,
      itemOffered: { "@type": "Service", name: "Pacchetto 5 ore sviluppo WordPress" },
    },
    {
      "@type": "Offer",
      name: "Ore Singole per i Tuoi Progetti",
      description: "Massima libertà per interventi tecnici e modifiche.",
      price: "70",
      priceCurrency: "EUR",
      url: `${PAGE_URL}#ore-singole`,
      itemOffered: { "@type": "Service", name: "Ore di sviluppo WordPress" },
    },
  ],
};

export default function ManutenzioneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline:
        "Manutenzione Siti WordPress: Piani e Assistenza | Studio Web DP",
      description:
        "Manutenzione siti WordPress su misura: backup, sicurezza e supporto continuo. Scopri i 4 piani ideali per la tua attività!",
      url: PAGE_URL,
    }),
    pianiSchema,
    spotSchema,
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Listini", url: `${SITE_URL}/listini` },
      { name: "Piani Manutenzione WordPress", url: PAGE_URL },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}