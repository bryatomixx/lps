interface BulletinBannerProps {
  text: string
}

export default function BulletinBanner({ text }: BulletinBannerProps) {
  if (!text) return null

  return (
    <div style={{ margin: '16px 20px 0' }}>
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderLeft: '3px solid #C9A227',
        borderRadius: '12px',
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}>
        <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>📢</span>
        <div>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A227', marginBottom: '4px' }}>
            Announcement
          </p>
          <p style={{ fontSize: '12.5px', color: '#4B5563', lineHeight: '1.55' }}>{text}</p>
        </div>
      </div>
    </div>
  )
}
