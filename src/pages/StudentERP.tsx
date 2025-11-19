import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentERP = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Student ERP</h1>
      <p className="text-muted-foreground mb-6">
        Access the student portal for academic information and services.
      </p>
      <Button
        onClick={() => window.open("https://student.gehu.ac.in/", "_blank")}
        className="gap-2"
      >
        <ExternalLink className="w-4 h-4" />
        Go to Student ERP
      </Button>
    </div>
  );
};

export default StudentERP;
