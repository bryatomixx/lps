'use client'
import { useState } from 'react'

const TOPICS = [
  'Póliza / Conservación',
  'Caso en proceso',
  'Manejo de deuda',
  'Comisiones',
  'Tecnología / CRM',
  'Otro',
]

interface FormState {
  name: string
  email: string
  topic: string
  description: string
}

interface FormErrors {
  name?: string
  email?: string
  description?: string
}

const INPUT_STYLE: React.CSSProperties = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  borderRadius: '10px',
  padding: '10px 12px',
  fontSize: '14px',
  width: '100%',
  outline: 'none',
}

const LABEL_STYLE: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--text-secondary)',
  display: 'block',
  marginBottom: '4px',
}

export default function SupportTicketRenderer() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', topic: TOPICS[0], description: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'El nombre es requerido'
    if (!form.email.trim()) e.email = 'El email es requerido'
    if (!form.description.trim()) e.description = 'La descripción es requerida'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    // PLACEHOLDER: replace with real API call or email submission
    console.log('Support ticket submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <div className="text-5xl">✅</div>
        <h2 className="text-lg font-bold text-white">Ticket enviado</h2>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          El equipo de NBG te contactará pronto.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: TOPICS[0], description: '' }) }}
          className="text-sm font-semibold"
          style={{ color: 'var(--gold)' }}
        >
          Crear otro ticket
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 py-4" noValidate>
      <div>
        <label htmlFor="name" style={LABEL_STYLE}>Nombre</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Tu nombre completo"
          style={INPUT_STYLE}
          autoComplete="name"
        />
        {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" style={LABEL_STYLE}>Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="tu@email.com"
          style={INPUT_STYLE}
          autoComplete="email"
        />
        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="topic" style={LABEL_STYLE}>Tema</label>
        <select
          id="topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          style={INPUT_STYLE}
        >
          {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="description" style={LABEL_STYLE}>Descripción</label>
        <textarea
          id="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Describe tu problema o pregunta..."
          rows={4}
          style={{ ...INPUT_STYLE, resize: 'none' }}
        />
        {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl text-sm font-bold tracking-wide transition-opacity active:opacity-70 mt-2"
        style={{ background: 'var(--gold)', color: 'var(--bg-base)' }}
      >
        Enviar ticket
      </button>
    </form>
  )
}
