import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Microsoft 365", path: "/services/microsoft-365" },
  { name: "Azure Services", path: "/services/azure" },
  { name: "AWS Solutions", path: "/services/aws" },
  { name: "Google Workspace", path: "/services/google-workspace" },
  { name: "Specialized Services", path: "/services/specialized" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src="/assets/logo.png" alt="The Cloud Sol" className="h-12 w-auto brightness-100 " />
            <p className="text-sm text-primary-foreground/80 mb-0">
              Your trusted partner in cloud transformation. We help businesses leverage the power of Microsoft 365, Azure, AWS, and Google Workspace.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/the-cloud-sol/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/thecloudsol/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@thecloudsol.com" className="hover:text-secondary transition-colors">
                  info@thecloudsol.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919662330413" className="hover:text-secondary transition-colors">
                  +91 9662330413
                </a>
              </li>
              
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=436+Vihav+Trade+Center+Near+Waves+Club+Bhayli+Vadodara+Gujarat+391410"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                       Vadodara, Gujarat 391410, India
                      </a>
                    </li>
                    
                    <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=1+Horwood+Pl+Parramatta+2150+NSW+Australia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        1 Horwood Pl, Parramatta 2150, NSW, Australia
                      </a>
                    </li>

            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} The Cloud Sol. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
