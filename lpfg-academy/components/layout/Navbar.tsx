'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const SECTIONS = [
  'inicio', 'academia', 'ecosistema', 'industria', 'caminos',
  'ingresos', 'mercado', 'productos', 'herramientas', 'producir',
  'errores', 'compliance', 'mentalidad', 'constructor', 'ruta', 'siguiente'
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((id, i) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#071020]/95 backdrop-blur-xl shadow-lg shadow-black/30' : 'bg-[#0A1628]'
    }`}>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#F0C96B] origin-left"
        style={{ scaleX: scrollYProgress, right: 0 }}
      />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#inicio" className="flex-shrink-0">
          <Image src="/lpfg-logo.png" alt="LPFG powered by NBG Latino" height={36} width={160} className="h-9 w-auto object-contain brightness-[1.1]" />
        </Link>

        <div className="hidden lg:flex items-center gap-1.5">
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              title={id}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? 'w-5 h-2 bg-[#C9A84C]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#inicio"
            className="bg-[#C9A84C] hover:bg-[#F0C96B] text-[#0A1628] text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:-translate-y-0.5"
          >
            Comenzar Academia
          </a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menú">
          <motion.div animate={open ? 'open' : 'closed'} className="flex flex-col gap-1.5 w-5">
            <motion.span variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }} className="block h-0.5 bg-white rounded-full" />
            <motion.span variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }} className="block h-0.5 bg-white rounded-full" />
            <motion.span variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }} className="block h-0.5 bg-white rounded-full" />
          </motion.div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#071020]/98 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-3"
        >
          {['Inicio', 'La Academia', 'El Ecosistema', 'La Industria', 'Los 2 Caminos', 'Ingresos', 'Mercado Latino', 'Productos', 'Herramientas', 'Cómo Producir', 'Por Qué Fracasan', 'Compliance', 'Mentalidad', 'Productor→Constructor', 'Ruta 30-60-90', 'Qué Sigue'].map((label, i) => (
            <a key={i} href={`#${SECTIONS[i]}`} className="text-white/70 font-medium hover:text-[#C9A84C] transition-colors text-sm" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#inicio" className="bg-[#C9A84C] text-[#0A1628] font-bold px-5 py-2.5 rounded-full text-center mt-2" onClick={() => setOpen(false)}>
            Comenzar Academia
          </a>
        </motion.div>
      )}
    </header>
  )
}
