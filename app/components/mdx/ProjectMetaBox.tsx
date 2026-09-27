// app/components/mdx/ProjectMetaBox.tsx
import { ReactNode } from 'react';

interface ProjectMetaBoxProps {
  children: ReactNode;
}

export function ProjectMetaBox({ children }: ProjectMetaBoxProps) {
  return (
    <div
      className="not-prose my-10 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow"
      data-meta-box
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
        {children}
      </div>
    </div>
  );
}

interface ProjectMetaItemProps {
  emoji: string;
  label: string;
  children: ReactNode;
}

export function ProjectMetaItem({
  emoji,
  label,
  children,
}: ProjectMetaItemProps) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-3xl md:text-4xl shrink-0 leading-none mt-1">
        {emoji}
      </span>
      <div>
        <strong className="block text-xs uppercase tracking-widest text-slate-900 font-bold mb-1">
          {label}
        </strong>
        <span className="block text-sm md:text-base text-slate-600 leading-snug">
          {children}
        </span>
      </div>
    </div>
  );
}