import { Clock, DollarSign, Shield, CheckCircle, Zap, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EnhancedMerchantApplicationForm from "@/components/forms/EnhancedMerchantApplicationForm";

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
      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">
              Industries We Serve — And Why It Works
            </h2>
            <p className="text-center text-brand-gray mb-12">
              MCA funding gives these businesses fast, flexible access to capital when banks say no — 
              without waiting, paperwork, or collateral.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Retail & E-commerce</h3>
                  <p className="text-sm text-brand-gray">
                    Need funding to restock inventory, launch marketing, or cover seasonal dips.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Restaurants</h3>
                  <p className="text-sm text-brand-gray">
                    Cash flow gaps from delayed invoices, equipment breakdowns, or unexpected repairs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Auto & Transportation</h3>
                  <p className="text-sm text-brand-gray">
                    Vehicle repairs, fuel costs, or parts purchases before reimbursement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Construction & Trades</h3>
                  <p className="text-sm text-brand-gray">
                    Bridge financing while awaiting project payment or to purchase materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Health & Wellness</h3>
                  <p className="text-sm text-brand-gray">
                    Investing in new equipment, staff, or location upgrades.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">Beauty & Salons</h3>
                  <p className="text-sm text-brand-gray">
                    Slow seasons or one-time needs like expansion or rebranding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Funding Details */}
      <section className="py-16 bg-white pt-[60px] pb-[60px]">
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
                      <span className="font-bold text-brand-dark">Up to 6 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Daily Collection</span>
                      <span className="font-bold text-brand-teal">% of daily sales</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            
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
      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Apply for Funding
            </h2>
            <EnhancedMerchantApplicationForm />
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
                  <div className="space-y-4">
                    <p><strong>Percentage of Daily Sales (Split or ACH)</strong> – A fixed percentage is automatically collected from your daily credit card sales or total business deposits. This continues until the full advance, plus agreed-upon fees (called a "factor rate"), is repaid.</p>
                    
                    <p><strong>Fixed Daily or Weekly Debits</strong> – Some agreements use set daily or weekly ACH withdrawals from your business bank account, regardless of sales volume. This option is more predictable, though it may not adjust with fluctuating revenue.</p>
                    
                    <p>It's important to note that repayment terms can vary based on the structure of the deal, the merchant's industry, sales consistency, and the specific funder. The payback duration is typically up to 6 months, but it can change depending on your business performance and the terms negotiated at funding.</p>
                    
                    <p>Always review your agreement carefully, and feel free to contact us if you'd like help understanding your options.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
}
