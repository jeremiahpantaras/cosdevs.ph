import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMeta, absoluteUrl } from '../../seo/routeMeta'

const setAttr = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Keeps <head> in sync during client-side navigation, from the same route registry the build uses to
 * prerender each page. On a first load the prerendered tags already match, so nothing visibly changes.
 * Rendered once in the app shell; individual pages do not set their own metadata.
 */
export default function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const route = getRouteMeta(pathname)
    const url = absoluteUrl(route.path === '/404' ? '/' : route.path)
    document.title = route.title
    setAttr('meta[name="title"]', 'content', route.title)
    setAttr('meta[name="description"]', 'content', route.description)
    setAttr('meta[name="robots"]', 'content', route.indexable ? 'index, follow' : 'noindex')
    setAttr('meta[property="og:title"]', 'content', route.title)
    setAttr('meta[property="og:description"]', 'content', route.description)
    setAttr('meta[property="og:url"]', 'content', url)
    setAttr('meta[name="twitter:title"]', 'content', route.title)
    setAttr('meta[name="twitter:description"]', 'content', route.description)
    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (route.indexable) {
      if (canonical) canonical.setAttribute('href', url)
    } else {
      canonical?.removeAttribute('href')
    }
  }, [pathname])

  return null
}
