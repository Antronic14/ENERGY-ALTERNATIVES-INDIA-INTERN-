import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SpeakersGrid from "@/components/SpeakersGrid";
import ThemesSection from "@/components/ThemesSection";
import AgendaSection from "@/components/AgendaSection";
import TimelineSection from "@/components/TimelineSection";
import PartnersSection from "@/components/PartnersSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <SpeakersGrid />
        <ThemesSection />
        <AgendaSection />
        <TimelineSection />
        <PartnersSection />
        <IntelligenceSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
