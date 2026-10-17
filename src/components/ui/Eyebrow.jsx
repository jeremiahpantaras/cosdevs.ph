/**
 * Mono section identifier. On light surfaces the text is Slate (5.5:1 on Cloud) — the PDF's coral labels
 * fail its own 4.5:1 rule — with a small Dawn tick for warmth. On navy surfaces the text is Amber (9.2:1).
 */
export default function Eyebrow({ children, tone = 'light', className = '' }) {
  return (
    <p className={`type-label flex items-center gap-3 ${tone === 'dark' ? 'text-amber' : 'text-slate'} ${className}`}>
      <span aria-hidden="true" className="bg-dawn block h-[2px] w-3 shrink-0" />
      {children}
    </p>
  )
}
