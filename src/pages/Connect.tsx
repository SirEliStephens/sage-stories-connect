
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProfileCard from '@/components/ProfileCard';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

// Sample provider data for demonstration
const sampleProviders = [
  {
    name: 'Maria Rodriguez',
    role: 'Elder Care Specialist',
    age: 42,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
    bio: 'With 15 years of caregiving experience, I specialize in providing compassionate care for seniors. I believe in treating each person with dignity and respect.',
    type: 'caregiver' as const,
    background: 'Nursing Assistant',
    education: 'Certified Nursing Assistant (CNA)',
    politics: 'Moderate',
    gender: 'Female'
  },
  {
    name: 'George Washington',
    role: 'Retired Teacher',
    age: 68,
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    bio: 'I love sharing stories from my 40-year teaching career and life experiences. Storytelling keeps our history alive and connects generations.',
    type: 'storyteller' as const,
    background: 'History Teacher',
    education: 'Master\'s in Education',
    politics: 'Conservative',
    gender: 'Male'
  },
  {
    name: 'Aisha Johnson',
    role: 'Psychology Student',
    age: 24,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369',
    bio: 'Final year psychology student offering supportive conversation. I\'m a great listener and genuinely interested in hearing your story.',
    type: 'support' as const,
    background: 'Mental Health Volunteer',
    education: 'Bachelor\'s in Psychology (in progress)',
    politics: 'Liberal',
    gender: 'Female'
  },
  {
    name: 'Michael Chen',
    role: 'Elder Companion',
    age: 35,
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'I provide companionship and assistance to seniors, helping with daily tasks, errands, and engaging activities to keep them active and connected.',
    type: 'caregiver' as const,
    background: 'Home Health Aide',
    education: 'Bachelor\'s in Social Work',
    politics: 'Progressive',
    gender: 'Male'
  },
  {
    name: 'Eleanor James',
    role: 'Retired Business Executive',
    age: 71,
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb',
    bio: 'After 40 years in corporate leadership, I enjoy sharing business knowledge and life lessons with young entrepreneurs and professionals.',
    type: 'storyteller' as const,
    background: 'Finance Executive',
    education: 'MBA, Harvard Business School',
    politics: 'Centrist',
    gender: 'Female'
  },
  {
    name: 'David Park',
    role: 'Social Work Student',
    age: 26,
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    bio: 'Graduate student in social work offering supportive conversations and mentoring. Specialized in addiction recovery support and personal development.',
    type: 'support' as const,
    background: 'Recovery Coach',
    education: 'Master\'s in Social Work (in progress)',
    politics: 'Liberal',
    gender: 'Male'
  }
];

