interface BulletinBannerProps {
  text: string
}

export default function BulletinBanner({ text }: BulletinBannerProps) {
  if (!text) return null

  return (
    <div
      className="mx-3 mt-3 rounded px-3 py-2 border-l-2"
      style={{
        background: 'rgba(161,128,20,0.08)',
        borderColor: 'var(--gold)',
      }}
    >
      <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
         style={{ color: 'var(--gold)' }}>
        Important Bulletin
      </p>
      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{text}</p>
    </div>
  )
}
