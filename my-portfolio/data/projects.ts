export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile" | "ai"

export interface CaseStudy {
  slug: string
  problem: string
  built: string[]
  hardPart: { title: string; body: string }
  results: string[]
  chips: string[]
  links: { label: string; href: string }[]
  note?: string
  article?: { title: string; href: string }
}

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
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    id: "ryddar",
    title: "Ryddar",
    description: "Community app for motorcycle riders: group rides, rider spots, road alerts and SOS. Live on the App Store.",
    image: "/ryddar-cover.jpg",
    tags: ["React Native", "Django", "PostgreSQL", "Mapbox", "RevenueCat"],
    categories: ["mobile", "backend"],
    featured: true,
    url: "https://apps.apple.com/app/id6761373440",
    details:
      "Group rides with a meeting point, departure time, rider limit and ride chat. Riders share spots (mechanics, fuel stops, cafes, scenic roads) and report hazards that expire after about 4 hours unless others confirm them. Rider SOS alerts nearby riders with your location. Route planning on Mapbox gives each ride a weather exposure score, with wind and rain along the route and better departure times. Ryddar Plus is a subscription through RevenueCat.\n\nWebsite: ryddar.com",
  },
  {
    id: "decorifai",
    title: "DecorifAI",
    description: "AI interior design and virtual staging from a photo of a room. Live on the App Store.",
    image: "/decorifai-cover.jpg",
    tags: ["React Native", "Django", "Replicate", "Cloudinary", "RevenueCat"],
    categories: ["mobile", "ai", "backend"],
    featured: true,
    url: "https://apps.apple.com/app/id6747948205",
    details:
      "Snap a room and DecorifAI redesigns, furnishes or clears it while keeping its real walls, windows and floor, then fine-tune it in plain words. 20 styles, including Moroccan and Mediterranean ones, and 5-second videos of the room transforming. Asynchronous generation with Replicate, failure handling with automatic credit refunds, Cloudinary storage, and RevenueCat subscriptions and credit packs. The Next.js website is in English and French.\n\nWebsite: decorifai.com",
    caseStudy: {
      slug: "decorifai",
      problem:
        "Homeowners, renters and real-estate agents want to see a room in a new style before spending money, but AI image models are slow, cost money per call and sometimes fail. The app had to feel instant and never charge for a failed result.",
      built: [
        "An Expo / React Native iOS app: pick a room photo, a mode (redesign, furnish, clear out) and one of 20 styles, including Moroccan and Mediterranean ones.",
        "Plain-language edits on any result (\"make the walls white\") and 5-second videos of the room transforming.",
        "A Django product app that creates Replicate predictions, receives the result by webhook, and stores images and videos on Cloudinary.",
        "Credits, subscriptions and credit packs through RevenueCat, plus rewarded ads.",
        "A Next.js marketing site in English and French.",
      ],
      hardPart: {
        title: "Asynchronous generation with automatic refunds",
        body: "A generation can take from a few seconds to a minute, so the API doesn't wait for it. It charges the credits, starts the prediction with a webhook URL and returns right away. The app polls the generation's status, and each poll also asks Replicate directly in case a webhook is late. When Replicate calls back, the backend verifies the webhook signature before trusting it. If the prediction failed or was cancelled, the same code path gives the credits back as a ledger entry, so users never pay for nothing.",
      },
      results: [
        "Live on the App Store",
        "Redesign, furnish and clear-out modes, 20 styles, room videos",
        "No charge for failed generations",
      ],
      chips: ["Live on the App Store", "Async AI jobs", "Auto refunds"],
      links: [
        { label: "App Store", href: "https://apps.apple.com/app/id6747948205" },
        { label: "Website", href: "https://www.decorifai.com" },
      ],
    }
  },
  {
    id: "cartoonifai",
    title: "CartoonifAI",
    description: "Turns selfies into anime, 3D cartoon and comic portraits, and animates them. Live on the App Store.",
    image: "/cartoonifai-cover.jpg",
    tags: ["React Native", "Django", "Replicate", "RevenueCat", "i18n"],
    categories: ["mobile", "ai"],
    featured: true,
    url: "https://apps.apple.com/app/id6746586563",
    details:
      "Pick a style (Anime Glow, 3D Dream, Comic Hero, Storybook, Pop Toon and seasonal sets), choose a photo and get a portrait that still looks like you. Any result can be turned into a 5-second video. Available in six languages, with RevenueCat purchases and a Next.js website.\n\nWebsite: cartoonifai.com",
  },
  {
    id: "mood2drink",
    title: "Mood to Drink",
    description: "Tell it your vibe and get one drink made for tonight, with alcohol-free picks and party wheels.",
    image: "/mood2drink-cover.jpg",
    tags: ["React Native", "Expo", "Django", "RevenueCat", "i18n"],
    categories: ["mobile", "frontend"],
    featured: true,
    url: "https://apps.apple.com/app/id6743176462",
    details:
      "Version 2.0 is a complete redesign. Pick a mood, a taste and a strength, and the app suggests one drink with the reason it fits, from 130+ recipes with alcohol-free picks for every mood. Party wheels decide whose turn it is or what the table drinks. No account: preferences stay on the phone. The catalogue comes from the shared Django backend, with a bundled copy for offline use. Six languages, a one-time Plus purchase through RevenueCat, and a Next.js website.\n\nWebsite: mood2drink.vercel.app",
  },
  {
    id: "shared-backend",
    title: "Shared Django Backend",
    description: "One Django backend that runs the APIs for all four apps.",
    image: "/shared-backend-cover.jpg",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "Docker"],
    categories: ["backend"],
    featured: true,
    details:
      "Centralized authentication (email, Apple and Google sign-in, JWT) and shared infrastructure, with each product's domain logic in its own Django apps. Handles purchases and credits, AI generation jobs and media storage, and is deployed with Docker. The code is private because it runs production apps.",
    caseStudy: {
      slug: "shared-django-backend",
      problem:
        "Four apps, one developer. Running a separate backend per app would mean four copies of auth, payments, deploys and on-call. I needed one backend that every app could use without their data and rules leaking into each other.",
      built: [
        "One Django REST Framework project. Each product is its own Django app under products/ (ryddar, decorifai, cartoonifai, mood2drink) with its own models, migrations, admin, URLs and tests.",
        "One shared User model with JWT authentication (SimpleJWT, rotating refresh tokens, a blacklist) and Sign in with Apple and Google. Apps that work without an account start with an anonymous device installation, which is linked to the user when they sign in.",
        "A credits ledger: every purchase, refund, reward and generation is an entry with a unique reference.",
        "RevenueCat webhooks for subscriptions and consumable packs, including refunds that take credits back.",
        "Docker images deployed to a Hetzner server behind Caddy, with GitHub Actions running the tests and deploying to production.",
      ],
      hardPart: {
        title: "Credits that never double-count",
        body: "Payment providers retry webhooks, users double-tap and networks drop responses. Each ledger entry carries a unique reference (for example the store transaction ID), so a retried event can't add credits twice. Balance changes run inside transaction.atomic with select_for_update on the account row, so two requests can't spend the same credit at the same time.",
      },
      results: [
        "Runs the APIs for 4 App Store apps from a single deployment",
        "Adding a product means adding a Django app; auth, payments and deploys are already there",
        "Test suites per product, run in CI before every deploy",
      ],
      chips: ["4 apps · 1 backend", "Idempotent credits", "Docker + CI/CD"],
      links: [],
      note: "The code is private because it runs production apps. Happy to walk through it in an interview.",
      article: { title: "One Django backend for four App Store apps", href: "/writing/one-backend-four-apps" },
    }
  },
  {
    id: "astraconnect",
    title: "AstraConnect",
    description: "UM6P's academic mentoring platform, part of the department's holon.ma platforms. About 1,000 students and mentors use it.",
    image: "/astraconnect-cover.jpg",
    tags: ["Django", "DRF", "PostgreSQL", "Next.js", "Microsoft SSO"],
    categories: ["fullstack"],
    featured: true,
    details:
      "Built alone from functional specifications at Vanguard Center, UM6P, as one of the department's platforms on holon.ma. DRF APIs, PostgreSQL data models, Next.js interfaces and permissions for four user roles. One-to-one and group session scheduling with recurring availability, proposals, rescheduling and conflict detection. QR and manual attendance with expiring check-in tokens, duplicate prevention and audit trails. Programs, cohorts, courses, enrollments and mentor workloads. Microsoft SSO through the shared authentication service used by all the department's holon.ma platforms.",
  },
  {
    id: "sase-exam",
    title: "SASE Admissions Exam Platform",
    description: "UM6P's admissions exam platform. It handled 20,000 candidates during the 2026 testing week.",
    image: "/sase-cover.jpg",
    tags: ["Next.js", "Django", "PostgreSQL"],
    categories: ["fullstack"],
    url: "https://sase-quiz.um6p.ma/login",
    featured: false,
    details:
      "Learner, mentor and admin assessment interfaces with timed quizzes, attempts, autosave and reviews. About 1,000 regular users, and 20,000 candidates during the 2026 admissions week, booking slots in batches to keep server load under control. Fixed production issues affecting submissions, question loading and session expiry.",
    caseStudy: {
      slug: "sase-exam-platform",
      problem:
        "UM6P's SASE admissions test runs online. During the admissions week thousands of candidates take timed exams, and a crash, a lost answer or an expired session can cost someone their place.",
      built: [
        "Learner, mentor and admin assessment interfaces.",
        "Timed quizzes with attempts, autosave and reviews.",
        "Production support during the admissions week: fixes for submissions, question loading and session expiry.",
      ],
      hardPart: {
        title: "Keeping it stable under admissions-week load",
        body: "The platform serves about 1,000 regular users, but the 2026 admissions week brought 20,000 candidates. Candidates booked slots in batches, which kept the number of simultaneous exams under control. During the week I fixed production issues affecting submissions, question loading and session expiry, the three places where a candidate could lose work.",
      },
      results: [
        "20,000 candidates during the 2026 admissions testing week",
        "About 1,000 regular users",
        "Autosave so candidates don't lose answers",
      ],
      chips: ["20,000 candidates", "Timed exams", "Production support"],
      links: [{ label: "Platform", href: "https://sase-quiz.um6p.ma/login" }],
      note: "Built at Vanguard Center, UM6P. The code belongs to the university and isn't public.",
    }
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

const caseStudyOrder = ["shared-django-backend", "decorifai", "sase-exam-platform"]

export const getCaseStudies = (): Project[] => {
  return projects
    .filter((project) => project.caseStudy)
    .sort((a, b) => caseStudyOrder.indexOf(a.caseStudy!.slug) - caseStudyOrder.indexOf(b.caseStudy!.slug))
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.caseStudy?.slug === slug)
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
