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
    { value: "100%", label: "Ready to Learn & Adapt", color: "text-orange-500" },
    { value: "24/7", label: "Passionate Commitment", color: "text-blue-600" },
    { value: "∞", label: "Growth Mindset", color: "text-green-600" }
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
                  🚗 Junior Software Engineer • AUTO1 Ready
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
                >
                  Strategic Thinking
                  <br />
                  Meets <span className="text-orange-500">Code Craft</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed"
                >
                  From <strong className="text-gray-900">Advertising Strategy to Software Development</strong>. 
                  Bringing curiosity, persistence and multicultural adaptability to AUTO1&apos;s international team. 
                  <strong className="text-gray-900"> Vue, React & TypeScript</strong> with a product-focused mindset.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-8 justify-center"
                >
                  <motion.a
                    href="#match"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 shadow-lg cursor-pointer"
                  >
                    Why I&apos;m Perfect for AUTO1
                  </motion.a>
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-blue-600 hover:text-white"
                  >
                    See My Development Journey
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
                  🚗 Junior Software Engineer • AUTO1 Ready
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                  Strategic Thinking
                  <br />
                  Meets <span className="text-orange-500">Code Craft</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                  From <strong className="text-gray-900">Advertising Strategy to Software Development</strong>. 
                  Bringing curiosity, persistence and multicultural adaptability to AUTO1&apos;s international team. 
                  <strong className="text-gray-900"> Vue, React & TypeScript</strong> with a product-focused mindset.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <a
                    href="#match"
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 shadow-lg cursor-pointer"
                  >
                    Why I&apos;m Perfect for AUTO1
                  </a>
                  <a
                    href="#projects"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-blue-600 hover:text-white"
                  >
                    See My Development Journey
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