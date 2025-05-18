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
import { Code, Database, Globe, Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen bg-black text-white font-pixel">
      {/* Hero Section */}
      <PixelatedSection className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-4 right-4 hidden md:flex items-center gap-2">
          <span className="text-xs">EXPERIENCE: 5+ YEARS</span>
          <ProgressBar value={90} maxValue={100} />
        </div>

        {/* Mobile experience bar - positioned below avatar */}
        <div className="md:hidden w-full px-4 mb-6 mt-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs">EXPERIENCE: 5+ YEARS</span>
            <ProgressBar value={90} maxValue={100} />
          </div>
        </div>

        <div className="pixel-animate-float z-10">
          <SwitchableAvatar
            className="w-32 h-32 md:w-48 md:h-48 mb-8 pixel-border"
            pixelArtSrc="/pixel-art-developer-avatar.png"
            realPhotoSrc="/real-photo-avatar.png"
            alt="Mohamed Bifenzi"
          />
        </div>

        <PixelatedHeading className="text-4xl md:text-6xl mb-4 text-center text-green-400 pixel-text-shadow">
          MOHAMED BIFENZI
        </PixelatedHeading>

        <div className="pixel-text-shadow text-xl md:text-2xl mb-8 text-center">
          <span className="text-yellow-400">FULL STACK DEVELOPER</span>
          <span className="pixel-blink"> _</span>
        </div>

        <p className="max-w-2xl text-center mb-8 px-4">
          Motivated problem solver with strong analytical and technical skills. Quick learner who thrives on bringing
          projects to fruition. Passionate about tackling complex challenges and achieving innovative solutions.
        </p>

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
          <span className="pixel-text-shadow">SCROLL DOWN TO CONTINUE</span>
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
                With over 5 years of experience in full stack development, I specialize in building robust, scalable
                applications that solve real business problems.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of user needs to create exceptional
                digital experiences.
              </p>
            </div>

            <div className="pixel-border p-6 bg-gray-900">
              <h3 className="text-xl mb-4 text-yellow-400">CORE COMPETENCIES</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <PixelIcon icon={Code} className="text-green-400" />
                  <span>Frontend Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <PixelIcon icon={Database} className="text-blue-400" />
                  <span>Backend Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <PixelIcon icon={Globe} className="text-purple-400" />
                  <span>Full-Stack Frameworks (Next.js & Django)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pixel-border p-6 bg-gray-900 mb-8">
            <h3 className="text-xl mb-6 text-yellow-400">TECHNICAL SKILLS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCard
                title="Frontend"
                skills={["JavaScript", "TypeScript", "React", "Next.js", "CSS/Tailwind"]}
                iconColor="text-blue-400"
              />
              <SkillCard
                title="Backend"
                skills={["Python", "Django", "Node.js", "Express", "SQL/NoSQL"]}
                iconColor="text-green-400"
              />
              <SkillCard
                title="Tools & Others"
                skills={["Git", "Docker", "CI/CD", "AWS", "Testing"]}
                iconColor="text-purple-400"
              />
            </div>
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
                <p className="mb-4">Available for new opportunities</p>
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
        <p>© {new Date().getFullYear()} MOHAMED BIFENZI • ALL RIGHTS RESERVED</p>
        <p className="mt-2 text-gray-500">CRAFTED WITH PRECISION AND PASSION</p>
      </footer>
    </div>
  )
}
