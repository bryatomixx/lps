import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ItemList from '@/components/category/ItemList'
import type { Item } from '@/data/types'

const mockItems: Item[] = [
  { slug: 'test-item-1', name: 'Test Item One', categorySlug: 'ventas', type: 'link', url: 'https://example.com' },
  { slug: 'test-item-2', name: 'Test Item Two', categorySlug: 'ventas', type: 'webview', url: 'https://example.com' },
]

describe('ItemList', () => {
  it('renders all item names', () => {
    render(<ItemList items={mockItems} />)
    expect(screen.getByText('Test Item One')).toBeInTheDocument()
    expect(screen.getByText('Test Item Two')).toBeInTheDocument()
  })

  it('each item links to /item/[slug]', () => {
    render(<ItemList items={mockItems} />)
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', '/item/test-item-1')
    expect(links[1]).toHaveAttribute('href', '/item/test-item-2')
  })

  it('renders empty message when no items', () => {
    render(<ItemList items={[]} />)
    expect(screen.getByText('No hay items en esta categoría.')).toBeInTheDocument()
  })
})
