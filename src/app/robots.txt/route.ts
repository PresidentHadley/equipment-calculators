export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://equipmentcalculators.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin or private areas (none currently)
# Disallow: /admin
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}