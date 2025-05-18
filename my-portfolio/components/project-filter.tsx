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
