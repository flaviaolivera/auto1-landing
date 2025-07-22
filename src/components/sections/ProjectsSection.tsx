// src/components/sections/ProjectsSection.tsx
'use client'

import { motion } from 'motion/react'
import { getFeaturedProjects, Project } from '@/data/projects'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
      }}
      transition={{ 
        opacity: { duration: 0.6, delay: index * 0.1 },
        y: { duration: 0.3, ease: "easeOut" }
      }}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image placeholder */}
      <motion.div 
        className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-6xl opacity-20"
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              opacity: 0.4 
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            {project.category === 'web' && '🌐'}
            {project.category === 'mobile' && '📱'}
            {project.category === 'ux' && '🎨'}
            {project.category === 'testing' && '📊'}
          </motion.div>
        </div>
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        />
      </motion.div>

      <div className="p-6">
        {/* Category badge */}
        <motion.div 
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {project.category.toUpperCase()}
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

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
              whileHover={{ 
                scale: 1.05,
                x: 3 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Ver proyecto
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
              whileHover={{ 
                scale: 1.05,
                x: 3 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Código
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

const ProjectsSection = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Casos de éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Proyectos que han generado <strong className="text-gray-900">resultados medibles</strong> 
              para empresas que buscan acelerar su crecimiento digital
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection