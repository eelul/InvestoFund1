import { scrollToElement } from '@/lib/scrollUtils';
import { CheckCircle, Clock, ArrowRight, CreditCard, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MCADetails() {
  return (
    <div className="min-h-screen bg-gray-50">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/30 text-blue-100 border border-blue-400/40 mb-4">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                Most Popular Financing Solution
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Merchant Cash Advance
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
                Fast. Flexible. Funded.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Get an advance based on your future sales with same-day approval and funding as fast as 1 business day. No fixed monthly payments - repay as you earn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToElement('apply-now')}
              >
                Apply for MCA Funding
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
                      <span className="font-bold text-brand-dark">1.15x - 1.49x</span>
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

      {/* What is an MCA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              What is a Merchant Cash Advance?
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
              <p className="text-lg text-brand-dark leading-relaxed mb-6">
                A <strong>Merchant Cash Advance (MCA)</strong> is a financing solution that gives your business a lump sum of capital today — in exchange for a portion of your future sales. It's not a loan, but an advance on future revenue. MCAs are ideal for businesses that need quick funding without the hassle of traditional loan requirements.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed">
                Whether you experience seasonal dips, sudden expenses, or rapid opportunities for growth, an MCA helps you move fast and stay in control.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mb-6">How Does an MCA Work?</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-brand-blue">1</span>
                  </div>
                  <h4 className="font-semibold text-brand-dark mb-2">Receive Capital</h4>
                  <p className="text-brand-gray text-sm">You receive a lump sum of working capital upfront</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-semibold text-brand-dark mb-2">Fixed Factor Rate</h4>
                  <p className="text-brand-gray text-sm">Repay the advance plus a fixed factor rate (no APR or compounding interest)</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-semibold text-brand-dark mb-2">Flexible Repayment</h4>
                  <p className="text-brand-gray text-sm">Fixed daily, weekly, bi-weekly, or monthly ACH withdrawal</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-brand-dark">
                <strong>Cash Flow Alignment:</strong> The repayment method is designed to align with your cash flow. Slower days mean smaller repayments, helping you manage operations smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is MCA Right for You */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Is an MCA Right for Your Business?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Perfect for Businesses That:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-brand-gray">Have <strong>steady daily or weekly sales</strong></span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-brand-gray">Need funding quickly (within 24–48 hours)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-brand-gray">Don't want to deal with lengthy bank applications</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-brand-gray">May not qualify for traditional loans due to <strong>credit score or time in business</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Common Use Cases:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-gray">Cover urgent expenses</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-gray">Buy inventory for peak seasons</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-gray">Launch new marketing campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-gray">Pay down higher-cost debt</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-gray">Bridge cash flow gaps</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-gray">Renovate or expand your location</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-center text-brand-dark">
                <strong>Good News:</strong> Even if your business is under 1 year old or you have a low credit score, you may still qualify.
              </p>
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
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">1-page data form (application)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">3–6 months of business bank statements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Driver's license</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                      <span className="text-brand-gray">Voided check</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Additional Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-brand-gray">Proof of ownership</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-brand-gray">P&L statement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-brand-gray">Balance sheet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-brand-gray">Tax returns</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Rates Are Determined */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              How Rates Are Determined
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
                      <span className="text-brand-gray">Average monthly revenue</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Industry risk level</span>
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
                      <span className="text-brand-gray">Credit profile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Overall financial health</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Financial trends</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-center text-brand-dark">
                Your custom factor rate and repayment structure are based on a comprehensive evaluation of your business profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MCA vs Loan Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              What's the Difference Between a Loan and an MCA?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-red-400">
                <CardHeader>
                  <CardTitle className="text-brand-dark flex items-center">
                    <span className="text-red-500 mr-2">×</span>
                    Term Loan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-brand-gray">Fixed monthly payments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-brand-gray">Interest-bearing with APR</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-brand-gray">Longer approval times</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-brand-gray">Often requires collateral</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-brand-gray">High credit scores required</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-400">
                <CardHeader>
                  <CardTitle className="text-brand-dark flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Merchant Cash Advance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-brand-gray">Flexible daily/weekly repayments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-brand-gray">Based on future sales, not collateral</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-brand-gray">Quick approval and funding</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-brand-gray">No collateral required</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-brand-gray">Works with lower credit scores</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Factor Rate vs Holdback */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              MCA Holdback vs. Factor Rate
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Holdback Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray mb-4">
                    The <strong>% of daily sales</strong> (credit/debit) used to repay the advance. This fluctuates with your revenue.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-brand-dark">
                      <strong>Benefit:</strong> Slower sales days = smaller payments
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-dark">Factor Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray mb-4">
                    A <strong>one-time cost multiplier</strong> (e.g., 1.3 = 30% total repayment above principal). No APR or compound interest involved.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-brand-dark">
                      <strong>Example:</strong> $100,000 advance × 1.3 factor rate = $130,000 total repayment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Benefits of Choosing InvestoFund for Your MCA
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Fast, Same-Day Funding</h4>
                  <p className="text-brand-gray text-sm">Get your capital when you need it most</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Revenue-Based Approval</h4>
                  <p className="text-brand-gray text-sm">Not just credit score dependent</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Sales Cycle Alignment</h4>
                  <p className="text-brand-gray text-sm">Repayment matches your business flow</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Streamlined Application</h4>
                  <p className="text-brand-gray text-sm">No lengthy bank paperwork</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Consolidation Available</h4>
                  <p className="text-brand-gray text-sm">For existing MCAs with better terms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Re-advances Available</h4>
                  <p className="text-brand-gray text-sm">Once 50% repaid, get additional capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Get Started in 3 Simple Steps
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Apply Online</h3>
                <p className="text-brand-gray">Takes just minutes to complete our secure MCA application.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Receive Your Offer</h3>
                <p className="text-brand-gray">Get matched with an offer tailored to your revenue and repayment preference.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Get Funded Fast</h3>
                <p className="text-brand-gray">Once approved, receive your funding within 24–48 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              MCA FAQs
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-brand-dark mb-2">Q: Can I qualify with bad credit?</h4>
                  <p className="text-brand-gray">Yes — we focus on cash flow, not just your FICO score.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-brand-dark mb-2">Q: Will this hurt my credit score?</h4>
                  <p className="text-brand-gray">No hard pull is required during initial prequalification.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-brand-dark mb-2">Q: Can I repay early?</h4>
                  <p className="text-brand-gray">Yes. Some of our MCA programs include early payment discounts.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-brand-dark mb-2">Q: Can I consolidate other MCAs?</h4>
                  <p className="text-brand-gray">Yes — and we can structure better terms to improve cash flow.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-brand-dark mb-2">Q: How soon can I re-apply for funding?</h4>
                  <p className="text-brand-gray">Once 50% of your balance is repaid, you're eligible for additional capital.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Default Information */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">
              What Happens if You Default?
            </h2>
            
            <Card className="border-l-4 border-red-400">
              <CardContent className="pt-6">
                <p className="text-brand-gray mb-4">
                  Failure to meet your MCA obligations can result in:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-gray">Additional fees or penalties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-gray">Collection activity or legal action (depending on your agreement)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-gray">Business cash flow restrictions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-gray">Possible personal guarantees (depending on structure)</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-brand-dark">
                    <strong>Important:</strong> If you're struggling to meet payments, <strong>contact InvestoFund early</strong> to explore modification or consolidation options.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Unlock Flexible Funding?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              An InvestoFund MCA can be the bridge between now and your next major milestone. Whether you're growing fast or just need a quick infusion of capital — we're here to help you move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to a Funding Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}