import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Clock, 
  Shield, 
  DollarSign, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Building, 
  CreditCard, 
  FileText, 
  Zap,
  Target,
  Users,
  Calendar,
  Award,
  BarChart3,
  Banknote,
  Factory,
  Truck,
  Wrench
} from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const CounterAnimation = ({ target, duration = 2000, suffix = "" }: CounterAnimationProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

export default function MerchantDashboardLearnMore() {
  const [activeTab, setActiveTab] = useState('revenue-advance');
  const [investoScore, setInvestoScore] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Animate InvestoScore on page load
    const timer = setTimeout(() => {
      setInvestoScore(785);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fundingOptions = [
    {
      id: 'revenue-advance',
      title: 'Revenue-Based Advance',
      description: 'Fast capital based on your monthly revenue',
      features: ['$2K - $2M available', '25 days - 18 months', 'Factor rates 1.15x - 1.49x', 'Daily/weekly payments'],
      icon: TrendingUp,
      color: 'bg-green-100 border-green-200'
    },
    {
      id: 'sba-prep',
      title: 'SBA 7(a) Loan Prep',
      description: 'Bridge funding while SBA loan processes',
      features: ['Up to $5M capacity', 'Lower rates', 'Longer terms', 'Fixed payments'],
      icon: Building,
      color: 'bg-blue-100 border-blue-200'
    },
    {
      id: 'equipment-capital',
      title: 'Equipment Capital',
      description: 'Dedicated funding for business equipment',
      features: ['Equipment-secured', 'Competitive rates', 'Flexible terms', 'Quick approval'],
      icon: Wrench,
      color: 'bg-purple-100 border-purple-200'
    },
    {
      id: 'mca-selective',
      title: 'MCA (When Aligned)',
      description: 'Traditional MCA for specific situations',
      features: ['Short-term needs', 'Quick access', 'Revenue-based', 'Flexible collection'],
      icon: Zap,
      color: 'bg-orange-100 border-orange-200'
    }
  ];

  const processSteps = [
    { title: 'Submit Documents', description: '1-page app + 3-6 months statements', icon: FileText },
    { title: 'Receive Offers', description: 'Multiple funding options within 24 hours', icon: Target },
    { title: 'Select Terms', description: 'Choose the best fit for your business', icon: CheckCircle },
    { title: 'Sign Agreement', description: 'Electronic signature process', icon: Award },
    { title: 'Get Funded', description: 'Same-day funding available', icon: DollarSign }
  ];

  const requirements = [
    'Business operational for 3+ months',
    'Monthly revenue of $10,000+',
    'Valid business bank account',
    'Current bank statements (3-6 months)',
    'Business license/registration',
    'Government-issued ID'
  ];

  const handleApplyNow = () => {
    scrollToElement('apply-form');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-brand-dark">InvestoFund for Merchants</h1>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToElement('funding-options')}
              >
                Funding Options
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToElement('investoscore')}
              >
                InvestoScore™
              </Button>
              <Button 
                size="sm"
                className="bg-brand-blue hover:bg-brand-blue-light"
                onClick={handleApplyNow}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/30 text-blue-100 border border-blue-400/40 mb-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Advanced Merchant Portal
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              InvestoFund for Merchants
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
              Real Capital. Real Relationships. Real Fast.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            We provide fast, structured, and transparent funding to business owners who need capital to grow. 
            Build long-term relationships with direct investors who understand your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={handleApplyNow}
            >
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToElement('funding-options')}
            >
              Explore Funding Options
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">$2M</div>
              <div className="text-blue-200 text-sm">Max Funding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24hr</div>
              <div className="text-blue-200 text-sm">Approval</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">1.15x</div>
              <div className="text-blue-200 text-sm">Starting Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Same Day</div>
              <div className="text-blue-200 text-sm">Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200/50">
            <Clock className="w-12 h-12 text-brand-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-brand-dark">
              48 Hours Can Change Everything...
            </h2>
            <p className="text-lg text-brand-dark leading-relaxed mb-4">
              When your biggest client pays late, when equipment breaks down, when that perfect 
              opportunity appears — you need capital fast. Not in 6 weeks. Not with endless paperwork.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed">
              <span className="font-semibold text-brand-blue">Within 48 hours.</span> That's the InvestoFund difference.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            What Makes InvestoFund Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Direct Capital',
                description: 'No middlemen. Direct from our investor network to your business.',
                bgColor: 'bg-blue-100',
                iconColor: 'text-brand-blue'
              },
              {
                icon: Target,
                title: 'Customized Structures',
                description: 'Tailored funding solutions based on your specific business needs.',
                bgColor: 'bg-green-100',
                iconColor: 'text-green-600'
              },
              {
                icon: Zap,
                title: 'Fast Approvals',
                description: 'Decisions within 24 hours. Funding within 48 hours.',
                bgColor: 'bg-purple-100',
                iconColor: 'text-purple-600'
              },
              {
                icon: FileText,
                title: 'Clear Terms',
                description: 'No hidden fees. Transparent repayment structures.',
                bgColor: 'bg-orange-100',
                iconColor: 'text-orange-600'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-dark">{item.title}</h3>
                  <p className="text-brand-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* InvestoScore Section */}
      <section id="investoscore" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">
                Your InvestoScore™
              </h2>
              <p className="text-lg text-brand-gray mb-6">
                Get your personalized business creditworthiness score and unlock faster approvals, 
                better terms, and long-term funding relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Instant credit assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Personalized funding recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Improved terms over time</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="relative mb-6">
                  <div className="text-6xl font-bold text-brand-blue mb-2">
                    <CounterAnimation target={785} />
                  </div>
                  <div className="text-sm text-gray-600">InvestoScore™</div>
                  <Progress value={(investoScore / 850) * 100} className="mt-4" />
                </div>
                <Badge className="bg-green-100 text-green-800 text-sm">
                  Excellent Credit Profile
                </Badge>
                <p className="text-sm text-gray-600 mt-4">
                  Your score qualifies you for premium funding options
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Funding Options */}
      <section id="funding-options" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            Funding Options Tailored for You
          </h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {fundingOptions.map((option) => (
                <TabsTrigger key={option.id} value={option.id} className="text-sm">
                  {option.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {fundingOptions.map((option) => (
              <TabsContent key={option.id} value={option.id}>
                <Card className={`${option.color} border-2`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-full">
                        <option.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{option.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {option.features.map((feature, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg text-center border border-blue-200/30">
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-brand-dark">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            What's Needed to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((requirement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <p className="font-medium text-brand-dark">{requirement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark">Real Merchant Story: Bob's Journey</h3>
                  <p className="text-brand-gray">Manufacturing Business Owner</p>
                </div>
              </div>
              <blockquote className="text-lg text-brand-dark italic leading-relaxed mb-6">
                "When our biggest client delayed payment by 8 weeks, we had payroll coming up and a 
                $50K equipment purchase that couldn't wait. Traditional banks wanted 6 weeks just for 
                approval. InvestoFund had us funded in 2 days with a $75K advance. Six months later, 
                we're not just caught up — we're ahead. They helped us build a relationship with 
                direct investors who understand manufacturing cycles."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-dark">Bob Richardson</p>
                  <p className="text-sm text-brand-gray">Richardson Manufacturing, Texas</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            How It Works — Step-by-Step
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <step.icon className="w-6 h-6 text-brand-blue mr-3" />
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-brand-gray mt-2">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold hidden md:flex">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply-form" className="relative py-20 overflow-hidden">
        {/* Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Begin your application, receive your InvestoScore™, and explore tailored offers in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Apply Now — No Obligation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Calculate Your InvestoScore™
              <BarChart3 className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}