interface BulletinBannerProps {
  text: string
}

export default function BulletinBanner({ text }: BulletinBannerProps) {
  if (!text) return null

  return (
    <div
      className="mx-6 mt-5 rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E6E2D9',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      {/* Gold top bar */}
      <div style={{ height: '3px', background: 'var(--gold)' }} />
      <div className="px-5 py-4 flex items-start gap-4">
        <div
          className="shrink-0 rounded-lg flex items-center justify-center"
          style={{ width: '36px', height: '36px', background: '#FBF7F0', border: '1px solid #EBE0CC' }}
        >
          <span style={{ fontSize: '16px' }}>📢</span>
        </div>
        <div>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
            Announcement
          </p>
          <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>{text}</p>
        </div>
      </div>
    </div>
  )
}
