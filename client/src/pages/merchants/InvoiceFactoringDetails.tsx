import { CheckCircle, ArrowRight, Receipt, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InvoiceFactoringDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Factoring Made Simple</h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              Convert unpaid invoices into immediate working capital. Eliminate the wait and stay cash-flow positive.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
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
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Invoice Factoring Features</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Receipt className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Immediate Cash</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Sell eligible invoices for immediate cash. No debt incurred — just faster access to funds.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Client-Based Approval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Approval based on invoice quality and client creditworthiness, not just your credit.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">B2B Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Only available for B2B invoices. Residual option for repeat factoring needs.</p>
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
                    <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Invoice Value</h4>
                      <p className="text-sm text-brand-gray">Size and amount of individual invoices</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Time Until Payment</h4>
                      <p className="text-sm text-brand-gray">Expected payment timeline from clients</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Debtor Creditworthiness</h4>
                      <p className="text-sm text-brand-gray">Your client's credit strength and payment history</p>
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
                      <span className="text-brand-gray">Sample invoice</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Accounts receivable aging report</span>
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
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Payment Timeline</h3>
                  <p className="text-brand-gray">Are your customers taking too long to pay?</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Cash Flow Needs</h3>
                  <p className="text-brand-gray">Do you need funds to keep operations moving?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="apply-now" className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Paid Now?</h2>
            <p className="text-xl mb-8 text-yellow-100">Apply for Invoice Factoring and convert your receivables into immediate working capital.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg font-semibold"
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