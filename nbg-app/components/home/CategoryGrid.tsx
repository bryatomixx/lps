'use client'

import Link from 'next/link'
import type { Category } from '@/data/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div style={{ padding: '20px 20px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          Quick Access
        </h2>
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Agent Hub
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '20px 10px 16px',
              gap: '10px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              textDecoration: 'none',
              transition: 'box-shadow 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#C9A227'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.10)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E5E7EB'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
            }}
          >
            <span style={{ fontSize: '28px', lineHeight: 1 }}>{cat.icon}</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#111111', lineHeight: '1.3' }}>
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
