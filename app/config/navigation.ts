import type { LucideIcon } from "lucide-react";
import { Home, Briefcase, DollarSign, FolderOpen, BookOpen } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  href: string;
  /** Se presente, mostra un sottomenu al hover/click */
  children?: NavItem[];
  /** Apre in nuova tab */
  external?: boolean;
  /** Evidenzia la voce (es. CTA) */
  highlight?: boolean;
};

/* -------------------------------------------------------------------------- */
/*                          HEADER — MENU PRINCIPALE                          */
/* -------------------------------------------------------------------------- */

export const mainNavigation: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "SERVIZI",
    href: "/servizi",
    children: [
      {
        label: "Siti Web",
        href: "/servizi/siti-web-professionali-a-belluno",
      },
      {
        label: "E-Commerce",
        href: "/servizi/e-commerce-belluno",
      },
      {
        label: "Redesign",
        href: "/servizi/ristrutturo-il-tuo-sito-a-belluno",
      },
      {
        label: "SEO",
        href: "/servizi/ottimizzazione-seo-a-belluno",
      },
    ],
  },
  {
    label: "LISTINI",
    href: "/listini",
    children: [
      {
        label: "Prezzi Siti Web & E-Commerce",
        href: "/listini/prezzi-siti-web-e-ecommerce",
      },
      {
        label: "Prezzi Manutenzione Siti",
        href: "/listini/piani-manutenzione-wordpress",
      },
      {
        label: "Prezzi Ottimizzazione SEO",
        href: "/listini/ottimizzazione-seo-prezzi",
      },
    ],
  },
  {
    label: "PORTFOLIO",
    href: "/portfolio",
  },
  {
    label: "BLOG",
    href: "/blog",
  },
];

/* -------------------------------------------------------------------------- */
/*                          FOOTER — MENU COLONNE                             */
/* -------------------------------------------------------------------------- */

export type FooterColumn = {
  title: string;
  items: NavItem[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "PAGINE",
    items: [
      { label: "HOME", href: "/" },
      {
        label: "SERVIZI",
        href: "/servizi",
        children: [
          { label: "Siti Web", href: "/servizi/siti-web-professionali-a-belluno" },
          { label: "E-Commerce", href: "/servizi/e-commerce-belluno" },
          { label: "Redesign", href: "/servizi/ristrutturo-il-tuo-sito-a-belluno" },
          { label: "SEO", href: "/servizi/ottimizzazione-seo-a-belluno" },
        ],
      },
      {
        label: "LISTINI",
        href: "/listini",
        children: [
          { label: "Prezzi Siti Web & E-Commerce", href: "/listini/prezzi-siti-web-e-ecommerce" },
          { label: "Prezzi Manutenzione Siti", href: "/listini/piani-manutenzione-wordpress" },
          { label: "Prezzi Ottimizzazione SEO", href: "/listini/ottimizzazione-seo-prezzi" },
        ],
      },
      { label: "PORTFOLIO", href: "/portfolio" },
      { label: "BLOG", href: "/blog" },
    ],
  },
  {
    title: "SERVIZI",
    items: [
      { label: "Siti Web in WordPress", href: "/servizi/siti-web-professionali-a-belluno" },
      { label: "Realizzazione E-Commerce", href: "/servizi/e-commerce-belluno" },
      { label: "Ottimizzazione SEO", href: "/servizi/ottimizzazione-seo-a-belluno" },
      { label: "Redesign Siti Esistenti", href: "/servizi/ristrutturo-il-tuo-sito-a-belluno" },
    ],
  },
  {
    title: "RISORSE",
    items: [
      { label: "Tutti gli Articoli", href: "/blog" },
      { label: "Guida WordPress", href: "/blog/guida-wordpress" },
      { label: "Guida SEO", href: "/blog/guida-seo" },
      { label: "Errori E-Commerce", href: "/blog/5-errori-ecommerce" },
    ],
  },
  {
    title: "NOTE LEGALI",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy (UE)", href: "/cookie-policy-ue" },
    ],
  },
];