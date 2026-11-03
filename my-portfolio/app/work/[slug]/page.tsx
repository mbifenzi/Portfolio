import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { getCaseStudies, getProjectBySlug } from "@/data/projects"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return getCaseStudies().map((project) => ({ slug: project.caseStudy!.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} - Case study - Mohamed Bifenzi`,
    description: project.description,
    openGraph: { images: [{ url: project.image }] },
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl text-green-400 mb-4">{title}</h2>
      {children}
    </section>
  )
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project?.caseStudy) notFound()
  const caseStudy = project.caseStudy

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/#work" className="font-pixel text-sm text-gray-400 hover:text-green-400 flex items-center gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> BACK TO WORK
        </Link>

        <p className="font-pixel text-xs text-cyan-400 mb-2">CASE STUDY</p>
        <h1 className="text-3xl md:text-5xl text-yellow-400 mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-800 pixel-border-sm text-cyan-400">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/9] pixel-border bg-gray-950 mb-12 overflow-hidden">
          <Image src={project.image} alt={project.title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <Section title="THE PROBLEM">
          <p className="text-gray-200 leading-relaxed">{caseStudy.problem}</p>
        </Section>

        <Section title="WHAT I BUILT">
          <ul className="space-y-3 text-gray-200">
            {caseStudy.built.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-green-400">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="THE HARD PART">
          <div className="pixel-border bg-gray-900 p-6">
            <h3 className="text-lg text-yellow-400 mb-3">{caseStudy.hardPart.title}</h3>
            <p className="text-gray-200 leading-relaxed">{caseStudy.hardPart.body}</p>
          </div>
        </Section>

        <Section title="RESULTS">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.results.map((result) => (
              <li key={result} className="pixel-border bg-gray-900 p-4 text-gray-200">
                {result}
              </li>
            ))}
          </ul>
        </Section>

        {caseStudy.note && <p className="text-gray-400 italic mb-8">{caseStudy.note}</p>}

        <div className="flex flex-wrap gap-4">
          {caseStudy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-sm pixel-border pixel-button px-4 py-2 flex items-center gap-2"
            >
              {link.label.toUpperCase()} <ExternalLink className="h-4 w-4" />
            </a>
          ))}
          {caseStudy.article && (
            <Link
              href={caseStudy.article.href}
              className="font-pixel text-sm pixel-border pixel-button px-4 py-2 flex items-center gap-2"
            >
              READ: {caseStudy.article.title.toUpperCase()} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  )
}
