import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test-utils'
import HeroSection from '@/components/sections/HeroSection'

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('displays main heading correctly', () => {
    render(<HeroSection />)
    expect(screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'h1' && content.includes('Strategic Thinking')
    })).toBeInTheDocument()
    expect(screen.getByText('Code Craft')).toBeInTheDocument()
  })

  it('shows AUTO1 badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Junior Software Engineer • AUTO1 Ready/)).toBeInTheDocument()
  })

  it('displays CTA buttons with correct links', () => {
    render(<HeroSection />)
    
    const primaryCTA = screen.getByRole('link', { name: /Why I'm Perfect for AUTO1/ })
    const secondaryCTA = screen.getByRole('link', { name: /See My Development Journey/ })
    
    expect(primaryCTA).toHaveAttribute('href', '#match')
    expect(secondaryCTA).toHaveAttribute('href', '#projects')
  })

  it('renders all hero stats', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Ready to Learn & Adapt')).toBeInTheDocument()
    
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Passionate Commitment')).toBeInTheDocument()
    
    expect(screen.getByText('∞')).toBeInTheDocument()
    expect(screen.getByText('Growth Mindset')).toBeInTheDocument()
  })

  it('contains key AUTO1-relevant content', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Vue, React & TypeScript/)).toBeInTheDocument()
    expect(screen.getByText(/AUTO1's international team/)).toBeInTheDocument()
  })
})