import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PixelatedContainer } from "@/components/pixelated-container"
import { PixelatedHeading } from "@/components/pixelated-heading"
import { ProjectCard } from "@/components/project-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { SiteHeader } from "@/components/site-header"
import { PixelIcon } from "@/components/pixel-icon"
import { SwitchableAvatar } from "@/components/switchable-avatar"
import { SkillCard } from "@/components/skill-card"
import { getCaseStudies, getFeaturedProjects } from "@/data/projects"
import { Mail, Github, Linkedin, Twitter, ArrowRight, MapPin, Download } from "lucide-react"

// Pre-calculate the current year to avoid hydration mismatch
const currentYear = new Date().getFullYear()

const stats = [
  { value: "4", label: "APPS ON THE APP STORE" },
  { value: "20,000", label: "CANDIDATES ON THE EXAM PLATFORM" },
  { value: "~1,000", label: "USERS ON ASTRACONNECT" },
]

const experience = [
  {
    role: "Full-Stack Developer",
    place: "Vanguard Center, UM6P",
    period: "May 2023 – Present",
    points: [
      "Built AstraConnect, the academic mentoring platform on the department's holon.ma platforms, alone from functional specifications: DRF APIs, PostgreSQL models, Next.js interfaces and four user roles. About 1,000 students and mentors use it.",
      "Worked on the SASE admissions exam platform, which handled 20,000 candidates during the 2026 admissions week. Fixed production issues affecting submissions, question loading and session expiry.",
      "Built intranet features for the mechatronics department and mentored junior frontend developers.",
    ],
  },
  {
    role: "Independent Apps",
    place: "Personal projects",
    period: "Ongoing",
    points: [
      "Four apps live on the App Store (Ryddar, DecorifAI, CartoonifAI, Mood to Drink), each built end to end from the backend to the mobile release.",
      "One shared Django backend with centralized authentication; each product's domain logic lives in its own Django apps.",
      "RevenueCat subscriptions and purchases, AI generation with Replicate, and Next.js marketing websites.",
    ],
  },
  {
    role: "Freelance Web Developer",
    place: "Landing pages for Petrostar and a digital marketing agency",
    period: "2020",
    points: [],
  },
  {
    role: "Sales Intern",
    place: "Nestlé",
    period: "Jan 2017 – Apr 2017",
    points: ["Field sales and stock management."],
  },
]

const education = [
  { school: "1337 Coding School (42 Network)", degree: "Architect in Digital Technologies", period: "2019 – 2023" },
  { school: "Ibn Zohr University", degree: "Bachelor's Degree in Economics", period: "2013 – 2016" },
]

