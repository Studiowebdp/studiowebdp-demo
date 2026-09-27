import {
  Rocket,
  Target,
  Settings,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Mail,
  TrendingUp,
} from "lucide-react";
import FaqAccordion, { type FAQItem } from "@/app/components/FaqAccordion";
import TypewriterText from "@/app/components/TypewriterText";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import SplitText from "@/app/components/SplitText";

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

const vantaggiWordPress = [
  {
    icon: TrendingUp,
    title: "Sito Scalabile",
    description:
      "Il tuo sito non è un elemento statico: è costruito per crescere insieme alla tua attività.",
  },
  {
    icon: Target,
    title: "User Experience Su Misura",
    description:
      "Progetto ogni pagina per guidare l'utente verso l'azione desiderata.",
  },
  {
    icon: Settings,
    title: "Piena Autonomia",
    description:
      "Ti consegno un sito che potrai gestire facilmente nelle sue parti principali.",
  },
  {
    icon: ShieldCheck,
    title: "Sicurezza e Affidabilità",
    description: "Standard di protezione elevati e aggiornamenti costanti.",
  },
];

const performanceMetrics = [
  { label: "First Contentful Paint (FCP)", value: "0,6 s", status: "Ottimo" },
  { label: "Largest Contentful Paint (LCP)", value: "0,7 s", status: "Ottimo" },
  { label: "Speed Index", value: "0,8 s", status: "Ottimo" },
  { label: "Total Blocking Time (TBT)", value: "0 ms", status: "Perfetto" },
  { label: "Cumulative Layout Shift (CLS)", value: "0,02", status: "Stabile" },
];

const faqs: FAQItem[] = [
  {
    question: "La distanza geografica è un ostacolo?",
    answer:
      "Assolutamente no. Il lavoro digitale abbatte i confini. Gestisco progetti in tutta Italia utilizzando strumenti di video-call e gestione task che rendono la distanza impercettibile.",
  },
  {
    question: "Come comunicheremo durante il lavoro?",
    answer:
      "Preferisco la chiarezza: avrai un canale di comunicazione diretto con me (WhatsApp o Email) e avremo dei check programmati tramite video-call. Sarai sempre aggiornato sullo stato avanzamento lavori.",
  },
  {
    question: "Posso seguire lo sviluppo del sito?",
    answer:
      "Certo. Lavoriamo in sinergia: ti fornirò un link di anteprima per testare il sito mentre lo costruisco, così potrai vedere in tempo reale la forma che sta prendendo il tuo progetto.",
  },
  {
    question: "Quanto tempo occorre per realizzare un sito?",
    answer:
      "Per un sito professionale o una landing page, servono solitamente 3-5 settimane. Per siti complessi, le tempistiche si attestano tra le 6 e le 12 settimane, in base al numero di pagine e funzionalità.",
  },
  {
    question: "Realizzi siti web multilingua?",
    answer:
      "Sì, progetto il sito con le migliori tecnologie di traduzione che ti permetteranno di gestire i contenuti in diverse lingue in modo semplice e ottimizzato SEO.",
  },
  {
    question: "Il sito sarà di mia proprietà?",
    answer: (
      <>
        Certamente. La proprietà intellettuale, i testi, le immagini e tutti i
        contenuti del sito sono tuoi al 100%.
        <br />
        <br />
        Per quanto riguarda l&apos;infrastruttura (l&apos;hosting), offro una
        gestione professionale su piani ad alte prestazioni (SiteGround GoGeek).
        Questo ti garantisce una velocità e una sicurezza che i piani hosting
        economici standard non possono offrire. Questa configurazione viene
        concordata in fase di contratto: il mio obiettivo è darti il massimo
        risultato tecnico, ma avrai sempre la totale libertà di richiedere una
        migrazione su un tuo hosting dedicato qualora in futuro preferissi
        gestire l&apos;infrastruttura autonomamente.
      </>
    ),
  },
  {
    question: "Ci sono costi fissi dopo la consegna?",
    answer:
      "I costi vivi sono il dominio e l'hosting. Il servizio di manutenzione (aggiornamenti di sicurezza, backup, plugin) è incluso per il primo anno; dopo, potrai decidere se rinnovarlo con me o gestire la parte tecnica autonomamente.",
  },
  {
    question: "Se ho già un sito che non funziona, mi aiuti?",
    answer:
      'Certamente. Offro un servizio di "pronto soccorso" e restyling per siti WordPress esistenti che presentano problemi tecnici o di velocità.',
  },
  {
    question: "Offrite servizi di posizionamento SEO?",
    answer: (
      <>
        Sì, ma con un approccio moderno. Oggi la SEO non si basa più solo sulle
        &quot;parole chiave&quot;, ma sulla qualità dell&apos;esperienza utente.
        <br />
        <br />
        Il mio lavoro si concentra sui <strong>Core Web Vitals</strong>{" "}
        (velocità, stabilità visiva e interattività) per garantire che il tuo
        sito rispetti i parametri tecnici che Google impone per posizionarsi in
        alto. Inoltre, progetto l&apos;architettura delle informazioni e i
        contenuti per soddisfare l&apos;intento di ricerca dell&apos;utente e
        gli standard <strong>E-E-A-T</strong> (Esperienza, Competenza,
        Autorevolezza e Affidabilità), che sono i pilastri fondamentali per i
        moderni motori di ricerca basati sull&apos;IA. Non ti prometto miracoli
        con le parole chiave, ma ti costruisco una solida base tecnica per
        essere premiato dagli algoritmi.
      </>
    ),
  },
  {
    question: "Come riceverò la fattura?",
    answer:
      "La fattura viene emessa automaticamente per ogni transazione e inviata al tuo cassetto fiscale o tramite il tuo intermediario di fatturazione elettronica.",
  },
  {
    question: "Chi si occupa dei testi e delle immagini del sito?",
    answer:
      "È una collaborazione. Io mi occupo di ottimizzare i testi in ottica SEO e formattarli graficamente. Per quanto riguarda i contenuti specifici (la storia del tuo brand, foto originali), sarò io a darti una guida chiara o a chiederti il materiale necessario per far sì che il sito parli davvero come te.",
  },
  {
    question: "Cosa succede se il design proposto non mi convince?",
    answer:
      "Il mio obiettivo è la tua piena soddisfazione. Prima di procedere allo sviluppo, definiamo insieme uno stile grafico chiaro. Se la bozza iniziale non ti convince, analizziamo i motivi e apportiamo le modifiche necessarie: lavoriamo finché non avrai tra le mani un sito che ti rappresenta al 100%.",
  },
  {
    question: "Il sito sarà ottimizzato per smartphone?",
    answer:
      'Assolutamente sì. Oggi la maggior parte del traffico arriva da mobile. Progetto il sito con approccio "mobile-first": ogni elemento sarà perfettamente leggibile e navigabile da smartphone, garantendo un\'esperienza impeccabile ovunque.',
  },
];

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

