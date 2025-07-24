import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test-utils'
import ProjectCard from '../sections/projects/ProjectCard'
import type { Project } from '@/data/projects'

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project for AUTO1',
  technologies: ['React', 'TypeScript', 'Next.js'],
  liveUrl: 'https://test-project.com',
  githubUrl: 'https://github.com/test/project',
  category: 'web',
  insights: ['Test insight 1', 'Test insight 2'],
  autoRelevance: 'This project demonstrates AUTO1-relevant skills'
}

describe('ProjectCard', () => {
  it('renders without crashing', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('displays project information correctly', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project for AUTO1')).toBeInTheDocument()
    expect(screen.getByText('WEB PROJECT')).toBeInTheDocument()
  })

  it('renders all technologies', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  it('shows AUTO1 relevance section when provided', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    
    expect(screen.getByText('Why this matters for AUTO1:')).toBeInTheDocument()
    expect(screen.getByText('This project demonstrates AUTO1-relevant skills')).toBeInTheDocument()
  })

  it('displays technical insights', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    
    expect(screen.getByText('Key Technical Insights:')).toBeInTheDocument()
    expect(screen.getByText('Test insight 1')).toBeInTheDocument()
    expect(screen.getByText('Test insight 2')).toBeInTheDocument()
  })

  it('renders project links with correct attributes', () => {
    render(<ProjectCard project={mockProject} index={0} />)
    
    const liveLink = screen.getByRole('link', { name: /View Project/ })
    const codeLink = screen.getByRole('link', { name: /Code/ })
    
    expect(liveLink).toHaveAttribute('href', 'https://test-project.com')
    expect(liveLink).toHaveAttribute('target', '_blank')
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(codeLink).toHaveAttribute('href', 'https://github.com/test/project')
    expect(codeLink).toHaveAttribute('target', '_blank')
  })

  it('handles missing optional properties gracefully', () => {
    const minimalProject: Project = {
      id: 'minimal',
      title: 'Minimal Project',
      description: 'Basic project',
      technologies: ['React'],
      category: 'web'
    }
    
    render(<ProjectCard project={minimalProject} index={0} />)
    
    expect(screen.getByText('Minimal Project')).toBeInTheDocument()
    expect(screen.queryByText('Why this matters for AUTO1:')).not.toBeInTheDocument()
    expect(screen.queryByText('Key Technical Insights:')).not.toBeInTheDocument()
  })
})