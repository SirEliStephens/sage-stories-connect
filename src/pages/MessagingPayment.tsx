import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CreditCard, MessageCircle, ArrowLeft, Users, Clock, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MessagingPayment = () => {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  const handlePayment = () => {
    // Handle payment processing
    console.log('Processing messaging payment:', paymentInfo);
    // In real app, this would integrate with payment processor
    // After successful payment, redirect to messaging dashboard
    navigate('/messaging-dashboard');
  };

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
          Back
        </Button>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Unlock Provider Messaging</h1>
            <p className="text-gray-600">
              Get direct access to message up to 4 providers and find the perfect match for your needs
            </p>
          </div>

          {/* Features Card */}
          <Card className="bg-sage-50 border-sage-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sage-800">
                <MessageCircle className="h-5 w-5" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sage-700">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Message 4 providers</span>
                </div>
                <div className="flex items-center gap-2 text-sage-700">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">7-day access</span>
                </div>
                <div className="flex items-center gap-2 text-sage-700">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Secure messaging</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Information
              </CardTitle>
              <CardDescription>
                Complete your purchase to start messaging providers
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
                  <span>Messaging Access (4 providers)</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing fee</span>
                  <span>$0.50</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$10.50</span>
                </div>
              </div>

              <Button 
                onClick={handlePayment}
                className="w-full bg-sage-600 hover:bg-sage-700 text-lg py-3"
                disabled={!paymentInfo.name || !paymentInfo.email || !paymentInfo.cardNumber}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Complete Purchase - $10.50
              </Button>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Why Choose Direct Messaging?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get responses faster than public inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Discuss your specific needs privately</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compare multiple providers before booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Secure, platform-protected conversations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Shield className="h-4 w-4" />
                <span className="font-medium">Secure Payment</span>
              </div>
              <p className="text-sm text-blue-600">
                Your payment information is encrypted and secure. We never store your card details.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MessagingPayment;