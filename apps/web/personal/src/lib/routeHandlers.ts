import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { setCacheHeaders } from './cacheControl'

export function handleLoading(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl

  if (pathname.includes('/loading')) {
    const response = NextResponse.next()
    setCacheHeaders(response, {
      cacheControl: 'no-store, no-cache',
      expires: '0',
      additionalHeaders: { 'X-Cache-Handler': 'loading' },
    })
    return response
  }

  return null
}

export function handleCustomRoute(
  request: NextRequest,
  matchPattern: string,
  additionalHeaders?: Record<string, string>
): NextResponse | null {
  const { pathname } = request.nextUrl

  if (pathname.includes(matchPattern)) {
    const response = NextResponse.next()
    setCacheHeaders(response, {
      cacheControl: 'private, max-age=3600',
      additionalHeaders,
    })
    return response
  }

  return null
}
