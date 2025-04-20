// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

// Types (keep your existing type definitions)
type Client = Database['public']['Tables']['clients']['Row'];
type ClientInsert = Database['public']['Tables']['clients']['Insert'];
type ClientUpdate = Database['public']['Tables']['clients']['Update'];
type Note = Database['public']['Tables']['notes']['Row'];
type NoteInsert = Database['public']['Tables']['notes']['Insert'];
type Session = Database['public']['Tables']['sessions']['Row'];
type SessionInsert = Database['public']['Tables']['sessions']['Insert'];
type SessionUpdate = Database['public']['Tables']['sessions']['Update'];

// Client-side supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Check if environment variables are loaded
if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables:', {
    url: supabaseUrl ? 'Set' : 'Missing',
    key: supabaseKey ? 'Set' : 'Missing'
  });
}

// Create the Supabase client
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey
);

// Export function for server-side admin access
export function createAdminClient() {
  const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !adminKey) {
    throw new Error('Missing Supabase admin credentials');
  }
  
  return createClient<Database>(supabaseUrl, adminKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

// For server-side usage only
// This function should only be called from server components or API routes
export const getSupabaseAdmin = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!url || !serviceRoleKey) {
    throw new Error('Missing Supabase admin environment variables');
  }
  
  return createClient<Database>(
    url,
    serviceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );
};

export type SignInCredentials = {
  email: string;
  password: string;
};

// Authentication functions
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Client management functions
export async function fetchClients(): Promise<Client[]> {
  try {
    // First, get all clients
    const { data: clients, error: clientsError } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (clientsError) {
      console.error('Error fetching clients:', clientsError);
      throw clientsError;
    }
    
    // For each client, find their next upcoming session
    for (const client of clients || []) {
      const { data: sessions, error: sessionsError } = await supabase
        .from('sessions')
        .select('start_time, title')
        .eq('client_id', client.id)
        .eq('status', 'scheduled')
        .gt('start_time', new Date().toISOString())
        .order('start_time', { ascending: true })
        .limit(1);
      
      if (!sessionsError && sessions && sessions.length > 0) {
        // Update the next_session field directly
        client.next_session = sessions[0].start_time;
        
        // You might want to add the session title as well
        client.next_session_title = sessions[0].title;
      } else {
        client.next_session = null;
      }
    }
    
    return clients || [];
  } catch (error) {
    console.error('Error in fetchClients:', error);
    throw error;
  }
}

export async function fetchClientById(id: string): Promise<Client & { clientNotes?: Note[], nextSession?: any }> {
  try {
    // First, fetch the client data
    const { data: clientData, error: clientError } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single();

    if (clientError) {
      console.error('Error fetching client:', clientError);
      throw clientError;
    }

    // Then, fetch related notes from the notes table
    const { data: notesData, error: notesError } = await supabase
      .from('notes')
      .select('*')
      .eq('client_id', id);

    if (notesError) {
      console.error('Error fetching notes:', notesError);
      // Don't throw here, we can continue with client data
    }
    
    // Fetch the client's next session
    const { data: sessionData, error: sessionError } = await supabase
      .from('sessions')
      .select('*')
      .eq('client_id', id)
      .eq('status', 'scheduled')
      .gt('start_time', new Date().toISOString())
      .order('start_time', { ascending: true })
      .limit(1);
      
    if (sessionError) {
      console.error('Error fetching next session:', sessionError);
      // Don't throw here, we can continue with client data
    }

    // Combine the data
    return {
      ...clientData,
      clientNotes: notesData || [],
      nextSession: sessionData && sessionData.length > 0 ? sessionData[0] : null
    };
  } catch (error) {
    console.error('Error in fetchClientById:', error);
    throw error;
  }
}

