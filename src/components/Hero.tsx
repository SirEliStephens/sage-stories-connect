import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="text-center lg:text-left">
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                Connecting people with people for a variety of needs. No middle man just connection
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Connecting <span className="text-sage-600">Generations</span> through Meaningful Relationships
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-prose">
              SAGE+ brings together people who need care, wisdom, and support with those who can provide it.
              Connecting care providers at all experience levels to the public for elderly care, storytelling, and mental health support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/connect">
                <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-6">
                  Find Support
                </Button>
              </Link>
              <Link to="/become-provider">
                <Button size="lg" variant="outline" className="border-ocean-500 text-ocean-600 hover:bg-ocean-50">
                  Become a Provider
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute top-0 -right-20 w-72 h-72 bg-sage-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-ocean-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-lg transform translate-y-8">
                    <img 
                      src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632" 
                      alt="Elderly with caregiver" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">Caring companionship</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                      alt="Storytelling session" 
                      className="w-full h-36 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">Wisdom sharing</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1439886183900-e79ec0057170" 
                      alt="Support conversation" 
                      className="w-full h-36 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">Mental health support</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg transform translate-y-8">
                    <img 
                      src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                      alt="Intergenerational connection" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">Connecting generations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
