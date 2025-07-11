import { scrollToElement } from '@/lib/scrollUtils';
import { CheckCircle, Clock, ArrowRight, Building, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommercialMortgageDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Purple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-violet-600/20 to-indigo-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-violet-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/30 text-purple-100 border border-purple-400/40 mb-4">
                <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
                Property-Backed Financing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
                Commercial Mortgage
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-white bg-clip-text text-transparent">
                Property. Power. Progress.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Tap into your property's equity or finance new real estate. Empower your business through smart property-backed lending with fixed or adjustable rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-violet-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToElement('apply-now')}
              >
                Get Commercial Mortgage
              </Button>
              <Button 
                size="lg" 
                className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/merchants'}
              >
                Compare All Options
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Real Estate</div>
                <div className="text-purple-200 text-sm">Collateral</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Fixed/Adj</div>
                <div className="text-purple-200 text-sm">Rate Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Equity</div>
                <div className="text-purple-200 text-sm">Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Purchase</div>
                <div className="text-purple-200 text-sm">Option</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Commercial Mortgage Key Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Property-Backed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Use your commercial real estate as collateral for competitive rates and favorable terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Equity Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Tap into your property's equity for business expansion, renovations, or working capital.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Purchase Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Finance new property purchases or refinance existing commercial real estate.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Details Section */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">
                Commercial Mortgage Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-4">Loan Features</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Collateral</span>
                      <span className="font-bold text-brand-dark">Commercial Real Estate</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Rate Types</span>
                      <span className="font-bold text-brand-dark">Fixed & Adjustable</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Use of Funds</span>
                      <span className="font-bold text-brand-dark">Equity/Purchase</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Property Types</span>
                      <span className="font-bold text-brand-dark">Office, Retail, Industrial</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-4">Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">Lower interest rates than unsecured loans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">Access substantial amounts of capital</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">Build business equity through property ownership</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">Potential tax advantages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Ready to Access Your Property's Value?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Connect with our commercial mortgage specialists to explore your options and get competitive rates.
            </p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/merchants#apply-funding'}
            >
              Apply for Commercial Mortgage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}