import Image from "next/image";
import { CheckCircle2, Info } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Intervento = {
  id: string;
  badge: string;
  titolo: string;
  sottotitolo: string;
  descrizione: string;
  immagine: string;
  prezzo: string;
  prezzoOriginale: string | null;
  cta: string;
  stripeUrl: string;
  features: { text: string; bold?: boolean }[];
  nota?: string;
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const INTERVENTI: Intervento[] = [
  {
    id: "sos",
    badge: "SOS",
    titolo: "Pronto Soccorso SOS",
    sottotitolo: "Sito Down o Errore Critico",
    descrizione:
      "Intervento tempestivo per schermata bianca (WSOD), errori 500, crash post-aggiornamento o sito non raggiungibile.",
    immagine: "/images/spot-sos.webp",
    prezzo: "200",
    prezzoOriginale: null,
    cta: "Acquista SOS",
    stripeUrl: "https://buy.stripe.com/bJe28t2LucW7ad2ai67Vm08",
    features: [
      { text: "Diagnosi rapida dell'errore", bold: true },
      { text: "Ripristino operatività", bold: true },
      { text: "Presa in carico prioritaria", bold: true },
    ],
  },
  {
    id: "bonifica-malware",
    badge: "Sicurezza totale",
    titolo: "Bonifica Malware",
    sottotitolo: "Pulizia radicale da virus",
    descrizione:
      "Pulizia radicale da virus, reindirizzamenti fraudolenti, rimozione avvisi rossi di Google e hardening completo. Messa in sicurezza completa del sito.",
    immagine: "/images/spot-bonifica-malware.webp",
    prezzo: "200",
    prezzoOriginale: null,
    cta: "Acquista Bonifica",
    stripeUrl: "https://buy.stripe.com/28E3cxcm4aNZgBqai67Vm0a",
    features: [
      { text: "Isolamento, Accessi e Backup di Sicurezza" },
      { text: "Pulizia database e file core", bold: true },
      {
        text: "Reset Credenziali e Rigenerazione Chiavi di Sicurezza",
        bold: true,
      },
      { text: "Messa in Sicurezza", bold: true },
    ],
  },
  {
    id: "pacchetto-5-ore",
    badge: "Flessibilità",
    titolo: "Pacchetto di 5 Ore",
    sottotitolo: "Modifiche Grafiche & Sviluppo",
    descrizione:
      "Un monte ore a consumo valido 12 mesi per richiedere modifiche ai contenuti, nuove pagine, restyling o personalizzazioni.",
    immagine: "/images/spot-pacchetto-5-ore.webp",
    prezzo: "300",
    prezzoOriginale: "420",
    cta: "Acquista Ore",
    stripeUrl: "https://buy.stripe.com/28E5kF2Lu3lxgBq9e27Vm09",
    features: [
      { text: "Tariffa scontata (60€/ora)", bold: true },
      { text: "Validità 12 mesi", bold: true },
      { text: "Report dettagliato del tempo speso", bold: true },
    ],
  },
  {
    id: "ore-singole",
    badge: "Il mio tempo, il tuo progetto",
    titolo: "Ore Singole per i Tuoi Progetti",
    sottotitolo: "Prezzo all'ora",
    descrizione:
      "Acquistando le ore singole avrai la massima libertà di richiedere interventi tecnici, modifiche grafiche e qualsiasi tipo di personalizzazione per il tuo sito web.",
    immagine: "/images/spot-ore-singole.webp",
    prezzo: "70",
    prezzoOriginale: null,
    cta: "Acquista Ore",
    stripeUrl: "https://buy.stripe.com/bJe28tbi03lxetigGu7Vm0k",
    features: [
      { text: "Tariffa scontata (60€/ora)", bold: true },
      { text: "Validità 12 mesi", bold: true },
      { text: "Report dettagliato del tempo speso", bold: true },
    ],
    nota: "Scegli la quantità di ore che preferisci tramite il menu a tendina durante il pagamento.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function InterventiSpot() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
      {INTERVENTI.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-shadow duration-300 h-full flex flex-col overflow-hidden"
        >
          {/* BADGE TOP — altezza FISSA */}
          <div className="h-9 shrink-0 bg-slate-50 border-b border-slate-100 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3 text-center leading-tight">
              {item.badge}
            </span>
          </div>

          {/* IMMAGINE — INTERA, non tagliata, con sfondo scuro coerente */}
<div className="relative w-full h-[200px] bg-slate-900 shrink-0">
  <Image
    src={item.immagine}
    alt={item.titolo}
    fill
    className="object-contain object-center"
    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
  />
</div>

          {/* HEADER BLU — altezza FISSA (min-h) */}
          <div className="bg-blue-600 text-white p-6 min-h-[240px] shrink-0 flex flex-col">
            <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-tight leading-tight mb-2">
              {item.titolo}
            </h4>
            <p className="text-[11px] text-white/70 uppercase tracking-wider mb-3 font-mono">
              {item.sottotitolo}
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              {item.descrizione}
            </p>
          </div>

          {/* PREZZO — altezza FISSA */}
          <div className="p-6 pb-4 text-center shrink-0 min-h-[140px] flex flex-col justify-center">
            {/* Prezzo barrato (spazio sempre riservato) */}
            <div className="h-5 mb-1">
              {item.prezzoOriginale && (
                <span className="text-sm text-slate-400 line-through">
                  {item.prezzoOriginale} €
                </span>
              )}
            </div>

            {/* Prezzo attuale */}
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-slate-900 leading-none">
                {item.prezzo}
              </span>
              <span className="text-lg font-bold text-slate-900">€</span>
            </div>
          </div>

          {/* BOTTONE STRIPE — altezza FISSA */}
          <div className="px-6 pb-6 shrink-0">
            <a
              href={item.stripeUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="block w-full text-center font-bold text-sm uppercase tracking-wide py-3.5 px-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
            >
              {item.cta}
            </a>
          </div>

          {/* FEATURES */}
          <ul className="px-6 pb-8 flex-grow">
            {item.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] text-slate-700 leading-snug py-3 border-b border-slate-100 last:border-0"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  {feature.bold ? (
                    <strong className="text-slate-900 font-semibold">
                      {feature.text}
                    </strong>
                  ) : (
                    feature.text
                  )}
                </span>
              </li>
            ))}

            {item.nota && (
              <li className="flex items-start gap-2 text-xs text-slate-500 leading-snug pt-3 mt-3 border-t border-slate-100 italic">
                <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>{item.nota}</span>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}