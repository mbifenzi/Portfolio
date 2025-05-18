import type React from "react"
import { cn } from "@/lib/utils"

interface PixelatedContainerProps {
  children: React.ReactNode
  className?: string
  id?: string // Added id prop
}

export function PixelatedContainer({ children, className, id }: PixelatedContainerProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      {children}
    </section>
  )
}
