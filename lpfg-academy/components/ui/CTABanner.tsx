import Link from 'next/link'

interface Props {
  headline: string
  sub?: string
  cta: string
  href: string
}

export default function CTABanner({ headline, sub, cta, href }: Props) {
  return (
    <section className="bg-[#C9A84C] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">{headline}</h2>
        {sub && <p className="text-[#0A1628]/70 mb-8 text-lg">{sub}</p>}
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-[#0A1628] text-[#C9A84C] font-bold px-10 py-4 rounded-full hover:bg-[#071020] transition-colors text-lg"
        >
          {cta} →
        </Link>
      </div>
    </section>
  )
}
