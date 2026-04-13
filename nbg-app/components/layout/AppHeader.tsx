import Image from 'next/image'
import NavDrawer from './NavDrawer'

export default function AppHeader() {
  return (
    <header
      className="px-5 py-3"
      style={{ background: '#FFFFFF', borderBottom: '1px solid #E6E2D9' }}
    >
      <div className="flex items-center gap-4">
        <NavDrawer />
        <div className="flex items-center gap-3 flex-1">
          <Image
            src="/nbg-logo.png"
            alt="NBG"
            width={72}
            height={30}
            className="object-contain shrink-0"
            priority
          />
          <div style={{ width: '1px', height: '28px', background: '#E6E2D9', flexShrink: 0 }} />
          <p style={{
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            lineHeight: '1.6',
          }}>
            Real Training. Real Support.<br />Real Systems. Real Success.
          </p>
        </div>
      </div>
    </header>
  )
}
