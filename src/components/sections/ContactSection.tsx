// src/components/sections/ContactSection.tsx

const ContactSection = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Respondo en menos de 24h",
      value: "hola@auto1.com",
      href: "mailto:hola@auto1.com"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Para conversaciones rápidas",
      value: "+34 600 000 000",
      href: "https://wa.me/34600000000"
    },
    {
      icon: "📅",
      title: "Calendario",
      description: "Agenda una videollamada",
      value: "Reservar 30min",
      href: "https://calendly.com/auto1"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            ¿Tienes una idea o necesitas optimizar algo existente? 
            <strong className="text-gray-900"> Conversemos sobre cómo acelerar tus resultados.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Formas de contacto
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition-all duration-200 group"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="text-3xl">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-orange-500">
                        {method.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                      <p className="text-orange-500 font-medium">{method.value}</p>
                    </div>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-orange-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">⚡</div>
                <h4 className="font-semibold text-blue-900">Respuesta rápida garantizada</h4>
              </div>
              <p className="text-blue-800 text-sm">
                Me comprometo a responder todos los mensajes en menos de 24 horas. 
                Para proyectos urgentes, WhatsApp es la opción más rápida.
              </p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Cuéntame sobre tu proyecto
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de proyecto
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Selecciona una opción</option>
                  <option>Landing page nueva</option>
                  <option>Optimización de conversión</option>
                  <option>Rediseño de UX</option>
                  <option>Desarrollo web completo</option>
                  <option>Testing A/B</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Cuéntame más sobre tu proyecto, objetivos y timeline..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-200"
              >
                Enviar mensaje
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              * Al enviar este formulario, recibirás una respuesta personalizada en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection