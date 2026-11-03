import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { profile, stats } from "@/data/profile"
import { loadOgFonts, ogColors } from "@/lib/og"

export const alt = `${profile.name} - Software Engineer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  // real-photo-avatar.png is a JPEG despite its extension
  const photo = await readFile(join(process.cwd(), "public/real-photo-avatar.png"))
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: ogColors.background,
          color: ogColors.text,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={220}
            height={220}
            alt=""
            style={{ borderRadius: 24, border: `2px solid ${ogColors.border}` }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
            <div style={{ fontSize: 34, color: ogColors.accent, marginTop: 8 }}>{profile.title}</div>
            <div style={{ fontSize: 26, color: ogColors.muted, marginTop: 16 }}>
              Django · React · React Native · PostgreSQL
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, marginTop: 56 }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 12px",
                background: ogColors.card,
                border: `2px solid ${ogColors.border}`,
                borderRadius: 16,
              }}
            >
              <div style={{ fontSize: 44, fontWeight: 600 }}>{stat.value}</div>
              <div style={{ fontSize: 20, color: ogColors.muted, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 22, color: ogColors.muted, marginTop: 40 }}>
          {`${profile.site} · ${profile.location}`}
        </div>
      </div>
    ),
    { ...size, fonts: await loadOgFonts() },
  )
}
