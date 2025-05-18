"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PixelatedContainer } from "@/components/pixelated-container"
import { PixelatedHeading } from "@/components/pixelated-heading"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { getAllProjects, type ProjectCategory } from "@/data/projects"

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all")

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.categories.includes(activeFilter as ProjectCategory))

  const handleFilterChange = (category: ProjectCategory | "all") => {
    setActiveFilter(category)
  }

  return (
    <div className="min-h-screen bg-black text-white font-pixel">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl text-green-400 pixel-text-shadow">
            MOHAMED BIFENZI
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-green-400 transition-colors">
              HOME
            </Link>
            <Link href="/projects" className="text-green-400">
              PROJECTS
            </Link>
            <Link href="/#contact" className="hover:text-green-400 transition-colors">
              CONTACT
            </Link>
          </nav>
          <Link href="/" className="md:hidden">
            <Button variant="outline" size="sm" className="pixel-border-sm">
              BACK
            </Button>
          </Link>
        </div>
      </header>

      {/* Projects Section */}
      <PixelatedContainer className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-4 text-center text-purple-400">
            ALL PROJECTS
          </PixelatedHeading>

          <p className="text-center max-w-2xl mx-auto mb-12">
            Explore my complete portfolio of projects spanning various technologies and domains. Use the filters below
            to find specific types of projects.
          </p>

          <ProjectFilter className="mb-12" onFilterChange={handleFilterChange} activeFilter={activeFilter} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                github={project.github}
                url={project.url}
                details={project.details}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/">
              <Button variant="outline" className="pixel-border pixel-button">
                BACK TO HOME
              </Button>
            </Link>
          </div>
        </div>
      </PixelatedContainer>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm border-t border-gray-800">
        <p>© {new Date().getFullYear()} MOHAMED BIFENZI • ALL RIGHTS RESERVED</p>
        <p className="mt-2 text-gray-500">CRAFTED WITH PRECISION AND PASSION</p>
      </footer>
    </div>
  )
}
