import Link from 'next/link'
import type { Category } from '@/data/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="px-3 pb-6">
      <p className="text-[10px] font-bold tracking-[3px] uppercase mb-3"
         style={{ color: 'var(--gold)' }}>
        Acceso rápido
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
            className="rounded-xl p-3 text-center flex flex-col items-center gap-1.5 transition-colors"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span className="text-2xl leading-none">{cat.icon}</span>
            <span className="text-[11px] font-medium leading-tight"
                  style={{ color: 'var(--text-secondary)' }}>
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
