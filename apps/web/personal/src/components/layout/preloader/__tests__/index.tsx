import React from 'react'
import { render, screen, waitFor, cleanup, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import PreLoader from '../'
import { upPositions } from '../positions'
import { gsap } from 'gsap'
import { createParticleEffect } from '@/utils'

jest.mock('gsap')
jest.mock('@/utils', () => ({
  createParticleEffect: jest.fn(),
}))

const mockedCreateParticleEffect = createParticleEffect as jest.Mock
const mockedGSAP = gsap as jest.Mocked<typeof gsap>

type GSAPConfig = {
  onStart?: (target?: any) => void
  onComplete?: (target?: any) => void
  [key: string]: any
}

describe('component/layout/preloader', () => {
  let timeline: jest.Mocked<gsap.core.Timeline>

  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()

    timeline = {
      fromTo: jest.fn().mockReturnThis(),
      to: jest.fn((target, config: GSAPConfig) => {
        if (config?.onStart) {
          config.onStart(target)
        }
        if (config?.onComplete) {
          config.onComplete(target)
        }
        return timeline
      }),
      eventCallback: jest.fn().mockReturnThis(),
      kill: jest.fn(),
      restart: jest.fn(),
    } as unknown as jest.Mocked<gsap.core.Timeline>

    mockedGSAP.timeline.mockReturnValue(timeline)
  })

  afterEach(cleanup)

  it('renders correctly and matches the DOM structure', () => {
    const { container } = render(<PreLoader />)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
    expect(container.querySelectorAll('.fake-spinner')).toHaveLength(2)
  })

  it('initializes GSAP animations', async () => {
    await act(async () => {
      render(<PreLoader />)
    })

    expect(mockedGSAP.timeline).toHaveBeenCalledWith({
      id: expect.any(String),
    })

    expect(timeline.to).toHaveBeenCalledTimes(upPositions.length)
    expect(timeline.eventCallback).toHaveBeenCalledWith(
      'onComplete',
      expect.any(Function)
    )
  })

  it('triggers particle effects at appropriate times', async () => {
    render(<PreLoader />)

    act(() => {
      jest.advanceTimersByTime(upPositions.length * 250)
    })

    await waitFor(() => {
      expect(mockedCreateParticleEffect).toHaveBeenCalledTimes(5)
    })
  })

  it('updates the message every interval', async () => {
    render(<PreLoader />)

    const firstMessageElement = screen.getByText((_, element) => {
      return element?.tagName.toLowerCase() === 'p'
    })

    expect(firstMessageElement).toBeInTheDocument()

    const firstMessageText = firstMessageElement.textContent

    await act(async () => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      const newMessageElement = screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === 'p' && content !== firstMessageText
        )
      })

      expect(newMessageElement).toBeInTheDocument()
    })
  })

  it('ensures timeline restarts on animation completion', async () => {
    render(<PreLoader />)

    const eventCallbackCalls = timeline.eventCallback.mock
      .calls as unknown as Array<[event: string, callback: () => void]>

    const onCompleteCallback = eventCallbackCalls.find(
      call => call[0] === 'onComplete'
    )?.[1]

    if (onCompleteCallback) {
      await act(async () => onCompleteCallback())
      expect(timeline.restart).toHaveBeenCalled()
    } else {
      throw new Error('onComplete callback not found')
    }
  })

  it('cleans up GSAP timeline and intervals on unmount', () => {
    const { unmount } = render(<PreLoader />)
    unmount()

    expect(timeline.kill).toHaveBeenCalled()
  })
})
