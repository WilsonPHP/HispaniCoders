import App from '@/App'
import '@/styles/globals.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  // React 19's <title>/<meta>/<link> hoisting has no way to adopt head tags
  // that were written by the react-snap prerender pass (a plain CSR snapshot,
  // not React SSR) — it just mounts a second copy alongside them. Clear the
  // Helmet-managed tags before hydrating so Helmet's own render recreates a
  // single, correct set instead of duplicating everything it manages.
  document.head
    .querySelectorAll(
      [
        'title',
        'meta[name="description"]',
        'meta[name="robots"]',
        'link[rel="canonical"]',
        'link[rel="alternate"][hreflang]',
        'meta[property^="og:"]',
        'meta[name^="twitter:"]',
        'script[type="application/ld+json"]',
      ].join(', '),
    )
    .forEach((el) => el.remove())

  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}