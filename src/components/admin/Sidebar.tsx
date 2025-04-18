// src/components/admin/Sidebar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UsersIcon, 
  CalendarIcon, 
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon as LogOut
} from '@heroicons/react/24/outline';
import { useAuth } from '@/context/AuthContext';

interface SidebarProps {
  onWidthChange?: (width: number) => void;
}

export default function Sidebar({ onWidthChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { signOut } = useAuth();

  useEffect(() => {
    // Notify parent of width changes
    if (onWidthChange) {
      onWidthChange(collapsed ? 80 : 256); // 20 * 4 = 80px (w-20) or 64 * 4 = 256px (w-64)
    }
  }, [collapsed, onWidthChange]);

  const menuItems = [
    { title: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { title: 'Clients', href: '/admin/dashboard/clients', icon: UsersIcon },
    { title: 'Sessions', href: '/admin/dashboard/sessions', icon: CalendarIcon },
    { title: 'Analytics', href: '/admin/dashboard/analytics', icon: ChartBarIcon },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-screen bg-slate-900 text-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-500">
            {collapsed ? 'AA' : 'Activate AI'}
          </h1>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-slate-800 z-10"
          >
            {collapsed ? (
              <ChevronRightIcon className="h-5 w-5" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 ${
                isActive ? 'bg-slate-800' : 'hover:bg-slate-800'
              }`}
            >
              <item.icon className="h-6 w-6" />
              {!collapsed && <span className="ml-3">{item.title}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <button
          onClick={() => signOut()}
          className={`flex items-center w-full px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className={`h-5 w-5 ${collapsed ? '' : 'mr-3'}`} />
          {!collapsed && 'Sign Out'}
        </button>
      </div>
    </aside>
  );
}