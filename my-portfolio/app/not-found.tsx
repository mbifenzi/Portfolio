import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main id="content" className="max-w-3xl mx-auto px-4 py-24 text-center">
        <p className="font-mono text-sm text-green-400 mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8">This page doesn&apos;t exist or has moved.</p>
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Button>
        </Link>
      </main>
    </div>
  )
}
