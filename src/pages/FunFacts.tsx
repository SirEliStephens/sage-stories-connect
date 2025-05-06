
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FactCard from '@/components/FactCard';
import { Fact, FactCategory } from '@/types/funFacts';
import { getFactsByCategory } from '@/services/factsService';

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
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-sage-700">Fun Facts</h1>
              <p className="text-gray-600">
                Discover interesting facts from various categories. Like, bookmark, or comment on facts that interest you!
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
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <Card key={i} className="w-full bg-white shadow animate-pulse">
                          <CardContent className="p-6">
                            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                            <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {facts.map((fact) => (
                        <FactCard
                          key={fact.id}
                          fact={fact}
                          onFactUpdate={handleFactUpdate}
                        />
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FunFacts;
