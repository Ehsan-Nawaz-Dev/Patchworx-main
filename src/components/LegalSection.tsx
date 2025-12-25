import { useState } from "react";
import { Shield, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    icon: Shield,
    content: `
      <h3>1. Information We Collect</h3>
      <p>We collect information you provide directly to us, such as when you request a quote, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, company/organization name, and details about your road repair needs.</p>
      
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries and provide quotes</li>
        <li>Send you technical information about our products</li>
        <li>Communicate with you about projects and services</li>
        <li>Improve our website and services</li>
      </ul>
      
      <h3>3. Information Sharing</h3>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.</p>
      
      <h3>4. Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h3>5. Cookies</h3>
      <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
      
      <h3>6. Contact Us</h3>
      <p>If you have questions about this Privacy Policy, please contact us at info@patchworxpaving.com or call 1-800-PATCHWORX.</p>
      
      <p class="text-sm text-muted-foreground mt-6">Last updated: December 2024</p>
    `,
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    content: `
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using the Patchworx Paving® website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
      
      <h3>2. Services Description</h3>
      <p>Patchworx Paving® provides permanent pavement repair solutions for municipalities, DOTs, and private contractors. All services are subject to separate contractual agreements.</p>
      
      <h3>3. Intellectual Property</h3>
      <p>All content on this website, including text, graphics, logos, and images, is the property of Patchworx Paving® and is protected by copyright and trademark laws. Unauthorized use is prohibited.</p>
      
      <h3>4. Quote Requests</h3>
      <p>Submitting a quote request does not constitute a binding agreement. All quotes are estimates and subject to site inspection and final project specifications.</p>
      
      <h3>5. Warranty Information</h3>
      <p>Product and service warranties are provided separately in contractual agreements. General warranty information on this website is for informational purposes only.</p>
      
      <h3>6. Limitation of Liability</h3>
      <p>Patchworx Paving® shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.</p>
      
      <h3>7. Governing Law</h3>
      <p>These terms shall be governed by and construed in accordance with applicable federal and state laws.</p>
      
      <h3>8. Changes to Terms</h3>
      <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.</p>
      
      <p class="text-sm text-muted-foreground mt-6">Last updated: December 2024</p>
    `,
  },
};

export const LegalSection = () => {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const openModal = (type: "privacy" | "terms") => {
    setActiveModal(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Legal
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Policies & Terms
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            {/* Privacy Policy Card */}
            <button
              onClick={() => openModal("privacy")}
              className="card-industrial flex-1 flex items-center gap-4 text-left group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Privacy Policy
                </h3>
                <p className="text-sm text-muted-foreground">
                  How we handle your data
                </p>
              </div>
            </button>

            {/* Terms of Service Card */}
            <button
              onClick={() => openModal("terms")}
              className="card-industrial flex-1 flex items-center gap-4 text-left group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Terms of Service
                </h3>
                <p className="text-sm text-muted-foreground">
                  Usage terms & conditions
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm animate-fade-in" />

          {/* Modal Content */}
          <div
            className="relative bg-card border border-border rounded-2xl shadow-card w-full max-w-2xl max-h-[85vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                {activeModal === "privacy" ? (
                  <Shield className="w-6 h-6 text-primary" />
                ) : (
                  <FileText className="w-6 h-6 text-primary" />
                )}
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  {legalContent[activeModal].title}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div
              className="p-6 overflow-y-auto max-h-[calc(85vh-88px)] legal-content"
              dangerouslySetInnerHTML={{
                __html: legalContent[activeModal].content,
              }}
            />
          </div>
        </div>
      )}

      {/* Styles for legal content */}
      <style>{`
        .legal-content h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: hsl(var(--foreground));
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .legal-content h3:first-child {
          margin-top: 0;
        }
        .legal-content p {
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .legal-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .legal-content li {
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};
