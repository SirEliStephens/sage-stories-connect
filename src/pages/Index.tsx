
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import ProfileCard from '@/components/ProfileCard';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample profiles for each service type
const featuredProfiles = [
  {
    name: 'Maria Rodriguez',
    role: 'Elder Care Specialist',
    age: 42,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
    bio: 'With 15 years of caregiving experience, I specialize in providing compassionate care for seniors. I believe in treating each person with dignity and respect.',
    type: 'caregiver' as const
  },
  {
    name: 'George Washington',
    role: 'Retired Teacher',
    age: 68,
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    bio: 'I love sharing stories from my 40-year teaching career and life experiences. Storytelling keeps our history alive and connects generations.',
    type: 'storyteller' as const
  },
  {
    name: 'Aisha Johnson',
    role: 'Psychology Student',
    age: 24,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369',
    bio: 'Final year psychology student offering supportive conversation. I\'m a great listener and genuinely interested in hearing your story.',
    type: 'support' as const
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ServiceCards />
      
      {/* Featured Profiles Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Meet Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know some of the amazing caregivers, storytellers, and support providers who are part of SAGE+.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProfiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/connect">
              <Button className="bg-ocean-600 hover:bg-ocean-700 text-white px-6">
                View All Profiles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Features />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-sage-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Connect?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join SAGE+ today and be part of a community that values connection, wisdom, and support across generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50 px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
