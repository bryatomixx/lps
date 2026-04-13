import Link from 'next/link'
import type { Category } from '@/data/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="pb-8" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <div className="flex items-baseline justify-between mb-4 mt-5">
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          Quick Access
        </h2>
        <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Agent Hub
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
            className="flex flex-col items-center text-center rounded-2xl transition-all duration-200"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E6E2D9',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              padding: '18px 10px 14px',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '30px', lineHeight: 1 }}>{cat.icon}</span>
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: '1.3',
              letterSpacing: '0.01em',
            }}>
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
