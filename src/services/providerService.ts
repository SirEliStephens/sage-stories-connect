import { supabase } from '@/integrations/supabase/client'
import type { Database } from '@/integrations/supabase/types'

type Provider = Database['public']['Tables']['providers']['Row']
type ProviderInsert = Database['public']['Tables']['providers']['Insert']
type ProviderUpdate = Database['public']['Tables']['providers']['Update']

export const providerService = {
  async createProvider(providerData: ProviderInsert): Promise<boolean> {
    try {
      console.log('Attempting to create provider with data:', providerData);
      
      const { error } = await supabase
        .from('providers')
        .insert(providerData)
      
      if (error) {
        console.error('Supabase error creating provider:', error)
        throw error
      }

      console.log('Provider created successfully (no row returned due to RLS).');
      return true
    } catch (error) {
      console.error('Provider creation failed:', error)
      return false
    }
  },
  async getProviders(): Promise<Provider[]> {
    try {
      // Use SECURITY DEFINER function so approved providers are publicly visible
      const { data, error } = await supabase.rpc('get_public_providers')

      if (error) {
        console.error('Error fetching providers via RPC:', error)
        throw error
      }

      // Map RPC result to full Provider shape with safe fallbacks
      const mapped = (data || []).map((p: any) => ({
        id: p.id,
        created_at: p.created_at,
        updated_at: p.updated_at,
        approved_at: null,
        status: 'approved',
        name: p.name,
        email: '',
        phone: '',
        hourly_rate: p.hourly_rate,
        gender: '',
        religion: '',
        politics: '',
        image_url: p.image_url || null,
        type: p.type,
        primary_interest: p.primary_interest,
        topics: p.topics || '',
        country_loyalty: '',
        education: '',
        expertise: p.expertise || '',
        location: '',
        biography: p.biography || '',
        admin_notes: null,
      })) as Provider[]

      return mapped
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