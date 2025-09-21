-- Remove country_loyalty column and update politics to be more specific
ALTER TABLE public.providers DROP COLUMN IF EXISTS country_loyalty;

-- Update the politics column to allow more specific political preferences
ALTER TABLE public.providers ALTER COLUMN politics TYPE text;