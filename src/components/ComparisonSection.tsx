import { Check, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    feature: "Install in Rain",
    coldMix: false,
    infrared: false,
    patchworx: true,
  },
  {
    feature: "Permanent Bond",
    coldMix: false,
    infrared: "partial",
    patchworx: true,
  },
  {
    feature: "Minimal Equipment",
    coldMix: true,
    infrared: false,
    patchworx: true,
  },
  {
    feature: "Lasts 5+ Years",
    coldMix: false,
    infrared: false,
    patchworx: true,
  },
  {
    feature: "Deep Substrate Bonding",
    coldMix: false,
    infrared: "partial",
    patchworx: true,
  },
  {
    feature: "Handles Heavy Traffic",
    coldMix: false,
    infrared: "partial",
    patchworx: true,
  },
  {
    feature: "Cost-Effective Long Term",
    coldMix: false,
    infrared: false,
    patchworx: true,
  },
];

const renderIcon = (value: boolean | string) => {
  if (value === true) {
    return (
      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
        <Check className="w-5 h-5 text-green-500" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <AlertTriangle className="w-5 h-5 text-yellow-500" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
      <X className="w-5 h-5 text-red-500" />
    </div>
  );
};

export const ComparisonSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="comparison" className="section-padding bg-gradient-section">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Compare Options
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See the Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not all pavement repairs are created equal. Compare your options and
            see why Patchworx stands apart.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-muted-foreground font-medium uppercase text-sm tracking-wide">
                  Feature
                </th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium uppercase text-sm tracking-wide">
                  Cold Mix
                </th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium uppercase text-sm tracking-wide">
                  Infrared Reheat
                </th>
                <th className="text-center py-4 px-4 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-t-xl -z-10" />
                  <span className="text-primary font-bold uppercase text-sm tracking-wide">
                    Patchworx®
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-t border-border/50 ${
                    index % 2 === 0 ? "bg-muted/20" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-foreground font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {renderIcon(row.coldMix)}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {renderIcon(row.infrared)}
                    </div>
                  </td>
                  <td className="py-4 px-4 relative">
                    <div className="absolute inset-0 bg-primary/10 -z-10" />
                    <div className="flex justify-center">
                      {renderIcon(row.patchworx)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to upgrade from temporary fixes to permanent solutions?
          </p>
          <Button onClick={scrollToContact} variant="hero" size="lg">
            Get Your Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
