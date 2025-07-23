'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { workingStyle } from '@/data/process'

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How I <span className="text-orange-500">Work</span> & Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong className="text-gray-900">Growth mindset, collaborative spirit, and continuous learning</strong> - 
              the foundation of my development journey.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {workingStyle.map((step, index) => (
              <motion.div 
                key={step.number} 
                className="relative"
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? 0 : -50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className={`
                    flex lg:block gap-6 lg:gap-0
                    ${index % 2 === 0 ? 'lg:pt-16' : 'lg:pb-16'}
                  `}
                  whileHover={{ 
                    y: window.innerWidth >= 1024 ? (index % 2 === 0 ? -5 : 5) : 0,
                    x: window.innerWidth < 1024 ? 10 : 0,
                    scale: window.innerWidth >= 1024 ? 1.02 : 1
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  {/* Mobile Number Circle */}
                  <div className="flex-shrink-0 lg:hidden">
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

                  <div className="flex-1 lg:flex-none">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 lg:text-center text-left">
                      {/* Desktop Icon */}
                      <motion.div 
                        className="hidden lg:block text-3xl mb-3"
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
                      
                      {/* Desktop Number */}
                      <div className="hidden lg:block text-sm font-mono text-orange-500 mb-2 font-bold">
                        {step.number}
                      </div>
                      
                      {/* Mobile Title + Icon */}
                      <div className="lg:hidden flex items-center gap-3 mb-3">
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

                      {/* Desktop Title */}
                      <h3 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm lg:text-sm text-gray-600 mb-4">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-1 lg:space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex} 
                            className="text-xs lg:text-xs text-gray-500 bg-gray-50 px-2 lg:px-2 py-1 rounded"
                            initial={{ opacity: 0, scale: 0.8, x: -10 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "#FEF3C7"
                            }}
                            transition={{ 
                              opacity: { duration: 0.3, delay: index * 0.1 + detailIndex * 0.05 },
                              scale: { duration: 0.3, delay: index * 0.1 + detailIndex * 0.05 },
                              x: { duration: 0.3, delay: index * 0.1 + detailIndex * 0.05 },
                              backgroundColor: { duration: 0.2 }
                            }}
                          >
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection