// src/app/admin/layout.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { useAuth } from '@/context/AuthContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();
  
  // Redirect from /admin to /admin/login
  useEffect(() => {
    if (pathname === '/admin') {
      router.replace('/admin/login');
    }
  }, [pathname, router]);
  
  // Handle auth redirects
  useEffect(() => {
    // Only run after auth check is complete and not on login page
    if (!loading && pathname !== '/admin/login') {
      // If no user is logged in, redirect to login page
      if (!user) {
        console.log('No user detected, redirecting to login page');
        router.replace('/admin/login');
      }
    }

    // Redirect from login to dashboard if already logged in
    if (!loading && user && pathname === '/admin/login') {
      console.log('User already logged in, redirecting to dashboard');
      router.replace('/admin/dashboard');
    }
  }, [user, loading, pathname, router]);
  
  // Don't show sidebar on login page
  const isLoginPage = pathname === '/admin/login';
  
  // If this is the login page, just show the children without the sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // For all other admin pages, show login message if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Please log in to access the admin panel</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto mt-4"></div>
          <p className="text-slate-400 mt-4">Redirecting to login page...</p>
        </div>
      </div>
    );
  }

  // Regular admin layout with sidebar for authenticated users
  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar onWidthChange={setSidebarWidth} />
      <main 
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        <div className="min-h-screen bg-slate-900">
          <div className="px-8 py-8 pr-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}