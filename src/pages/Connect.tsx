import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProfileCard from '@/components/ProfileCard';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { providerService } from '@/services/providerService';

// Define the provider type
type Provider = {
  name: string;
  role: string;
  age: number;
  location: string;
  image: string;
  bio: string;
  type: 'caregiver' | 'storyteller' | 'support' | 'psychologist';
  background: string;
  education: string;
  politics: string;
  gender: string;
  religion: string;
  hourlyRate: number;
  distanceFromCity: number;
};

// Sample provider data for demonstration
const sampleProviders: Provider[] = [
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
    gender: 'Female',
    religion: 'Christian',
    hourlyRate: 25,
    distanceFromCity: 5
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
    gender: 'Male',
    religion: 'Christian',
    hourlyRate: 40,
    distanceFromCity: 15
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
    gender: 'Female',
    religion: 'Muslim',
    hourlyRate: 15,
    distanceFromCity: 8
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
    gender: 'Male',
    religion: 'Buddhist',
    hourlyRate: 30,
    distanceFromCity: 12
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
    gender: 'Female',
    religion: 'Jewish',
    hourlyRate: 75,
    distanceFromCity: 20
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
    gender: 'Male',
    religion: 'Agnostic',
    hourlyRate: 20,
    distanceFromCity: 6
  },
  {
    name: 'Dr. Sarah Wilson',
    role: 'Amateur Psychologist',
    age: 34,
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b0e1',
    bio: 'Self-taught psychology enthusiast with a passion for understanding human behavior. I offer informal counseling sessions and psychological insights.',
    type: 'psychologist' as const,
    background: 'Self-taught Psychology',
    education: 'Bachelor\'s in Liberal Arts',
    politics: 'Liberal',
    gender: 'Female',
    religion: 'Atheist',
    hourlyRate: 35,
    distanceFromCity: 10
  },
  {
    name: 'James Miller',
    role: 'Amateur Therapist',
    age: 45,
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    bio: 'Former corporate executive turned amateur psychologist. I enjoy helping people work through their challenges using practical psychology principles.',
    type: 'psychologist' as const,
    background: 'Business Background',
    education: 'MBA + Psychology Courses',
    politics: 'Moderate',
    gender: 'Male',
    religion: 'Hindu',
    hourlyRate: 50,
    distanceFromCity: 18
  }
];

