import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const categories = [
  {
    title: 'Protección básica',
    color: '#C9A84C',
    products: [
      { name: 'Term Life', desc: 'Cobertura temporal asequible. 10, 20 o 30 años. Ideal para reemplazo de ingresos e hipoteca.' },
      { name: 'Mortgage Protection', desc: 'Diseñado para proteger la hipoteca familiar en caso de fallecimiento o incapacidad.' },
      { name: 'Final Expense', desc: 'Cobertura de monto menor para gastos finales. Alta aceptación, proceso simplificado.' },
    ],
  },
  {
    title: 'Protección + acumulación',
    color: '#F0C96B',
    products: [
      { name: 'IUL (Indexed Universal Life)', desc: 'Cobertura permanente con valor en efectivo ligado a índices del mercado. Flexible y con crecimiento libre de impuestos.' },
      { name: 'Whole Life', desc: 'Cobertura permanente con valor garantizado. Usado en casos de planificación patrimonial y estate planning.' },
    ],
  },
  {
    title: 'Planificación y preservación',
    color: '#C9A84C',
    products: [
      { name: 'IBC (Infinite Banking Concept)', desc: 'Estrategia con Whole Life para crear un banco privado personal. Tema avanzado — se profundiza en entrenamientos posteriores.' },
      { name: 'FIA (Fixed Indexed Annuity)', desc: 'Producto de acumulación para retiro con protección contra pérdidas. Para clientes que priorizan seguridad.' },
    ],
  },
  {
    title: 'Casos especiales',
    color: '#F0C96B',
    products: [
      { name: 'Living Benefits', desc: 'Riders que permiten acceder al beneficio en vida ante diagnóstico crítico, crónico o terminal.' },
      { name: 'Planificación infantil', desc: 'Pólizas diseñadas para asegurar el futuro financiero de menores desde temprana edad.' },
      { name: 'Casos ITIN / carrier-specific', desc: 'Algunos carriers aceptan asegurados con ITIN. Verifica disponibilidad por carrier específico.' },
    ],
  },
]

export default function S08Products() {
  return (
    <section id="productos" className="bg-[#071020] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Portafolio</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Qué vendemos y qué problema resuelve
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Un mapa general del portafolio. La profundidad por producto viene en entrenamientos dedicados.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <AnimatedSection key={cat.title}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-7 h-full">
                <h3 className="font-bold mb-5 flex items-center gap-2" style={{ color: cat.color }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.products.map((p) => (
                    <div key={p.name} className="border-l-2 pl-4" style={{ borderColor: cat.color + '40' }}>
                      <p className="text-white font-semibold text-sm mb-1">{p.name}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-8 bg-white/3 border border-white/8 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">📌</span>
            <p className="text-white/50 text-sm leading-relaxed">
              <strong className="text-white/70">Este es un overview, no la formación completa.</strong> Cada producto tiene su propio entrenamiento dedicado donde se cubre underwriting, scripts, objeciones, suitability y casos prácticos. Aquí solo necesitas entender qué existe y para quién es cada producto.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
