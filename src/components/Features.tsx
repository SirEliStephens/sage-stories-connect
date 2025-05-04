
import React from 'react';
import { Check, Shield, UserRound, MessageCircle, Calendar } from 'lucide-react';

const features = [
  {
    icon: Check,
    title: 'Verified Providers',
    description: 'Every caregiver, storyteller and support provider undergoes a thorough verification process.',
  },
  {
    icon: Shield,
    title: 'Secure Matching',
    description: 'Our platform ensures safe connections through our secure matching system.',
  },
  {
    icon: UserRound,
    title: 'Personalized Matches',
    description: 'Find the perfect match based on your specific needs, preferences, and personality.',
  },
  {
    icon: MessageCircle,
    title: 'Easy Communication',
    description: 'Built-in messaging keeps all your conversations organized and accessible.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Set up regular meetings or one-time sessions based on your availability.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-sage-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose SAGE+</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is designed with safety, ease of use, and meaningful connections in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-sage-100 p-3 rounded-full inline-flex mb-4">
                <feature.icon className="h-6 w-6 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
