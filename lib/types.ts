// lib/types.ts

export type ShowIn = 'blog' | 'portfolio';
export type ArticleType = 'blog' | 'case-study';

export interface PortfolioResult {
  label: string;
  value: string;
}

export interface MetaBoxItem {
  emoji: string;
  label: string;
  value: string;
}

export interface CtaFooter {
  emoji?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaEmoji?: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  excerpt: string;
  readingTime: string;
  showIn: ShowIn[];
  // Nuovi campi
  articleType?: ArticleType;
  categoryEmoji?: string;
  metaBox?: MetaBoxItem[];
  ctaFooter?: CtaFooter;
  // Campi portfolio
  client?: string;
  year?: string;
  services?: string[];
  results?: PortfolioResult[];
}

export interface Post extends PostMeta {
  content: string;
}