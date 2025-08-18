-- Fix security warnings by setting search_path on existing functions
ALTER FUNCTION public.has_role(_user_id uuid, _role app_role) SET search_path = '';
ALTER FUNCTION public.handle_new_user() SET search_path = '';