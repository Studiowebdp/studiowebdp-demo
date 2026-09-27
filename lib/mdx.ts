// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import {
  Post,
  PostMeta,
  ShowIn,
  PortfolioResult,
  ArticleType,
  MetaBoxItem,
  CtaFooter,
} from './types';

const contentDirectory = path.join(process.cwd(), 'content');
const postsDirectory = path.join(contentDirectory, 'posts');

/**
 * Legge TUTTI i file .mdx da content/posts/ e restituisce i metadati
 * ordinati dal più recente. Funzione interna.
 */
function getAllPostsRaw(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file: string) => file.endsWith('.mdx'))
    .map((file: string): PostMeta => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: (data.title as string) || '',
        description: (data.description as string) || '',
        date: (data.date as string) || '',
        author: (data.author as string) || 'Stefano De Pasqual',
        category: (data.category as string) || 'Blog',
        tags: (data.tags as string[]) || [],
        image: (data.image as string) || '/images/placeholder.webp',
        excerpt:
          (data.excerpt as string) ||
          content.slice(0, 160).replace(/\n/g, ' ') + '...',
        readingTime: stats.text,
        showIn: (data.showIn as ShowIn[]) || ['blog'],
        // Campi opzionali per articoli case-study
        articleType: (data.articleType as ArticleType) || 'blog',
        categoryEmoji: (data.categoryEmoji as string) || undefined,
        metaBox: (data.metaBox as MetaBoxItem[]) || undefined,
        ctaFooter: (data.ctaFooter as CtaFooter) || undefined,
        // Campi opzionali del portfolio
        client: data.client as string | undefined,
        year: data.year as string | undefined,
        services: data.services as string[] | undefined,
        results: data.results as PortfolioResult[] | undefined,
      };
    })
    .sort((a: PostMeta, b: PostMeta) => (a.date < b.date ? 1 : -1));
}

/**
 * Ritorna solo gli articoli destinati al Blog.
 */
export function getAllPosts(): PostMeta[] {
  return getAllPostsRaw().filter((post) => post.showIn.includes('blog'));
}

/**
 * Ritorna solo i progetti destinati al Portfolio.
 */
export function getAllPortfolioProjects(): PostMeta[] {
  return getAllPostsRaw().filter((post) => post.showIn.includes('portfolio'));
}

/**
 * Legge un singolo post tramite slug (con contenuto MDX completo).
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: (data.title as string) || '',
    description: (data.description as string) || '',
    date: (data.date as string) || '',
    author: (data.author as string) || 'Stefano De Pasqual',
    category: (data.category as string) || 'Blog',
    tags: (data.tags as string[]) || [],
    image: (data.image as string) || '/images/placeholder.webp',
    excerpt: (data.excerpt as string) || '',
    readingTime: stats.text,
    showIn: (data.showIn as ShowIn[]) || ['blog'],
    articleType: (data.articleType as ArticleType) || 'blog',
    categoryEmoji: (data.categoryEmoji as string) || undefined,
    metaBox: (data.metaBox as MetaBoxItem[]) || undefined,
    ctaFooter: (data.ctaFooter as CtaFooter) || undefined,
    client: data.client as string | undefined,
    year: data.year as string | undefined,
    services: data.services as string[] | undefined,
    results: data.results as PortfolioResult[] | undefined,
    content,
  };
}