"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight, Github, ExternalLink, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  className?: string
  github?: string
  url?: string
  details?: string
  caseStudySlug?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  className,
  github,
  url,
  details,
  caseStudySlug,
}: ProjectCardProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const placeholderImage = image || "/project-management-team.png"

  // Simple function to toggle the modal
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)

    // Toggle body scroll
    if (!isFullScreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  return (
    <>
      <div
        className={cn(
          "card flex flex-col overflow-hidden transition-colors hover:border-gray-600",
          className,
        )}
      >
        <div className="relative h-48 shrink-0 overflow-hidden bg-gray-900 group">
          <Image src={placeholderImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-900 bg-opacity-70 hover:bg-gray-800"
              onClick={toggleFullScreen}
            >
              <Maximize2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="p-4 flex flex-1 flex-col">
          <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
          <p className="text-sm mb-4 text-gray-300">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3">
            {caseStudySlug && (
              <Link
                href={`/work/${caseStudySlug}`}
                className="group/link text-sm font-medium text-green-400 flex items-center gap-2"
              >
                Read case study
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            )}
            <span className="flex-1" />
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`GitHub repository for ${title}`}
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {url && (
              <Link
                href={url.startsWith("http") ? url : `https://${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Custom Modal (not using Dialog component) */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        >
          <div className="relative w-full max-w-4xl bg-gray-950 rounded-lg border border-gray-800 overflow-hidden">
            {/* Close button */}
            <button
              onClick={toggleFullScreen}
              className="absolute top-4 right-4 z-10 bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image container */}
            <div className="relative w-full h-[60vh]">
              <Image
                src={placeholderImage || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>

            {/* Project details */}
            <div className="p-6 bg-gray-900 overflow-y-auto max-h-[30vh]">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>

              {details && <p className="text-gray-300 mb-4 whitespace-pre-line">{details}</p>}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <span key={index} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>View on GitHub</span>
                  </Link>
                )}
                {url && (
                  <Link
                    href={url.startsWith("http") ? url : `https://${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Visit Project</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
