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
      {activeBulletin && <BulletinBanner text={activeBulletin.text} />}
      <div className="mt-4 flex-1">
        <CategoryGrid categories={categories} />
      </div>
    </main>
  )
}
