import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the welcome hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/暖窝猫舍/)
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: '我们的故事' })).toHaveAttribute('href', '#stories')
    expect(screen.getByRole('link', { name: '猫咪用品' })).toHaveAttribute('href', '#supplies')
  })

  it('renders feature sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: '我们的故事' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '猫咪用品' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '关于猫舍' })).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /阅读我们的故事/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /浏览猫咪用品/ })).toBeInTheDocument()
  })
})
