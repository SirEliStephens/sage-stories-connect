
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  age?: number;
  location: string;
  image: string;
  bio: string;
  type: 'caregiver' | 'storyteller' | 'support';
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
  const badgeColor = 
    type === 'caregiver' ? 'bg-sage-100 text-sage-800' :
    type === 'storyteller' ? 'bg-ocean-100 text-ocean-800' :
    'bg-amber-100 text-amber-800';
    
  const badgeText = 
    type === 'caregiver' ? 'Caregiver' :
    type === 'storyteller' ? 'Storyteller' :
    'Support Provider';
    
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
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
    </Card>
  );
};

export default ProfileCard;
