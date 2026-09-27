// app/components/mdx/CaseStudyFooter.tsx
import Link from 'next/link';

interface CaseStudyFooterProps {
  emoji?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  ctaEmoji?: string;
}

export function CaseStudyFooter({
  emoji,
  title,
  description,
  ctaText,
  ctaHref = '#',
  ctaEmoji = '🚀',
}: CaseStudyFooterProps) {
  const renderTitleWithGradient = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span
          key={i}
          className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="not-prose my-16 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4 flex items-center justify-center gap-3 flex-wrap">
        {emoji && <span className="text-3xl md:text-4xl">{emoji}</span>}
        <span>{renderTitleWithGradient(title)}</span>
      </h2>
      <div className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        {description}
      </div>
      {ctaHref ? (
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-6 py-4 rounded-lg shadow-lg shadow-yellow-200/60 border border-yellow-500/40 transition-all hover:-translate-y-0.5"
        >
          <span className="text-xl leading-none">{ctaEmoji}</span>
          {ctaText}
        </Link>
      ) : (
        <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 text-slate-900 font-bold px-6 py-4 rounded-lg shadow-lg shadow-yellow-200/60 border border-yellow-500/40">
          <span className="text-xl leading-none">{ctaEmoji}</span>
          {ctaText}
        </span>
      )}
    </div>
  );
}