import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Send, ArrowLeft, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MessagingDashboard = () => {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [messagesUsed, setMessagesUsed] = useState(0);

  // Mock provider data
  const providers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Certified Caregiver',
      location: 'San Francisco, CA',
      image: '/lovable-uploads/378b932b-754d-4c6b-a41f-e402554df23b.png',
      type: 'caregiver',
      responseTime: '1 hour',
      rating: 4.9,
      hasMessaged: false
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Child Development Specialist',
      location: 'Oakland, CA',
      image: '/lovable-uploads/3a4a88ef-7708-4bd2-9911-1587d82c2b8e.png',
      type: 'childcare',
      responseTime: '30 min',
      rating: 4.8,
      hasMessaged: false
    },
    {
      id: '3',
      name: 'Eleanor Rodriguez',
      role: 'Professional Storyteller',
      location: 'Berkeley, CA',
      image: '/lovable-uploads/662900b2-6652-47c0-aa69-1a3fd334db3a.png',
      type: 'storyteller',
      responseTime: '2 hours',
      rating: 5.0,
      hasMessaged: false
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      role: 'Psychology Student',
      location: 'Palo Alto, CA',
      image: '/lovable-uploads/845b2104-2c9e-48cb-8232-d5e2b81f5259.png',
      type: 'psychologist',
      responseTime: '45 min',
      rating: 4.7,
      hasMessaged: false
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'caregiver': return 'bg-sage-100 text-sage-800';
      case 'childcare': return 'bg-blue-100 text-blue-800';
      case 'storyteller': return 'bg-ocean-100 text-ocean-800';
      case 'psychologist': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeText = (type: string) => {
    switch (type) {
      case 'caregiver': return 'Elderly Support';
      case 'childcare': return 'Child Support';
      case 'storyteller': return 'Storytelling';
      case 'psychologist': return 'Mental Support';
      default: return 'Provider';
    }
  };

  const handleSendMessage = () => {
    if (selectedProvider && message.trim() && messagesUsed < 4) {
      console.log(`Sending message to provider ${selectedProvider}: ${message}`);
      setMessage('');
      setMessagesUsed(prev => prev + 1);
      // In real app, this would send the message via API
    }
  };

  const selectedProviderData = providers.find(p => p.id === selectedProvider);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container-custom py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-sage-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Provider Selection */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Available Providers
                </CardTitle>
                <CardDescription>
                  Choose a provider to start messaging ({messagesUsed}/4 used)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {providers.map((provider) => (
                  <div
                    key={provider.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedProvider === provider.id 
                        ? 'border-sage-500 bg-sage-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProvider(provider.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={provider.image} />
                        <AvatarFallback>{provider.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{provider.name}</h4>
                        <p className="text-xs text-gray-600 truncate">{provider.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Badge className={`text-xs ${getBadgeColor(provider.type)}`}>
                            {getBadgeText(provider.type)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Usage Info */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Access Info</span>
                </div>
                <p className="text-sm text-blue-600">
                  You have {4 - messagesUsed} messages remaining. Access expires in 6 days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Messaging Area */}
          <div className="lg:col-span-2">
            {selectedProviderData ? (
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedProviderData.image} />
                      <AvatarFallback>{selectedProviderData.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{selectedProviderData.name}</CardTitle>
                      <CardDescription>
                        {selectedProviderData.role} • Usually responds within {selectedProviderData.responseTime}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="flex-1 p-6">
                  <div className="space-y-4">
                    {/* Sample conversation starter */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        👋 Start the conversation! Introduce yourself and let {selectedProviderData.name.split(' ')[0]} know what kind of support you're looking for.
                      </p>
                    </div>

                    {/* Message input */}
                    <div className="space-y-3">
                      <Textarea
                        placeholder={`Type your message to ${selectedProviderData.name.split(' ')[0]}...`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-24"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">
                          Messages remaining: {4 - messagesUsed}
                        </p>
                        <Button 
                          onClick={handleSendMessage}
                          disabled={!message.trim() || messagesUsed >= 4}
                          className="bg-sage-600 hover:bg-sage-700"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="font-semibold mb-2">Select a Provider</h3>
                  <p className="text-gray-600">
                    Choose a provider from the list to start messaging
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MessagingDashboard;