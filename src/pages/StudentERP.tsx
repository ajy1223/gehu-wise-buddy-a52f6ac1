import { ExternalLink, BookOpen, FileText, CreditCard, Calendar, Award, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const StudentERP = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Records",
      description: "View your grades, attendance, and academic performance"
    },
    {
      icon: FileText,
      title: "Course Materials",
      description: "Access study materials, assignments, and lecture notes"
    },
    {
      icon: CreditCard,
      title: "Fee Management",
      description: "Check fee status, download receipts, and make payments"
    },
    {
      icon: Calendar,
      title: "Exam Schedule",
      description: "View exam dates, hall tickets, and results"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Download academic certificates and documents"
    },
    {
      icon: UserCircle,
      title: "Profile Management",
      description: "Update personal information and contact details"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Student ERP Portal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your comprehensive gateway to academic information, services, and resources at GEHU University
          </p>
          <Button
            onClick={() => window.open("https://student.gehu.ac.in/", "_blank")}
            size="lg"
            className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            Access Student ERP Portal
          </Button>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Portal Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Access Instructions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                  Login Credentials
                </h4>
                <p className="text-sm text-muted-foreground">
                  Use your university enrollment number as username and the password provided during admission
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                  Support
                </h4>
                <p className="text-sm text-muted-foreground">
                  For login issues or technical support, contact the IT Help Desk at helpdesk@gehu.ac.in
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">3</span>
                  Security
                </h4>
                <p className="text-sm text-muted-foreground">
                  Never share your ERP credentials with anyone. Change your password regularly for security
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">4</span>
                  Browser Compatibility
                </h4>
                <p className="text-sm text-muted-foreground">
                  Best viewed in Chrome, Firefox, or Edge. Clear cache if you face any display issues
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentERP;
