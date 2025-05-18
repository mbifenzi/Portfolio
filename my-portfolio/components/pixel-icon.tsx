import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PixelIconProps {
  icon: LucideIcon
  className?: string
}

export function PixelIcon({ icon: Icon, className }: PixelIconProps) {
  return (
    <div className="pixel-icon-container">
      <Icon className={cn("w-5 h-5", className)} />
    </div>
  )
}
