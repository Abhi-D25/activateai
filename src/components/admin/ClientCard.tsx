// src/components/admin/ClientCard.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Building,
  Calendar,
  Edit,
  Trash2,
  MoreVertical,
  Clock
} from 'lucide-react';
import { updateClientStatus, deleteClient } from '@/lib/supabase';
import ConfirmationModal from './ConfirmationModal';

export default function ClientCard({ client, onViewDetails, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'potential':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const handleStatusChange = async (e) => {
    e.stopPropagation();
    const newStatus = e.target.value;
    try {
      setIsUpdating(true);
      await updateClientStatus(client.id, newStatus);
      onDelete(); // Refresh client list
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteClient = async () => {
    try {
      await deleteClient(client.id);
      onDelete(); // Refresh client list
    } catch (err) {
      console.error('Error deleting client:', err);
    } finally {
      setShowDeleteConfirm(false);
    }
  };

  return (
    <motion.div
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-colors"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      onClick={() => onViewDetails(client.id)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{client.name}</h3>
            <p className="text-sm text-slate-400">{client.company || 'Individual Client'}</p>
          </div>
          
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-700"
            >
              <MoreVertical size={18} />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-700 border border-slate-600 rounded-md shadow-lg z-10">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    // Add edit functionality
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-slate-600 cursor-pointer flex items-center"
                >
                  <Edit size={16} className="mr-2" />
                  Edit Client
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    setShowDeleteConfirm(true);
                  }}
                  className="px-4 py-2 text-sm text-red-400 hover:bg-slate-600 cursor-pointer flex items-center"
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete Client
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-slate-300">
            <Mail className="h-4 w-4 mr-2 text-slate-400" />
            <span className="text-sm truncate">{client.email}</span>
          </div>
          
          {client.phone && (
            <div className="flex items-center text-slate-300">
              <Phone className="h-4 w-4 mr-2 text-slate-400" />
              <span className="text-sm">{client.phone}</span>
            </div>
          )}
          
          {client.company && (
            <div className="flex items-center text-slate-300">
              <Building className="h-4 w-4 mr-2 text-slate-400" />
              <span className="text-sm">{client.company}</span>
            </div>
          )}
          
          {client.next_session && (
            <div className="flex items-center text-slate-300">
              <Calendar className="h-4 w-4 mr-2 text-slate-400" />
              <span className="text-sm">
                {new Date(client.next_session).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-700 pt-4">
          <div className="flex items-center text-slate-400 text-xs">
            <Clock size={14} className="mr-1" />
            <span>
              {new Date(client.created_at).toLocaleDateString()}
            </span>
          </div>
          
          <select
            value={client.status}
            onChange={handleStatusChange}
            onClick={(e) => e.stopPropagation()}
            disabled={isUpdating}
            className={`text-xs px-2 py-1 rounded-full ${getStatusColor(client.status)} bg-transparent border focus:outline-none cursor-pointer`}
          >
            <option value="potential" className="bg-slate-800 text-white">Potential</option>
            <option value="active" className="bg-slate-800 text-white">Active</option>
            <option value="completed" className="bg-slate-800 text-white">Completed</option>
          </select>
        </div>
      </div>

      {client.quiz_results && (
        <div className="bg-blue-900/30 border-t border-blue-500/30 px-6 py-2 flex items-center justify-between">
          <span className="text-xs text-blue-400">Quiz Completed</span>
          <span className="text-xs text-slate-400">
            {client.quiz_date ? new Date(client.quiz_date).toLocaleDateString() : ''}
          </span>
        </div>
      )}

      {client.lead_source && (
        <div className="bg-slate-700 px-6 py-2 flex items-center justify-between">
          <span className="text-xs text-slate-400">Source</span>
          <span className="text-xs text-white capitalize">{client.lead_source}</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmationModal 
        isOpen={showDeleteConfirm}
        title="Delete Client"
        message="Are you sure you want to delete this client? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteClient}
        onClose={() => setShowDeleteConfirm(false)}
      />
    </motion.div>
  );
}