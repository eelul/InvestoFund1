import { Link, useLocation } from "wouter";
import { CheckCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-brand-dark">InvestoFund</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-brand-blue"
                    : "text-brand-gray hover:text-brand-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/investors">
              <Button className="bg-brand-blue hover:bg-blue-600">
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
                    <Button className="w-full bg-brand-blue hover:bg-blue-600">
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
