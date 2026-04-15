import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the route prefixes that require specific roles
const routeRoles: Record<string, string[]> = {
  '/client': ['Client'],
  '/supplier': ['Supplier'],
  '/super-admin': ['SuperAdmin'],
  '/sub-admin': ['SubAdmin'],
  '/marketer': ['Admin'],
};

// Define public or unauthenticated routes
const publicRoutes = ['/login', '/signup', '/forgot-password', '/'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userRoleCookie = request.cookies.get('auth_role');
  const userRole = userRoleCookie?.value;

  // 1. Check if trying to access a protected route
  const isProtectedRoute = Object.keys(routeRoles).some((route) => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    if (!userRole) {
      // Not logged in, redirect to login
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Role-based authorization
    let isAuthorized = false;
    for (const [route, allowedRoles] of Object.entries(routeRoles)) {
      if (pathname.startsWith(route)) {
        if (allowedRoles.includes(userRole)) {
          isAuthorized = true;
          break;
        }
      }
    }

    if (!isAuthorized) {
      // Logged in but trying to access an unauthorized route, redirect to their home
      let fallbackRoute = '/';
      if (userRole === 'Client') fallbackRoute = '/client';
      else if (userRole === 'Supplier') fallbackRoute = '/supplier';
      else if (userRole === 'SuperAdmin') fallbackRoute = '/super-admin';
      else if (userRole === 'SubAdmin') fallbackRoute = '/sub-admin';
      else if (userRole === 'Admin') fallbackRoute = '/marketer';

      const unauthorizedUrl = new URL(fallbackRoute, request.url);
      return NextResponse.redirect(unauthorizedUrl);
    }
  }

  // 2. Prevent logged in users from accessing auth-only pages
  if (publicRoutes.some(route => pathname === route || pathname.startsWith('/login') || pathname.startsWith('/signup'))) {
    if (userRole && pathname !== '/') {
        let redirectRoute = '/';
        if (userRole === 'Client') redirectRoute = '/client';
        else if (userRole === 'Supplier') redirectRoute = '/supplier';
        else if (userRole === 'SuperAdmin') redirectRoute = '/super-admin';
        else if (userRole === 'SubAdmin') redirectRoute = '/sub-admin';
        else if (userRole === 'Admin') redirectRoute = '/marketer';

        return NextResponse.redirect(new URL(redirectRoute, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (.png, .jpg)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
