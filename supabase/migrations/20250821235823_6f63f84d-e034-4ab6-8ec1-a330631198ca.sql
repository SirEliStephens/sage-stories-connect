-- Drop the current public policy that exposes all provider data
DROP POLICY IF EXISTS "Public can view approved providers only" ON public.providers;

-- Create a new policy that completely restricts public access to the providers table
-- Only authenticated users and admins can access the full providers table
CREATE POLICY "Only authenticated users can view providers"
ON public.providers
FOR SELECT
USING (
  -- Admins can see everything
  has_role(auth.uid(), 'admin'::app_role)
  OR 
  -- Authenticated users can see approved providers (we'll limit this in app code)
  (auth.uid() IS NOT NULL AND status = 'approved')
);

-- Create a function that returns only safe public provider information
CREATE OR REPLACE FUNCTION public.get_public_providers()
RETURNS TABLE (
  id uuid,
  name text,
  biography text,
  expertise text,
  hourly_rate numeric,
  type text,
  primary_interest text,
  topics text,
  image_url text,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT 
    p.id,
    p.name,
    p.biography,
    p.expertise,
    p.hourly_rate,
    p.type,
    p.primary_interest,
    p.topics,
    p.image_url,
    p.created_at,
    p.updated_at
  FROM public.providers p
  WHERE p.status = 'approved'
  ORDER BY p.created_at DESC;
$$;