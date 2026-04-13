import Link from 'next/link'

interface BackHeaderProps {
  title: string
  backHref: string
  subtitle?: string
}

export default function BackHeader({ title, backHref, subtitle }: BackHeaderProps) {
  return (
    <header
      className="py-4"
      style={{ paddingLeft: '28px', paddingRight: '28px', background: '#FFFFFF', borderBottom: '1px solid #E6E2D9' }}
    >
      <div className="flex items-center gap-4">
        <Link
          href={backHref}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
          style={{ background: '#F7F7F5', color: 'var(--text-primary)', fontSize: '16px', fontWeight: 600 }}
          aria-label="Back"
        >
          ←
        </Link>
        <div>
          {subtitle && (
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>
              {subtitle}
            </p>
          )}
          <h1 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
