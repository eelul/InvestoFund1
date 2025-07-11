import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import logoPath from "@assets/InvestoFund white background long.png";
import UserTypeModal from "./UserTypeModal";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // This would come from auth context in real app

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

  const handleGetStarted = () => {
    if (isSignedIn) {
      // Navigate to dashboard or user-specific page
      window.location.href = '/dashboard';
    } else {
      setShowUserTypeModal(true);
    }
  };

  const handleUserTypeSelect = (userType: 'investor' | 'broker' | 'merchant') => {
    setShowUserTypeModal(false);
    // Navigate to appropriate preview dashboard based on user type
    switch (userType) {
      case 'investor':
        window.location.href = '/dashboard/investor';
        break;
      case 'broker':
        window.location.href = '/dashboard/broker-preview';
        break;
      case 'merchant':
        window.location.href = '/dashboard/merchant-preview';
        break;
    }
  };

  return (
    <>
      <UserTypeModal 
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
        onUserTypeSelect={handleUserTypeSelect}
      />
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleNavClick}>
            <img 
              src={logoPath} 
              alt="InvestoFund" 
              className="h-12 w-auto max-w-[200px] md:max-w-[250px]"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
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
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={handleGetStarted}
              className="bg-brand-blue hover:bg-brand-blue-light text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
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
                  <Button 
                    onClick={() => {
                      closeSheet();
                      handleGetStarted();
                    }}
                    className="w-full bg-brand-blue hover:bg-brand-blue-light text-white py-3 px-6 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
}
