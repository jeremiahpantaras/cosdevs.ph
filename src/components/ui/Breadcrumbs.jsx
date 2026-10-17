import { Link } from 'react-router-dom'

/** Visible breadcrumb trail. The matching BreadcrumbList data is generated from the same route registry. */
export default function Breadcrumbs({ crumbs }) {
  const trail = [{ name: 'Home', path: '/' }, ...crumbs]
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-semibold text-navy">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="underline underline-offset-4 hover:text-navy">{crumb.name}</Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
