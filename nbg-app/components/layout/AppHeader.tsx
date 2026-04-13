import Image from 'next/image'
import NavDrawer from './NavDrawer'

export default function AppHeader() {
  return (
    <header
      className="px-4 pt-4 pb-3 border-b"
      style={{ background: 'var(--bg-base)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NavDrawer />
          <div className="flex items-center gap-2">
            <Image
              src="/nbg-logo.png"
              alt="NBG"
              width={72}
              height={36}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <p className="text-[10px] font-medium" style={{ color: 'var(--gold)' }}>
          Real Training. Real Support. Real Systems. Real Success.
        </p>
      </div>
    </header>
  )
}
