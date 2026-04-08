import { useEffect, useState } from "react";
import { Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Live", href: "/", dot: true },
  { label: "Stays", href: "#" },
  { label: "Buffets", href: "#" },
  { label: "Events", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Subtle elevation after the user starts scrolling.
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-card transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-xs font-medium text-foreground">Last</span>
          <span className="text-sm font-extrabold text-foreground -mt-0.5">Minutes</span>
          <span className="text-xs font-bold text-primary -mt-0.5">Deal</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
              {item.dot && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-0.5 -translate-y-1" />
              )}
            </Link>
          ))}
        </div>

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
}
