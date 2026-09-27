// app/blog/components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '@/lib/mdx';

interface BlogCardProps {
  post: PostMeta;
  basePath?: string; // 'blog' o 'portfolio'
}

export default function BlogCard({ post, basePath = 'blog' }: BlogCardProps) {
  return (
    <Link
      href={`/${basePath}/${post.slug}`}
      className="group block bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-medium">— {post.author}</span>
          <time className="text-xs text-slate-400">
            {new Date(post.date).toLocaleDateString('it-IT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
    </Link>
  );
}