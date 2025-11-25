import { Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import timetableImage1 from "@/assets/timetable-1.png";
import timetableImage2 from "@/assets/timetable-2.png";
import timetableImage3 from "@/assets/timetable-3.jpg";
import timetableImage4 from "@/assets/timetable-4.png";

const Timetable = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarIcon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Timetable</h1>
            <p className="text-muted-foreground mt-2">Class schedules for all programs</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Card className="overflow-hidden">
          <img 
            src={timetableImage1} 
            alt="BCA Semester 3 Section A2 Timetable" 
            className="w-full h-auto"
          />
        </Card>

        <Card className="overflow-hidden">
          <img 
            src={timetableImage2} 
            alt="BCA Semester 3 Section B2 Timetable" 
            className="w-full h-auto"
          />
        </Card>

        <Card className="overflow-hidden">
          <img 
            src={timetableImage3} 
            alt="B.Sc Animation and Gaming Timetable" 
            className="w-full h-auto"
          />
        </Card>

        <Card className="overflow-hidden">
          <img 
            src={timetableImage4} 
            alt="B.Tech CSE Semester III Section C2 Timetable" 
            className="w-full h-auto"
          />
        </Card>
      </div>
    </div>
  );
};

export default Timetable;
