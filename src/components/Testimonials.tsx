
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Finding a trustworthy caregiver for my mother was causing me so much stress. SAGE+ matched us with Maria, who is now like family to us. The peace of mind is invaluable.",
    name: "Robert Chen",
    role: "Family Member",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "As a retired teacher, I have so many stories to share. SAGE+ connects me with children who are eager to listen. It brings joy to my days and keeps my mind active.",
    name: "Eleanor Johnson",
    role: "Storyteller",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The psychology student I connected with through SAGE+ has given me a new perspective on my challenges. Sometimes, all you need is someone who really listens.",
    name: "Marcus Lewis",
    role: "Support Seeker",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sage-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have found meaningful connections on SAGE+.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-3 left-6 text-sage-500 text-5xl">"</div>
              <p className="italic text-gray-600 relative z-10 pt-3">{testimonial.quote}</p>
              
              <div className="mt-6 flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
