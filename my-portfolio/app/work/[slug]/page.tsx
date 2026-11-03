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
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">{title}</h2>
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
        <Link href="/#work" className="text-sm text-gray-400 hover:text-green-400 flex items-center gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>

        <p className="font-mono text-sm text-green-400 mb-2">Case study</p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/9] rounded-lg border border-gray-800 bg-gray-950 mb-12 overflow-hidden">
          <Image src={project.image} alt={project.title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <Section title="The problem">
          <p className="text-gray-200 leading-relaxed">{caseStudy.problem}</p>
        </Section>

        <Section title="What I built">
          <ul className="space-y-3 text-gray-200">
            {caseStudy.built.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gray-500">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="The hard part">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">{caseStudy.hardPart.title}</h3>
            <p className="text-gray-200 leading-relaxed">{caseStudy.hardPart.body}</p>
          </div>
        </Section>

        <Section title="Results">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.results.map((result) => (
              <li key={result} className="card p-4 text-gray-200">
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
              className="btn"
            >
              {link.label} <ExternalLink className="h-4 w-4" />
            </a>
          ))}
          {caseStudy.article && (
            <Link
              href={caseStudy.article.href}
              className="btn"
            >
              Read: {caseStudy.article.title} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  )
}
