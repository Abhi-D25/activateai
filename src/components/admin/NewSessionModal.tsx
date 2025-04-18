'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Search, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database.types';
import { toast } from 'react-hot-toast';

type Client = Database['public']['Tables']['clients']['Row'];

interface NewSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSessionCreated: () => void;
}

export default function NewSessionModal({ isOpen, onClose, onSessionCreated }: NewSessionModalProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [clientSearchQuery, setClientSearchQuery] = useState('');
  const [showClientDropdown, setShowClientDropdown] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchClients();
    }
  }, [isOpen]);

  useEffect(() => {
    if (clientSearchQuery) {
      const filtered = clients.filter(client => 
        client.name.toLowerCase().includes(clientSearchQuery.toLowerCase()) ||
        client.email.toLowerCase().includes(clientSearchQuery.toLowerCase())
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients);
    }
  }, [clientSearchQuery, clients]);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('name');

      if (error) throw error;
      setClients(data || []);
      setFilteredClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast.error('Failed to load clients');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient || !startDate || !startTime || !title) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      const startDateTime = new Date(`${startDate}T${startTime}`);
      const endDateTime = new Date(startDateTime.getTime() + parseInt(duration) * 60000);

      // Insert the session directly
      const { data, error } = await supabase
        .from('sessions')
        .insert({
          client_id: selectedClient,
          start_time: startDateTime.toISOString(),
          end_time: endDateTime.toISOString(),
          status: 'scheduled',
          title: title
        })
        .select()
        .single();

      if (error) throw error;

      // Update the client's next_session field
      await supabase
        .from('clients')
        .update({
          next_session: startDateTime.toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedClient);

      toast.success('Session created successfully');
      onSessionCreated();
      onClose();
    } catch (error) {
      console.error('Error creating session:', error);
      toast.error('Failed to create session');
    } finally {
      setIsLoading(false);
    }
  };

  const selectClient = (client: Client) => {
    setSelectedClient(client.id);
    setClientSearchQuery(client.name);
    setShowClientDropdown(false);
    
    // Set default title based on client name
    setTitle(`Session with ${client.name}`);
  };

  // Set default date to today
  useEffect(() => {
    if (isOpen) {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setStartDate(formattedDate);
      
      // Set default time to next hour
      const nextHour = new Date(today);
      nextHour.setHours(today.getHours() + 1);
      nextHour.setMinutes(0);
      const formattedTime = nextHour.toTimeString().slice(0, 5);
      setStartTime(formattedTime);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative transform overflow-hidden rounded-lg bg-slate-800 border border-slate-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  {/* Header */}
                  <div className="bg-slate-700 px-4 py-3 sm:px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white">New Session</h3>
                      <button
                        onClick={onClose}
                        className="rounded-md bg-slate-700 text-slate-400 hover:text-white"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Client Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Client
                      </label>
                      <div className="relative">
                        <div className="relative">
                          <input
                            type="text"
                            value={clientSearchQuery}
                            onChange={(e) => {
                              setClientSearchQuery(e.target.value);
                              setShowClientDropdown(true);
                            }}
                            onFocus={() => setShowClientDropdown(true)}
                            placeholder="Search for a client..."
                            className="w-full pl-10 pr-10 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <button 
                            type="button"
                            onClick={() => setShowClientDropdown(!showClientDropdown)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            <ChevronDown className="h-5 w-5 text-slate-400" />
                          </button>
                        </div>
                        
                        {showClientDropdown && (
                          <div className="absolute z-10 w-full mt-1 max-h-60 overflow-y-auto bg-slate-700 border border-slate-600 rounded-lg shadow-lg">
                            {filteredClients.length > 0 ? (
                              filteredClients.map((client) => (
                                <div
                                  key={client.id}
                                  onClick={() => selectClient(client)}
                                  className="px-4 py-2 hover:bg-slate-600 cursor-pointer flex items-center"
                                >
                                  <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center mr-3">
                                    <User className="h-4 w-4 text-slate-300" />
                                  </div>
                                  <div>
                                    <div className="text-white">{client.name}</div>
                                    <div className="text-xs text-slate-400">{client.email}</div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="px-4 py-2 text-slate-400">No clients found</div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Session Title */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Session Title
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter session title"
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Duration (minutes)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[15, 30, 45, 60, 90, 120].map((mins) => (
                          <button
                            key={mins}
                            type="button"
                            onClick={() => setDuration(mins.toString())}
                            className={`py-2 rounded-lg border ${
                              duration === mins.toString()
                                ? 'bg-blue-500 border-blue-400 text-white'
                                : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                            }`}
                          >
                            {mins === 60 ? '1 hour' : 
                             mins === 90 ? '1.5 hours' : 
                             mins === 120 ? '2 hours' : 
                             `${mins} min`}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Creating...' : 'Create Session'}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
} 