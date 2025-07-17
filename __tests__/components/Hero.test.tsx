import { render, screen } from '@testing-library/react'
import Hero from '@/components/sections/Hero'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    
    const heading = screen.getByText('ForkedOcean')
    expect(heading).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    
    const subtitle = screen.getByText('Your Ocean. Your Control.')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the quote', () => {
    render(<Hero />)
    
    const quote = screen.getByText('"The sea forks when thought begins."')
    expect(quote).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Hero />)
    
    const enterButton = screen.getByText('Enter Ocean')
    const genesisButton = screen.getByText('Genesis Log')
    
    expect(enterButton).toBeInTheDocument()
    expect(genesisButton).toBeInTheDocument()
  })
})