const Connect = () => {
  const [activeTab, setActiveTab] = useState('caregiver');
  const [filteredProviders, setFilteredProviders] = useState(
    sampleProviders.filter(provider => provider.type === 'caregiver')
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    ageMin: 18,
    ageMax: 80,
    gender: [] as string[],
    education: [] as string[],
    politics: [] as string[],
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    applyFilters(value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    applyFilters(activeTab);
  };

  const toggleGenderFilter = (gender: string) => {
    setFilters(prev => {
      const updated = prev.gender.includes(gender)
        ? { ...prev, gender: prev.gender.filter(g => g !== gender) }
        : { ...prev, gender: [...prev.gender, gender] };
      
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const togglePoliticsFilter = (politics: string) => {
    setFilters(prev => {
      const updated = prev.politics.includes(politics)
        ? { ...prev, politics: prev.politics.filter(p => p !== politics) }
        : { ...prev, politics: [...prev.politics, politics] };
      
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const handleAgeChange = (value: number[]) => {
    setFilters(prev => {
      const updated = { ...prev, ageMin: value[0], ageMax: value[0] };
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const applyFilters = (tabValue: string, currentFilters = filters) => {
    let results = sampleProviders.filter(provider => provider.type === tabValue);
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        provider => 
          provider.name.toLowerCase().includes(term) || 
          provider.bio.toLowerCase().includes(term) ||
          provider.location.toLowerCase().includes(term) ||
          provider.role.toLowerCase().includes(term)
      );
    }
    
    // Apply gender filter
    if (currentFilters.gender.length > 0) {
      results = results.filter(provider => 
        currentFilters.gender.includes(provider.gender)
      );
    }
    
    // Apply politics filter
    if (currentFilters.politics.length > 0) {
      results = results.filter(provider => 
        currentFilters.politics.includes(provider.politics)
      );
    }
    
    // Apply age filter
    results = results.filter(
      provider => provider.age >= currentFilters.ageMin && provider.age <= currentFilters.ageMax
    );
    
    setFilteredProviders(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-sage-50 py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-serif font-semibold text-sage-700 mb-4">Find Your Perfect Connection</h1>
              <p className="text-gray-600 mb-8">
                Connect with caregivers, storytellers, and support providers who can make a difference in your life.
                Choose based on what matters most to you: background, expertise, age, values, and more.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-medium mb-6">Filters</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Search</h3>
                      <Input 
                        type="text" 
                        placeholder="Search by name, location, etc." 
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Age</h3>
                      <div className="px-2">
                        <Slider 
                          defaultValue={[filters.ageMin]} 
                          max={80} 
                          min={18} 
                          step={1}
                          onValueChange={handleAgeChange}
                        />
                        <div className="mt-2 text-sm text-gray-600">
                          {filters.ageMin} years old
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Gender</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox 
                            id="gender-male" 
                            checked={filters.gender.includes('Male')}
                            onCheckedChange={() => toggleGenderFilter('Male')}
                          />
                          <Label htmlFor="gender-male" className="ml-2">Male</Label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox 
                            id="gender-female" 
                            checked={filters.gender.includes('Female')}
                            onCheckedChange={() => toggleGenderFilter('Female')}
                          />
                          <Label htmlFor="gender-female" className="ml-2">Female</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Political Views</h3>
                      <div className="space-y-2">
                        {['Conservative', 'Moderate', 'Liberal', 'Progressive', 'Centrist'].map(view => (
                          <div className="flex items-center" key={view}>
                            <Checkbox 
                              id={`politics-${view.toLowerCase()}`} 
                              checked={filters.politics.includes(view)}
                              onCheckedChange={() => togglePoliticsFilter(view)}
                            />
                            <Label htmlFor={`politics-${view.toLowerCase()}`} className="ml-2">{view}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-sage-500 text-sage-700"
                      onClick={() => {
                        setFilters({
                          ageMin: 18,
                          ageMax: 80,
                          gender: [],
                          education: [],
                          politics: [],
                        });
                        setSearchTerm('');
                        applyFilters(activeTab, {
                          ageMin: 18,
                          ageMax: 80,
                          gender: [],
                          education: [],
                          politics: [],
                        });
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:w-3/4">
                <Tabs defaultValue="caregiver" className="w-full" onValueChange={handleTabChange}>
                  <TabsList className="mb-6 bg-sage-100">
                    <TabsTrigger value="caregiver" className="flex-1">Caregivers</TabsTrigger>
                    <TabsTrigger value="storyteller" className="flex-1">Storytellers</TabsTrigger>
                    <TabsTrigger value="support" className="flex-1">Support Providers</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="caregiver" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredProviders.length > 0 ? (
                        filteredProviders.map((provider, index) => (
                          <ProfileCard key={index} {...provider} />
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-12">
                          <p className="text-gray-600">No caregivers found matching your criteria.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="storyteller" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredProviders.length > 0 ? (
                        filteredProviders.map((provider, index) => (
                          <ProfileCard key={index} {...provider} />
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-12">
                          <p className="text-gray-600">No storytellers found matching your criteria.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="support" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredProviders.length > 0 ? (
                        filteredProviders.map((provider, index) => (
                          <ProfileCard key={index} {...provider} />
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-12">
                          <p className="text-gray-600">No support providers found matching your criteria.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Connect;
