import { Card } from "@/components/ui/card";

//todo: remove mock functionality - using placeholder partner logos
const partnerCategories = [
  {
    title: "Ecosystem Partners",
    partners: ["IIT Madras", "Startup TN", "T-Hub", "IIT-M Research Park"]
  },
  {
    title: "Investment Partners",
    partners: ["Avaana Capital", "Speciale Invest", "Chennai Angels", "Anicut Capital"]
  },
  {
    title: "Innovation Partners",
    partners: ["Carbon Zero Challenge", "SwissNex India", "Campus Angels", "We Founder Circle"]
  }
];

function PartnerLogo({ name }: { name: string }) {
  const initials = name.split(' ').map(w => w[0]).join('').substring(0, 3);
  
  return (
    <div 
      className="flex items-center justify-center p-6 rounded-lg border border-border hover-elevate transition-all cursor-pointer group"
      onClick={() => console.log(`Clicked partner: ${name}`)}
      data-testid={`partner-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-center">
        <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
          <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
            {initials}
          </span>
        </div>
        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Collaborating with leading organizations to drive climate innovation
          </p>
        </div>

        <div className="space-y-12">
          {partnerCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.partners.map((partner) => (
                  <PartnerLogo key={partner} name={partner} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
