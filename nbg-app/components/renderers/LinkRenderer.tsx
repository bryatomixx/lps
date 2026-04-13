interface LinkRendererProps {
  url: string
  label: string
  description?: string
}

export default function LinkRenderer({ url, label, description }: LinkRendererProps) {
  const isEmail = !url.startsWith('http')
  const href = isEmail && !url.startsWith('mailto:') ? `mailto:${url}` : url

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-12">
      <div className="text-5xl">{isEmail ? '✉️' : '🔗'}</div>
      <div className="text-center">
        <h2 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{label}</h2>
        {description && (
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{description}</p>
        )}
      </div>
      <a
        href={href}
        target={isEmail ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-opacity active:opacity-70"
        style={{ background: 'var(--gold)', color: '#ffffff' }}
      >
        {isEmail ? 'Send Email' : 'Open Link'}
      </a>
      {!isEmail && (
        <p className="text-[11px] text-center" style={{ color: 'var(--text-muted)' }}>
          Opens in browser
        </p>
      )}
    </div>
  )
}
