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

  return (
    <div className="relative">
      <div className={cn("relative overflow-hidden transition-all duration-500", className)}>
        <div className={cn("transition-opacity duration-500", showPixelArt ? "opacity-100" : "opacity-0")}>
          <div className="relative w-full h-full">
            <Image
              src={pixelArtSrc || "/placeholder.svg"}
              alt={`${alt} - Pixel Art`}
              fill
              className="object-cover pixel-image"
            />
          </div>
        </div>

        <div
          className={cn("absolute inset-0 transition-opacity duration-500", showPixelArt ? "opacity-0" : "opacity-100")}
        >
          <div className="relative w-full h-full">
            <Image src={realPhotoSrc || "/placeholder.svg"} alt={`${alt} - Real Photo`} fill className="object-cover" />
          </div>
        </div>
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
