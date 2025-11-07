import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2" data-testid="link-home-logo">
            <Sparkles className="w-6 h-6 text-primary" data-testid="icon-logo" />
            <span className="font-serif text-xl font-semibold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent" data-testid="text-brand-name">
              Glamour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid={`link-${item.label.toLowerCase()}`}
                  className={`transition-smooth ${
                    location === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                size="sm"
                className="ml-4 glow-primary-sm"
                data-testid="button-book-now-nav"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover-elevate"
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/10">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  className={`w-full text-left px-4 py-2 rounded-md transition-smooth ${
                    location === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-accent"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="w-full mt-4 glow-primary-sm"
                data-testid="button-book-now-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
