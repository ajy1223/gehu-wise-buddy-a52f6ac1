import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const CampusLocations = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Campus Locations</h1>
            <p className="text-muted-foreground mt-2">Visit our beautiful campus locations</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Main Campus - Dehradun</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  Graphic Era Hill University<br />
                  Bhimtal Campus, Nainital Road<br />
                  Dehradun, Uttarakhand - 248002
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91-135-2643060</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">info@gehu.ac.in</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CampusLocations;
