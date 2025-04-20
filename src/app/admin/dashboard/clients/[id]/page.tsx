'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Phone, Building, Calendar, Clock, Edit2, Trash2, FileText, ClipboardCheck, MessageSquare } from 'lucide-react';
import { fetchClientById, updateClientStatus, deleteClient } from '@/lib/supabase';
import { toast } from 'react-hot-toast';
import { Database } from '@/types/database.types';
import EditClientModal from '@/components/admin/EditClientModal';
import ConfirmationModal from '@/components/admin/ConfirmationModal';

type QuizQuestion = {
  question: string;
  answer: string;
};

type QuizResults = {
  questions: QuizQuestion[];
  completed_at: string;
};

type Note = {
  id: string;
  created_at: string;
  client_id: string;
  content: string;
  author: string;
};

type Client = Database['public']['Tables']['clients']['Row'];

// Updated type to handle both string notes and array of notes
type ClientWithRelations = Omit<Client, 'notes'> & {
  notes?: Note[] | null;
  contactFormNote?: string | null;
  quiz_results?: QuizResults | null;
  nextSession?: {
    id: string;
    title: string;
    start_time: string;
    end_time: string;
    status: string;
  } | null;
};

// Helper function to convert ClientWithRelations to Client
const toClient = (client: ClientWithRelations): Client => {
  const { notes, quiz_results, contactFormNote, ...clientData } = client;
  return {
    ...clientData,
    notes: contactFormNote || null // Use contact form note for the notes field in Client
  };
};

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = useState<ClientWithRelations | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const loadClient = async () => {
      try {
        setIsLoading(true);
        const clientData = await fetchClientById(params.id as string);
        
        // Process the client data to include both types of notes
        const processedClient: ClientWithRelations = {
          ...clientData,
          // String notes from the clients table (from Contact Form)
          contactFormNote: typeof clientData.notes === 'string' ? clientData.notes : null,
          // Array notes from the dedicated notes table
          notes: clientData.clientNotes || [],
          // Next session data
          nextSession: clientData.nextSession || null
        };
        
        setClient(processedClient);
      } catch (error) {
        console.error('Error loading client:', error);
        toast.error('Failed to load client details');
      } finally {
        setIsLoading(false);
      }
    };
  
    loadClient();
  }, [params.id]);

  const handleStatusChange = async (newStatus: ClientWithRelations['status']) => {
    try {
      setIsUpdating(true);
      await updateClientStatus(params.id as string, newStatus);
      setClient(prev => prev ? { ...prev, status: newStatus } : null);
      toast.success('Client status updated');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteClient(params.id as string);
      toast.success('Client deleted successfully');
      router.push('/admin/dashboard/clients');
    } catch (error) {
      console.error('Error deleting client:', error);
      toast.error('Failed to delete client');
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const handleClientUpdated = (updatedClient: Client) => {
    // Preserve the notes array and quiz results when updating the client
    setClient(prev => {
      if (!prev) return null;
      return {
        ...updatedClient,
        notes: prev.notes,
        contactFormNote: updatedClient.notes || prev.contactFormNote,
        quiz_results: prev.quiz_results
      };
    });
    setIsEditModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-white">Client not found</h2>
        <p className="text-slate-400 mt-2">The client you&apos;re looking for doesn&apos;t exist or has been deleted.</p>
      </div>
    );
  }

  const getStatusColor = (status: ClientWithRelations['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'potential':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'inactive':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold">{client.name}</h1>
              <p className="text-slate-400">{client.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Edit2 className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-8">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(client.status)}`}>
            {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
          </span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Client Information */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <Mail className="h-5 w-5 mr-3 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p>{client.email}</p>
                  </div>
                </div>
                
                {client.phone && (
                  <div className="flex items-center text-slate-300">
                    <Phone className="h-5 w-5 mr-3 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p>{client.phone}</p>
                    </div>
                  </div>
                )}
                
                {client.company && (
                  <div className="flex items-center text-slate-300">
                    <Building className="h-5 w-5 mr-3 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-400">Company</p>
                      <p>{client.company}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quiz Results Card */}
            {client.quiz_results && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">Quiz Results</h2>
                    <p className="text-sm text-slate-400">
                      Completed on {new Date(client.quiz_results.completed_at).toLocaleDateString()}
                    </p>
                  </div>
                  <ClipboardCheck className="h-5 w-5 text-blue-400" />
                </div>
                <div className="space-y-4">
                  {client.quiz_results.questions.map((result, index) => (
                    <div key={index} className="border-b border-slate-700 pb-4 last:border-0">
                      <p className="text-sm text-slate-400 mb-1">{result.question}</p>
                      <p className="text-white">{result.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Form Note */}
            {client.contactFormNote && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">Contact Form Message</h2>
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-300 whitespace-pre-wrap">{client.contactFormNote}</p>
                  <p className="text-xs text-slate-500 mt-2">
                    Submitted on {new Date(client.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {/* Notes from dedicated notes table */}
            {client.notes && client.notes.length > 0 && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-4">Notes History</h2>
                <div className="space-y-4">
                  {client.notes.map((note) => (
                    <div key={note.id} className="border-b border-slate-700 pb-4 last:border-0">
                      <p className="text-slate-300">{note.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-slate-400">By {note.author}</span>
                        <span className="text-sm text-slate-400">
                          {new Date(note.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lead Source Card */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4">Lead Source</h2>
              <p className="text-slate-300 capitalize">{client.lead_source}</p>
            </div>

            {/* Next Session Card */}
            {client.nextSession && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-4">Next Session</h2>
                <div className="space-y-3">
                  {client.nextSession.title && (
                    <div className="text-slate-300 mb-2">
                      <span className="font-medium">{client.nextSession.title}</span>
                    </div>
                  )}
                  <div className="flex items-center text-slate-300">
                    <Calendar className="h-5 w-5 mr-3 text-slate-400" />
                    <p>{new Date(client.nextSession.start_time).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Clock className="h-5 w-5 mr-3 text-slate-400" />
                    <p>{new Date(client.nextSession.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="text-sm">
                      Duration: {Math.round(
                        (new Date(client.nextSession.end_time).getTime() - new Date(client.nextSession.start_time).getTime()) / 60000
                      )} min
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <EditClientModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        client={client ? toClient(client) : null}
        onClientUpdated={handleClientUpdated}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Client"
        message="Are you sure you want to delete this client? This action cannot be undone."
      />
    </div>
  );
}