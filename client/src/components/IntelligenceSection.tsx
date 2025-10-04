import { Card } from "@/components/ui/card";
import { FileText, Bell, Users } from "lucide-react";
import climafixServices from "@assets/Screenshot 2025-10-04 121146_1759560551394.png";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Reports",
    description: "Focused reports around climate innovation for specific sectors"
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Updates",
    description: "Curated climate innovation from across the world & across climate sectors"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consulting",
    description: "Customized research & consulting for specific stakeholders"
  }
];

const stakeholders = [
  { name: "Startups", description: "Innovation support" },
  { name: "Investors", description: "Deal flow intelligence" },
  { name: "Industry", description: "Technology scouting" },
  { name: "Government", description: "Policy insights" },
  { name: "Researchers", description: "Collaboration opportunities" }
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card 
      className="p-8 hover-elevate transition-all cursor-pointer"
      onClick={() => console.log(`Clicked service: ${service.title}`)}
      data-testid={`service-${service.title.toLowerCase()}`}
    >
      <div className="space-y-4">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {service.icon}
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {service.description}
        </p>
      </div>
    </Card>
  );
}

export default function IntelligenceSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beyond the Summit: CLIMAFIX Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            CLIMAFIX provides year-round intelligence about high impact innovations for climate action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="bg-background rounded-xl p-8 border border-border">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
            Stakeholders We Assist
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stakeholders.map((stakeholder) => (
              <div 
                key={stakeholder.name} 
                className="text-center p-4 rounded-lg hover-elevate transition-all cursor-pointer"
                onClick={() => console.log(`Clicked stakeholder: ${stakeholder.name}`)}
                data-testid={`stakeholder-${stakeholder.name.toLowerCase()}`}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">{stakeholder.name}</h4>
                <p className="text-xs text-muted-foreground">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
