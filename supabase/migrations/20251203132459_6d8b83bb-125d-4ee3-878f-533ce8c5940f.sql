-- Drop overly permissive profiles policy
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create policy for users to view their own profile only
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (user_id = auth.uid());

-- Drop any overly permissive FAQ policies
DROP POLICY IF EXISTS "Authenticated users can manage FAQs" ON public.faqs;

-- Ensure admin-only policies exist for faq_categories (already has admin policy, but let's verify)
-- The existing "Admins can manage FAQ categories" and "Anyone can view published FAQ categories" are correct

-- Ensure faqs table has proper policies
-- Keep "Admins can manage FAQs" and "Anyone can view published FAQs" policies