'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'

const phases = [
  {
    label: '0 – 30 días',
    color: '#C9A84C',
    title: 'Activación',
    items: [
      'Obtener / activar licencia',
      'Configurar herramientas y CRM',
      'Definir tu mercado caliente',
      'Primeros 20-30 contactos',
      'Primera cita — primera presentación',
      'Primera venta o solicitud enviada',
      'Instalar hábitos de prospección diaria',
    ],
  },
  {
    label: '31 – 60 días',
    color: '#F0C96B',
    title: 'Tracción',
    items: [
      'Aumentar actividad semanal sostenida',
      'Más citas, más cierres',
      'Primeros referidos estructurados',
      'Primeros socios estratégicos',
      'KPIs claros: actividad, citas, ventas',
      'Revisión semanal con upline',
      'Mejorar presentación y manejo de objeciones',
    ],
  },
  {
    label: '61 – 90 días',
    color: '#C9A84C',
    title: 'Visión',
    items: [
      'Consistencia demostrada en producción',
      'Optimizar mezcla de productos',
      'Primeros referidos de clientes existentes',
      'Evaluar camino: Productor o Constructor',
      'Definir objetivos del siguiente trimestre',
      'Revisión de persistencia y chargebacks',
      'Visión de carrera de largo plazo',
    ],
  },
]

export default function S15Roadmap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ruta" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Plan de acción</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ruta de 30 – 60 – 90 días</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Un plan concreto y accionable. No improvisación. No teoría. Ejecución.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white/3 border border-white/8 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: phase.color, opacity: 0.06 }}>
                {i + 1}
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ color: phase.color, background: phase.color + '18', border: `1px solid ${phase.color}30` }}>
                  {phase.label}
                </span>
                <h3 className="text-white font-black text-2xl mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.15 + j * 0.05 + 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: phase.color }} />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
