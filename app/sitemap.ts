import type { MetadataRoute } from 'next'
import { seoStaedte } from '@/lib/seo-staedte'
import { articles } from '@/lib/blog-articles'

const BASE_URL = 'https://www.immovativ-invest.de'

function parseDeutschDatum(datum: string): Date {
  const monate: Record<string, number> = {
    'Januar': 0, 'Februar': 1, 'März': 2, 'April': 3, 'Mai': 4, 'Juni': 5,
    'Juli': 6, 'August': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Dezember': 11
  }
  const parts = datum.split('. ')
  const tag = parseInt(parts[0])
  const monatStr = parts[1].split(' ')[0]
  const jahr = parseInt(parts[1].split(' ')[1])
  return new Date(jahr, monate[monatStr], tag)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                    priority: 1.0, changeFrequency: 'weekly',  lastModified: new Date('2026-05-13') },
    { url: `${BASE_URL}/verkaufen`,                     priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2025-05-01') },
    { url: `${BASE_URL}/ankauf`,                        priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2025-05-01') },
    { url: `${BASE_URL}/blog`,                          priority: 0.8, changeFrequency: 'weekly',  lastModified: new Date('2026-05-09') },
    { url: `${BASE_URL}/erbschaft`,                     priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2025-04-01') },
    { url: `${BASE_URL}/scheidung`,                     priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2025-04-01') },
    { url: `${BASE_URL}/zwangsversteigerungen`,         priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2025-04-01') },
    { url: `${BASE_URL}/finanzierung`,                  priority: 0.7, changeFrequency: 'monthly', lastModified: new Date('2025-04-01') },
    { url: `${BASE_URL}/ueber-uns`,                     priority: 0.7, changeFrequency: 'monthly', lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/kontakt`,                       priority: 0.7, changeFrequency: 'monthly', lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/service`,                       priority: 0.6, changeFrequency: 'monthly', lastModified: new Date('2025-04-01') },
    { url: `${BASE_URL}/beratung`,                      priority: 0.6, changeFrequency: 'monthly', lastModified: new Date('2025-04-01') },
    { url: `${BASE_URL}/immobilienangebote`,            priority: 0.6, changeFrequency: 'weekly',  lastModified: new Date('2025-05-01') },
    { url: `${BASE_URL}/karriere`,                      priority: 0.5, changeFrequency: 'monthly', lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/impressum`,                     priority: 0.3, changeFrequency: 'yearly',  lastModified: new Date('2025-01-01') },
    { url: `${BASE_URL}/datenschutz`,                   priority: 0.3, changeFrequency: 'yearly',  lastModified: new Date('2025-01-01') },
    { url: `${BASE_URL}/immobilienbewertung`,             priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-05-12') },
    { url: `${BASE_URL}/referenzen`,                    priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2025-05-01') },
    { url: `${BASE_URL}/bester-immobilienmakler-frankfurt`, priority: 0.85, changeFrequency: 'monthly', lastModified: new Date('2026-05-15') },
    { url: `${BASE_URL}/immobilienmakler-kosten-frankfurt`, priority: 0.85, changeFrequency: 'monthly', lastModified: new Date('2026-05-15') },
    { url: `${BASE_URL}/makler-oder-privatverkauf`,         priority: 0.85, changeFrequency: 'monthly', lastModified: new Date('2026-05-15') },
    { url: `${BASE_URL}/immobilie-schnell-verkaufen`,       priority: 0.85, changeFrequency: 'monthly', lastModified: new Date('2026-05-15') },
    { url: `${BASE_URL}/serioeser-makler-erkennen`,         priority: 0.85, changeFrequency: 'monthly', lastModified: new Date('2026-05-15') },
  ]

  const cityPages: MetadataRoute.Sitemap = seoStaedte.map((stadt) => ({
    url: `${BASE_URL}/immobilienmakler-${stadt.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: new Date('2025-05-01'),
  }))

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: parseDeutschDatum(article.date),
  }))

  const categoryPages: MetadataRoute.Sitemap = [
    'markt', 'verkaufen', 'bewertung', 'recht-steuern', 'finanzierung', 'prozess', 'spezialfaelle',
  ].map(cat => ({
    url: `${BASE_URL}/blog/kategorie/${cat}`,
    priority: 0.6,
    changeFrequency: 'weekly' as const,
    lastModified: new Date('2026-05-12'),
  }))

  return [...staticPages, ...cityPages, ...blogPages, ...categoryPages]
}
