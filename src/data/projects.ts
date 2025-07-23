// src/data/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'ux' | 'testing'
  insights?: string[]
  autoRelevance?: string
}

export const projects: Project[] = [
  {
    id: 'wakkap-gaming-ecommerce',
    title: 'Wakkap - Gaming E-commerce',
    description: 'Full-stack gaming platform with advanced cart optimization, multi-step checkout flow, and real-time validation for enhanced user experience.',
    technologies: ['Vue.js', 'Nuxt3', 'TypeScript', 'PrimeVue', 'Pinia', 'VeeValidate', 'Zod', 'i18n', 'Tailwind CSS'],
    liveUrl: 'https://wakkap.com/',
    category: 'web',
    insights: ['Multi-step form optimization', 'Real-time validation', 'i18n support', 'State management'],
    autoRelevance: 'Conversion-focused e-commerce with optimized checkout flows'
  },
  {
    id: 'defsense-b2b-platform',
    title: 'DefSense - Landing Page',
    description: 'Conversion-focused landing page for defense simulation services with strategic messaging, CSS animations, and SEO optimization.',
    technologies: ['Vue.js', 'Nuxt3', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vitest'],
    liveUrl: 'https://defsense.ai/',
    category: 'web',
    insights: ['Conversion optimization', 'CSS animations', 'SEO focused', 'Clean & scalable code'],
    autoRelevance: 'Landing page optimization with conversion-focused design'
  },
  {
    id: 'map-of-history-ar',
    title: 'Map of History - Landing Page',
    description: 'Conversion-optimized landing page for AR narrative project with multi-language support, SEO optimization, and maintainable architecture.',
    technologies: ['Vue.js', 'Nuxt3', 'TypeScript', 'i18n', 'Tailwind CSS', 'Storybook', 'Vitest'],
    liveUrl: 'https://mapofhistory.crowtec.co/',
    category: 'web',
    insights: ['Multi-language support', 'SEO optimization', 'Maintainable code', 'Testing coverage'],
    autoRelevance: 'SEO-optimized landing pages with international reach'
  }
]

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projects.slice(0, 3) // Show top 3 projects
}