import AppHeader from '@/components/layout/AppHeader'
import BulletinBanner from '@/components/home/BulletinBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import { categories } from '@/data/categories'
import bulletins from '@/data/bulletins.json'

export default function Home() {
  const activeBulletin = bulletins.find((b) => b.active)

  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg-base)' }}>
      <AppHeader />

      {/* Page heading */}
      <div style={{ padding: '18px 20px 14px', background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A227', marginBottom: '4px' }}>
          National Brokers Group
        </p>
        <h1 style={{ fontSize: '21px', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em' }}>
          Agent Dashboard
        </h1>
      </div>

      {activeBulletin && <BulletinBanner text={activeBulletin.text} />}

      <div style={{ flex: 1, marginTop: '8px' }}>
        <CategoryGrid categories={categories} />
      </div>
    </main>
  )
}
