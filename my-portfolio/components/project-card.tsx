import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  className?: string
  github?: string
  url?: string
}

export function ProjectCard({ title, description, image, tags, className, github, url }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "pixel-border bg-gray-900 overflow-hidden transition-transform hover:translate-y-[-5px]",
        className,
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover pixel-image" />
      </div>

      <div className="p-4">
        <h3 className="text-xl mb-2 text-yellow-400">{title}</h3>
        <p className="text-sm mb-4 text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-800 pixel-border-sm text-cyan-400">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
          {!github && !url && <div></div>}
          <Link
            href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xs text-green-400 hover:text-green-300 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  )
}
