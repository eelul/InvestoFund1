import { CheckCircle, Clock, ArrowRight, TrendingUp, CreditCard, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LineOfCreditDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-500 to-teal-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolving Line of Credit Details
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Access capital when you need it, without reapplying. Draw, repay, and reuse with a revolving business line of credit.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
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
              Line of Credit Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Revolving Credit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Revolving limit up to $250,000. Draw as needed, repay weekly or monthly.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Flexible Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    You only pay when you draw. Your limit can grow with your repayment performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Rates from 4.8% to 24.99% based on revenue and credit history.
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
              Credit Line Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Credit Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Credit Limit</span>
                      <span className="font-bold text-brand-dark">Up to $250,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Interest Rates</span>
                      <span className="font-bold text-brand-dark">4.8% - 24.99%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Terms</span>
                      <span className="font-bold text-brand-dark">6, 12, or 18 months</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Draw Period</span>
                      <span className="font-bold text-green-600">As needed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Repayment</span>
                      <span className="font-bold text-green-600">Weekly or monthly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Ideal Candidate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Monthly Revenue</h4>
                      <p className="text-sm text-brand-gray">$20,000+ in monthly revenue</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Credit Score</h4>
                      <p className="text-sm text-brand-gray">600+ FICO score recommended</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Business Type</h4>
                      <p className="text-sm text-brand-gray">Established businesses with consistent cash flow</p>
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
                  <CardTitle className="text-brand-dark">Essential Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">3-6 months of business bank statements (or instant link)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Application</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Driver's license & voided check</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Proof of address</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Perfect for emergencies, opportunities, or seasonal dips</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Lower cost than merchant cash advances</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Build business credit with responsible use</span>
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
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Funding Access</h3>
                  <p className="text-brand-gray">
                    Do I want flexible funding access for the year ahead?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Payment Comfort</h3>
                  <p className="text-brand-gray">
                    Am I comfortable repaying on a set schedule?
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
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Pay When You Draw</h3>
                  <p className="text-green-700">
                    You only pay interest when you draw funds. No interest on unused credit.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Growing Limits</h3>
                  <p className="text-blue-700">
                    Your limit can grow with your repayment performance and business growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Business Flexibility</h3>
                  <p className="text-purple-700">
                    Perfect for emergencies, opportunities, or seasonal business fluctuations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now" className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Flexible Funding?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Apply for your Business Line of Credit and get access to revolving capital when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
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