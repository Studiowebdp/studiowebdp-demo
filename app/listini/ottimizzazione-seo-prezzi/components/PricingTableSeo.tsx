"use client";

import Image from "next/image";
import { Check, HelpCircle, Star } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Piano = {
  id: string;
  badge: string;
  titolo: string;
  descrizione: string;
  immagine: string;
  consigliato?: boolean;
  prezzo: number;
  cta: string;
  stripeUrl: string;
  features: string[];
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const PIANI: Piano[] = [
  {
    id: "local-seo",
    badge: "Local & Start",
    titolo: "Local SEO",
    descrizione:
      "Per professionisti e attività locali che desiderano dominare le ricerche geolocalizzate, farsi trovare su Google Maps.",
    immagine: "/images/local-seo.webp",
    prezzo: 199,
    cta: "Acquista Local SEO",
    stripeUrl: "https://buy.stripe.com/28E4gBcm41dpeti89Y7Vm0g",
    features: [
      "Ottimizzazione completa Google My Business",
      "Gestione di Google Search Console",
      "Audit SEO Tecnico iniziale del sito",
      "Ottimizzazione On-Page fino a 5 pagine chiave",
      "Creazione e ottimizzazione semantica di 1 nuovo contenuto / articolo al mese",
      "Monitoraggio keyword locali e coerenza dati aziendali",
      "Assistenza e supporto diretto con me via WhatsApp ed Email",
    ],
  },
  {
    id: "crescita-pmi",
    badge: "Crescita & PMI",
    titolo: "Crescita & PMI",
    descrizione:
      "Per aziende e studi professionali che vogliono scalare i risultati di Google con continuità e superare i competitor.",
    immagine: "/images/crescita-pmi.webp",
    consigliato: true,
    prezzo: 299,
    cta: "Acquista PMI",
    stripeUrl: "https://buy.stripe.com/3cI28t3Py6xJeti1LA7Vm0h",
    features: [
      "Tutto ciò che è compreso nel piano LOCAL SEO",
      "Ottimizzazione continua Core Web Vitals e velocità di caricamento",
      "Ricerca keyword transazionali e analisi dell'intento di ricerca",
      "Creazione e ottimizzazione semantica di 2 nuovi contenuti / articoli al mese",
      "Monitoraggio continuo Google Search Console",
      "Report mensile chiaro con statistiche di traffico, clic e posizionamento",
    ],
  },
  {
    id: "ecommerce-pro",
    badge: "E-commerce Pro",
    titolo: "E-Commerce PRO",
    descrizione:
      "Ideale per: Negozi online WooCommerce che necessitano di posizionare categorie e schede prodotto per aumentare le vendite.",
    immagine: "/images/ecommerce-pro.webp",
    prezzo: 599,
    cta: "Acquista PRO",
    stripeUrl: "https://buy.stripe.com/aFa7sNfyg8FRfxm1LA7Vm0i",
    features: [
      "Tutto ciò che è incluso nel piano Crescita & PMI",
      "Ottimizzazione dell'architettura categorie, tag e filtri e-commerce",
      "Implementazione Dati Strutturati avanzati Schema.org",
      "Gestione del Crawl Budget e pulizia delle pagine duplicate",
      "Ottimizzazione SEO e persuasiva delle schede prodotto a maggior margine",
      "Strategia di link interni per spingere i prodotti più venduti",
      "Monitoraggio continuo delle performance tecniche di carrello e checkout",
    ],
  },
  {
    id: "ai-search",
    badge: "Dominio & AI Search",
    titolo: "AI SEARCH",
    descrizione:
      "Per brand strutturati che vogliono dominare la SERP di Google ed essere citati come fonte autorevole dai motori di intelligenza artificiale.",
    immagine: "/images/ai-search.webp",
    prezzo: 999,
    cta: "Acquista AI",
    stripeUrl: "https://buy.stripe.com/aFafZjeuc9JVcla89Y7Vm0j",
    features: [
      "Tutto ciò che è incluso nel piano E-Commerce Pro",
      "Ottimizzazione avanzata per AI Overviews, Perplexity e ChatGPT",
      "Costruzione dell'autorevolezza del brand secondo i criteri Google E-E-A-T",
      "Analisi approfondita dei competitor e monitoraggio dei gap di mercato",
      "Piano editoriale mensile e ottimizzazione di 4 contenuti ad alto impatto",
      "Canale prioritario con risposta garantita in giornata",
      "Reportistica mensile personalizzata su misura",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function PricingTableSeo() {
  return (
    <div>
      {/* GRIGLIA PIANI */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {PIANI.map((piano) => (
          <div
            key={piano.id}
            className={`relative bg-white rounded-3xl overflow-hidden border flex flex-col h-full transition-all duration-300 ${
              piano.consigliato
                ? "border-2 border-blue-500 shadow-2xl shadow-blue-200/60"
                : "border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50"
            }`}
          >
            {/* BADGE CONSIGLIATO */}
            {piano.consigliato && (
              <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full w-9 h-9 flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-slate-900 fill-slate-900" />
              </div>
            )}

            {/* IMMAGINE — intera, non tagliata */}
            <div className="relative w-full aspect-square bg-slate-900 shrink-0">
              <Image
                src={piano.immagine}
                alt={piano.titolo}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </div>

            {/* HEADER BLU */}
            <div className="bg-blue-600 text-white p-6 min-h-[200px] shrink-0 flex flex-col">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/70 mb-2">
                {piano.badge}
              </div>
              <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-tight leading-tight mb-3">
                {piano.titolo}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {piano.descrizione}
              </p>
            </div>

            {/* PREZZO */}
            <div className="p-6 pb-4 text-center shrink-0 min-h-[100px] flex flex-col justify-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-black text-slate-900 leading-none">
                  {piano.prezzo}
                </span>
                <span className="text-lg font-bold text-slate-900">€</span>
                <span className="text-base text-slate-500 font-semibold ml-1">
                  / mese
                </span>
              </div>
            </div>

            {/* 👇 BOTTONE ACQUISTA — LINK STRIPE */}
            <div className="px-6 pb-6 shrink-0">
              <a
                href={piano.stripeUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`block w-full text-center font-bold text-sm uppercase tracking-wide py-3.5 px-6 rounded-full transition-all ${
                  piano.consigliato
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300/60"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5"
                }`}
              >
                {piano.cta}
              </a>
            </div>

            {/* LISTA FEATURE */}
            <ul className="px-6 pb-8 space-y-0 flex-grow">
              {piano.features.map((feature, i) => {
                const isBold =
                  feature === "Tutto ciò che è compreso nel piano LOCAL SEO" ||
                  feature === "Tutto ciò che è incluso nel piano Crescita & PMI" ||
                  feature === "Tutto ciò che è incluso nel piano E-Commerce Pro";

                return (
                  <li
                    key={i}
                    className="flex items-start justify-between gap-3 text-[13px] text-slate-700 leading-snug py-3 border-b border-slate-100 last:border-0"
                  >
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>
                        {isBold ? (
                          <strong className="text-slate-900 font-semibold">
                            {feature}
                          </strong>
                        ) : (
                          feature
                        )}
                      </span>
                    </div>
                    <HelpCircle className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* NOTA */}
      <p className="text-center text-sm text-slate-500 italic mt-10">
        * Tutti i prezzi sono esenti IVA come previsto dal regime forfettario.
      </p>
    </div>
  );
}