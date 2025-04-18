import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<{ user: User; session: Session }>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          return;
        }
        
        console.log('Initial session:', data.session ? 'Found' : 'Not found');
        setSession(data.session);
        setUser(data.session?.user ?? null);
      } catch (error) {
        console.error('Error in initializeAuth:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', _event, session ? 'Session found' : 'No session');
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    try {
      console.log('AuthContext: Attempting to sign in with Supabase...');
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log('AuthContext: Supabase response:', { data, error });

      if (error) throw error;
      
      // Update the local state immediately
      setUser(data.user);
      setSession(data.session);
      
      toast.success('Signed in successfully');
      
      // Let the login page handle the redirect
      return data;
    } catch (error) {
      console.error('AuthContext: Error signing in:', error);
      toast.error('Error signing in');
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Update the local state immediately
      setUser(null);
      setSession(null);
      
      toast.success('Signed out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Error signing out');
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        signIn: handleSignIn,
        signOut: handleSignOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 