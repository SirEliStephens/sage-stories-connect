-- Create providers table with approval workflow
CREATE TABLE public.providers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  primary_interest TEXT NOT NULL,
  topics TEXT NOT NULL,
  country_loyalty TEXT NOT NULL,
  education TEXT NOT NULL,
  expertise TEXT NOT NULL,
  location TEXT NOT NULL,
  biography TEXT NOT NULL,
  gender TEXT NOT NULL,
  religion TEXT NOT NULL,
  politics TEXT NOT NULL,
  hourly_rate NUMERIC NOT NULL,
  image_url TEXT,
  type TEXT NOT NULL CHECK (type IN ('Elderly Support', 'Child Care', 'Tutoring', 'Emotional Support', 'Household Management', 'Companion Services', 'Professional Mentoring')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  approved_at TIMESTAMP WITH TIME ZONE,
  admin_notes TEXT
);

-- Enable RLS
ALTER TABLE public.providers ENABLE ROW LEVEL SECURITY;

-- Create policies for providers
CREATE POLICY "Admins can view all providers" 
ON public.providers 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view approved providers only" 
ON public.providers 
FOR SELECT 
USING (status = 'approved');

CREATE POLICY "Anyone can create provider applications" 
ON public.providers 
FOR INSERT 
WITH CHECK (status = 'pending');

CREATE POLICY "Admins can update provider status" 
ON public.providers 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster queries
CREATE INDEX idx_providers_status ON public.providers(status);
CREATE INDEX idx_providers_type ON public.providers(type);

-- Create trigger for updated_at
CREATE TRIGGER update_providers_updated_at
BEFORE UPDATE ON public.providers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();