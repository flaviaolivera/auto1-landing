export interface HeroStat {
  value: string
  label: string
  color: string
}

export const heroStats: HeroStat[] = [
  { 
    value: "100%", 
    label: "Ready to Learn & Adapt", 
    color: "text-orange-500" 
  },
  { 
    value: "24/7", 
    label: "Passionate Commitment", 
    color: "text-blue-600" 
  },
  { 
    value: "∞", 
    label: "Growth Mindset", 
    color: "text-green-600" 
  }
]

export const heroContent = {
  badge: "🚗 Junior Software Engineer • AUTO1 Ready",
  title: {
    main: "Strategic Thinking",
    highlight: "Code Craft"
  },
  cta: {
    primary: {
      text: "Why I'm Perfect for AUTO1",
      href: "#match"
    },
    secondary: {
      text: "See My Development Journey", 
      href: "#projects"
    }
  }
}