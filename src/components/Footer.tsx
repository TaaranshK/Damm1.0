import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span className="text-lg font-extrabold text-foreground">LMD</span>
              <p className="text-sm text-muted-foreground">Last Minute Deal</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Follow us and be updated</p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-card hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-card hover:opacity-80 transition-opacity">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-card hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["My Account", "Hotel Details", "Terms of Service", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                support@lastminutesdeal.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +91-6465952645
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Building no.54, Near Cyber Park-110023
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">©2026 Last minutes deal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
