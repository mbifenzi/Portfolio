import { ImageResponse } from "next/og"
import { profile } from "@/data/profile"
import { getCaseStudies, getProjectBySlug } from "@/data/projects"
import { loadOgFonts, ogColors } from "@/lib/og"

export const alt = "Case study"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getCaseStudies().map((project) => ({ slug: project.caseStudy!.slug }))
}

export default async function CaseStudyImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: ogColors.background,
          color: ogColors.text,
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 28, color: ogColors.accent }}>Case study</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>{project?.title}</div>
          <div style={{ fontSize: 36, color: ogColors.muted, marginTop: 20, lineHeight: 1.3 }}>
            {project?.description}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: ogColors.muted }}>
          <span style={{ color: ogColors.text, fontWeight: 600 }}>{profile.name}</span>
          <span>{profile.site}</span>
        </div>
      </div>
    ),
    { ...size, fonts: await loadOgFonts() },
  )
}
