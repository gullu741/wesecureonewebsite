import { MetadataRoute } from 'next'
import { services } from '@/src/content/services'
import { getAllPortfoliosSync } from '@/lib/json-portfolio'
import { getAllPosts } from '@/lib/json-content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wesecureone.com'

  // Static routes
  const staticRoutes = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic portfolio routes
  const portfolioRoutes = getAllPortfoliosSync().map((study) => ({
    url: `${baseUrl}/portfolio/${study.slug}`,
    lastModified: new Date(study.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic blog routes
  const posts = await getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes]
}
