import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'ko'];
const defaultLocale = locales[0];
 
// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // Use negotiator and intl-localematcher to get best locale
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  
    // @ts-ignore locales are readonly
    return matchLocale(languages, locales, defaultLocale)
}
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      // Your other files in `public`
    ].includes(pathname)
  ) {
    return;
  }
    
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    // Optional: only run on root (/) URL
    '/'
  ],
}