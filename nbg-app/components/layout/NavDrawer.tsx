'use client'

import { useState } from 'react'
import Link from 'next/link'
import { categories } from '@/data/categories'

export default function NavDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col justify-center items-center gap-1 w-8 h-8"
        aria-label="Abrir menú"
      >
        <span className="block w-5 h-0.5 rounded" style={{ background: 'var(--gold)' }} />
        <span className="block w-5 h-0.5 rounded" style={{ background: 'var(--gold)' }} />
        <span className="block w-5 h-0.5 rounded" style={{ background: 'var(--gold)' }} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 h-full z-50 w-72 flex flex-col transition-transform duration-300"
        style={{
          background: 'var(--bg-card)',
          borderRight: '1px solid var(--border-subtle)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-4 py-4"
          style={{ borderBottom: '1px solid var(--border-subtle)' }}
        >
          <span className="font-black text-white text-base tracking-wide">
            NBG
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-xl leading-none"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.directItemSlug ? `/item/${cat.directItemSlug}` : `/categoria/${cat.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="text-lg w-6 text-center">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
