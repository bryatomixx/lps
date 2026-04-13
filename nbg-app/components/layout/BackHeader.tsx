import Link from 'next/link'

interface BackHeaderProps {
  title: string
  backHref: string
  subtitle?: string
}

export default function BackHeader({ title, backHref, subtitle }: BackHeaderProps) {
  return (
    <header
      className="px-4 pt-4 pb-3 border-b"
      style={{ background: 'var(--bg-base)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="flex items-center gap-3">
        <Link
          href={backHref}
          className="text-lg font-bold leading-none"
          style={{ color: 'var(--gold)' }}
          aria-label="Back"
        >
          ←
        </Link>
        <div>
          {subtitle && (
            <p className="text-[10px] font-bold tracking-[2px] uppercase mb-0.5"
               style={{ color: 'var(--gold)' }}>
              {subtitle}
            </p>
          )}
          <h1 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h1>
        </div>
      </div>
    </header>
  )
}
