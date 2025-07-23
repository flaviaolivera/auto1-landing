// src/components/sections/projects/ProjectsSection.tsx
'use client'

import { getFeaturedProjects } from '@/data/projects'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Production <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real-world applications showcasing <strong className="text-gray-900">conversion optimization</strong>, 
              scalable architecture, and user-centered design - all relevant to AUTO1&apos;s platform needs
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