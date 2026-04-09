interface PdfRendererProps {
  url: string
  title: string
}

export default function PdfRenderer({ url, title }: PdfRendererProps) {
  return (
    <div className="flex-1 flex flex-col" style={{ height: 'calc(100dvh - 60px)' }}>
      <iframe
        src={url}
        title={title}
        className="w-full flex-1 border-0"
        style={{ height: 'calc(100dvh - 60px)' }}
      />
      <div className="px-4 py-2 text-center">
        <a
          href={url}
          download
          className="text-xs font-semibold"
          style={{ color: 'var(--gold)' }}
        >
          Descargar PDF ↓
        </a>
      </div>
    </div>
  )
}
