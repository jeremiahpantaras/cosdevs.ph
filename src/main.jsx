import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './index.css'
import AppShell from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import { markHydrated } from './lib/hydration'

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
    <Analytics />
  </StrictMode>
)

const container = document.getElementById('root')

if (container.hasChildNodes()) {
  // Production: the page was prerendered at build time, so attach to the existing markup.
  hydrateRoot(container, app)
} else {
  // Dev server (no prerendered markup): render on the client; entrance animations play normally.
  markHydrated()
  createRoot(container).render(app)
}
