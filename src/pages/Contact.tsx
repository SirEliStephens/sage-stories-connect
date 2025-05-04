
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Contact Hero Section */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about SAGE+? We're here to help you connect with our community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">contact@sageplus.com</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Office</h3>
                <p className="text-gray-600">
                  123 Community Lane<br />
                  San Francisco, CA 94110
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 5pm<br />
                  Saturday: 10am - 2pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="bg-sage-600 hover:bg-sage-700 text-white px-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
