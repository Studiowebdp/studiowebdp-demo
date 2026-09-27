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

export const metadata: Metadata = {
  title: "Realizzo Siti Web Professionali a Belluno | Studio Web DP",
  description:
    "Realizzo siti web professionali a Belluno. Non una semplice vetrina, ma uno strumento di business per la tua attività. WordPress, velocità e SEO.",
  alternates: {
    canonical: "/servizi/siti-web-professionali-a-belluno",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title: "Realizzo Siti Web Professionali a Belluno",
    description:
      "Realizzo siti web professionali a Belluno. Non una semplice vetrina, ma uno strumento di business.",
    url: "https://studiowebdp.it/servizi/siti-web-professionali-a-belluno",
    siteName: "Stefano De Pasqual",
  },
};

/* FAQ in formato "stringa pura" — per lo schema JSON-LD */
const faqSchemaData = [
  {
    question: "La distanza geografica è un ostacolo?",
    answer:
      "Assolutamente no. Il lavoro digitale abbatte i confini. Gestisco progetti in tutta Italia utilizzando strumenti di video-call e gestione task che rendono la distanza impercettibile.",
  },
  {
    question: "Come comunicheremo durante il lavoro?",
    answer:
      "Preferisco la chiarezza: avrai un canale di comunicazione diretto con me (WhatsApp o Email) e avremo dei check programmati tramite video-call.",
  },
  {
    question: "Quanto tempo occorre per realizzare un sito?",
    answer:
      "Per un sito professionale o una landing page, servono solitamente 3-5 settimane. Per siti complessi, le tempistiche si attestano tra le 6 e le 12 settimane.",
  },
  {
    question: "Il sito sarà di mia proprietà?",
    answer:
      "Certamente. La proprietà intellettuale, i testi, le immagini e tutti i contenuti del sito sono tuoi al 100%.",
  },
  {
    question: "Ci sono costi fissi dopo la consegna?",
    answer:
      "I costi vivi sono il dominio e l'hosting. Il servizio di manutenzione è incluso per il primo anno.",
  },
  {
    question: "Offrite servizi di posizionamento SEO?",
    answer:
      "Sì. Il mio lavoro si concentra sui Core Web Vitals e sugli standard E-E-A-T per costruire una solida base tecnica ottimizzata per i motori di ricerca.",
  },
];

const PAGE_URL = `${SITE_URL}/servizi/siti-web-professionali-a-belluno`;

export default function SitiWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline: "Realizzo Siti Web Professionali a Belluno",
      description:
        "Realizzo siti web professionali a Belluno. Non una semplice vetrina, ma uno strumento di business.",
      url: PAGE_URL,
    }),
    buildServiceSchema({
      name: "Realizzazione Siti Web Professionali",
      description:
        "Realizzazione di siti web professionali in WordPress, ottimizzati per velocità, SEO e conversioni.",
      url: PAGE_URL,
      serviceType: "Web Design & Development",
    }),
    buildFaqSchema(faqSchemaData),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Servizi", url: `${SITE_URL}/servizi` },
      {
        name: "Siti Web Professionali",
        url: PAGE_URL,
      },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}