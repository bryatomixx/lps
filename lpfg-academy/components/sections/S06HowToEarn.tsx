import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const incomeTypes = [
  {
    icon: '💵',
    title: 'Comisión inicial',
    desc: 'Se gana cuando se emite la póliza. El porcentaje varía según el producto y el carrier. Es el ingreso más inmediato para el agente activo.',
    tag: 'Por producción',
  },
  {
    icon: '🔄',
    title: 'Renovaciones',
    desc: 'En productos permanentes (IUL, WL, etc.), el agente puede recibir comisiones anuales mientras la póliza esté activa. Requiere persistencia y seguimiento.',
    tag: 'Residual',
  },
  {
    icon: '📈',
    title: 'Overrides por equipo',
    desc: 'Cuando desarrollas agentes, puedes recibir compensación sobre su producción. Esto aplica cuando corresponde por contrato y solo después de producir tú mismo.',
    tag: 'Por estructura',
  },
  {
    icon: '🏆',
    title: 'Bonos e incentivos',
    desc: 'Los carriers y el IMO pueden ofrecer bonos por volumen, persistencia, mezcla de productos o logros específicos. Varían según el contrato y el período.',
    tag: 'Variable',
  },
]

export default function S06HowToEarn() {
  return (
    <section id="ingresos" className="bg-[#071020] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Modelo de ingresos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cómo se gana dinero en esta industria
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Hay múltiples fuentes de ingreso. Pero todas dependen de lo mismo: producir bien y mantener la calidad.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {incomeTypes.map((item) => (
            <AnimatedSection key={item.title}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/5 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <span className="text-xs bg-[#C9A84C]/15 text-[#C9A84C] px-2 py-0.5 rounded-full font-semibold">{item.tag}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-[#C9A84C] rounded-3xl p-8 text-center">
            <p className="text-[#0A1628] font-bold text-lg md:text-xl leading-relaxed">
              &ldquo;El ingreso sostenible viene de producir bien, persistir,<br className="hidden md:block" />
              dar seguimiento y desarrollar estructura —<br className="hidden md:block" />
              <strong>no solo de entrar gente.</strong>&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
