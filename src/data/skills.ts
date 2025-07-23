export interface SkillItem {
  requirement: string
  solution: string
  icon: string
}

export interface SkillCategory {
  title: string
  icon: string
  items: SkillItem[]
}

export interface TabItem {
  id: 'technical' | 'ux' | 'collaboration'
  label: string
  icon: string
}

export const skillCategories: Record<string, SkillCategory> = {
  technical: {
    title: "Technical Skills",
    icon: "💻",
    items: [
      {
        requirement: "JavaScript experience",
        solution: "Complex frontend apps development",
        icon: "⚡"
      },
      {
        requirement: "React.js + TypeScript",
        solution: "React projects + constant TypeScript in Nuxt 3 & Design Systems",
        icon: "⚛️"
      },
      {
        requirement: "Complex JS apps & async programming",
        solution: "Validated forms, API calls and dynamic data loading",
        icon: "🔄"
      },
      {
        requirement: "HTML, CSS & Bootstrap proficiency",
        solution: "HTML5, CSS3, Tailwind CSS, and PrimeVue mastery",
        icon: "🎨"
      }
    ]
  },
  ux: {
    title: "UX & Performance",
    icon: "📈",
    items: [
      {
        requirement: "Performance, usability & UX optimization",
        solution: "Scalable interfaces, GSAP animations, responsive design & micro-interactions",
        icon: "🏃"
      },
      {
        requirement: "A/B testing funnels & conversion optimization",
        solution: "Strategic Advertising background + conversion-focused component design",
        icon: "📈"
      },
      {
        requirement: "Landing pages development & maintenance",
        solution: "Nuxt development with i18n, VeeValidate, performance & accessibility focus",
        icon: "🚀"
      }
    ]
  },
  collaboration: {
    title: "Collaboration & Growth",
    icon: "🤝",
    items: [
      {
        requirement: "Collaboration with developers & testers",
        solution: "Agile teams, collaborative design & development (Scrum, continuous delivery)",
        icon: "👥"
      },
      {
        requirement: "Scalable platform contribution (C2B)",
        solution: "Design Systems, shared components, modular architecture & best practices",
        icon: "🏗️"
      },
      {
        requirement: "Continuous improvement, data & agile culture",
        solution: "Constant iteration, Vitest/Jest testing, Storybook documentation & UI improvement",
        icon: "📊"
      }
    ]
  }
}

export const comparisonTabs: TabItem[] = [
  { id: 'technical', label: 'Technical Skills', icon: '💻' },
  { id: 'ux', label: 'UX & Performance', icon: '📈' },
  { id: 'collaboration', label: 'Collaboration', icon: '🤝' }
]