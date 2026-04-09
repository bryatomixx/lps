export default function AppHeader() {
  return (
    <header
      className="px-4 pt-4 pb-3"
      style={{ background: 'linear-gradient(160deg, #0d1f45 0%, #060e1f 100%)' }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-white font-black text-lg italic tracking-wide"
              style={{ fontFamily: '-apple-system, Segoe UI, sans-serif' }}
            >
              NBG
            </span>
            <span
              className="text-xs font-bold tracking-[3px]"
              style={{ color: 'var(--gold)' }}
            >
              LATINO
            </span>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Buenos días, Agente 👋
          </p>
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
