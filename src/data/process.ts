export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
  details: string[]
}

export const workingStyle: ProcessStep[] = [
  {
    number: "01",
    title: "Always Learning",
    description: "I dive deep into new technologies and best practices. If something doesn't work the first time, I persist until I understand it completely.",
    icon: "🧠",
    details: ["Documentation reading", "Hands-on experimentation", "Community learning", "Technical blogs"]
  },
  {
    number: "02", 
    title: "Team-First Approach",
    description: "I love sharing knowledge and learning from teammates. Code reviews and pair programming are opportunities to grow together.",
    icon: "🤝",
    details: ["Active code reviews", "Knowledge sharing", "Open communication", "Constructive feedback"]
  },
  {
    number: "03",
    title: "Clean Code Advocate",
    description: "I write maintainable, well-tested code from day one. Testing isn't optional - it's part of the development process.",
    icon: "✨",
    details: ["Unit testing", "Clean architecture", "Documentation", "Code standards"]
  },
  {
    number: "04",
    title: "Agile by Nature",
    description: "I thrive in fast-paced environments and adapt quickly to changing requirements. Scrum ceremonies help me stay aligned with team goals.",
    icon: "⚡",
    details: ["Scrum methodology", "Sprint planning", "Daily standups", "Retrospectives"]
  }
]