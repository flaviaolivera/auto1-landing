'use client'

import { motion } from 'motion/react'
import { heroStats, heroContent } from '@/data/hero'

const HeroSection = () => {
  return (
    <section id="hero" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            {heroContent.badge}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            {heroContent.title.main}
            <br />
            Meets <span className="text-orange-500">{heroContent.title.highlight}</span>
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
              href={heroContent.cta.primary.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 shadow-lg cursor-pointer"
            >
              {heroContent.cta.primary.text}
            </motion.a>
            <motion.a
              href={heroContent.cta.secondary.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold cursor-pointer hover:bg-blue-600 hover:text-white"
            >
              {heroContent.cta.secondary.text}
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
        </div>
      </div>
    </section>
  )
}

export default HeroSection