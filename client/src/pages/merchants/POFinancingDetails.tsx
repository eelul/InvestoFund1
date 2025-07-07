import { CheckCircle, ArrowRight, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function POFinancingDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-pink-600 pt-20 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Easy Purchase Order Financing</h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Got orders you can't fulfill due to cash constraints? Use P.O. financing to cover supplier costs and deliver with confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
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
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">P.O. Financing Features</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Order-Based Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Advance based on confirmed purchase orders. Funds go directly to suppliers for fulfillment.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-brand-dark">Not a Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Not a loan — no long-term debt added. Quick and simple approval process.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-brand-blue" />
                  </div>
                  <CardTitle className="text-brand-dark">Growth Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray">Perfect for growth-stage businesses landing big deals they can't finance themselves.</p>
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
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Order Quality and Risk</h4>
                      <p className="text-sm text-brand-gray">Purchase order legitimacy and fulfillment complexity</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Customer Reliability</h4>
                      <p className="text-sm text-brand-gray">Your customer's payment history and creditworthiness</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-brand-dark mb-1">Funding Timeline</h4>
                      <p className="text-sm text-brand-gray">Expected delivery and payment schedule</p>
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
                      <span className="text-brand-gray">List of active/unfulfilled purchase orders</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Financials</span>
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
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Order Status</h3>
                  <p className="text-brand-gray">Do you have unfulfilled orders?</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Delivery Capability</h3>
                  <p className="text-brand-gray">Can you deliver on-time with outside help?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="apply-now" className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Fulfill Your Orders?</h2>
            <p className="text-xl mb-8 text-red-100">Apply for P.O. Financing and turn your big opportunities into delivered results.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/merchants#apply-funding'}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold"
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