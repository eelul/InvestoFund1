import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  Building,
  CreditCard,
  FileText,
  ArrowRight,
  Target,
  Award,
  BarChart3,
  Shield,
  Users,
  Zap,
  TrendingUp
} from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";

export default function MerchantDashboardLearnMoreV2() {
  const [currentStep, setCurrentStep] = useState(0);

  const processSteps = [
    {
      number: 1,
      title: 'Submit Simple Application',
      description: 'One-page application plus 3-6 months of bank statements',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      number: 2,
      title: 'InvestoScore Assessment',
      description: 'We analyze your business performance and creditworthiness',
      icon: BarChart3,
      color: 'bg-green-500'
    },
    {
      number: 3,
      title: 'Review Your Options',
      description: 'Receive multiple funding offers within 24 hours',
      icon: Target,
      color: 'bg-purple-500'
    },
    {
      number: 4,
      title: 'Choose Your Terms',
      description: 'Select the best fit for your business needs',
      icon: CheckCircle,
      color: 'bg-orange-500'
    },
    {
      number: 5,
      title: 'Get Funded',
      description: 'Receive funds as quickly as the same day',
      icon: DollarSign,
      color: 'bg-cyan-500'
    }
  ];

  const mcaFeatures = [
    {
      title: 'Quick Access',
      description: 'Get funding in 24-48 hours vs weeks with banks',
      icon: Clock
    },
    {
      title: 'Flexible Repayment',
      description: 'Pay back based on daily sales - slower sales, smaller payments',
      icon: TrendingUp
    },
    {
      title: 'No Collateral',
      description: 'Based on business performance, not personal assets',
      icon: Shield
    },
    {
      title: 'Multiple Options',
      description: 'Factor rates from 1.15x to 1.49x with terms 25 days to 18 months',
      icon: Target
    }
  ];

  const whyInvestoFund = [
    {
      title: 'Transparent Terms',
      description: 'Clear factor rates and repayment schedules with no hidden fees',
      icon: FileText
    },
    {
      title: 'Fair Assessment',
      description: 'InvestoScore™ considers your full business picture, not just credit',
      icon: BarChart3
    },
    {
      title: 'Business Partnership',
      description: 'We succeed when your business succeeds - aligned interests',
      icon: Users
    },
    {
      title: 'Ongoing Support',
      description: 'Access to business resources and potential for future funding',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">Business Funding Education</h1>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => scrollToElement('apply-form')}
            >
              Start Application
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section - Simple Learning Focus */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn About Business Funding
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-gray-800">
            Your Journey to Understanding
            <br />
            <span className="text-blue-600">Merchant Cash Advances</span>
          </h1>
          
          <p className="text-lg mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Learn how businesses access capital quickly, understand the process from start to finish, 
            and discover why InvestoFund offers the best path forward for growing companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => scrollToElement('how-it-works')}
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Start Learning Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              onClick={() => scrollToElement('apply-form')}
            >
              <FileText className="mr-2 w-5 h-5" />
              See Application Process
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800 mb-1">Learn</div>
              <div className="text-gray-600 text-sm">The Basics</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800 mb-1">Understand</div>
              <div className="text-gray-600 text-sm">The Process</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800 mb-1">Explore</div>
              <div className="text-gray-600 text-sm">Your Options</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-gray-800 mb-1">Decide</div>
              <div className="text-gray-600 text-sm">Your Path</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Merchant Cash Advance? */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              What is a Merchant Cash Advance?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple way for businesses to get funding based on their future sales performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">You Receive Capital</p>
                    <p className="text-gray-600 text-sm">Get a lump sum based on your monthly revenue history</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Flexible Repayment</p>
                    <p className="text-gray-600 text-sm">Repay through daily or weekly sales deductions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Growth Focus</p>
                    <p className="text-gray-600 text-sm">Use funds to grow your business and increase sales</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mcaFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-green-600" />
                        </div>
                        <h4 className="font-medium text-gray-800">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Step-by-Step */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              How It Works — Step-by-Step
            </h2>
            <p className="text-lg text-gray-600">
              Learn about the complete process from application to funding with InvestoFund
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-gray-500">Step {step.number}</span>
                    <Badge variant="secondary" className="text-xs">
                      {index === 0 ? 'Start Here' : index === processSteps.length - 1 ? 'Complete' : 'In Progress'}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index === 1 && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-2">About InvestoScore™</h4>
                      <p className="text-sm text-blue-700">
                        Our proprietary assessment looks at your business holistically - revenue trends, 
                        industry performance, payment history, and growth potential - not just credit scores.
                      </p>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-800 mb-2">Typical Offers Include:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Factor rates from 1.15x to 1.49x</li>
                        <li>• Terms from 25 days to 18 months</li>
                        <li>• Amounts from $2,000 to $2,000,000</li>
                        <li>• Daily, weekly, or monthly payment options</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose InvestoFund? */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Why InvestoFund is the Best Strategy
            </h2>
            <p className="text-lg text-gray-600">
              We've designed our approach to be fair, transparent, and focused on your business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyInvestoFund.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Ready to Learn More?</h3>
              <p className="text-blue-700 mb-6">
                Our team is here to answer your questions and help you understand if merchant cash advances 
                are the right fit for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToElement('apply-form')}
                >
                  Start Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = '/contact'}
                >
                  Ask Questions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Application Form Section */}
      <section id="apply-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Start Your Application
            </h2>
            <p className="text-lg text-gray-600">
              Ready to explore your funding options? Start with our simple application process.
            </p>
          </div>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">What You'll Need</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Business bank statements (3-6 months)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Government-issued photo ID</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Voided business check</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Basic business information</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Application Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-semibold">5</span>
                      </div>
                      <span className="text-gray-700">Minutes to complete</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm font-semibold">24</span>
                      </div>
                      <span className="text-gray-700">Hours to receive offers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 text-sm font-semibold">1</span>
                      </div>
                      <span className="text-gray-700">Day for funding (same day possible)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-12 py-3"
                  onClick={() => window.location.href = '/merchants'}
                >
                  Start Application Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  No obligation • Secure process • Free consultation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Questions About Business Funding?</h3>
            <p className="text-gray-300 mb-4">
              Our team is here to help you understand your options and make the best decision for your business.
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-800"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}