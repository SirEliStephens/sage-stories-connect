
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Heart, Briefcase, GraduationCap, MessageSquare, User, Globe, Flag } from 'lucide-react';
import { providerService } from '@/services/providerService';
import { useNavigate } from 'react-router-dom';

const topics = [
  { id: 'loneliness', label: 'Loneliness' },
  { id: 'professional', label: 'Professional' },
  { id: 'family', label: 'Family' },
  { id: 'friends', label: 'Friends' },
  { id: 'communication', label: 'Lack of communication' },
  { id: 'romantic', label: 'Romantic' },
  { id: 'appreciation', label: 'Lack of appreciation' },
  { id: 'financial', label: 'Financial issues' },
  { id: 'breakup', label: 'Bad breakup' },
  { id: 'anxiety', label: 'Anxiety' },
  { id: 'depression', label: 'Depression' },
  { id: 'trauma', label: 'Trauma' },
  { id: 'grief', label: 'Grief' },
  { id: 'self-image', label: 'Self-image issues' },
  { id: 'anything', label: 'Talk to me about ANYTHING' },
];

const traits = [
  { id: 'compassionate', label: 'Compassionate' },
  { id: 'understanding', label: 'Understanding' },
  { id: 'patient', label: 'Patient' },
  { id: 'empathetic', label: 'Empathetic' },
  { id: 'genuine', label: 'Genuine' },
  { id: 'passionate', label: 'Passionate' },
  { id: 'self-aware', label: 'Self-aware' },
  { id: 'open-minded', label: 'Open-minded' },
  { id: 'supportive', label: 'Supportive' },
  { id: 'non-judgmental', label: 'Non-judgmental' },
];

const countries = [
  { id: 'america', label: 'America' },
  { id: 'canada', label: 'Canada' },
  { id: 'mexico', label: 'Mexico' },
  { id: 'china', label: 'China' },
  { id: 'israel', label: 'Israel' },
  { id: 'brazil', label: 'Brazil' },
  { id: 'south-africa', label: 'South Africa' },
  { id: 'britain', label: 'Britain' },
  { id: 'germany', label: 'Germany' },
  { id: 'france', label: 'France' },
  { id: 'thailand', label: 'Thailand' },
  { id: 'australia', label: 'Australia' },
  { id: 'japan', label: 'Japan' },
  { id: 'taiwan', label: 'Taiwan' },
  { id: 'russia', label: 'Russia' },
];

