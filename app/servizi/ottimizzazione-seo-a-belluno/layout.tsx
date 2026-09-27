import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import {
  buildArticleSchema,
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildGraph,
  SITE_URL,
} from "@/lib/schema";

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Ottimizzazione SEO a Belluno | Studio Web DP",
  description:
    "Ottimizzazione SEO a Belluno per siti web ed e-commerce. Avere un sito web veloce è la base, ma farsi trovare è la chiave per il successo.",
  alternates: {
    canonical: "/servizi/ottimizzazione-seo-a-belluno",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title: "Ottimizzazione SEO a Belluno",
    description:
      "Ottimizzazione SEO a Belluno per siti web ed e-commerce. Avere un sito web veloce è la base, ma farsi trovare è la chiave per il successo.",
    url: "https://studiowebdp.it/servizi/ottimizzazione-seo-a-belluno",
    siteName: "Stefano De Pasqual",
  },
};

/* -------------------------------------------------------------------------- */
/*                       FAQ PER SCHEMA JSON-LD (testo puro)                  */
/* -------------------------------------------------------------------------- */

const PAGE_URL = `${SITE_URL}/servizi/ottimizzazione-seo-a-belluno`;

const faqSchemaData = [
  {
    question: "Quanto costa l'ottimizzazione SEO?",
    answer:
      "Il costo di una consulenza SEO dipende dalla complessità del progetto, dal settore di mercato e dagli obiettivi. In genere si parte da un audit tecnico iniziale e poi si definisce un piano di lavoro personalizzato. Contattami per un preventivo gratuito basato sul tuo caso specifico.",
  },
  {
    question: "Quanto tempo serve per vedere i risultati SEO?",
    answer:
      "I primi risultati tangibili dell'ottimizzazione SEO si vedono solitamente in 3-6 mesi. Per settori molto competitivi possono servire 6-12 mesi. La SEO è un investimento a lungo termine, non una soluzione immediata.",
  },
  {
    question: "Qual è la differenza tra SEO e pubblicità a pagamento?",
    answer:
      "La pubblicità a pagamento (Google Ads) porta traffico immediato ma smette di funzionare quando smetti di pagare. La SEO costruisce un traffico organico costante e duraturo nel tempo, che continua a lavorare per te anche quando non investi attivamente.",
  },
  {
    question: "Vi occupate anche di SEO locale a Belluno?",
    answer:
      "Sì, mi specializzo in SEO locale per aziende e professionisti che operano su Belluno e provincia. Ottimizzo la scheda Google Business Profile, la geolocalizzazione e i contenuti per intercettare chi cerca i tuoi servizi nella tua zona.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline: "Ottimizzazione SEO a Belluno",
      description:
        "Ottimizzazione SEO a Belluno per siti web ed e-commerce. Avere un sito web veloce è la base, ma farsi trovare è la chiave per il successo.",
      url: PAGE_URL,
    }),
    buildServiceSchema({
      name: "Ottimizzazione SEO",
      description:
        "Consulenza SEO tecnica, contenutistica e locale per siti web ed e-commerce. Ottimizzazione on-page, off-page, Core Web Vitals e posizionamento su Google.",
      url: PAGE_URL,
      serviceType: "SEO Optimization",
    }),
    buildFaqSchema(faqSchemaData),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Servizi", url: `${SITE_URL}/servizi` },
      { name: "Ottimizzazione SEO", url: PAGE_URL },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}