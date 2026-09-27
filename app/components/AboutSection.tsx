import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* QUOTE BOX */}
          <RevealOnScroll from="left">
            <div className="relative bg-slate-900 rounded-3xl p-10 md:p-12 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 pointer-events-none" />
              <span className="absolute top-3 left-6 text-7xl md:text-8xl font-black text-cyan-400/20 leading-none select-none">
                &ldquo;
              </span>
              <p className="relative text-lg md:text-xl italic leading-relaxed mb-8 mt-6">
                Credo che un sito di successo nasca dall&apos;unione tra un design
                che emoziona e una tecnologia che converte. Il mio obiettivo è
                trasformare la tua visione in uno strumento di vendita
                instancabile.
              </p>
              <div className="relative">
                <span className="block text-xl md:text-2xl font-bold text-cyan-300">
                  Stefano De Pasqual
                </span>
                <span className="text-sm opacity-80">
                  Specialista WordPress &amp; E-commerce
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* TESTO + MINI CARD */}
          <RevealOnScroll from="right" delay={0.15}>
            <div>
              <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
                _ strategia
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
                Un partner strategico per il{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  tuo successo online
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-3xl shrink-0">🚀</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      WordPress Solido e Veloce
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Sviluppo su una base potente, garantendoti un sito sicuro
                      e facile da gestire.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-3xl shrink-0">💰</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      E-commerce che vendono
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Trasformo i visitatori in clienti grazie a store
                      ottimizzati per le conversioni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* SEZIONE FIDUCIA CENTRATA */}
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Proteggo la tua{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                identità digitale
              </span>{" "}
              e trasformo il tuo sito in uno strumento che lavora per te.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Gestisco ogni aspetto tecnico del tuo progetto WordPress,
              garantendoti la serenità di un sito sempre veloce, sicuro e pronto
              a generare nuove opportunità di business.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}