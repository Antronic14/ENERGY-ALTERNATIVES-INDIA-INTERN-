import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Speaker {
  name: string;
  organization: string;
  role?: string;
  image?: string;
}

//todo: remove mock functionality
const mockSpeakers: Speaker[] = [
  { name: "Ashok Jhunjhunwala", organization: "IITM Research Park", role: "Keynote" },
  { name: "Sivaram Pillai", organization: "Proklean Technologies" },
  { name: "Mirik Gogri", organization: "Spectrum Impact" },
  { name: "Suhas Baxi", organization: "Biofuel Circle" },
  { name: "Vishesh Rajaram", organization: "Speciale Invest" },
  { name: "Ajit Shah", organization: "Yantra Harvest" },
  { name: "Shaji John", organization: "Ohmium" },
  { name: "Mridula Ramesh", organization: "Chennai Angel Network" },
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const initials = speaker.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div 
      className="group relative flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all cursor-pointer"
      data-testid={`speaker-${speaker.name.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={() => console.log(`Clicked speaker: ${speaker.name}`)}
    >
      <Avatar className="w-24 h-24 border-2 border-primary/20">
        <AvatarImage src={speaker.image} alt={speaker.name} />
        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
          {initials}
        </AvatarFallback>
      </Avatar>
      
      <div className="text-center space-y-1">
        <h4 className="font-semibold text-sm text-foreground">{speaker.name}</h4>
        <p className="text-xs text-muted-foreground">{speaker.organization}</p>
        {speaker.role && (
          <Badge variant="secondary" className="text-xs mt-2">{speaker.role}</Badge>
        )}
      </div>
    </div>
  );
}

export default function SpeakersGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Impacters @ CLIMAFIX 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders, successful entrepreneurs, and climate innovation experts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
          {mockSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => console.log('View all speakers clicked')}
            data-testid="button-view-all-speakers"
          >
            View All 70+ Speakers
          </Button>
        </div>
      </div>
    </section>
  );
}
