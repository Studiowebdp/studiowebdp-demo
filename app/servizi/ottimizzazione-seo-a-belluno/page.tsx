import Link from "next/link";
import {
  Rocket,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Wrench,
  PenTool,
  MapPin,
  CheckCircle2,
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
    icon: BarChart3,
    title: "Il",
    highlight: "Traffic Gap",
    description:
      "Identifico le parole chiave che il tuo pubblico cerca e che i tuoi concorrenti usano, creando una strategia per colmare il divario di traffico.",
  },
  {
    icon: Zap,
    title: "I",
    highlight: "Freni Tecnici",
    description:
      "Eseguo un audit approfondito per scovare e risolvere tutti i problemi tecnici che rallentano il sito e penalizzano il tuo ranking (Core Web Vitals, crawlability, mobile-first).",
  },
  {
    icon: Target,
    title: "Messaggio",
    highlight: "Dispersivo",
    description:
      "Ottimizzo la struttura dei tuoi contenuti per comunicare chiaramente a Google la tua autorità nel settore, migliorando l'intent match e il tasso di conversione.",
  },
];

const serviziSeo = [
  {
    icon: Wrench,
    title: "SEO",
    highlight: "Tecnica",
    description:
      'Le fondamenta del successo: mi assicuro che il tuo sito sia una "macchina da guerra" amata dai motori di ricerca.',
    items: [
      {
        title: "Audit di Velocità:",
        text: "Analisi e correzione dei fattori che rallentano il sito (immagini, hosting, caching).",
      },
      {
        title: "Architettura Perfetta:",
        text: "Ottimizzazione della struttura URL, gerarchia del sito e navigazione interna.",
      },
      {
        title: "Salute del Sito:",
        text: "Gestione degli errori 404, redirect e ottimizzazione per robots.txt e sitemap.",
      },
    ],
  },
  {
    icon: PenTool,
    title: "Strategia",
    highlight: "Contenuti",
    description:
      "Creiamo contenuti che attraggono il cliente giusto nel momento giusto, trasformando i visitatori in lead qualificati.",
    items: [
      {
        title: "Ricerca Keyword:",
        text: "Identificazione delle parole chiave transazionali e a coda lunga per intercettare gli utenti pronti all'acquisto.",
      },
      {
        title: "Ottimizzazione On-Page:",
        text: "Miglioramento di Title, Meta Description e descrizioni per massimizzare il CTR e la conversione.",
      },
      {
        title: "Strategia Blog:",
        text: "Pianificazione di contenuti informativi che costruiscono autorevolezza e portano traffico qualificato.",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO &",
    highlight: "Autorità",
    description:
      "Se il tuo business opera su base locale, la SEO locale è vitale. Costruiamo insieme l'autorità del tuo dominio.",
    items: [
      {
        title: "Google Business Profile:",
        text: "Ottimizzazione completa della tua scheda (NAP, orari, servizi) per emergere nelle ricerche di prossimità.",
      },
      {
        title: "Link Building Strategico:",
        text: "Definizione di una strategia per ottenere link di qualità che rafforzino l'autorità del tuo dominio.",
      },
      {
        title: "Recensioni e Reputazione:",
        text: "Gestione e ottimizzazione delle recensioni per aumentare la fiducia e il posizionamento locale.",
      },
    ],
  },
];

const statistiche = [
  { value: "+200%", label: "Aumento medio del traffico organico" },
  { value: "Top 3", label: "Posizionamento medio su Google" },
  { value: "100%", label: "Trasparenza nei report e nei dati" },
];

const puntiFinali = [
  { icon: "🎯", text: "Traffico", highlight: "qualificato", text2: "e pronto all'acquisto" },
  { icon: "📈", text: "Posizionamento", highlight: "stabile", text2: "nel tempo" },
  { icon: "💰", text: "Ritorno sull'investimento", highlight: "misurabile", text2: "" },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function SeoPage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <MonoLabel>_ ottimizzazione seo a belluno</MonoLabel>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Pronto a portare il tuo sito{" "}
            <TypewriterText
              strings={[
                "in prima pagina di Google.",
                "ad una maggiore visibilità?",
                "nella ricerca AI?",
              ]}
              typeSpeed={50}
              backSpeed={30}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Non lasciare che i tuoi potenziali clienti ti cerchino senza
              trovarti. Richiedi una{" "}
              <strong className="text-slate-900">
                consulenza SEO gratuita
              </strong>{" "}
              e scopri come possiamo trasformare la tua visibilità online in
              risultati concreti.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.8}>
            <Link
              href="/#contattami"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <Rocket className="w-5 h-5" />
              Richiedi la tua analisi SEO gratuita
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
                Il tuo sito è online ma nessuno ti trova?{" "}
                <br />
                <GradientText>Ecco perché</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Il tuo sito è già online, ma non genera contatti? Stai spendendo
                troppo in pubblicità a pagamento? Molto spesso, il problema è
                l&apos;
                <strong className="text-slate-900">invisibilità</strong>. Se
                Google non capisce cosa offri e dove operi, i tuoi clienti non
                ti troveranno.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {problemi.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.12}>
                  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight mb-4">
                      {item.title} <GradientText>{item.highlight}</GradientText>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------- SERVIZI SEO ---------------------------- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ servizi seo</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Una strategia a 360° per il tuo <br />
                <GradientText>posizionamento su Google</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                L&apos;ottimizzazione SEO non è un&apos;operazione singola, ma
                un processo continuo che coinvolge la tecnica, i contenuti e
                l&apos;autorità esterna (link building). Offro servizi modulari
                in base alle tue esigenze.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {serviziSeo.map((servizio, i) => {
              const Icon = servizio.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.12}>
                  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight mb-4">
                      {servizio.title}{" "}
                      <GradientText>{servizio.highlight}</GradientText>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {servizio.description}
                    </p>
                    <ul className="space-y-4 mt-auto">
                      {servizio.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-slate-900">
                              {item.title}
                            </strong>{" "}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------- IL MIO METODO -------------------------- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll from="left">
            <MonoLabel>_ il mio metodo</MonoLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Trasparenza e <br />
              <GradientText>Risultati Misurabili</GradientText>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Con me, non riceverai solo un report alla fine. La collaborazione
              è costante, basata su dati e obiettivi chiari. Ogni passo è
              tracciato e condiviso con te per garantire la massima
              trasparenza.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Obiettivi SMART:",
                  text: "Definiamo insieme obiettivi misurabili (es. aumento del traffico organico del 20%, incremento delle conversioni del 10%) con tempistiche realistiche.",
                },
                {
                  title: "Reportistica Trasparente:",
                  text: "Accesso costante ai dati di Google Analytics e Search Console. Riceverai report mensili chiari e concisi sui risultati raggiunti.",
                },
                {
                  title: "Consulenza Continua:",
                  text: "La SEO cambia. Resto il tuo punto di riferimento per l'implementazione degli aggiornamenti algoritmici e per l'evoluzione della tua strategia.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">{item.title}</strong>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll from="right" delay={0.2}>
            <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 pointer-events-none" />
              <div className="relative space-y-8">
                {statistiche.map((stat, i) => (
                  <div key={i}>
                    <div className="text-5xl md:text-6xl font-black text-cyan-300 leading-none mb-2">
                      {stat.value}
                    </div>
                    <div className="text-base md:text-lg opacity-90">
                      {stat.label}
                    </div>
                    {i < statistiche.length - 1 && (
                      <div className="mt-8 pt-8 border-t border-white/10" />
                    )}
                  </div>
                ))}
              </div>
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
              <MonoLabel>_ ultimo passo</MonoLabel>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Pronto a smettere di essere <br />
                <GradientText>invisibile?</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Smetti di perdere clienti che cercano attivamente i tuoi
                servizi. Investi nella SEO per costruire una fonte di traffico
                costante e duratura per il tuo business.{" "}
                <strong className="text-slate-900">
                  Il momento giusto è adesso.
                </strong>
              </p>

              {/* 3 punti */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {puntiFinali.map((item, i) => (
                  <RevealOnScroll key={i} delay={i * 0.1}>
                    <div className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-blue-50/50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all">
                      <span className="text-2xl sm:text-3xl">{item.icon}</span>
                      <span className="text-sm text-slate-700 sm:text-center font-medium">
                        {item.text}{" "}
                        {item.highlight && (
                          <strong className="text-slate-900">
                            {item.highlight}
                          </strong>
                        )}{" "}
                        {item.text2}
                      </span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll delay={0.3}>
                <Link
                  href="/listini/ottimizzazione-seo-prezzi"
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200/70 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
                >
                  <TrendingUp className="w-5 h-5" />
                  Vedi il listino prezzi per la SEO
                </Link>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}