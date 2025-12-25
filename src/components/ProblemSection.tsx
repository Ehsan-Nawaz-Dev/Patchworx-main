import { AlertTriangle, DollarSign, RefreshCw } from "lucide-react";
import differenceImage from "@/assets/difference.png";

const problems = [
  {
    icon: RefreshCw,
    title: "Frequent Repairs",
    description:
      "Traditional patches fail within 6-12 months, creating an endless cycle of re-repairs and wasted labor.",
  },
  {
    icon: AlertTriangle,
    title: "Poor Adhesion",
    description:
      "Cold mix and throw-and-go methods don't bond to existing pavement—they just sit on top and crack apart.",
  },
  {
    icon: DollarSign,
    title: "Wasted Budgets",
    description:
      "Billions spent annually on temporary fixes. 50M+ potholes filled yearly—and most come back within months.",
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-gradient-section">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            The Problem
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Roads Keep Crumbling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            And what no one's telling you about the patching industry's dirty
            secret—short-term fixes designed to fail.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="card-industrial group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Visual */}
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img
            src={differenceImage}
            alt="Old Way vs New Way - Stop fixing the same spots over and over"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          {/* <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Stop the Endless Repair Cycle
            </h3>
            <p className="text-foreground/80 max-w-lg">
              Traditional methods trap you in a loop of temporary fixes. Our
              permanent solution breaks the cycle for good.
            </p>
          </div> */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "50M+", label: "Potholes Filled Yearly" },
            { value: "$3B+", label: "Wasted on Temp Fixes" },
            { value: "6-12mo", label: "Average Patch Lifespan" },
            { value: "80%", label: "Failures from Poor Bond" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
