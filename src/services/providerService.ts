import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'

type Provider = Database['public']['Tables']['providers']['Row']
type ProviderInsert = Database['public']['Tables']['providers']['Insert']

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

  async getProvidersByType(type: string): Promise<Provider[]> {
    try {
      const { data, error } = await supabase
        .from('providers')
        .select('*')
        .eq('primary_interest', type)
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
  }
}