// src/components/sections/ProcessSection.tsx
'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

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
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Mi metodología probada
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong className="text-gray-900">5 fases estructuradas</strong> para transformar tu producto digital 
              en una máquina de generar conversiones y resultados medibles.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Desktop View - Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  {/* Content */}
                  <motion.div 
                    className={`text-center ${index % 2 === 0 ? 'pt-16' : 'pb-16'}`}
                    whileHover={{ 
                      y: index % 2 === 0 ? -5 : 5,
                      scale: 1.02
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <motion.div 
                        className="text-3xl mb-3"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10 
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <div className="text-sm font-mono text-orange-500 mb-2 font-bold">{step.number}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                      
                      {/* Details */}
                      <div className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex} 
                            className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "#FEF3C7"
                            }}
                            transition={{ 
                              opacity: { duration: 0.3, delay: index * 0.2 + detailIndex * 0.1 },
                              x: { duration: 0.3, delay: index * 0.2 + detailIndex * 0.1 },
                              scale: { duration: 0.2 },
                              backgroundColor: { duration: 0.2 }
                            }}
                          >
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-black"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5 
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {step.number}
                  </motion.div>
                </div>
                
                {/* Content */}
                <motion.div 
                  className="flex-1"
                  whileHover={{ x: 10 }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10 
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        {step.icon}
                      </motion.span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div 
                          key={detailIndex} 
                          className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "#FEF3C7" 
                          }}
                          transition={{ 
                            opacity: { duration: 0.3, delay: detailIndex * 0.1 },
                            scale: { duration: 0.3, delay: detailIndex * 0.1 },
                            backgroundColor: { duration: 0.2 }
                          }}
                        >
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={0.5}>
          <div className="text-center mt-16">
            <motion.div 
              className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Listo para acelerar tu crecimiento?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Cada proyecto es único. Hablemos sobre tus objetivos específicos y 
                cómo mi metodología puede adaptarse a tus necesidades.
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
                Consulta estratégica gratuita
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
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default ProcessSection