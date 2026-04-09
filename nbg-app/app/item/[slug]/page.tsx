// app/item/[slug]/page.tsx
import { notFound } from 'next/navigation'
import BackHeader from '@/components/layout/BackHeader'
import WebViewRenderer from '@/components/renderers/WebViewRenderer'
import PdfRenderer from '@/components/renderers/PdfRenderer'
import LinkRenderer from '@/components/renderers/LinkRenderer'
import LinkListRenderer from '@/components/renderers/LinkListRenderer'
import SupportTicketRenderer from '@/components/renderers/SupportTicketRenderer'
import { items } from '@/data/items'
import { categories } from '@/data/categories'
import leaderboard from '@/data/leaderboard.json'
import type { LeaderboardEntry } from '@/data/types'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ItemPage({ params }: Props) {
  const { slug } = await params
  const item = items.find((i) => i.slug === slug)
  if (!item) notFound()

  const category = categories.find((c) => c.slug === item.categorySlug)
  const backHref = `/categoria/${item.categorySlug}`

  return (
    <main className="min-h-dvh flex flex-col" style={{ background: 'var(--bg-base)' }}>
      <BackHeader
        title={item.name}
        backHref={backHref}
        subtitle={category?.name}
      />

      {item.type === 'webview' && item.url && (
        <WebViewRenderer url={item.url} title={item.name} />
      )}

      {item.type === 'pdf' && item.url && (
        <PdfRenderer url={item.url} title={item.name} />
      )}

      {item.type === 'link' && item.url && (
        <LinkRenderer url={item.url} label={item.name} description={item.description} />
      )}

      {item.type === 'email' && item.email && (
        <LinkRenderer url={item.email} label={item.name} description={item.description} />
      )}

      {item.type === 'link-list' && item.links && (
        <LinkListRenderer links={item.links} description={item.description} />
      )}

      {item.type === 'form' && (
        <SupportTicketRenderer />
      )}

      {item.type === 'display' && item.slug === 'leaderboard' && (
        <LeaderboardDisplay entries={leaderboard} />
      )}

      {item.type === 'display' && item.slug === 'boletines' && (
        <div className="px-4 py-6">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Revisa los boletines más recientes de NBG.
          </p>
        </div>
      )}

      {item.type === 'display' && item.slug === 'events' && (
        <div className="px-4 py-6">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Próximos eventos de NBG — imágenes disponibles próximamente.
          </p>
        </div>
      )}
    </main>
  )
}

function LeaderboardDisplay({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="px-3 py-4 flex flex-col gap-2">
      {entries.map((entry) => (
        <div
          key={entry.rank}
          className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{
            background: 'var(--bg-card)',
            border: entry.rank === 1 ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
          }}
        >
          <span className="text-xl w-6 text-center">
            {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
          </span>
          <span className="flex-1 text-sm font-semibold text-white">{entry.name}</span>
          <span className="text-sm font-bold" style={{ color: 'var(--gold)' }}>
            {entry.sales} ventas
          </span>
        </div>
      ))}
    </div>
  )
}

export async function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }))
}
