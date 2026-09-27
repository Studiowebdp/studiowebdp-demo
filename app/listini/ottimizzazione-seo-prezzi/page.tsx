import Link from "next/link";
import {
  TrendingUp,
  Calendar,
  User,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import GradientText from "@/app/components/GradientText";
import MonoLabel from "@/app/components/MonoLabel";
import PricingTableSeo from "./components/PricingTableSeo";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const vantaggi = [
  {
    icon: Calendar,
    title: "Piani Mensili &",
    highlight: "Flessibilità",
    text: "La SEO richiede continuità: puoi scegliere la flessibilità del canone mensile oppure acquistare più mesi insieme per consolidare il posizionamento.",
  },
  {
    icon: User,
    title: "Contatto Diretto",
    highlight: "con Me",
    text: "Parli direttamente con me (WhatsApp, telefono, video-call). Nessun intermediario, nessun tutor junior e nessun ticket con attese di 24 ore.",
  },
  {
    icon: Bot,
    title: "Pronto per",
    highlight: "l'Era AI",
    text: "Ottimizzazione tecnica per Google e semantica avanzata (E-E-A-T) per farti trovare anche dalle ricerche generative (AI Overviews, Perplexity e ChatGPT).",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function SeoPrezziPage() {
  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,240,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <MonoLabel>_ visibilità &amp; crescita costante</MonoLabel>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Piani SEO WordPress:
            <br />
            <TypewriterText
              strings={[
                "massima visibilità, zero vincoli.",
                "su misura per il tuo business.",
                "posizionamento costante su Google.",
                "pronti per le ricerche con AI.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.6}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Avere un sito web veloce è solo il primo passo: farsi trovare su
              Google da chi cerca i tuoi prodotti o servizi è ciò che genera
              contatti e vendite reali. Con i miei piani SEO porto la tua
              attività in cima alle ricerche, con il supporto diretto di un
              unico consulente esperto e la massima trasparenza sui costi.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------------------- METODO & TRASPARENZA ------------------- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <MonoLabel>_ metodo &amp; trasparenza</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Perché affidare la SEO a{" "}
                <GradientText>Studio Web DP</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A differenza dei servizi automatizzati o delle agenzie con
                ticket impersonali, il tuo posizionamento viene curato
                personalmente da <strong className="text-slate-900">me</strong>{" "}
                con una visione strategica a lungo termine per massimizzare il
                ritorno sull&apos;investimento.
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

      {/* ------------------------- GRIGLIA PREZZI ------------------------ */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <MonoLabel>_ tariffe trasparenti</MonoLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                4 Piani di posizionamento{" "}
                <GradientText>su misura per te</GradientText>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dalla visibilità locale per professionisti a Belluno e
                provincia, fino alla scalata per e-commerce e brand nazionali.
              </p>
            </div>
          </RevealOnScroll>

          {/* COMPONENTE CLIENT CON LE 4 CARD */}
          <PricingTableSeo />
        </div>
      </section>

      {/* ------------------------- CTA FINALE ---------------------------- */}
      <section
        id="contattami"
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,124,240,0.15),transparent_70%)] pointer-events-none" />
              <div className="relative">
                <MonoLabel>
                  <span className="text-cyan-300">_ non solo seo</span>
                </MonoLabel>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                  Devi ancora realizzare o rinnovare <br />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    il tuo sito web?
                  </span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Se oltre al posizionamento desideri realizzare un{" "}
                  <strong className="text-white">
                    nuovo sito web professionale
                  </strong>
                  , aprire un <strong className="text-white">e-commerce</strong>{" "}
                  o effettuare un{" "}
                  <strong className="text-white">redesign completo</strong>,
                  consulta il mio listino principale per scoprire tutte le
                  soluzioni chiavi in mano.
                </p>
                <Link
                  href="/listini/prezzi-siti-web-e-ecommerce"
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-0.5 border border-yellow-500/40"
                >
                  <Sparkles className="w-5 h-5" />
                  Vai al Listino Siti Web &amp; E-Commerce
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}