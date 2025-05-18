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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "/pixel-art-ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
    categories: ["frontend", "backend", "fullstack"],
    featured: true,
    github: "https://github.com/mbifenzi/ecommerce-platform",
    details:
      "This project features a complete e-commerce solution with user authentication, product catalog, shopping cart, payment processing, and admin dashboard for inventory management.",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business intelligence with real-time metrics.",
    image: "/pixel-art-dashboard.png",
    tags: ["Next.js", "TypeScript", "Chart.js"],
    categories: ["frontend", "fullstack"],
    featured: true,
    github: "https://github.com/mbifenzi/analytics-dashboard",
    details:
      "A comprehensive analytics dashboard that visualizes business data in real-time. Features include customizable widgets, data filtering, and export capabilities.",
  },
  {
    id: "mobile-application",
    title: "Mobile Application",
    description: "Cross-platform mobile app with offline capabilities and cloud synchronization.",
    image: "/pixel-art-mobile-app.png",
    tags: ["React Native", "Firebase", "Redux"],
    categories: ["mobile", "frontend"],
    featured: true,
    github: "https://github.com/mbifenzi/mobile-app",
    details:
      "A cross-platform mobile application built with React Native that works offline and syncs data when connectivity is restored.",
  },
  {
    id: "ai-content-platform",
    title: "AI Content Platform",
    description: "Web application that leverages AI to generate and optimize marketing content.",
    image: "/pixel-art-ai-generator.png",
    tags: ["Python", "TensorFlow", "React"],
    categories: ["ai", "fullstack"],
    featured: true,
    github: "https://github.com/mbifenzi/ai-content-platform",
    details:
      "An AI-powered platform that helps marketers generate and optimize content across various channels. Uses natural language processing to create engaging copy.",
  },
  {
    id: "blockchain-explorer",
    title: "Blockchain Explorer",
    description: "Tool for visualizing and exploring blockchain transactions and smart contracts.",
    image: "/placeholder-8zqxa.png",
    tags: ["Ethereum", "Web3.js", "Vue"],
    categories: ["blockchain", "frontend"],
    featured: true,
    github: "https://github.com/mbifenzi/blockchain-explorer",
    details:
      "A blockchain explorer that allows users to search and visualize transactions, smart contracts, and wallet activities on various blockchain networks.",
  },
  {
    id: "iot-management-system",
    title: "IoT Management System",
    description: "Enterprise solution for monitoring and controlling IoT devices at scale.",
    image: "/pixel-art-iot-dashboard.png",
    tags: ["Raspberry Pi", "MQTT", "React"],
    categories: ["iot", "fullstack"],
    featured: true,
    github: "https://github.com/mbifenzi/iot-management",
    details:
      "An enterprise-grade IoT management system that allows for monitoring, controlling, and managing thousands of connected devices from a central dashboard.",
  },
  {
    id: "social-media-scheduler",
    title: "Social Media Scheduler",
    description: "Platform for planning and scheduling social media content across multiple platforms.",
    image: "/pixel-art-social-scheduler.png",
    tags: ["React", "Node.js", "Redux"],
    categories: ["frontend", "fullstack"],
    featured: false,
    github: "https://github.com/mbifenzi/social-scheduler",
    details:
      "A comprehensive tool for social media managers to plan, create, and schedule content across multiple platforms from a single interface.",
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
    image: "/pixel-art-fitness-app.png",
    tags: ["React Native", "Firebase", "GraphQL"],
    categories: ["mobile", "frontend"],
    featured: false,
    github: "https://github.com/mbifenzi/fitness-tracker",
    details:
      "A mobile app that helps users track their fitness journey, including workouts, nutrition, and progress metrics with personalized recommendations.",
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Web application for property listings with virtual tours and mortgage calculator.",
    image: "/pixel-art-real-estate.png",
    tags: ["Next.js", "Django", "PostgreSQL"],
    categories: ["fullstack", "frontend", "backend"],
    featured: false,
    github: "https://github.com/mbifenzi/real-estate-platform",
    details:
      "A comprehensive real estate platform featuring property listings, virtual tours, mortgage calculators, and agent profiles with appointment scheduling.",
  },
  {
    id: "educational-learning-system",
    title: "Educational Learning System",
    description: "Online learning platform with course management and progress tracking.",
    image: "/pixel-art-education-app.png",
    tags: ["React", "Django", "AWS"],
    categories: ["fullstack", "frontend", "backend"],
    featured: false,
    github: "https://github.com/mbifenzi/learning-platform",
    details:
      "An e-learning platform with features for course creation, student enrollment, progress tracking, and certification management.",
  },
  {
    id: "weather-visualization",
    title: "Weather Visualization",
    description: "Interactive weather data visualization with historical trends and forecasting.",
    image: "/pixel-art-weather-app.png",
    tags: ["D3.js", "Node.js", "APIs"],
    categories: ["frontend", "fullstack"],
    featured: false,
    github: "https://github.com/mbifenzi/weather-viz",
    details:
      "An interactive weather visualization tool that displays current conditions, historical trends, and forecasts using various data sources and APIs.",
  },
  {
    id: "task-management-system",
    title: "Task Management System",
    description: "Team collaboration tool with task assignment, tracking, and reporting.",
    image: "/pixel-art-task-app.png",
    tags: ["Vue.js", "Express", "MongoDB"],
    categories: ["fullstack", "frontend"],
    featured: false,
    github: "https://github.com/mbifenzi/task-manager",
    details:
      "A collaborative task management system designed for teams with features for task assignment, progress tracking, and performance reporting.",
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
