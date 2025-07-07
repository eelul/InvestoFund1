import { CheckCircle, Clock, ArrowRight, Truck, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EquipmentFinancingDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Orange Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-700 to-red-800"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-amber-600/20 to-red-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-amber-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-red-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/30 text-orange-100 border border-orange-400/40 mb-4">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                Equipment-Backed Financing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
                Equipment Financing
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-white bg-clip-text text-transparent">
                Gear Up. Grow Up.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed max-w-3xl mx-auto">
              Finance new or used equipment with flexible plans. Use your equipment as collateral to fuel business growth with up to 100% financing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Equipment Financing
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
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-orange-200 text-sm">Financing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Fast</div>
                <div className="text-orange-200 text-sm">Approval</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Equipment</div>
                <div className="text-orange-200 text-sm">Collateral</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">New/Used</div>
                <div className="text-orange-200 text-sm">Equipment</div>
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
              Equipment Financing Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Equipment Collateral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Use existing or to-be-purchased equipment as collateral. Up to 100% financing available.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Flexible Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Terms designed to match cash flow with seasonal or step-down payment options.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Tax Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Tax benefits may apply including depreciation and deduction opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Financing Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Financing Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Financing Amount</span>
                      <span className="font-bold text-brand-dark">Up to 100% of value</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Collateral</span>
                      <span className="font-bold text-brand-dark">Equipment</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Equipment Types</span>
                      <span className="font-bold text-brand-dark">New or used</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Approval Speed</span>
                      <span className="font-bold text-green-600">Fast approval</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Leasing Options</span>
                      <span className="font-bold text-green-600">Various structures</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Rate Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Equipment Type, Age & Value</h4>
                      <p className="text-sm text-brand-gray">Newer, higher-value equipment gets better rates</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Borrower Credit Profile</h4>
                      <p className="text-sm text-brand-gray">Business and personal credit history considered</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Repayment Ability</h4>
                      <p className="text-sm text-brand-gray">Cash flow and financial strength assessment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Financial Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">YTD bank statements & financials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Tax returns (2 years)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Debt schedule</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Equipment Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-orange-500" />
                      <span className="text-brand-gray">Equipment details/appraisal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Purchase quotes (if new)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Current equipment list</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ask Yourself Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-12">
              Ask Yourself
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Equipment Needs</h3>
                  <p className="text-brand-gray">
                    What equipment do I need or already own?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Equipment Value</h3>
                  <p className="text-brand-gray">
                    Is it liquid and marketable?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Cash Flow</h3>
                  <p className="text-brand-gray">
                    Would deferred payments help my business ramp up?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Good to Know
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">All Business Stages</h3>
                  <p className="text-green-700">
                    Available for startups and established businesses alike.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Tax Benefits</h3>
                  <p className="text-blue-700">
                    Tax benefits may apply including depreciation and deductions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Vendor Options</h3>
                  <p className="text-orange-700">
                    Vendor pre-funding options available for equipment purchases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now" className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Finance Your Equipment?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Apply for Equipment Financing and get the tools your business needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants'}
              >
                Back to All Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}