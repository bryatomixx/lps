import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CategoryGrid from '@/components/home/CategoryGrid'
import BulletinBanner from '@/components/home/BulletinBanner'
import { categories } from '@/data/categories'

describe('CategoryGrid', () => {
  it('renders all 7 category names', () => {
    render(<CategoryGrid categories={categories} />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Capacitación')).toBeInTheDocument()
    expect(screen.getByText('Ventas')).toBeInTheDocument()
    expect(screen.getByText('CRM & Tech')).toBeInTheDocument()
    expect(screen.getByText('Equipo')).toBeInTheDocument()
    expect(screen.getByText('Recursos')).toBeInTheDocument()
    expect(screen.getByText('Soporte')).toBeInTheDocument()
  })

  it('each category links to /categoria/[slug]', () => {
    render(<CategoryGrid categories={categories} />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(7)
    expect(links[0]).toHaveAttribute('href', '/categoria/dashboard')
  })
})

describe('BulletinBanner', () => {
  it('renders bulletin text', () => {
    render(<BulletinBanner text="Nuevo carrier disponible" />)
    expect(screen.getByText('Nuevo carrier disponible')).toBeInTheDocument()
  })

  it('renders nothing when text is empty', () => {
    const { container } = render(<BulletinBanner text="" />)
    expect(container.firstChild).toBeNull()
  })
})
