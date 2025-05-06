
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">About SAGE+</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connecting generations through meaningful relationships.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                SAGE+ was founded with a simple mission: to bridge the generational gap and create
                meaningful connections between people of all ages.
              </p>
              <p className="text-gray-600 mb-6">
                We recognized that in today's fast-paced world, many elderly individuals experience
                isolation, while younger generations miss out on the wisdom and stories of their elders.
                Meanwhile, people seeking emotional support often struggle to find accessible resources.
              </p>
              <p className="text-gray-600">
                Our platform brings together caregivers, storytellers, and psychology students with
                those who need their services, fostering connections that enrich lives across generations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1" 
                alt="Our Story" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at SAGE+.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-sage-700">Connection</h3>
              <p className="text-gray-600">
                We believe in the power of human connection to transform lives and build stronger communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-sage-700">Respect</h3>
              <p className="text-gray-600">
                We treat each person with dignity, valuing their unique experiences, knowledge, and perspectives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-sage-700">Empathy</h3>
              <p className="text-gray-600">
                We approach every interaction with compassion and understanding, recognizing each person's needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-ocean-600">Trust</h3>
              <p className="text-gray-600">
                We build safe, reliable relationships through thorough verification and ongoing support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-ocean-600">Growth</h3>
              <p className="text-gray-600">
                We believe personal development happens at every age through sharing and learning together.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-ocean-600">Accessibility</h3>
              <p className="text-gray-600">
                We strive to make our services available to all, regardless of background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated people behind SAGE+.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/378b932b-754d-4c6b-a41f-e402554df23b.png" 
                  alt="Eli Stephens" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Eli Stephens</h3>
              <p className="text-sage-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/fc9fc7de-ea93-4a6a-8874-de7a91473ff8.png" 
                  alt="Eli Stephens" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Eli Stephens</h3>
              <p className="text-sage-600">Co-Founder & CTO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/845b2104-2c9e-48cb-8232-d5e2b81f5259.png" 
                  alt="Eli Stephens" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Eli Stephens</h3>
              <p className="text-sage-600">Head of Operations</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
