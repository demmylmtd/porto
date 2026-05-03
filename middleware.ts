import { NextResponse, type NextRequest } from 'next/server'

const COOKIE_NAME = 'portfolio-locale-hint'
const GCC_COUNTRIES = new Set(['SA', 'AE', 'KW', 'QA', 'BH', 'OM'])

export function middleware(request: NextRequest) {
  // Already hinted — don't override.
  if (request.cookies.get(COOKIE_NAME)) {
    return NextResponse.next()
  }

  // Vercel sets `x-vercel-ip-country`; locally falls through to en.
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    ''

  let hint: 'en' | 'ar' | 'id' = 'en'
  if (GCC_COUNTRIES.has(country)) hint = 'ar'
  else if (country === 'ID') hint = 'id'

  const response = NextResponse.next()
  response.cookies.set(COOKIE_NAME, hint, {
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
    path: '/',
  })
  return response
}

export const config = {
  // Skip Next internals + static assets.
  matcher: ['/((?!_next/|api/|.*\\.).*)'],
}
