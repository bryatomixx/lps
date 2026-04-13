interface LinkRendererProps {
  url: string
  label: string
  description?: string
}

export default function LinkRenderer({ url, label, description }: LinkRendererProps) {
  const isEmail = !url.startsWith('http')
  const href = isEmail && !url.startsWith('mailto:') ? `mailto:${url}` : url

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-14">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: '#F7F7F5', border: '1px solid #E6E2D9' }}
      >
        <span style={{ fontSize: '28px' }}>{isEmail ? '✉️' : '🔗'}</span>
      </div>

      <div className="text-center">
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px', letterSpacing: '-0.01em' }}>
          {label}
        </h2>
        {description && (
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{description}</p>
        )}
      </div>

      <a
        href={href}
        target={isEmail ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-xl text-sm font-semibold tracking-wide transition-opacity active:opacity-80"
        style={{ background: '#111111', color: '#FFFFFF', fontSize: '13px', letterSpacing: '0.02em' }}
      >
        {isEmail ? 'Send Email' : 'Open Link'}
      </a>

      {!isEmail && (
        <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Opens in browser</p>
      )}
    </div>
  )
}
