// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import JsonLd from '@/app/components/JsonLd';
import { ProjectMetaBox, ProjectMetaItem } from '@/app/components/mdx/ProjectMetaBox';
import { CaseStudyFooter } from '@/app/components/mdx/CaseStudyFooter';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Studio Web DP`,
    description: post.description,
    alternates: { canonical: `https://studiowebdp.it/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://studiowebdp.it/blog/${post.slug}`,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://studiowebdp.it${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Studio Web DP',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studiowebdp.it/images/LogoStudiowebdp.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://studiowebdp.it/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-white text-slate-700 font-sans overflow-x-hidden">
      <JsonLd data={jsonLd} />

      {/* Hero Articolo */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-blue-600 uppercase hover:text-orange-500 transition-colors mb-6"
          >
            ← Torna al Blog
          </Link>

          {/* Categoria con emoji */}
          {(post.categoryEmoji || post.category) && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 flex items-center justify-center gap-2">
              {post.categoryEmoji && (
                <span className="text-2xl align-middle">{post.categoryEmoji}</span>
              )}
              <span>{post.category}</span>
            </p>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 flex-wrap">
            <span>— {post.author}</span>
            <span>·</span>
            <time>
              {new Date(post.date).toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Immagine copertina */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
  <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-xl bg-slate-50">
    <Image
      src={post.image}
      alt={post.title}
      fill
      className="object-contain"
      priority
      sizes="(max-width: 1024px) 100vw, 1024px"
    />
  </div>
</section>

      {/* Contenuto MDX */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        {/* Box metadati (dal frontmatter) */}
        {post.metaBox && post.metaBox.length > 0 && (
          <div className="not-prose my-10 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {post.metaBox.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl shrink-0 leading-none mt-1">
                    {item.emoji}
                  </span>
                  <div>
                    <strong className="block text-xs uppercase tracking-widest text-slate-900 font-bold mb-1">
                      {item.label}
                    </strong>
                    <span className="block text-sm md:text-base text-slate-600 leading-snug">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contenuto MDX principale */}
        <div className="prose prose-slate prose-lg max-w-none
  prose-headings:text-slate-900 prose-headings:font-extrabold
  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
  prose-a:text-blue-600 prose-a:no-underline prose-a:font-semibold
  hover:prose-a:text-orange-500 hover:prose-a:underline
  prose-strong:text-slate-900 prose-strong:font-bold
  prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:text-[1.125rem] prose-p:my-6
  prose-ul:my-8 prose-ul:space-y-3
  prose-ol:my-8 prose-ol:space-y-3
  prose-li:text-slate-700 prose-li:leading-relaxed
  prose-blockquote:border-l-4 prose-blockquote:border-blue-500
  prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-8
  prose-blockquote:rounded-r-xl prose-blockquote:not-italic
  prose-blockquote:text-slate-700 prose-blockquote:text-lg
  prose-code:text-blue-700 prose-code:bg-blue-50
  prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
  prose-code:before:content-none prose-code:after:content-none
  prose-table:my-8 prose-table:text-base prose-table:w-full
  prose-th:bg-slate-100 prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:text-slate-900
  prose-td:p-4 prose-td:border-t prose-td:border-slate-100 prose-td:align-top prose-td:text-slate-700
  prose-tr:border-b prose-tr:border-slate-100
  prose-hr:my-16 prose-hr:border-slate-200
">
          <MDXRemote
  source={post.content}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  }}
/>
        </div>

        {post.ctaFooter?.ctaHref && (
  <CaseStudyFooter
    emoji={post.ctaFooter.emoji}
    title={post.ctaFooter.title}
    description={post.ctaFooter.description}
    ctaText={post.ctaFooter.ctaText}
    ctaHref={post.ctaFooter.ctaHref}
    ctaEmoji={post.ctaFooter.ctaEmoji}
  />
)}
      </article>
    </main>
  );
}