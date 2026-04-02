import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const points = [
  {
    icon: '👥',
    title: 'Mercado de gran escala',
    desc: 'La población hispana en Estados Unidos es una de las más grandes y de más rápido crecimiento del país. Representa millones de familias con necesidades de protección financiera activa.',
  },
  {
    icon: '🛡️',
    title: 'Alta necesidad, baja cobertura',
    desc: 'Una proporción significativa de familias latinas no cuenta con seguro de vida suficiente. La brecha entre la necesidad y la cobertura real es una oportunidad de servicio genuina.',
  },
  {
    icon: '🚧',
    title: 'Barreras reales a superar',
    desc: 'El desconocimiento del producto, la percepción de costo, el idioma y la desconfianza histórica hacia instituciones financieras son barreras que un agente bilingüe y culturalmente alineado puede resolver.',
  },
  {
    icon: '💬',
    title: 'La conexión cultural importa',
    desc: 'Las decisiones financieras se basan en confianza. Un agente que comparte idioma, cultura y valores tiene una ventaja real a la hora de educar y cerrar.',
  },
  {
    icon: '📱',
    title: 'Fuerza de redes y contenido',
    desc: 'El mercado latino tiene una presencia digital activa. El contenido educativo, los testimonios en español y la presencia en redes sociales son herramientas de prospección de alto impacto.',
  },
  {
    icon: '🌎',
    title: 'Puerto Rico + USA',
    desc: 'El ecosistema LPFG powered by NBG Latino opera en ambos mercados, lo que amplía las posibilidades de crecimiento para agentes con conexiones en la isla y el continente.',
  },
]

export default function S07LatinoMarket() {
  return (
    <section id="mercado" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Oportunidad de mercado</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por qué el mercado latino<br />representa una oportunidad real
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              No hablamos de hype. Hablamos de lógica. Aquí están los factores que hacen de este mercado una oportunidad sostenible.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p) => (
            <AnimatedSection key={p.title}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/4 transition-all duration-300 h-full">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 bg-[#C9A84C]/8 border border-[#C9A84C]/20 rounded-3xl p-8 text-center">
            <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
              <strong className="text-[#C9A84C]">Nota:</strong> Los datos de mercado varían según la fuente y el período de medición. Los puntos anteriores reflejan tendencias generales observadas en el sector. Para cifras actualizadas, consulta estudios de LIMRA, el Censo de EE.UU. u organizaciones del sector financiero.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
