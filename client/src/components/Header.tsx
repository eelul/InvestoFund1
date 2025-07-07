import { Link, useLocation } from "wouter";
import { Menu, ChevronDown, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import logoPath from "@assets/InvestoFund white background long.png";
import UserTypeModal from "./UserTypeModal";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navItems = [
    { 
      href: "/", 
      label: "Home" 
    },
    { 
      href: "/merchants", 
      label: "For Merchants",
      subItems: [
        { href: "/merchants/apply", label: "Apply Now" },
        { href: "/merchants/how-it-works", label: "How It Works" },
        { href: "/merchants/faq", label: "FAQ" }
      ]
    },
    { 
      href: "/brokers", 
      label: "For Brokers",
      subItems: [
        { href: "/brokers/submit-deal", label: "Submit a Deal" },
        { href: "/brokers/requirements", label: "Requirements" },
        { href: "/brokers/iso-faq", label: "ISO FAQ" }
      ]
    },
    { 
      href: "/investors", 
      label: "For Investors",
      subItems: [
        { href: "/investors/why-investofund", label: "Why InvestoFund" },
        { href: "/investors/example-returns", label: "Example Returns" },
        { href: "/investors/request-info", label: "Request Info" }
      ]
    },
    { 
      href: "/about", 
      label: "About Us" 
    },
    { 
      href: "/contact", 
      label: "Contact" 
    }
  ];

  const closeSheet = () => setIsOpen(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    if (isSignedIn) {
      window.location.href = '/dashboard';
    } else {
      setShowUserTypeModal(true);
    }
  };

  const handleUserTypeSelect = (userType: 'investor' | 'broker' | 'merchant') => {
    setShowUserTypeModal(false);
    switch (userType) {
      case 'investor':
        window.location.href = '/investors/request-info';
        break;
      case 'broker':
        window.location.href = '/brokers/submit-deal';
        break;
      case 'merchant':
        window.location.href = '/merchants/apply';
        break;
    }
  };

  const isActiveLink = (href: string, subItems?: any[]) => {
    if (location === href) return true;
    if (subItems) {
      return subItems.some(subItem => location === subItem.href);
    }
    return false;
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
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={handleNavClick}>
              <img 
                src={logoPath} 
                alt="InvestoFund" 
                className="h-10 w-auto max-w-[180px] md:max-w-[220px]"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => {
                if (item.subItems) {
                  return (
                    <DropdownMenu key={item.href}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`text-base font-medium transition-colors duration-200 flex items-center gap-1 h-auto p-2 ${
                            isActiveLink(item.href, item.subItems)
                              ? "text-brand-blue"
                              : "text-gray-700 hover:text-brand-blue"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-48">
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.href} asChild>
                            <Link
                              href={subItem.href}
                              onClick={handleNavClick}
                              className={`cursor-pointer ${
                                location === subItem.href ? "bg-brand-blue/10 text-brand-blue" : ""
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else {
                  return (
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
                  );
                }
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {isSignedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Account
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setShowUserTypeModal(true)}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={handleGetStarted}
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {item.subItems ? (
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">{item.label}</h3>
                          <div className="pl-4 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => {
                                  handleNavClick();
                                  closeSheet();
                                }}
                                className={`block text-sm py-2 px-3 rounded-md transition-colors ${
                                  location === subItem.href
                                    ? "bg-brand-blue text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => {
                            handleNavClick();
                            closeSheet();
                          }}
                          className={`block text-base font-medium py-3 px-4 rounded-md transition-colors ${
                            location === item.href
                              ? "bg-brand-blue text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 mt-6">
                    {isSignedIn ? (
                      <div className="space-y-2">
                        <Link
                          href="/dashboard"
                          onClick={() => {
                            handleNavClick();
                            closeSheet();
                          }}
                          className="block text-base font-medium py-3 px-4 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left"
                          onClick={() => {
                            // Handle logout
                            closeSheet();
                          }}
                        >
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => {
                            setShowUserTypeModal(true);
                            closeSheet();
                          }}
                        >
                          <LogIn className="w-4 h-4 mr-2" />
                          Login
                        </Button>
                        <Button
                          className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white"
                          onClick={() => {
                            handleGetStarted();
                            closeSheet();
                          }}
                        >
                          Get Started
                        </Button>
                      </div>
                    )}
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