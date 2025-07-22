// src/data/projects.ts

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'ux' | 'testing'
}

export const projects: Project[] = [
  {
    id: 'ecommerce-optimization',
    title: 'E-commerce A/B Testing',
    description: 'Optimización de conversión en checkout mediante testing A/B, incrementando ventas en un 34%.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Next.js', 'A/B Testing', 'Analytics'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'testing'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard UX',
    description: 'Rediseño completo de dashboard empresarial con foco en usabilidad y experiencia del usuario.',
    image: '/projects/dashboard.jpg',
    technologies: ['Figma', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://example.com',
    category: 'ux'
  },
  {
    id: 'mobile-app',
    title: 'App de Productividad',
    description: 'Aplicación móvil para gestión de tareas con interfaz intuitiva y animaciones fluidas.',
    image: '/projects/mobile.jpg',
    technologies: ['React Native', 'Expo', 'Framer Motion'],
    githubUrl: 'https://github.com/example',
    category: 'mobile'
  },
  {
    id: 'landing-conversion',
    title: 'Landing de Alta Conversión',
    description: 'Landing page optimizada que logró un 8.5% de conversión mediante pruebas iterativas.',
    image: '/projects/landing.jpg',
    technologies: ['Next.js', 'Tailwind', 'Vercel', 'Google Analytics'],
    liveUrl: 'https://example.com',
    category: 'web'
  }
]

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projects.slice(0, 3)
}