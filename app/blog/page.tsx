// app/blog/page.tsx
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import BlogCard from './components/BlogCard';
import RevealOnScroll from '@/app/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Blog | Studio Web DP',
  description: 'Approfondimenti, consigli e strategie per il tuo business online.',
  alternates: { canonical: 'https://studiowebdp.it/blog' },
  openGraph: {
    title: 'Blog - Studio Web DP',
    description: 'Approfondimenti, consigli e strategie per il tuo business online.',
    url: 'https://studiowebdp.it/blog',
    siteName: 'Stefano De Pasqual',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts('blog');

  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-12 h-[3px] bg-orange-500"></span>
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                Blog
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Consigli e strategie per il{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                tuo business online.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Approfondimenti, guide pratiche e case study per aiutarti a crescere nel digitale.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Griglia Post */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">Nessun articolo pubblicato.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <RevealOnScroll key={post.slug} delay={i * 0.1}>
                  <BlogCard post={post} />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}