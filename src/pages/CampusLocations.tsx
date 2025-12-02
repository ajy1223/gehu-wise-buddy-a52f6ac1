import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CAMPUS_MAIN_LOCATION = "https://www.google.com/local/place/fid/0x39092bca3fc0ccf3:0xd19900de8c24dbee/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D7YwfjP1SRPfqDwRtHVr_HA%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D339.167%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFjdZd2ZqUDFTUlBmcUR3UnRIVnJfSEE%3D&sa=X&ved=2ahUKEwju98TE2Z6RAxWfVmwGHWZcHyUQpx96BAgsEBI";

const VIRTUAL_TOURS = [
  { id: 1, url: "https://my.matterport.com/show/?m=Zo3xPetRXsv", name: "Virtual Campus Tour 1" },
  { id: 2, url: "https://my.matterport.com/show/?m=2GSMsfE1wWv", name: "Virtual Campus Tour 2" },
  { id: 3, url: "https://my.matterport.com/show/?m=NueAkYGogdP", name: "Virtual Campus Tour 3" },
  { id: 4, url: "https://my.matterport.com/show/?m=EnU1rVA4jxw", name: "Virtual Campus Tour 4" },
  { id: 5, url: "https://my.matterport.com/show/?m=opH96dhqNmz", name: "Virtual Campus Tour 5" },
];

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
            <p className="text-muted-foreground mt-2">
              Explore the Graphic Era Hill University campus
            </p>
          </div>
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

      <Card className="p-6 mb-8">
        <h3 className="text-2xl font-bold mb-6">360° Virtual Campus Tours</h3>
        <p className="text-muted-foreground mb-6">
          Explore the GEHU campus from anywhere with our immersive virtual tours
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VIRTUAL_TOURS.map((tour) => (
            <Button
              key={tour.id}
              onClick={() => window.open(tour.url, '_blank')}
              variant="outline"
              size="lg"
              className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-primary/5 hover:border-primary transition-all"
            >
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-medium">{tour.name}</span>
            </Button>
          ))}
        </div>
      </Card>

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
