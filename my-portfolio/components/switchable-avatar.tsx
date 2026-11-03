"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { RefreshCw } from "lucide-react"

interface SwitchableAvatarProps {
  pixelArtSrc: string
  realPhotoSrc: string
  alt: string
  className?: string
}

export function SwitchableAvatar({ pixelArtSrc, realPhotoSrc, alt, className }: SwitchableAvatarProps) {
  const [showPixelArt, setShowPixelArt] = useState(false)

  // Simply use the current state to determine which image to show
  const currentSrc = showPixelArt ? pixelArtSrc : realPhotoSrc

  return (
    <div className="relative">
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={currentSrc || "/placeholder.svg"}
          alt={alt}
          fill
          priority
          sizes="144px"
          className={cn("object-cover transition-all duration-300", showPixelArt && "[image-rendering:pixelated]")}
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -bottom-3 -right-3 rounded-full w-8 h-8 border-gray-700 bg-gray-900 hover:bg-gray-800"
        onClick={() => setShowPixelArt(!showPixelArt)}
        aria-label="Switch avatar style"
      >
        <RefreshCw className="h-3.5 w-3.5" />
      </Button>
    </div>
  )
}
