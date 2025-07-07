import { Clock, DollarSign, Shield, CheckCircle, Zap, Heart, ArrowRight, CreditCard, Building, Truck, FileText, TrendingUp, Receipt, ShoppingCart, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EnhancedMerchantApplicationForm from "@/components/forms/EnhancedMerchantApplicationForm";

export default function Merchants() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-teal-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                8 Financing Solutions Available
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">
                Unlock Capital.
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-200 via-blue-200 to-white bg-clip-text text-transparent">
                Fuel Growth.
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent font-extrabold">
                Succeed with Confidence.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Explore fast, flexible funding solutions built for small business owners. Whether you're expanding, upgrading, or navigating cash flow gaps, InvestoFund empowers you with the right financing at the right time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  Get Funded Today
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/40 px-10 py-5 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('financing-solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  Explore Solutions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$2M+</div>
                <div className="text-blue-200 text-sm">Maximum Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24hr</div>
                <div className="text-blue-200 text-sm">Fast Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1.25x</div>
                <div className="text-blue-200 text-sm">Starting Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8</div>
                <div className="text-blue-200 text-sm">Funding Options</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Financing Solutions Section */}
      <section id="financing-solutions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
              Complete Financing Solutions
            </h2>
            <p className="text-xl text-center text-brand-gray mb-12">
              Choose from 8 powerful funding options designed to meet your unique business needs
            </p>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="overview">All Solutions</TabsTrigger>
                <TabsTrigger value="details">Detailed Comparison</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {/* MCA */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-blue">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <CreditCard className="w-6 h-6 text-brand-blue" />
                        </div>
                        <CardTitle className="text-brand-dark">Merchant Cash Advance (MCA)</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Advance based on future sales (ACH or credit card holdback). Same-day approval and funding in as fast as 1 business day.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Amount Range:</span>
                          <span className="font-semibold">$2,000 - $2,000,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Factor Rate:</span>
                          <span className="font-semibold">1.25x - 1.49x</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Repayment Terms:</span>
                          <span className="font-semibold">25 days - 18 months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Payment Options:</span>
                          <span className="font-semibold">Daily/Weekly/Monthly</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-brand-blue hover:bg-brand-dark text-white"
                          onClick={() => window.location.href = '/merchants/mca-details'}
                        >
                          Learn How MCA Works <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Line of Credit */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <CardTitle className="text-brand-dark">Business Line of Credit</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Access capital when you need it, without reapplying. Draw, repay, and reuse with a revolving business line of credit.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Limit:</span>
                          <span className="font-semibold">Up to $250K</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Rates:</span>
                          <span className="font-semibold">4.8% - 24.99%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Terms:</span>
                          <span className="font-semibold">6-18 months</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => window.location.href = '/merchants/line-of-credit-details'}
                        >
                          See How Credit Line Works <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Equipment Financing */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Truck className="w-6 h-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-brand-dark">Equipment Financing</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Finance new or used equipment with flexible plans. Use your equipment as collateral to fuel business growth.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Financing:</span>
                          <span className="font-semibold">Up to 100%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Collateral:</span>
                          <span className="font-semibold">Equipment</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Speed:</span>
                          <span className="font-semibold text-green-600">Fast approval</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                          onClick={() => window.location.href = '/merchants/equipment-financing-details'}
                        >
                          Get Equipment Financing <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Commercial Mortgage */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Building className="w-6 h-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-brand-dark">Commercial Mortgage</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Tap into your property's equity or finance new real estate. Empower your business through smart property-backed lending.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Collateral:</span>
                          <span className="font-semibold">Real Estate</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Types:</span>
                          <span className="font-semibold">Fixed/Adjustable</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Use:</span>
                          <span className="font-semibold">Equity/Purchase</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => window.location.href = '/merchants/commercial-mortgage-details'}
                        >
                          Explore Mortgage Options <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Term Loans */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-teal">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <FileText className="w-6 h-6 text-brand-teal" />
                        </div>
                        <CardTitle className="text-brand-dark">Term Loans</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Secure a lump sum with fixed payments and terms. Ideal for planned projects, expansion, or refinancing high-interest debt.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Terms:</span>
                          <span className="font-semibold">1-5 years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Rates:</span>
                          <span className="font-semibold">7.9% - 24.99%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Payment:</span>
                          <span className="font-semibold">Monthly</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-brand-teal hover:bg-teal-700 text-white"
                          onClick={() => window.location.href = '/merchants/term-loans-details'}
                        >
                          See Term Loan Qualification <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Invoice Factoring */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Receipt className="w-6 h-6 text-yellow-600" />
                        </div>
                        <CardTitle className="text-brand-dark">Invoice Factoring</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Convert unpaid invoices into immediate working capital. Eliminate the wait and stay cash-flow positive.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Type:</span>
                          <span className="font-semibold">No debt incurred</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Eligibility:</span>
                          <span className="font-semibold">B2B invoices</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Speed:</span>
                          <span className="font-semibold text-green-600">Immediate</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white"
                          onClick={() => window.location.href = '/merchants/invoice-factoring-details'}
                        >
                          Start Factoring Invoices <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* P.O. Financing */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <ShoppingCart className="w-6 h-6 text-red-600" />
                        </div>
                        <CardTitle className="text-brand-dark">Purchase Order Financing</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        Got orders you can't fulfill due to cash constraints? Use P.O. financing to cover supplier costs and deliver with confidence.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Based on:</span>
                          <span className="font-semibold">Purchase Orders</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Payment:</span>
                          <span className="font-semibold">Direct to suppliers</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Type:</span>
                          <span className="font-semibold">Not a loan</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => window.location.href = '/merchants/po-financing-details'}
                        >
                          Discover P.O. Financing <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* SBA Loans */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-indigo-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          <Landmark className="w-6 h-6 text-indigo-600" />
                        </div>
                        <CardTitle className="text-brand-dark">SBA 7(a) Loans</CardTitle>
                      </div>
                      <p className="text-brand-gray">
                        The SBA 7(a) loan is ideal for major expansions, acquisitions, and long-term working capital. Enjoy favorable rates and extended terms.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Amount:</span>
                          <span className="font-semibold">Up to $5M</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Terms:</span>
                          <span className="font-semibold">Up to 25 years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-gray">Backing:</span>
                          <span className="font-semibold text-green-600">Government</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                          onClick={() => window.location.href = '/merchants/sba-loans-details'}
                        >
                          Learn About SBA Loans <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          className="px-6 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12 p-8 bg-gradient-to-r from-brand-blue to-brand-teal rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4 text-[#000000]">Let's Find the Right Fit</h3>
                  <p className="text-lg mb-6 text-[#3e70af]">
                    Need help deciding which solution is right for your business? Speak with an InvestoFund Advisor today — no obligation, just answers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                      onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold"
                      onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Free Consultation
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-4 text-left font-semibold">Solution</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">Amount Range</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">Terms</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">Best For</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">Speed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold text-brand-blue">Merchant Cash Advance</td>
                        <td className="border border-gray-300 p-4">$2,000 - $2,000,000</td>
                        <td className="border border-gray-300 p-4">25 days - 18 months</td>
                        <td className="border border-gray-300 p-4">Future sales-based, flexible repayment</td>
                        <td className="border border-gray-300 p-4 text-green-600 font-semibold">Same day</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold text-green-600">Line of Credit</td>
                        <td className="border border-gray-300 p-4">Up to $250K</td>
                        <td className="border border-gray-300 p-4">6-18 months</td>
                        <td className="border border-gray-300 p-4">Flexible access, good credit</td>
                        <td className="border border-gray-300 p-4">2-3 days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold text-orange-600">Equipment Financing</td>
                        <td className="border border-gray-300 p-4">Up to 100% of value</td>
                        <td className="border border-gray-300 p-4">Varies by equipment</td>
                        <td className="border border-gray-300 p-4">Equipment purchase/upgrade</td>
                        <td className="border border-gray-300 p-4">Fast approval</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold text-purple-600">Commercial Mortgage</td>
                        <td className="border border-gray-300 p-4">Based on property value</td>
                        <td className="border border-gray-300 p-4">Varies by loan type</td>
                        <td className="border border-gray-300 p-4">Real estate investment</td>
                        <td className="border border-gray-300 p-4">2-4 weeks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold text-brand-teal">Term Loans</td>
                        <td className="border border-gray-300 p-4">Based on cash flow</td>
                        <td className="border border-gray-300 p-4">1-5 years</td>
                        <td className="border border-gray-300 p-4">Stable businesses, expansion</td>
                        <td className="border border-gray-300 p-4">2-3 weeks</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold text-yellow-600">Invoice Factoring</td>
                        <td className="border border-gray-300 p-4">Based on invoice value</td>
                        <td className="border border-gray-300 p-4">Until payment received</td>
                        <td className="border border-gray-300 p-4">B2B with slow-paying clients</td>
                        <td className="border border-gray-300 p-4 text-green-600 font-semibold">Immediate</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold text-red-600">P.O. Financing</td>
                        <td className="border border-gray-300 p-4">Based on order value</td>
                        <td className="border border-gray-300 p-4">Until order fulfillment</td>
                        <td className="border border-gray-300 p-4">Large orders, supplier payment</td>
                        <td className="border border-gray-300 p-4">Quick approval</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold text-indigo-600">SBA 7(a) Loans</td>
                        <td className="border border-gray-300 p-4">Up to $5M</td>
                        <td className="border border-gray-300 p-4">Up to 25 years</td>
                        <td className="border border-gray-300 p-4">Major expansion, acquisition</td>
                        <td className="border border-gray-300 p-4">10-15 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-4 text-lg"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started with Any Solution →
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Fast Funding</h3>
                  <p className="text-brand-gray">
                    Get approved and funded in as little as 24-48 hours with our streamlined process.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Flexible Terms</h3>
                  <p className="text-brand-gray">
                    Repayment based on daily sales, not fixed monthly payments. Grow at your own pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">No Hidden Fees</h3>
                  <p className="text-brand-gray">
                    Transparent pricing with no hidden fees or surprises. You know exactly what you're paying.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-brand-dark mb-6">
              🚀 Industries We Love to Fund
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Fast, flexible capital for businesses that banks overlook — 
              no endless paperwork, no collateral headaches, just solutions that work!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🛍️</div>
                  <h3 className="font-bold text-orange-700 mb-3 text-lg">Retail & E-commerce</h3>
                  <p className="text-sm text-orange-600 mb-4">
                    Restock inventory, launch marketing campaigns, or bridge seasonal cash flow gaps.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🍽️</div>
                  <h3 className="font-bold text-red-700 mb-3 text-lg">Restaurants & Food</h3>
                  <p className="text-sm text-red-600 mb-4">
                    Equipment repairs, kitchen upgrades, or covering slow periods between busy seasons.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="font-bold text-blue-700 mb-3 text-lg">Auto & Transportation</h3>
                  <p className="text-sm text-blue-600 mb-4">
                    Vehicle repairs, fuel costs, parts inventory, or fleet expansion needs.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🔨</div>
                  <h3 className="font-bold text-yellow-700 mb-3 text-lg">Construction & Trades</h3>
                  <p className="text-sm text-yellow-600 mb-4">
                    Bridge financing for materials, equipment purchases, or payroll between projects.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏥</div>
                  <h3 className="font-bold text-green-700 mb-3 text-lg">Health & Medical</h3>
                  <p className="text-sm text-green-600 mb-4">
                    New equipment, staff expansion, facility upgrades, or technology investments.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💄</div>
                  <h3 className="font-bold text-purple-700 mb-3 text-lg">Beauty & Wellness</h3>
                  <p className="text-sm text-purple-600 mb-4">
                    Salon expansions, new equipment, product inventory, or location remodeling.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏪</div>
                  <h3 className="font-bold text-pink-700 mb-3 text-lg">Professional Services</h3>
                  <p className="text-sm text-pink-600 mb-4">
                    Marketing campaigns, office upgrades, technology investments, or staff training.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏨</div>
                  <h3 className="font-bold text-indigo-700 mb-3 text-lg">Hospitality & Tourism</h3>
                  <p className="text-sm text-indigo-600 mb-4">
                    Property improvements, marketing for peak seasons, or equipment upgrades.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-indigo-500 hover:bg-indigo-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏃</div>
                  <h3 className="font-bold text-teal-700 mb-3 text-lg">Fitness & Recreation</h3>
                  <p className="text-sm text-teal-600 mb-4">
                    New equipment, facility expansion, membership drive marketing, or class programs.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                    onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Funded Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-brand-gray mb-6 text-lg">
                Don't see your industry? We fund <span className="font-semibold text-brand-blue">all types of businesses</span> with consistent revenue!
              </p>
              <Button 
                size="lg" 
                className="hover:bg-primary/90 h-11 rounded-md from-brand-blue to-brand-teal hover:from-brand-dark hover:to-brand-blue px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-[#15b8a6] text-[#ffffff]"
                onClick={() => document.getElementById('apply-funding')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply for Funding Today →
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* MCA Details Section */}
      <section className="py-16 bg-white pt-[60px] pb-[60px]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Merchant Cash Advance Details
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Funding Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Minimum Advance</span>
                      <span className="font-bold text-brand-dark">$2,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Maximum Advance</span>
                      <span className="font-bold text-brand-dark">$2,000,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Factor Rates</span>
                      <span className="font-bold text-brand-teal">1.25x - 1.49x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Funding Speed</span>
                      <span className="font-bold text-green-600">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Repayment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Repayment Terms</span>
                      <span className="font-bold text-brand-dark">25 days - 18 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Daily Payments</span>
                      <span className="font-bold text-brand-teal">Available</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Weekly Payments</span>
                      <span className="font-bold text-brand-teal">Available</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Monthly Payments</span>
                      <span className="font-bold text-brand-teal">Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Rate Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Time in business</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Monthly revenue</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Industry type</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Credit history</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Financial health</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Simple 1-page application</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">3-6 months business bank statements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Voided check</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Driver's license</span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-blue-200">
                      <p className="text-sm text-brand-gray mb-2"><strong>Optional Documents:</strong></p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-brand-gray">P&L statements</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-brand-gray">Tax returns</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-brand-gray">Proof of ownership</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Good to Know</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800 font-medium mb-1">Low Credit Friendly</p>
                      <p className="text-xs text-green-700">Available to businesses with low credit or under 1 year in business</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium mb-1">Consolidation Options</p>
                      <p className="text-xs text-blue-700">Consolidation available to lower payments and increase cash flow</p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <p className="text-sm text-purple-800 font-medium mb-1">Re-advance Eligibility</p>
                      <p className="text-xs text-purple-700">Qualify for additional funding once 50% of balance is paid off</p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <p className="text-sm text-orange-800 font-medium mb-1">Future Sales Based</p>
                      <p className="text-xs text-orange-700">Advance based on future sales (ACH or credit card holdback)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 p-6 bg-gradient-to-r from-brand-blue to-brand-teal rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Ask Yourself These Questions:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">Timeline</p>
                  <p className="text-xs text-blue-100">How quickly do I need funding?</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">Current Status</p>
                  <p className="text-xs text-blue-100">Do I already have any open MCAs?</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">Goals</p>
                  <p className="text-xs text-blue-100">What will this capital allow me to achieve?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Our Simple Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Apply Online</h3>
                <p className="text-sm text-brand-gray">
                  Complete our simple application with basic business information
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Quick Review</h3>
                <p className="text-sm text-brand-gray">
                  Our team reviews your application and documents within hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Get Approved</h3>
                <p className="text-sm text-brand-gray">
                  Receive your offer with transparent terms and conditions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Get Funded</h3>
                <p className="text-sm text-brand-gray">
                  Funds deposited directly into your business account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Application Form */}
      <section id="apply-funding" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Apply for Funding
            </h2>
            <EnhancedMerchantApplicationForm />
          </div>
        </div>
      </section>
      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Required Documents
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Essential Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">3-6 months business bank statements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Voided business check</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Valid government-issued ID</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Business license (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Additional Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Articles of incorporation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Recent tax returns</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Profit & loss statements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Lease agreement (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  What's the difference between an MCA and a traditional business loan?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Merchant Cash Advance (MCA):</strong> We purchase a portion of your future sales at a discount through ACH or credit card holdback. Repayment is based on a percentage of your daily sales, so it fluctuates with your business performance. Available with daily, weekly, bi-weekly, or monthly repayment options.</p>
                    <p><strong>Traditional Loan:</strong> Fixed monthly payments regardless of business performance, typically requires excellent credit, longer approval process, and more stringent requirements.</p>
                    <p><strong>Why Choose MCA:</strong> Faster approval (same day), flexible repayment tied to your sales, and approval based on business performance rather than just credit score.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  How do I know if my business qualifies?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>MCA Basic Requirements:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Minimum 3 months in business (available to businesses under 1 year)</li>
                      <li>Consistent monthly revenue (varies by solution, typically $10K+ for MCA)</li>
                      <li>Business bank account in company name</li>
                      <li>Valid business registration</li>
                      <li>Credit card processing or regular ACH deposits</li>
                    </ul>
                    <p><strong>Good Candidates:</strong> Businesses with steady sales, seasonal businesses needing working capital, companies with growth opportunities, or those needing to manage cash flow gaps. MCA funding ranges from $2,000 to $2,000,000.</p>
                    <p><strong>Credit Flexibility:</strong> Available to businesses with low credit scores. Your business performance and revenue consistency matter more than perfect credit history.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  What are the real costs and are there hidden fees?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Transparent Pricing:</strong> We use a factor rate system (1.25x - 1.49x) with NO hidden fees. If you receive $10,000 with a 1.30x factor rate, you repay $13,000 total.</p>
                    <p><strong>What Affects Your Rate:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Time in business and revenue consistency</li>
                      <li>Industry type and business model</li>
                      <li>Credit profile and financial strength</li>
                      <li>Repayment timeline preference</li>
                    </ul>
                    <p><strong>No Surprises:</strong> Your total cost is calculated upfront. No prepayment penalties, no application fees, no closing costs.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  How quickly can I actually get funded and what's the process?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Timeline Breakdown:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Application:</strong> 10 minutes online</li>
                      <li><strong>Initial Review:</strong> 2-4 hours during business hours</li>
                      <li><strong>Document Review:</strong> Same day with complete docs</li>
                      <li><strong>Approval Decision:</strong> Within 24 hours</li>
                      <li><strong>Funding:</strong> Same day to 48 hours after approval</li>
                    </ul>
                    <p><strong>Speed Tips:</strong> Have your bank statements ready, respond quickly to any requests, and ensure your bank account information is accurate.</p>
                    <p><strong>Documentation:</strong> Most approvals only need 3-6 months of bank statements and basic business information.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  Will this help or hurt my business credit?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Credit Impact:</strong> MCAs typically don't report to business credit bureaus like traditional loans, so they won't directly build your business credit score.</p>
                    <p><strong>Soft Credit Pull:</strong> Our initial review uses a soft pull that doesn't affect your credit score. Hard pulls only occur for certain term loan products.</p>
                    <p><strong>Building Relationships:</strong> Successful repayment builds a funding relationship with us, making future funding easier and potentially offering better terms.</p>
                    <p><strong>Cash Flow Benefits:</strong> By improving your cash flow and business stability, you'll be in a better position for traditional credit products in the future.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  How does repayment work and what if my sales fluctuate?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Multiple Repayment Options Available:</strong></p>
                    <p><strong>1. Daily Payments:</strong> Automatic collection from daily credit card sales or ACH deposits. Typically 10-20% of daily sales volume.</p>
                    <p><strong>2. Weekly Payments:</strong> Set weekly ACH withdrawals from your business account, providing more predictable cash flow management.</p>
                    <p><strong>3. Bi-weekly Payments:</strong> Payments every two weeks, aligned with typical business cycles and payroll schedules.</p>
                    <p><strong>4. Monthly Payments:</strong> Traditional monthly payment structure for businesses preferring fixed monthly obligations.</p>
                    <p><strong>Repayment Terms:</strong> Terms range from 25 days to 18 months depending on your business profile and funding amount.</p>
                    <p><strong>Seasonal Business Protections:</strong> We understand business cycles. Many agreements include provisions for seasonal businesses or temporary slowdowns.</p>
                    <p><strong>Re-advance Eligibility:</strong> Once you've paid back 50% of your balance, you may qualify for additional funding or refinancing options.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  Can I get multiple funding solutions or refinance existing debt?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Multiple Solutions:</strong> Yes! Many businesses use different funding types for different needs - MCA for immediate working capital, equipment financing for new machinery, and lines of credit for ongoing flexibility.</p>
                    <p><strong>Debt Consolidation:</strong> We can help consolidate multiple high-cost MCAs into a single, more manageable payment with better terms.</p>
                    <p><strong>Stacking Restrictions:</strong> We evaluate your total debt load to ensure any new funding won't strain your business. Responsible lending is our priority.</p>
                    <p><strong>Refinancing Options:</strong> If you have expensive existing funding, we may be able to offer refinancing options to reduce your total cost and improve cash flow.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  What happens if I can't make payments or my business struggles?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Communication is Key:</strong> Contact us immediately if you're experiencing difficulties. We have multiple options to help struggling businesses rather than pursuing aggressive collection.</p>
                    <p><strong>Workout Options:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Payment restructuring or temporary reductions</li>
                      <li>Extended repayment timelines</li>
                      <li>Seasonal adjustment programs</li>
                      <li>Settlement options in extreme cases</li>
                    </ul>
                    <p><strong>Legal Protections:</strong> MCAs have different legal protections than traditional loans. We work within the UCC framework and focus on commercial resolution rather than personal liability.</p>
                    <p><strong>Business Counseling:</strong> We can connect you with business advisory services to help improve operations and cash flow management.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  Is InvestoFund legitimate and how do I know this isn't a scam?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  <div className="space-y-3">
                    <p><strong>Legitimacy Indicators:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>No upfront fees - legitimate funders never charge application fees</li>
                      <li>Transparent terms provided in writing before you sign</li>
                      <li>Licensed and compliant with state and federal regulations</li>
                      <li>Physical business address and verified contact information</li>
                      <li>Clear communication about costs, terms, and processes</li>
                    </ul>
                    <p><strong>Red Flags to Avoid:</strong> Be wary of companies demanding upfront fees, guaranteeing approval, pressuring immediate decisions, or being vague about costs.</p>
                    <p><strong>Verification:</strong> Check our business registration, read all documents carefully, and never sign blank contracts or documents with missing information.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
