import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const producer = [
  'Prospectar en tu mercado',
  'Agendar citas de calidad',
  'Presentar y educar al cliente',
  'Cerrar con claridad y convicción',
  'Proteger familias con cobertura real',
  'Generar comisiones consistentes',
  'Desarrollar habilidad comercial sólida',
]

const builder = [
  'Producir primero — siempre',
  'Dominar los fundamentos del negocio',
  'Identificar y desarrollar nuevos agentes',
  'Activar brokers y dar acompañamiento',
  'Aprender accountability y retención',
  'Construir equipo con ética y estructura',
  'Crear crecimiento sostenible de largo plazo',
]

export default function S05TwoPaths() {
  return (
    <section id="caminos" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Los 2 caminos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Qué rol es el tuyo?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Dentro de LPFG powered by NBG Latino hay dos caminos claros. Ambos empiezan en el mismo lugar.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <AnimatedSection>
            <div className="bg-[#C9A84C]/8 border-2 border-[#C9A84C]/30 rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#C9A84C]/10 text-8xl font-black pointer-events-none select-none">P</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A84C] flex items-center justify-center text-[#0A1628] font-black text-xl">🎯</div>
                  <div>
                    <h3 className="text-[#C9A84C] font-black text-2xl">Productor</h3>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Camino 1</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {producer.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C9A84C] text-[#0A1628] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/3 border-2 border-white/10 rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/5 text-8xl font-black pointer-events-none select-none">C</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white font-black text-xl">🏗️</div>
                  <div>
                    <h3 className="text-white font-black text-2xl">Constructor</h3>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Camino 2</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {builder.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 text-white/50 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#0A1628] via-[#C9A84C]/10 to-[#0A1628] border border-[#C9A84C]/25 rounded-3xl p-8 text-center">
            <p className="text-white font-bold text-xl md:text-2xl leading-relaxed mb-3">
              &ldquo;Aquí no se construye primero y se aprende a vender después.&rdquo;
            </p>
            <p className="text-[#C9A84C] font-black text-xl md:text-2xl">
              &ldquo;Primero aprende a producir. Luego aprende a multiplicar.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
