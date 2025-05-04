
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: User,
    title: "Elderly Care",
    description: "Connect with compassionate caregivers who provide companionship, assistance with daily activities, and peace of mind for families.",
    color: "sage",
    buttonText: "Find Caregivers"
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "Experience the magic of storytelling from our elders. Perfect for children and anyone looking to connect with wisdom across generations.",
    color: "ocean",
    buttonText: "Discover Stories"
  },
  {
    icon: Heart,
    title: "Psychological Support",
    description: "Talk with psychology students who offer a listening ear and supportive conversation in a non-clinical environment.",
    color: "accent",
    buttonText: "Get Support"
  }
];

const ServiceCards = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SAGE+ offers a range of services connecting those who need support with those who can provide it,
            fostering meaningful intergenerational relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className={`p-3 rounded-full inline-flex bg-${service.color}-100 mb-3`}>
                  <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4">
                <Button variant={index === 0 ? "default" : "outline"} className={`w-full ${
                  index === 0 ? "bg-sage-600 hover:bg-sage-700" : 
                  index === 1 ? "border-ocean-500 text-ocean-600 hover:bg-ocean-50" :
                  "border-accent text-accent-foreground hover:bg-accent/10"
                }`}>
                  {service.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
