"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, HelpCircle, Sparkles, Info } from "lucide-react";

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
  prezzoMensile: number;
  prezzoAnnuale: number;
  risparmio: number;
  cta: string;
  stripeMensile: string;
  stripeAnnuale: string;
  features: string[];
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const PIANI: Piano[] = [
  {
    id: "protezione-base",
    badge: "Tranquillità essenziale",
    titolo: "Protezione Base",
    descrizione:
      "Per attività e professionisti che cercano una tutela tecnica essenziale, azzerando il rischio di bloccare il sito o perdere dati preziosi. Il minimo indispensabile.",
    immagine: "/images/protezione-base.webp",
    prezzoMensile: 25,
    prezzoAnnuale: 200,
    risparmio: 50,
    cta: "Acquista",
    stripeMensile: "https://buy.stripe.com/9B67sN5XG5tF84UfCq7Vm00",
    stripeAnnuale: "https://buy.stripe.com/28EfZj85O09lgBq4XM7Vm04",
    features: [
      "Backup Giornalieri su Cloud AWS",
      "Ogni tre mesi verranno eseguiti gli aggiornamenti",
      "Report ogni tre mesi",
    ],
  },
  {
    id: "sicurezza-completa",
    badge: "Per attività locali",
    titolo: "Sicurezza Completa",
    descrizione:
      "Per siti vetrina e attività locali che desiderano sicurezza attiva h24, monitoraggio continuo del server e tariffe orarie agevolate.",
    immagine: "/images/sicurezza-completa.webp",
    prezzoMensile: 50,
    prezzoAnnuale: 500,
    risparmio: 100,
    cta: "Acquista",
    stripeMensile: "https://buy.stripe.com/3cIbJ30DmbS33OEdui7Vm0b",
    stripeAnnuale: "https://buy.stripe.com/aFa8wR85O3lxeti75U7Vm0d",
    features: [
      "Tutto ciò che è compreso nel piano Protezione Base (Backup Cloud AWS + Safe Updates)",
      "Monitoraggio Uptime 24/7",
      "Scansione Antivirus & Security",
      "Report Mensile in PDF",
      "Controllo Broken Links",
      "Tariffa agevolata per interventi extra",
    ],
  },
  {
    id: "prestazioni-supporto",
    badge: "Scelta consigliata",
    titolo: "Prestazioni & Supporto",
    descrizione:
      "Per aziende e professionisti che necessitano di un sito veloce e leggero, con ore di supporto incluse per modifiche e aggiornamenti.",
    immagine: "/images/prestazioni-supporto.webp",
    consigliato: true,
    prezzoMensile: 99,
    prezzoAnnuale: 990,
    risparmio: 198,
    cta: "Acquista Ora",
    stripeMensile: "https://buy.stripe.com/28E7sN4TC4pB2KAgGu7Vm02",
    stripeAnnuale: "https://buy.stripe.com/28E00l85Of4f98Ydui7Vm06",
    features: [
      "Tutto ciò che è compreso nel piano Sicurezza Completa",
      "Ottimizzazione Prestazioni & Core Web Vitals (INP)",
      "Database & Media Hygiene",
      "1 ORA al mese di modifiche incluse",
      "Garanzia Ore Roll-over (60 Giorni)",
      "Controllo Broken Links",
      "Tariffa agevolata per ore extra: 50 €/ora",
    ],
  },
  {
    id: "crescita-motori-ai",
    badge: "Per brand strutturati",
    titolo: "Crescita & Motori AI",
    descrizione:
      "Per brand e aziende strutturate che vogliono espandere il proprio business, scalare su Google e farsi trovare dai nuovi motori AI.",
    immagine: "/images/crescita-motori-ai.webp",
    prezzoMensile: 199,
    prezzoAnnuale: 1990,
    risparmio: 398,
    cta: "Acquista",
    stripeMensile: "https://buy.stripe.com/eVq7sN85O09lfxm2PE7Vm03",
    stripeAnnuale: "https://buy.stripe.com/dRmbJ371K1dp1Gw75U7Vm07",
    features: [
      "Tutto ciò che è compreso nel piano Prestazioni & Supporto",
      "Predisposizione Semantica AI-Ready (GEO)",
      "Controllo Errori SEO",
      "Scansione Accessibilità EAA",
      "+ 2 ORE al mese di sviluppo strategico e CRO",
      "Conformità GDPR",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function PricingTableManutenzione() {
  const [fatturazione, setFatturazione] = useState<"mensile" | "annuale">(
    "mensile"
  );

  return (
    <div>
      {/* TOGGLE */}
      <div className="flex flex-col items-center gap-4 mb-14">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center">
          Scegli tra un piano mensile o annuale
        </h3>
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          2 mesi gratis con l&apos;annuale
        </span>

        <div className="inline-flex bg-slate-100 rounded-full p-1 shadow-inner">
          <button
            onClick={() => setFatturazione("mensile")}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              fatturazione === "mensile"
                ? "bg-white text-blue-600 shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Fatturazione mensile
          </button>
          <button
            onClick={() => setFatturazione("annuale")}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              fatturazione === "annuale"
                ? "bg-white text-blue-600 shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Fatturazione annuale
          </button>
        </div>
      </div>

      {/* GRIGLIA PIANI — altezze allineate */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {PIANI.map((piano) => {
          const isAnnual = fatturazione === "annuale";
          const prezzo = isAnnual ? piano.prezzoAnnuale : piano.prezzoMensile;
          const periodo = isAnnual ? "/ anno" : "/ mese";
          const prezzoOriginale = isAnnual ? piano.prezzoMensile * 12 : null;
          const stripeUrl = isAnnual ? piano.stripeAnnuale : piano.stripeMensile;

          return (
            <div
              key={piano.id}
              className={`relative bg-white rounded-3xl border flex flex-col h-full ${
                piano.consigliato
                  ? "border-2 border-blue-500 shadow-2xl shadow-blue-200/60"
                  : "border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50"
              } transition-shadow duration-300 overflow-hidden`}
            >
              {/* BADGE CONSIGLIATO — solo nella card 3, dentro il layout */}
              {piano.consigliato && (
                <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] text-center py-2 shrink-0">
                  Scelta Consigliata
                </div>
              )}

              {/* IMMAGINE — altezza FISSA uguale per tutte */}
              <div className="relative w-full h-[180px] bg-slate-100 shrink-0">
                <Image
                  src={piano.immagine}
                  alt={piano.titolo}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              {/* HEADER BLU — altezza FISSA (min-h) */}
              <div className="bg-blue-600 text-white p-6 min-h-[220px] shrink-0 flex flex-col">
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

              {/* PREZZO — altezza FISSA */}
              <div className="p-6 pb-4 text-center shrink-0 min-h-[130px] flex flex-col justify-center">
                <div className="h-5 mb-1">
                  {isAnnual && prezzoOriginale ? (
                    <span className="text-sm text-slate-400 line-through">
                      {prezzoOriginale} € / anno
                    </span>
                  ) : null}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-slate-900 leading-none">
                    {prezzo}
                  </span>
                  <span className="text-lg font-bold text-slate-900">€</span>
                  <span className="text-base text-slate-500 font-semibold ml-1">
                    {periodo}
                  </span>
                </div>
                <div className="h-5 mt-2">
                  {isAnnual && piano.risparmio > 0 ? (
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                      Risparmia {piano.risparmio} €
                    </span>
                  ) : null}
                </div>
              </div>

              {/* BOTTONE ACQUISTA — altezza FISSA */}
              <div className="px-6 pb-6 shrink-0">
                <a
                  href={stripeUrl}
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
              <ul className="px-6 pb-8 flex-grow">
                {piano.features.map((feature, i) => {
                  const isBold = feature.startsWith("Tutto ciò");
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
          );
        })}
      </div>

      {/* NOTA */}
      <p className="text-center text-sm text-slate-500 italic mt-10">
        * Tutti i prezzi sono esenti IVA come previsto dal regime forfettario. 2
        mesi omaggio inclusi con pagamento annuale.
      </p>
    </div>
  );
}