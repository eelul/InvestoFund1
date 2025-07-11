import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Building, LogIn } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserTypeSelect: (userType: 'investor' | 'broker' | 'merchant') => void;
}

export default function UserTypeModal({ isOpen, onClose, onUserTypeSelect }: UserTypeModalProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const userTypes = [
    {
      id: 'investor',
      title: 'Investor',
      icon: TrendingUp,
      slogan: 'Earn passive returns through MCA investments',
      description: 'Capital providers seeking 50% profit sharing on merchant funding opportunities',
      color: 'border-brand-teal bg-brand-teal/5 hover:bg-brand-teal/10',
      iconColor: 'text-brand-teal'
    },
    {
      id: 'broker',
      title: 'ISO/Broker',
      icon: Users,
      slogan: 'Submit deals and earn competitive commissions',
      description: 'Independent sales organizations connecting merchants with funding solutions',
      color: 'border-brand-blue bg-brand-blue/5 hover:bg-brand-blue/10',
      iconColor: 'text-brand-blue'
    },
    {
      id: 'merchant',
      title: 'Merchant',
      icon: Building,
      slogan: 'Access fast business funding solutions',
      description: 'Business owners seeking working capital through merchant cash advances',
      color: 'border-green-500 bg-green-50 hover:bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  const handleUserTypeSelect = (type: 'investor' | 'broker' | 'merchant') => {
    setSelectedType(type);
    // Store user type in localStorage for dashboard personalization
    localStorage.setItem('userType', type);
    onUserTypeSelect(type);
  };

  const handleSignIn = () => {
    // Implement sign in logic
    console.log('Regular sign in clicked');
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign in logic
    console.log('Google sign in clicked');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto mx-4 my-8 p-6" aria-describedby="user-type-description">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark text-center mb-2">
            Welcome to InvestoFund
          </DialogTitle>
          <DialogDescription id="user-type-description" className="text-brand-gray text-center">
            Choose your role to get started with the right experience for you
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {/* User Type Selection */}
          <div className="grid gap-3">
            {userTypes.map((type) => (
              <Button
                key={type.id}
                variant="outline"
                className={`h-auto p-4 ${type.color} border-2 transition-all duration-200`}
                onClick={() => handleUserTypeSelect(type.id as 'investor' | 'broker' | 'merchant')}
              >
                <div className="flex items-center space-x-3 w-full">
                  <div className={`p-2 rounded-full bg-white shadow-sm`}>
                    <type.icon className={`w-5 h-5 ${type.iconColor}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-brand-dark text-base">
                      {type.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-gray mb-1">
                      {type.slogan}
                    </p>
                    <p className="text-xs text-brand-gray leading-tight">
                      {type.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-brand-gray">Or</span>
            </div>
          </div>

          {/* Sign In Options */}
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full h-10 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
              onClick={handleSignIn}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In to Existing Account
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-10 border-red-500 text-red-600 hover:bg-red-500 hover:text-white"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-center text-brand-gray mt-3">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}