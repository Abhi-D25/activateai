export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          email: string
          phone: string | null
          company: string | null
          status: 'potential' | 'active' | 'inactive'
          lead_source: string
          notes: string | null
          next_session: string | null
        }
        Insert: Omit<Database['public']['Tables']['clients']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['clients']['Insert']>
      }
      sessions: {
        Row: {
          id: string
          client_id: string
          title: string | null
          start_time: string
          end_time: string
          status: 'scheduled' | 'completed' | 'cancelled'
          notes: string | null
          created_at: string
          updated_at: string
          google_calendar_event_id: string | null
        }
        Insert: {
          id?: string
          client_id: string
          title?: string | null
          start_time: string
          end_time: string
          status?: 'scheduled' | 'completed' | 'cancelled'
          notes?: string | null
          created_at?: string
          updated_at?: string
          google_calendar_event_id?: string | null
        }
        Update: {
          id?: string
          client_id?: string
          title?: string | null
          start_time?: string
          end_time?: string
          status?: 'scheduled' | 'completed' | 'cancelled'
          notes?: string | null
          created_at?: string
          updated_at?: string
          google_calendar_event_id?: string | null
        }
      }
      notes: {
        Row: {
          id: string
          created_at: string
          client_id: string
          content: string
          author: string
        }
        Insert: Omit<Database['public']['Tables']['notes']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['notes']['Insert']>
      }
    }
  }
} 