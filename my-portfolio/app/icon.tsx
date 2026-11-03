import { ImageResponse } from "next/og"
import { MonogramMark, loadOgFonts } from "@/lib/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default async function Icon() {
  return new ImageResponse(<MonogramMark size={size.width} />, { ...size, fonts: await loadOgFonts() })
}
