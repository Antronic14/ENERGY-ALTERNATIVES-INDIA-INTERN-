import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Building2 } from "lucide-react";

export default function CTASection() {
  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "For Startups",
      description: "Connect with 150+ investors and explore IIT Madras collaboration"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "For Corporates",
      description: "Access 400+ startups and discover cutting-edge innovations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "For Investors",
      description: "Discover high-potential climate tech startups and deal flow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-teal-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Be Part of the Climate Revolution
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join 600+ participants at India's premier climate innovation summit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              size="lg"
              className="bg-climafix-orange hover:bg-climafix-orange/90 text-white font-semibold text-lg px-8 py-6 h-auto border-0"
              onClick={() => console.log('Register for summit clicked')}
              data-testid="button-cta-register"
            >
              Register for Summit 2025
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 h-auto"
              onClick={() => console.log('Become partner clicked')}
              data-testid="button-cta-partner"
            >
              Become a Partner
            </Button>
          </div>
          <p className="text-sm text-white/70">
            Limited seats available • Early bird pricing ends soon
          </p>
        </div>
      </div>
    </section>
  );
}
