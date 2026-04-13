import Image from 'next/image'
import NavDrawer from './NavDrawer'

export default function AppHeader() {
  return (
    <header
      className="px-5 py-3"
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E6E2D9',
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <NavDrawer />
          <Image
            src="/nbg-logo.png"
            alt="NBG"
            width={80}
            height={32}
            className="object-contain"
            priority
          />
        </div>
        <p
          className="text-right hidden sm:block"
          style={{ color: 'var(--gold)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: '1.4', maxWidth: '180px' }}
        >
          Real Training. Real Support.<br />Real Systems. Real Success.
        </p>
      </div>
    </header>
  )
}
