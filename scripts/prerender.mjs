// Build step, run after `vite build` and `vite build --ssr`: writes one complete HTML file per route.
//
//   dist/index.html, dist/about.html, dist/services/custom-software.html, ...   (served via cleanUrls)
//   dist/404.html        (served with a real 404 status; noindex)
//   dist/sitemap.xml     (generated from the route registry)
//
// Each file contains that page's own <head> (title, description, canonical, Open Graph, JSON-LD) and its
// server-rendered content, so search engines and link-preview bots get the right page without running JS.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const serverEntry = pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href

const { render, ROUTES, NOT_FOUND, buildHead, buildSitemap } = await import(serverEntry)
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

const HEAD_MARKERS = /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/
const ROOT_DIV = '<div id="root"></div>'
if (!HEAD_MARKERS.test(template)) throw new Error('index.html is missing the <!--seo-head--> markers')
if (!template.includes(ROOT_DIV)) throw new Error('index.html is missing <div id="root"></div>')

// Preload the primary text font (hashed filename) so headline text is not held up by a font request chain.
const assets = await fs.readdir(path.join(dist, 'assets'))
const jakarta = assets.find((f) => /^plus-jakarta-sans-latin-wght-normal-.*\.woff2$/.test(f))
const preload = jakarta
  ? `\n    <link rel="preload" href="/assets/${jakarta}" as="font" type="font/woff2" crossorigin />`
  : ''

const pageFor = (route, renderPath) =>
  template
    .replace(HEAD_MARKERS, () => buildHead(route) + preload)
    .replace(ROOT_DIV, () => `<div id="root">${render(renderPath)}</div>`)

const fileFor = (routePath) => (routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`)

const written = []
for (const route of ROUTES) {
  const out = path.join(dist, fileFor(route.path))
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, pageFor(route, route.path))
  written.push(fileFor(route.path))
}

// Unknown URLs: render the app at a path that matches no route so the NotFound page is produced.
await fs.writeFile(path.join(dist, '404.html'), pageFor(NOT_FOUND, '/__not-found__'))
written.push('404.html')

await fs.writeFile(path.join(dist, 'sitemap.xml'), buildSitemap())
written.push('sitemap.xml')

// The server bundle is a build intermediate, not a deployable.
await fs.rm(path.join(root, 'dist-server'), { recursive: true, force: true })

console.log(`prerendered ${ROUTES.length} routes + 404 + sitemap:\n  ${written.join('\n  ')}`)
