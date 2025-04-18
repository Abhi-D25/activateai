// src/app/admin/dashboard/clients/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Search, 
  Plus, 
  Filter,
  LayoutGrid,
  List
} from 'lucide-react';
import { fetchClients } from '@/lib/supabase';
import ClientCard from '@/components/admin/ClientCard';
import ListView from '@/components/admin/ListView';
import NewClientModal from '@/components/admin/NewClientModal';
import { Database } from '@/types/database.types';

type Client = Database['public']['Tables']['clients']['Row'];

export default function ClientsPage() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const filterClients = useCallback(() => {
    let filtered = [...clients];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (client.company && client.company.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(client => client.status === statusFilter);
    }

    // Apply source filter
    if (sourceFilter !== 'all') {
      filtered = filtered.filter(client => client.lead_source === sourceFilter);
    }

    setFilteredClients(filtered);
  }, [clients, searchTerm, statusFilter, sourceFilter]);

  useEffect(() => {
    filterClients();
  }, [clients, searchTerm, statusFilter, sourceFilter, filterClients]);

  useEffect(() => {
    async function loadClients() {
      try {
        setIsLoading(true);
        const data = await fetchClients();
        console.log("Fetched clients:", data);
        setClients(data || []);
      } catch (err) {
        console.error('Error loading clients:', err);
      } finally {
        setIsLoading(false);
      }
    }
  
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      setIsLoading(true);
      const data = await fetchClients();
      setClients(data || []);
    } catch (err) {
      console.error('Error loading clients:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetails = (clientId: string) => {
    router.push(`/admin/dashboard/clients/${clientId}`);
  };

  // Get unique lead sources for filter
  const leadSources = ['all', ...new Set(clients.filter(c => c.lead_source).map(c => c.lead_source))];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Client Management</h1>
          <p className="text-slate-300">Manage and track your clients&apos; progress</p>
        </div>
        
        <button
          onClick={() => setIsNewModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          New Client
        </button>
      </div>

      {/* Filters */}
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search clients..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="potential">Potential</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Sources</option>
                <option value="manual">Manual Entry</option>
                <option value="contact_form">Contact Form</option>
                <option value="quiz">Quiz</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Client List */}
      <AnimatePresence mode="wait">
        {filteredClients.length > 0 ? (
          <motion.div
            key={viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClients.map((client) => (
                  <ClientCard
                    key={client.id}
                    client={client}
                    onViewDetails={handleViewDetails}
                    onDelete={loadClients}
                  />
                ))}
              </div>
            ) : (
              <ListView 
                clients={filteredClients}
                onView={handleViewDetails}
                onRefresh={loadClients}
              />
            )}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <Users className="mx-auto h-12 w-12 text-slate-500" />
            <h3 className="mt-4 text-lg font-semibold text-white">No clients found</h3>
            <p className="mt-2 text-slate-400">
              {searchTerm || statusFilter !== 'all' || sourceFilter !== 'all'
                ? 'Try adjusting your filters or search term'
                : 'Get started by adding your first client'}
            </p>
            {searchTerm || statusFilter !== 'all' || sourceFilter !== 'all' ? (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('all');
                  setSourceFilter('all');
                }}
                className="mt-4 px-4 py-2 text-sm bg-slate-700 text-white rounded-lg hover:bg-slate-600"
              >
                Clear Filters
              </button>
            ) : (
              <button
                onClick={() => setIsNewModalOpen(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Client
              </button>
            )}
          </div>
        )}
      </AnimatePresence>

      {/* New Client Modal */}
      <NewClientModal 
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onClientAdded={() => {
          loadClients();
          setIsNewModalOpen(false);
        }}
      />
    </div>
  );
}