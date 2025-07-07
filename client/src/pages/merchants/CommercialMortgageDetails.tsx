import { CheckCircle, Clock, ArrowRight, Building, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommercialMortgageDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mortgage Financing Simplified
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Tap into your property's equity or finance new real estate. Empower your business through smart property-backed lending.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
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
              Commercial Mortgage Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Property Collateral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Use existing or new commercial property as collateral. Funding based on property value and income potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Flexible Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Fixed and adjustable rate options. Terms vary by loan type including bridge, construction, and mezzanine.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Multiple Uses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Ideal for refinancing, property acquisition, or expansion. Great for mixed-use and income-producing properties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Factors & Required Docs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Rates Are Based On</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Property Income & Occupancy</h4>
                      <p className="text-sm text-brand-gray">Current and projected rental income streams</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Loan-to-Value Ratio</h4>
                      <p className="text-sm text-brand-gray">Property value assessment and equity position</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Credit Profile</h4>
                      <p className="text-sm text-brand-gray">Business and borrower credit history and strength</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">3 years tax returns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">P&L and balance sheet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Personal financial statement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Property appraisal or BOV</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ask Yourself Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-12">
              Ask Yourself
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Property Ownership</h3>
                  <p className="text-brand-gray">
                    Do I own or plan to acquire commercial real estate?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Income Generation</h3>
                  <p className="text-brand-gray">
                    Does the property generate income?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Future Potential</h3>
                  <p className="text-brand-gray">
                    Are there tenants or future leasing potential?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Good to Know
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Multiple Loan Types</h3>
                  <p className="text-purple-700">
                    Multiple loan types available including bridge, mezzanine, land, and agency loans.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Property Types</h3>
                  <p className="text-green-700">
                    Great for mixed-use, rental, and income-producing properties of all types.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Strategic Uses</h3>
                  <p className="text-blue-700">
                    Ideal for refinancing, property acquisition, or business expansion projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now" className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Leverage Your Property?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Apply for Commercial Mortgage Financing and unlock your property's potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
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