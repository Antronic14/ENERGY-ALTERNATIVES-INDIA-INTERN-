import { Users, Briefcase, Lightbulb, Calendar } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

function StatCard({ icon, number, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-6" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-foreground animate-count-up">
          {number}
        </div>
        <div className="text-sm md:text-base text-muted-foreground mt-1">{label}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { icon: <Lightbulb className="w-8 h-8" />, number: "400+", label: "Climate Startups" },
    { icon: <Briefcase className="w-8 h-8" />, number: "150+", label: "Investors" },
    { icon: <Users className="w-8 h-8" />, number: "70+", label: "Expert Speakers" },
    { icon: <Calendar className="w-8 h-8" />, number: "4", label: "Key Themes" },
  ];

  return (
    <section className="py-16 bg-card border-y border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
