import type { LinkEntry } from '@/data/types'

interface LinkListRendererProps {
  links: LinkEntry[]
  description?: string
}

export default function LinkListRenderer({ links, description }: LinkListRendererProps) {
  return (
    <div className="px-3 py-4">
      {description && (
        <p className="text-sm mb-4 px-1" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
      <div className="flex flex-col gap-2">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
          >
            <span className="text-base">🔗</span>
            <span className="flex-1 text-sm font-medium text-white">{link.label}</span>
            <span style={{ color: 'var(--gold)' }}>›</span>
          </a>
        ))}
      </div>
    </div>
  )
}
