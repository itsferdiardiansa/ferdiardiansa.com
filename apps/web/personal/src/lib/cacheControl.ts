import { NextResponse } from 'next/server'

type CacheHeaderOptions = {
  cacheControl?: string
  pragma?: string
  expires?: string
  additionalHeaders?: Record<string, string>
}

export function setCacheHeaders(
  response: NextResponse,
  options: CacheHeaderOptions = {}
): void {
  const {
    cacheControl = 'no-store, no-cache, must-revalidate, proxy-revalidate',
    pragma = 'no-cache',
    expires = '0',
    additionalHeaders = {},
  } = options

  response.headers.set('Cache-Control', cacheControl)
  response.headers.set('Pragma', pragma)
  response.headers.set('Expires', expires)

  Object.entries(additionalHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
}
