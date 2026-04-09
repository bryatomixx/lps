// nbg-app/data/items.ts
import type { Item } from './types'

export const items: Item[] = [
  // --- Dashboard ---
  { slug: 'leaderboard', name: 'Leaderboard', categorySlug: 'dashboard', type: 'display', description: 'Ranking de productores del mes' },
  { slug: 'boletines', name: 'Important Bulletins', categorySlug: 'dashboard', type: 'display', description: 'Comunicados y avisos de NBG' },

  // --- Capacitación ---
  { slug: 'pre-licensing-course', name: 'XCEL Pre-Licensing Course', categorySlug: 'capacitacion', type: 'link', description: 'Curso de pre-licencia con XCEL Solution', url: 'https://www.xceledge.com' },
  { slug: 'pre-licensing-center', name: 'Pre-Licensing Center', categorySlug: 'capacitacion', type: 'link', description: 'Carpeta de Google Drive con materiales', url: 'https://drive.google.com' },
  { slug: 'fast-start-guide', name: 'Fast Start Guide', categorySlug: 'capacitacion', type: 'pdf', description: 'Checklist de inicio rápido', url: '/pdfs/fast-start-guide.pdf' },
  { slug: 'nbg-university', name: 'NBG University', categorySlug: 'capacitacion', type: 'link', description: 'Plataforma de entrenamiento en vivo', url: 'https://www.nbglivetraining.com' },
  { slug: 'training-calendar', name: 'NBG Training Calendar', categorySlug: 'capacitacion', type: 'link', description: 'Calendario de entrenamientos', url: 'https://www.nbgtraining.com' },
  { slug: 'join-training', name: 'NBG Join a Training', categorySlug: 'capacitacion', type: 'link', description: 'Unirse a un entrenamiento en vivo', url: 'https://www.nbgtraining.com' },
  { slug: 'carrier-training-sites', name: 'Carrier Training Sites', categorySlug: 'capacitacion', type: 'link-list', description: 'Portales de entrenamiento por carrier', links: [{ label: 'Carrier Training (placeholder)', url: 'https://www.nationalbrokersgroup.com' }] },

  // --- Ventas ---
  { slug: 'submit-new-sale', name: 'Submit Your New Sale', categorySlug: 'ventas', type: 'webview', description: 'Someter una nueva póliza', url: 'https://www.policysubmit.com' },
  { slug: 'quick-quote', name: 'Quick Quote & Health Underwriting', categorySlug: 'ventas', type: 'link', description: 'Cotizador y underwriting de salud', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'annuity-support', name: 'NBG Annuity Support', categorySlug: 'ventas', type: 'webview', description: 'Portal de soporte para anualidades', url: 'https://www.nbgannuity.com' },
  { slug: 'carrier-apps', name: 'NBG Carrier Electronic Application Sites', categorySlug: 'ventas', type: 'link-list', description: 'Aplicaciones electrónicas por carrier', links: [{ label: 'Carrier Apps (placeholder)', url: 'https://www.nationalbrokersgroup.com' }] },

  // --- CRM & Tech ---
  { slug: 'crm-plus', name: 'CRM+', categorySlug: 'crm-tech', type: 'link', description: 'Registrarse, iniciar sesión o soporte en CRM+', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'technology-package', name: 'NBG Technology Package', categorySlug: 'crm-tech', type: 'link', description: 'MyAdvisor Cloud — paquete tecnológico', url: 'https://www.myadvisorcloud.com' },

  // --- Equipo ---
  { slug: 'add-recruit', name: 'Add a New Recruit', categorySlug: 'equipo', type: 'webview', description: 'Agregar un nuevo recluta al equipo', url: 'https://www.nbghire.com' },
  { slug: '7th-level', name: 'NBG 7th Level Qualification', categorySlug: 'equipo', type: 'webview', description: 'Calificación para el 7mo nivel', url: 'https://www.nbg7thlevel.com' },
  { slug: 'manager-levels', name: 'NBG Manager Levels', categorySlug: 'equipo', type: 'link', description: 'Niveles de manager y solicitar promoción', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'compensation-protection', name: 'NBG Compensation Protection', categorySlug: 'equipo', type: 'webview', description: 'Protección de compensación', url: 'https://www.nbgcomp.com' },

  // --- Recursos ---
  { slug: 'carrier-list', name: 'NBG Carrier List', categorySlug: 'recursos', type: 'pdf', description: 'Lista completa de carriers', url: '/pdfs/carrier-list.pdf' },
  { slug: 'events', name: 'NBG Events', categorySlug: 'recursos', type: 'display', description: 'Próximos eventos de NBG' },
  { slug: 'google-drive', name: 'NBG Google Drive', categorySlug: 'recursos', type: 'link', description: 'Carpeta principal de Google Drive', url: 'https://drive.google.com' },
  { slug: 'apparel', name: 'Apparel Site', categorySlug: 'recursos', type: 'link', description: 'Tienda de ropa y accesorios NBG', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'telegram', name: 'Join Telegram Chat', categorySlug: 'recursos', type: 'link', description: 'Grupo de Telegram de agentes NBG', url: 'https://t.me/nbglatino' },

  // --- Soporte ---
  { slug: 'policy-conservation', name: 'Policy Conservation', categorySlug: 'soporte', type: 'email', description: 'Conservación de pólizas', email: 'Policyconservation@NationalBrokersGroup.com' },
  { slug: 'case-management', name: 'Case Management', categorySlug: 'soporte', type: 'email', description: 'Manejo de casos', email: 'Casemanagement@NationalBrokersGroup.com' },
  { slug: 'debt-management', name: 'Debt Management', categorySlug: 'soporte', type: 'email', description: 'Manejo de deudas', email: 'DebtManagement@NationalBrokersGroup.com' },
  { slug: 'contact-us', name: 'Contact Us', categorySlug: 'soporte', type: 'email', description: 'Soporte general', email: 'Support@NationalBrokersGroup.com' },
  { slug: 'support-ticket', name: 'Support Ticket', categorySlug: 'soporte', type: 'form', description: 'Crear un ticket de soporte' },
]
