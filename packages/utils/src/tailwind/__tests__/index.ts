import { describe, it, expect } from '@jest/globals'
import { cn } from '../tailwind'

describe('tailwind custom className', () => {
  it('should generate className by given params', () => {
    const classNames = [
      'bg-white',
      'inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg',
    ]

    for (const cls of classNames) {
      expect(cn(cls)).toEqual(cls)
    }
  })

  it('should generate className by using object params', () => {
    expect(cn({ dark: false }, 'bg-white')).toEqual('bg-white')
    expect(cn({ dark: true }, 'bg-white')).toEqual('dark bg-white')
  })
})
