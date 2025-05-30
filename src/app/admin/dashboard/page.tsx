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
import { fetchClients, fetchSessions } from '@/lib/supabase';
import Link from 'next/link';
import type { Database } from '@/types/database.types';
import { useAuth } from '@/context/AuthContext';

type Client = Database['public']['Tables']['clients']['Row'];
type Session = Database['public']['Tables']['sessions']['Row'] & {
  clients: {
    id: string;
    name: string;
    email: string;
  };
};

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
  const [upcomingSessions, setUpcomingSessions] = useState<Session[]>([]);

  // Load dashboard data
  useEffect(() => {
    async function loadDashboardData() {
      try {
        setIsLoading(true);
        
        // Fetch real clients from Supabase
        const clients = await fetchClients();
        
        // Calculate stats
        const active = clients.filter((c: { status: string; }) => c.status === 'active').length;
        const potential = clients.filter((c: { status: string; }) => c.status === 'potential').length;
        
        // Fetch upcoming sessions
        const sessions = await fetchSessions();
        const now = new Date();
        const upcoming = sessions
          .filter(session => new Date(session.start_time) > now && session.status === 'scheduled');
        
        setStats({
          totalClients: clients.length,
          activeClients: active,
          potentialClients: potential,
          upcomingSessions: upcoming.length // Use the actual count of upcoming sessions
        });
        
        // Get recent clients (latest 5)
        setRecentClients(clients.slice(0, 5));
        
        // Set upcoming sessions for display
        const upcomingSessionsDisplay = upcoming
          .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
          .slice(0, 5);
        
        setUpcomingSessions(upcomingSessionsDisplay);
        
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

          {isLoading ? (
            <div className="py-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-slate-400">Loading sessions...</p>
            </div>
          ) : upcomingSessions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Title</th>
                    <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Client</th>
                    <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Date & Time</th>
                    <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Duration</th>
                    <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {upcomingSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-slate-700/50">
                      <td className="py-4">
                        <div className="font-medium text-white">
                          {session.title || "Untitled Session"}
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center">
                            <span className="text-sm font-medium text-slate-300">
                              {session.clients.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-white">{session.clients.name}</div>
                            <div className="text-sm text-slate-400">{session.clients.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="text-white">
                          {new Date(session.start_time).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-slate-400">
                          {new Date(session.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td className="py-4 text-white">
                        {Math.round(
                          (new Date(session.end_time).getTime() - new Date(session.start_time).getTime()) /
                            60000
                        )}{' '}
                        min
                      </td>
                      <td className="py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            session.status === 'scheduled'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : session.status === 'completed'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : 'bg-red-500/10 text-red-500 border-red-500/20'
                          }`}
                        >
                          {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-12 text-center">
              <CalendarClock className="h-12 w-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">
                No upcoming sessions scheduled.
              </p>
              <Link 
                href="/admin/dashboard/sessions"
                className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <CalendarPlus className="h-4 w-4 mr-2" />
                <span>Schedule a Session</span>
              </Link>
            </div>
          )}
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