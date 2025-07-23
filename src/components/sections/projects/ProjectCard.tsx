// src/components/sections/projects/ProjectCard.tsx
'use client'

import { motion } from 'motion/react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ 
        opacity: { duration: 0.6, delay: index * 0.1 },
        y: { duration: 0.3, ease: "easeOut" }
      }}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        {/* Category Badge */}
        <motion.div 
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {project.category.toUpperCase()} PROJECT
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* AUTO1 Relevance */}
        {project.autoRelevance && (
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-semibold text-orange-800 mb-1">Why this matters for AUTO1:</h4>
            <p className="text-sm text-orange-700">{project.autoRelevance}</p>
          </div>
        )}

        {/* Key Insights */}
        {project.insights && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Technical Insights:</h4>
            <div className="grid grid-cols-2 gap-1">
              {project.insights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center text-xs text-gray-600"
                >
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                  {insight}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span 
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "#FEF3C7",
                y: -2
              }}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md transition-colors cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <motion.a 
              href={project.liveUrl}
              className="flex items-center text-sm text-orange-500 hover:text-orange-600 font-bold"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View Project
              <motion.svg 
                className="ml-1 w-3 h-3" 
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
          )}
          {project.githubUrl && (
            <motion.a 
              href={project.githubUrl}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Code
              <motion.svg 
                className="ml-1 w-3 h-3" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </motion.svg>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard