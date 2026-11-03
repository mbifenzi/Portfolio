import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PixelatedContainer } from "@/components/pixelated-container"
import { PixelatedHeading } from "@/components/pixelated-heading"
import { ProjectCard } from "@/components/project-card"
import { PixelatedSection } from "@/components/pixelated-section"
import { ProgressBar } from "@/components/progress-bar"
import { PixelIcon } from "@/components/pixel-icon"
import { SwitchableAvatar } from "@/components/switchable-avatar"
import { SkillCard } from "@/components/skill-card"
import { getFeaturedProjects } from "@/data/projects"
import { Code, Database, Smartphone, Mail, Github, Linkedin, Twitter, ArrowRight, MapPin } from "lucide-react"

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
      "Built AstraConnect, the academic mentoring platform, alone from functional specifications: DRF APIs, PostgreSQL models, Next.js interfaces and four user roles. About 1,000 students and mentors use it.",
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
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <PixelatedSection className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-4 right-4 hidden md:flex items-center gap-2">
          <span className="text-xs font-pixel">EXPERIENCE: 3+ YEARS</span>
          <ProgressBar value={90} maxValue={100} />
        </div>

        {/* Mobile experience bar - positioned below avatar */}
        <div className="md:hidden w-full px-4 mb-6 mt-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-pixel">EXPERIENCE: 3+ YEARS</span>
            <ProgressBar value={90} maxValue={100} />
          </div>
        </div>

        <div className="pixel-animate-float z-10">
          <SwitchableAvatar
            className="w-32 h-32 md:w-48 md:h-48 mb-8 pixel-border"
            pixelArtSrc="/pixel-art-developer-avatar.png"
            realPhotoSrc="/real-photo-avatar.png"
            alt="Mohamed Bifenzi"
            initialIsPixelArt={true}
          />
        </div>

        <PixelatedHeading className="text-4xl md:text-6xl mb-4 text-center text-green-400 pixel-text-shadow">
          MOHAMED BIFENZI
        </PixelatedHeading>

        <div className="pixel-text-shadow text-xl md:text-2xl mb-8 text-center">
          <span className="text-yellow-400 font-pixel">SOFTWARE ENGINEER · PYTHON / DJANGO</span>
          <span className="pixel-blink"> _</span>
        </div>

        <p className="max-w-2xl text-center mb-8 px-4">
          I build business platforms end to end with Python, Django and React: data models, APIs, frontend and
          production support. I also ship and maintain four apps of my own on the App Store.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 px-4 w-full max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label} className="pixel-border bg-gray-900 p-4 text-center">
              <div className="font-pixel text-2xl text-green-400">{stat.value}</div>
              <div className="font-pixel text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mb-12">
          <a href="#projects">
            <Button variant="outline" className="pixel-border pixel-button">
              VIEW PROJECTS
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="pixel-border pixel-button">
              CONTACT ME
            </Button>
          </a>
        </div>

        <div className="absolute bottom-8 hidden md:block animate-bounce">
          <span className="pixel-text-shadow font-pixel">SCROLL DOWN TO CONTINUE</span>
        </div>

        <div className="absolute inset-0 pointer-events-none pixel-grid-overlay"></div>
      </PixelatedSection>

      {/* About Section */}
      <PixelatedContainer className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-8 text-center text-blue-400">EXPERTISE</PixelatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="pixel-border p-6 bg-gray-900">
              <h3 className="text-xl mb-4 text-yellow-400">PROFESSIONAL PROFILE</h3>
              <p className="mb-4">
                Software engineer writing code since 2019, with 3+ years of professional Python and Django experience.
                At UM6P I build multi-role platforms that thousands of students and candidates use.
              </p>
              <p>
                Before code I studied economics and worked in sales, so I care about how business software handles
                workflows, stock and money.
              </p>
            </div>

            <div className="pixel-border p-6 bg-gray-900">
              <h3 className="text-xl mb-4 text-yellow-400">CORE COMPETENCIES</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <PixelIcon icon={Database} className="text-green-400" />
                  <span>Django & DRF APIs, PostgreSQL data models</span>
                </li>
                <li className="flex items-center gap-2">
                  <PixelIcon icon={Code} className="text-blue-400" />
                  <span>React & Next.js interfaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <PixelIcon icon={Smartphone} className="text-purple-400" />
                  <span>React Native apps, from build to App Store release</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pixel-border p-6 bg-gray-900 mb-8">
            <h3 className="text-xl mb-6 text-yellow-400">TECHNICAL SKILLS</h3>
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
          </div>
        </div>
      </PixelatedContainer>

      {/* Experience Section */}
      <PixelatedContainer id="experience" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-8 text-center text-green-400">EXPERIENCE</PixelatedHeading>

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

      {/* Projects Section */}
      <PixelatedContainer id="projects" className="py-16 px-4 bg-gray-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-8 text-center text-purple-400">
            FEATURED PROJECTS
          </PixelatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
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
                VIEW ALL PROJECTS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </PixelatedContainer>

      {/* Contact Section */}
      <PixelatedContainer id="contact" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <PixelatedHeading className="text-3xl md:text-4xl mb-8 text-center text-red-400">CONNECT</PixelatedHeading>

          <div className="pixel-border p-6 bg-gray-900 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="text-center">
                <SwitchableAvatar
                  className="w-24 h-24 mb-4 mx-auto pixel-border"
                  pixelArtSrc="/pixel-art-developer-avatar.png"
                  realPhotoSrc="/real-photo-avatar.png"
                  alt="Mohamed Bifenzi"
                />
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

                <Link
                  href="https://www.linkedin.com/in/mohamed-bifenzi/"
                  className="flex items-center gap-2 pixel-link"
                >
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

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm">
        <p>© {currentYear} MOHAMED BIFENZI • ALL RIGHTS RESERVED</p>
        
      </footer>
    </div>
  )
}
