import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import logoPath from "@assets/IF Logo 1.1_1751571539944.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/investors", label: "For Investors" },
    { href: "/brokers", label: "For ISOs & Brokers" },
    { href: "/merchants", label: "For Merchants" },
    { href: "/contact", label: "Contact" },
  ];

  const closeSheet = () => setIsOpen(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleNavClick}>
            <img 
              src={logoPath} 
              alt="InvestoFund" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`text-base font-medium transition-colors duration-200 py-2 ${
                  location === item.href
                    ? "text-brand-blue border-b-2 border-brand-blue"
                    : "text-gray-700 hover:text-brand-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/investors">
              <Button className="bg-brand-blue hover:bg-brand-blue-light text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeSheet}
                    className={`text-lg font-medium transition-colors ${
                      location === item.href
                        ? "text-brand-blue"
                        : "text-brand-gray hover:text-brand-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Link href="/investors" onClick={closeSheet}>
                    <Button className="w-full bg-brand-blue hover:bg-brand-blue-light text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
