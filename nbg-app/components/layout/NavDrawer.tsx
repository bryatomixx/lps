'use client'

import { useState } from 'react'
import Link from 'next/link'
import { categories } from '@/data/categories'

export default function NavDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg transition-colors"
        style={{ background: 'transparent' }}
        aria-label="Open navigation"
      >
        <span className="block w-[18px] h-[1.5px]" style={{ background: '#222222' }} />
        <span className="block w-[18px] h-[1.5px]" style={{ background: '#222222' }} />
        <span className="block w-[12px] h-[1.5px]" style={{ background: '#222222' }} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: 'rgba(0,0,0,0.55)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 h-full z-50 w-72 flex flex-col transition-transform duration-300"
        style={{
          background: '#111111',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between py-4"
          style={{ paddingLeft: '24px', paddingRight: '20px', borderBottom: '1px solid #2A2A2A' }}
        >
          <div>
            <p className="font-bold text-sm tracking-widest uppercase" style={{ color: '#EDEDED', letterSpacing: '0.15em' }}>NBG</p>
            <p style={{ color: 'var(--gold)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>Agent Platform</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ color: '#666666', fontSize: '18px', lineHeight: 1, padding: '4px' }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 transition-colors"
              style={{ color: '#AAAAAA', padding: '13px 24px 13px 28px', minHeight: '52px' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1F1F1F')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontSize: '18px', width: '26px', textAlign: 'center', flexShrink: 0 }}>{cat.icon}</span>
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#DEDEDE', lineHeight: '1.3' }}>{cat.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="py-4" style={{ borderTop: '1px solid #2A2A2A', paddingLeft: '28px' }}>
          <p style={{ fontSize: '10px', color: '#444444', letterSpacing: '0.04em' }}>National Brokers Group</p>
        </div>
      </div>
    </>
  )
}
