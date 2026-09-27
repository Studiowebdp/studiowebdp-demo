// app/portfolio/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllPortfolioProjects, getPostBySlug } from '@/lib/mdx';
import JsonLd from '@/app/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllPortfolioProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPostBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Portfolio - Studio Web DP`,
    description: project.description,
    alternates: {
      canonical: `https://studiowebdp.it/portfolio/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://studiowebdp.it/portfolio/${project.slug}`,
      images: [{ url: project.image }],
      type: 'article',
      publishedTime: project.date,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getPostBySlug(slug);
  if (!project) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `https://studiowebdp.it${project.image}`,
    datePublished: project.date,
    creator: {
      '@type': 'Person',
      name: project.author,
    },
    about: project.services,
  };

  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      <JsonLd data={jsonLd} />

      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/portfolio"
            className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-blue-600 uppercase hover:text-orange-500 transition-colors mb-6"
          >
            ← Torna al Portfolio
          </Link>

          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            {project.category && (
              <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                {project.category}
              </span>
            )}
            {project.year && (
              <span className="text-xs font-semibold text-slate-500">
                {project.year}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            {project.description}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 flex-wrap">
            <span>— {project.author}</span>
            <span>·</span>
            <time>
              {new Date(project.date).toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{project.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </section>

      {(project.client || project.year || project.services) && (
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="grid sm:grid-cols-3 gap-6 bg-slate-50 rounded-3xl p-8 border border-slate-100">
            {project.client && (
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  Cliente
                </span>
                <span className="text-base font-bold text-slate-900">
                  {project.client}
                </span>
              </div>
            )}
            {project.year && (
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  Anno
                </span>
                <span className="text-base font-bold text-slate-900">
                  {project.year}
                </span>
              </div>
            )}
            {project.services && project.services.length > 0 && (
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  Servizi
                </span>
                <span className="text-base font-bold text-slate-900">
                  {project.services.join(', ')}
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {project.results && project.results.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Risultati{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              ottenuti
            </span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-lg hover:shadow-blue-100/50 transition-all"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-none mb-3">
                  {result.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none
          prose-headings:text-slate-900 prose-headings:font-extrabold
          prose-a:text-blue-600 prose-a:no-underline prose-a:font-semibold
          hover:prose-a:text-orange-500 hover:prose-a:underline
          prose-strong:text-slate-900 prose-strong:font-bold
          prose-p:leading-relaxed prose-p:text-slate-600
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500
          prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-6
          prose-blockquote:rounded-r-xl prose-blockquote:not-italic
          prose-code:text-blue-700 prose-code:bg-blue-50
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-code:before:content-none prose-code:after:content-none
        ">
          <MDXRemote
  source={project.content}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  }}
/>
        </div>
      </article>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Ti piace questo{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              progetto?
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Possiamo realizzare qualcosa di simile per la tua azienda.
          </p>
          <a
            href="/#contattami"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-7 py-4 rounded-lg shadow-lg shadow-yellow-200/60 border border-yellow-500/40 transition-all hover:-translate-y-0.5"
          >
            Richiedi preventivo ➔
          </a>
        </div>
      </section>
    </main>
  );
}