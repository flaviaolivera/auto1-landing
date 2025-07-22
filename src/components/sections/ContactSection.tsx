// src/components/sections/ContactSection.tsx
'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

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
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              ¿Tienes una idea o necesitas optimizar algo existente? 
              <strong className="text-gray-900"> Conversemos sobre cómo acelerar tus resultados.</strong>
            </p>
          </div>
        </AnimateOnScroll>

        {/* Contact Methods - Centrados */}
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group text-center"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02 
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.3, ease: "easeOut" },
                    scale: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="text-4xl mb-2"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10 
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {method.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-orange-500 text-lg mb-2">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                    <p className="text-orange-500 font-bold">{method.value}</p>
                  </div>
                  <motion.svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-500 mt-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor"
                    whileHover={{ 
                      x: 3,
                      scale: 1.1 
                    }}
                    transition={{ 
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </motion.svg>
                </motion.a>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Quick Response Promise */}
          <AnimateOnScroll delay={0.3}>
            <motion.div 
              className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div 
                  className="text-3xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
                <h4 className="font-bold text-blue-900 text-xl">Respuesta rápida garantizada</h4>
              </div>
              <p className="text-blue-800">
                Me comprometo a responder todos los mensajes en menos de 24 horas. 
                Para proyectos urgentes, WhatsApp es la opción más rápida.
              </p>
            </motion.div>
          </AnimateOnScroll>

          {/* CTA Final */}
          <AnimateOnScroll delay={0.5}>
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Preparado para impulsar tu negocio?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  No esperes más para optimizar tu conversión. Cada día que pasa sin mejoras 
                  es una oportunidad perdida.
                </p>
                <motion.a 
                  href="#contact"
                  className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                >
                  Empezar ahora
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor"
                    whileHover={{ x: 3 }}
                    transition={{ 
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default ContactSection