import { Button } from "@/components/ui/button";
import { Palette, Search, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "wouter";

interface NavbarProps {
  onSearch?: (query: string) => void;
  isDark?: boolean;
  onToggleDark?: () => void;
}

export function Navbar({ onSearch, isDark = false, onToggleDark }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    console.log("Search query:", searchQuery);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "/explore" },
    { label: "Artists", href: "/artists" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate" data-testid="link-home">
              <Palette className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl font-bold">CULTURA</span>
            </a>
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search"
                />
              </div>
            </form>

            <Button
              size="icon"
              variant="ghost"
              onClick={onToggleDark}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Link href="/login">
              <Button variant="outline" data-testid="button-login">
                Log In
              </Button>
            </Link>

            <Link href="/signup">
              <Button data-testid="button-signup">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
