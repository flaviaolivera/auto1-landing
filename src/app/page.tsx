// src/app/page.tsx
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

      {/* Placeholder para las demás secciones */}
      <section id="comparison" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lo que buscas vs Lo que ofrezco</h2>
          <p className="text-gray-600">Sección comparativa - Próximamente</p>
        </div>
      </section>

      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proyectos destacados</h2>
          <p className="text-gray-600">Grid de proyectos - Próximamente</p>
        </div>
      </section>

      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo trabajo</h2>
          <p className="text-gray-600">Proceso de trabajo - Próximamente</p>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">¡Hablemos!</h2>
          <p className="text-gray-600">Formulario de contacto - Próximamente</p>
        </div>
      </section>
    </div>
  )
}