// src/components/ui/AnimateOnScroll.tsx
'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
}

const AnimateOnScroll = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: AnimateOnScrollProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOnScroll