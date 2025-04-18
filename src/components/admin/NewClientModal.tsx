// src/components/admin/NewClientModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createClient } from '@/lib/supabase';
import { toast } from 'react-hot-toast';

export default function NewClientModal({ isOpen, onClose, onClientAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'potential',
    lead_source: 'manual',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      const newClient = await createClient({
        ...formData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
      
      toast.success('Client added successfully');
      onClientAdded(newClient);
    } catch (error) {
      console.error('Error adding client:', error);
      toast.error('Failed to add client');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                      <h3 className="text-lg font-medium text-white">Add New Client</h3>
                      <button
                        onClick={onClose}
                        className="rounded-md bg-slate-700 text-slate-400 hover:text-white"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="bg-slate-800 px-4 pt-5 pb-4 sm:p-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="status" className="block text-sm font-medium text-white mb-2">
                            Status
                          </label>
                          <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="potential">Potential</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="lead_source" className="block text-sm font-medium text-white mb-2">
                            Lead Source
                          </label>
                          <select
                            id="lead_source"
                            name="lead_source"
                            value={formData.lead_source}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="manual">Manual Entry</option>
                            <option value="contact_form">Contact Form</option>
                            <option value="quiz">Quiz</option>
                            <option value="referral">Referral</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="notes" className="block text-sm font-medium text-white mb-2">
                            Notes
                          </label>
                          <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Adding...' : 'Add Client'}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                      >
                        Cancel
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