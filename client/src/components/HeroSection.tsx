import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import climafixHero from "@assets/Screenshot 2025-10-04 121132_1759560551394.png";

export default function HeroSection() {
  const handleRegister = () => {
    console.log('Register clicked');
  };

  const handleViewAgenda = () => {
    console.log('View Agenda clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={climafixHero} 
          alt="CLIMAFIX Innovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-teal-900/85 to-teal-800/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="px-4 py-2 bg-climafix-orange/20 backdrop-blur-sm border border-climafix-orange/30 rounded-full text-climafix-orange text-sm font-medium">
              India's Largest Climate Startup Innovation Summit
            </span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
            CLIMAFIX<br />
            <span className="text-climafix-teal">Summit 2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Where Climate Innovation Meets Industry Impact
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-climafix-teal" />
              <span className="text-lg font-medium">September 11-12, 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-gray-400" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-climafix-teal" />
              <span className="text-lg font-medium">IIT Madras Research Park, Chennai</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8">
            <Button 
              size="lg" 
              onClick={handleRegister}
              className="bg-climafix-orange hover:bg-climafix-orange/90 text-white font-semibold text-lg px-8 py-6 h-auto border-0"
              data-testid="button-register-summit"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleViewAgenda}
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 h-auto"
              data-testid="button-view-agenda"
            >
              View Full Agenda
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
