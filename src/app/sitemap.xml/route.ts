export function GET() {
  const baseUrl = 'https://equipmentcalculators.com'
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly', 
      priority: 0.8
    },
    {
      url: `${baseUrl}/calculators/equipment-loan`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/calculators/equipment-lease`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/calculators/lease-vs-buy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/calculators/equipment-roi`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
    ,
    {
      url: `${baseUrl}/calculators/construction`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/calculators/medical`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/calculators/restaurant`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/calculators/manufacturing`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    }
    ,
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}