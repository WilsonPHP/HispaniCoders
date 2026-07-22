import { Helmet } from 'react-helmet-async'
import {
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
  getCanonicalUrl,
  siteConfig,
  type JsonLdObject,
  type SeoConfig,
} from '@/lib/seo'

type SeoProps = Partial<SeoConfig> & {
  structuredData?: JsonLdObject | JsonLdObject[]
}

export function Seo({
  title,
  description,
  canonicalPath = '/',
  robots = 'index,follow',
  ogType = 'website',
  structuredData,
}: SeoProps) {
  const resolvedTitle = title ?? siteConfig.defaultTitle
  const resolvedDescription = description ?? siteConfig.defaultDescription
  const canonical = getCanonicalUrl(canonicalPath)
  const extraStructuredData = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : []
  const baseStructuredData: JsonLdObject[] = [
    buildOrganizationJsonLd(),
    buildWebPageJsonLd({
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
    }),
  ]

  if (canonicalPath === '/') {
    baseStructuredData.push(buildWebSiteJsonLd())
  }

  const structuredDataScripts = [...baseStructuredData, ...extraStructuredData]

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />

      {structuredDataScripts.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}