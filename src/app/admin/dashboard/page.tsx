// src/app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  UserPlus,
  CalendarPlus,
  ArrowUpRight,
  CalendarClock,
  AlertCircle
} from 'lucide-react';
import { fetchClients } from '@/lib/supabase';
import Link from 'next/link';
import type { Database } from '@/types/database.types';
import { useAuth } from '@/context/AuthContext';

type Client = Database['public']['Tables']['clients']['Row'];

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  href: string;
  color?: string;
}

function StatsCard({ title, value, icon, href, color = 'blue' }: StatsCardProps) {
  return (
    <Link href={href}>
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-slate-400">{title}</h3>
            <p className="text-2xl font-semibold text-white">{value}</p>
          </div>
          <div className={`h-12 w-12 rounded-lg bg-${color}-500/10 flex items-center justify-center`}>
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
}

interface StatusBadgeProps {
  status: Client['status'];
}

export default function Dashboard() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [stats, setStats] = useState({
    totalClients: 0,
    activeClients: 0,
    potentialClients: 0,
    upcomingSessions: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recentClients, setRecentClients] = useState<Client[]>([]);

  // Load dashboard data
  useEffect(() => {
    async function loadDashboardData() {
      try {
        // TEMPORARY: Use mock data instead of fetching from Supabase
        console.log('TEMPORARY: Using mock data for dashboard');
        
        // Mock data
        const mockClients = [
          { 
            id: '1', 
            name: 'John Doe', 
            email: 'john@example.com', 
            status: 'active' as const, 
            lead_source: 'referral', 
            created_at: '2023-01-15', 
            updated_at: '2023-01-15',
            phone: null,
            company: 'Acme Inc',
            notes: 'Interested in AI solutions',
            next_session: '2023-02-01' 
          },
          { 
            id: '2', 
            name: 'Jane Smith', 
            email: 'jane@example.com', 
            status: 'potential' as const, 
            lead_source: 'website', 
            created_at: '2023-01-20', 
            updated_at: '2023-01-20',
            phone: '555-123-4567',
            company: null,
            notes: null,
            next_session: null 
          },
          { 
            id: '3', 
            name: 'Bob Johnson', 
            email: 'bob@example.com', 
            status: 'active' as const, 
            lead_source: 'direct', 
            created_at: '2023-01-25', 
            updated_at: '2023-01-25',
            phone: null,
            company: 'Tech Corp',
            notes: 'Looking for automation solutions',
            next_session: '2023-02-10' 
          },
          { 
            id: '4', 
            name: 'Alice Brown', 
            email: 'alice@example.com', 
            status: 'inactive' as const, 
            lead_source: 'referral', 
            created_at: '2023-01-30', 
            updated_at: '2023-01-30',
            phone: '555-987-6543',
            company: 'Startup Inc',
            notes: 'Not interested at this time',
            next_session: null 
          },
          { 
            id: '5', 
            name: 'Charlie Wilson', 
            email: 'charlie@example.com', 
            status: 'active' as const, 
            lead_source: 'website', 
            created_at: '2023-02-01', 
            updated_at: '2023-02-01',
            phone: null,
            company: null,
            notes: null,
            next_session: '2023-02-15' 
          },
        ];
        
        // Calculate stats
        const active = mockClients.filter(c => c.status === 'active').length;
        const potential = mockClients.filter(c => c.status === 'potential').length;
        const withSessions = mockClients.filter(c => c.next_session).length;
        
        setStats({
          totalClients: mockClients.length,
          activeClients: active,
          potentialClients: potential,
          upcomingSessions: withSessions
        });
        
        // Get recent clients
        setRecentClients(mockClients);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setError('Failed to load dashboard data');
        setIsLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  // TEMPORARY: Skip authentication check
  // if (authLoading) {
  //   return (
  //     <div className="min-h-screen bg-black flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }

  // TEMPORARY: Skip authentication check
  // if (!user) {
  //   return null;
  // }

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div className="h-8 w-48 bg-slate-800 rounded animate-pulse"></div>
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-slate-800 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-slate-800 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700 animate-pulse">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-slate-700 rounded"></div>
                  <div className="h-8 w-16 bg-slate-700 rounded"></div>
                </div>
                <div className="h-12 w-12 bg-slate-700 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="h-6 w-32 bg-slate-700 rounded mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-slate-700 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <p className="text-red-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        
        <div className="flex gap-3">
          <Link 
            href="/admin/dashboard/clients"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            <span>Add Client</span>
          </Link>
          
          <Link 
            href="/admin/dashboard/sessions"
            className="bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center hover:bg-slate-600 transition"
          >
            <CalendarPlus className="h-5 w-5 mr-2" />
            <span>Add Session</span>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Clients" 
          value={stats.totalClients} 
          icon={<Users className="h-5 w-5 text-blue-500" />}
          href="/admin/dashboard/clients" 
        />
        
        <StatsCard 
          title="Active Clients" 
          value={stats.activeClients} 
          icon={<Users className="h-5 w-5 text-green-500" />}
          href="/admin/dashboard/clients" 
          color="green"
        />
        
        <StatsCard 
          title="Potential Leads" 
          value={stats.potentialClients} 
          icon={<Users className="h-5 w-5 text-yellow-500" />}
          href="/admin/dashboard/clients" 
          color="yellow"
        />
        
        <StatsCard 
          title="Upcoming Sessions" 
          value={stats.upcomingSessions} 
          icon={<Calendar className="h-5 w-5 text-purple-500" />}
          href="/admin/dashboard/sessions" 
          color="purple"
        />
      </div>

      {/* Recent Clients */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Clients</h2>
          <Link
            href="/admin/dashboard/clients"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <span>View All</span>
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-slate-400 border-b border-slate-700">
                <th className="pb-3 pl-4">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Lead Source</th>
                <th className="pb-3">Created</th>
                <th className="pb-3 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentClients.length > 0 ? (
                recentClients.map((client, index) => (
                  <tr 
                    key={client.id} 
                    className={`text-sm ${index !== recentClients.length - 1 ? 'border-b border-slate-700' : ''}`}
                  >
                    <td className="py-4 pl-4 font-medium text-white">{client.name}</td>
                    <td className="py-4 text-slate-300">{client.email}</td>
                    <td className="py-4">
                      <StatusBadge status={client.status} />
                    </td>
                    <td className="py-4 text-slate-300 capitalize">{client.lead_source || 'direct'}</td>
                    <td className="py-4 text-slate-300">
                      {new Date(client.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 pr-4">
                      <Link
                        href={`/admin/dashboard/clients/${client.id}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-slate-400">
                    No clients found. Add your first client to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Upcoming Sessions</h2>
          <Link
            href="/admin/dashboard/sessions"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <span>View All</span>
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="py-12 text-center">
          <CalendarClock className="h-12 w-12 text-slate-500 mx-auto mb-4" />
          <p className="text-slate-400">
            Your scheduled sessions will appear here.
          </p>
          <Link 
            href="/admin/dashboard/sessions"
            className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <CalendarPlus className="h-4 w-4 mr-2" />
            <span>Schedule a Session</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    active: 'bg-green-500/20 text-green-400',
    potential: 'bg-yellow-500/20 text-yellow-400',
    inactive: 'bg-red-500/20 text-red-400',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}