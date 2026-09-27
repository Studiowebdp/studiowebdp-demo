import Link from "next/link";
import {
  Clock,
  User,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import GradientText from "@/app/components/GradientText";
import MonoLabel from "@/app/components/MonoLabel";
import PricingTableManutenzione from "./components/PricingTableManutenzione";
import InterventiSpot from "./components/InterventiSpot";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const vantaggi = [
  {
    icon: Clock,
    title: "Ore con",
    highlight: "Roll-over",
    text: "Le ore non usate si accumulano fino a 60 giorni",
  },
  {
    icon: User,
    title: "Contatto",
    highlight: "Diretto",
    text: "Parli sempre con me, zero intermediari o ticket anonimi",
  },
  {
    icon: Bot,
    title: "Pronto per",
    highlight: "l'AI",
    text: "Ottimizzazione semantica per ChatGPT e Google AI",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function ManutenzionePage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <MonoLabel>_ continuità e sicurezza</MonoLabel>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Manutenzione WordPress:
            <br />
            <TypewriterText
              strings={[
                "zero problemi tecnici.",
                "massima velocità e sicurezza.",
                "backup cloud garantiti.",
                "supporto diretto senza attese.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Un sito web non aggiornato perde velocità, subisce attacchi
              hacker e rischia di rompersi a ogni aggiornamento server. I miei
              piani di gestione proattiva ti garantiscono{" "}
              <strong className="text-slate-900">
                massima sicurezza, backup giornalieri e prestazioni eccellenti
              </strong>
              , seguiti direttamente da uno sviluppatore senior con oltre 15
              anni di esperienza.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------- METODO & VANTAGGI ---------------------- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <MonoLabel>_ metodo e vantaggi</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Perché affidare la gestione a{" "}
                <GradientText>Studio Web DP</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A differenza dei grandi call center o dei servizi automatizzati
                a basso costo, il tuo sito viene gestito personalmente da{" "}
                <strong className="text-slate-900">me</strong>. Ho introdotto
                garanzie reali studiate per valorizzare ogni singolo euro del
                tuo investimento.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-3 gap-5">
            {vantaggi.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="flex sm:flex-col items-center gap-3 sm:gap-4 bg-blue-50/50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left sm:text-center">
                      <p className="text-base font-bold text-slate-900 mb-1">
                        {item.title}{" "}
                        <GradientText>{item.highlight}</GradientText>
                      </p>
                      <p className="text-sm text-slate-600 leading-snug">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------- PIANI MANUTENZIONE ------------------------- */}
      <section
        id="piani-manutenzione"
        className="py-20 md:py-24 bg-slate-50 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ tariffe trasparenti</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                4 Piani di manutenzione{" "}
                <GradientText>su misura per te</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dalla protezione minima indispensabile fino allo sviluppo
                continuo con ore di supporto e ottimizzazione per i motori AI.{" "}
                <strong className="text-slate-900">
                  Nessun vincolo a lungo termine, disdici quando vuoi.
                </strong>
              </p>
            </div>
          </RevealOnScroll>

          <PricingTableManutenzione />
        </div>
      </section>

      {/* --------------------- INTERVENTI SPOT --------------------------- */}
      <section
        id="emergenze-spot"
        className="py-20 md:py-24 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <MonoLabel>_ interventi singoli</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Hai un&apos;emergenza o cerchi un{" "}
                <GradientText>intervento spot?</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Se non hai un piano attivo ma hai bisogno di risolvere un blocco
                immediato, posso intervenire con tariffe chiare e trasparenti a
                prestazione singola.
              </p>
            </div>
          </RevealOnScroll>

          <InterventiSpot />
        </div>
      </section>

      {/* ------------------------- CTA FINALE ----------------------------- */}
      <section
        id="contattami"
        className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,124,240,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <MonoLabel>
              <span className="text-cyan-300">_ il tuo prossimo passo</span>
            </MonoLabel>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Devi ancora realizzare o rinnovare <br />
              <TypewriterText
                strings={[
                  "il tuo sito web?",
                  "il tuo e-commerce?",
                  "la tua presenza online?",
                  "il tuo progetto digitale?",
                ]}
                typeSpeed={50}
                backSpeed={30}
                className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
              />
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Se oltre alla manutenzione desideri realizzare un{" "}
              <strong className="text-white">
                nuovo sito web professionale
              </strong>
              , aprire un <strong className="text-white">e-commerce</strong> o
              effettuare un{" "}
              <strong className="text-white">redesign completo</strong>,
              consulta il listino prezzi principale per scoprire tutte le
              soluzioni chiavi in mano.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Link
              href="/listini/prezzi-siti-web-e-ecommerce"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
            >
              <Sparkles className="w-5 h-5" />
              Vai al Listino Siti Web & E-Commerce
              <ArrowRight className="w-5 h-5" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}