import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Shared by the generated icons and link preview images, so they match the site's look.
export const ogColors = {
  background: "#000000",
  card: "#0d1117",
  border: "#1f2937",
  text: "#ffffff",
  muted: "#9ca3af",
  accent: "#4ade80",
}

const fontDir = join(process.cwd(), "node_modules/@fontsource/inter/files")

export async function loadOgFonts() {
  const [regular, semibold, bold] = await Promise.all(
    ["400", "600", "700"].map((weight) => readFile(join(fontDir, `inter-latin-${weight}-normal.woff`))),
  )
  return [
    { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
  ]
}

export function MonogramMark({ size }: { size: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: ogColors.background,
        borderRadius: size * 0.2,
        color: ogColors.accent,
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: size * 0.5,
        letterSpacing: -size * 0.03,
      }}
    >
      MB
    </div>
  )
}
