import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import {
  buildArticleSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildGraph,
  SITE_URL,
} from "@/lib/schema";

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Ristrutturo il tuo sito a Belluno | Studio Web DP",
  description:
    "Ristrutturo il tuo sito a Belluno. Rilancia la tua presenza online con una piattaforma moderna, ottimizzata.",
  alternates: {
    canonical: "/servizi/ristrutturo-il-tuo-sito-a-belluno",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title: "Ristrutturo il tuo sito a Belluno",
    description:
      "Ristrutturo il tuo sito a Belluno. Rilancia la tua presenza online con una piattaforma moderna, ottimizzata.",
    url: "https://studiowebdp.it/servizi/ristrutturo-il-tuo-sito-a-belluno",
    siteName: "Stefano De Pasqual",
    images: ["/images/visite.webp"],
  },
};

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

const PAGE_URL = `${SITE_URL}/servizi/ristrutturo-il-tuo-sito-a-belluno`;

export default function RedesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline: "Ristrutturo il tuo sito a Belluno",
      description:
        "Ristrutturo il tuo sito a Belluno. Rilancia la tua presenza online con una piattaforma moderna, ottimizzata per velocità, UX e conversioni.",
      url: PAGE_URL,
      image: `${SITE_URL}/images/visite.webp`,
    }),
    buildServiceSchema({
      name: "Redesign Siti Web Esistenti",
      description:
        "Ristrutturazione completa di siti web datati: velocità, UX, sicurezza, migrazione SEO e nuove conversioni.",
      url: PAGE_URL,
      serviceType: "Website Redesign",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Servizi", url: `${SITE_URL}/servizi` },
      { name: "Redesign Siti Web", url: PAGE_URL },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}