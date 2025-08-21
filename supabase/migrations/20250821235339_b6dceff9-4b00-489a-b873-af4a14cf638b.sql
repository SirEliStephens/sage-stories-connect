-- Drop the current public view policy that exposes all provider data
DROP POLICY IF EXISTS "Public can view approved providers only" ON public.providers;

-- Create a new restricted public policy that only allows viewing basic professional info
-- We'll use a view approach since RLS works at row level, not column level

-- Create a public view that only exposes safe professional information
CREATE OR REPLACE VIEW public.providers_public AS
SELECT 
  id,
  name,
  biography,
  expertise,
  hourly_rate,
  type,
  primary_interest,
  topics,
  image_url,
  created_at,
  updated_at
FROM public.providers
WHERE status = 'approved';

-- Enable RLS on the view (though it inherits from the base table)
-- Create a policy allowing public read access to the view
CREATE POLICY "Anyone can view public provider information"
ON public.providers_public
FOR SELECT
USING (true);

-- Update the existing policy to be more specific - only admins can see full provider details
-- This replaces the old "Public can view approved providers only" policy
CREATE POLICY "Only admins and authenticated users can view full provider details"
ON public.providers
FOR SELECT
USING (
  -- Admins can see everything
  has_role(auth.uid(), 'admin'::app_role)
  OR
  -- Authenticated users can see approved providers (but we'll limit this in application code)
  (auth.uid() IS NOT NULL AND status = 'approved')
);