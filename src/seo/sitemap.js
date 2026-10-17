import { ROUTES, absoluteUrl } from './routeMeta'

/**
 * sitemap.xml generated from the route registry: indexable canonical URLs only, absolute HTTPS on the
 * preferred host. No <lastmod>, <changefreq> or <priority>: lastmod is omitted rather than invented,
 * and Google ignores the other two.
 */
export function buildSitemap() {
  const urls = ROUTES.filter((r) => r.indexable)
    .map((r) => `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}
