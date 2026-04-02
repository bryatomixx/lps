import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    n: '01', title: 'El Agente', icon: '🧑',
    desc: 'Prospecta, educa y conecta al cliente con la protección adecuada. Es el punto de contacto humano de toda la cadena.',
  },
  {
    n: '02', title: 'El IMO', icon: '🏢',
    desc: 'Organización de mercadeo independiente (como NBG Latino). Conecta al agente con múltiples carriers, da soporte, formación y contratos.',
  },
  {
    n: '03', title: 'El Carrier', icon: '🏦',
    desc: 'La compañía aseguradora que emite y respalda la póliza. Evalúa el riesgo, aprueba la cobertura y paga el beneficio.',
  },
  {
    n: '04', title: 'La Póliza', icon: '📋',
    desc: 'El contrato de cobertura. Se emite después de la solicitud y el underwriting. El cliente queda protegido desde que está en vigor.',
  },
  {
    n: '05', title: 'La Comisión', icon: '💰',
    desc: 'El agente recibe una comisión inicial por la venta. En muchos productos, también recibe renovaciones anuales mientras la póliza esté activa.',
  },
  {
    n: '06', title: 'El Chargeback', icon: '⚠️',
    desc: 'Si una póliza caduca pronto, el carrier recupera parte de la comisión. Por eso vender bien y hacer seguimiento es fundamental.',
  },
]

export default function S04Industry() {
  return (
    <section id="industria" className="bg-[#071020] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Fundamentos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cómo funciona la industria
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Antes de vender, necesitas entender el sistema completo. Aquí está el mapa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <AnimatedSection key={s.n}>
              <div className="relative bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <span className="text-[#C9A84C] text-xs font-bold tracking-widest">{s.n}</span>
                    <h3 className="text-white font-bold text-lg">{s.title}</h3>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                {s.n === '06' && (
                  <div className="mt-4 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl p-3">
                    <p className="text-[#C9A84C] text-xs font-bold">Regla clave</p>
                    <p className="text-white/50 text-xs mt-1">Vender bien + dar seguimiento = proteger tus ingresos.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 bg-[#C9A84C]/8 border border-[#C9A84C]/20 rounded-3xl p-8">
            <h3 className="text-[#C9A84C] font-bold text-lg mb-4">¿Qué son las renovaciones?</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
              En productos como Whole Life, Universal Life e IUL, el agente puede recibir una comisión de renovación cada año que el cliente pague su prima. Esto crea ingreso residual — pero requiere que la póliza permanezca activa. La calidad de la venta y el seguimiento postventa determinan tu persistencia y, por lo tanto, tus ingresos a largo plazo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
