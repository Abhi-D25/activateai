import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { CookieOptions } from '@supabase/ssr';

export async function middleware(req: NextRequest) {
  // TEMPORARY: Allow access to all admin routes without authentication
  if (req.nextUrl.pathname.startsWith('/admin')) {
    console.log('TEMPORARY: Allowing access to admin routes without authentication');
    return NextResponse.next();
  }

  const res = NextResponse.next();
  
  // Create a Supabase client with the request and response
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          res.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          res.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Get the session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('Middleware: Session check', { 
    hasSession: !!session, 
    path: req.nextUrl.pathname,
    cookies: req.cookies.getAll().map(c => c.name)
  });

  // If user is not signed in and the current path is not /admin/login,
  // redirect the user to /admin/login
  if (!session && req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname !== '/admin/login') {
    console.log('Middleware: Redirecting to login (no session)');
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  // If user is signed in and the current path is /admin/login,
  // redirect the user to /admin/dashboard
  if (session && req.nextUrl.pathname === '/admin/login') {
    console.log('Middleware: Redirecting to dashboard (has session)');
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path*'],
};