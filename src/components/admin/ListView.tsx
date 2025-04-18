// src/components/admin/ListView.tsx
'use client';

import { useState } from 'react';
import { 
  Check,
  X, 
  MoreHorizontal,
  Edit,
  Trash2,
  Calendar,
  CalendarPlus
} from 'lucide-react';
import { updateClientStatus, deleteClient } from '@/lib/supabase';
import ConfirmationModal from './ConfirmationModal';

export default function ListView({ clients, onView, onRefresh }) {
  const [selectedClient, setSelectedClient] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showMenu, setShowMenu] = useState(null);

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

  const handleStatusChange = async (clientId, newStatus) => {
    try {
      await updateClientStatus(clientId, newStatus);
      onRefresh();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDeleteClient = async () => {
    if (!selectedClient) return;
    
    try {
      await deleteClient(selectedClient);
      onRefresh();
    } catch (err) {
      console.error('Error deleting client:', err);
    } finally {
      setSelectedClient(null);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
      <div className="overflow-x-auto">
      <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-slate-400 border-b border-slate-700">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Lead Source</th>
              <th className="px-6 py-3">Created Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr 
                key={client.id} 
                className="border-b border-slate-700 hover:bg-slate-700/30 cursor-pointer"
                onClick={() => onView(client.id)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{client.name}</div>
                  {client.phone && (
                    <div className="text-xs text-slate-400">{client.phone}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300">{client.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300">{client.company || '-'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={client.status}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleStatusChange(client.id, e.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className={`text-xs px-2 py-1 rounded-full ${getStatusColor(client.status)} bg-transparent border focus:outline-none cursor-pointer`}
                  >
                    <option value="potential" className="bg-slate-800 text-white">Potential</option>
                    <option value="active" className="bg-slate-800 text-white">Active</option>
                    <option value="completed" className="bg-slate-800 text-white">Completed</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300 capitalize">{client.lead_source || 'Direct'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-300">
                    {new Date(client.created_at).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {client.next_session ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add session functionality
                        }}
                        className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-600"
                        title="View Session"
                      >
                        <Calendar size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add schedule functionality
                        }}
                        className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-600"
                        title="Schedule Session"
                      >
                        <CalendarPlus size={16} />
                      </button>
                    )}
                    
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowMenu(showMenu === client.id ? null : client.id);
                        }}
                        className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-600"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                      
                      {showMenu === client.id && (
                        <div 
                          className="absolute right-0 mt-1 w-36 bg-slate-700 border border-slate-600 rounded shadow-lg z-10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div
                            className="px-3 py-2 text-xs text-white hover:bg-slate-600 flex items-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowMenu(null);
                              // Add edit functionality
                            }}
                          >
                            <Edit size={14} className="mr-2" />
                            Edit Client
                          </div>
                          <div
                            className="px-3 py-2 text-xs text-red-400 hover:bg-slate-600 flex items-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowMenu(null);
                              setSelectedClient(client.id);
                              setShowDeleteConfirm(true);
                            }}
                          >
                            <Trash2 size={14} className="mr-2" />
                            Delete Client
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal 
        isOpen={showDeleteConfirm}
        title="Delete Client"
        message="Are you sure you want to delete this client? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteClient}
        onClose={() => {
          setSelectedClient(null);
          setShowDeleteConfirm(false);
        }}
      />
    </div>
  );
}