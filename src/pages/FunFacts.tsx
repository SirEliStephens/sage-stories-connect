
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FactCard from '@/components/FactCard';
import { Fact, FactCategory } from '@/types/funFacts';
import { getFactsByCategory } from '@/services/factsService';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Categories with display names
const categories: { value: FactCategory; label: string }[] = [
  { value: 'history', label: 'History' },
  { value: 'math', label: 'Mathematics' },
  { value: 'science', label: 'Science' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'politics', label: 'Politics' },
  { value: 'current-events', label: 'Current Events' }
];

const FunFacts: React.FC = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<FactCategory>('history');
  const [facts, setFacts] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFacts = async () => {
      setIsLoading(true);
      try {
        const fetchedFacts = await getFactsByCategory(activeCategory);
        setFacts(fetchedFacts);
      } catch (error) {
        console.error('Error fetching facts:', error);
        toast({
          title: "Error",
          description: "Failed to load facts. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchFacts();
  }, [activeCategory, toast]);

  const handleFactUpdate = (updatedFact: Fact) => {
    setFacts(facts.map(fact => fact.id === updatedFact.id ? updatedFact : fact));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-sage-700">Fun Facts</h1>
            <p className="text-gray-600 text-sm">
              Swipe to discover interesting facts from various categories
            </p>
          </div>
          
          <Tabs defaultValue={activeCategory} onValueChange={(value) => setActiveCategory(value as FactCategory)} className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-white shadow-sm">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.value} 
                    value={category.value}
                    className="px-4 py-2 data-[state=active]:bg-sage-100 data-[state=active]:text-sage-700"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-0">
                {isLoading ? (
                  <div className="h-[400px] w-full bg-white shadow animate-pulse rounded-lg"></div>
                ) : (
                  <div className="relative px-10">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {facts.map((fact) => (
                          <CarouselItem key={fact.id} className="flex justify-center">
                            <div className="w-full max-w-md mx-auto">
                              <FactCard
                                fact={fact}
                                onFactUpdate={handleFactUpdate}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                        <CarouselPrevious className="pointer-events-auto relative left-0" />
                        <CarouselNext className="pointer-events-auto relative right-0" />
                      </div>
                    </Carousel>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FunFacts;
