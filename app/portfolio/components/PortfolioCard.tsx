// app/portfolio/components/PortfolioCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '@/lib/types';

interface PortfolioCardProps {
  project: PostMeta;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      {/* Immagine */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge categoria */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/95 backdrop-blur text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenuto */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Cliente e anno */}
        <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-3">
          {project.client && <span>{project.client}</span>}
          {project.client && project.year && <span>·</span>}
          {project.year && <span>{project.year}</span>}
        </div>

        {/* Titolo */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
          {project.title}
        </h3>

        {/* Descrizione */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
          {project.excerpt}
        </p>

        {/* Servizi */}
        {project.services && project.services.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.services.slice(0, 3).map((service: string) => (
              <span
                key={service}
                className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="pt-4 border-t border-slate-100 text-sm font-bold text-blue-600 group-hover:text-orange-500 transition-colors">
          Vedi caso studio →
        </div>
      </div>
    </Link>
  );
}