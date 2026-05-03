import { useEffect, useState } from "react";
import { Shield, Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-px max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-primary">
          <span className="h-9 w-9 rounded-lg bg-primary text-primary-foreground grid place-items-center">
            <Shield size={18} />
          </span>
          <span className="text-lg">SecureShield</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919999999999" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Phone size={16} /> +91 99999 99999
          </a>
          <a href="#quote" className="inline-flex items-center rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground px-4 py-2 text-sm font-semibold transition-colors shadow-sm">
            Get Free Quote
          </a>
        </div>
        <button className="md:hidden text-primary" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t">
          <div className="container-px max-w-7xl mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80 font-medium">
                {l.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setOpen(false)} className="rounded-lg bg-accent text-accent-foreground px-4 py-3 text-center font-semibold">
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
