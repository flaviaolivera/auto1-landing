import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@/test-utils'
import ComparisonSection from '@/components/sections/ComparisonSection'

describe('ComparisonSection', () => {
  it('renders without crashing', () => {
    render(<ComparisonSection />)
    expect(screen.getByText(/Perfect Match/)).toBeInTheDocument()
  })

  it('displays main heading', () => {
    render(<ComparisonSection />)
    expect(screen.getByText(/Why there's a/)).toBeInTheDocument()
    expect(screen.getByText('Perfect Match')).toBeInTheDocument()
  })

  it('shows all tab buttons', () => {
    render(<ComparisonSection />)
    
    expect(screen.getByRole('button', { name: /Technical Skills/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /UX & Performance/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Collaboration/ })).toBeInTheDocument()
  })

  it('starts with technical tab active by default', () => {
    render(<ComparisonSection />)
    
    const technicalTab = screen.getByRole('button', { name: /Technical Skills/ })
    expect(technicalTab).toHaveClass('text-orange-600')
  })

  it('switches tabs when clicked', () => {
    render(<ComparisonSection />)
    
    const uxTab = screen.getByRole('button', { name: /UX & Performance/ })
    fireEvent.click(uxTab)

    expect(uxTab).toHaveClass('text-orange-600')

    expect(screen.getByText(/Performance, usability & UX optimization/)).toBeInTheDocument()
  })

  it('displays content for active tab', () => {
    render(<ComparisonSection />)

    expect(screen.getByText(/JavaScript experience/)).toBeInTheDocument()
    expect(screen.getByText(/React.js \+ TypeScript/)).toBeInTheDocument()

    const collaborationTab = screen.getByRole('button', { name: /Collaboration/ })
    fireEvent.click(collaborationTab)

    expect(screen.getByText(/Collaboration with developers & testers/)).toBeInTheDocument()
    expect(screen.getByText(/Agile teams, collaborative design/)).toBeInTheDocument()
  })

  it('shows AUTO1 requirements and solutions', () => {
    render(<ComparisonSection />)

    expect(screen.getAllByText(/What AUTO1 needs:/)).toHaveLength(4) 
    expect(screen.getAllByText(/What I bring:/)).toHaveLength(4) 
  })

  it('displays skill matching arrows/separators', () => {
    render(<ComparisonSection />)

    const separatorDivs = screen.getAllByText('🎯') 
    expect(separatorDivs.length).toBeGreaterThan(0)

    const gridContainers = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-3')
    expect(gridContainers.length).toBeGreaterThan(0)
  })

  it('includes key AUTO1-relevant skills', () => {
    render(<ComparisonSection />)

    expect(screen.getAllByText(/TypeScript/)).toHaveLength(2)
    expect(screen.getByText(/React.js \+ TypeScript/)).toBeInTheDocument()
    expect(screen.getByText(/Nuxt/)).toBeInTheDocument()
  })
})