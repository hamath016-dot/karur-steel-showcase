import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto section-padding">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">KARUR STEELS</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted partner for quality steel products in Karur, Tamil Nadu.
            Building the future with strength and reliability since 2005.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent shrink-0" />
              <span>9/67-1, chinnandankovil road, Periyar arch east, Karur-639002</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="tel:+919842448098" className="hover:text-accent transition-colors">
                +91 9842448098
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent shrink-0" />
              <a href="mailto:info@karursteels.com" className="hover:text-accent transition-colors">
                info@karursteels.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Karur Steels. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
