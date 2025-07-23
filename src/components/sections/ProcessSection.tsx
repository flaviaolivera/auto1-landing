// src/components/sections/ProcessSection.tsx
'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const ProcessSection = () => {
  const workingStyle = [
    {
      number: "01",
      title: "Always Learning",
      description: "I dive deep into new technologies and best practices. If something doesn&apos;t work the first time, I persist until I understand it completely.",
      icon: "🧠",
      details: ["Documentation reading", "Hands-on experimentation", "Community learning", "Technical blogs"]
    },
    {
      number: "02", 
      title: "Team-First Approach",
      description: "I love sharing knowledge and learning from teammates. Code reviews and pair programming are opportunities to grow together.",
      icon: "🤝",
      details: ["Active code reviews", "Knowledge sharing", "Open communication", "Constructive feedback"]
    },
    {
      number: "03",
      title: "Clean Code Advocate",
      description: "I write maintainable, well-tested code from day one. Testing isn&apos;t optional - it&apos;s part of the development process.",
      icon: "✨",
      details: ["Unit testing", "Clean architecture", "Documentation", "Code standards"]
    },
    {
      number: "04",
      title: "Agile by Nature",
      description: "I thrive in fast-paced environments and adapt quickly to changing requirements. Scrum ceremonies help me stay aligned with team goals.",
      icon: "⚡",
      details: ["Scrum methodology", "Sprint planning", "Daily standups", "Retrospectives"]
    }
  ]

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
            
            <div className="grid grid-cols-4 gap-8">
              {workingStyle.map((step, index) => (
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
            {workingStyle.map((step, index) => (
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
      </div>
    </section>
  )
}

export default ProcessSection