const Connect = () => {
  const [activeTab, setActiveTab] = useState('caregiver');
  const [allProviders, setAllProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userCity, setUserCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    ageRange: [18, 80],
    gender: [] as string[],
    education: [] as string[],
    politics: [] as string[],
    religion: [] as string[],
    payRange: [5, 150],
    distanceRange: [0, 50],
    background: [] as string[],
    location: '',
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

  const toggleReligionFilter = (religion: string) => {
    setFilters(prev => {
      const updated = prev.religion.includes(religion)
        ? { ...prev, religion: prev.religion.filter(r => r !== religion) }
        : { ...prev, religion: [...prev.religion, religion] };
      
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const toggleBackgroundFilter = (background: string) => {
    setFilters(prev => {
      const updated = prev.background.includes(background)
        ? { ...prev, background: prev.background.filter(b => b !== background) }
        : { ...prev, background: [...prev.background, background] };
      
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const handleLocationFilter = (location: string) => {
    setFilters(prev => {
      const updated = { ...prev, location };
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const handleAgeRangeChange = (value: number[]) => {
    setFilters(prev => {
      const updated = { ...prev, ageRange: value };
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const handlePayRangeChange = (value: number[]) => {
    setFilters(prev => {
      const updated = { ...prev, payRange: value };
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  const handleDistanceRangeChange = (value: number[]) => {
    setFilters(prev => {
      const updated = { ...prev, distanceRange: value };
      applyFilters(activeTab, updated);
      return updated;
    });
  };

  // Load providers from Supabase on component mount
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const supabaseProviders = await providerService.getProviders();
        
        // Convert Supabase providers to the format expected by ProfileCard
        const formattedProviders: Provider[] = [
          ...sampleProviders, // Keep sample data for now
          ...supabaseProviders.map(provider => ({
            name: provider.name,
            role: provider.expertise,
            age: 30, // Default age since it's not in form
            location: provider.location || 'Location not specified',
            image: provider.image_url || 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
            bio: provider.biography,
            type: mapProviderType(provider.primary_interest),
            background: provider.expertise,
            education: provider.education,
            politics: provider.politics,
            gender: provider.gender,
            religion: provider.religion,
            hourlyRate: provider.hourly_rate,
            distanceFromCity: 10, // Default distance
          }))
        ];
        
        setAllProviders(formattedProviders);
        applyFilters('caregiver', filters, formattedProviders);
      } catch (error) {
        console.error('Error loading providers:', error);
        // Fallback to sample data
        setAllProviders(sampleProviders);
        applyFilters('caregiver', filters, sampleProviders);
      } finally {
        setLoading(false);
      }
    };
    
    loadProviders();
  }, []);

  // Helper function to map provider interest to card type
  const mapProviderType = (interest: string): 'caregiver' | 'storyteller' | 'support' | 'psychologist' => {
    switch (interest) {
      case 'Elderly Support':
      case 'Child Care':
        return 'caregiver';
      case 'Tutoring':
        return 'storyteller';
      case 'Emotional Support':
        return 'support';
      default:
        return 'support';
    }
  };

  const applyFilters = (tabValue: string, currentFilters = filters, providers = allProviders) => {
    let results = providers.filter(provider => provider.type === tabValue);
    
    // Apply search term (enhanced to search multiple fields)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        provider => 
          provider.name.toLowerCase().includes(term) || 
          provider.bio.toLowerCase().includes(term) ||
          provider.location.toLowerCase().includes(term) ||
          provider.role.toLowerCase().includes(term) ||
          provider.background.toLowerCase().includes(term) ||
          provider.education.toLowerCase().includes(term)
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

    // Apply religion filter
    if (currentFilters.religion.length > 0) {
      results = results.filter(provider => 
        currentFilters.religion.includes(provider.religion)
      );
    }

    // Apply background filter
    if (currentFilters.background.length > 0) {
      results = results.filter(provider => 
        currentFilters.background.some(bg => provider.background.toLowerCase().includes(bg.toLowerCase()))
      );
    }

    // Apply location filter
    if (currentFilters.location) {
      results = results.filter(provider => 
        provider.location.toLowerCase().includes(currentFilters.location.toLowerCase())
      );
    }
    
    // Apply age range filter
    results = results.filter(
      provider => provider.age >= currentFilters.ageRange[0] && provider.age <= currentFilters.ageRange[1]
    );

    // Apply pay range filter
    results = results.filter(
      provider => provider.hourlyRate >= currentFilters.payRange[0] && provider.hourlyRate <= currentFilters.payRange[1]
    );

    // Apply distance filter (only if user has set a city)
    if (userCity) {
      results = results.filter(
        provider => provider.distanceFromCity >= currentFilters.distanceRange[0] && provider.distanceFromCity <= currentFilters.distanceRange[1]
      );
    }
    
    setFilteredProviders(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-sage-50 py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-serif font-semibold text-sage-700 mb-4">Find Your Perfect Provider</h1>
              <p className="text-gray-600 mb-8">
                Connect with caregivers, storytellers, support providers, and amateur psychologists who can make a difference in your life.
                Search by multiple criteria including background, expertise, age, values, location, and more.
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
                  <h2 className="text-xl font-medium mb-6">Search & Filters</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Search</h3>
                      <Input 
                        type="text" 
                        placeholder="Search by name, background, education, etc." 
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Location Filter</h3>
                      <Input 
                        type="text" 
                        placeholder="Filter by city/state" 
                        value={filters.location}
                        onChange={(e) => handleLocationFilter(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Your City (for distance)</h3>
                      <Input 
                        type="text" 
                        placeholder="Enter your city" 
                        value={userCity}
                        onChange={(e) => setUserCity(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Background/Experience</h3>
                      <div className="space-y-2">
                        {['Nursing', 'Teaching', 'Psychology', 'Social Work', 'Business', 'Healthcare', 'Mental Health', 'Child Care', 'Babysitting'].map(bg => (
                          <div className="flex items-center" key={bg}>
                            <Checkbox 
                              id={`background-${bg.toLowerCase()}`} 
                              checked={filters.background.includes(bg)}
                              onCheckedChange={() => toggleBackgroundFilter(bg)}
                            />
                            <Label htmlFor={`background-${bg.toLowerCase()}`} className="ml-2">{bg}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Age Range</h3>
                      <div className="px-2">
                        <Slider 
                          value={filters.ageRange} 
                          max={80} 
                          min={18} 
                          step={1}
                          onValueChange={handleAgeRangeChange}
                          className="w-full"
                        />
                        <div className="mt-2 text-sm text-gray-600 flex justify-between">
                          <span>{filters.ageRange[0]} years</span>
                          <span>{filters.ageRange[1]} years</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Hourly Rate ($)</h3>
                      <div className="px-2">
                        <Slider 
                          value={filters.payRange} 
                          max={150} 
                          min={5} 
                          step={5}
                          onValueChange={handlePayRangeChange}
                          className="w-full"
                        />
                        <div className="mt-2 text-sm text-gray-600 flex justify-between">
                          <span>${filters.payRange[0]}/hr</span>
                          <span>${filters.payRange[1]}/hr</span>
                        </div>
                      </div>
                    </div>

                    {userCity && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Distance (miles)</h3>
                        <div className="px-2">
                          <Slider 
                            value={filters.distanceRange} 
                            max={50} 
                            min={0} 
                            step={1}
                            onValueChange={handleDistanceRangeChange}
                            className="w-full"
                          />
                          <div className="mt-2 text-sm text-gray-600 flex justify-between">
                            <span>{filters.distanceRange[0]} mi</span>
                            <span>{filters.distanceRange[1]} mi</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
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
                        <div className="flex items-center">
                          <Checkbox 
                            id="gender-nonbinary" 
                            checked={filters.gender.includes('Non-binary/Trans')}
                            onCheckedChange={() => toggleGenderFilter('Non-binary/Trans')}
                          />
                          <Label htmlFor="gender-nonbinary" className="ml-2">Non-binary/Trans</Label>
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

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Religion</h3>
                      <div className="space-y-2">
                        {['Christian', 'Muslim', 'Jewish', 'Hindu', 'Buddhist', 'Polytheist', 'Pagan', 'Atheist', 'Agnostic'].map(religion => (
                          <div className="flex items-center" key={religion}>
                            <Checkbox 
                              id={`religion-${religion.toLowerCase()}`} 
                              checked={filters.religion.includes(religion)}
                              onCheckedChange={() => toggleReligionFilter(religion)}
                            />
                            <Label htmlFor={`religion-${religion.toLowerCase()}`} className="ml-2">{religion}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-sage-500 text-sage-700"
                      onClick={() => {
                        setFilters({
                          ageRange: [18, 80],
                          gender: [],
                          education: [],
                          politics: [],
                          religion: [],
                          payRange: [5, 150],
                          distanceRange: [0, 50],
                          background: [],
                          location: '',
                        });
                        setSearchTerm('');
                        setUserCity('');
                        applyFilters(activeTab, {
                          ageRange: [18, 80],
                          gender: [],
                          education: [],
                          politics: [],
                          religion: [],
                          payRange: [5, 150],
                          distanceRange: [0, 50],
                          background: [],
                          location: '',
                        });
                      }}
                    >
                      Reset All Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:w-3/4">
                <Tabs defaultValue="caregiver" className="w-full" onValueChange={handleTabChange}>
                  <TabsList className="mb-6 bg-sage-100 grid grid-cols-4 w-full">
                    <TabsTrigger value="caregiver">Caregivers</TabsTrigger>
                    <TabsTrigger value="storyteller">Storytellers</TabsTrigger>
                    <TabsTrigger value="support">Support Providers</TabsTrigger>
                    <TabsTrigger value="psychologist">Amateur Psychologists</TabsTrigger>
                  </TabsList>
                  
                   <TabsContent value="caregiver" className="mt-0">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {loading ? (
                         <div className="col-span-2 text-center py-12">
                           <p className="text-gray-600">Loading providers...</p>
                         </div>
                       ) : filteredProviders.length > 0 ? (
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
                  
                  <TabsContent value="psychologist" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredProviders.length > 0 ? (
                        filteredProviders.map((provider, index) => (
                          <ProfileCard key={index} {...provider} />
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-12">
                          <p className="text-gray-600">No amateur psychologists found matching your criteria.</p>
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
