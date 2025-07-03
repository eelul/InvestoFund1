import { CheckCircle, DollarSign, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InvestorOnboardingForm from "@/components/forms/InvestorOnboardingForm";

export default function Investors() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">
              Alternative Investing. Real-World Returns.
            </h1>
            <p className="text-xl text-brand-gray mb-8">
              Access high-yield MCA investments with transparent profit-sharing and professional management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">High Returns</h3>
                  <p className="text-brand-gray text-sm">
                    Target returns of 20.8%+ per deal with proven profit-sharing model
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Professional Management</h3>
                  <p className="text-brand-gray text-sm">
                    Expert underwriting and deal sourcing through established ISO networks
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Risk Management</h3>
                  <p className="text-brand-gray text-sm">
                    Rigorous underwriting standards and diversification options available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Choose Your Investment Strategy</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <CardTitle className="text-brand-dark">Option 1: Direct Deal Participation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray mb-4">
                    Invest into a single, fully-underwritten MCA deal. This is our most direct investment 
                    option, with clear timelines and predictable returns.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/60 p-3 rounded-lg">
                      <div className="text-sm font-medium text-brand-dark">Minimum Investment: $5,000</div>
                      <div className="text-sm text-brand-gray">Standard factor rate: 1.45x–1.49x</div>
                      <div className="text-sm text-brand-gray">Deal timeline: 25–60 days</div>
                    </div>
                    <div className="text-sm text-brand-gray">
                      <strong>Underwriting includes:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Bank statement analysis</li>
                        <li>UCC search & lien analysis</li>
                        <li>Owner background checks</li>
                        <li>Seasonality & cash flow forecast review</li>
                        <li>Merchant interview & reference check</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-2 rounded text-sm font-medium text-green-800">
                      You receive 50% of net profits on deal completion
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <CardTitle className="text-brand-dark">Option 2: Portfolio Blend (Diversified Participation)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray mb-4">
                    We allocate your funds across multiple active MCA deals. This reduces risk exposure 
                    while maintaining yield — based on the average performance of your portfolio.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/60 p-3 rounded-lg">
                      <div className="text-sm font-medium text-brand-dark">Minimum Investment: $25,000</div>
                      <div className="text-sm text-brand-gray">Each deal receives a slice (e.g., $2,500 × 10 deals)</div>
                      <div className="text-sm text-brand-gray">Factor rates: 1.29–1.49 depending on deal type</div>
                    </div>
                    <div className="text-sm text-brand-gray">
                      <strong>Key Benefits:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Payouts based on average yield across all placements</li>
                        <li>Returns are consistent but slightly lower than single-deal highs</li>
                        <li>Great for passive investors who want diversification</li>
                        <li>Lower volatility through multiple deal exposure</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded text-sm font-medium text-yellow-800">
                      Lower risk through diversification across multiple deals
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-brand-gray text-sm">
                Our underwriting always aims to maximize returns within the constraints of each merchant's capacity, 
                cash flow, and risk score — ensuring a healthy balance of safety and yield.
              </p>
            </div>

            {/* Key Terms */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center text-brand-dark">Key Investment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6 text-center">
                  <div>
                    <div className="text-sm text-brand-gray">Minimum Investment</div>
                    <div className="text-2xl font-bold text-brand-dark">$5,000</div>
                  </div>
                  <div>
                    <div className="text-sm text-brand-gray">Profit Share</div>
                    <div className="text-2xl font-bold text-brand-dark">50/50 Split</div>
                  </div>
                  <div>
                    <div className="text-sm text-brand-gray">Average Term</div>
                    <div className="text-2xl font-bold text-brand-dark">45 Days</div>
                  </div>
                  <div>
                    <div className="text-sm text-brand-gray">Factor Rate</div>
                    <div className="text-2xl font-bold text-brand-dark">1.49x</div>
                  </div>
                  <div>
                    <div className="text-sm text-brand-gray">Target Return</div>
                    <div className="text-2xl font-bold text-brand-teal">20.8%+</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liquidity & Flexibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Liquidity & Flexibility
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Capital Return Policy</h3>
                  <p className="text-brand-gray mb-4">
                    Funds not deployed within 60 days are returned to investors. No long-term lock-up periods.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">60-day deployment window</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Automatic return if undeployed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Exit Flexibility</h3>
                  <p className="text-brand-gray mb-4">
                    Request capital return with 30 days' notice on fully repaid deals. No penalties for early exit.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">30-day notice period</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">No exit penalties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Onboarding Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Start Your Investment Journey
            </h2>
            <InvestorOnboardingForm />
          </div>
        </div>
      </section>

      {/* Investment Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-brand-dark">Investment Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Eligibility Requirements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm text-brand-gray">Accredited investor status preferred</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm text-brand-gray">Minimum investment: $5,000</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm text-brand-gray">Risk tolerance for alternative investments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm text-brand-gray">Understanding of MCA market dynamics</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">What You'll Receive</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">Profit Sharing Agreement (PSA)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">Investor Welcome Packet</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">Risk Disclosure Documentation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">Regular performance updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
