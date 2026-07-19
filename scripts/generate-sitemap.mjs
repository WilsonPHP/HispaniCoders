import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const ROOT_DIR = process.cwd()
const APP_FILE = resolve(ROOT_DIR, 'src', 'App.tsx')
const BLOG_DATA_FILE = resolve(ROOT_DIR, 'src', 'data', 'blogPosts.ts')
const SITE_URL = 'https://hispanicoders.com'

function readText(filePath) {
  return readFileSync(filePath, 'utf8')
}

function normalizePath(pathname) {
  if (!pathname.startsWith('/')) {
    return `/${pathname}`
  }

  return pathname
}

function parseStaticRoutes(appSource) {
  const paths = new Set(['/'])
  const routePathRegex = /path="([^"]+)"/g
  let match

  while ((match = routePathRegex.exec(appSource)) !== null) {
    const routePath = match[1]

    if (routePath.includes('*') || routePath.includes(':')) {
      continue
    }

    paths.add(normalizePath(routePath))
  }

  return paths
}

function parseBlogSlugs(blogSource) {
  const slugs = []
  const slugRegex = /slug:\s*'([^']+)'/g
  let match

  while ((match = slugRegex.exec(blogSource)) !== null) {
    slugs.push(match[1])
  }

  return slugs
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function generateSitemapXml(urls) {
  const today = new Date().toISOString().slice(0, 10)

  const urlNodes = urls
    .map((url) => {
      return [
        '  <url>',
        `    <loc>${escapeXml(url)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        '  </url>',
      ].join('\n')
    })
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlNodes,
    '</urlset>',
    '',
  ].join('\n')
}

function writeOutput(filePath, content) {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content, 'utf8')
}

function main() {
  const appSource = readText(APP_FILE)
  const blogSource = readText(BLOG_DATA_FILE)

  const staticPaths = parseStaticRoutes(appSource)
  const blogSlugs = parseBlogSlugs(blogSource)

  for (const slug of blogSlugs) {
    staticPaths.add(`/resources/${slug}`)
  }

  const urls = [...staticPaths]
    .sort((left, right) => left.localeCompare(right))
    .map((path) => `${SITE_URL}${path}`)

  const sitemapXml = generateSitemapXml(urls)
  const publicOutput = resolve(ROOT_DIR, 'public', 'sitemap.xml')
  const distOutput = resolve(ROOT_DIR, 'dist', 'sitemap.xml')

  writeOutput(publicOutput, sitemapXml)

  if (existsSync(resolve(ROOT_DIR, 'dist'))) {
    writeOutput(distOutput, sitemapXml)
  }

  console.log(`Sitemap generated with ${urls.length} URLs.`)
}

main()
