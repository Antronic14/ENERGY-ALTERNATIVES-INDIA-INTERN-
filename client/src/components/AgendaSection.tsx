import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Clock, Download } from "lucide-react";

interface AgendaItem {
  time: string;
  title: string;
  description?: string;
}

//todo: remove mock functionality
const day1Agenda: AgendaItem[] = [
  { time: "09:30 AM", title: "Inauguration & Partner Introduction" },
  { time: "10:00 AM", title: "Keynote: Innovation for Net Zero", description: "Ashok Jhunjhunwala, IITM Research Park" },
  { time: "11:30 AM", title: "Pitch Fest 1: Bio-Economy & Energy Efficiency" },
  { time: "01:00 PM", title: "Lunch Break" },
  { time: "02:00 PM", title: "Tech Transfer Session: Industry-Innovator Collaboration" },
  { time: "03:30 PM", title: "Impact Talks: Deep Tech for Net Zero" },
  { time: "05:00 PM", title: "Pitch Fest 2: AI for Climate & Digital Solutions" },
  { time: "06:30 PM", title: "Namma Chennai CLIMAFIX Startup Awards" },
  { time: "07:30 PM", title: "Networking Dinner" },
];

const day2Agenda: AgendaItem[] = [
  { time: "09:30 AM", title: "Impact Talks: Scaling Climate Startups" },
  { time: "11:45 AM", title: "Ask the VC: Climate Startups Q&A with 150 VCs" },
  { time: "01:15 PM", title: "Lunch Break" },
  { time: "02:15 PM", title: "Pitch Fest 3: Final Startup Presentations" },
  { time: "04:30 PM", title: "Pitch Fest Awards Ceremony" },
  { time: "05:00 PM", title: "Closing Ceremony" },
];

function AgendaItem({ item }: { item: AgendaItem }) {
  return (
    <div className="flex gap-4 p-4 rounded-lg hover-elevate transition-all group" data-testid={`agenda-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex-shrink-0">
        <div className="flex items-center gap-2 text-primary">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{item.time}</span>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        )}
      </div>
    </div>
  );
}

export default function AgendaSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Summit Agenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Two days packed with insights, networking, and innovation
          </p>
        </div>

        <Tabs defaultValue="day1" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2" data-testid="tabs-agenda">
            <TabsTrigger value="day1" data-testid="tab-day1">Day 1 - Sept 11</TabsTrigger>
            <TabsTrigger value="day2" data-testid="tab-day2">Day 2 - Sept 12</TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="space-y-2">
            <Card className="p-6">
              <div className="space-y-2">
                {day1Agenda.map((item, index) => (
                  <AgendaItem key={index} item={item} />
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="day2" className="space-y-2">
            <Card className="p-6">
              <div className="space-y-2">
                {day2Agenda.map((item, index) => (
                  <AgendaItem key={index} item={item} />
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button 
            size="lg"
            onClick={() => console.log('Download agenda clicked')}
            data-testid="button-download-agenda"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full Agenda PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
