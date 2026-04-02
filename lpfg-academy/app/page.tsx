import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CTABanner from '@/components/ui/CTABanner'
import S01Hero from '@/components/sections/S01Hero'
import S02WhatIsAcademy from '@/components/sections/S02WhatIsAcademy'
import S03Ecosystem from '@/components/sections/S03Ecosystem'
import S04Industry from '@/components/sections/S04Industry'
import S05TwoPaths from '@/components/sections/S05TwoPaths'
import S06HowToEarn from '@/components/sections/S06HowToEarn'
import S07LatinoMarket from '@/components/sections/S07LatinoMarket'
import S08Products from '@/components/sections/S08Products'
import S09Tools from '@/components/sections/S09Tools'
import S10ProduceQuick from '@/components/sections/S10ProduceQuick'
import S11WhyTheyFail from '@/components/sections/S11WhyTheyFail'
import S12Compliance from '@/components/sections/S12Compliance'
import S13Mindset from '@/components/sections/S13Mindset'
import S14ProducerToBuilder from '@/components/sections/S14ProducerToBuilder'
import S15Roadmap from '@/components/sections/S15Roadmap'
import S16WhatIsNext from '@/components/sections/S16WhatIsNext'

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main>
        <S01Hero />
        <S02WhatIsAcademy />
        <S03Ecosystem />
        <S04Industry />
        <S05TwoPaths />
        <S06HowToEarn />
        <S07LatinoMarket />
        <S08Products />
        <S09Tools />
        <S10ProduceQuick />
        <S11WhyTheyFail />
        <S12Compliance />
        <S13Mindset />
        <S14ProducerToBuilder />
        <S15Roadmap />
        <S16WhatIsNext />
        <CTABanner
          headline="Estás listo para empezar."
          sub="Tienes el mapa. Tienes las herramientas. Tienes el equipo. Solo falta la acción."
          cta="Comenzar Academia"
          href="#inicio"
        />
      </main>
      <Footer />
    </>
  )
}
