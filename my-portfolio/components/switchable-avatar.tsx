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
  const [showPixelArt, setShowPixelArt] = useState(true)

  // Simply use the current state to determine which image to show
  const currentSrc = showPixelArt ? pixelArtSrc : realPhotoSrc

  return (
    <div className="relative">
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={currentSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className={cn("object-cover transition-all duration-300", showPixelArt ? "pixel-image" : "")}
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -bottom-4 right-0 rounded-full w-10 h-10 pixel-border-sm bg-gray-800 hover:bg-gray-700"
        onClick={() => setShowPixelArt(!showPixelArt)}
        aria-label="Switch avatar style"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>
    </div>
  )
}
