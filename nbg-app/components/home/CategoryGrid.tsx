import Link from 'next/link'
import type { Category } from '@/data/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="pb-8" style={{ paddingLeft: '28px', paddingRight: '28px' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>
            Agent Hub
          </p>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            Quick Access
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
            className="flex flex-col items-center text-center rounded-2xl px-2 py-4 transition-all duration-200"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-soft)',
              boxShadow: 'var(--shadow-card)',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '22px', lineHeight: 1 }}>{cat.icon}</span>
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.3', letterSpacing: '0.01em' }}>
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
