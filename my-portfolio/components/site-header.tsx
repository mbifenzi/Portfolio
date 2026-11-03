import Link from "next/link"

const links = [
  { href: "/#work", label: "WORK" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/writing", label: "WRITING" },
  { href: "/#contact", label: "CONTACT" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-pixel text-green-400 pixel-text-shadow whitespace-nowrap">
          <span className="sm:hidden">MB</span>
          <span className="hidden sm:inline">MOHAMED BIFENZI</span>
        </Link>
        <nav className="flex gap-4 md:gap-6 text-xs md:text-sm overflow-x-auto">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-green-400 transition-colors whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
