'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { useState } from 'react'
import { skillCategories, comparisonTabs } from '@/data/skills'

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'ux' | 'collaboration'>('technical')

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

          <div className="border-b border-gray-200">
            <div className="flex">
              {comparisonTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 cursor-pointer ${
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

          <motion.div 
            className="p-8"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-12">
              {skillCategories[activeTab].items.map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none border md:border-0 border-gray-100 p-6 md:p-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-blue-50 border-2 border-blue-200 text-blue-600 rounded-full text-2xl md:text-3xl mb-4 md:mb-6"
                        whileHover={{ rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        🎯
                      </motion.div>
                      <h4 className="text-sm md:hidden font-bold text-gray-900 mb-2">What AUTO1 needs:</h4>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {item.requirement}
                      </h3>
                    </motion.div>

                    <div className="flex justify-center items-center">
                      {/* Desktop Arrow */}
                      <motion.div 
                        className="hidden md:flex w-12 h-12 bg-orange-100 rounded-full items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </motion.div>
                      
                      {/* Mobile Separator */}
                      <div className="md:hidden flex items-center w-full my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <motion.div 
                          className="mx-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                        <div className="flex-1 h-px bg-gray-200"></div>
                      </div>
                    </div>

                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-green-50 border-2 border-green-200 text-green-600 rounded-full text-2xl md:text-3xl mb-4 md:mb-6"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h4 className="text-sm md:hidden font-bold text-gray-900 mb-2">What I bring:</h4>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {item.solution}
                      </h3>
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