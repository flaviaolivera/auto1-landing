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

        <div className="space-y-16">
          {comparisons.map((item, index) => (
            <div key={index}>
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
                {/* Problema */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 border-2 border-red-200 text-red-500 rounded-full text-3xl mb-6">
                    ❌
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600">
                    El problema actual
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                {/* Solución */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-3xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.solution}
                  </h3>
                  <p className="text-gray-600">
                    Mi solución
                  </p>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  {/* Problema */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 border-2 border-red-200 text-red-500 rounded-full text-2xl mb-4">
                      ❌
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Problema:</h4>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.problem}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center mb-8">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <div className="mx-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>

                  {/* Solución */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-2xl mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Solución:</h4>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.solution}
                    </h3>
                  </div>
                </div>
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