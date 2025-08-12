import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CreditCard, MessageCircle, Calendar, Clock, Star, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProviderBooking = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    message: ''
  });

  // Mock provider data - in real app this would be fetched based on providerId
  const provider = {
    id: providerId,
    name: "Sarah Johnson",
    role: "Certified Caregiver",
    age: 45,
    location: "San Francisco, CA",
    image: "/lovable-uploads/378b932b-754d-4c6b-a41f-e402554df23b.png",
    bio: "With over 15 years of experience in elder care, I provide compassionate companionship and assistance with daily activities.",
    type: 'caregiver',
    rating: 4.9,
    hourlyRate: 35,
    responseTime: "Usually responds within 1 hour"
  };

  const handlePayment = () => {
    // Handle payment processing
    console.log('Processing payment:', paymentInfo);
    // In real app, this would integrate with payment processor
  };

  const handleSendMessage = () => {
    // Handle message sending
    console.log('Sending message to provider:', paymentInfo.message);
    // In real app, this would send message to provider
  };

  const badgeColor = 
    provider.type === 'caregiver' ? 'bg-sage-100 text-sage-800' :
    provider.type === 'childcare' ? 'bg-blue-100 text-blue-800' :
    provider.type === 'storyteller' ? 'bg-ocean-100 text-ocean-800' :
    provider.type === 'tutors' ? 'bg-green-100 text-green-800' :
    'bg-purple-100 text-purple-800';
    
  const badgeText = 
    provider.type === 'caregiver' ? 'Elderly Support' :
    provider.type === 'childcare' ? 'Child Support' :
    provider.type === 'storyteller' ? 'Storytelling' :
    provider.type === 'tutors' ? 'Tutors' :
    'Psychology';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container-custom py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-sage-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Provider
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Provider Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={provider.image} />
                      <AvatarFallback>{provider.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{provider.name}</CardTitle>
                      <CardDescription className="text-base">
                        {provider.role} • {provider.location}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={badgeColor}>
                          {badgeText}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{provider.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{provider.bio}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Hourly Rate:</span>
                    <span className="font-semibold">${provider.hourlyRate}/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response Time:</span>
                    <span className="text-sm">{provider.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Message Provider */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Message Provider
                </CardTitle>
                <CardDescription>
                  Send a message to introduce yourself and discuss your needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Hi Sarah, I'm looking for help with..."
                    value={paymentInfo.message}
                    onChange={(e) => setPaymentInfo({...paymentInfo, message: e.target.value})}
                    className="min-h-24"
                  />
                </div>
                <Button 
                  onClick={handleSendMessage}
                  className="w-full bg-sage-600 hover:bg-sage-700"
                  disabled={!paymentInfo.message.trim()}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Payment Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
                <CardDescription>
                  Complete your booking with secure payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={paymentInfo.name}
                      onChange={(e) => setPaymentInfo({...paymentInfo, name: e.target.value})}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={paymentInfo.email}
                      onChange={(e) => setPaymentInfo({...paymentInfo, email: e.target.value})}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={paymentInfo.expiryDate}
                      onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={paymentInfo.cvv}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Session (1 hour)</span>
                    <span>${provider.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform fee</span>
                    <span>$3</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${provider.hourlyRate + 3}</span>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  className="w-full bg-sage-600 hover:bg-sage-700"
                  disabled={!paymentInfo.name || !paymentInfo.email || !paymentInfo.cardNumber}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Complete Booking
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-sage-50 border-sage-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sage-700 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Booking Protection</span>
                </div>
                <p className="text-sm text-sage-600">
                  Your payment is protected. Funds are held securely and only released after your session is completed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProviderBooking;