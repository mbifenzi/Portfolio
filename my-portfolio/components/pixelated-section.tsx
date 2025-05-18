import type React from "react"
import { cn } from "@/lib/utils"

interface PixelatedSectionProps {
  children: React.ReactNode
  className?: string
}

export function PixelatedSection({ children, className }: PixelatedSectionProps) {
  return <div className={cn("relative bg-gray-950 border-8 border-gray-800", className)}>{children}</div>
}