export default function SitiWebProfessionaliPage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <MonoLabel>_ siti web professionali a belluno</MonoLabel>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            <SplitText text="Realizzo siti web che non sono solo belli, ma" />
            <br />
            <span className="inline-block mt-2">
              <TypewriterText
                strings={[
                  "strumenti di business.",
                  "su misura per te.",
                  "veloci e performanti.",
                  "ottimizzati per vendere.",
                ]}
                className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
              />
            </span>
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Non una semplice vetrina, ma uno strumento di business. Progetto,
              sviluppo e posiziono il tuo sito WordPress per farti ottenere
              risultati concreti, con la garanzia di un unico interlocutore
              esperto.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.8}>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-200 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <Rocket className="w-5 h-5" />
              Richiedi un preventivo gratuito
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------- FILOSOFIA ------------------------------ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll from="left">
            <MonoLabel>_ la mia filosofia</MonoLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              L&apos;eccellenza di avere un{" "}
              <GradientText>referente unico.</GradientText>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Nessun passaggio di consegne a team esterni, nessun tutor junior a
              cui spiegare tutto da capo.
            </p>
            <ul className="space-y-4">
              {[
                "15 anni di esperienza nel settore digitale",
                "Supporto diretto: parli solo con chi lavora al tuo sito",
                "Focus sulle performance: non solo estetica, ma risultati",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll from="right" delay={0.2}>
            <div className="bg-slate-900 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 pointer-events-none" />
              <div className="relative">
                <div className="text-7xl font-black text-cyan-300 leading-none mb-3">
                  15+
                </div>
                <div className="text-lg opacity-90">Anni di esperienza</div>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-cyan-300">100</div>
                    <div className="opacity-70">Performance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-300">100</div>
                    <div className="opacity-70">SEO Score</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --------------------- VANTAGGI WORDPRESS ------------------------- */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ perché scegliere wordpress</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Cosa rende il tuo sito{" "}
                <GradientText>uno strumento di business</GradientText>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantaggiWordPress.map(({ icon: Icon, title, description }, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- PERFORMANCE ------------------------------- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll from="left">
            <MonoLabel>_ prestazioni e velocità</MonoLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Un sito che <GradientText>vola</GradientText> sui motori di
              ricerca
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Le prestazioni del tuo sito non sono solo una questione tecnica:
              influenzano l&apos;esperienza utente, il tasso di conversione e il
              posizionamento su Google.
            </p>

            <ul className="space-y-3">
              {performanceMetrics.map(({ label, value, status }, i) => (
                <RevealOnScroll
                  key={i}
                  delay={i * 0.05}
                  from="left"
                  distance={20}
                >
                  <li className="flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 border-l-4 border-blue-600 rounded-lg px-5 py-3.5 transition-colors">
                    <span className="text-sm md:text-base font-semibold text-slate-800">
                      {label}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono font-bold text-slate-900">
                        {value}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        ● {status}
                      </span>
                    </div>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>

            <RevealOnScroll delay={0.4}>
              <div className="mt-6 flex items-start gap-3 bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4">
                <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Accessibilità a 97/100:</strong> quei tre punti in meno
                  sono una scelta estetica consapevole.
                </p>
              </div>
            </RevealOnScroll>
          </RevealOnScroll>

          <RevealOnScroll from="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 to-cyan-100 blur-3xl opacity-60 rounded-full" />
              <div className="relative bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-blue-100/40 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
                    _pagespeed
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    mobile
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Performance", value: 100 },
                    { label: "Accessibilità", value: 97 },
                    { label: "Best Practice", value: 100 },
                    { label: "SEO", value: 100 },
                  ].map(({ label, value }, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-100 p-5 text-center"
                    >
                      <div className="text-4xl font-black text-emerald-500 leading-none mb-2">
                        {value}
                      </div>
                      <div className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------------- FAQ ----------------------------- */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <MonoLabel>_ faq</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Tutto quello che c&apos;è da sapere{" "}
                <GradientText>per iniziare insieme.</GradientText>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <FaqAccordion items={faqs} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------------- CTA ----------------------------- */}
      <section
        id="contatti"
        className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,124,240,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Hai ancora dei dubbi o vuoi un{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                consiglio personalizzato?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Non esitare a scrivermi. Sono qui per ascoltare le tue idee.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <a
              href="mailto:info@studiowebdp.it"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <Mail className="w-5 h-5" />
              Contattami ora
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}