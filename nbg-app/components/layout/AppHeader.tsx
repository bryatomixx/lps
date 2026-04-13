import NavDrawer from './NavDrawer'

export default function AppHeader() {
  return (
    <header
      className="px-4 pt-4 pb-3"
      style={{ background: 'linear-gradient(160deg, #0d1f45 0%, #060e1f 100%)' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NavDrawer />
          <div>
            <span
              className="text-white font-black text-lg italic tracking-wide"
              style={{ fontFamily: '-apple-system, Segoe UI, sans-serif' }}
            >
              NBG
            </span>
            <p className="text-[10px] leading-tight mt-0.5" style={{ color: 'var(--gold)' }}>
              Real Training. Real Support. Real Systems. Real Success.
            </p>
          </div>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
          style={{ background: 'var(--gold)', color: 'var(--bg-base)' }}
        >
          N
        </div>
      </div>
    </header>
  )
}
