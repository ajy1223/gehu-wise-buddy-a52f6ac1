import { ExternalLink, Shield, Clock, UserCircle, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ERPPortal = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">GEHU Student ERP Portal</h1>
            <p className="text-muted-foreground mt-2">
              Access your academic records, course information, fee management, and more through the official GEHU ERP system.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden mb-8" style={{ background: "var(--gradient-primary)" }}>
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Access Official ERP Portal</h2>
          <p className="mb-6 opacity-90">
            Login with your student credentials to access all academic services
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Secure Login</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Available</span>
            </div>
          </div>
          <Button
            onClick={() => window.open("https://student.gehu.ac.in/", "_blank")}
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Go to ERP Portal
          </Button>
          <p className="text-sm mt-4 opacity-75">student.gehu.ac.in</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">What You Can Do in ERP Portal</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <UserCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Student Profile</h3>
            <p className="text-sm text-muted-foreground">
              View and manage your personal information
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Course Registration</h3>
            <p className="text-sm text-muted-foreground">
              Register for courses and view enrollment status
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Academic Records</h3>
            <p className="text-sm text-muted-foreground">
              Access transcripts, grades, and academic history
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ERPPortal;