// Political questionnaire questions
const politicalQuestions = [
  {
    id: 'trans-hormones',
    question: 'Should parents give hormone supplements to their kids to become transgender?',
    options: [
      { value: 'strongly-agree', label: 'Strongly Agree' },
      { value: 'agree', label: 'Agree' },
      { value: 'neutral', label: 'Neutral' },
      { value: 'disagree', label: 'Disagree' },
      { value: 'strongly-disagree', label: 'Strongly Disagree' },
    ]
  },
  {
    id: 'gun-rights',
    question: 'Do you believe in stricter gun control laws?',
    options: [
      { value: 'strongly-agree', label: 'Strongly Agree' },
      { value: 'agree', label: 'Agree' },
      { value: 'neutral', label: 'Neutral' },
      { value: 'disagree', label: 'Disagree' },
      { value: 'strongly-disagree', label: 'Strongly Disagree' },
    ]
  },
  {
    id: 'healthcare',
    question: 'Should healthcare be provided by the government for all citizens?',
    options: [
      { value: 'strongly-agree', label: 'Strongly Agree' },
      { value: 'agree', label: 'Agree' },
      { value: 'neutral', label: 'Neutral' },
      { value: 'disagree', label: 'Disagree' },
      { value: 'strongly-disagree', label: 'Strongly Disagree' },
    ]
  }
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  age: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) >= 18, {
    message: "You must be at least 18 years old.",
  }),
  gender: z.string().min(1, { message: "Please select your gender." }),
  expertise: z.string().min(2, { message: "Please describe your expertise." }),
  credentials: z.string().optional(),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  topics: z.string().optional(),
  languages: z.string().min(1, { message: "Please enter languages you speak." }),
  personalTraits: z.string().min(1, { message: "Please describe your personal traits." }),
  politicalView: z.enum(["non-political", "liberal", "moderate", "conservative"]),
  politicalSlider: z.number().optional(),
  linkedinProfile: z.string().optional(),
  otherSocialMedia: z.string().optional(),
  bio: z.string().min(50, { message: "Bio should be at least 50 characters." }),
  profileImage: z.instanceof(FileList).optional()
    .refine(files => !files || files.length === 0 || (files.length === 1 && files[0].type.startsWith('image/')), {
      message: "Profile image must be a valid image file.",
    }),
  favorableCountries: z.array(z.string()).optional(),
  politicalQuestions: z.record(z.string(), z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BecomeProvider = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showPoliticalSlider, setShowPoliticalSlider] = useState(false);
  const [showPoliticalQuestionnaire, setShowPoliticalQuestionnaire] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      age: "",
      gender: "",
      expertise: "",
      credentials: "",
      serviceType: "",
      topics: "",
      languages: "English",
      personalTraits: "",
      politicalView: "non-political",
      politicalSlider: 50,
      linkedinProfile: "",
      otherSocialMedia: "",
      bio: "",
      favorableCountries: [],
      politicalQuestions: {},
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePoliticalViewChange = (value: string) => {
    form.setValue("politicalView", value as "non-political" | "liberal" | "moderate" | "conservative");
    setShowPoliticalSlider(value !== "non-political");
    setShowPoliticalQuestionnaire(value !== "non-political");
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const providerData = {
        name: data.fullName,
        email: data.email,
        phone: '', // You might want to add a phone field to the form
        primary_interest: data.serviceType,
        topics: data.topics || '',
        country_loyalty: data.favorableCountries?.[0] || '',
        education: data.credentials || '',
        expertise: data.expertise,
        location: '', // You might want to add a location field to the form  
        biography: data.bio,
        gender: data.gender,
        religion: '', // You might want to add a religion field to the form
        politics: data.politicalView,
        hourly_rate: 25, // Default rate, you might want to add this to the form
        type: data.serviceType as any,
        image_url: previewImage || undefined,
      };

      const result = await providerService.createProvider(providerData);
      
      if (result) {
        toast.success("Application submitted successfully! Your profile is now live on the platform.");
        navigate('/connect');
      } else {
        throw new Error('Failed to create provider profile');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 bg-sage-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-serif font-semibold text-sage-700 mb-4">Become a Provider</h1>
                <p className="text-gray-600">
                  Join our community of caregivers, storytellers, and support providers. 
                  Share your expertise and make a meaningful difference in someone's life.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/3 flex flex-col items-center">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-sage-100 mb-4">
                          {previewImage ? (
                            <img 
                              src={previewImage} 
                              alt="Profile Preview" 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <User size={64} className="text-gray-400" />
                            </div>
                          )}
                        </div>
                        <label className="flex items-center justify-center px-4 py-2 bg-sage-100 text-sage-700 rounded-md cursor-pointer hover:bg-sage-200 transition-colors w-full">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                          <span>Upload Photo</span>
                        </label>
                      </div>
                      
                      <div className="w-full md:w-2/3 space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="jane@example.com" {...field} type="email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="age"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Age</FormLabel>
                                  <FormControl>
                                    <Input placeholder="35" {...field} type="number" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="gender"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Gender</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="female">Female</SelectItem>
                                      <SelectItem value="male">Male</SelectItem>
                                      <SelectItem value="non-binary">Non-binary</SelectItem>
                                      <SelectItem value="other">Other</SelectItem>
                                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>My primary interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select service type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="elderly-support">
                                  <div className="flex items-center gap-2">
                                    <Heart size={16} />
                                    <span>Elderly Support</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="child-care">
                                  <div className="flex items-center gap-2">
                                    <Heart size={16} />
                                    <span>Child Care</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="tutoring">
                                  <div className="flex items-center gap-2">
                                    <GraduationCap size={16} />
                                    <span>Tutoring</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="caregiver">
                                  <div className="flex items-center gap-2">
                                    <Heart size={16} />
                                    <span>Caregiver for Elderly</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="storyteller">
                                  <div className="flex items-center gap-2">
                                    <Briefcase size={16} />
                                    <span>Storyteller (Life Experience)</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="support">
                                  <div className="flex items-center gap-2">
                                    <GraduationCap size={16} />
                                    <span>Support Provider (Psychology Student)</span>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="languages"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Languages</FormLabel>
                            <FormControl>
                              <Input placeholder="English, Spanish, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="topics"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Topics I can help with</FormLabel>
                          <FormDescription>
                            Type in your response describing the topics you can help with
                          </FormDescription>
                          <FormControl>
                          <Textarea 
                            placeholder="whatever topics related to your specialty"
                            className="min-h-[100px]"
                            {...field}
                          />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    
                    {/* Countries View Favorably Section */}
                    <FormField
                      control={form.control}
                      name="favorableCountries"
                      render={() => (
                        <FormItem>
                          <div>
                            <FormLabel className="flex items-center gap-2">
                              <Globe size={18} />
                              Country you are most loyal to
                            </FormLabel>
                            <FormDescription>
                              Select countries you have a positive view about
                            </FormDescription>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {countries.map((country) => (
                              <FormField
                                key={country.id}
                                control={form.control}
                                name="favorableCountries"
                                render={({ field }) => {
                                  return (
                                    <label
                                      htmlFor={`country-${country.id}`}
                                      className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors flex items-center gap-1 ${
                                        field.value?.includes(country.id)
                                          ? 'bg-blue-200 text-blue-800'
                                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                      }`}
                                    >
                                      <input
                                        type="checkbox"
                                        id={`country-${country.id}`}
                                        className="sr-only"
                                        checked={field.value?.includes(country.id) || false}
                                        onChange={(e) => {
                                          const checked = e.target.checked;
                                          const currentValues = field.value || [];
                                          field.onChange(
                                            checked
                                              ? [...currentValues, country.id]
                                              : currentValues.filter((value) => value !== country.id)
                                          );
                                        }}
                                      />
                                      <Flag size={14} />
                                      <span>{country.label}</span>
                                    </label>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="politicalView"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Political Views</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) => handlePoliticalViewChange(value)}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="non-political" id="non-political" />
                                <label htmlFor="non-political" className="text-sm font-medium">
                                  Non-political
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="liberal" id="liberal" />
                                <label htmlFor="liberal" className="text-sm font-medium">
                                  Liberal
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="moderate" id="moderate" />
                                <label htmlFor="moderate" className="text-sm font-medium">
                                  Moderate
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="conservative" id="conservative" />
                                <label htmlFor="conservative" className="text-sm font-medium">
                                  Conservative
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {showPoliticalSlider && (
                      <FormField
                        control={form.control}
                        name="politicalSlider"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Political spectrum</FormLabel>
                            <FormControl>
                              <div className="space-y-4">
                                <Slider
                                  min={0}
                                  max={100}
                                  step={1}
                                  defaultValue={[field.value || 50]}
                                  onValueChange={(values) => field.onChange(values[0])}
                                  className="w-full"
                                />
                                <div className="flex justify-between text-sm text-gray-500">
                                  <span>More progressive</span>
                                  <span>More conservative</span>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {/* Political Questionnaire Section */}
                    {showPoliticalQuestionnaire && (
                      <div className="space-y-6 border rounded-lg p-4 bg-gray-50">
                        <h3 className="text-lg font-medium">Political Questionnaire</h3>
                        <p className="text-sm text-gray-600">Please share your stance on the following issues:</p>
                        
                        {politicalQuestions.map((question) => (
                          <div key={question.id} className="space-y-3">
                            <h4 className="font-medium text-sm">{question.question}</h4>
                            <FormField
                              control={form.control}
                              name={`politicalQuestions.${question.id}` as any}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      {question.options.map((option) => (
                                        <div key={option.value} className="flex items-center space-x-2">
                                          <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                                          <label htmlFor={`${question.id}-${option.value}`} className="text-sm">
                                            {option.label}
                                          </label>
                                        </div>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <FormField
                      control={form.control}
                      name="expertise"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expertise</FormLabel>
                          <FormControl>
                            <Input placeholder="describe level of experience" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="credentials"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Credentials (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Degrees, certifications, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="linkedinProfile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://linkedin.com/in/username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="otherSocialMedia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Other Social Media (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Instagram, Facebook, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Biography</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about yourself, your experience, and why you want to join SAGE+..." 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Share your personal background and write as much as you are comfortable with telling. This will be visible on your profile.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
              
              {/* Sample Profile Preview */}
              <div id="profile-preview" className="mt-12 bg-cream-50 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-semibold text-sage-700 mb-6 text-center">
                    Preview of your Provider Profile
                  </h2>
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                    <div className="relative">
                      {/* Heart button */}
                      <button className="absolute top-4 right-4 z-10" aria-label="Add to favorites">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      
                      {/* Profile image */}
                      <div className="p-6 flex items-center">
                        <div className="mr-4 flex-shrink-0">
                          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-gray-100">
                            {previewImage ? (
                              <img 
                                src={previewImage} 
                                alt="Jessica B." 
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <img 
                                src="/lovable-uploads/662900b2-6652-47c0-aa69-1a3fd334db3a.png" 
                                alt="Jessica B." 
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {form.watch('fullName') || "Jessica B."}
                          </h3>
                          <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full mt-1">
                            New
                          </span>
                        </div>
                      </div>
                      
                      {/* Topics */}
                      <div className="px-6 pb-4">
                        <h4 className="font-medium flex items-center gap-1 mb-2">
                          <span className="inline-block w-2 h-2 bg-black rounded-full"></span> Topics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {form.watch('topics') ? (
                            <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">
                              {form.watch('topics')}
                            </span>
                          ) : (
                            <>
                              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">Loneliness</span>
                              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">Professional</span>
                              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">Family</span>
                              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">Friends</span>
                              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">Romantic</span>
                              <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">Lack of appreciation</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Age & Gender */}
                      <div className="px-6 py-4 border-t border-gray-100">
                        <h4 className="flex items-center gap-2 font-medium">
                          <User size={16} /> Age & Gender
                        </h4>
                        <p className="text-gray-600 mt-1">
                          {form.watch('age') ? `${form.watch('age')} years` : "48 years"}, 
                          {form.watch('gender') ? ` ${form.watch('gender')}` : " Female"}
                        </p>
                      </div>
                      
                      {/* Languages */}
                      <div className="px-6 py-4 border-t border-gray-100">
                        <h4 className="flex items-center gap-2 font-medium">
                          <MessageSquare size={16} /> Languages
                        </h4>
                        <p className="text-gray-600 mt-1">{form.watch('languages') || "English"}</p>
                      </div>

                      {/* Countries */}
                      {form.watch('favorableCountries')?.length ? (
                        <div className="px-6 py-4 border-t border-gray-100">
                          <h4 className="flex items-center gap-2 font-medium">
                            <Globe size={16} /> Favorable Countries
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {form.watch('favorableCountries')?.map((countryId) => {
                              const country = countries.find(c => c.id === countryId);
                              return country ? (
                                <span key={country.id} className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
                                  <Flag size={12} />
                                  {country.label}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      ) : null}
                      
                      {/* Personal Traits */}
                      <div className="px-6 py-4 border-t border-gray-100">
                        <h4 className="font-medium">Personal Traits</h4>
                        <p className="text-gray-600 mt-1">
                          {form.watch('personalTraits') || "Self-aware, Compassionate, Genuine, Passionate"}
                        </p>
                      </div>
                      
                      {/* Biography */}
                      <div className="px-6 py-4 border-t border-gray-100">
                        <h4 className="font-medium">Biography</h4>
                        <div className="text-gray-600 mt-2 prose prose-sm max-w-none">
                          <p>{form.watch('bio') || `I am Jessica. Believer in Jesus. However, I didn't want to leave my house due to fear and panic attacks. I have experienced anxiety, trauma, panic attacks, OCD, loneliness, marriage issues, self image issues. Through therapy, faith, setting boundaries, learning techniques to reduce anxiety and rebuilding trust, I realize life can have hard seasons but I truly believe things can change for the good. They have for me and they can for you too! Please reach out.`}</p>
                        </div>
                        <button className="text-sage-600 hover:underline mt-2 text-sm font-medium">
                          View Less
                        </button>
                      </div>
                      
                      <div className="px-6 py-4 border-t border-gray-100">
                        <button className="w-full py-2.5 bg-sage-600 hover:bg-sage-700 text-white rounded-md flex justify-center items-center gap-2 transition-colors">
                          <MessageSquare size={18} />
                          Connect Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BecomeProvider;
