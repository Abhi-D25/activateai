import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { CookieOptions } from '@supabase/ssr';

  export async function middleware(req: NextRequest) {
    console.log('Middleware running for path:', req.nextUrl.pathname);

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
            const cookie = req.cookies.get(name);
            console.log(`Middleware getting cookie ${name}:`, cookie?.value ? 'exists' : 'missing');
            return cookie?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            console.log(`Middleware setting cookie ${name}`);
            res.cookies.set({
              name,
              value,
              ...options,
            });
          },
          remove(name: string, options: CookieOptions) {
            console.log(`Middleware removing cookie ${name}`);
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
      userId: session?.user?.id,
      path: req.nextUrl.pathname,
      cookies: req.cookies.getAll().map(c => c.name)
    });
  
    // Handle paths
    if (!session && req.nextUrl.pathname.startsWith('/admin') && 
        req.nextUrl.pathname !== '/admin/login') {
      console.log('Middleware: Redirecting to login (no session)');
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  
    if (session && req.nextUrl.pathname === '/admin/login') {
      console.log('Middleware: Redirecting to dashboard (has session)');
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }
  
    return res;
  }

export const config = {
  matcher: ['/admin/:path*'],
};