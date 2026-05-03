import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px max-w-7xl mx-auto py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-9 w-9 rounded-lg bg-accent grid place-items-center"><Shield size={18} /></span>
            SecureShield
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Trusted insurance advisors helping families and businesses protect what matters most.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#why" className="hover:text-accent">Why Choose Us</a></li>
            <li><a href="#process" className="hover:text-accent">How it Works</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>Life Insurance</li>
            <li>Health Insurance</li>
            <li>Car Insurance</li>
            <li>Travel & Business</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>+91 99999 99999</li>
            <li>hello@secureshield.com</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} SecureShield Insurance Advisors. Powered by TechHim Solutions.
      </div>
    </footer>
  );
}
