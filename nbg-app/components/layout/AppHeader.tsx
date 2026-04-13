import Image from 'next/image'
import NavDrawer from './NavDrawer'

export default function AppHeader() {
  return (
    <header style={{ background: '#111111', padding: '12px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <NavDrawer />
        {/* Logo inverted to white on black bg */}
        <Image
          src="/nbg-logo.png"
          alt="NBG"
          width={72}
          height={30}
          style={{ objectFit: 'contain', flexShrink: 0, filter: 'brightness(0) invert(1)' }}
          priority
        />
        <div style={{ width: '1px', height: '24px', background: '#333333', flexShrink: 0 }} />
        <p style={{
          fontSize: '8px',
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: '#C9A227',
          lineHeight: '1.7',
          flex: 1,
        }}>
          Real Training. Real Support.<br />Real Systems. Real Success.
        </p>
      </div>
    </header>
  )
}
