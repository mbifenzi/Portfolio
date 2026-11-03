import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { PixelatedHeading } from "@/components/pixelated-heading"
import { articles } from "@/data/articles"

export const metadata: Metadata = {
  title: "Writing - Mohamed Bifenzi",
  description: "Notes on how I build and run backends and apps.",
}

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-4 py-16">
        <PixelatedHeading className="text-3xl md:text-4xl mb-4 text-purple-400">WRITING</PixelatedHeading>
        <p className="text-gray-400 mb-10">Notes on how I build and run backends and apps.</p>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group block pixel-border bg-gray-900 p-6 transition-transform hover:translate-y-[-4px]"
            >
              <p className="font-pixel text-xs text-cyan-400 mb-2">
                {article.date.toUpperCase()} · {article.readingTime.toUpperCase()}
              </p>
              <h2 className="text-xl md:text-2xl text-yellow-400 mb-3">{article.title}</h2>
              <p className="text-gray-300 mb-4">{article.summary}</p>
              <span className="font-pixel text-sm text-green-400 flex items-center gap-2">
                READ <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
