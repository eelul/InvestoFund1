import { CheckCircle, Clock, ArrowRight, CreditCard, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MCADetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How MCA Funding Works
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advance based on future sales (ACH or credit card holdback). Quick working capital without the hassle.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
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
              MCA Key Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Future Sales Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Advance based on future sales through ACH or credit card holdback. No fixed monthly payments.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Same-Day Approval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Same-day approval and funding in as fast as 1 business day with minimal documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Flexible Repayment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Daily, weekly, bi-weekly, or monthly repayment options to match your business cycles.
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
              MCA Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Funding Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Amount Range</span>
                      <span className="font-bold text-brand-dark">$2,000 - $2,000,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Factor Rate</span>
                      <span className="font-bold text-brand-dark">1.25x - 1.49x</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Repayment Terms</span>
                      <span className="font-bold text-brand-dark">25 days - 18 months</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-brand-gray">Approval Time</span>
                      <span className="font-bold text-green-600">Same day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Funding Speed</span>
                      <span className="font-bold text-green-600">1 business day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Repayment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Daily Payments</h4>
                      <p className="text-sm text-brand-gray">Percentage of daily credit card sales or ACH deposits</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Weekly Payments</h4>
                      <p className="text-sm text-brand-gray">Set weekly ACH withdrawals from business account</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Bi-weekly Payments</h4>
                      <p className="text-sm text-brand-gray">Payments every two weeks via ACH</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Monthly Payments</h4>
                      <p className="text-sm text-brand-gray">Traditional monthly payment structure via ACH</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Factors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Rates Are Based On
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Business Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Time in business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Monthly revenue</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Industry type</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Financial Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Credit history</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Financial health</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Cash flow consistency</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
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
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Simple 1-page application</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">3-6 months of business bank statements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Voided check</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Driver's license</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Optional Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">P&L statements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Tax returns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Proof of ownership</span>
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
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Timeline</h3>
                  <p className="text-brand-gray">
                    How quickly do I need funding?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Current Status</h3>
                  <p className="text-brand-gray">
                    Do I already have any open MCAs?
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Goals</h3>
                  <p className="text-brand-gray">
                    What will this capital allow me to achieve?
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
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Low Credit Friendly</h3>
                  <p className="text-green-700">
                    Available to businesses with low credit or under 1 year in business. Your business performance matters more than perfect credit.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Consolidation Options</h3>
                  <p className="text-blue-700">
                    Consolidation options available to lower payments and increase cash flow from multiple existing advances.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Re-advance Eligibility</h3>
                  <p className="text-purple-700">
                    Re-advance eligibility once 50% of your balance is paid off. Get additional funding as your business grows.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">No Fixed Payments</h3>
                  <p className="text-orange-700">
                    Repayment fluctuates with your business performance. Slow days mean lower payments, busy days mean faster payoff.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now" className="py-16 bg-gradient-to-r from-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Apply for your Merchant Cash Advance today and get funded in as little as 1 business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold"
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