import { supabase } from '@/integrations/supabase/client'
import type { Database } from '@/integrations/supabase/types'

type Provider = Database['public']['Tables']['providers']['Row']
type ProviderInsert = Database['public']['Tables']['providers']['Insert']
type ProviderUpdate = Database['public']['Tables']['providers']['Update']

export const providerService = {
  async createProvider(providerData: ProviderInsert): Promise<Provider | null> {
    try {
      const { data, error } = await supabase
        .from('providers')
        .insert([providerData])
        .select()
        .single()

      if (error) {
        console.error('Error creating provider:', error)
        throw error
      }

      return data
    } catch (error) {
      console.error('Provider creation failed:', error)
      return null
    }
  },

  async getProviders(): Promise<Provider[]> {
    try {
      const { data, error } = await supabase
        .from('providers')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching providers:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Failed to fetch providers:', error)
      return []
    }
  },

  async getPendingProviders(): Promise<Provider[]> {
    try {
      const { data, error } = await supabase
        .from('providers')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching pending providers:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Failed to fetch pending providers:', error)
      return []
    }
  },

  async getAllProvidersForAdmin(): Promise<Provider[]> {
    try {
      const { data, error } = await supabase
        .from('providers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching all providers:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Failed to fetch all providers:', error)
      return []
    }
  },

  async getProvidersByType(type: string): Promise<Provider[]> {
    try {
      const { data, error } = await supabase
        .from('providers')
        .select('*')
        .eq('primary_interest', type)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching providers by type:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Failed to fetch providers by type:', error)
      return []
    }
  },

  async approveProvider(id: string, adminNotes?: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('providers')
        .update({ 
          status: 'approved', 
          approved_at: new Date().toISOString(),
          admin_notes: adminNotes 
        })
        .eq('id', id)

      if (error) {
        console.error('Error approving provider:', error)
        throw error
      }

      return true
    } catch (error) {
      console.error('Failed to approve provider:', error)
      return false
    }
  },

  async rejectProvider(id: string, adminNotes?: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('providers')
        .update({ 
          status: 'rejected',
          admin_notes: adminNotes 
        })
        .eq('id', id)

      if (error) {
        console.error('Error rejecting provider:', error)
        throw error
      }

      return true
    } catch (error) {
      console.error('Failed to reject provider:', error)
      return false
    }
  }
}