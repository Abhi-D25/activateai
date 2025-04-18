// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

type Client = Database['public']['Tables']['clients']['Row'];
type ClientInsert = Database['public']['Tables']['clients']['Insert'];
type ClientUpdate = Database['public']['Tables']['clients']['Update'];

type Session = Database['public']['Tables']['sessions']['Row'];
type SessionInsert = Database['public']['Tables']['sessions']['Insert'];
type SessionUpdate = Database['public']['Tables']['sessions']['Update'];

type Note = Database['public']['Tables']['notes']['Row'];
type NoteInsert = Database['public']['Tables']['notes']['Insert'];

// Client management functions
export async function fetchClients(): Promise<Client[]> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }

  return data || [];
}

export async function fetchClientById(id: string): Promise<Client & { notes: Note[] }> {
  const { data, error } = await supabase
    .from('clients')
    .select(`
      *,
      notes (*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching client:', error);
    throw error;
  }

  return data;
}

export async function createClient(clientData: ClientInsert): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .insert([{ ...clientData, created_at: new Date().toISOString() }])
    .select()
    .single();

  if (error) {
    console.error('Error creating client:', error);
    throw error;
  }

  return data;
}

export async function updateClient(id: string, clientData: ClientUpdate): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .update({ ...clientData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating client:', error);
    throw error;
  }

  return data;
}

export async function deleteClient(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('clients')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting client:', error);
    throw error;
  }

  return true;
}

export async function updateClientStatus(id: string, status: Client['status']): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .update({ 
      status, 
      updated_at: new Date().toISOString() 
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating client status:', error);
    throw error;
  }

  return data;
}

// Note management functions
export async function addNote(noteData: NoteInsert): Promise<Note> {
  const { data, error } = await supabase
    .from('notes')
    .insert([{
      ...noteData,
      created_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) {
    console.error('Error adding note:', error);
    throw error;
  }

  return data;
}

export async function deleteNote(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('notes')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting note:', error);
    throw error;
  }

  return true;
}

// Session management functions
export async function createSession(sessionData: SessionInsert): Promise<Session> {
  const { data, error } = await supabase
    .from('sessions')
    .insert([{
      ...sessionData,
      created_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating session:', error);
    throw error;
  }

  // Update the client's next_session field
  await supabase
    .from('clients')
    .update({
      next_session: sessionData.start_time,
      updated_at: new Date().toISOString()
    })
    .eq('id', sessionData.client_id);

  return data;
}

export async function updateSession(id: string, sessionData: SessionUpdate): Promise<Session> {
  const { data, error } = await supabase
    .from('sessions')
    .update({
      ...sessionData,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating session:', error);
    throw error;
  }

  // Update the client's next_session field if this is the next session
  if (sessionData.start_time) {
    const { data: client } = await supabase
      .from('clients')
      .select('next_session')
      .eq('id', sessionData.client_id)
      .single();

    if (client && (!client.next_session || new Date(client.next_session) >= new Date(sessionData.start_time))) {
      await supabase
        .from('clients')
        .update({
          next_session: sessionData.start_time,
          updated_at: new Date().toISOString()
        })
        .eq('id', sessionData.client_id);
    }
  }

  return data;
}

export async function deleteSession(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('sessions')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting session:', error);
    throw error;
  }

  return true;
}

// Form submission handler - for the client-facing website
export async function submitContactForm(formData: {
  email: string;
  name: string;
  phone?: string;
  company?: string;
  message: string;
}): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .upsert({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      company: formData.company,
      notes: formData.message,
      lead_source: 'contact_form',
      status: 'potential',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'email',
      ignoreDuplicates: false
    })
    .select()
    .single();

  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }

  return data;
}

// Quiz submission handler - for the client-facing website
export async function submitQuizResults(
  formData: {
    email: string;
    name: string;
    phone?: string;
    company?: string;
  },
  quizResults: Record<string, any>
): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .upsert({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      company: formData.company,
      notes: JSON.stringify(quizResults),
      lead_source: 'quiz',
      status: 'potential',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'email',
      ignoreDuplicates: false
    })
    .select()
    .single();

  if (error) {
    console.error('Error submitting quiz results:', error);
    throw error;
  }

  return data;
}