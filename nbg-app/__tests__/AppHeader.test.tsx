import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppHeader from '@/components/layout/AppHeader'
import BackHeader from '@/components/layout/BackHeader'

describe('AppHeader', () => {
  it('renders NBG and LATINO text', () => {
    render(<AppHeader />)
    expect(screen.getByText('NBG')).toBeInTheDocument()
    expect(screen.getByText('LATINO')).toBeInTheDocument()
  })
})

describe('BackHeader', () => {
  it('renders title and back link', () => {
    render(<BackHeader title="Capacitación" backHref="/categoria/capacitacion" />)
    expect(screen.getByText('Capacitación')).toBeInTheDocument()
    const backLink = screen.getByRole('link')
    expect(backLink).toHaveAttribute('href', '/categoria/capacitacion')
  })
})
