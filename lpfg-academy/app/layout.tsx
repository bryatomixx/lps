import type { Metadata } from 'next'
import { inter, playfair } from '@/lib/fonts'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'New Broker Academy | LPFG powered by NBG Latino',
  description: 'La academia base para agentes latinos que quieren entender la industria, producir con estructura y construir una carrera real en seguros de vida.',
  metadataBase: new URL('https://lpfg-academy.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-[var(--font-inter)] bg-[#0A1628]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
