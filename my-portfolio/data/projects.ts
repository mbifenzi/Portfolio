export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile" | "ai" | "blockchain" | "iot"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  categories: ProjectCategory[]
  featured: boolean
  url?: string
  github?: string
  details?: string
}

export const projects: Project[] = [
  {
    id: "intranet-platform",
    title: "University Intranet System",
    description:
      "An intranet system for managing university administrative processes such as congé and ordre de mission.",
    image: "/main-intra.png",
    tags: ["Next.js", "Django", "PostgreSQL"],
    categories: ["fullstack"],
    featured: true,
    details:
      "Handles administrative processes like leave requests and mission orders. Includes Excel file parsing and financial calculation features. Developed frontend and authentication system.",
  },
  {
    id: "mechatronics-intranet",
    title: "Mechatronics School Intranet",
    description: "A platform for mechatronics students with development tools and project mapping.",
    image: "/mechatronics.png",
    tags: ["React", "Web Terminal", "VSCode", "Next.js"],
    categories: ["frontend"],
    featured: false,
    details:
      "Includes a browser-based VSCode editor, a web terminal, and a Holygraph tool to visualize and structure academic projects.",
  },
  {
    id: "pyccel-playground",
    title: "Pyccel Playground",
    description: "A browser-based Python-to-C++/Fortran transpiler with execution capabilities.",
    image: "/pyccel.png",
    tags: ["Python", "Next.js", "Terminal"],
    categories: ["frontend", "ai"],
    featured: true,
    details: "Transpiles Python code to C++ and Fortran and runs it in a dedicated online terminal.",
    url: "pyccel-playground.vercel.app",
  },
  {
    id: "phd-lms",
    title: "Gamified PhD LMS",
    description: "A learning platform for PhD candidates featuring a gamified application process and quizzes.",
    image: "/sase.png",
    tags: ["Next.js", "Gamification", "LMS"],
    categories: ["frontend"],
    featured: true,
    details:
      "Starts with a candidature process modeled after the 1337 School, guiding users through challenges. Includes learning modules and quizzes.",
  },
  {
    id: "mood2drink",
    title: "Mood To Drink",
    description: "A mobile and web app that recommends drinks based on your current mood.",
    image: "/mood2drink.png",
    tags: ["React Native", "Next.js", "Zustand", "JSON"],
    categories: ["mobile", "frontend"],
    featured: true,
    url: "https://apps.apple.com/ma/app/mood-to-drink/id6743176462",
    details:
      "Suggests drinks depending on the user's mood. Includes drink filters, a surprise menu, and gamified selection tools.",
  },
  {
    id: "car-sharing-platform",
    title: "Ok Voiture",
    description: "A car-sharing platform that connects vehicle owners with renters.",
    image: "/okvoiture.png",
    tags: ["Next.js", "Nest.js", "PostgreSQL"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Developed from scratch using a full-stack architecture. Users can list and rent vehicles, manage bookings, and communicate via the platform.",
    github: "https://github.com/mbifenzi/OkVoiture",
  },
  {
    id: "ft-transcendence",
    title: "Ft_Transcendence",
    description: "A real-time multiplayer Pong game with chat, authentication, and user profiles.",
    image: "/tran.png",
    tags: ["Nest.js", "PostgreSQL", "WebSockets", "Next.js"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Developed as part of the 42 school curriculum. The project includes multiplayer support, live chat, friend requests, achievements, and more, with a focus on performance and user experience.",
    github: "https://github.com/mbifenzi/ft_transcendence",
  },
  {
    id: "inception",
    title: "Inception",
    description: "Docker-based system setup and orchestration for multiple services.",
    image: "/docker-infrastructure.png",
    tags: ["Docker", "DevOps", "Nginx", "WordPress"],
    categories: ["backend"],
    featured: false,
    details:
      "An educational DevOps project focused on deploying and managing a full infrastructure stack with Docker Compose, including WordPress, Nginx, and MariaDB.",
    github: "https://github.com/mbifenzi/inception",
  },
  {
    id: "cub3d",
    title: "Cub3D",
    description: "A 3D raycasting game engine inspired by Wolfenstein 3D.",
    image: "/3d-raycasting-game.png",
    tags: ["C", "Graphics", "Raycasting"],
    categories: ["frontend"],
    featured: false,
    details:
      "Built from scratch in C using raycasting techniques. The player navigates a 3D world rendered with 2D techniques, implementing a basic game engine and map system.",
  },
  {
    id: "labsafe",
    title: "LabSafe",
    description: "A secure platform for managing access and safety compliance in research labs.",
    image: "/labsafe.png",
    tags: ["Next.js", "Django", "RBAC", "Security"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Built to manage lab access permissions, enforce safety compliance, and monitor researcher activity. Includes role-based access control and secure record-keeping across multiple labs and users.",
  },
  {
    id: "document-review-platform",
    title: "Document Review & Approval System",
    description: "A submission platform with reviewer assignments, issue tracking, and threaded discussions.",
    image: "/document.png",
    tags: ["Next.js", "Django", "Workflow", "RBAC", "Comments"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Enables users to submit documents and assign reviewers. Reviewers can create issues, engage in threaded comment discussions, and track document history and approval progress. Designed to support collaborative workflows in academic and institutional settings.",
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((project) => project.categories.includes(category))
}

export const getAllProjects = (): Project[] => {
  return projects
}
