import Link from 'next/link'

interface BackHeaderProps {
  title: string
  backHref: string
  subtitle?: string
}

export default function BackHeader({ title, backHref, subtitle }: BackHeaderProps) {
  return (
    <header style={{ background: '#111111', padding: '12px 20px', borderBottom: '1px solid #222222' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <Link
          href={backHref}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px', borderRadius: '8px',
            background: '#1F1F1F', color: '#FFFFFF',
            fontSize: '18px', fontWeight: 400, textDecoration: 'none', flexShrink: 0,
          }}
          aria-label="Back"
        >
          ←
        </Link>
        <div>
          {subtitle && (
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A227', marginBottom: '2px' }}>
              {subtitle}
            </p>
          )}
          <h1 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
