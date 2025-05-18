"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ProjectCategory } from "@/data/projects"

interface ProjectFilterProps {
  className?: string
  onFilterChange?: (category: ProjectCategory | "all") => void
}

export function ProjectFilter({ className, onFilterChange }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all")

  const filters = [
    { id: "all" as const, label: "ALL" },
    { id: "frontend" as const, label: "FRONTEND" },
    { id: "backend" as const, label: "BACKEND" },
    { id: "fullstack" as const, label: "FULL STACK" },
    { id: "mobile" as const, label: "MOBILE" },
    { id: "ai" as const, label: "AI" },
    { id: "blockchain" as const, label: "BLOCKCHAIN" },
    { id: "iot" as const, label: "IOT" },
  ]

  const handleFilterChange = (filter: ProjectCategory | "all") => {
    setActiveFilter(filter)
    if (onFilterChange) {
      onFilterChange(filter)
    }
  }

  return (
    <div className={cn("flex flex-wrap justify-center gap-2", className)}>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className={cn(
            "pixel-border-sm",
            activeFilter === filter.id ? "bg-purple-600 hover:bg-purple-700" : "hover:text-purple-400",
          )}
          onClick={() => handleFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
