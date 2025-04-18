'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Calendar,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useAuth();

  const menuItems = [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Clients',
      href: '/admin/dashboard/clients',
      icon: Users
    },
    {
      title: 'Sessions',
      href: '/admin/dashboard/sessions',
      icon: Calendar
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: Settings
    }
  ];

  return (
    <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 border-r border-slate-800">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white">ActivateAI Admin</h1>
      </div>

      <nav className="mt-6">
        <div className="px-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.title}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <button
          onClick={() => signOut()}
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
} 