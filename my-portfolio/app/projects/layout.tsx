import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Mohamed Bifenzi",
  description: "Apps on the App Store, platforms built at UM6P, and projects from 1337.",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
