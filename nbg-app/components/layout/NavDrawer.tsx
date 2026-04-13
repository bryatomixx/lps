'use client'

import { useState } from 'react'
import Link from 'next/link'
import { categories } from '@/data/categories'

export default function NavDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger — 3 bars, white on black header */}
      <button
        onClick={() => setOpen(true)}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px', width: '36px', height: '36px', flexShrink: 0, background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px' }}
        aria-label="Open navigation"
      >
        <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#FFFFFF', borderRadius: '2px' }} />
        <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#FFFFFF', borderRadius: '2px' }} />
        <span style={{ display: 'block', width: '13px', height: '1.5px', background: '#FFFFFF', borderRadius: '2px' }} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.6)' }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, height: '100%', zIndex: 50,
          width: '280px', display: 'flex', flexDirection: 'column',
          background: '#111111',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #222222' }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF' }}>NBG</p>
            <p style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A227', marginTop: '2px' }}>Agent Platform</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ color: '#666666', fontSize: '18px', lineHeight: 1, background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, overflowY: 'auto', paddingTop: '8px', paddingBottom: '8px' }}>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px 28px', minHeight: '52px',
                color: '#CCCCCC', textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1A1A1A'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#CCCCCC' }}
            >
              <span style={{ fontSize: '18px', width: '24px', textAlign: 'center', flexShrink: 0 }}>{cat.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, lineHeight: '1.3' }}>{cat.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '16px 28px', borderTop: '1px solid #222222' }}>
          <p style={{ fontSize: '10px', color: '#444444', letterSpacing: '0.04em' }}>National Brokers Group</p>
        </div>
      </div>
    </>
  )
}
