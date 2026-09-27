import Link from "next/link";
import {
  Rocket,
  TrendingUp,
  Target,
  Settings,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import FaqAccordion, { type FAQItem } from "@/app/components/FaqAccordion";
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

const pilastriEcommerce = [
  {
    icon: TrendingUp,
    title: "Negozio Scalabile",
    description:
      "Il tuo e-commerce non è statico: è costruito per crescere insieme al tuo catalogo e ai tuoi volumi di vendita, senza rallentamenti o limiti tecnici.",
  },
  {
    icon: Target,
    title: "Percorso d'Acquisto Ottimizzato",
    description:
      "Progetto ogni pagina, dalla scheda prodotto al checkout, per ridurre l'abbandono del carrello e massimizzare il tasso di conversione.",
  },
  {
    icon: Settings,
    title: "Piena Autonomia",
    description:
      "Non sarai schiavo di un tecnico. Ti consegno un negozio che potrai gestire facilmente — prodotti, ordini, prezzi — in totale autonomia.",
  },
  {
    icon: ShieldCheck,
    title: "Sicurezza nei Pagamenti",
    description:
      "Integrazione di gateway di pagamento certificati e standard di protezione elevati, per garantire transazioni sicure a te e ai tuoi clienti.",
  },
];

const faqs: FAQItem[] = [
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
      "Assolutamente sì. La maggior parte degli acquisti online avviene da mobile: progetto il checkout e ogni scheda prodotto con approccio \"mobile-first\" per garantire un'esperienza d'acquisto fluida su ogni dispositivo.",
  },
  {
    question: "Il negozio sarà di mia proprietà?",
    answer: (
      <>
        Certamente. La proprietà intellettuale, il catalogo prodotti, i testi,
        le immagini e tutti i contenuti sono tuoi al 100%.
        <br />
        <br />
        Per quanto riguarda l&apos;infrastruttura (l&apos;hosting), offro una
        gestione professionale su piani ad alte prestazioni, pensati per
        garantire velocità di caricamento e stabilità anche nei picchi di
        traffico. Se si sceglie la gestione con la piattaforma Italiana con cui
        collaboro l&apos;hosting non potrà mai essere di proprietà dato che il
        costo è ad abbonamento. Queste configurazioni vengono concordate in
        fase di contratto.
      </>
    ),
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
    answer: (
      <>
        Sì, con un approccio specifico per la vendita online. Ottimizzo schede
        prodotto e categorie per intercettare gli utenti pronti
        all&apos;acquisto, curando i <strong>Core Web Vitals</strong> (velocità,
        stabilità, interattività) che Google richiede per premiare gli
        e-commerce in classifica.
        <br />
        <br />
        Progetto inoltre l&apos;architettura del catalogo seguendo gli standard{" "}
        <strong>E-E-A-T</strong> (Esperienza, Competenza, Autorevolezza e
        Affidabilità), fondamentali per costruire fiducia sia con gli utenti che
        con i motori di ricerca basati sull&apos;IA.
      </>
    ),
  },
  {
    question: "Come riceverò la fattura?",
    answer:
      "La fattura viene emessa automaticamente per ogni transazione e inviata al tuo cassetto fiscale o tramite il tuo intermediario di fatturazione elettronica.",
  },
  {
    question: "Chi si occupa del caricamento dei prodotti?",
    answer: (
      <>
        È una collaborazione. Io mi occupo di ottimizzare le schede prodotto in
        ottica SEO e di formattarle graficamente. Per quanto riguarda i
        contenuti specifici (foto originali, descrizioni di dettaglio),
        dovranno essere forniti dal cliente il quale si assume anche la
        responsabilità di quanto pubblicato.
        <br />
        È possibile anche richiedere la completa realizzazione, anche inserendo
        i prodotti da concordare in fase di preventivo.
      </>
    ),
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
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function EcommercePage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <MonoLabel>_ e-commerce a belluno</MonoLabel>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Realizzo negozi online che non sono solo belli, ma{" "}
            <TypewriterText
              strings={[
                "progettati per vendere.",
                "veloci e sicuri.",
                "pronti a scalare.",
                "ottimizzati per convertire.",
              ]}
              typeSpeed={60}
              backSpeed={30}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Non un semplice catalogo digitale, ma una vera macchina da
              vendita. Progetto, sviluppo e ottimizzo il tuo e-commerce per
              trasformare i visitatori in clienti, con un unico consulente
              esperto al tuo fianco dall&apos;idea al lancio.
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

      {/* ------------------------- FILOSOFIA ------------------------------ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll from="left">
            <MonoLabel>_ la mia filosofia</MonoLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              L&apos;eccellenza di avere un{" "}
              <GradientText>referente unico.</GradientText>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Un e-commerce di successo non nasce da un semplice
              &quot;montaggio&quot; di un tema pronto, ma da una strategia di
              vendita costruita su misura. Lavorando con me, hai la certezza di
              avere un consulente esperto che segue il tuo progetto
              dall&apos;analisi del mercato fino al lancio e
              all&apos;ottimizzazione continua delle conversioni.
            </p>
            <ul className="space-y-4">
              {[
                "15 anni di esperienza in e-commerce e vendita online",
                "Supporto diretto: parli solo con chi lavora al tuo negozio",
                "Focus sulle vendite: non solo estetica, ma conversioni reali",
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
                <div className="text-lg opacity-90">
                  Anni di esperienza e-commerce
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------- PILASTRI ------------------------------- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ perché investire in un e-commerce</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Cosa rende il tuo negozio online{" "}
                <GradientText>una vera macchina da vendita</GradientText>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilastriEcommerce.map(({ icon: Icon, title, description }, i) => (
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

      {/* ------------------------------- FAQ ----------------------------- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <MonoLabel>_ domande frequenti</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Tutto quello che c&apos;è da sapere{" "}
                <GradientText>per lanciare il tuo negozio online.</GradientText>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <FaqAccordion items={faqs} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------------- CTA ----------------------------- */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,124,240,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Pronto a trasformare il tuo e-commerce in un{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                successo?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Che tu abbia bisogno di un consiglio strategico, di ottimizzare il
              tuo negozio online o di chiarire qualche dubbio tecnico, sono qui
              per darti una mano. Insieme troveremo la soluzione migliore per il
              tuo progetto.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link
              href="/#contattami"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              Contattami ora ➔
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}