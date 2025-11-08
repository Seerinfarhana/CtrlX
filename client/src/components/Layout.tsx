import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useState } from "react";
import { useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);
  const [location] = useLocation();

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    console.log("Dark mode toggled:", !isDark);
  };

  const isAuthPage = location === "/login" || location === "/signup";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onSearch={(query) => console.log("Search:", query)}
        isDark={isDark}
        onToggleDark={toggleDark}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
