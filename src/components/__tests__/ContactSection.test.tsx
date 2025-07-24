// src/components/__tests__/ContactSection.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test-utils'
import ContactSection from '@/components/sections/ContactSection'

describe('ContactSection', () => {
  it('renders without crashing', () => {
    render(<ContactSection />)
    expect(screen.getByText('Flavia Fernández Olivera')).toBeInTheDocument()
  })

  it('displays personal information', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('Flavia Fernández Olivera')).toBeInTheDocument()
    expect(screen.getByText('Junior Software Engineer')).toBeInTheDocument()
  })

  it('shows all contact links with correct attributes', () => {
    render(<ContactSection />)
    
    // Email link
    const emailLink = screen.getByRole('link', { name: /Email/ })
    expect(emailLink).toHaveAttribute('href', 'mailto:fernandezoliveraflavia@gmail.com')
    expect(emailLink).not.toHaveAttribute('target') // Email shouldn't open in new tab
    
    // LinkedIn link
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/flavia-fernandezolivera/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    // GitHub link
    const githubLink = screen.getByRole('link', { name: /GitHub/ })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/flaviaolivera')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('displays contact information with proper formatting', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('fernandezoliveraflavia@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('/flavia-fernandezolivera')).toBeInTheDocument()
    expect(screen.getByText('/flaviaolivera')).toBeInTheDocument()
  })

  it('includes contact icons', () => {
    render(<ContactSection />)
    
    // Check for emoji icons (basic check)
    expect(screen.getByText('✉️')).toBeInTheDocument()
    expect(screen.getByText('💼')).toBeInTheDocument()
    expect(screen.getByText('💻')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<ContactSection />)
    
    // Should be wrapped in section element (not footer)
    const section = screen.getByText('Flavia Fernández Olivera').closest('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('py-16', 'bg-gray-100')
    
    // Should have heading structure
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
})