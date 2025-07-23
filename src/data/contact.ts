export interface ContactLink {
  title: string
  value: string
  href: string
  icon: string
}

export const contactLinks: ContactLink[] = [
  {
    title: "Email",
    value: "fernandezoliveraflavia@gmail.com",
    href: "mailto:fernandezoliveraflavia@gmail.com",
    icon: "✉️"
  },
  {
    title: "LinkedIn",
    value: "/flavia-fernandezolivera",
    href: "https://www.linkedin.com/in/flavia-fernandezolivera/",
    icon: "💼"
  },
  {
    title: "GitHub",
    value: "/flaviaolivera",
    href: "https://github.com/flaviaolivera",
    icon: "💻"
  }
]

export const personalInfo = {
  name: "Flavia Fernández Olivera",
  title: "Junior Software Engineer"
}