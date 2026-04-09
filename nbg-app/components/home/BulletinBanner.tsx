interface BulletinBannerProps {
  text: string
}

export default function BulletinBanner({ text }: BulletinBannerProps) {
  if (!text) return null

  return (
    <div
      className="mx-3 mt-3 rounded px-3 py-2 border-l-2"
      style={{
        background: 'linear-gradient(90deg, rgba(201,168,76,0.13), rgba(201,168,76,0.06))',
        borderColor: 'var(--gold)',
      }}
    >
      <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
         style={{ color: 'var(--gold)' }}>
        Boletín importante
      </p>
      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{text}</p>
    </div>
  )
}
