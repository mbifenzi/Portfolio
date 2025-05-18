import type React from "react"
import { cn } from "@/lib/utils"

interface PixelatedHeadingProps {
  children: React.ReactNode
  className?: string
}

export function PixelatedHeading({ children, className }: PixelatedHeadingProps) {
  return <h2 className={cn("font-pixel tracking-wider", className)}>{children}</h2>
}
