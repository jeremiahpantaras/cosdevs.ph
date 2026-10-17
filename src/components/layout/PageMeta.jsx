import { useEffect } from 'react'
import { BRAND } from '../../config/brand'

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Per-route title, description, canonical and social tags.
 * Updates the tags already present in index.html (React's <title> hoisting would add a duplicate).
 * `title` is the page name; Home passes `home` to use the full brand title.
 */
export default function PageMeta({ title, description, path = '/', home = false }) {
  useEffect(() => {
    const fullTitle = home ? `${BRAND.name} — ${BRAND.tagline}` : `${title} — ${BRAND.name}`
    const url = `${BRAND.siteUrl}${path === '/' ? '/' : path}`
    document.title = fullTitle
    setMeta('meta[name="title"]', 'content', fullTitle)
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [title, description, path, home])

  return null
}
