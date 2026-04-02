import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const tools = [
  { icon: '📊', name: 'CRM', desc: 'Gestiona tu cartera de clientes, seguimientos, renovaciones y pipeline de prospectos desde un solo lugar.', badge: 'Latin Prime Systems' },
  { icon: '⚡', name: 'Automatización', desc: 'Secuencias automáticas de seguimiento, recordatorios y nurturing para que ningún prospecto se enfríe.', badge: 'LPS' },
  { icon: '📅', name: 'Calendarios', desc: 'Agenda de citas integrada. El cliente reserva su tiempo directamente, sin vaivén de mensajes.', badge: 'LPS' },
  { icon: '🎓', name: 'Academia digital', desc: 'Esta academia y los entrenamientos posteriores están disponibles en la plataforma digital de LPFG.', badge: 'LPFG' },
  { icon: '🧮', name: 'Herramientas de cotización', desc: 'Cotizadores de los carriers para presentar opciones comparativas en tiempo real durante la cita.', badge: 'Carriers' },
  { icon: '📁', name: 'Recursos de carriers', desc: 'Materiales de presentación, formularios de solicitud, guías de underwriting y soporte del carrier.', badge: 'NBG Latino' },
  { icon: '💬', name: 'Comunicación interna', desc: 'Canales de comunicación con tu upline, con el equipo LPFG y con soporte de NBG Latino.', badge: 'LPFG' },
  { icon: '📈', name: 'Reportes y KPIs', desc: 'Dashboards para monitorear producción, persistencia, actividad semanal y avance hacia tus metas.', badge: 'LPS' },
]

export default function S09Tools() {
  return (
    <section id="herramientas" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Stack del agente</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Herramientas del agente LPFG</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Tienes la tecnología. Úsala. Pero recuerda el principio fundamental:</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-[#C9A84C] rounded-2xl p-5 text-center mb-12">
            <p className="text-[#0A1628] font-bold text-lg">
              &ldquo;La tecnología potencia al agente; no reemplaza la disciplina ni la venta.&rdquo;
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((t) => (
            <AnimatedSection key={t.name}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/4 transition-all duration-300 h-full flex flex-col">
                <span className="text-2xl mb-3 block">{t.icon}</span>
                <h3 className="text-white font-bold text-base mb-2">{t.name}</h3>
                <p className="text-white/45 text-xs leading-relaxed flex-1">{t.desc}</p>
                <span className="mt-3 self-start text-xs bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-0.5 rounded-full">{t.badge}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
