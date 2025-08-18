-- Add approval status to providers table
ALTER TABLE public.providers 
ADD COLUMN status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected'));

-- Add approved_at timestamp
ALTER TABLE public.providers 
ADD COLUMN approved_at TIMESTAMP WITH TIME ZONE;

-- Add admin notes column
ALTER TABLE public.providers 
ADD COLUMN admin_notes text;

-- Create index for faster queries on status
CREATE INDEX idx_providers_status ON public.providers(status);

-- Update existing providers to be approved
UPDATE public.providers SET status = 'approved', approved_at = now() WHERE status = 'pending';