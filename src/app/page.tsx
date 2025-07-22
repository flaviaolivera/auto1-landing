// src/app/page.tsx
import ComparisonSection from '@/components/sections/ComparisonSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Diseño experiencias que 
              <span className="text-blue-600"> convierten</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Especialista en UX/UI y desarrollo con enfoque en testing A/B. 
              Creo productos digitales que no solo se ven bien, sino que funcionan mejor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Ver mis proyectos
              </a>
              <a 
                href="#contact" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200"
              >
                Hablemos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ComparisonSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}