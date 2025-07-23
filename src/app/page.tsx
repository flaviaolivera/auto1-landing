import HeroSection from '@/components/sections/HeroSection'
import ComparisonSection from '@/components/sections/ComparisonSection'
import ProjectsSection from '@/components/sections/projects/ProjectsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/ContactSection'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <AnimateOnScroll>
        <ComparisonSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.2}>
        <ProjectsSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.3}>
        <ProcessSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.4}>
        <ContactSection />
      </AnimateOnScroll>
    </div>
  )
}