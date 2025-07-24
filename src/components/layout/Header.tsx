'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Perfect Match', href: '#match' },
    { name: 'Projects', href: '#projects' },
    { name: 'How I Work', href: '#process' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight">
              AUTO<span className="text-orange-500">1</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>

              <motion.div
                className="relative w-6 h-6"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current transform"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ top: '6px' }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current transform"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ top: '12px' }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current transform"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ top: '18px' }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + 0.2 
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header