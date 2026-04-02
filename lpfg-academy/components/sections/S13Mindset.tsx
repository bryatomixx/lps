import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const habits = [
  { n: '01', title: 'Mentalidad 1099', desc: 'Eres un contratista independiente. Nadie te va a pagar si no produces. Esa libertad viene con responsabilidad total.' },
  { n: '02', title: 'Disciplina financiera personal', desc: 'Tus ingresos son variables. Aprende a vivir con presupuesto, a separar el ingreso del gasto y a planificar para los meses bajos.' },
  { n: '03', title: 'Separación personal / negocio', desc: 'No mezcles tu cuenta personal con tu negocio. Desde el primer cheque de comisión, opera con la mentalidad de una empresa.' },
  { n: '04', title: 'Estructura básica de negocio', desc: 'Una LLC u otra estructura puede ser conveniente dependiendo de tu situación. Consulta a un CPA antes de tomar esa decisión — las ventajas varían por estado, ingreso y circunstancias personales.' },
  { n: '05', title: 'Hábitos de reinversión', desc: 'Los primeros ingresos se reinvierten en herramientas, formación y marketing. El agente que invierte en su negocio crece más rápido.' },
  { n: '06', title: 'Seguimiento de números', desc: 'Conoce tu actividad semanal, tu ratio de citas/ventas, tu persistencia y tu ingreso promedio por póliza. Lo que no se mide, no mejora.' },
]

export default function S13Mindset() {
  return (
    <section id="mentalidad" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Mentalidad empresarial</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              En LPFG no solo desarrollamos agentes.
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Desarrollamos empresarios.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              La diferencia entre el agente promedio y el que construye algo duradero está en la mentalidad con la que opera.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {habits.map((h) => (
            <AnimatedSection key={h.n}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/4 transition-all duration-300 h-full">
                <span className="text-[#C9A84C]/30 font-black text-5xl block mb-3">{h.n}</span>
                <h3 className="text-white font-bold text-base mb-3">{h.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-[#C9A84C]/8 border border-[#C9A84C]/20 rounded-2xl p-6">
            <p className="text-white/50 text-sm leading-relaxed text-center">
              <strong className="text-[#C9A84C]">Nota importante:</strong> Toda implementación fiscal, contributiva o legal — incluyendo decisiones sobre LLC, S-Corp, deducciones y estructura de negocio — debe validarse con un CPA o profesional licenciado. Este contenido es de carácter educativo general y no constituye asesoría profesional.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
