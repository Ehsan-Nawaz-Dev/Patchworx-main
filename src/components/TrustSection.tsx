import { Star, Quote } from "lucide-react";
import patchworkImage from "@/assets/patchwork.png";
import potholesImage from "@/assets/pothholes.png";


export const TrustSection = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-wide">
        
        {/* Before/After Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img
              src={potholesImage}
              alt="Never deal with potholes again"
              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                Our Promise
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Never Deal with Potholes Again
              </h3>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img
              src={patchworkImage}
              alt="Hello Patchworx"
              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                The Solution
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Say Hello to Patchworx®
              </h3>
            </div>
          </div>
        </div>

        {/* Logos placeholder */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-muted-foreground mb-8 uppercase tracking-wider text-sm">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["State DOT", "City Works", "Highway Auth", "Infrastructure Co", "Municipal Eng"].map(
              (partner) => (
                <div
                  key={partner}
                  className="font-heading font-bold text-lg text-muted-foreground"
                >
                  {partner}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
