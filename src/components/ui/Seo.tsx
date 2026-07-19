import { Helmet } from 'react-helmet-async'
import {
  buildOrganizationJsonLd,
  getCanonicalUrl,
  siteConfig,
  type SeoConfig,
} from '@/lib/seo'

type SeoProps = Partial<SeoConfig>

export function Seo({
  title,
  description,
  canonicalPath = '/',
  robots = 'index,follow',
  ogType = 'website',
}: SeoProps) {
  const resolvedTitle = title ?? siteConfig.defaultTitle
  const resolvedDescription = description ?? siteConfig.defaultDescription
  const canonical = getCanonicalUrl(canonicalPath)

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

      <script type="application/ld+json">
        {JSON.stringify(buildOrganizationJsonLd())}
      </script>
    </Helmet>
  )
}