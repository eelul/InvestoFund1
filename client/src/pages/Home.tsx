import { Link } from "wouter";
import { TrendingUp, Target, Users, Shield, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StandardROICalculator from "@/components/calculators/StandardROICalculator";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">
              Alternative Investment
              <span className="brand-text-gradient block">
                Opportunities
              </span>
            </h1>
            <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto">
              Partner with InvestoFund to access high-yield Merchant Cash Advance investments. 
              Starting from $5,000, achieve potentially exceptional returns through our proven profit-sharing model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investors">
                <Button className="bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-3">
                  View Investment Details
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculate Returns
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">20.8%+</div>
              <div className="text-brand-gray">Return Per Deal</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">$5K</div>
              <div className="text-brand-gray">Minimum Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-dark mb-2">45</div>
              <div className="text-brand-gray">Days Avg. Term</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Performance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-12">Portfolio Performance</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-brand-gray mb-1">Initial Investment</div>
                  <div className="text-2xl font-bold text-brand-dark">$25,000</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Total Repayment</div>
                  <div className="text-2xl font-bold text-brand-dark">$37,250</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Your Share (50%)</div>
                  <div className="text-2xl font-bold text-brand-teal">$5,206.25</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Net Return</div>
                  <div className="text-2xl font-bold text-green-600">20.83%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <StandardROICalculator />
        </div>
      </section>

      {/* The InvestoFund Opportunity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
            The InvestoFund Opportunity
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="w-10 h-10 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Market Opportunity</h3>
                  <p className="text-brand-gray">
                    Small and medium businesses need fast, flexible working capital. Traditional banks are 
                    too slow and rigid for their urgent financing needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Target className="w-10 h-10 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Our Solution</h3>
                  <p className="text-brand-gray">
                    InvestoFund provides efficient Merchant Cash Advances, purchasing future receivables 
                    to deliver immediate funding to businesses.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Shield className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Competitive Edge</h3>
                  <p className="text-brand-gray">
                    Strong ISO relationships, rigorous underwriting, streamlined operations, and transparent 
                    partnerships delivering $5K-$1M deals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
            How InvestoFund Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Capital Contribution</h3>
                  <p className="text-brand-gray">
                    Investors contribute capital starting from $5,000 minimum investment to fund 
                    high-quality MCA opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Deal Sourcing</h3>
                  <p className="text-brand-gray">
                    Through strong ISO relationships, we source and underwrite high-quality merchant 
                    cash advance deals ranging $5K-$1M.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Capital Deployment</h3>
                  <p className="text-brand-gray">
                    Your capital is deployed directly into vetted MCA deals with rigorous underwriting 
                    and risk mitigation strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Profit Distribution</h3>
                  <p className="text-brand-gray">
                    Upon full collection, profits are distributed via 50/50 split, typically within 
                    25-60 days of deal completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
            Risk Mitigation & Transparency
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-dark">Identified Risks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-brand-dark">Merchant Default Risk</h4>
                      <p className="text-sm text-brand-gray">
                        Risk of non-payment during downturns or business failures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-brand-dark">Recharacterization Risk</h4>
                      <p className="text-sm text-brand-gray">
                        Legal challenge potentially reclassifying advances as loans.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-brand-dark">Liquidity Delays</h4>
                      <p className="text-sm text-brand-gray">
                        Variations in repayment schedules affecting cash flow timing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-dark">Mitigation Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-brand-dark">Rigorous Underwriting</h4>
                      <p className="text-sm text-brand-gray">
                        Comprehensive due diligence and UCC-1 filings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-brand-dark">Legal Compliance</h4>
                      <p className="text-sm text-brand-gray">
                        Meticulously drafted agreements with clear terms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-brand-dark">Portfolio Diversification</h4>
                      <p className="text-sm text-brand-gray">
                        Diversified across industries and deal sizes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Leadership Team</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 brand-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Frank Johnson</h3>
                <p className="text-brand-blue font-medium mb-2">Chief Executive Officer</p>
                <p className="text-sm text-brand-gray">
                  15+ years in alternative financing and business development with proven track record in MCA markets.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 brand-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Bernard Smith</h3>
                <p className="text-brand-blue font-medium mb-2">Chief Legal Officer</p>
                <p className="text-sm text-brand-gray">
                  Expert in financial services law and regulatory compliance with specialized MCA legal framework expertise.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 brand-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Sarah Williams</h3>
                <p className="text-brand-blue font-medium mb-2">Chief Risk Officer</p>
                <p className="text-sm text-brand-gray">
                  Veteran underwriter with extensive experience in credit analysis and risk management for alternative financing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 brand-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join InvestoFund and access high-yield alternative investments with our proven profit-sharing model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investors">
              <Button className="bg-white text-brand-blue hover:bg-brand-light px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3 font-medium">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
