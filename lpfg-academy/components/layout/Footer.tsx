import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#071020] border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div className="max-w-xs">
            <Image src="/lpfg-logo.png" alt="LPFG" height={40} width={180} className="h-10 w-auto object-contain mb-4 brightness-110" />
            <p className="text-white/40 text-sm leading-relaxed">
              LPFG powered by NBG Latino.<br />
              Agencia + IMO + Tecnología + Formación + Cultura Latina + Desarrollo Empresarial.
            </p>
          </div>
          <div>
            <Image src="/nbg-latino-logo.png" alt="NBG Latino" height={50} width={120} className="h-12 w-auto object-contain opacity-70" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/25 text-xs leading-relaxed max-w-4xl">
            Esta academia es material educativo de uso interno para agentes de LPFG powered by NBG Latino.
            El contenido es de carácter informativo y no constituye asesoría legal, fiscal ni financiera.
            Para implementaciones en estructuras de negocio, impuestos o decisiones legales, consulta a un profesional licenciado (CPA, abogado).
            Las comisiones, renovaciones y estructuras de compensación pueden variar según el carrier, el producto y el contrato de agente.
          </p>
          <p className="text-white/20 text-xs mt-4">© {new Date().getFullYear()} Latin Prime Financial Group · NBG Latino. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
