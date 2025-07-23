// src/components/sections/ContactSection.tsx
'use client'

import { motion } from 'motion/react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const ContactSection = () => {
  const contactLinks = [
    {
      title: "Email",
      value: "fernandezoliveraflavia@gmail.com",
      href: "mailto:fernandezoliveraflavia@gmail.com",
      icon: "✉️"
    },
    {
      title: "LinkedIn",
      value: "/flavia-fernandezolivera",
      href: "https://www.linkedin.com/in/flavia-fernandezolivera/",
      icon: "💼"
    },
    {
      title: "GitHub",
      value: "/flaviaolivera",
      href: "https://github.com/flaviaolivera",
      icon: "💻"
    }
  ]

  return (
    <footer className="py-16 bg-gray-100 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            {/* Name & Title */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Flavia Fernández Olivera
              </h3>
              <p className="text-gray-600 font-medium">
                Junior Software Engineer
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="text-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {contact.icon}
                  </motion.span>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-orange-500">
                      {contact.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {contact.value}
                    </div>
                  </div>
                  <motion.svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-orange-500 opacity-0 group-hover:opacity-100" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </motion.svg>
                </motion.a>
              ))}
            </motion.div>

          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}

export default ContactSection