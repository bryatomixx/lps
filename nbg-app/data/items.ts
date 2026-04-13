// nbg-app/data/items.ts
import type { Item } from './types'

export const items: Item[] = [
  // --- Dashboard ---
  { slug: 'leaderboard', name: 'Leaderboard', categorySlug: 'dashboard', type: 'display', description: 'Top producers of the month' },
  { slug: 'boletines', name: 'Important Bulletins', categorySlug: 'dashboard', type: 'display', description: 'NBG announcements and notices' },

  // --- Training ---
  { slug: 'pre-licensing-course', name: 'XCEL Pre-Licensing Course', categorySlug: 'capacitacion', type: 'link', description: 'Pre-licensing course with XCEL Solution', url: 'https://www.xceledge.com' },
  { slug: 'pre-licensing-center', name: 'Pre-Licensing Center', categorySlug: 'capacitacion', type: 'link', description: 'Google Drive folder with study materials', url: 'https://drive.google.com' },
  { slug: 'fast-start-guide', name: 'Fast Start Guide', categorySlug: 'capacitacion', type: 'pdf', description: 'Quick start checklist', url: '/pdfs/fast-start-guide.pdf' },
  { slug: 'nbg-university', name: 'NBG University', categorySlug: 'capacitacion', type: 'link', description: 'Live training platform', url: 'https://www.nbglivetraining.com' },
  { slug: 'training-calendar', name: 'NBG Training Calendar', categorySlug: 'capacitacion', type: 'link', description: 'Training schedule', url: 'https://www.nbgtraining.com' },
  { slug: 'join-training', name: 'NBG Join a Training', categorySlug: 'capacitacion', type: 'link', description: 'Join a live training session', url: 'https://www.nbgtraining.com' },
  { slug: 'carrier-training-sites', name: 'Carrier Training Sites', categorySlug: 'capacitacion', type: 'link-list', description: 'Training portals by carrier', links: [{ label: 'Carrier Training (placeholder)', url: 'https://www.nationalbrokersgroup.com' }] },

  // --- Sales ---
  { slug: 'submit-new-sale', name: 'Submit Your New Sale', categorySlug: 'ventas', type: 'webview', description: 'Submit a new policy', url: 'https://www.policysubmit.com' },
  { slug: 'quick-quote', name: 'Quick Quote & Health Underwriting', categorySlug: 'ventas', type: 'link', description: 'Quote tool and health underwriting', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'annuity-support', name: 'NBG Annuity Support', categorySlug: 'ventas', type: 'webview', description: 'Annuity support portal', url: 'https://www.nbgannuity.com' },
  { slug: 'carrier-apps', name: 'NBG Carrier Electronic Application Sites', categorySlug: 'ventas', type: 'link-list', description: 'Electronic applications by carrier', links: [{ label: 'Carrier Apps (placeholder)', url: 'https://www.nationalbrokersgroup.com' }] },

  // --- CRM & Tech ---
  { slug: 'crm-plus', name: 'CRM+', categorySlug: 'crm-tech', type: 'link', description: 'Sign up, log in or get CRM+ support', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'technology-package', name: 'NBG Technology Package', categorySlug: 'crm-tech', type: 'link', description: 'MyAdvisor Cloud — technology package', url: 'https://www.myadvisorcloud.com' },

  // --- Team ---
  { slug: 'add-recruit', name: 'Add a New Recruit', categorySlug: 'equipo', type: 'webview', description: 'Add a new recruit to your team', url: 'https://www.nbghire.com' },
  { slug: '7th-level', name: 'NBG 7th Level Qualification', categorySlug: 'equipo', type: 'webview', description: '7th level qualification', url: 'https://www.nbg7thlevel.com' },
  { slug: 'manager-levels', name: 'NBG Manager Levels', categorySlug: 'equipo', type: 'image', description: 'Manager levels and promotion requests', imageUrl: '/manager-levels.jpg' },
  { slug: 'compensation-protection', name: 'NBG Compensation Protection', categorySlug: 'equipo', type: 'webview', description: 'Compensation protection', url: 'https://www.nbgcomp.com' },

  // --- Resources ---
  { slug: 'carrier-list', name: 'NBG Carrier List', categorySlug: 'recursos', type: 'pdf', description: 'Full carrier list', url: '/pdfs/carrier-list.pdf' },
  { slug: 'events', name: 'NBG Events', categorySlug: 'recursos', type: 'display', description: 'Upcoming NBG events' },
  { slug: 'google-drive', name: 'NBG Google Drive', categorySlug: 'recursos', type: 'link', description: 'Main Google Drive folder', url: 'https://drive.google.com' },
  { slug: 'apparel', name: 'Apparel Site', categorySlug: 'recursos', type: 'link', description: 'NBG clothing and accessories store', url: 'https://www.nationalbrokersgroup.com' },
  { slug: 'telegram', name: 'Join Telegram Chat', categorySlug: 'recursos', type: 'link', description: 'NBG agents Telegram group', url: 'https://t.me/nbglatino' },
  { slug: 'insurance-toolkit', name: 'Insurance Toolkit', categorySlug: 'recursos', type: 'link', description: 'Insurance tools for agents', url: 'https://www.landing.insurancetoolkits.com/' },

  // --- Carriers Quoter Tools ---
  { slug: 'quoter-corebridge', name: 'Corebridge', categorySlug: 'carriers-quoter', type: 'link', description: 'Corebridge Financial quoter', url: 'https://rapid-rater.live.web.corebridgefinancial.com/SimpliNowQuoter' },
  { slug: 'quoter-transamerica', name: 'Transamerica', categorySlug: 'carriers-quoter', type: 'link', description: 'Transamerica quoter', url: 'https://lifesales.transamerica.com/RunAQuoteForm.aspx?hFaceAmount=&hSumOfIPOPayments=&hReceiveMonth=&hYear=&hFrontLumSum=&hBackLumSum=&hProduct=Trendsetter%20LB%202017' },
  { slug: 'quoter-amam', name: 'AM AM', categorySlug: 'carriers-quoter', type: 'link', description: 'AM AM quoter', url: 'https://www.insuranceapplication.com/AppPage/index.html' },

  // --- Recorded Trainings (empty for now) ---

  // --- Admin Support (empty for now) ---

  // --- NBG New Hire ---
  { slug: 'nbg-new-hire', name: 'NBG New Hire', categorySlug: 'nbg-new-hire', type: 'webview', description: 'New recruit portal', url: 'https://www.nbghire.com/' },

  // --- COMP & Override ---
  { slug: 'comp-override', name: 'COMP & Override Protection', categorySlug: 'comp-override', type: 'webview', description: 'Compensation and override protection', url: 'https://www.nbgcomp.com/' },

  // --- Carriers Portals ---
  { slug: 'carrier-instabrain', name: 'Instabrain', categorySlug: 'carriers-portals', type: 'link', description: 'Instabrain portal', url: 'https://portal.instabrain.io/Account/Login?ReturnUrl=%2FApp%2F%3Fredirected%3Dtrue%26token%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1NTEiLCJ1bmlxdWVfbmFtZSI6ImNhcmxvc3QuYnlsYXRpbnByaW1lZmdAZ21haWwuY29tIiwicm9sZSI6IkFHRU5DWSIsIm5iZiI6MTc0NjU2MDIxNiwiZXhwIjoxNzQ2NTYzODE2LCJpYXQiOjE3NDY1NjAyMTZ9.BUy1c4gYy-vso9K4f1ci7GD425xJ3Hj_DEILo1kZM8E%26expireIn%3D3600' },
  { slug: 'carrier-transamerica', name: 'Transamerica', categorySlug: 'carriers-portals', type: 'link', description: 'Transamerica portal', url: 'https://secure.transamerica.com/login/sign-in/login.html?requestUrl=/pkmslogout&token=Unknown' },
  { slug: 'carrier-aml', name: 'AML', categorySlug: 'carriers-portals', type: 'link', description: 'AML (Aetna) portal', url: 'https://www.aetna.com/aimmanageaccount/login?identityTransaction=VRAVwpkQ0BWc2RIkW1Bu%2BO8qoP3iDZNOc9Rpw%2FE79aPPusEwTDJzfSDFeU3WUfprbbVvCK5Qqni9EczLsWThl8n%2B3bdwAgGGXektXLSqA5ja9E8VMbQtC1Knhey%2B10eF7HFV86aAJTSofmwJRQansxQA%2FB4kMvvgUJSANBLKbgk6ndRtd0aL2D1JZB9BE1ZmnK1caIx1ll9ZJt1S%2FGf%2BxoBCTJEeVE4Zz5hxETSq7wEr6XHb0eE2TGC8nBR6%2F9vmb1kleDYg9bNysFCHRHwbTt65jaxFC%2BiGkQidnAPkZi%2BfhqMamcMZ3V1PvhDWkK0dNZlf1SQL%2Fb7B3A8OD0y5Bhqi%2BLjVSXjP%2B47HZ46EeSDlo5AvzgdAzahYGlhFFqXQfk4LfkSemlkivEkJCbecdUof%2F%2F3Du3niZ9ZHj6RoCzLKzAcokhxk2epXDyvJ1OYyOEEWktZyeIQx8CaytkqSwaRHA3OyQARDqaiFGtZdZfbLCiu765FmQGzOFh00MFzeQez2DvpCaC5g1PD%2F%2FlyMZ%2FTGt%2BJxEhf1p7fP08bmOcbYJCJJMWLqthS%2BvMqLsUREPocG3bFTUZjZO1bWEDuoNgjUhFZWoxEwV74jyif9Xk6B5PlBJAvAXxQGxTPEUoXfOLIro272pQglyg%2FAmkswIQ%3D%3D&appname=SSIBroker&branding=amh&skin=&language=&channel=web&psuid=&biometric_text=&businessdata=channel~tpa|subchannel~AMH&business_event=Login' },
  { slug: 'carrier-fg', name: 'F&G', categorySlug: 'carriers-portals', type: 'link', description: 'F&G Life portal', url: 'https://saleslink.fglife.com/' },
  { slug: 'carrier-nlg', name: 'NLG', categorySlug: 'carriers-portals', type: 'link', description: 'National Life Group portal', url: 'https://nlg-prod.auth0.com/login?state=hKFo2SAyeWZtdENaQ0RzLVl4dTFJa3pNRWJDMGtncktfazVIcKFupWxvZ2luo3RpZNkgQUcxb2RMQS1BT0FFQ2xZQTljYnRwNnlsSU01eks4RDKjY2lk2SBNeUdxTjREc2doa3ZwNjV6VldybWtVUGM5cU5JeVpyUg&client=MyGqN4Dsghkvp65zVWrmkUPc9qNIyZrR&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.nationallife.com%2Fagent%2Fauth%2Flogincallback&response_type=code%20id_token&scope=openid%20profile%20email&response_mode=form_post&nonce=639117004521553309.ZjQ3ZjY2N2YtMGRiNS00OGViLTkwMzAtZjkxNjVlMTE3MTY2NTEwYTcwZDctMjI4My00ZWM3LWIzMjQtYzM1ZDUzNDU2MmRm&connection=NLGAgentsDB&audience=https%3A%2F%2Fapi.nlg.net%2Fagent-portal&x-client-SKU=ID_NET461&x-client-ver=5.7.0.0' },
  { slug: 'carrier-amam', name: 'AM AM', categorySlug: 'carriers-portals', type: 'link', description: 'AM AM portal', url: 'https://www.insuranceapplication.com/cgi/webappmobile/login.aspx?ReturnUrl=%2fcgi%2fwebappmobile%2f' },
  { slug: 'carrier-foresters', name: 'Foresters', categorySlug: 'carriers-portals', type: 'link', description: 'Foresters portal', url: 'https://myezbiz.foresters.com/my.policy' },
  { slug: 'carrier-aig', name: 'AIG/Corebridge', categorySlug: 'carriers-portals', type: 'link', description: 'AIG / Corebridge Financial portal', url: 'https://connext.corebridgefinancial.com/life/connext-portal/public/login' },
  { slug: 'carrier-ameritas', name: 'Ameritas', categorySlug: 'carriers-portals', type: 'link', description: 'Ameritas portal', url: 'https://service.ameritas.com/service/login.asp' },
  { slug: 'carrier-americo', name: 'Americo', categorySlug: 'carriers-portals', type: 'link', description: 'Americo portal', url: 'https://account.americoagent.com/Identity/Account/Login/?returnUrl=https%3a%2f%2ftools.americoagent.com%2f' },

  // --- Support ---
  { slug: 'policy-conservation', name: 'Policy Conservation', categorySlug: 'soporte', type: 'email', description: 'Policy conservation', email: 'Policyconservation@NationalBrokersGroup.com' },
  { slug: 'case-management', name: 'Case Management', categorySlug: 'soporte', type: 'email', description: 'Case management', email: 'Casemanagement@NationalBrokersGroup.com' },
  { slug: 'debt-management', name: 'Debt Management', categorySlug: 'soporte', type: 'email', description: 'Debt management', email: 'DebtManagement@NationalBrokersGroup.com' },
  { slug: 'contact-us', name: 'Contact Us', categorySlug: 'soporte', type: 'email', description: 'General support', email: 'Support@NationalBrokersGroup.com' },
  { slug: 'support-ticket', name: 'Support Ticket', categorySlug: 'soporte', type: 'form', description: 'Create a support ticket' },
]
