import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const tokenExpiration = request.cookies.get('token_expiration')?.value

  const isTokenValid = token && tokenExpiration && parseInt(tokenExpiration, 10) > Date.now()

  const { pathname } = request.nextUrl

  const publicRoutes = ['/login', '/register']
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  if (pathname === '/') {
    if (isTokenValid) {
      const dashboardUrl = new URL('/dashboard', request.url)
      return NextResponse.redirect(dashboardUrl)
    } else {
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  if (!isTokenValid) {
    if (!isPublicRoute && pathname !== '/login') {
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  } else {
    if (isPublicRoute) {
      const dashboardUrl = new URL('/dashboard', request.url)
      return NextResponse.redirect(dashboardUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)'],
}
