import { Zap, CloudRain, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import permanentImage from "@/assets/permanent.png";

const features = [
  {
    icon: Zap,
    title: "Fast Application",
    description: "Crews can apply our system in a fraction of the time compared to traditional methods.",
  },
  {
    icon: CloudRain,
    title: "All-Weather Compatible",
    description: "Install in rain, snow, or extreme heat—no weather delays, no excuses.",
  },
  {
    icon: Truck,
    title: "Load-Tested for Trucks",
    description: "Engineered to handle heavy commercial traffic without cracking or deforming.",
  },
  {
    icon: Leaf,
    title: "Eco-Engineered Formula",
    description: "Sustainable materials that last longer mean fewer repairs and less waste.",
  },
];

export const SolutionSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solution" className="section-padding bg-asphalt-texture">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Our System
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built From the Ground Up
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not just a surface fix—a complete pavement repair revolution that
            bonds deep and lasts decades.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img
              src={permanentImage}
              alt="Permanent Road Repair"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
          </div>

          {/* Right: How It Works */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              How It Works
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Deep Substrate Bonding",
                  description:
                    "Our proprietary binding agent creates permanent cohesion with existing pavement layers—not just the surface.",
                },
                {
                  step: "02",
                  title: "Flex-Seal Technology",
                  description:
                    "The compound flexes with temperature changes instead of cracking, surviving freeze-thaw cycles intact.",
                },
                {
                  step: "03",
                  title: "Self-Reinforcing Matrix",
                  description:
                    "Expands slightly under compression to fill micro-gaps over time, strengthening the surrounding road structure.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <span className="font-heading font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              variant="hero"
              size="lg"
              className="mt-8"
            >
              See How It Works in Action
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-industrial text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
