import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SupportTicketRenderer from '@/components/renderers/SupportTicketRenderer'

describe('SupportTicketRenderer', () => {
  it('renders all form fields', () => {
    render(<SupportTicketRenderer />)
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Tema')).toBeInTheDocument()
    expect(screen.getByLabelText('Descripción')).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    render(<SupportTicketRenderer />)
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))
    expect(await screen.findByText('El nombre es requerido')).toBeInTheDocument()
  })

  it('shows success message after valid submit', async () => {
    render(<SupportTicketRenderer />)
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Juan Pérez' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'juan@test.com' } })
    fireEvent.change(screen.getByLabelText('Descripción'), { target: { value: 'Tengo un problema con mi póliza' } })
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))
    expect(await screen.findByText(/ticket enviado/i)).toBeInTheDocument()
  })
})
