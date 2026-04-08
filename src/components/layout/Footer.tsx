import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = ["My Account", "Hotel Details", "Terms of Service", "Privacy Policy"];

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Instagram", icon: Instagram },
];

const contactItems = [
  { icon: Mail, text: "support@lastminutesdeal.com" },
  { icon: Phone, text: "+91-6465952645" },
  { icon: MapPin, text: "Building no.54, Near Cyber Park-110023" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-3">
              <span className="text-lg font-extrabold text-foreground">LMD</span>
              <p className="text-sm text-muted-foreground">Last Minute Deal</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Follow us and be updated</p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-card hover:opacity-80 transition-opacity"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">©2026 Last minutes deal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
