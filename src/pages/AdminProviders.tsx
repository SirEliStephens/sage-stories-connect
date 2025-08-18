import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { providerService } from '@/services/providerService'
import type { Database } from '@/integrations/supabase/types'

type Provider = Database['public']['Tables']['providers']['Row']

export default function AdminProviders() {
  const [pendingProviders, setPendingProviders] = useState<Provider[]>([])
  const [allProviders, setAllProviders] = useState<Provider[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null)
  const [adminNotes, setAdminNotes] = useState('')
  const [actionType, setActionType] = useState<'approve' | 'reject'>('approve')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      const [pending, all] = await Promise.all([
        providerService.getPendingProviders(),
        providerService.getAllProvidersForAdmin()
      ])
      setPendingProviders(pending)
      setAllProviders(all)
    } catch (error) {
      console.error('Error loading providers:', error)
      toast.error('Failed to load providers')
    } finally {
      setLoading(false)
    }
  }

  const handleAction = async () => {
    if (!selectedProvider) return

    try {
      let success = false
      if (actionType === 'approve') {
        success = await providerService.approveProvider(selectedProvider.id, adminNotes)
        toast.success('Provider approved successfully')
      } else {
        success = await providerService.rejectProvider(selectedProvider.id, adminNotes)
        toast.success('Provider rejected successfully')
      }

      if (success) {
        loadData()
        setSelectedProvider(null)
        setAdminNotes('')
      }
    } catch (error) {
      console.error('Error processing provider:', error)
      toast.error('Failed to process provider')
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const ProviderCard = ({ provider, showActions = true }: { provider: Provider; showActions?: boolean }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{provider.name}</CardTitle>
            <CardDescription>{provider.email} • {provider.phone}</CardDescription>
          </div>
          {getStatusBadge(provider.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Service Type:</strong> {provider.type}
          </div>
          <div>
            <strong>Location:</strong> {provider.location}
          </div>
          <div>
            <strong>Rate:</strong> ${provider.hourly_rate}/hour
          </div>
          <div>
            <strong>Applied:</strong> {new Date(provider.created_at).toLocaleDateString()}
          </div>
        </div>
        <div className="mt-4">
          <strong>Biography:</strong>
          <p className="text-sm text-muted-foreground mt-1">{provider.biography}</p>
        </div>
        <div className="mt-4">
          <strong>Education:</strong>
          <p className="text-sm text-muted-foreground mt-1">{provider.education}</p>
        </div>
        {provider.admin_notes && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <strong>Admin Notes:</strong>
            <p className="text-sm mt-1">{provider.admin_notes}</p>
          </div>
        )}
      </CardContent>
      {showActions && provider.status === 'pending' && (
        <CardFooter className="gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="text-green-600 border-green-200 hover:bg-green-50"
                onClick={() => {
                  setSelectedProvider(provider)
                  setActionType('approve')
                  setAdminNotes('')
                }}
              >
                Approve
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Approve Provider Application</DialogTitle>
                <DialogDescription>
                  Are you sure you want to approve {provider.name}'s application? They will be able to receive bookings.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="notes">Admin Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Add any notes about this approval..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedProvider(null)}>
                  Cancel
                </Button>
                <Button onClick={handleAction} className="bg-green-600 hover:bg-green-700">
                  Approve Provider
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50"
                onClick={() => {
                  setSelectedProvider(provider)
                  setActionType('reject')
                  setAdminNotes('')
                }}
              >
                Reject
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reject Provider Application</DialogTitle>
                <DialogDescription>
                  Are you sure you want to reject {provider.name}'s application? Please provide a reason.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="reject-notes">Reason for Rejection *</Label>
                  <Textarea
                    id="reject-notes"
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Please explain why this application is being rejected..."
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedProvider(null)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleAction} 
                  disabled={!adminNotes.trim()}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Reject Application
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      )}
    </Card>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Loading providers...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Administration</h1>
          <p className="text-gray-600">Review and manage provider applications</p>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">
              Pending Applications ({pendingProviders.length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved Providers ({allProviders.filter(p => p.status === 'approved').length})
            </TabsTrigger>
            <TabsTrigger value="all">
              All Applications ({allProviders.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Pending Applications</h2>
              {pendingProviders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No pending applications</p>
              ) : (
                <div className="space-y-6">
                  {pendingProviders.map((provider) => (
                    <ProviderCard key={provider.id} provider={provider} />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Approved Providers</h2>
              {allProviders.filter(p => p.status === 'approved').length === 0 ? (
                <p className="text-gray-500 text-center py-8">No approved providers yet</p>
              ) : (
                <div className="space-y-6">
                  {allProviders.filter(p => p.status === 'approved').map((provider) => (
                    <ProviderCard key={provider.id} provider={provider} showActions={false} />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">All Applications</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allProviders.map((provider) => (
                    <TableRow key={provider.id}>
                      <TableCell className="font-medium">{provider.name}</TableCell>
                      <TableCell>{provider.email}</TableCell>
                      <TableCell>{provider.type}</TableCell>
                      <TableCell>{getStatusBadge(provider.status)}</TableCell>
                      <TableCell>{new Date(provider.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">View Details</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Provider Details</DialogTitle>
                            </DialogHeader>
                            <div className="max-h-96 overflow-y-auto">
                              <ProviderCard provider={provider} showActions={false} />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}