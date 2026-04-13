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
  { slug: 'manager-levels', name: 'NBG Manager Levels', categorySlug: 'equipo', type: 'image', description: 'Niveles de manager y solicitar promoción', imageUrl: '/manager-levels.jpg' },
  { slug: 'compensation-protection', name: 'NBG Compensation Protection', categorySlug: 'equipo', type: 'webview', description: 'Protección de compensación', url: 'https://www.nbgcomp.com' },

  // --- Recursos ---
  { slug: 'carrier-list', name: 'NBG Carrier List', categorySlug: 'recursos', type: 'pdf', description: 'Lista completa de carriers', url: '/pdfs/carrier-list.pdf' },
  { slug: 'events', name: 'NBG Events', categorySlug: 'recursos', type: 'display', description: 'Próximos eventos de NBG' },
  { slug: 'google-drive', name: 'NBG Google Drive', categorySlug: 'recursos', type: 'link', description: 'Carpeta principal de Google Drive', url: 'https://drive.google.com' },
  { slug: 'apparel', name: 'Apparel Site', categorySlug: 'recursos', type: 'link', description: 'Tienda de ropa y accesorios NBG', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'telegram', name: 'Join Telegram Chat', categorySlug: 'recursos', type: 'link', description: 'Grupo de Telegram de agentes NBG', url: 'https://t.me/nbglatino' },
  { slug: 'insurance-toolkit', name: 'Insurance Toolkit', categorySlug: 'recursos', type: 'link', description: 'Herramientas de seguros para agentes', url: 'https://www.landing.insurancetoolkits.com/' },

  // --- NBG New Hire ---
  { slug: 'nbg-new-hire', name: 'NBG New Hire', categorySlug: 'nbg-new-hire', type: 'webview', description: 'Portal de nuevos reclutas', url: 'https://www.nbghire.com/' },

  // --- COMP & Override ---
  { slug: 'comp-override', name: 'COMP & Override Protection', categorySlug: 'comp-override', type: 'webview', description: 'Protección de compensación y override', url: 'https://www.nbgcomp.com/' },

  // --- Carriers Portals ---
  { slug: 'carrier-instabrain', name: 'Instabrain', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de Instabrain', url: 'https://portal.instabrain.io/Account/Login?ReturnUrl=%2FApp%2F%3Fredirected%3Dtrue%26token%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1NTEiLCJ1bmlxdWVfbmFtZSI6ImNhcmxvc3QuYnlsYXRpbnByaW1lZmdAZ21haWwuY29tIiwicm9sZSI6IkFHRU5DWSIsIm5iZiI6MTc0NjU2MDIxNiwiZXhwIjoxNzQ2NTYzODE2LCJpYXQiOjE3NDY1NjAyMTZ9.BUy1c4gYy-vso9K4f1ci7GD425xJ3Hj_DEILo1kZM8E%26expireIn%3D3600' },
  { slug: 'carrier-transamerica', name: 'Transamerica', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de Transamerica', url: 'https://secure.transamerica.com/login/sign-in/login.html?requestUrl=/pkmslogout&token=Unknown' },
  { slug: 'carrier-aml', name: 'AML', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de AML (Aetna)', url: 'https://www.aetna.com/aimmanageaccount/login?identityTransaction=VRAVwpkQ0BWc2RIkW1Bu%2BO8qoP3iDZNOc9Rpw%2FE79aPPusEwTDJzfSDFeU3WUfprbbVvCK5Qqni9EczLsWThl8n%2B3bdwAgGGXektXLSqA5ja9E8VMbQtC1Knhey%2B10eF7HFV86aAJTSofmwJRQansxQA%2FB4kMvvgUJSANBLKbgk6ndRtd0aL2D1JZB9BE1ZmnK1caIx1ll9ZJt1S%2FGf%2BxoBCTJEeVE4Zz5hxETSq7wEr6XHb0eE2TGC8nBR6%2F9vmb1kleDYg9bNysFCHRHwbTt65jaxFC%2BiGkQidnAPkZi%2BfhqMamcMZ3V1PvhDWkK0dNZlf1SQL%2Fb7B3A8OD0y5Bhqi%2BLjVSXjP%2B47HZ46EeSDlo5AvzgdAzahYGlhFFqXQfk4LfkSemlkivEkJCbecdUof%2F%2F3Du3niZ9ZHj6RoCzLKzAcokhxk2epXDyvJ1OYyOEEWktZyeIQx8CaytkqSwaRHA3OyQARDqaiFGtZdZfbLCiu765FmQGzOFh00MFzeQez2DvpCaC5g1PD%2F%2FlyMZ%2FTGt%2BJxEhf1p7fP08bmOcbYJCJJMWLqthS%2BvMqLsUREPocG3bFTUZjZO1bWEDuoNgjUhFZWoxEwV74jyif9Xk6B5PlBJAvAXxQGxTPEUoXfOLIro272pQglyg%2FAmkswIQ%3D%3D&appname=SSIBroker&branding=amh&skin=&language=&channel=web&psuid=&biometric_text=&businessdata=channel~tpa|subchannel~AMH&business_event=Login' },
  { slug: 'carrier-fg', name: 'F&G', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de F&G Life', url: 'https://saleslink.fglife.com/' },
  { slug: 'carrier-nlg', name: 'NLG', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de National Life Group', url: 'https://nlg-prod.auth0.com/login?state=hKFo2SAyeWZtdENaQ0RzLVl4dTFJa3pNRWJDMGtncktfazVIcKFupWxvZ2luo3RpZNkgQUcxb2RMQS1BT0FFQ2xZQTljYnRwNnlsSU01eks4RDKjY2lk2SBNeUdxTjREc2doa3ZwNjV6VldybWtVUGM5cU5JeVpyUg&client=MyGqN4Dsghkvp65zVWrmkUPc9qNIyZrR&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.nationallife.com%2Fagent%2Fauth%2Flogincallback&response_type=code%20id_token&scope=openid%20profile%20email&response_mode=form_post&nonce=639117004521553309.ZjQ3ZjY2N2YtMGRiNS00OGViLTkwMzAtZjkxNjVlMTE3MTY2NTEwYTcwZDctMjI4My00ZWM3LWIzMjQtYzM1ZDUzNDU2MmRm&connection=NLGAgentsDB&audience=https%3A%2F%2Fapi.nlg.net%2Fagent-portal&x-client-SKU=ID_NET461&x-client-ver=5.7.0.0' },
  { slug: 'carrier-amam', name: 'AM AM', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de AM AM', url: 'https://www.insuranceapplication.com/cgi/webappmobile/login.aspx?ReturnUrl=%2fcgi%2fwebappmobile%2f' },
  { slug: 'carrier-foresters', name: 'Foresters', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de Foresters', url: 'https://myezbiz.foresters.com/my.policy' },
  { slug: 'carrier-aig', name: 'AIG/Corebridge', categorySlug: 'carriers-portals', type: 'link', description: 'Portal de AIG / Corebridge Financial', url: 'https://connext.corebridgefinancial.com/life/connext-portal/public/login' },

  // --- Soporte ---
  { slug: 'policy-conservation', name: 'Policy Conservation', categorySlug: 'soporte', type: 'email', description: 'Conservación de pólizas', email: 'Policyconservation@NationalBrokersGroup.com' },
  { slug: 'case-management', name: 'Case Management', categorySlug: 'soporte', type: 'email', description: 'Manejo de casos', email: 'Casemanagement@NationalBrokersGroup.com' },
  { slug: 'debt-management', name: 'Debt Management', categorySlug: 'soporte', type: 'email', description: 'Manejo de deudas', email: 'DebtManagement@NationalBrokersGroup.com' },
  { slug: 'contact-us', name: 'Contact Us', categorySlug: 'soporte', type: 'email', description: 'Soporte general', email: 'Support@NationalBrokersGroup.com' },
  { slug: 'support-ticket', name: 'Support Ticket', categorySlug: 'soporte', type: 'form', description: 'Crear un ticket de soporte' },
]
