import { useState } from "react";
import { MapPin, Phone, Mail, Building2, GraduationCap, BookOpen, FlaskConical, Library, Utensils, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Location {
  id: string;
  name: string;
  type: "academic" | "administrative" | "facility" | "hostel";
  icon: any;
  description: string;
  position: { x: number; y: number };
}

const CAMPUS_MAIN_LOCATION = "https://www.google.com/maps/place/Graphic+Era+Hill+University/@30.2732634,78.0315788,17z/data=!3m1!4b1!4m6!3m5!1s0x39092bca3fc0ccf3:0xd19900de8c24dbee!8m2!3d30.2732634!4d78.0341537!16s%2Fg%2F11b6dq_3rz";

const locations: Location[] = [
  {
    id: "admin",
    name: "Administrative Block",
    type: "administrative",
    icon: Building2,
    description: "Main administration office, admissions, and student services",
    position: { x: 20, y: 30 },
  },
  {
    id: "bca",
    name: "BCA Department",
    type: "academic",
    icon: GraduationCap,
    description: "Department of Computer Applications",
    position: { x: 40, y: 20 },
  },
  {
    id: "btech",
    name: "B.Tech Department",
    type: "academic",
    icon: GraduationCap,
    description: "Department of Computer Science & Engineering",
    position: { x: 60, y: 20 },
  },
  {
    id: "library",
    name: "Central Library",
    type: "facility",
    icon: Library,
    description: "24/7 access library with digital resources",
    position: { x: 40, y: 50 },
  },
  {
    id: "labs",
    name: "Computer Labs",
    type: "facility",
    icon: FlaskConical,
    description: "State-of-the-art computer and research labs",
    position: { x: 60, y: 50 },
  },
  {
    id: "cafeteria",
    name: "Student Cafeteria",
    type: "facility",
    icon: Utensils,
    description: "Multi-cuisine dining hall",
    position: { x: 20, y: 60 },
  },
  {
    id: "hostel-boys",
    name: "Boys Hostel",
    type: "hostel",
    icon: Home,
    description: "Residential facilities for male students",
    position: { x: 75, y: 35 },
  },
  {
    id: "hostel-girls",
    name: "Girls Hostel",
    type: "hostel",
    icon: Home,
    description: "Residential facilities for female students",
    position: { x: 75, y: 65 },
  },
  {
    id: "seminar",
    name: "Seminar Hall",
    type: "facility",
    icon: BookOpen,
    description: "Large auditorium for events and seminars",
    position: { x: 40, y: 75 },
  },
];

const CampusLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const getTypeColor = (type: Location["type"]) => {
    switch (type) {
      case "academic":
        return "bg-blue-500/20 border-blue-500 text-blue-700 dark:text-blue-300";
      case "administrative":
        return "bg-purple-500/20 border-purple-500 text-purple-700 dark:text-purple-300";
      case "facility":
        return "bg-green-500/20 border-green-500 text-green-700 dark:text-green-300";
      case "hostel":
        return "bg-orange-500/20 border-orange-500 text-orange-700 dark:text-orange-300";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Campus Locations</h1>
            <p className="text-muted-foreground mt-2">
              Explore the Graphic Era Hill University campus
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="bg-blue-500/10 border-blue-500">
            Academic Buildings
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 border-purple-500">
            Administrative
          </Badge>
          <Badge variant="outline" className="bg-green-500/10 border-green-500">
            Facilities
          </Badge>
          <Badge variant="outline" className="bg-orange-500/10 border-orange-500">
            Hostels
          </Badge>
        </div>
      </div>

      <div className="mb-6">
        <Button 
          onClick={() => window.open(CAMPUS_MAIN_LOCATION, '_blank')}
          className="w-full sm:w-auto"
          size="lg"
        >
          <MapPin className="w-5 h-5 mr-2" />
          View Full Campus on Google Maps
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-xl font-bold mb-4">Interactive Campus Map</h3>
          <div className="relative aspect-[16/10] bg-muted/30 rounded-lg border-2 border-border overflow-hidden">
            {/* Campus Map */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20">
              {/* Roads/Paths */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <path
                  d="M 0 50 Q 50 50 100 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 40 0 L 40 100"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Location Markers */}
              {locations.map((location) => {
                const Icon = location.icon;
                const isSelected = selectedLocation?.id === location.id;
                return (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                      isSelected ? "scale-125 z-10" : "scale-100 hover:scale-110"
                    }`}
                    style={{
                      left: `${location.position.x}%`,
                      top: `${location.position.y}%`,
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${getTypeColor(
                        location.type
                      )} ${isSelected ? "ring-4 ring-primary/50" : ""}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-medium mt-1 text-center max-w-[80px] leading-tight">
                      {location.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Click on any marker to view details about that location
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Location Details</h3>
          {selectedLocation ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${getTypeColor(
                    selectedLocation.type
                  )}`}
                >
                  <selectedLocation.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{selectedLocation.name}</h4>
                  <Badge variant="outline" className="mt-1 capitalize">
                    {selectedLocation.type}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{selectedLocation.description}</p>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => window.open(CAMPUS_MAIN_LOCATION, '_blank')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                View on Map
              </Button>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">Select a location on the map to view details</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-muted-foreground">
                Graphic Era Hill University<br />
                Bhimtal Campus, Nainital Road<br />
                Dehradun, Uttarakhand - 248002
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+91-135-2643060</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">info@gehu.ac.in</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CampusLocations;
