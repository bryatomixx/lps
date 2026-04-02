export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A84C] block mb-3">
      {children}
    </span>
  )
}
