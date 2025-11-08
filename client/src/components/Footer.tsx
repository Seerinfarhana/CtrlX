import { Palette, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    about: [
      { label: "Our Story", href: "#" },
      { label: "Mission", href: "#" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
    ],
    quickLinks: [
      { label: "Explore Art", href: "#" },
      { label: "Find Artists", href: "#" },
      { label: "Organizations", href: "#" },
      { label: "FAQ", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Guidelines", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl font-bold">CULTURA</span>
            </div>
            <p className="text-background/80 mb-4">
              The Digital Museum of Tomorrow. Preserving Heritage Beyond Time.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@cultura.art</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>© 2025 CULTURA. All rights reserved. Where Art Meets Recognition.</p>
        </div>
      </div>
    </footer>
  );
}
