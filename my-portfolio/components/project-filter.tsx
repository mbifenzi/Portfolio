"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ProjectCategory } from "@/data/projects"

interface ProjectFilterProps {
  className?: string
  onFilterChange: (category: ProjectCategory | "all") => void
  activeFilter: ProjectCategory | "all"
}

export function ProjectFilter({ className, onFilterChange, activeFilter }: ProjectFilterProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const filters = [
    { id: "all" as const, label: "All" },
    { id: "frontend" as const, label: "Frontend" },
    { id: "backend" as const, label: "Backend" },
    { id: "fullstack" as const, label: "Full stack" },
    { id: "mobile" as const, label: "Mobile" },
    { id: "ai" as const, label: "AI" },
  ]

  const handleFilterChange = (filter: ProjectCategory | "all") => {
    onFilterChange(filter)
  }

  // If we're not on the client yet, render a placeholder with the same dimensions
  if (!isClient) {
    return (
      <div className={cn("flex flex-wrap justify-center gap-2 min-h-[40px]", className)}>
        {/* Placeholder content with similar structure but no interactivity */}
      </div>
    )
  }

  return (
    <div className={cn("flex flex-wrap justify-center gap-2", className)}>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
