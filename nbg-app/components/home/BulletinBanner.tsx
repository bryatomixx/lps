interface BulletinBannerProps {
  text: string
}

export default function BulletinBanner({ text }: BulletinBannerProps) {
  if (!text) return null

  return (
    <div
      className="mx-4 mt-4 rounded-xl px-4 py-3 flex items-start gap-3"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E6E2D9',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div
        className="shrink-0 mt-0.5 rounded-full w-1.5 h-1.5"
        style={{ background: 'var(--gold)', marginTop: '6px' }}
      />
      <div>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>
          Announcement
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{text}</p>
      </div>
    </div>
  )
}
