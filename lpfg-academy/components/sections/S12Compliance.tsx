import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const items = [
  { icon: '📜', title: 'Licencia activa', desc: 'Debes tener tu licencia de vida activa en el estado donde operas antes de vender. Sin licencia, no hay venta legal.' },
  { icon: '🎓', title: 'Educación continua (CE)', desc: 'Tu licencia requiere horas de educación continua para renovarse. Mantener el calendario de CE es tu responsabilidad.' },
  { icon: '🛡️', title: 'E&O (Errors & Omissions)', desc: 'El seguro de errores y omisiones te protege profesionalmente. Verifica con NBG Latino si aplica o es requerido en tu contrato.' },
  { icon: '🚫', title: 'Replacement y Twisting', desc: 'Reemplazar una póliza existente de otro carrier sin justificación legítima puede ser una violación regulatoria. Documenta siempre el motivo.' },
  { icon: '✅', title: 'Suitability', desc: 'La cobertura que recomiendas debe ser apropiada para la situación del cliente. Vender el producto equivocado es un problema ético y regulatorio.' },
  { icon: '📁', title: 'Documentación', desc: 'Conserva registros de tus presentaciones, conversaciones de importancia y firmas. La documentación te protege a ti y al cliente.' },
  { icon: '📱', title: 'Redes sociales y claims', desc: 'No hagas afirmaciones de rendimiento garantizado, comparaciones sin sustento ni promesas que el producto no pueda cumplir. Menos es más.' },
  { icon: '⚠️', title: 'Chargebacks y contestability', desc: 'Los carriers tienen un período de contestabilidad (generalmente 2 años) en el que pueden investigar y disputar un reclamo. Esto refuerza la importancia de aplicaciones honestas y completas.' },
]

export default function S12Compliance() {
  return (
    <section id="compliance" className="bg-[#071020] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Ética profesional</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Compliance y ética</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Un agente ético no solo es mejor profesional — también construye un negocio más sólido y duradero.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {items.map((item) => (
            <AnimatedSection key={item.title}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#C9A84C]/20 transition-all duration-300 h-full">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-white/3 border-l-4 border-[#C9A84C] rounded-r-2xl p-6">
            <p className="text-white/60 text-sm leading-relaxed">
              <strong className="text-white/80">Importante:</strong> Las regulaciones varían por estado y cambian con el tiempo. Este material es educativo y no reemplaza la orientación de tu upline, el departamento de compliance de NBG Latino ni el asesoramiento legal o regulatorio profesional. Cuando tengas dudas sobre un caso específico, siempre consulta antes de actuar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
