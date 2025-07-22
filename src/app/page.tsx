// src/app/page.tsx
'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import ComparisonSection from '@/components/sections/ComparisonSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactSection from '@/components/sections/ContactSection'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const stats = [
    { value: "+40%", label: "Mejora promedio en conversión", color: "text-orange-500" },
    { value: "24h", label: "Tiempo de respuesta garantizado", color: "text-blue-600" },
    { value: "100%", label: "Proyectos entregados a tiempo", color: "text-green-600" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {isClient ? (
              // Versión animada para el cliente
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  🚀 Especialista en UX/UI y A/B Testing
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
                >
                  Acelero tu 
                  <span className="text-orange-500"> conversión</span>
                  <br />
                  con datos
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
                >
                  Desarrollo productos digitales que no solo se ven profesionales, sino que 
                  <strong className="text-gray-900"> generan resultados medibles</strong>. 
                  Enfoque en UX, performance y testing A/B para maximizar tu ROI.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-8 justify-center"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 shadow-lg cursor-pointer"
                  >
                    Ver casos de éxito
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-blue-600 hover:text-white"
                  >
                    Consulta gratuita
                  </motion.a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                      }}
                      className="text-center cursor-pointer"
                    >
                      <motion.div 
                        className={`text-3xl font-black ${stat.color} mb-2`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.2 + index * 0.1,
                          type: "spring",
                          stiffness: 200 
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              // Versión estática para SSR
              <>
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
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <a
                    href="#projects"
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 shadow-lg cursor-pointer"
                  >
                    Ver casos de éxito
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-blue-600 hover:text-white"
                  >
                    Consulta gratuita
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-black ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Secciones con AnimateOnScroll */}
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