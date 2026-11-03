import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return <h2 className={cn("font-semibold tracking-tight text-white", className)}>{children}</h2>
}
