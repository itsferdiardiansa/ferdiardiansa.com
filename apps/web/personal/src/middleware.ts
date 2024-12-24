import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { handleLoading } from './lib/routeHandlers'

export function middleware(request: NextRequest): NextResponse {
  const loadingResponse = handleLoading(request)
  if (loadingResponse) return loadingResponse

  return NextResponse.next()
}
