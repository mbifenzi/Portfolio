import { ImageResponse } from "next/og"
import { MonogramMark, loadOgFonts } from "@/lib/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  return new ImageResponse(<MonogramMark size={size.width} />, { ...size, fonts: await loadOgFonts() })
}
