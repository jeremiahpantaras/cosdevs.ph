import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppShell from './App.jsx'

// Used only by scripts/prerender.mjs at build time.
export { ROUTES, NOT_FOUND, getRouteMeta } from './seo/routeMeta'
export { buildHead } from './seo/head'
export { buildSitemap } from './seo/sitemap'

export function render(url) {
  return renderToString(createElement(StaticRouter, { location: url }, createElement(AppShell)))
}
