import { Button } from "@/components/ui/button";
import trafficImage from "@/assets/traffic.png";

const steps = [
  {
    step: "01",
    title: "Micro-Milling Preparation",
    description:
      "We precisely mill the damaged area to create optimal surface texture for maximum adhesion. No shortcuts, no half-measures.",
  },
  {
    step: "02",
    title: "Edge Sealing",
    description:
      "Critical step most contractors skip. We seal all edges to prevent water intrusion—the #1 cause of repair failure.",
  },
  {
    step: "03",
    title: "Patchworx Bond Layer",
    description:
      "Our proprietary compound is applied and bonds chemically with the sublayer, creating a unified structure that moves as one.",
  },
  {
    step: "04",
    title: "Surface Integration",
    description:
      "Final compaction integrates the repair seamlessly with surrounding pavement. No bumps, no edges, no weak points.",
  },
];

export const LongTermSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="long-term" className="section-padding bg-asphalt-texture">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Long-Term Approach
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Not Just a Patch.{" "}
              <span className="text-primary">A Revolution.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              For city planners, DOT engineers, and contractors who are done
              with the repair-repeat cycle. Our long-term redesign strategy
              fixes roads that fail prematurely—without full repaving.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <span className="font-heading font-bold text-primary group-hover:text-primary-foreground transition-colors">
                        {item.step}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-12 bg-primary/30 ml-[23px] mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
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
              className="mt-10"
            >
              Talk to an Engineer
            </Button>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={trafficImage}
                alt="Built for Heavy Traffic"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="font-heading text-4xl font-bold text-primary mb-1">
                30+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Year Lifespan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
