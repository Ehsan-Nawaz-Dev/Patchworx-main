import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-heading font-bold text-2xl text-foreground mb-4">
              PATCHWORX<span className="text-primary">®</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Reinventing road repair with permanent pavement solutions. Built
              for the next 30 years, not the next freeze-thaw cycle.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:1-800-PATCHWORX"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@patchworxpaving.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#problem", label: "The Problem" },
                { href: "#solution", label: "Our System" },
                { href: "#comparison", label: "Compare" },
                { href: "#long-term", label: "Long-Term" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>207 947-1999</li>
              <li>info@patchworxpavement.com</li>
              <li>PO Box 52, Detroit, ME 04929</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Patchworx Paving®. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/GB.pdf" target="_blank" className="hover:text-primary transition-colors">
              Global Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
