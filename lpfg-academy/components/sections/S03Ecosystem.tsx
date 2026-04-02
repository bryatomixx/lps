import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const pillars = [
  {
    name: 'LPFG',
    full: 'Latin Prime Financial Group',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.25)',
    icon: '🏛️',
    items: [
      'Liderazgo y visión empresarial',
      'Cultura latina real',
      'Formación estructurada',
      'Cercanía y mentoría',
      'Soporte al agente',
      'Desarrollo de equipos',
    ],
  },
  {
    name: 'NBG Latino',
    full: 'National Brokers Group',
    color: '#fff',
    bg: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.12)',
    icon: '🛡️',
    items: [
      'Estructura IMO',
      'Acceso a 50+ carriers',
      'Respaldo y recursos',
      'Expansión en USA y PR',
      'Apoyo al agente latino',
      'División bilingüe',
    ],
  },
  {
    name: 'LPS',
    full: 'Latin Prime Systems',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.05)',
    border: 'rgba(201,168,76,0.15)',
    icon: '⚙️',
    items: [
      'CRM y automatización',
      'Seguimiento de clientes',
      'Academia digital',
      'Herramientas de marketing',
      'Dashboards y KPIs',
      'Infraestructura operativa',
    ],
  },
]

export default function S03Ecosystem() {
  return (
    <section id="ecosistema" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>El ecosistema</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              LPFG powered by NBG Latino
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Tres componentes integrados que forman una plataforma completa para agentes que quieren producir y crecer.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((p) => (
            <AnimatedSection key={p.name}>
              <div
                className="rounded-3xl p-8 h-full flex flex-col"
                style={{ background: p.bg, border: `1px solid ${p.border}` }}
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="mb-1">
                  <span className="font-black text-2xl" style={{ color: p.color }}>{p.name}</span>
                </div>
                <p className="text-white/30 text-xs mb-6 uppercase tracking-wider">{p.full}</p>
                <ul className="space-y-3 flex-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-0.5 text-xs flex-shrink-0">◆</span>
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#C9A84C]/10 via-[#C9A84C]/15 to-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-3xl p-8 text-center">
            <p className="text-[#C9A84C] font-bold text-xl md:text-2xl leading-relaxed">
              &ldquo;Juntos forman una plataforma para producir, crecer<br className="hidden md:block" /> y construir equipo con estructura real.&rdquo;
            </p>
            <p className="text-white/40 text-sm mt-3">Agencia + IMO + Tecnología + Formación + Cultura Latina + Desarrollo Empresarial</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
