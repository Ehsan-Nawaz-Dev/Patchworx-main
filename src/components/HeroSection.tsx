import { Button } from "@/components/ui/button";
import mainImage from "@/assets/main.png";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[170vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={mainImage}
          alt="Patchworx Paving - Reinventing Road Repair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-16 md:pt-24 md:pb-40">
        <div className="max-w-3xl -mt-10 md:-mt-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Revolutionary Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Tired of{" "}
            <span className="text-primary">Patch-and-Pray?</span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="hero"
              size="xl"
              className="w-full sm:w-auto"
            >
              Request Demo
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline-white"
              size="xl"
              className="w-full sm:w-auto"
            >
              Get a Quote
            </Button>
          </div>

          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5  left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2 ">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
