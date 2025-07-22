// src/components/sections/ProcessSection.tsx

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Research & Discovery",
      description: "Analizo tu negocio, usuarios y competencia. Identifico oportunidades de mejora y defino objetivos claros.",
      icon: "🔍",
      details: ["User Research", "Competitive Analysis", "Business Goals", "Technical Audit"]
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Diseño la estrategia UX y plan de testing A/B. Defino métricas clave y hipótesis a validar.",
      icon: "📋",
      details: ["UX Strategy", "A/B Test Plan", "Success Metrics", "Technical Architecture"]
    },
    {
      number: "03",
      title: "Design & Prototype",
      description: "Creo wireframes, prototipos y diseños finales. Enfoque en usabilidad y conversión.",
      icon: "🎨",
      details: ["Wireframing", "Visual Design", "Prototyping", "Design System"]
    },
    {
      number: "04",
      title: "Development & Testing",
      description: "Desarrollo con React/Next.js y implemento tests A/B. Código limpio y escalable.",
      icon: "⚡",
      details: ["Frontend Development", "A/B Testing Setup", "Performance Optimization", "QA Testing"]
    },
    {
      number: "05",
      title: "Launch & Optimize",
      description: "Lanzamiento, monitoreo de métricas y optimización continua basada en datos reales.",
      icon: "🚀",
      details: ["Deployment", "Analytics Setup", "Performance Monitoring", "Continuous Optimization"]
    }
  ]

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Mi metodología probada
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            <strong className="text-gray-900">5 fases estructuradas</strong> para transformar tu producto digital 
            en una máquina de generar conversiones y resultados medibles.
          </p>
        </div>

        {/* Desktop View - Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`text-center ${index % 2 === 0 ? 'pt-16' : 'pb-16'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <div className="text-sm font-mono text-orange-500 mb-2 font-bold">{step.number}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                      
                      {/* Details */}
                      <div className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-black">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para acelerar tu crecimiento?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Hablemos sobre tus objetivos específicos y 
              cómo mi metodología puede adaptarse a tus necesidades.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Consulta estratégica gratuita
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection