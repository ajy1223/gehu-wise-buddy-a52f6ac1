import { HelpCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  category_id: string | null;
}

interface FAQCategory {
  id: string;
  name: string;
  description: string | null;
  display_order: number;
}

const FAQManagement = () => {
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["faq-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faq_categories")
        .select("*")
        .order("display_order");
      
      if (error) throw error;
      return data as FAQCategory[];
    },
  });

  const { data: faqs, isLoading: faqsLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .eq("is_published", true)
        .order("display_order");
      
      if (error) throw error;
      return data as FAQ[];
    },
  });

  const isLoading = categoriesLoading || faqsLoading;
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">FAQ Management</h1>
            <p className="text-muted-foreground mt-2">Frequently asked questions about GEHU</p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Card className="p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          {categories?.map((category) => {
            const categoryFaqs = faqs?.filter(
              (faq) => faq.category_id === category.id
            );

            if (!categoryFaqs || categoryFaqs.length === 0) return null;

            return (
              <Card key={category.id} className="p-6">
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                {category.description && (
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                )}
                <Accordion type="single" collapsible className="w-full">
                  {categoryFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            );
          })}

          {/* Show uncategorized FAQs */}
          {faqs?.some((faq) => !faq.category_id) && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">General</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs
                  ?.filter((faq) => !faq.category_id)
                  .map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQManagement;
