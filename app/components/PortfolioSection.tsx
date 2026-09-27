import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    image: "/images/italymac.webp",
    title: "ItalyOnly.it",
    description:
      "Progetto nato per aiutare i piccoli produttori a vendere online con una piattaforma E-Commerce Italiana ottimizzata.",
    href: "/portfolio/italyonly-it",
  },
  {
    image: "/images/roch_gebus.webp",
    title: "Strategia SEO Rochgebus.it",
    description:
      "Ottimizzazione SEO completa per conquistare le prime posizioni su Google e aumentare le richieste di contatto.",
    href: "/portfolio/case-study-seo-roch-gebus",
  },
  {
    image: "/images/poliambulatorio.webp",
    title: "Poliambulatorio Pontalpino",
    description:
      "Realizzazione del sito web istituzionale, focalizzato sulla chiarezza delle informazioni e la facilità di navigazione.",
    href: "/portfolio/case-study-poliambulatorio-pontalpino",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
              _ portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              I miei lavori recenti
            </h2>
            <Link
              href="/portfolio"
              className="inline-block bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-lg border border-yellow-500/40 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Scopri altri lavori ➔
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <Link
                href={project.href}
                className="group block bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}