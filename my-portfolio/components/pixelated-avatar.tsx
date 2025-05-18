import Image from "next/image"
import { cn } from "@/lib/utils"

interface PixelatedAvatarProps {
  src: string
  alt: string
  className?: string
}

export function PixelatedAvatar({ src, alt, className }: PixelatedAvatarProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover pixel-image" />
    </div>
  )
}
