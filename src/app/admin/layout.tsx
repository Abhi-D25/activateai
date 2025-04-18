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
  const { user } = useAuth();
  
  // Redirect from /admin to /admin/login
  useEffect(() => {
    if (pathname === '/admin') {
      router.replace('/admin/login');
    }
  }, [pathname, router]);
  
  // Don't show sidebar on login page
  const isLoginPage = pathname === '/admin/login';
  
  // If this is the login page, just show the children without the sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // For all other admin pages, show login message if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Please log in to access the admin panel</h1>
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