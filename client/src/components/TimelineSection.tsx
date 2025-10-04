import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Summit {
  year: string;
  highlights: string[];
  stats: { label: string; value: string }[];
}

//todo: remove mock functionality
const summits: Summit[] = [
  {
    year: "2025",
    highlights: [
      "AI for Climate Action focus",
      "400+ startups participating",
      "Deep Tech for Net Zero sessions",
      "Industry-Academia collaboration"
    ],
    stats: [
      { label: "Startups", value: "400+" },
      { label: "Investors", value: "150+" }
    ]
  },
  {
    year: "2024",
    highlights: [
      "Early Stage Startup Pitches",
      "Ask the VC sessions",
      "Tech Transfer workshops",
      "Namma Chennai Startup Awards"
    ],
    stats: [
      { label: "Startups", value: "70" },
      { label: "Sessions", value: "7" }
    ]
  },
  {
    year: "2023",
    highlights: [
      "8 Climate sectors covered",
      "Green Hydrogen Workshop",
      "TITANIC & Circular sessions",
      "2-day comprehensive agenda"
    ],
    stats: [
      { label: "Experts", value: "50+" },
      { label: "Partners", value: "30+" }
    ]
  },
  {
    year: "2022",
    highlights: [
      "Inaugural CLIMAFIX Summit",
      "Key stakeholders united",
      "Foundation year",
      "Chennai climate ecosystem launch"
    ],
    stats: [
      { label: "Attendees", value: "200+" },
      { label: "Days", value: "2" }
    ]
  }
];

function TimelineCard({ summit, index }: { summit: Summit; index: number }) {
  const isCurrent = summit.year === "2025";
  
  return (
    <Card 
      className={`relative p-6 hover-elevate transition-all ${isCurrent ? 'border-primary shadow-lg' : ''}`}
      data-testid={`timeline-${summit.year}`}
    >
      {isCurrent && (
        <Badge className="absolute -top-3 left-6 bg-climafix-orange text-white">
          Upcoming
        </Badge>
      )}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-3xl font-bold text-foreground">{summit.year}</h3>
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <ul className="space-y-2">
          {summit.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 pt-4 border-t border-border">
          {summit.stats.map((stat) => (
            <div key={stat.label} className="flex-1">
              <div className="text-xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function TimelineSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Summit Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Four years of bringing climate innovation stakeholders together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summits.map((summit, index) => (
            <TimelineCard key={summit.year} summit={summit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
