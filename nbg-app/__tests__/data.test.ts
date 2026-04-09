// nbg-app/__tests__/data.test.ts
import { describe, it, expect } from 'vitest'
import { categories } from '@/data/categories'
import { items } from '@/data/items'
import type { Category, Item } from '@/data/types'

describe('categories', () => {
  it('has exactly 7 categories', () => {
    expect(categories).toHaveLength(7)
  })

  it('every category has required fields', () => {
    categories.forEach((cat: Category) => {
      expect(cat.slug).toBeTruthy()
      expect(cat.name).toBeTruthy()
      expect(cat.icon).toBeTruthy()
      expect(cat.color).toBeTruthy()
    })
  })

  it('all category slugs are unique', () => {
    const slugs = categories.map((c: Category) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('items', () => {
  it('has exactly 29 items', () => {
    expect(items).toHaveLength(29)
  })

  it('every item has required fields', () => {
    items.forEach((item: Item) => {
      expect(item.slug).toBeTruthy()
      expect(item.name).toBeTruthy()
      expect(item.type).toBeTruthy()
      expect(item.categorySlug).toBeTruthy()
    })
  })

  it('all item slugs are unique', () => {
    const slugs = items.map((i: Item) => i.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every item categorySlug matches an existing category', () => {
    const catSlugs = new Set(categories.map((c: Category) => c.slug))
    items.forEach((item: Item) => {
      expect(catSlugs.has(item.categorySlug)).toBe(true)
    })
  })

  it('every item type is a valid ContentType', () => {
    const validTypes = ['webview', 'pdf', 'link', 'link-list', 'email', 'form', 'display']
    items.forEach((item: Item) => {
      expect(validTypes).toContain(item.type)
    })
  })
})
