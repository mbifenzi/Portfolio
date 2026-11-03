import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const description =
  "Software engineer in Rabat. Python/Django, React and React Native. Four apps live on the App Store and university platforms used by thousands at UM6P."

export const metadata: Metadata = {
  metadataBase: new URL("https://mbifenzi.vercel.app"),
  title: "Mohamed Bifenzi - Software Engineer",
  description,
  openGraph: {
    title: "Mohamed Bifenzi - Software Engineer",
    description,
    url: "/",
    siteName: "Mohamed Bifenzi",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mohamed Bifenzi - Software Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Bifenzi - Software Engineer",
    description,
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-black antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
