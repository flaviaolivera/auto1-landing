// src/test-utils.tsx
import '@testing-library/jest-dom'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { vi } from 'vitest'

interface MotionProps {
  children: ReactNode
  className?: string
  [key: string]: unknown
}

// Mock motion/react for testing
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: MotionProps) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: MotionProps) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: MotionProps) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: MotionProps) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: MotionProps) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: MotionProps) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: MotionProps) => <span {...props}>{children}</span>,
    svg: ({ children, ...props }: MotionProps) => <svg role="img" {...props}>{children}</svg>,
    footer: ({ children, ...props }: MotionProps) => <footer {...props}>{children}</footer>,
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => children,
}))

// Mock AnimateOnScroll component
vi.mock('@/components/ui/AnimateOnScroll', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>
}))

// Custom render function
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }