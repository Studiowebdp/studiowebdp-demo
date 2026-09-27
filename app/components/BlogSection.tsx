import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const posts = [
  {
    image: "/images/ia-web-design.webp",
    title: "L'Impatto dell'Intelligenza Artificiale sul Web Design: Guida Strategica",
    href: "/blog/ia-nel-web-design",
  },
  {
    image: "/images/Rebuilder-foto-sito-per-lavoro-SEO.webp",
    title: "Rebuilder: Sistemazione visibilità inesistente",
    href: "/blog/case-study-seo-rebuilder",
  },
  {
    image: "/images/semagest.webp",
    title: "Case Study Semagest: Sviluppo sito monopagina",
    href: "/blog/case-study-semagest",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
              _ approfondimenti
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Consigli e strategie per il{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                tuo business online
              </span>
            </h2>
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-lg border border-yellow-500/40 shadow-sm transition-all hover:-translate-y-0.5 uppercase text-sm tracking-wide"
            >
              Vai al blog ➔
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <Link
                href={post.href}
                className="group block bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}