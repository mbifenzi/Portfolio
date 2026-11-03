import type { MetadataRoute } from "next"
import { articles } from "@/data/articles"
import { getCaseStudies } from "@/data/projects"

const baseUrl = "https://mbifenzi.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/projects`, priority: 0.7 },
    { url: `${baseUrl}/writing`, priority: 0.7 },
    ...getCaseStudies().map((project) => ({ url: `${baseUrl}/work/${project.caseStudy!.slug}`, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${baseUrl}/writing/${article.slug}`, priority: 0.8 })),
  ]
}
