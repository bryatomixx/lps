import Link from 'next/link'
import type { Item } from '@/data/types'

const TYPE_LABEL: Record<string, string> = {
  webview: 'Portal',
  pdf: 'Document',
  link: 'Link',
  'link-list': 'Links',
  email: 'Email',
  form: 'Form',
  display: 'Dashboard',
  image: 'Reference',
}

interface ItemListProps {
  items: Item[]
}

export default function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>No items in this section yet.</p>
      </div>
    )
  }

  return (
    <div className="px-6 py-4 flex flex-col gap-2">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/item/${item.slug}`}
          className="flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-150"
          style={{
            background: '#FFFFFF',
            border: '1px solid #E6E2D9',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          <div className="flex-1 min-w-0">
            <p style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }} className="truncate">
              {item.name}
            </p>
            {item.description && (
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }} className="truncate">
                {item.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span
              style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', background: '#FBF7F0', padding: '2px 7px', borderRadius: '20px', border: '1px solid #EBE0CC' }}
            >
              {TYPE_LABEL[item.type] ?? 'View'}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 300 }}>›</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
