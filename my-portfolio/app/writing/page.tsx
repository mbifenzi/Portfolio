import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SectionHeading } from "@/components/section-heading"
import { articles } from "@/data/articles"

export const metadata: Metadata = {
  title: "Writing - Mohamed Bifenzi",
  description: "Notes on how I build and run backends and apps.",
}

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main id="content" className="max-w-3xl mx-auto px-4 py-16">
        <SectionHeading className="text-3xl md:text-4xl mb-4">Writing</SectionHeading>
        <p className="text-gray-400 mb-10">Notes on how I build and run backends and apps.</p>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group block card p-6 transition-colors hover:border-gray-600"
            >
              <p className="font-mono text-sm text-gray-400 mb-2">
                {article.date} · {article.readingTime}
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">{article.title}</h2>
              <p className="text-gray-300 mb-4">{article.summary}</p>
              <span className="text-sm font-medium text-green-400 flex items-center gap-2">
                Read <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
