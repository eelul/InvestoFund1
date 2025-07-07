import { CheckCircle, Clock, ArrowRight, FileText, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TermLoansDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-brand-teal via-teal-500 to-cyan-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Long-Term Financing That Positions You for Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Secure a lump sum with fixed payments and terms. Ideal for planned projects, expansion, or refinancing high-interest debt.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
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
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Term Loan Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-brand-teal" />
                  </div>
                  <CardTitle className="text-brand-dark">Fixed Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Loan amounts based on cash flow, credit, and purpose. Terms from 1 to 5 years.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Monthly Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Monthly repayment schedule. Rates range from 7.9% – 24.99% based on qualifications.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Best Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">
                    Best rates for the most qualified businesses. Underwriting takes 2–3 weeks on average.
                  </p>
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
                  <CardTitle className="text-brand-dark">Rate Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Industry & Loan Purpose</h4>
                      <p className="text-sm text-brand-gray">Business sector and intended use of funds</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Time in Business</h4>
                      <p className="text-sm text-brand-gray">Business history and operational stability</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Credit & Financial Strength</h4>
                      <p className="text-sm text-brand-gray">Credit profile and financial performance</p>
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
                      <span className="text-brand-gray">6 months bank statements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">2 years business returns + 1 personal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Debt schedule</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Financials (P&L and balance sheet)</span>
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
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Financial Stability</h3>
                  <p className="text-brand-gray">Is my business financially stable?</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Payment Ability</h3>
                  <p className="text-brand-gray">Can I manage monthly payments?</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">ROI Potential</h3>
                  <p className="text-brand-gray">What's my long-term ROI on this funding?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="apply-now" className="py-16 bg-gradient-to-r from-brand-teal to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Long-Term Growth?</h2>
            <p className="text-xl mb-8 text-teal-100">Apply for Term Loan Financing and secure predictable capital for your business expansion.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-teal px-8 py-4 text-lg font-semibold"
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