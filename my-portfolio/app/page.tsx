import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { SiteHeader } from "@/components/site-header"
import { SwitchableAvatar } from "@/components/switchable-avatar"
import { SkillCard } from "@/components/skill-card"
import { getCaseStudies, getFeaturedProjects } from "@/data/projects"
import { stats } from "@/data/profile"
import { Mail, Github, Linkedin, ArrowRight, MapPin, Download } from "lucide-react"

// Pre-calculate the current year to avoid hydration mismatch
const currentYear = new Date().getFullYear()

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const contactLinks = [
  { href: "mailto:mohamedbifenzi1@gmail.com", label: "mohamedbifenzi1@gmail.com", icon: Mail },
  { href: "https://github.com/mbifenzi", label: "github.com/mbifenzi", icon: Github },
  { href: "https://www.linkedin.com/in/mohamed-bifenzi/", label: "linkedin.com/in/mohamed-bifenzi", icon: Linkedin },
  { href: "https://x.com/MBifenzi", label: "@MBifenzi", icon: XIcon },
]

const experience = [
  {
    role: "Full-Stack Developer",
    place: "Vanguard Center, UM6P",
    period: "May 2023 – Present",
    points: [
      "Built AstraConnect, SASE's academic mentoring platform on the department's holon.ma platforms, alone from functional specifications: DRF APIs, PostgreSQL models, Next.js interfaces and four user roles. About 1,000 students and mentors use it.",
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
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <SwitchableAvatar
            className="w-28 h-28 md:w-36 md:h-36 rounded-xl border border-gray-800 shrink-0"
            pixelArtSrc="/pixel-art-developer-avatar.png"
            realPhotoSrc="/real-photo-avatar.png"
            alt="Mohamed Bifenzi"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Mohamed Bifenzi</h1>
            <p className="font-mono text-base md:text-lg text-green-400 mb-4">Software engineer · Python / Django</p>
            <p className="max-w-2xl text-gray-300 leading-relaxed mb-6">
              I build business platforms end to end with Python, Django and React: data models, APIs, frontend and
              production support. I also ship and maintain four apps of my own on the App Store.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#work">
                <Button>View work</Button>
              </a>
              <a href="/Mohamed-bifenzi.pdf" download>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
              <a href="https://github.com/mbifenzi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-4 text-center">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <Section id="work" className="py-16 px-4 bg-gray-950 scroll-mt-14">
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="text-3xl md:text-4xl mb-3 text-center">Featured work</SectionHeading>
          <p className="text-center text-gray-400 mb-10">Four projects in depth: the problem, what I built and the hard part.</p>

          <div className="space-y-8 mb-16">
            {caseStudies.map((project, index) => (
              <CaseStudyCard key={project.id} project={project} priority={index === 0} />
            ))}
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-center mb-8">More projects</h3>
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
                caseStudySlug={project.caseStudy?.slug}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="group">
                All projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="py-16 px-4 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="text-3xl md:text-4xl mb-3 text-center">Experience</SectionHeading>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Writing code since 2019, with 3+ years of professional Python and Django. Before that I studied economics and
            worked in sales.
          </p>

          <div className="space-y-6 mb-12">
            {experience.map((job) => (
              <div key={job.role + job.period} className="card p-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="font-normal text-gray-400">· {job.place}</span>
                  </h3>
                  <span className="font-mono text-sm text-gray-400 shrink-0">{job.period}</span>
                </div>
                {job.points.length > 0 && (
                  <ul className="space-y-2 text-gray-300">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-gray-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <SectionHeading className="text-2xl md:text-3xl mb-6 text-center">Education</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item) => (
              <div key={item.school} className="card p-6">
                <h3 className="text-lg font-semibold mb-1">{item.school}</h3>
                <p className="text-gray-300">{item.degree}</p>
                <p className="font-mono text-sm text-gray-400 mt-2">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="py-16 px-4 bg-gray-950 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="text-3xl md:text-4xl mb-8 text-center">Skills</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard
              title="Backend"
              skills={["Python", "Django", "Django REST Framework", "Django Channels", "PostgreSQL", "Redis"]}
            />
            <SkillCard
              title="Frontend & Mobile"
              skills={["TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS"]}
            />
            <SkillCard
              title="Tooling"
              skills={["Git", "Docker", "Linux", "pytest", "CI/CD", "C / C++"]}
            />
            <SkillCard
              title="Integrations"
              skills={["Microsoft SSO", "Mapbox", "RevenueCat", "Replicate", "Cloudinary"]}
            />
          </div>
          <p className="text-center text-gray-400 mt-6">Languages: Arabic (native), French and English (full professional).</p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16 px-4 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="text-3xl md:text-4xl mb-8 text-center">Contact</SectionHeading>

          <div className="card p-6 md:p-8 mb-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Mohamed Bifenzi</h3>
              <p className="text-gray-300 mb-1">Open to new opportunities</p>
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400">
                <MapPin className="h-4 w-4" /> Rabat, Morocco
              </p>
            </div>

            <ul className="space-y-3">
              {contactLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-green-400 transition-colors"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-gray-400" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a href="/Mohamed-bifenzi.pdf" download>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download resume
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-6 px-4 text-center text-sm border-t border-gray-800">
        <p className="text-gray-500">© {currentYear} Mohamed Bifenzi</p>
      </footer>
    </div>
  )
}
