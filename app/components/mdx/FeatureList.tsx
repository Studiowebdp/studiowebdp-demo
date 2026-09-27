// app/components/mdx/FeatureList.tsx
import { ReactNode } from 'react';

interface FeatureItemProps {
  emoji: string;
  title: string;
  children: ReactNode;
}

export function FeatureItem({ emoji, title, children }: FeatureItemProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
      <span className="block text-4xl mb-4 leading-none">{emoji}</span>
      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-snug">
        {title}
      </h4>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed m-0">
        {children}
      </p>
    </div>
  );
}

interface FeatureListProps {
  children: ReactNode;
}

export function FeatureList({ children }: FeatureListProps) {
  return (
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
      {children}
    </div>
  );
}