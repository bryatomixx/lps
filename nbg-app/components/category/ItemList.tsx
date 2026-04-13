import Link from 'next/link'
import type { Item } from '@/data/types'

const TYPE_ICON: Record<string, string> = {
  webview: '🌐',
  pdf: '📄',
  link: '🔗',
  'link-list': '📋',
  email: '✉️',
  form: '🎫',
  display: '📊',
  image: '🖼️',
}

interface ItemListProps {
  items: Item[]
}

export default function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
        No items in this category yet.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2 px-3 py-3">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/item/${item.slug}`}
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <span className="text-lg leading-none w-6 text-center shrink-0">
            {TYPE_ICON[item.type] ?? '→'}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
            {item.description && (
              <p className="text-[11px] truncate" style={{ color: 'var(--text-muted)' }}>
                {item.description}
              </p>
            )}
          </div>
          <span className="text-base shrink-0" style={{ color: 'var(--gold)' }}>›</span>
        </Link>
      ))}
    </div>
  )
}
