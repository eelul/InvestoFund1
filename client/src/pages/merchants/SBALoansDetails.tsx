import { CheckCircle, ArrowRight, Landmark, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SBALoansDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">SBA 7(a) Loan Breakdown</h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              The SBA 7(a) loan is ideal for major expansions, acquisitions, and long-term working capital. Enjoy favorable rates and extended terms.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now →
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">SBA 7(a) Loan Features</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Landmark className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Government-Backed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Government-backed loan up to $5 million with SBA guarantee for lender protection.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Extended Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Repayment terms: up to 10 years (working capital), 25 years (real estate). Lower monthly payments.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Competitive interest rates and lower monthly payments compared to conventional loans.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                    <div className="p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Use of Funds</h4>
                      <p className="text-sm text-brand-gray">Working capital, equipment, real estate, or acquisition</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Time in Business</h4>
                      <p className="text-sm text-brand-gray">Operating history and business stability</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Credit Profile & Cash Flow</h4>
                      <p className="text-sm text-brand-gray">Business and personal credit plus financial performance</p>
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
                      <span className="text-brand-gray">Personal and business tax returns (3 years)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">P&L and balance sheet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Debt schedule</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Business plan or growth strategy (if applicable)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-12">Ask Yourself</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Long-Term Readiness</h3>
                  <p className="text-brand-gray">Are you ready for long-term funding?</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Expansion Plans</h3>
                  <p className="text-brand-gray">Is this part of a major expansion plan?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Good to Know</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-indigo-50 border-indigo-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Processing Time</h3>
                  <p className="text-indigo-700">Longer processing time (avg. 10–15 business days) for thorough evaluation.</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Perfect Fit</h3>
                  <p className="text-green-700">Strong fit for stable, growing companies with solid financials.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Full Support</h3>
                  <p className="text-blue-700">InvestoFund guides you from application to funding throughout the process.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="apply-now" className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Government-Backed Funding?</h2>
            <p className="text-xl mb-8 text-indigo-100">Apply for SBA 7(a) Loan and secure long-term growth capital with favorable terms.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold"
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