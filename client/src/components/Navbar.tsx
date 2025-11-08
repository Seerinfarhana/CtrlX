import { Button } from "@/components/ui/button";
import { Palette, Search, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavbarProps {
  onSearch?: (query: string) => void;
  isDark?: boolean;
  onToggleDark?: () => void;
}

export function Navbar({ onSearch, isDark = false, onToggleDark }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Palette className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-bold">CULTURA</span>
          </div>

          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artworks, artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </form>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={onToggleDark}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="outline" data-testid="button-login">
              Log In
            </Button>
            <Button data-testid="button-signup">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
