import type React from "react"
import { cn } from "@/lib/utils"

interface PixelatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string // Added id prop
}

export function PixelatedSection({ children, className, id }: PixelatedSectionProps) {
  return (
    <div id={id} className={cn("relative bg-gray-950 border-8 border-gray-800", className)}>
      {children}
    </div>
  )
}
