import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

const services = [
  {
    badge: "Più richiesto",
    title: "Realizzazione",
    highlight: "Siti Web",
    description:
      "Realizzo siti vetrina e landing page ad alte prestazioni, ottimizzati per convertire i visitatori in contatti reali.",
    href: "/servizi/siti-web-professionali-a-belluno",
  },
  {
    badge: "Specializzazione",
    title: "Realizzazione",
    highlight: "E-commerce",
    description:
      "Creo il tuo negozio online focalizzato sulle vendite, con sistemi di pagamento sicuri e gestione semplificata.",
    href: "/servizi/e-commerce-belluno",
  },
  {
    badge: "Visibilità",
    title: "Consulenza",
    highlight: "SEO",
    description:
      "Scalo le posizioni su Google per intercettare i tuoi clienti ideali quando cercano i tuoi prodotti o servizi.",
    href: "/servizi/ottimizzazione-seo-a-belluno",
  },
  {
    badge: "Assistenza",
    title: "Manutenzione",
    highlight: "WordPress",
    description:
      "Mantengo il tuo sito sicuro, aggiornato e veloce. Mi occupo io di tutto il lato tecnico per lasciarti sereno.",
    href: "/servizi/manutenzione-wordpress",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
              _ cosa posso fare per te
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Servizi professionali per{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                il tuo business online
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <span className="self-start inline-block bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-5 transition-colors">
                  {service.badge}
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-slate-900 leading-tight mb-4">
                  {service.title} <br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    {service.highlight}
                  </span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-block text-center bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold text-sm px-5 py-3 rounded-lg border border-yellow-500/40 shadow-sm transition-all"
                >
                  Scopri di più ➔
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}