import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en-US', 'fr'];
const defaultLocale = 'en-US';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  // 1. Check if the URL already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 2. If the user explicitly visits /en-US, REDIRECT to the clean URL (/)
  if (pathname.startsWith(`/${defaultLocale}`)) {
    const newPathname = pathname.replace(`/${defaultLocale}`, '') || '/';
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // 3. Handle paths WITHOUT a locale in the URL
  if (!pathnameHasLocale) {
    // Determine which locale to use: Cookie first, then Default
    const localeToUse = (cookieLocale && locales.includes(cookieLocale)) 
      ? cookieLocale 
      : defaultLocale;

    // REWRITE: Serve the content from /[locale] but keep the browser URL clean
    // If it's the defaultLocale, it serves /en-US/path but the user sees /path
    return NextResponse.rewrite(
      new URL(`/${localeToUse}${pathname}`, request.url)
    );
  }

  // 4. If the URL HAS a locale (like /fr), just proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};