// Renamed from createClient to addClient to avoid naming conflict
export async function addClient(clientData: ClientInsert): Promise<Client> {
  try {
    const { data, error } = await supabase
      .from('clients')
      .insert([{
        ...clientData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in addClient:', error);
    throw error;
  }
}

export async function updateClient(id: string, clientData: ClientUpdate): Promise<Client> {
  try {
    const { data, error } = await supabase
      .from('clients')
      .update({ 
        ...clientData, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateClient:', error);
    throw error;
  }
}

export async function updateClientStatus(id: string, status: Client['status']): Promise<Client> {
  try {
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
  } catch (error) {
    console.error('Error in updateClientStatus:', error);
    throw error;
  }
}

export async function deleteClient(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting client:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteClient:', error);
    throw error;
  }
}

// Note management functions
export async function addNote(noteData: NoteInsert): Promise<Note> {
  try {
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
  } catch (error) {
    console.error('Error in addNote:', error);
    throw error;
  }
}

export async function deleteNote(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting note:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteNote:', error);
    throw error;
  }
}

// Session management functions
export async function createSession(sessionData: SessionInsert): Promise<Session> {
  try {
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
  } catch (error) {
    console.error('Error in createSession:', error);
    throw error;
  }
}

export async function updateSession(id: string, sessionData: SessionUpdate): Promise<Session> {
  try {
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
    if (sessionData.start_time && sessionData.client_id) {
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
  } catch (error) {
    console.error('Error in updateSession:', error);
    throw error;
  }
}

export async function deleteSession(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('sessions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting session:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteSession:', error);
    throw error;
  }
}

export async function fetchSessions() {
  const { data, error } = await supabase
    .from('sessions')
    .select(`
      *,
      clients:client_id (
        id,
        name,
        email
      )
    `)
    .order('start_time', { ascending: true });

  if (error) {
    console.error('Error fetching sessions:', error);
    throw error;
  }

  return data;
}

// Add this function to your supabase.ts file
export async function deleteSessionAndUpdateClient(sessionId: string): Promise<boolean> {
  try {
    // First, get the session details to know which client to update
    const { data: session, error: getError } = await supabase
      .from('sessions')
      .select('client_id, start_time')
      .eq('id', sessionId)
      .single();
      
    if (getError) {
      console.error('Error getting session before deletion:', getError);
      throw getError;
    }
    
    // Delete the session
    const { error: deleteError } = await supabase
      .from('sessions')
      .delete()
      .eq('id', sessionId);
      
    if (deleteError) {
      console.error('Error deleting session:', deleteError);
      throw deleteError;
    }
    
    // Now update the client's next_session field if this was their next session
    if (session && session.client_id) {
      // Get the client to check their current next_session date
      const { data: client, error: clientError } = await supabase
        .from('clients')
        .select('next_session')
        .eq('id', session.client_id)
        .single();
        
      if (clientError) {
        console.error('Error getting client data:', clientError);
        // Don't throw here, we can continue
      }
      
      // Only update if the deleted session matches the client's next_session
      if (client && client.next_session === session.start_time) {
        // Find the next upcoming session for this client, if any
        const { data: nextSessions, error: nextSessionError } = await supabase
          .from('sessions')
          .select('start_time')
          .eq('client_id', session.client_id)
          .eq('status', 'scheduled')
          .gt('start_time', new Date().toISOString())
          .order('start_time', { ascending: true })
          .limit(1);
          
        if (nextSessionError) {
          console.error('Error finding next session:', nextSessionError);
          // Don't throw here, we can continue
        }
        
        // Update the client's next_session field
        const { error: updateError } = await supabase
          .from('clients')
          .update({
            next_session: nextSessions && nextSessions.length > 0 
              ? nextSessions[0].start_time  // Set to the next upcoming session
              : null,                       // Or null if no more sessions
            updated_at: new Date().toISOString()
          })
          .eq('id', session.client_id);
          
        if (updateError) {
          console.error('Error updating client next_session:', updateError);
          // Don't throw here, we've already deleted the session
        }
      }
    }
    
    // Success - session deleted and client updated
    return true;
  } catch (error) {
    console.error('Error in deleteSessionAndUpdateClient:', error);
    throw error;
  }
}