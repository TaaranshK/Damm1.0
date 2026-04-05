import { Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Live", href: "/", dot: true },
  { label: "Stays", href: "#" },
  { label: "Buffets", href: "#" },
  { label: "Events", href: "#" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-card transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-xs font-medium text-foreground">Last</span>
          <span className="text-sm font-extrabold text-foreground -mt-0.5">Minutes</span>
          <span className="text-xs font-bold text-primary -mt-0.5">Deal</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
              {link.dot && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-0.5 -translate-y-1" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
