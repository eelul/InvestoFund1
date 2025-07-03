import { Clock, DollarSign, Shield, CheckCircle, Zap, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MerchantApplicationForm from "@/components/forms/MerchantApplicationForm";

export default function Merchants() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">
              Fast Capital. Simple Terms. Fair Offers.
            </h1>
            <p className="text-xl text-brand-gray mb-8">
              Get the working capital your business needs with our streamlined Merchant Cash Advance process.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Fast Funding</h3>
                  <p className="text-brand-gray">
                    Get approved and funded in as little as 24-48 hours with our streamlined process.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Flexible Terms</h3>
                  <p className="text-brand-gray">
                    Repayment based on daily sales, not fixed monthly payments. Grow at your own pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">No Hidden Fees</h3>
                  <p className="text-brand-gray">
                    Transparent pricing with no hidden fees or surprises. You know exactly what you're paying.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Funding Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Funding Amounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Minimum Advance</span>
                      <span className="font-bold text-brand-dark">$5,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Maximum Advance</span>
                      <span className="font-bold text-brand-dark">$250,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Typical Range</span>
                      <span className="font-bold text-brand-teal">$15,000 - $50,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Repayment Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Factor Rates</span>
                      <span className="font-bold text-brand-dark">1.2x - 1.5x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Repayment Period</span>
                      <span className="font-bold text-brand-dark">3-18 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Daily Collection</span>
                      <span className="font-bold text-brand-teal">% of daily sales</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Industry Examples */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center text-brand-dark">Who We Work With</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="text-sm text-brand-gray">Restaurants</span>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className="text-sm text-brand-gray">Retail Stores</span>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-green-500" />
                    </div>
                    <span className="text-sm text-brand-gray">Auto Repair</span>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-yellow-500" />
                    </div>
                    <span className="text-sm text-brand-gray">Beauty Salons</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-center mt-4">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-purple-500" />
                    </div>
                    <span className="text-sm text-brand-gray">Professional Services</span>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-sm text-brand-gray">Healthcare</span>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-indigo-500" />
                    </div>
                    <span className="text-sm text-brand-gray">Construction</span>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-pink-500" />
                    </div>
                    <span className="text-sm text-brand-gray">E-commerce</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Apply for Funding
            </h2>
            <MerchantApplicationForm />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Our Simple Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Apply Online</h3>
                <p className="text-sm text-brand-gray">
                  Complete our simple application with basic business information
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Quick Review</h3>
                <p className="text-sm text-brand-gray">
                  Our team reviews your application and documents within hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Get Approved</h3>
                <p className="text-sm text-brand-gray">
                  Receive your offer with transparent terms and conditions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Get Funded</h3>
                <p className="text-sm text-brand-gray">
                  Funds deposited directly into your business account
                </p>
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
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  Is this a loan?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  No, this is a merchant cash advance. We purchase a portion of your future sales at a discount, 
                  not a traditional loan. This means no fixed monthly payments and repayment is based on your actual sales performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  What are the fees?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  We use a factor rate system (typically 1.2x to 1.5x) with no hidden fees. The factor rate depends on 
                  your business's performance, industry, and credit profile. You'll know the total cost upfront before signing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  Do I need good credit?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Credit is considered, but we focus more on your business's cash flow and daily sales performance. 
                  Many businesses with less-than-perfect credit can still qualify based on their revenue and business strength.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  How fast can I get funded?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Most applications are reviewed within 24 hours. Once approved, funding typically occurs within 
                  1-3 business days depending on your bank and the completeness of your documentation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  What documents do I need?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Typically, we need 3-6 months of bank statements, a voided business check, and basic business 
                  information. Additional documents may be required depending on your specific situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-brand-dark">
                  How does repayment work?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Repayment is based on a percentage of your daily credit card sales. When sales are good, 
                  you pay more; when sales are slower, you pay less. This ensures payments align with your cash flow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Essential Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">3-6 months business bank statements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Voided business check</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Valid government-issued ID</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Business license (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Additional Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Articles of incorporation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Recent tax returns</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Profit & loss statements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-brand-gray">Lease agreement (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
