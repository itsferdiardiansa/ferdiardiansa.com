import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../About'

describe('features/About', () => {
  it('renders contents correctly', () => {
    const content = {
      title: 'About',
      items: [
        'Lorem ipsum',
        "My main focus these days is building accessible user interfaces for any clients that I'm working for.",
      ],
    }

    render(<About about={content} />)

    const titleText = screen.queryByTestId('aboutTitleText')
    const descriptionItems = screen.queryAllByTestId('aboutDescriptionItem')

    expect(titleText).toBeInTheDocument()

    descriptionItems.forEach(item => {
      expect(item).toBeInTheDocument()
    })
  })
})
