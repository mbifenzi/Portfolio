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
    description: "An intranet system for managing university administrative processes such as congé and ordre de mission.",
    image: "", // fill this in
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
    image: "", // fill this in
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
    image: "", // fill this in
    tags: ["Python", "Next.js", "Terminal"],
    categories: ["frontend", "ai"],
    featured: true,
    details:
      "Transpiles Python code to C++ and Fortran and runs it in a dedicated online terminal.",
  },
  {
    id: "phd-lms",
    title: "Gamified PhD LMS",
    description: "A learning platform for PhD candidates featuring a gamified application process and quizzes.",
    image: "", // fill this in
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
    image: "", // fill this in
    tags: ["React Native", "Next.js", "Zustand", "JSON"],
    categories: ["mobile", "frontend"],
    featured: true,
    url: "https://mood2drink.vercel.app/",
    details:
      "Suggests drinks depending on the user's mood. Includes drink filters, a surprise menu, and gamified selection tools.",
  },
  {
    id: "car-sharing-platform",
    title: "Ok Voiture",
    description: "A car-sharing platform that connects vehicle owners with renters.",
    image: "", // fill this in
    tags: ["Next.js", "Nest.js", "PostgreSQL"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Developed from scratch using a full-stack architecture. Users can list and rent vehicles, manage bookings, and communicate via the platform.",
  },
  {
    id: "ft-transcendence",
    title: "Ft_Transcendence",
    description: "A real-time multiplayer Pong game with chat, authentication, and user profiles.",
    image: "", // fill this in
    tags: ["Nest.js", "PostgreSQL", "WebSockets", "Next.js"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Developed as part of the 42 school curriculum. The project includes multiplayer support, live chat, friend requests, achievements, and more, with a focus on performance and user experience.",
  },
  {
    id: "inception",
    title: "Inception",
    description: "Docker-based system setup and orchestration for multiple services.",
    image: "", // fill this in
    tags: ["Docker", "DevOps", "Nginx", "WordPress"],
    categories: ["backend"],
    featured: false,
    details:
      "An educational DevOps project focused on deploying and managing a full infrastructure stack with Docker Compose, including WordPress, Nginx, and MariaDB.",
  },
  {
    id: "cub3d",
    title: "Cub3D",
    description: "A 3D raycasting game engine inspired by Wolfenstein 3D.",
    image: "", // fill this in
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
    image: "", // fill this in
    tags: ["Next.js", "Django", "RBAC", "Security"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Built to manage lab access permissions, enforce safety compliance, and monitor researcher activity. Includes role-based access control and secure record-keeping across multiple labs and users.",
  }
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
