'use client'
import { useState } from 'react'

const TOPICS = [
  'Policy / Conservation',
  'Case in Progress',
  'Debt Management',
  'Commissions',
  'Technology / CRM',
  'Other',
]

interface FormState { name: string; email: string; topic: string; description: string }
interface FormErrors { name?: string; email?: string; description?: string }

const INPUT: React.CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid #D9D9D4',
  color: '#222222',
  borderRadius: '10px',
  padding: '11px 14px',
  fontSize: '13.5px',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
}

const LABEL: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 700,
  color: '#666666',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '6px',
}

export default function SupportTicketRenderer() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', topic: TOPICS[0], description: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    if (!form.description.trim()) e.description = 'Description is required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    console.log('Support ticket submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: '#F0F7F0', border: '1px solid #C8E6C9' }}>✓</div>
        <h2 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>Ticket Submitted</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>The NBG team will contact you shortly.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: TOPICS[0], description: '' }) }}
          style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gold)', marginTop: '8px' }}
        >
          Submit another ticket
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-4 py-5" noValidate>
      <div>
        <label htmlFor="name" style={LABEL}>Name</label>
        <input id="name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" style={INPUT} autoComplete="name" />
        {errors.name && <p style={{ fontSize: '11px', color: '#C62828', marginTop: '4px' }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" style={LABEL}>Email</label>
        <input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={INPUT} autoComplete="email" />
        {errors.email && <p style={{ fontSize: '11px', color: '#C62828', marginTop: '4px' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="topic" style={LABEL}>Topic</label>
        <select id="topic" value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} style={INPUT}>
          {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="description" style={LABEL}>Description</label>
        <textarea id="description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Describe your issue or question..." rows={4} style={{ ...INPUT, resize: 'none' }} />
        {errors.description && <p style={{ fontSize: '11px', color: '#C62828', marginTop: '4px' }}>{errors.description}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-semibold tracking-wide transition-opacity active:opacity-80 mt-1"
        style={{ background: '#111111', color: '#FFFFFF', fontSize: '13.5px', letterSpacing: '0.02em' }}
      >
        Submit Ticket
      </button>
    </form>
  )
}
