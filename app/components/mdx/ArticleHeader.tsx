// app/components/mdx/ArticleHeader.tsx
interface ArticleHeaderProps {
    emoji?: string;
    category: string;
    title: string;
    intro?: string;
  }
  
  export function ArticleHeader({
    emoji,
    category,
    title,
    intro,
  }: ArticleHeaderProps) {
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
      <header className="not-prose mb-12 pb-8 border-b border-slate-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 flex items-center justify-center gap-2">
          {emoji && <span className="text-2xl align-middle">{emoji}</span>}
          <span>{category}</span>
        </p>
  
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          {renderTitleWithGradient(title)}
        </h1>
  
        {intro && (
          <p className="text-base md:text-lg italic text-slate-600 max-w-2xl mx-auto text-left border-l-4 border-blue-500 pl-5 py-2 leading-relaxed">
            {intro}
          </p>
        )}
      </header>
    );
  }