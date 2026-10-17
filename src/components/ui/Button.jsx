import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BASE =
  'group inline-flex min-h-12 md:min-h-11 items-center justify-center gap-2 rounded-control px-5 text-[0.9375rem] font-semibold transition-[filter,background-color,color,border-color] duration-200 motion-reduce:transition-none'

const VARIANTS = {
  primary: 'bg-horizon text-white hover:brightness-90',
  navy: 'bg-navy text-white hover:bg-deep-navy',
  outline: 'border-[1.5px] border-navy text-navy hover:bg-navy hover:text-white',
  'outline-dark': 'border-[1.5px] border-white text-white hover:bg-white hover:text-navy',
  link: 'min-h-0 px-0 rounded-none text-horizon underline underline-offset-4 decoration-1 hover:decoration-2',
}

/** Renders a router Link (`to`), an anchor (`href`) or a button. `arrow` adds a nudging arrow. */
export default function Button({ to, href, variant = 'primary', arrow = false, external = false, className = '', children, ...rest }) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return <a href={href} className={cls} {...ext} {...rest}>{content}</a>
  }
  return <button type="button" className={cls} {...rest}>{content}</button>
}
