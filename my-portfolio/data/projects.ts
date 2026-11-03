export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile" | "ai"

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
    id: "ryddar",
    title: "Ryddar",
    description: "Motorcycle route planning and rider safety app, live on the App Store.",
    image: "/ryddar.jpg",
    tags: ["React Native", "Django", "PostgreSQL", "Mapbox"],
    categories: ["mobile", "backend"],
    featured: true,
    url: "https://apps.apple.com/app/id6761373440",
    details:
      "Route planning with Mapbox, route-level weather scoring, risky-segment visualization, group rides, community spots, hazard reporting and a Rider SOS that alerts nearby riders. Built end to end, from the Django backend to the iOS release.\n\nWebsite: ryddar.com",
  },
  {
    id: "decorifai",
    title: "DecorifAI",
    description: "AI interior design and virtual staging from a photo of a room, live on the App Store.",
    image: "/decorifai.png",
    tags: ["React Native", "Django", "Replicate", "Cloudinary", "RevenueCat"],
    categories: ["mobile", "ai", "backend"],
    featured: true,
    url: "https://apps.apple.com/app/id6747948205",
    details:
      "Users photograph a room and DecorifAI redesigns, stages or declutters it while keeping its real walls, windows and floor. Asynchronous generation with Replicate, failure handling, automatic credit refunds, asset exports and RevenueCat subscriptions and credit packs. The Next.js marketing site is in English and French.\n\nWebsite: decorifai.com",
  },
  {
    id: "cartoonifai",
    title: "CartoonifAI",
    description: "Turns photos into anime, cartoon and comic art with AI, live on the App Store.",
    image: "/transform.PNG",
    tags: ["React Native", "Django", "Replicate", "RevenueCat", "i18n"],
    categories: ["mobile", "ai"],
    featured: true,
    url: "https://apps.apple.com/app/id6746586563",
    details:
      "Pick a style, upload a photo and get a cartoon version that keeps the person recognizable. Available in six languages, with in-app purchases and a Next.js marketing site.\n\nWebsite: cartoonifai.com",
  },
  {
    id: "mood2drink",
    title: "Mood to Drink",
    description: "Drink suggestions based on your mood, live on the App Store.",
    image: "/mood2drink.png",
    tags: ["React Native", "Next.js", "Zustand"],
    categories: ["mobile", "frontend"],
    featured: true,
    url: "https://apps.apple.com/app/id6743176462",
    details:
      "Suggests drinks for the user's current mood, with filters, a surprise menu and gamified selection.",
  },
  {
    id: "shared-backend",
    title: "Shared Django Backend",
    description: "One Django backend that runs the APIs for all four apps.",
    image: "/shared-backend.svg",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "Docker"],
    categories: ["backend"],
    featured: true,
    details:
      "Centralized authentication (email, Apple and Google sign-in, JWT) and shared infrastructure, with each product's domain logic in its own Django apps. Handles purchases and credits, AI generation jobs and media storage, and is deployed with Docker. The code is private because it runs production apps.",
  },
  {
    id: "astraconnect",
    title: "AstraConnect",
    description: "UM6P's academic mentoring platform, used by about 1,000 students and mentors.",
    image: "/astraconnect.svg",
    tags: ["Django", "DRF", "PostgreSQL", "Next.js", "Microsoft SSO"],
    categories: ["fullstack"],
    featured: true,
    details:
      "Built alone from functional specifications at Vanguard Center, UM6P. DRF APIs, PostgreSQL data models, Next.js interfaces and permissions for four user roles. One-to-one and group session scheduling with recurring availability, proposals, rescheduling and conflict detection. QR and manual attendance with expiring check-in tokens and audit trails. Microsoft SSO through the department's shared authentication service.",
  },
  {
    id: "sase-exam",
    title: "SASE Admissions Exam Platform",
    description: "UM6P's admissions exam platform. It handled 20,000 candidates during the 2026 testing week.",
    image: "/sase.png",
    tags: ["Next.js", "Django", "PostgreSQL"],
    categories: ["fullstack"],
    url: "https://sase-quiz.um6p.ma/login",
    featured: false,
    details:
      "Learner, mentor and admin assessment interfaces with timed quizzes, attempts, autosave and reviews. About 1,000 regular users, and 20,000 candidates during the 2026 admissions week, booking slots in batches to keep server load under control. Fixed production issues affecting submissions, question loading and session expiry.",
  },
  {
    id: "intranet-platform",
    title: "University Intranet System",
    description: "Intranet for university administrative processes such as leave requests and mission orders.",
    image: "/main-intra.png",
    tags: ["Next.js", "Django", "PostgreSQL"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Handles administrative processes like leave requests and mission orders, with Excel file parsing and financial calculations. Built the frontend and the authentication system.",
  },
  {
    id: "mechatronics-intranet",
    title: "Mechatronics School Intranet",
    description: "A platform for mechatronics students with a browser-based code editor and terminal.",
    image: "/mechatronics.png",
    tags: ["React", "Next.js", "Web Terminal"],
    categories: ["frontend"],
    featured: false,
    details:
      "Includes a browser-based VS Code editor, a web terminal, and a tool to visualize and structure academic projects.",
  },
  {
    id: "pyccel-playground",
    title: "Pyccel Playground",
    description: "Browser-based Python-to-C++/Fortran transpiler with execution.",
    image: "/pyccel.png",
    tags: ["Python", "Next.js", "Terminal"],
    categories: ["frontend"],
    featured: false,
    details: "Transpiles Python code to C++ and Fortran and runs it in an online terminal.",
    url: "https://pyccel-playground.vercel.app",
    github: "https://github.com/mbifenzi/pyccel-playground",
  },
  {
    id: "labsafe",
    title: "LabSafe",
    description: "Access and safety compliance management for research labs.",
    image: "/labsafe.png",
    tags: ["Next.js", "Django", "RBAC"],
    categories: ["fullstack"],
    featured: false,
    url: "https://labsafe.vercel.app",
    details:
      "Manages lab access permissions, enforces safety compliance and tracks researcher activity, with role-based access control across multiple labs.",
  },
  {
    id: "document-review-platform",
    title: "Document Review & Approval System",
    description: "Document submission with reviewer assignments, issue tracking and threaded discussions.",
    image: "/document.png",
    tags: ["Next.js", "Django", "Workflow", "RBAC"],
    categories: ["fullstack"],
    featured: false,
    details:
      "Users submit documents and assign reviewers. Reviewers open issues, discuss them in threaded comments and track each document's history and approval progress.",
  },
  {
    id: "ft-transcendence",
    title: "ft_transcendence",
    description: "Real-time multiplayer Pong with chat, authentication and user profiles.",
    image: "/tran.png",
    tags: ["Nest.js", "PostgreSQL", "WebSockets", "Next.js"],
    categories: ["fullstack"],
    featured: false,
    details:
      "1337 (42 Network) final project: multiplayer games, live chat, friend requests and achievements.",
    github: "https://github.com/mbifenzi/ft_transcendence",
  },
  {
    id: "car-sharing-platform",
    title: "Ok Voiture",
    description: "Car-sharing platform that connects vehicle owners with renters.",
    image: "/okvoiture.png",
    tags: ["Next.js", "Nest.js", "PostgreSQL"],
    categories: ["fullstack"],
    featured: false,
    details: "Users list and rent vehicles and manage bookings.",
    github: "https://github.com/mbifenzi/OkVoiture",
  },
  {
    id: "inception",
    title: "Inception",
    description: "Multi-service infrastructure with Docker Compose.",
    image: "/docker-infrastructure.png",
    tags: ["Docker", "Nginx", "MariaDB", "WordPress"],
    categories: ["backend"],
    featured: false,
    details: "1337 DevOps project: WordPress, Nginx and MariaDB, each in its own container, orchestrated with Docker Compose.",
    github: "https://github.com/mbifenzi/inception",
  },
  {
    id: "webserv",
    title: "Webserv",
    description: "An HTTP/1.1 web server written from scratch in C++.",
    image: "/webserv.svg",
    tags: ["C++", "HTTP", "Sockets"],
    categories: ["backend"],
    featured: false,
    details: "1337 project: a poll()-based server that handles many connections at once, parses HTTP requests and builds responses.",
    github: "https://github.com/mbifenzi/webserv",
  },
  {
    id: "cub3d",
    title: "Cub3D",
    description: "A 3D raycasting game engine inspired by Wolfenstein 3D.",
    image: "/3d-raycasting-game.png",
    tags: ["C", "Graphics", "Raycasting"],
    categories: ["frontend"],
    featured: false,
    details: "Built from scratch in C using raycasting: the player moves through a 3D world rendered from a 2D map.",
    github: "https://github.com/mbifenzi/cub3d",
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
