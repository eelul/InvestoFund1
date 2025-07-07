import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  FileText, 
  CheckCircle, 
  DollarSign,
  ArrowRight,
  Users,
  Shield,
  Calculator,
  Building,
  Zap,
  Target
} from "lucide-react";
import { Link } from "wouter";

export default function MerchantHowItWorks() {
  const processSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Complete our simple application form with your business information and funding needs.",
      icon: FileText,
      timeframe: "5 minutes",
      requirements: [
        "Basic business information",
        "Monthly revenue details",
        "Funding amount needed",
        "Contact information"
      ]
    },
    {
      step: 2,
      title: "Quick Review",
      description: "Our team reviews your application and may request additional documentation.",
      icon: Clock,
      timeframe: "24-48 hours",
      requirements: [
        "Business bank statements",
        "Processing statements (if applicable)",
        "Business license verification",
        "Identity verification"
      ]
    },
    {
      step: 3,
      title: "Get Approved",
      description: "Receive your funding offer with transparent terms and factor rates.",
      icon: CheckCircle,
      timeframe: "Same day",
      requirements: [
        "Review funding terms",
        "Understand repayment structure",
        "Accept agreement",
        "Provide banking details"
      ]
    },
    {
      step: 4,
      title: "Receive Funds",
      description: "Funds are deposited directly into your business account.",
      icon: DollarSign,
      timeframe: "24 hours",
      requirements: [
        "Verify bank account",
        "Confirm funding amount",
        "Set up repayment schedule",
        "Begin using capital"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Approval",
      description: "Get approved in 24-48 hours, not weeks like traditional banks."
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      description: "Factor rates from 1.25x to 1.49x with no hidden fees or surprises."
    },
    {
      icon: Shield,
      title: "Flexible Terms",
      description: "Repayment terms from 25 days to 18 months based on your business needs."
    },
    {
      icon: Building,
      title: "No Collateral",
      description: "Unsecured funding based on your business performance, not personal assets."
    },
    {
      icon: Target,
      title: "Multiple Uses",
      description: "Use funds for inventory, equipment, marketing, expansion, or working capital."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated support team to guide you through the entire process."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            How Merchant Cash Advance Works
          </h1>
          <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
            Get the capital you need to grow your business with our streamlined funding process. 
            From application to funding in as little as 3 business days.
          </p>
          
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">24-48 hrs</div>
                <div className="text-sm text-brand-gray">Approval Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">$10K-$500K</div>
                <div className="text-sm text-brand-gray">Funding Range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">1.25x-1.49x</div>
                <div className="text-sm text-brand-gray">Factor Rates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">25d-18m</div>
                <div className="text-sm text-brand-gray">Term Length</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
            Simple 4-Step Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={step.step} className="relative">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <div className="text-sm text-brand-blue font-semibold">{step.timeframe}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray mb-4 text-sm">{step.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-brand-dark">Requirements:</h4>
                    <ul className="space-y-1">
                      {step.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-xs text-brand-gray">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
            Why Choose InvestoFund?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Factor Rates Work */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-brand-dark">Understanding Factor Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-4">What is a Factor Rate?</h3>
                <p className="text-brand-gray mb-4">
                  A factor rate is a simple way to calculate the cost of your advance. Unlike traditional loans 
                  with complex interest rates and fees, factor rates provide transparency and predictability.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-brand-dark mb-2">Example Calculation:</h4>
                  <div className="space-y-2 text-sm">
                    <div>Advance Amount: <strong>$50,000</strong></div>
                    <div>Factor Rate: <strong>1.35x</strong></div>
                    <div>Total Repayment: <strong>$67,500</strong></div>
                    <div>Total Cost: <strong>$17,500</strong></div>
                  </div>
                </div>

                <h4 className="font-semibold text-brand-dark mb-2">Factors That Affect Your Rate:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-brand-gray">Monthly revenue consistency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-brand-gray">Time in business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-brand-gray">Industry type and stability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-brand-gray">Credit and banking history</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Your Rate Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Excellent Qualification</span>
                    <span className="font-bold">1.25x - 1.30x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Good Qualification</span>
                    <span className="font-bold">1.31x - 1.39x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Standard Qualification</span>
                    <span className="font-bold">1.40x - 1.49x</span>
                  </div>
                </div>
                <p className="text-sm mt-4 opacity-90">
                  Your actual rate depends on your business qualifications and will be clearly disclosed before funding.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-brand-dark to-brand-blue text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Apply now and get a funding decision within 24-48 hours
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/merchants/apply">
                  <Button 
                    size="lg" 
                    className="bg-white text-brand-dark hover:bg-gray-100 px-8 py-4 text-lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4 text-lg"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Speak with Expert
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm mt-6 opacity-75">
                No obligation • Free consultation • Fast response
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}