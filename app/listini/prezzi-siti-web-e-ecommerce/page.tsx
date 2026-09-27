import Link from "next/link";
import {
  Rocket,
  TrendingUp,
  Search,
  Palette,
  MessageCircle,
  Send,
  BookOpen,
  Globe,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import GradientText from "@/app/components/GradientText";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const pianiInclude = [
  {
    icon: Search,
    title: "Analisi",
    highlight: "Strategica",
    text: "Non partiamo dal design, ma dai tuoi obiettivi. Analizziamo insieme il tuo mercato e i tuoi clienti per definire la strategia migliore.",
  },
  {
    icon: Palette,
    title: "Design e",
    highlight: "Identità Visiva",
    text: "Creo un design che rappresenta il tuo brand, studiato per comunicare fiducia e guidare l'utente all'azione.",
  },
  {
    icon: MessageCircle,
    title: "Comunicazione",
    highlight: "Costante",
    text: "Sarai sempre aggiornato sullo stato dei lavori attraverso mail, SMS e report periodici. La collaborazione è la chiave del successo.",
  },
  {
    icon: Send,
    title: "Configurazione",
    highlight: "e Messa Online",
    text: "Gestisco tutti gli aspetti tecnici per un lancio perfetto e senza intoppi, dalla configurazione del dominio al deploy finale.",
  },
  {
    icon: BookOpen,
    title: "Formazione",
    highlight: "",
    text: "Ti fornirò tutte le competenze necessarie per gestire in autonomia alcune parti del tuo nuovo sito.",
  },
  {
    icon: Globe,
    title: "12 Mesi di",
    highlight: "Dominio e Hosting",
    text: "Per il primo anno il costo del dominio e dello hosting sono inclusi nel tuo investimento, senza costi nascosti.",
  },
];

const puntiManutenzione = [
  {
    icon: ShieldCheck,
    text: "4 Livelli dedicati",
    highlight: "da 25€/mese a piani evoluti",
  },
  {
    icon: Clock,
    text: "Ore con Roll-over",
    highlight: "accumulabili fino a 60 giorni",
  },
  {
    icon: CheckCircle2,
    text: "Trasparenza totale",
    highlight: "con report mensili certificati",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function ListinoPrezziPage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ============================= HERO ============================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
            _ investimento
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Quanto costa<p>{" "}</p>
            <TypewriterText
              strings={[
                "realizzare un negozio online?",
                "un sito web professionale?",
                "una landing page?",
              ]}
              typeSpeed={50}
              backSpeed={30}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Un sito web o un e-commerce non è una voce di costo, ma il più
              importante{" "}
              <strong className="text-slate-900">
                investimento strategico
              </strong>{" "}
              per la crescita del tuo business. Un progetto a basso costo può
              sembrare un risparmio oggi, ma si traduce quasi sempre in mancate
              opportunità, problemi tecnici e clienti persi domani.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.8}>
            <Link
              href="/#contattami"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <Rocket className="w-5 h-5" />
              Richiedi un preventivo gratuito
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===================== GRIGLIA PREZZI ===================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
                _ piani e prezzi
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Scegli la soluzione <GradientText>giusta per te</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                I prezzi indicati sono da considerarsi come punto di partenza.
                Per garantirti la massima trasparenza e un&apos;offerta su
                misura, il costo finale verrà definito tramite un{" "}
                <strong className="text-slate-900">
                  preventivo personalizzato
                </strong>{" "}
                dopo una consulenza gratuita e senza impegno.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {/* CARD 0 — POCO COSTO */}
            <RevealOnScroll>
              <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-7 mb-4">
                  <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Soluzioni economiche
                  </span>
                </div>

                <div className="min-h-[62px] mb-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight">
                    Poco <GradientText>Costo</GradientText>
                  </h3>
                </div>

                <div className="min-h-[42px] mb-4">
                  <p className="text-xs text-slate-500 font-medium leading-snug">
                    Sito Web o Monopagina, con formula &quot;Visto e
                    Piaciuto&quot;
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-4 pb-4 border-b-2 border-slate-100 min-h-[52px]">
                  <span className="text-lg font-bold text-slate-900">€</span>
                  <span className="text-3xl font-black text-slate-900 leading-none">
                    200 / 800
                  </span>
                  <span className="text-base text-slate-500 font-semibold">
                    *
                  </span>
                </div>

                <div className="flex flex-col gap-2 mb-5 min-h-[104px]">
                  <a
                    href="https://buy.stripe.com/6oU14pcm47BN2KA4XM7Vm0e"
                    target="_self"
                    rel="nofollow noopener"
                    className="block text-center bg-white text-slate-900 font-semibold text-sm py-3 rounded-lg border-2 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  >
                    Acquista Landing (200€) ➔
                  </a>
                  <a
                    href="https://buy.stripe.com/28E4gB4TC4pB4SIgGu7Vm0f"
                    target="_self"
                    rel="nofollow noopener"
                    className="block text-center bg-white text-slate-900 font-semibold text-sm py-3 rounded-lg border-2 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  >
                    Acquista Sito (800€) ➔
                  </a>
                </div>

                <div className="min-h-[180px] mb-5 pb-4 border-b-2 border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Soluzione ultra-economica (Landing Page 200€ | Sito Web
                    800€). Layout standard e{" "}
                    <strong className="text-slate-900">
                      testi generati automaticamente tramite AI
                    </strong>
                    . Consegnato a scatola chiusa, senza alcuna modifica o
                    revisione inclusa. I siti (POCO COSTO) saranno generati
                    sempre con WordPress e quindi personalizzabili anche in
                    futuro.
                  </p>
                </div>

                <ul className="space-y-2 mt-auto">
                  {[
                    { ok: true, text: "Template Standard Preimpostato" },
                    { ok: true, text: "Testi Generati con AI (standard)" },
                    { ok: false, text: "No Dominio e Hosting inclusi" },
                    { ok: false, text: "Zero Modifiche a layout e testi" },
                    { ok: false, text: "Nessun Copywriting Manuale" },
                    { ok: false, text: "Nessuna Ottimizzazione SEO" },
                    { ok: false, text: "Nessun Servizio Extra" },
                    { ok: false, text: "No consulenza inclusa" },
                    { ok: false, text: "No investimento garantito" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs md:text-[13px] text-slate-600 leading-snug"
                    >
                      <span className="shrink-0 mt-0.5">
                        {item.ok ? "✅" : "❌"}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* CARD 1 — LANDING PAGE */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-7 mb-4">
                  <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Pagina professionale
                  </span>
                </div>

                <div className="min-h-[62px] mb-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight">
                    Landing <GradientText>Page</GradientText>
                  </h3>
                </div>

                <div className="min-h-[42px] mb-4">
                  <p className="text-xs text-slate-500 font-medium leading-snug">
                    Una Sola Pagina Web Professionale Online
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-4 pb-4 border-b-2 border-slate-100 min-h-[52px]">
                  <span className="text-lg font-bold text-slate-900">€</span>
                  <span className="text-3xl font-black text-slate-900 leading-none">
                    800
                  </span>
                  <span className="text-base text-slate-500 font-semibold">
                    *
                  </span>
                </div>

                <div className="mb-5 min-h-[104px] flex flex-col justify-start">
                  <Link
                    href="/#contattami"
                    className="block text-center bg-white text-slate-900 font-semibold text-sm py-3 rounded-lg border-2 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  >
                    Richiedi preventivo ➔
                  </Link>
                </div>

                <div className="min-h-[180px] mb-5 pb-4 border-b-2 border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Una pagina web creata con un unico obiettivo: trasformare i
                    visitatori in clienti. Ideale per lanciare un prodotto,
                    promuovere un evento o raccogliere contatti qualificati.
                  </p>
                </div>

                <ul className="space-y-2.5 mt-auto">
                  {[
                    "Design Strategico e Personalizzato",
                    "Copywriting Persuasivo (scritto su misura)",
                    "Ottimizzazione Mobile-First",
                    "Modulo di Contatto / Acquisizione Lead",
                    "Call-to-Action Efficaci",
                    "SEO Base per una Buona Visibilità",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs md:text-[13px] text-slate-600 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* CARD 2 — SITO WEB (IN EVIDENZA) */}
            <RevealOnScroll delay={0.2}>
              <div className="relative bg-white rounded-3xl p-7 border-2 border-blue-500 shadow-2xl shadow-blue-200/60 xl:scale-[1.03] h-full flex flex-col">
                <div className="h-7 mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Sito Web Professionale
                  </span>
                </div>

                <div className="min-h-[62px] mb-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight">
                    Sito <GradientText>Web</GradientText>
                  </h3>
                </div>

                <div className="min-h-[42px] mb-4">
                  <p className="text-xs text-slate-500 font-medium leading-snug">
                    La Tua Presenza Online Professionale
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-4 pb-4 border-b-2 border-slate-100 min-h-[52px]">
                  <span className="text-sm font-bold text-slate-900">
                    da €
                  </span>
                  <span className="text-3xl font-black text-slate-900 leading-none">
                    1.600
                  </span>
                  <span className="text-base text-slate-500 font-semibold">
                    *
                  </span>
                </div>

                <div className="mb-5 min-h-[104px] flex flex-col justify-start">
                  <Link
                    href="/#contattami"
                    className="block text-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold text-sm py-3 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  >
                    Richiedi preventivo ➔
                  </Link>
                </div>

                <div className="min-h-[180px] mb-5 pb-4 border-b-2 border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    La soluzione completa per professionisti e aziende che
                    vogliono costruire una solida credibilità online, presentare
                    al meglio i propri servizi e attrarre nuovi clienti.
                  </p>
                </div>

                <ul className="space-y-2.5 mt-auto">
                  {[
                    "Sito Web Multi-Pagina",
                    "Design Unico e Rappresentativo del Brand",
                    "Navigazione Ottimale su Mobile, Tablet e Desktop",
                    "SEO Base per una Buona Visibilità",
                    "Integrazione con i Social Media",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs md:text-[13px] text-slate-600 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* CARD 3 — E-COMMERCE */}
            <RevealOnScroll delay={0.3}>
              <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-7 mb-4">
                  <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Negozio professionale
                  </span>
                </div>

                <div className="min-h-[62px] mb-1">
                  <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight">
                    E-<GradientText>Commerce</GradientText>
                  </h3>
                </div>

                <div className="min-h-[42px] mb-4">
                  <p className="text-xs text-slate-500 font-medium leading-snug">
                    Il Tuo Negozio Online, Sempre Aperto
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-4 pb-4 border-b-2 border-slate-100 min-h-[52px]">
                  <span className="text-sm font-bold text-slate-900">
                    da €
                  </span>
                  <span className="text-3xl font-black text-slate-900 leading-none">
                    3.000
                  </span>
                  <span className="text-base text-slate-500 font-semibold">
                    *
                  </span>
                </div>

                <div className="mb-5 min-h-[104px] flex flex-col justify-start">
                  <Link
                    href="/#contattami"
                    className="block text-center bg-white text-slate-900 font-semibold text-sm py-3 rounded-lg border-2 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  >
                    Richiedi preventivo ➔
                  </Link>
                </div>

                <div className="min-h-[180px] mb-5 pb-4 border-b-2 border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    La soluzione definitiva per portare i tuoi prodotti a un
                    pubblico nazionale e internazionale, automatizzare il
                    processo di vendita e far crescere il tuo fatturato senza
                    limiti.
                  </p>
                </div>

                <ul className="space-y-2.5 mt-auto">
                  {[
                    "Piattaforma di Vendita Completa",
                    "Gestione Catalogo Prodotti",
                    "Pagamenti Sicuri Integrati",
                    "Configurazione Spedizioni",
                    "Formazione per Gestione Autonoma",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs md:text-[13px] text-slate-600 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          <p className="text-center text-sm text-slate-500 italic mt-8">
            * Tutti i prezzi sono esenti IVA come previsto dal regime
            forfettario.
          </p>
        </div>
      </section>

      {/* ===================== COSA INCLUDE ===================== */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
                _ investimento garantito
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Cosa Include Sempre il Tuo{" "}
                <GradientText>Investimento</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La trasparenza è fondamentale. Tutti i progetti professionali
                beneficiano degli elementi essenziali, ogni mio lavoro è una{" "}
                <strong className="text-slate-900">partnership</strong>.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pianiInclude.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {item.title}{" "}
                      {item.highlight && (
                        <GradientText>{item.highlight}</GradientText>
                      )}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ASSISTENZA ===================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
              _ assistenza dedicata
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Non sarai <GradientText>mai solo</GradientText>
            </h2>
            <p className="text-lg text-slate-700 font-bold mb-4">
              Proteggi il Tuo Investimento Digitale
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              con un piano in abbonamento mensile o annuale. Tutti i piani
              professionali includono 1 anno gratuito del servizio{" "}
              <strong className="text-slate-900">
                &quot;SICUREZZA COMPLETA&quot;
              </strong>
              .
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Il lancio del tuo sito web è solo l&apos;inizio del viaggio. Un
              sito è un asset dinamico che ha bisogno di cure costanti per
              rimanere sicuro, veloce e funzionante nel tempo. Per questo offro
              dei piani di manutenzione e assistenza pensati per darti la{" "}
              <strong className="text-slate-900">massima tranquillità</strong>,
              permettendoti di concentrarti solo sulla crescita del tuo
              business.
            </p>

            <div className="inline-block bg-slate-900 rounded-3xl px-10 py-8 shadow-2xl">
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-medium mb-2">
                Piani di manutenzione
              </span>
              <span className="block text-5xl md:text-6xl font-black text-cyan-300 leading-none">
                da € 25*
              </span>
              <span className="block text-base text-slate-400 mt-2">
                al mese
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===================== PIANI MANUTENZIONE ===================== */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-10 md:p-14 text-center">
              <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
                _ continuità e sicurezza
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                4 Piani di manutenzione su{" "}
                <GradientText>misura per te</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Per proteggere il tuo investimento e garantirti la massima
                serenità, ho strutturato{" "}
                <strong className="text-slate-900">
                  4 livelli di manutenzione continua
                </strong>
                : dalla protezione essenziale con backup cloud fino al supporto
                proattivo con ore di modifica incluse, ottimizzazione velocità e
                predisposizione per i motori AI.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {puntiManutenzione.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <RevealOnScroll key={i} delay={i * 0.1}>
                      <div className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-blue-50/50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all">
                        <Icon className="w-6 h-6 text-blue-600 shrink-0" />
                        <span className="text-sm text-slate-700 sm:text-center font-medium">
                          {item.text}{" "}
                          <strong className="text-slate-900">
                            {item.highlight}
                          </strong>
                        </span>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>

              <RevealOnScroll delay={0.3}>
                <Link
                  href="/listini/piani-manutenzione-wordpress"
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200/70 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
                >
                  Scegli il tuo piano di manutenzione
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===================== CTA FINALE ===================== */}
      <section
        id="contattami"
        className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,124,240,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Pronto a dare forma al tuo <br />
              <TypewriterText
                strings={[
                  "progetto digitale.",
                  "sito web.",
                  "negozio online.",
                  "investimento.",
                ]}
                typeSpeed={50}
                backSpeed={30}
                className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
              />
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Che tu abbia un&apos;idea brillante da lanciare o un sito
              esistente da trasformare, il primo passo è parlarne. Fissiamo una{" "}
              <strong className="text-white">
                call conoscitiva gratuita
              </strong>{" "}
              e senza impegno per analizzare insieme i tuoi obiettivi.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link
              href="/#contattami"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <ShoppingCart className="w-5 h-5" />
              Prenota la tua call gratuita
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}