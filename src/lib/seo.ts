export type SeoConfig = {
  title: string
  description: string
  canonicalPath: string
  robots?: string
  ogType?: 'website' | 'article'
}

export type JsonLdObject = Record<string, unknown>

export type BreadcrumbItem = {
  name: string
  path: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteConfig = {
  siteName: 'HispaniCoders',
  siteUrl: 'https://hispanicoders.com',
  defaultTitle:
    'HispaniCoders | Premium LATAM Staff Augmentation for US Companies',
  defaultDescription:
    'Helping US companies build world-class engineering teams with top LATAM talent.',
  sameAs: [] as string[],
}

export function getCanonicalUrl(path: string): string {
  return `${siteConfig.siteUrl}${path}`
}

export function buildWebSiteJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.siteUrl}/resources?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildWebPageJsonLd(config: { title: string; description: string; url: string }): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  }
}

export function buildOrganizationJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    areaServed: ['US', 'LATAM'],
    sameAs: siteConfig.sameAs,
  }
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  }
}

export function buildFaqJsonLd(items: FaqItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildArticleJsonLd(config: {
  title: string
  description: string
  path: string
  publishedDate: string
}): JsonLdObject {
  const articleUrl = getCanonicalUrl(config.path)

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    datePublished: config.publishedDate,
    dateModified: config.publishedDate,
    mainEntityOfPage: articleUrl,
    author: {
      '@type': 'Organization',
      name: siteConfig.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  }
}