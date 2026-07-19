export type SeoConfig = {
  title: string
  description: string
  canonicalPath: string
  robots?: string
  ogType?: 'website' | 'article'
}

export const siteConfig = {
  siteName: 'HispaniCoders',
  siteUrl: 'https://hispanicoders.com',
  defaultTitle:
    'HispaniCoders | Premium LATAM Staff Augmentation for US Companies',
  defaultDescription:
    'Helping US companies build world-class engineering teams with top LATAM talent.',
}

export function getCanonicalUrl(path: string): string {
  return `${siteConfig.siteUrl}${path}`
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    sameAs: [],
  }
}