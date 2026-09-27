import RevealOnScroll from "./RevealOnScroll";

const steps = [
  {
    number: "01.",
    title: "Analisi e Strategia",
    description:
      "Ogni progetto parte dall'ascolto. Analizzo i tuoi obiettivi e il tuo mercato per definire una strategia digitale efficace e personalizzata.",
  },
  {
    number: "02.",
    title: "Design e Sviluppo",
    description:
      "Trasformo la strategia in un'esperienza visiva unica. Realizzo il tuo sito WordPress curando ogni dettaglio grafico, tecnico e di usabilità.",
  },
  {
    number: "03.",
    title: "Ottimizzazione",
    description:
      "Il lancio è solo l'inizio. Ottimizzo il tuo sito per la SEO e le performance, affiancandoti come referente unico per la tua crescita.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
              _ il mio processo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Come lavoro per garantirti{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                il massimo risultato
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} delay={i * 0.15}>
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 h-full">
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-600 bg-clip-text text-transparent leading-none mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}