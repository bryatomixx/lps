import Image from 'next/image'
import NavDrawer from './NavDrawer'

export default function AppHeader() {
  return (
    <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E6E2D9', padding: '10px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <NavDrawer />
        <Image
          src="/nbg-logo.png"
          alt="NBG"
          width={70}
          height={28}
          style={{ objectFit: 'contain', flexShrink: 0 }}
          priority
        />
        <div style={{ width: '1px', height: '26px', background: '#E6E2D9', flexShrink: 0 }} />
        <p style={{
          fontSize: '8.5px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#B4945D',
          lineHeight: '1.7',
          flex: 1,
        }}>
          Real Training. Real Support. Real Systems. Real Success.
        </p>
      </div>
    </header>
  )
}
