import { notFound } from 'next/navigation'
import BackHeader from '@/components/layout/BackHeader'
import ItemList from '@/components/category/ItemList'
import { categories } from '@/data/categories'
import { items } from '@/data/items'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const categoryItems = items.filter((i) => i.categorySlug === slug)

  return (
    <main className="min-h-dvh" style={{ background: 'var(--bg-base)' }}>
      <BackHeader title={category.name} backHref="/" subtitle="National Brokers Group" />
      <ItemList items={categoryItems} />
    </main>
  )
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}
