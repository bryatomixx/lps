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
      style={{
        background: 'linear-gradient(160deg, #0d1f45 0%, #060e1f 100%)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex items-center gap-3">
        <Link
          href={backHref}
          className="text-lg font-bold leading-none"
          style={{ color: 'var(--gold)' }}
          aria-label="Volver"
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
          <h1 className="text-base font-bold text-white">{title}</h1>
        </div>
      </div>
    </header>
  )
}
