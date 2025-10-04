import { Card } from "@/components/ui/card";
import { Leaf, Zap, Atom, Brain } from "lucide-react";

interface Theme {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const themes: Theme[] = [
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Bio-Economy for Decarbonization",
    description: "Sustainable bio-based solutions and circular economy innovations",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Energy Efficiency & Digital Solutions",
    description: "Smart energy management and digital transformation for sustainability",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: <Atom className="w-10 h-10" />,
    title: "Deep Tech for Net Zero",
    description: "Advanced technologies driving carbon neutrality and climate action",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI for Climate Action",
    description: "Artificial intelligence applications in climate tech and sustainability",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Card 
      className="relative p-8 hover-elevate transition-all cursor-pointer overflow-hidden group"
      onClick={() => console.log(`Clicked theme: ${theme.title}`)}
      data-testid={`theme-${theme.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative z-10 space-y-4">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {theme.icon}
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {theme.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {theme.description}
        </p>
      </div>
    </Card>
  );
}

export default function ThemesSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Summit Themes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four powerful levers for industrial decarbonization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((theme) => (
            <ThemeCard key={theme.title} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
