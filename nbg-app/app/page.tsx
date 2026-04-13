import AppHeader from '@/components/layout/AppHeader'
import BulletinBanner from '@/components/home/BulletinBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import { categories } from '@/data/categories'
import bulletins from '@/data/bulletins.json'

export default function Home() {
  const activeBulletin = bulletins.find((b) => b.active)

  return (
    <main className="min-h-dvh flex flex-col" style={{ background: 'var(--bg-base)' }}>
      <AppHeader />

      {/* Page heading */}
      <div style={{ borderBottom: '1px solid #E6E2D9', background: '#FFFFFF', padding: '14px 20px' }}>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>
          National Brokers Group
        </p>
        <h1 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Agent Dashboard
        </h1>
      </div>

      {activeBulletin && <BulletinBanner text={activeBulletin.text} />}

      <div className="mt-5 flex-1">
        <CategoryGrid categories={categories} />
      </div>
    </main>
  )
}
