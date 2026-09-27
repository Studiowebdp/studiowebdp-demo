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
  title: "Realizzo e-commerce professionali a Belluno | Studio Web DP",
  description:
    "Consulenza E-commerce. Sviluppo soluzioni performanti con piattaforma italiana o WooCommerce, garantendo scalabilità e crescita.",
  alternates: {
    canonical: "/servizi/e-commerce-belluno",
  },
  openGraph: {
    locale: "it_IT",
    type: "article",
    title: "Realizzo e-commerce professionali a Belluno",
    description:
      "Consulenza E-commerce. Sviluppo soluzioni performanti con piattaforma italiana o WooCommerce, garantendo scalabilità e crescita.",
    url: "https://studiowebdp.it/servizi/e-commerce-belluno",
    siteName: "Stefano De Pasqual",
  },
};

/* -------------------------------------------------------------------------- */
/*                       FAQ PER SCHEMA JSON-LD (testo puro)                  */
/* -------------------------------------------------------------------------- */

const PAGE_URL = `${SITE_URL}/servizi/e-commerce-belluno`;

const faqSchemaData = [
  {
    question: "La distanza geografica è un ostacolo?",
    answer:
      "Assolutamente no. Gestisco progetti e-commerce in tutta Italia utilizzando strumenti di video-call e gestione task che rendono la distanza impercettibile, dalla definizione della strategia fino al lancio.",
  },
  {
    question: "Come comunicheremo durante il lavoro?",
    answer:
      "Preferisco la chiarezza: avrai un canale di comunicazione diretto con me (WhatsApp o Email) e avremo dei check programmati tramite video-call per seguire ogni fase dello sviluppo.",
  },
  {
    question: "Posso seguire lo sviluppo del mio negozio?",
    answer:
      "Certo. Ti fornirò un link di anteprima per testare il negozio mentre lo costruisco, così potrai verificare in tempo reale catalogo, grafica e funzionalità.",
  },
  {
    question: "Quale piattaforma è più adatta al mio business?",
    answer:
      "Dipende dai tuoi obiettivi. Valuto insieme a te se una piattaforma italiana proprietaria, WooCommerce, Shopify o PrestaShop è la scelta più vantaggiosa in base a scalabilità, budget e integrazioni necessarie, senza spingerti verso la soluzione più comoda per me da implementare.",
  },
  {
    question: "Quanto tempo occorre per realizzare un e-commerce?",
    answer:
      "Per un negozio online con catalogo standard, servono solitamente 3-5 mesi. Per progetti più complessi, con integrazioni gestionali o cataloghi estesi, le tempistiche si attestano tra i 6 e i 12 mesi o oltre.",
  },
  {
    question: "Il mio negozio sarà ottimizzato per smartphone?",
    answer:
      "Assolutamente sì. La maggior parte degli acquisti online avviene da mobile: progetto il checkout e ogni scheda prodotto con approccio mobile-first per garantire un'esperienza d'acquisto fluida su ogni dispositivo.",
  },
  {
    question: "Il negozio sarà di mia proprietà?",
    answer:
      "Certamente. La proprietà intellettuale, il catalogo prodotti, i testi, le immagini e tutti i contenuti sono tuoi al 100%. Per quanto riguarda l'infrastruttura (l'hosting), offro una gestione professionale su piani ad alte prestazioni, pensati per garantire velocità di caricamento e stabilità anche nei picchi di traffico. Se si sceglie la gestione con la piattaforma Italiana con cui collaboro l'hosting non potrà mai essere di proprietà dato che il costo è ad abbonamento. Queste configurazioni vengono concordate in fase di contratto.",
  },
  {
    question: "Ci sono costi fissi dopo la consegna?",
    answer:
      "I costi vivi sono il dominio, l'hosting e le eventuali commissioni dei gateway di pagamento. Il servizio di manutenzione (aggiornamenti di sicurezza, backup, plugin) è incluso per il primo anno; dopo, potrai decidere se rinnovarlo con me o gestire la parte tecnica autonomamente.",
  },
  {
    question: "Ho già un negozio online che non vende, mi aiuti?",
    answer:
      "Certamente. Offro un servizio di analisi e restyling per e-commerce esistenti con problemi di conversione, velocità o abbandono del carrello, individuando i colli di bottiglia e intervenendo in modo mirato.",
  },
  {
    question: "Offrite anche servizi di posizionamento SEO per l'e-commerce?",
    answer:
      "Sì, con un approccio specifico per la vendita online. Ottimizzo schede prodotto e categorie per intercettare gli utenti pronti all'acquisto, curando i Core Web Vitals (velocità, stabilità, interattività) che Google richiede per premiare gli e-commerce in classifica. Progetto inoltre l'architettura del catalogo seguendo gli standard E-E-A-T (Esperienza, Competenza, Autorevolezza e Affidabilità), fondamentali per costruire fiducia sia con gli utenti che con i motori di ricerca basati sull'IA.",
  },
  {
    question: "Come riceverò la fattura?",
    answer:
      "La fattura viene emessa automaticamente per ogni transazione e inviata al tuo cassetto fiscale o tramite il tuo intermediario di fatturazione elettronica.",
  },
  {
    question: "Chi si occupa del caricamento dei prodotti?",
    answer:
      "È una collaborazione. Io mi occupo di ottimizzare le schede prodotto in ottica SEO e di formattarle graficamente. Per quanto riguarda i contenuti specifici (foto originali, descrizioni di dettaglio), dovranno essere forniti dal cliente il quale si assume anche la responsabilità di quanto pubblicato. È possibile anche richiedere la completa realizzazione, anche inserendo i prodotti da concordare in fase di preventivo.",
  },
  {
    question: "Cosa succede se il design proposto non mi convince?",
    answer:
      "Il mio obiettivo è la tua piena soddisfazione. Prima di procedere allo sviluppo, definiamo insieme uno stile grafico chiaro e coerente col tuo brand. Se la bozza iniziale non ti convince, analizziamo i motivi e apportiamo le modifiche necessarie: lavoriamo finché non avrai tra le mani un negozio che ti rappresenta al 100%.",
  },
  {
    question: "Il negozio si può integrare con il mio gestionale?",
    answer:
      "Sì, valuto caso per caso le integrazioni possibili con sistemi di magazzino, gestionali, corrieri per la spedizione e strumenti di marketing (come Mailchimp o CRM), per farti risparmiare tempo nella gestione quotidiana.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageSchema = buildGraph([
    buildArticleSchema({
      headline: "Realizzo e-commerce professionali a Belluno",
      description:
        "Consulenza E-commerce. Sviluppo soluzioni performanti con piattaforma italiana o WooCommerce, garantendo scalabilità e crescita.",
      url: PAGE_URL,
    }),
    buildServiceSchema({
      name: "Realizzazione E-commerce Professionali",
      description:
        "Sviluppo di negozi online performanti con piattaforma italiana o WooCommerce, ottimizzati per conversioni, scalabilità e crescita.",
      url: PAGE_URL,
      serviceType: "E-commerce Development",
    }),
    buildFaqSchema(faqSchemaData),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Servizi", url: `${SITE_URL}/servizi` },
      { name: "E-commerce", url: PAGE_URL },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      {children}
    </>
  );
}