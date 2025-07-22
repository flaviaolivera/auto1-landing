// src/components/sections/ComparisonSection.tsx

const ComparisonSection = () => {
  const comparisons = [
    {
      problem: "Diseños que no convierten",
      solution: "UX basado en datos y testing A/B",
      icon: "📈"
    },
    {
      problem: "Desarrollo lento y sin estructura",
      solution: "Next.js + TypeScript con arquitectura escalable",
      icon: "⚡"
    },
    {
      problem: "Falta de optimización móvil",
      solution: "Responsive design y performance optimizado",
      icon: "📱"
    },
    {
      problem: "Sin seguimiento de métricas",
      solution: "Analytics integrado y reportes detallados",
      icon: "📊"
    }
  ]

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            El problema vs La solución
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            <strong className="text-gray-900">Identifico lo que frena tu crecimiento</strong> y lo convierto en 
            oportunidades de mejora con metodologías probadas
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Problema */}
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full text-2xl mb-4">
                  ❌
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.problem}
                </h3>
                <p className="text-gray-600">
                  El problema que enfrentas actualmente
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <div className="w-8 h-8 text-gray-400">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* Solución */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.solution}
                </h3>
                <p className="text-gray-600">
                  Mi enfoque para resolver tu problema
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para acelerar tu conversión?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Conversemos sobre tus objetivos específicos.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Consulta gratuita de 30min
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

export default ComparisonSection