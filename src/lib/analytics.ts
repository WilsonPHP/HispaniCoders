type AnalyticsPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', name, payload)
}

export function trackCtaClick(location: string, label: string, destination?: string) {
  trackEvent('cta_click', {
    location,
    label,
    destination: destination ?? '',
  })
}

export function trackLeadSubmit(source: string) {
  trackEvent('lead_submit_success', {
    source,
  })
}

export function trackBofuVisit(page: string) {
  trackEvent('bofu_page_view', {
    page,
  })
}
