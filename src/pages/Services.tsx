
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Services Hero Section */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              SAGE+ offers three core services to connect generations and foster meaningful relationships.
            </p>
          </div>
        </div>
      </section>
      
      {/* Elderly Care Service */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Elderly Care</h2>
              <p className="text-gray-600 mb-6">
                Our elderly care service connects older adults with compassionate caregivers 
                who provide companionship, assistance with daily tasks, and emotional support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Companionship and conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Light housekeeping and meal preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Medication reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Transportation to appointments</span>
                </li>
              </ul>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                Learn More
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" 
                alt="Elderly Care" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Storytelling Service */}
      <section className="py-16 bg-sage-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6" 
                alt="Storytelling" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Storytelling</h2>
              <p className="text-gray-600 mb-6">
                Our storytelling service brings together experienced elders with younger listeners
                eager to learn from their life experiences and cultural histories.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-ocean-600 font-bold mr-2">•</span>
                  <span>Personal life stories and histories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ocean-600 font-bold mr-2">•</span>
                  <span>Cultural traditions and customs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ocean-600 font-bold mr-2">•</span>
                  <span>Career and professional wisdom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ocean-600 font-bold mr-2">•</span>
                  <span>Historical events from firsthand perspectives</span>
                </li>
              </ul>
              <Button className="bg-ocean-600 hover:bg-ocean-700 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Psychological Support Service */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Psychological Support</h2>
              <p className="text-gray-600 mb-6">
                Our psychological support service connects people seeking emotional support with
                psychology students who offer listening, conversation, and non-clinical guidance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Supportive listening and conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Peer emotional support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Stress management techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 font-bold mr-2">•</span>
                  <span>Resources for further professional help</span>
                </li>
              </ul>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                Learn More
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8" 
                alt="Psychological Support" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-ocean-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Connect?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join SAGE+ today and experience the power of intergenerational connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
