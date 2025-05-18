import type React from "react"
import { cn } from "@/lib/utils"

interface GameWindowProps {
  children: React.ReactNode
  className?: string
}

export function GameWindow({ children, className }: GameWindowProps) {
  return <div className={cn("relative bg-gray-950 border-8 border-gray-800", className)}>{children}</div>
}
