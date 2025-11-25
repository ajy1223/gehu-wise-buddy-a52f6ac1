-- Create FAQ categories table
CREATE TABLE public.faq_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create FAQs table
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.faq_categories(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for faq_categories
-- Allow public read access (FAQs are public information)
CREATE POLICY "Anyone can view published FAQ categories"
  ON public.faq_categories
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert/update/delete categories
CREATE POLICY "Authenticated users can manage FAQ categories"
  ON public.faq_categories
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- RLS Policies for faqs
-- Allow public read access for published FAQs
CREATE POLICY "Anyone can view published FAQs"
  ON public.faqs
  FOR SELECT
  USING (is_published = true);

-- Allow authenticated users to view all FAQs (including unpublished)
CREATE POLICY "Authenticated users can view all FAQs"
  ON public.faqs
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow authenticated users to insert/update/delete FAQs
CREATE POLICY "Authenticated users can manage FAQs"
  ON public.faqs
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_faqs_category_id ON public.faqs(category_id);
CREATE INDEX idx_faqs_is_published ON public.faqs(is_published);
CREATE INDEX idx_faq_categories_display_order ON public.faq_categories(display_order);
CREATE INDEX idx_faqs_display_order ON public.faqs(display_order);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_faq_categories_updated_at
  BEFORE UPDATE ON public.faq_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at
  BEFORE UPDATE ON public.faqs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default FAQ categories
INSERT INTO public.faq_categories (name, description, display_order) VALUES
  ('Admissions', 'Questions about admission process and requirements', 1),
  ('Academics', 'Questions about courses, examinations, and academic policies', 2),
  ('Campus Life', 'Questions about campus facilities and student life', 3),
  ('Fee & Payments', 'Questions about fee structure and payment methods', 4),
  ('Placements', 'Questions about placement opportunities and training', 5);

-- Insert sample FAQs
INSERT INTO public.faqs (category_id, question, answer, display_order, is_published)
SELECT 
  c.id,
  'How do I apply for admission?',
  'You can apply for admission through our online portal at www.gehu.ac.in. Fill out the application form, upload required documents, and pay the application fee.',
  1,
  true
FROM public.faq_categories c WHERE c.name = 'Admissions';

INSERT INTO public.faqs (category_id, question, answer, display_order, is_published)
SELECT 
  c.id,
  'What is the fee structure?',
  'Fee structure varies by program. Please visit the fee structure page or contact the admissions office for detailed information.',
  1,
  true
FROM public.faq_categories c WHERE c.name = 'Fee & Payments';

INSERT INTO public.faqs (category_id, question, answer, display_order, is_published)
SELECT 
  c.id,
  'How can I access my academic results?',
  'Academic results can be accessed through the Student ERP Portal at student.gehu.ac.in using your credentials.',
  1,
  true
FROM public.faq_categories c WHERE c.name = 'Academics';