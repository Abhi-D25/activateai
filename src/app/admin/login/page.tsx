// src/app/admin/login/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, user } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Pass credentials as an object, which matches your AuthContext type
      await signIn(email, password);
      
      console.log("Login successful, waiting for session to be saved...");
      setTimeout(() => {
        console.log("Redirecting to dashboard now...");
        window.location.href = '/admin/dashboard';
      }, 1000);
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const testSupabaseConnection = async () => {
    try {
      console.log("Testing Supabase connection...");
      const { data, error } = await supabase.from('clients').select('count()', { count: 'exact' });
      
      if (error) {
        console.error("Supabase connection error:", error);
      } else {
        console.log("Supabase connection successful, client count:", data);
      }
    } catch (err) {
      console.error("Supabase test failed:", err);
    }
  };
  
  // Call this in useEffect or add a test button
  useEffect(() => {
    testSupabaseConnection();
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 z-50 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full"
      >
        <div className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-6 border border-slate-700">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">ActivateAI Admin</h1>
            <p className="text-slate-300 mt-2">Sign in to access the admin dashboard</p>
          </div>

          {error && (
            <div className="bg-red-500/20 text-red-400 p-4 rounded-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-600 text-white rounded-md py-3 px-4 hover:bg-blue-700 transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}