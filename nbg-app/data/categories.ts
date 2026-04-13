// nbg-app/data/categories.ts
import type { Category } from './types'

export const categories: Category[] = [
  {
    slug: 'dashboard',
    name: 'Dashboard',
    icon: '🏆',
    color: 'border-amber-500',
    description: 'Leaderboard y boletines importantes',
  },
  {
    slug: 'capacitacion',
    name: 'Capacitación',
    icon: '🎓',
    color: 'border-blue-500',
    description: 'Pre-licensing, training y universidad NBG',
  },
  {
    slug: 'ventas',
    name: 'Ventas',
    icon: '💼',
    color: 'border-green-500',
    description: 'Herramientas para cerrar y someter ventas',
  },
  {
    slug: 'crm-tech',
    name: 'CRM & Tech',
    icon: '🛠',
    color: 'border-purple-500',
    description: 'CRM y paquete tecnológico NBG',
  },
  {
    slug: 'equipo',
    name: 'Equipo',
    icon: '👥',
    color: 'border-sky-500',
    description: 'Recruiting, niveles y compensación',
  },
  {
    slug: 'recursos',
    name: 'Recursos',
    icon: '📁',
    color: 'border-orange-500',
    description: 'Carriers, eventos, Drive y tienda',
  },
  {
    slug: 'soporte',
    name: 'Soporte',
    icon: '🎫',
    color: 'border-rose-500',
    description: 'Contacto, tickets y case management',
  },
  {
    slug: 'nbg-new-hire',
    name: 'NBG New Hire',
    icon: '🆕',
    color: 'border-teal-500',
    description: 'Portal de nuevos reclutas NBG',
    directItemSlug: 'nbg-new-hire',
  },
  {
    slug: 'comp-override',
    name: 'COMP & Override Protection',
    icon: '🛡️',
    color: 'border-yellow-500',
    description: 'Protección de compensación y override NBG',
    directItemSlug: 'comp-override',
  },
  {
    slug: 'carriers-portals',
    name: 'Carriers Portals Log In',
    icon: '🏢',
    color: 'border-indigo-500',
    description: 'Acceso a portales de carriers',
  },
]
