import type { MetadataRoute } from 'next'
import { coverageNotes } from '@/lib/coverage'

const BASE = 'https://demmy.me'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = [
    '',
    '/about',
    '/experience',
    '/certifications',
    '/projects',
    '/case-studies',
    '/proof-of-impact',
    '/blog',
    '/contact',
    '/links',
    '/coverage',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const coverageRoutes = coverageNotes.map((note) => ({
    url: `${BASE}/coverage/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...coverageRoutes]
}
