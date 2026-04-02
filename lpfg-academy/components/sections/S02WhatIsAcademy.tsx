import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const scope = [
  'Cómo funciona la industria de seguros de vida',
  'Cómo se gana dinero en este modelo',
  'Qué productos existen y qué problema resuelve cada uno',
  'Cómo producir sin improvisar',
  'Cómo evitar los errores más comunes',
  'Cómo aprovechar el ecosistema LPFG powered by NBG Latino',
]

const advanced = [
  'Producto a profundidad (Term, FE, IUL, WL, FIA)',
  'Underwriting y MIB',
  'Scripts y manejo de objeciones',
  'IBC completo',
  'Reclutamiento y desarrollo de equipo',
  'Tecnología avanzada y CRM',
  'Liderazgo y mentoría',
  'Anualidades (FIA)',
]

export default function S02WhatIsAcademy() {
  return (
    <section id="academia" className="bg-[#071020] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Sobre esta academia</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Qué es esta academia?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Esta no es la formación avanzada final. Es el mapa completo del negocio — diseñado para que entiendas cómo funciona todo antes de profundizar en cualquier tema.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-3xl p-8">
              <h3 className="font-bold text-[#C9A84C] text-xl mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C9A84C] text-[#0A1628] flex items-center justify-center text-sm font-black">✓</span>
                Esta academia cubre
              </h3>
              <ul className="space-y-4">
                {scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-xs flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/3 border border-white/8 rounded-3xl p-8">
              <h3 className="font-bold text-white/80 text-xl mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-white/10 text-white/60 flex items-center justify-center text-sm font-black">→</span>
                Después de esta base
              </h3>
              <p className="text-white/40 text-sm mb-6">Entrenamientos profundos por tema y producto:</p>
              <ul className="space-y-3">
                {advanced.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                    <span className="text-white/50 text-sm">{item}</span>
                    <span className="ml-auto text-xs text-white/20 bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">Próximo</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-[#C9A84C] rounded-2xl p-6 text-center">
              <p className="font-bold text-[#0A1628] text-base">
                &ldquo;Esta academia es la base.<br />
                <span className="font-black">La profundidad viene después, por tema y por producto.&rdquo;</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
