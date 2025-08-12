
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import { format, addDays, isToday, isTomorrow } from 'date-fns';

interface TimeSlot {
  time: string;
  available: boolean;
  booked?: boolean;
}

interface ProfileCardProps {
  name: string;
  role: string;
  age?: number;
  location: string;
  image: string;
  bio: string;
  type: 'caregiver' | 'childcare' | 'storyteller' | 'tutors' | 'psychologist';
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  age,
  location,
  image,
  bio,
  type
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Mock availability data - in real app this would come from backend
  const getAvailableTimeSlots = (date: Date): TimeSlot[] => {
    const baseSlots = [
      { time: '9:00 AM', available: true },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: false, booked: true },
      { time: '1:00 PM', available: true },
      { time: '2:00 PM', available: true },
      { time: '3:00 PM', available: false, booked: true },
      { time: '4:00 PM', available: true },
      { time: '5:00 PM', available: true },
    ];
    
    // Simulate different availability for different days
    if (isToday(date)) {
      return baseSlots.map(slot => 
        ['9:00 AM', '10:00 AM'].includes(slot.time) ? { ...slot, available: false } : slot
      );
    }
    
    return baseSlots;
  };

  const getAvailableDates = (): Date[] => {
    // Generate available dates for the next 30 days (excluding some days)
    const dates = [];
    for (let i = 0; i < 30; i++) {
      const date = addDays(new Date(), i);
      // Skip weekends for demo purposes
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const badgeColor = 
    type === 'caregiver' ? 'bg-sage-100 text-sage-800' :
    type === 'childcare' ? 'bg-blue-100 text-blue-800' :
    type === 'storyteller' ? 'bg-ocean-100 text-ocean-800' :
    type === 'tutors' ? 'bg-green-100 text-green-800' :
    'bg-purple-100 text-purple-800';
    
  const badgeText = 
    type === 'caregiver' ? 'Elderly Support' :
    type === 'childcare' ? 'Child Support' :
    type === 'storyteller' ? 'Storytelling' :
    type === 'tutors' ? 'Tutors' :
    'Psychology';

  const handleSchedule = () => {
    if (selectedDate && selectedTimeSlot) {
      console.log(`Scheduling session with ${name} on ${format(selectedDate, 'PPP')} at ${selectedTimeSlot}`);
      setIsCalendarOpen(false);
      setSelectedDate(undefined);
      setSelectedTimeSlot(null);
      // Here you would typically send this to your backend
    }
  };

  const getDateDisplayText = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'MMM d');
  };
    
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all cursor-pointer">
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogTrigger asChild>
          <div>
            <div className="relative">
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>
                  {badgeText}
                </span>
              </div>
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardHeader className="pb-2 pt-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-3 border-2 border-white shadow-sm">
                    <AvatarImage src={image} />
                    <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-1 mt-1">
                      {role} {age && <span>• {age} years</span>} • {location}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600 text-sm line-clamp-3">{bio}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full hover:border-sage-500 hover:text-sage-700 flex gap-2 items-center">
                <MessageCircle className="h-4 w-4" /> Connect
              </Button>
            </CardFooter>
          </div>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Schedule with {name}
            </DialogTitle>
            <DialogDescription>
              Choose a date and time for your session with {name}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendar Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm">Select Date</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setSelectedTimeSlot(null); // Reset time slot when date changes
                }}
                disabled={(date) => 
                  date < new Date() || 
                  !availableDates.some(availableDate => 
                    availableDate.toDateString() === date.toDateString()
                  )
                }
                className="rounded-md border pointer-events-auto"
              />
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                  <span>Unavailable</span>
                </div>
              </div>
            </div>

            {/* Time Slots Section */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm">
                {selectedDate ? `Available Times - ${getDateDisplayText(selectedDate)}` : 'Select a date first'}
              </h3>
              
              {selectedDate ? (
                <ScrollArea className="h-64">
                  <div className="grid grid-cols-2 gap-2">
                    {getAvailableTimeSlots(selectedDate).map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTimeSlot === slot.time ? "default" : "outline"}
                        size="sm"
                        disabled={!slot.available}
                        onClick={() => setSelectedTimeSlot(slot.time)}
                        className={`justify-center ${
                          slot.booked ? 'opacity-50' : ''
                        }`}
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {slot.time}
                        {slot.booked && <span className="ml-1 text-xs">(Booked)</span>}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              ) : (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <CalendarIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Select a date to view available times</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Selected Session Summary */}
          {selectedDate && selectedTimeSlot && (
            <div className="border-t pt-4 mt-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Session Details
                </h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Provider:</strong> {name}</p>
                  <p><strong>Date:</strong> {format(selectedDate, 'PPPP')}</p>
                  <p><strong>Time:</strong> {selectedTimeSlot}</p>
                  <p><strong>Duration:</strong> 1 hour</p>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  onClick={() => {
                    // Navigate to booking page with provider details
                    window.location.href = `/provider-booking/${name.toLowerCase().replace(/\s+/g, '-')}`;
                  }} 
                  className="flex-1"
                  disabled={!selectedDate || !selectedTimeSlot}
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Continue to Payment
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsCalendarOpen(false);
                    setSelectedDate(undefined);
                    setSelectedTimeSlot(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProfileCard;
