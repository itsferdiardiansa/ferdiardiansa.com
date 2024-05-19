import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CareerTimeline from '../CareerTimeline'
import CareerTimelineItem from '../CareerTimelineItem'
import type { CareerTimeline as CareerTimelineType } from '@/types/contents'

describe('features/CareerTimeline', () => {
  it('renders contents correctly', () => {
    const content = [] as CareerTimelineType[]

    const { container } = render(<CareerTimeline career={content} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders contents of CareerTimelineItem correctly', () => {
    const item: CareerTimelineType = {
      title: 'Software Engineer Frontend',
      subTitle: 'Part-time',
      time: 'Jan - Feb 2024',
      description: 'Lorem ipsum',
      link: 'https://google.com',
      techStacks: ['React', 'NextJS'],
    }

    render(<CareerTimelineItem {...item} />)

    const titleText = screen.queryByTestId('careerTitleText')
    const subTitleText = screen.queryByTestId('careerSubTitleText')
    const descriptionText = screen.queryByTestId('careerDescriptionText')
    const timeText = screen.queryByTestId('careerTimeText')
    const linkAnchor = screen.queryByTestId('careerLink')
    const techStack = screen.getByText(item.techStacks[0])

    expect(titleText).toBeInTheDocument()
    expect(subTitleText).toBeInTheDocument()
    expect(descriptionText).toBeInTheDocument()
    expect(timeText).toBeInTheDocument()
    expect(linkAnchor?.getAttribute('href')).toEqual(item.link)
    expect(techStack).toBeInTheDocument()
  })

  it("set anchor with hashbang if there's no link provided", () => {
    const item: CareerTimelineType = {
      title: 'SE',
      subTitle: null,
      time: 'Jan - Feb 2024',
      description: 'Lorem ipsum',
      link: null,
      techStacks: ['React', 'NextJS'],
    }

    render(<CareerTimelineItem {...item} />)
    const linkAnchor = screen.queryByTestId('careerLink')

    expect(linkAnchor?.getAttribute('href')).toEqual('#')
  })

  it("won't renders contents of CareerTimelineItem correctly", () => {
    const item: CareerTimelineType = {
      title: null,
      subTitle: null,
      time: 'Jan - Feb 2024',
      description: 'Lorem ipsum',
      link: null,
      techStacks: ['React', 'NextJS'],
    }

    render(<CareerTimelineItem {...item} />)

    const titleText = screen.queryByTestId('careerTitleText')
    const subTitleText = screen.queryByTestId('careerSubTitleText')

    expect(titleText).not.toBeInTheDocument()
    expect(subTitleText).not.toBeInTheDocument()
  })
})
