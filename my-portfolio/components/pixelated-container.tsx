import type React from "react"
import { cn } from "@/lib/utils"

interface PixelatedContainerProps {
  children: React.ReactNode
  className?: string
}

export function PixelatedContainer({ children, className }: PixelatedContainerProps) {
  return <section className={cn("relative", className)}>{children}</section>
}
