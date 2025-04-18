// src/components/admin/NotesSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Edit, Trash2 } from 'lucide-react';
import { deleteNote } from '@/lib/supabase';
import ConfirmationModal from './ConfirmationModal';
import { Database } from '@/types/database.types';

type Note = Database['public']['Tables']['notes']['Row'];

interface NotesSectionProps {
  notes: Note[];
  onDelete: (noteId: string) => void;
}

export default function NotesSection({ notes, onDelete }: NotesSectionProps) {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteNote = async () => {
    if (!selectedNote) return;
    
    try {
      await deleteNote(selectedNote);
      onDelete(selectedNote);
    } catch (err) {
      console.error('Error deleting note:', err);
    } finally {
      setSelectedNote(null);
      setShowDeleteConfirm(false);
    }
  };

  if (!notes || notes.length === 0) {
    return (
      <div className="text-center py-8">
        <MessageSquare className="h-12 w-12 text-slate-500 mx-auto mb-4" />
        <p className="text-slate-400">No notes yet. Add your first note to start tracking client interactions.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-xs text-slate-400">
                  {new Date(note.created_at).toLocaleString()}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-slate-400 hover:text-white"
                  title="Edit Note"
                >
                  <Edit size={16} />
                </button>
                <button
                  className="text-slate-400 hover:text-red-400"
                  title="Delete Note"
                  onClick={() => {
                    setSelectedNote(note.id);
                    setShowDeleteConfirm(true);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-300 whitespace-pre-wrap">{note.content}</p>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal 
        isOpen={showDeleteConfirm}
        title="Delete Note"
        message="Are you sure you want to delete this note? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteNote}
        onClose={() => {
          setSelectedNote(null);
          setShowDeleteConfirm(false);
        }}
      />
    </div>
  );
}