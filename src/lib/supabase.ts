import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      providers: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          email: string
          phone: string
          primary_interest: string
          topics: string
          country_loyalty: string
          education: string
          expertise: string
          location: string
          biography: string
          gender: string
          religion: string
          politics: string
          hourly_rate: number
          image_url?: string
          type: 'Elderly Support' | 'Child Care' | 'Tutoring' | 'Emotional Support' | 'Household Management' | 'Companion Services' | 'Professional Mentoring'
          status: 'pending' | 'approved' | 'rejected'
          approved_at?: string
          admin_notes?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          email: string
          phone: string
          primary_interest: string
          topics: string
          country_loyalty: string
          education: string
          expertise: string
          location: string
          biography: string
          gender: string
          religion: string
          politics: string
          hourly_rate: number
          image_url?: string
          type: 'Elderly Support' | 'Child Care' | 'Tutoring' | 'Emotional Support' | 'Household Management' | 'Companion Services' | 'Professional Mentoring'
          status?: 'pending' | 'approved' | 'rejected'
          approved_at?: string
          admin_notes?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          email?: string
          phone?: string
          primary_interest?: string
          topics?: string
          country_loyalty?: string
          education?: string
          expertise?: string
          location?: string
          biography?: string
          gender?: string
          religion?: string
          politics?: string
          hourly_rate?: number
          image_url?: string
          type?: 'Elderly Support' | 'Child Care' | 'Tutoring' | 'Emotional Support' | 'Household Management' | 'Companion Services' | 'Professional Mentoring'
          status?: 'pending' | 'approved' | 'rejected'
          approved_at?: string
          admin_notes?: string
        }
      }
    }
  }
}