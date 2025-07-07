import { CheckCircle, Clock, ArrowRight, Truck, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EquipmentFinancingDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple Equipment Financing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Finance new or used equipment with flexible plans. Use your equipment as collateral to fuel business growth.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now →
            </Button>
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