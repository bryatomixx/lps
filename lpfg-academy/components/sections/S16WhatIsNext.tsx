import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const modules = [
  { icon: '🛡️', title: 'Term Life & Final Expense', desc: 'Underwriting, scripts de presentación, objeciones comunes y cierre.' },
  { icon: '📈', title: 'IUL a profundidad', desc: 'Cómo funciona la indexación, ilustraciones, suitability y presentación al cliente.' },
  { icon: '🔬', title: 'Underwriting y MIB', desc: 'Cómo pensar como el carrier antes de enviar la solicitud. Manejo de casos impaired.' },
  { icon: '💛', title: 'Living Benefits', desc: 'Riders de beneficio acelerado: crónico, crítico y terminal. Cómo presentarlos.' },
  { icon: '🏦', title: 'IBC completo', desc: 'Infinite Banking Concept desde los fundamentos hasta la presentación al cliente.' },
  { icon: '📊', title: 'FIA completo', desc: 'Fixed Indexed Annuity para retiro: cómo funciona, cuándo es apropiado, cómo presentarlo.' },
  { icon: '💬', title: 'Scripts y objeciones', desc: 'Conversaciones reales, respuestas a las objeciones más comunes y cierre con ética.' },
  { icon: '🏗️', title: 'Reclutamiento y equipo', desc: 'Cómo identificar, invitar, onboardear y retener agentes productivos.' },
  { icon: '⚙️', title: 'Tecnología avanzada', desc: 'Dominio del CRM, automatización de seguimiento y uso de dashboards de producción.' },
  { icon: '🎯', title: 'Liderazgo y mentoría', desc: 'Cómo convertirte en el tipo de líder que desarrolla a otros sin perder tu producción.' },
]

export default function S16WhatIsNext() {
  return (
    <section id="siguiente" className="bg-[#071020] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Lo que sigue</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Qué sigue después de esta academia</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Esta fue la base. Ahora viene la profundidad — un entrenamiento dedicado por cada tema que importa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {modules.map((m) => (
            <AnimatedSection key={m.title}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/4 transition-all duration-300 h-full flex flex-col">
                <span className="text-2xl block mb-3">{m.icon}</span>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug flex-1">{m.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{m.desc}</p>
                <span className="mt-3 text-xs text-white/20 bg-white/5 px-2 py-0.5 rounded-full self-start">Próximamente</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#C9A84C]/10 via-[#C9A84C]/15 to-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-3xl p-10 text-center">
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">Esta academia es la base.</h3>
            <p className="text-[#C9A84C] font-black text-2xl md:text-3xl">La profundidad viene después, por tema y por producto.</p>
            <p className="text-white/40 text-sm mt-6 max-w-xl mx-auto">
              Completa esta base, aplica los fundamentos en el campo, y estarás listo para los entrenamientos avanzados que multiplican tu producción y tu equipo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
