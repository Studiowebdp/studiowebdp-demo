// app/portfolio/page.tsx
import { Metadata } from 'next';
import { getAllPortfolioProjects } from '@/lib/mdx';
import PortfolioCard from './components/PortfolioCard';
import RevealOnScroll from '@/app/components/RevealOnScroll';
import JsonLd from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: 'Portfolio | Studio Web DP',
  description:
    'Case study e progetti realizzati: siti web, e-commerce e strategie SEO per professionisti, PMI e startup.',
  alternates: { canonical: 'https://studiowebdp.it/portfolio' },
  openGraph: {
    title: 'Portfolio - Studio Web DP',
    description:
      'Case study e progetti realizzati: siti web, e-commerce e strategie SEO.',
    url: 'https://studiowebdp.it/portfolio',
    siteName: 'Stefano De Pasqual',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function PortfolioPage() {
  const projects = getAllPortfolioProjects();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://studiowebdp.it/portfolio/#webpage',
        url: 'https://studiowebdp.it/portfolio/',
        name: 'Portfolio - Studio Web DP',
        isPartOf: { '@id': 'https://studiowebdp.it/#website' },
        inLanguage: 'it-IT',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://studiowebdp.it/portfolio/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: { '@id': 'https://studiowebdp.it', name: 'Home' },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': 'https://studiowebdp.it/portfolio/',
              name: 'Portfolio',
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-12 h-[3px] bg-orange-500"></span>
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                Portfolio
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              I miei{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                lavori recenti
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Case study e progetti realizzati per professionisti, PMI e
              startup. Ogni progetto racconta una storia di crescita digitale.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          {projects.length === 0 ? (
            <p className="text-center text-slate-500">
              Nessun progetto pubblicato.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <RevealOnScroll key={project.slug} delay={i * 0.1}>
                  <PortfolioCard project={project} />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Vuoi un progetto come{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                questi?
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Raccontami la tua idea: ti risponderò entro 24 ore per analizzare
              insieme il tuo progetto.
            </p>
            <a
              href="/#contattami"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-7 py-4 rounded-lg shadow-lg shadow-yellow-200/60 border border-yellow-500/40 transition-all hover:-translate-y-0.5"
            >
              Richiedi preventivo ➔
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}