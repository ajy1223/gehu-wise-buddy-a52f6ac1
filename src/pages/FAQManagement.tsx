import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I access the ERP Portal?",
    answer: "You can access the ERP Portal by clicking on the 'ERP Portal' link in the sidebar. Use your student credentials to log in at student.gehu.ac.in"
  },
  {
    question: "Where can I find my timetable?",
    answer: "Your timetable is available in the 'Timetable' section. Select your course, semester, and section to view your class schedule."
  },
  {
    question: "How do I contact faculty members?",
    answer: "Faculty contact information is available in the 'Faculty Directory' section. You can view their subjects and click the contact button to reach out."
  },
  {
    question: "What programs does GEHU offer?",
    answer: "GEHU offers various undergraduate and postgraduate programs including BCA, B.Tech in Computer Science & Engineering, Cyber Security, and more. Check the 'Programs' section for details."
  },
  {
    question: "How do I use the AI Assistant?",
    answer: "The AI Assistant is available in the 'Chat Assistant' section. Simply type your questions about GEHU, courses, faculty, or any university-related information."
  },
  {
    question: "Where is the campus located?",
    answer: "GEHU's main campus is located in Dehradun, Uttarakhand. Visit the 'Campus Locations' section for detailed address and contact information."
  },
];

const FAQManagement = () => {
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

      <Card className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
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
    </div>
  );
};

export default FAQManagement;
