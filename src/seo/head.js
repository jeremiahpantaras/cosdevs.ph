import { BRAND } from '../config/brand'
import { absoluteUrl } from './routeMeta'
import { buildJsonLd } from './jsonld'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
// JSON inside <script> must not contain "</script>" or HTML comment openers.
const jsonForScript = (doc) => JSON.stringify(doc).replace(/</g, '\\u003c')

/**
 * Route-specific <head> tags (title, description, robots, canonical, Open Graph, Twitter, JSON-LD).
 * Sits between the <!--seo-head--> markers in index.html and is regenerated per route at build time.
 */
export function buildHead(route) {
  const url = absoluteUrl(route.path === '/404' ? '/' : route.path)
  const robots = route.indexable ? 'index, follow' : 'noindex'
  const image = `${BRAND.siteUrl}${BRAND.assets.ogImage}`
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="title" content="${esc(route.title)}" />`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    // A 404 page has no canonical of its own, so none is emitted for it.
    route.indexable ? `<link rel="canonical" href="${esc(url)}" />` : '',
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    ...buildJsonLd(route).map((doc) => `<script type="application/ld+json">${jsonForScript(doc)}</script>`),
  ]
  return tags.filter(Boolean).join('\n    ')
}
