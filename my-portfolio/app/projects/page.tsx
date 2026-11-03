"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { SiteHeader } from "@/components/site-header"
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
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Projects Section */}
      <Section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading className="text-3xl md:text-4xl mb-4 text-center">All projects</SectionHeading>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Apps I ship on my own, platforms I built at UM6P, and projects from 1337. Use the filters to narrow them
            down.
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
              <Button variant="outline">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm border-t border-gray-800">
        <p className="text-gray-500">© {new Date().getFullYear()} Mohamed Bifenzi</p>
      </footer>
    </div>
  )
}
