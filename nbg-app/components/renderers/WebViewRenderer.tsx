'use client'
import { useState } from 'react'

interface WebViewRendererProps {
  url: string
  title: string
}

export default function WebViewRenderer({ url, title }: WebViewRendererProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative flex-1 flex flex-col" style={{ height: 'calc(100dvh - 60px)' }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center"
             style={{ background: 'var(--bg-base)' }}>
          <div className="text-center">
            <div className="text-3xl mb-2">⏳</div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Cargando {title}...</p>
          </div>
        </div>
      )}
      <iframe
        src={url}
        title={title}
        className="w-full flex-1 border-0"
        style={{ height: 'calc(100dvh - 60px)' }}
        onLoad={() => setLoaded(true)}
        allow="fullscreen"
      />
    </div>
  )
}
