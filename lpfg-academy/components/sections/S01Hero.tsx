'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '16', label: 'Módulos' },
  { value: '2', label: 'Caminos' },
  { value: '5d', label: 'Base' },
  { value: '∞', label: 'Crecimiento' },
]

export default function S01Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628] pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[80px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/3 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 text-[#C9A84C] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse-gold" />
            LPFG powered by NBG Latino
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {['New', 'Broker'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block gradient-text"
            >
              Academy
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed"
          >
            La academia base para agentes latinos que quieren entender la industria, producir con estructura y construir una carrera real en seguros de vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#academia"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#F0C96B] text-[#0A1628] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:-translate-y-1"
            >
              Comenzar Academia
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>→</motion.span>
            </a>
            <a
              href="#caminos"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-[#C9A84C]/50 hover:text-[#C9A84C] font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              Ver Ruta del Agente
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-4 gap-3"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="glass rounded-xl p-3 text-center">
                <div className="text-[#C9A84C] font-bold text-xl">{value}</div>
                <div className="text-white/40 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Shield + floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-[440px] h-[440px] rounded-full border border-[#C9A84C]/8 animate-spin-slow" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-[#C9A84C]/5 animate-spin-reverse" />

          <div className="relative w-[280px] h-[280px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9A84C]/10 to-[#071020]/80 animate-float" style={{ animationDuration: '6s' }} />

            <motion.svg
              width="160" height="180" viewBox="0 0 160 180" fill="none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M80 4L12 32V88C12 130 44 164 80 176C116 164 148 130 148 88V32L80 4Z" fill="url(#shieldGrad)" />
              <path d="M80 16L24 40V88C24 124 50 154 80 164C110 154 136 124 136 88V40L80 16Z" fill="white" fillOpacity="0.06" />
              <text x="80" y="102" textAnchor="middle" fill="#C9A84C" fontSize="32" fontWeight="900" fontFamily="system-ui">LP</text>
              <motion.circle cx="80" cy="36" r="6" fill="#C9A84C"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="shieldGrad" x1="12" y1="4" x2="148" y2="176" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0A1628" />
                  <stop offset="0.5" stopColor="#1a2a4a" />
                  <stop offset="1" stopColor="#0A1628" />
                </linearGradient>
              </defs>
            </motion.svg>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="170" height="190" viewBox="0 0 160 180" fill="none">
                <path d="M80 4L12 32V88C12 130 44 164 80 176C116 164 148 130 148 88V32L80 4Z" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              </svg>
            </div>
          </div>

          {[
            { pos: { top: '4%', left: '-10%' }, label: '5 Días', sub: 'Academia Base', delay: 0.6 },
            { pos: { top: '30%', right: '-14%' }, label: '2 Caminos', sub: 'Productor / Constructor', delay: 0.75 },
            { pos: { bottom: '10%', left: '-6%' }, label: '16 Módulos', sub: 'Estructura completa', delay: 0.9 },
          ].map(({ pos, label, sub, delay }, i) => (
            <motion.div
              key={i}
              className="absolute glass rounded-2xl px-4 py-3 shadow-xl shadow-black/30"
              style={pos as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.5, ease: 'backOut' }}
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}>
                <p className="text-base font-bold text-[#C9A84C]">{label}</p>
                <p className="text-xs text-white/40 mt-0.5">{sub}</p>
              </motion.div>
            </motion.div>
          ))}

          <motion.div
            className="absolute bottom-2 right-0 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] shadow-sm animate-pulse-gold" />
              <div>
                <p className="text-xs font-bold text-white">Base completa</p>
                <p className="text-xs text-white/40">Entrenamientos profundos después</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </motion.div>
        <span className="text-xs text-white/20 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
