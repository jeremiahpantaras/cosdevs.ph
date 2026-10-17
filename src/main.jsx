import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
