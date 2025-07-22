// src/app/page.tsx
import ComparisonSection from '@/components/sections/ComparisonSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Especialista en UX/UI y A/B Testing
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Acelero tu 
              <span className="text-orange-500"> conversión</span>
              <br />
              con datos
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Desarrollo productos digitales que no solo se ven profesionales, sino que 
              <strong className="text-gray-900"> generan resultados medibles</strong>. 
              Enfoque en UX, performance y testing A/B para maximizar tu ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Ver casos de éxito
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Consulta gratuita
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-500 mb-2">+40%</div>
                <p className="text-gray-600 font-medium">Mejora promedio en conversión</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">24h</div>
                <p className="text-gray-600 font-medium">Tiempo de respuesta garantizado</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600 mb-2">100%</div>
                <p className="text-gray-600 font-medium">Proyectos entregados a tiempo</p>
              </div>
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