import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@/test-utils'
import Header from '@/components/layout/Header'

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('displays AUTO1 logo', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: 'AUTO 1' })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/')
  })

  it('shows desktop navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: 'Perfect Match' })).toHaveAttribute('href', '#match')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'How I Work' })).toHaveAttribute('href', '#process')
  })

  it('has mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/ })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/ })

    expect(screen.queryByRole('link', { name: 'Perfect Match' })).toBeInTheDocument()

    fireEvent.click(menuButton)

    expect(screen.getByRole('button', { name: /Close menu/ })).toBeInTheDocument()
  })

  it('closes mobile menu when nav link is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/ })

    fireEvent.click(menuButton)
    expect(screen.getByRole('button', { name: /Close menu/ })).toBeInTheDocument()

    const navLinks = screen.getAllByRole('link', { name: 'Perfect Match' })
    const mobileNavLink = navLinks.find(link => 
      link.className.includes('block')
    )
    
    if (mobileNavLink) {
      fireEvent.click(mobileNavLink)
      expect(screen.getByRole('button', { name: /Open menu/ })).toBeInTheDocument()
    }
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/ })
    
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  })
})