export default function Home() {
  const caseStudies = getCaseStudies()
  const otherFeatured = getFeaturedProjects().filter((project) => !project.caseStudy)

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-12 pb-14 md:pt-16">
        <div className="absolute inset-0 pointer-events-none pixel-grid-overlay"></div>
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <SwitchableAvatar
            className="w-28 h-28 md:w-36 md:h-36 pixel-border shrink-0"
            pixelArtSrc="/pixel-art-developer-avatar.png"
            realPhotoSrc="/real-photo-avatar.png"
            alt="Mohamed Bifenzi"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl text-green-400 pixel-text-shadow mb-3">MOHAMED BIFENZI</h1>
            <p className="font-pixel text-lg md:text-xl text-yellow-400 mb-4">SOFTWARE ENGINEER · PYTHON / DJANGO</p>
            <p className="max-w-2xl text-gray-200 mb-6">
              I build business platforms end to end with Python, Django and React: data models, APIs, frontend and
              production support. I also ship and maintain four apps of my own on the App Store.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#work">
                <Button variant="outline" className="pixel-border pixel-button">
                  VIEW WORK
                </Button>
              </a>
              <a href="/Mohamed-bifenzi.pdf" download>
                <Button variant="outline" className="pixel-border pixel-button">
                  <Download className="mr-2 h-4 w-4" /> RESUME
                </Button>
              </a>
              <a href="https://github.com/mbifenzi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="pixel-border pixel-button">
                  <Github className="mr-2 h-4 w-4" /> GITHUB
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="pixel-border bg-gray-900 p-4 text-center">
              <div className="font-pixel text-2xl text-green-400">{stat.value}</div>
              <div className="font-pixel text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <PixelatedContainer id="work" className="py-16 px-4 bg-gray-950 scroll-mt-14">
        <div className="max-w-5xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-3 text-center text-purple-400">FEATURED WORK</PixelatedHeading>
          <p className="text-center text-gray-400 mb-10">Three projects in depth: the problem, what I built and the hard part.</p>

          <div className="space-y-8 mb-16">
            {caseStudies.map((project, index) => (
              <CaseStudyCard key={project.id} project={project} priority={index === 0} />
            ))}
          </div>

          <h3 className="text-2xl text-center text-blue-400 mb-8">MORE PROJECTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherFeatured.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                github={project.github}
                url={project.url}
                details={project.details}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="pixel-border pixel-button group">
                ALL PROJECTS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </PixelatedContainer>

      {/* Experience */}
      <PixelatedContainer id="experience" className="py-16 px-4 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-3 text-center text-green-400">EXPERIENCE</PixelatedHeading>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Writing code since 2019, with 3+ years of professional Python and Django. Before that I studied economics and
            worked in sales, so I care about how business software handles workflows, stock and money.
          </p>

          <div className="space-y-6 mb-12">
            {experience.map((job) => (
              <div key={job.role + job.period} className="pixel-border p-6 bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <h3 className="text-xl text-yellow-400">
                    {job.role} <span className="text-gray-400">· {job.place}</span>
                  </h3>
                  <span className="font-pixel text-xs text-cyan-400 shrink-0">{job.period}</span>
                </div>
                {job.points.length > 0 && (
                  <ul className="space-y-2 text-gray-300">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-green-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <PixelatedHeading className="text-2xl md:text-3xl mb-6 text-center text-blue-400">EDUCATION</PixelatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item) => (
              <div key={item.school} className="pixel-border p-6 bg-gray-900">
                <h3 className="text-lg text-yellow-400 mb-1">{item.school}</h3>
                <p className="text-gray-300">{item.degree}</p>
                <p className="font-pixel text-xs text-cyan-400 mt-2">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </PixelatedContainer>

      {/* Skills */}
      <PixelatedContainer id="skills" className="py-16 px-4 bg-gray-950 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-8 text-center text-blue-400">SKILLS</PixelatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard
              title="Backend"
              skills={["Python", "Django", "Django REST Framework", "Django Channels", "PostgreSQL", "Redis"]}
              iconColor="text-green-400"
            />
            <SkillCard
              title="Frontend & Mobile"
              skills={["TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS"]}
              iconColor="text-blue-400"
            />
            <SkillCard
              title="Tooling"
              skills={["Git", "Docker", "Linux", "pytest", "CI/CD", "C / C++"]}
              iconColor="text-purple-400"
            />
            <SkillCard
              title="Integrations"
              skills={["Microsoft SSO", "Mapbox", "RevenueCat", "Replicate", "Cloudinary"]}
              iconColor="text-yellow-400"
            />
          </div>
          <p className="text-center text-gray-400 mt-6">Languages: Arabic (native), French and English (full professional).</p>
        </div>
      </PixelatedContainer>

      {/* Contact */}
      <PixelatedContainer id="contact" className="py-16 px-4 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-8 text-center text-red-400">CONTACT</PixelatedHeading>

          <div className="pixel-border p-6 bg-gray-900 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl mb-2 text-yellow-400">MOHAMED BIFENZI</h3>
                <p className="mb-1">Open to new opportunities</p>
                <p className="mb-4 flex items-center justify-center gap-1 text-gray-400">
                  <MapPin className="h-4 w-4" /> Rabat, Morocco · open to relocation to Belgium
                </p>
              </div>

              <div className="space-y-4">
                <Link href="mailto:mohamedbifenzi1@gmail.com" className="flex items-center gap-2 pixel-link">
                  <PixelIcon icon={Mail} className="text-red-400" />
                  <span>mohamedbifenzi1@gmail.com</span>
                </Link>
                <Link href="https://github.com/mbifenzi" className="flex items-center gap-2 pixel-link">
                  <PixelIcon icon={Github} className="text-purple-400" />
                  <span>github.com/mbifenzi</span>
                </Link>
                <Link href="https://www.linkedin.com/in/mohamed-bifenzi/" className="flex items-center gap-2 pixel-link">
                  <PixelIcon icon={Linkedin} className="text-blue-400" />
                  <span>linkedin.com/in/mohamed-bifenzi</span>
                </Link>
                <Link href="https://x.com/MBifenzi" className="flex items-center gap-2 pixel-link">
                  <PixelIcon icon={Twitter} className="text-cyan-400" />
                  <span>@MBifenzi</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/Mohamed-bifenzi.pdf" download>
              <Button variant="outline" className="pixel-border pixel-button">
                DOWNLOAD RESUME
              </Button>
            </a>
          </div>
        </div>
      </PixelatedContainer>

      <footer className="py-6 px-4 text-center text-sm border-t border-gray-800">
        <p>© {currentYear} MOHAMED BIFENZI</p>
      </footer>
    </div>
  )
}
