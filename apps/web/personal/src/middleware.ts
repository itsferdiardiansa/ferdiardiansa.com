import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { handleLoading } from '@/lib/routeHandlers'

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl

  // Handle loading requests
  const loadingResponse = handleLoading(request)
  if (loadingResponse) return loadingResponse

  // Skip requests for assets and internal Next.js routes
  if (pathname.startsWith('/assets') || pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // Bypass file-based routes
  const fileBasedRouteRegex = /^\/[a-zA-Z0-9]+$/ // Matches single-level routes like `/projects`, `/about`
  if (fileBasedRouteRegex.test(pathname)) {
    return NextResponse.next()
  }

  // Redirect `/[author]/[slug]` to `/@[author]/[slug]`
  const matchAuthorSlug = pathname.match(/^\/([a-zA-Z0-9]+)\/([^\/]+)$/)
  if (matchAuthorSlug) {
    const [, author, slug] = matchAuthorSlug
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = `/@${author}/${slug}`
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Redirect `/[author]` to `/@[author]`
  const matchAuthorOnly = pathname.match(/^\/([a-zA-Z0-9]+)$/)
  if (matchAuthorOnly) {
    const [, author] = matchAuthorOnly
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = `/@${author}`
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Validate `/@[author]` or `/@[author]/[slug]` formats
  const isValidAuthorSlug = /^\/@([a-zA-Z0-9]+)\/([^\/]+)$/.test(pathname)
  const isValidAuthorOnly = /^\/@([a-zA-Z0-9]+)$/.test(pathname)

  if (isValidAuthorSlug || isValidAuthorOnly) {
    return NextResponse.next()
  }

  // Invalid patterns
  const regexInvalidPatterns = [
    /^\/.*@.*@/, // Multiple `@`
    /^\/[^a-zA-Z0-9@]/, // Starts with invalid character
    /^\/@[^a-zA-Z0-9]/, // `@` not followed by alphanumeric
    /^\/@.*[^\/]+$/, // `@` without valid slug
    /^\/-[^\/]+$/, // Starts with `-`
    /^\/@\W/, // Non-alphanumeric character after `@`
  ]

  if (regexInvalidPatterns.some(regex => regex.test(pathname))) {
    const notFoundUrl = request.nextUrl.clone()
    notFoundUrl.pathname = '/404'
    return NextResponse.rewrite(notFoundUrl)
  }

  // Allow other file-based routes
  return NextResponse.next()
}
