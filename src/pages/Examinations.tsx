import { FileText, Calendar, MapPin, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import examScheduleImage1 from "@/assets/exam-schedule-1.png";
import examScheduleImage2 from "@/assets/exam-schedule-2.png";

const Examinations = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Examination Schedule</h1>
            <p className="text-muted-foreground mt-2">View exam dates, venues, and important exam-related information</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Exam Period</p>
              <p className="font-semibold">November 2025</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-accent/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Exam Type</p>
              <p className="font-semibold">End Semester (ODD)</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-semibold">Earlier Skill Exams</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="bg-primary text-white p-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Official Examination Schedule
          </h2>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <p className="text-muted-foreground">
              Schedule for End Semester ODD Term (Earlier Skill) Exams - November 2025
            </p>
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <img 
                src={examScheduleImage1} 
                alt="GEHU Examination Schedule Part 1 - November 2025" 
                className="w-full h-auto"
              />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img 
                src={examScheduleImage2} 
                alt="GEHU Examination Schedule Part 2 - November 2025" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Important Instructions
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <span>Students must reach the examination venue 15 minutes before the scheduled time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <span>Carry your admit card and valid ID proof to the examination hall</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <span>Use of mobile phones or any electronic devices is strictly prohibited</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <span>Follow all examination guidelines and maintain discipline</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Contact Information
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Examination Cell</p>
              <p className="text-muted-foreground">For queries related to examination schedule</p>
            </div>
            <div>
              <p className="font-medium">Controller of Examinations</p>
              <p className="text-muted-foreground">Graphic Era Hill University, Dehradun</p>
            </div>
            <div className="pt-2">
              <p className="text-muted-foreground">
                For any discrepancies or updates, please contact the examination office immediately.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Examinations;
