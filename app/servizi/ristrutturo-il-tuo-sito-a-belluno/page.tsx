import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  Search,
  Monitor,
  TrendingUp,
  Star,
  PhoneCall,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";
import RevealOnScroll from "@/app/components/RevealOnScroll";

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
      {children}
    </span>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const problemi = [
  {
    icon: "😰",
    title: "Perdita di",
    highlight: "Fiducia",
    description:
      "Un design datato comunica negligenza e può allontanare i potenziali clienti, che percepiscono l'azienda come non al passo coi tempi.",
  },
  {
    icon: "📉",
    title: "Penalizzazione",
    highlight: "SEO",
    description:
      "La lentezza e i problemi di usabilità su mobile vengono puniti da Google, causando un lento ma costante crollo nel posizionamento organico.",
  },
  {
    icon: "🛑",
    title: "Bassa",
    highlight: "Conversione",
    description:
      "Una navigazione confusa o processi di contatto macchinosi frustrano l'utente, portandolo ad abbandonare il sito prima di finalizzare un acquisto.",
  },
];

const risultati = [
  {
    icon: TrendingUp,
    title: "Crescita",
    highlight: "Organica",
    description:
      "Grazie alla pulizia del codice e ai redirect corretti, il tuo sito sarà posizionato meglio, intercettando più traffico qualificato nel tempo.",
    badge: "+ Traffico",
  },
  {
    icon: Star,
    title: "Maggiore",
    highlight: "Credibilità",
    description:
      "Un design curato e attuale rafforza la fiducia del cliente, posizionandoti come un leader nel settore e giustificando prezzi più alti.",
    badge: "+ Fiducia",
  },
  {
    icon: PhoneCall,
    title: "Contatti",
    highlight: "Aumentati",
    description:
      "Una User Experience migliorata, con call to action chiare e semplici, aumenta il tasso di conversione delle visite in richieste di preventivo.",
    badge: "+ Conversioni",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function RedesignPage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <MonoLabel>_ redesign a belluno</MonoLabel>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Pronto a trasformare il tuo sito in un{" "}
            <TypewriterText
              strings={[
                "asset di business.",
                "motore di vendita.",
                "vantaggio competitivo.",
                "macchina da conversioni.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Non lasciare che un sito lento e datato allontani i tuoi clienti.
              Richiedi un{" "}
              <strong className="text-slate-900">
                audit gratuito del tuo sito
              </strong>{" "}
              e scopri come possiamo trasformare i tuoi limiti attuali in un
              vantaggio competitivo.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.8}>
            <Link
              href="/#contattami"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <Search className="w-5 h-5" />
              Richiedi il tuo Audit Gratuito
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------- IL PROBLEMA ---------------------------- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ il problema</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Il Rischio di un <GradientText>Sito Obsoleto</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Un sito che non è stato aggiornato negli ultimi 3-5 anni
                presenta tre rischi principali che impattano direttamente sul
                tuo fatturato.{" "}
                <strong className="text-slate-900">È tempo di agire.</strong>
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {problemi.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.12}>
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full">
                  <span className="text-5xl block mb-5">{item.icon}</span>
                  <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight mb-4">
                    {item.title}{" "}
                    <GradientText>{item.highlight}</GradientText>
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- IL METODO ------------------------------ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ il mio metodo</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Sicurezza e Innovazione <br />
                <GradientText>Senza Rischi</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Il mio metodo di redesign è costruito per essere chirurgico,
                preservando i tuoi punti di forza (come il ranking SEO) e
                intervenendo solo dove necessario per massimizzare il{" "}
                <strong className="text-slate-900">
                  ritorno sull&apos;investimento
                </strong>
                .
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FASE 1 */}
            <RevealOnScroll from="left">
              <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm h-full">
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-none mb-5">
                  01
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-5">
                  Fase di{" "}
                  <GradientText>Diagnosi e Audit</GradientText>
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Non si parte subito con la grafica. Prima, analizzo il tuo
                  sito attuale:
                </p>
                <ul className="space-y-4">
                  <li className="text-sm md:text-base text-slate-700 leading-relaxed">
                    🔍{" "}
                    <strong className="text-slate-900">
                      Audit SEO Tecnico:
                    </strong>{" "}
                    Mappatura di tutti gli URL, analisi delle performance di
                    velocità e individuazione dei colli di bottiglia nel codice.
                  </li>
                  <li className="text-sm md:text-base text-slate-700 leading-relaxed">
                    📊{" "}
                    <strong className="text-slate-900">
                      Analisi Contenuti e Keyword:
                    </strong>{" "}
                    Identifico i contenuti che generano traffico e le keyword da
                    non perdere assolutamente durante la transizione.
                  </li>
                  <li className="text-sm md:text-base text-slate-700 leading-relaxed">
                    🎨{" "}
                    <strong className="text-slate-900">
                      Analisi UX/Design:
                    </strong>{" "}
                    Individuazione dei punti di frizione nel percorso utente e
                    delle aree che necessitano di una modernizzazione estetica.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* FASE 2 */}
            <RevealOnScroll from="right" delay={0.15}>
              <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm h-full">
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-none mb-5">
                  02
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-5">
                  Sviluppo in{" "}
                  <GradientText>Ambiente Controllato</GradientText>
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  La ricostruzione avviene interamente in un ambiente di staging
                  privato. Il tuo sito live continua a funzionare, garantendo{" "}
                  <strong className="text-slate-900">
                    zero interruzioni del business
                  </strong>
                  .
                </p>
                <ul className="space-y-4">
                  <li className="text-sm md:text-base text-slate-700 leading-relaxed">
                    🖥️{" "}
                    <strong className="text-slate-900">
                      Nuova Architettura:
                    </strong>{" "}
                    Implementazione di un tema moderno e leggero (basato su
                    WordPress) e ottimizzazione della struttura del codice.
                  </li>
                  <li className="text-sm md:text-base text-slate-700 leading-relaxed">
                    📱{" "}
                    <strong className="text-slate-900">
                      Design Moderno e Mobile-First:
                    </strong>{" "}
                    Riprogettazione dell&apos;interfaccia focalizzata su
                    chiarezza e usabilità su tutti i dispositivi.
                  </li>
                  <li className="text-sm md:text-base text-slate-700 leading-relaxed">
                    🔗{" "}
                    <strong className="text-slate-900">
                      Migrazione SEO (Redirect 301):
                    </strong>{" "}
                    Preparazione meticolosa di tutti i redirect 301 per
                    assicurare che Google non perda i tuoi vecchi link,
                    preservando il tuo ranking.
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ------------------------- I RISULTATI ---------------------------- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ i risultati</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Cosa Aspettarsi dal{" "}
                <GradientText>Nuovo Sito</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Un redesign strategico non porta solo un sito più bello. Porta{" "}
                <strong className="text-slate-900">
                  risultati tangibili
                </strong>{" "}
                che impattano direttamente sul tuo business.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {risultati.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.12}>
                  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight mb-4">
                      {item.title}{" "}
                      <GradientText>{item.highlight}</GradientText>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    <span className="self-start inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* IMMAGINE RISULTATI */}
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-slate-200">
                <Image
                  src="/images/visite.webp"
                  alt="Grafico che mostra la crescita dopo un redesign"
                  width={1000}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-4 text-sm md:text-base italic text-slate-500">
                Un redesign ben fatto è un investimento che ripaga in termini di
                traffico e conversioni.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------ */}
      <section
        id="contattami"
        className="py-20 md:py-28 bg-slate-50 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-10 md:p-14 text-center">
              <MonoLabel>_ il momento è adesso</MonoLabel>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Non aspettare che il tuo sito <br />
                <GradientText>ti danneggi</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Se sospetti che il tuo vecchio sito stia allontanando i clienti,
                contattami oggi per un&apos;
                <strong className="text-blue-600">
                  analisi approfondita
                </strong>
                . Scopri come trasformare i limiti attuali in un{" "}
                <strong className="text-blue-600">
                  vantaggio competitivo
                </strong>
                .
              </p>

              {/* 3 punti */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { emoji: "🚀", text: "Sito più veloce e performante" },
                  { emoji: "📈", text: "Migliori posizioni su Google" },
                  { emoji: "💰", text: "Più contatti e vendite" },
                ].map((item, i) => (
                  <RevealOnScroll key={i} delay={i * 0.1}>
                    <div className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-blue-50/50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all">
                      <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                      <span className="text-sm text-slate-700 sm:text-center font-medium">
                        {item.text}
                      </span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll delay={0.3}>
                <Link
                  href="/#contattami"
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200/70 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
                >
                  Iniziamo con un Audit Gratuito
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}