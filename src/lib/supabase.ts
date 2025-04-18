import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    url: supabaseUrl ? 'Set' : 'Missing',
    key: supabaseAnonKey ? 'Set' : 'Missing'
  });
}

// Create the Supabase client
export const supabase = createClient<Database>(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

export type SignInCredentials = {
  email: string;
  password: string;
};

// Function to fetch clients from Supabase
export async function fetchClients() {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching clients:', error);
      throw error;
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in fetchClients:', error);
    throw error;
  }
} 