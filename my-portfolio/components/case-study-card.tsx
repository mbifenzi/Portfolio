import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/data/projects"

export function CaseStudyCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const caseStudy = project.caseStudy
  if (!caseStudy) return null

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group card grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-colors hover:border-gray-600"
    >
      <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[300px] bg-gray-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 flex flex-col">
        <h3 className="text-2xl font-semibold tracking-tight mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-5">{caseStudy.problem}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>

        <span className="mt-auto text-sm font-medium text-green-400 flex items-center gap-2">
          Read case study
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
