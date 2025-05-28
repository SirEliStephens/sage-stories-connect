
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { MessageCircle, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface ProfileCardProps {
  name: string;
  role: string;
  age?: number;
  location: string;
  image: string;
  bio: string;
  type: 'caregiver' | 'storyteller' | 'support' | 'psychologist';
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
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const badgeColor = 
    type === 'caregiver' ? 'bg-sage-100 text-sage-800' :
    type === 'storyteller' ? 'bg-ocean-100 text-ocean-800' :
    type === 'support' ? 'bg-amber-100 text-amber-800' :
    'bg-purple-100 text-purple-800';
    
  const badgeText = 
    type === 'caregiver' ? 'Caregiver' :
    type === 'storyteller' ? 'Storyteller' :
    type === 'support' ? 'Support Provider' :
    'Amateur Psychologist';

  const handleSchedule = () => {
    if (selectedDate) {
      console.log(`Scheduling session with ${name} on ${format(selectedDate, 'PPP')}`);
      setIsCalendarOpen(false);
      // Here you would typically send this to your backend
    }
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
        
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule with {name}</DialogTitle>
            <DialogDescription>
              Choose a date to schedule your session with {name}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center space-y-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border pointer-events-auto"
            />
            
            {selectedDate && (
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Selected: {format(selectedDate, 'PPPP')}
                </p>
                <div className="flex gap-2">
                  <Button onClick={handleSchedule} className="bg-sage-600 hover:bg-sage-700">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                  <Button variant="outline" onClick={() => setIsCalendarOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProfileCard;
