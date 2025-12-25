import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { LongTermSection } from "@/components/LongTermSection";
import { TrustSection } from "@/components/TrustSection";
import { ContactSection } from "@/components/ContactSection";
import { LegalSection } from "@/components/LegalSection";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ComparisonSection />
        <LongTermSection />
        <TrustSection />
        <ContactSection />
        <LegalSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
