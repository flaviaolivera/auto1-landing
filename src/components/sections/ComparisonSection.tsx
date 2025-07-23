// src/components/sections/ComparisonSection.tsx
'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { useState, useEffect } from 'react'

const ComparisonSection = () => {
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState<'technical' | 'ux' | 'collaboration'>('technical')

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: "💻",
      items: [
        {
          requirement: "JavaScript experience",
          solution: "Complex frontend apps development",
          icon: "⚡"
        },
        {
          requirement: "React.js + TypeScript",
          solution: "React projects + constant TypeScript in Nuxt 3 & Design Systems",
          icon: "⚛️"
        },
        {
          requirement: "Complex JS apps & async programming",
          solution: "Validated forms, API calls and dynamic data loading",
          icon: "🔄"
        },
        {
          requirement: "HTML, CSS & Bootstrap proficiency",
          solution: "HTML5, CSS3, Tailwind CSS, and PrimeVue mastery",
          icon: "🎨"
        }
      ]
    },
    ux: {
      title: "UX & Performance",
      icon: "📈",
      items: [
        {
          requirement: "Performance, usability & UX optimization",
          solution: "Scalable interfaces, GSAP animations, responsive design & micro-interactions",
          icon: "🏃"
        },
        {
          requirement: "A/B testing funnels & conversion optimization",
          solution: "Strategic Advertising background + conversion-focused component design",
          icon: "📈"
        },
        {
          requirement: "Landing pages development & maintenance",
          solution: "Nuxt development with i18n, VeeValidate, performance & accessibility focus",
          icon: "🚀"
        }
      ]
    },
    collaboration: {
      title: "Collaboration & Growth",
      icon: "🤝",
      items: [
        {
          requirement: "Collaboration with developers & testers",
          solution: "Agile teams, collaborative design & development (Scrum, continuous delivery)",
          icon: "👥"
        },
        {
          requirement: "Scalable platform contribution (C2B)",
          solution: "Design Systems, shared components, modular architecture & best practices",
          icon: "🏗️"
        },
        {
          requirement: "Continuous improvement, data & agile culture",
          solution: "Constant iteration, Vitest/Jest testing, Storybook documentation & UI improvement",
          icon: "📊"
        }
      ]
    }
  }

  const tabs = [
    { id: 'technical' as const, label: 'Technical Skills', icon: '💻' },
    { id: 'ux' as const, label: 'UX & Performance', icon: '📈' },
    { id: 'collaboration' as const, label: 'Collaboration', icon: '🤝' }
  ]

  if (!isClient) {
    // Versión estática para SSR
    return (
      <section id="match" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why there&apos;s a <span className="text-orange-500">Perfect Match</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong className="text-gray-900">Strategic analysis</strong> showing perfect alignment 
              between AUTO1&apos;s requirements and my strategic development background
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-orange-50 to-blue-50 text-orange-600 border-b-2 border-orange-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-16">
                {skillCategories[activeTab].items.map((item, index) => (
                  <div key={index}>
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
                      {/* Requirement */}
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 border-2 border-blue-200 text-blue-600 rounded-full text-3xl mb-6">
                          🎯
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.requirement}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-3xl mb-6">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.solution}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                        <div className="text-center mb-8">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 border-2 border-blue-200 text-blue-600 rounded-full text-2xl mb-4">
                            🎯
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">What AUTO1 needs:</h4>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.requirement}
                          </h3>
                        </div>

                        <div className="flex items-center mb-8">
                          <div className="flex-1 h-px bg-gray-200"></div>
                          <div className="mx-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="flex-1 h-px bg-gray-200"></div>
                        </div>

                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-2xl mb-4">
                            {item.icon}
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">What I bring:</h4>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.solution}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Versión con animaciones para el cliente
  return (
    <section id="match" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why there&apos;s a <span className="text-orange-500">Perfect Match</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong className="text-gray-900">Strategic analysis</strong> showing perfect alignment 
              between AUTO1&apos;s requirements and my strategic development background
            </p>
          </div>
        </AnimateOnScroll>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-50 to-blue-50 text-orange-600 border-b-2 border-orange-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg mr-2">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <motion.div 
            className="p-8"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-16">
              {skillCategories[activeTab].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
                    {/* Requirement */}
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 border-2 border-blue-200 text-blue-600 rounded-full text-3xl mb-6"
                        whileHover={{ rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        🎯
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.requirement}
                      </h3>
                    </motion.div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <motion.div 
                        className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Solution */}
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="inline-flex items-center justify-center w-20 h-20 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-3xl mb-6"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.solution}
                      </h3>
                    </motion.div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <motion.div 
                      className="bg-gray-50 rounded-2xl border border-gray-100 p-8"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-center mb-8">
                        <motion.div 
                          className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 border-2 border-blue-200 text-blue-600 rounded-full text-2xl mb-4"
                          whileHover={{ rotate: -5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          🎯
                        </motion.div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">What AUTO1 needs:</h4>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.requirement}
                        </h3>
                      </div>

                      <div className="flex items-center mb-8">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <motion.div 
                          className="mx-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                        <div className="flex-1 h-px bg-gray-200"></div>
                      </div>

                      <div className="text-center">
                        <motion.div 
                          className="inline-flex items-center justify-center w-16 h-16 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-2xl mb-4"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">What I bring:</h4>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.solution}
                        </h3>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default ComparisonSection