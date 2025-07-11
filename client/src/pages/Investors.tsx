import { CheckCircle, DollarSign, TrendingUp, Shield, Target, BarChart3, Clock, Award, Star, ArrowRight, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InvestorOnboardingForm from "@/components/forms/InvestorOnboardingForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/scrollUtils";

export default function Investors() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Star className="w-4 h-4" />
              <span>20.8%+ Average Returns Per Deal</span>
              <Star className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">
              Alternative Investing.
              <span className="brand-text-gradient block">Real-World Returns.</span>
            </h1>
            <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
              Access exclusive high-yield MCA investments with <strong className="text-brand-dark">transparent profit-sharing</strong> and professional management. 
              Join <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">1,250+ investors</span> already earning exceptional returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/dashboard/investor-v1-demo">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Target className="w-5 h-5 mr-2" />
                  Fast Deal Deployment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-dark hover:to-brand-blue text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToElement('start-investing')}
              >
                <Users className="w-5 h-5 mr-2" />
                Start Investing Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/#calculator">
                <Button 
                  variant="outline" 
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Calculate Returns
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-1">
                    <AnimatedCounter end={20.8} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-brand-gray">Target Return/Deal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-1">
                    <AnimatedCounter end={45} />
                  </div>
                  <div className="text-sm text-brand-gray">Days Avg. Term</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    <AnimatedCounter end={94.7} suffix="%" decimals={1} />
                  </div>
                  <div className="text-sm text-brand-gray">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-dark mb-1">
                    <AnimatedCounter end={5000} prefix="$" />
                  </div>
                  <div className="text-sm text-brand-gray">Minimum Investment</div>
                </div>
              </div>
            </div>
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
                    <CardTitle className="text-brand-dark">Direct Deal Participation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray mb-4">
                    Invest into a single, fully-underwritten MCA deal with manual approval control. 
                    Select your preferred factor rates, terms, and merchant types for targeted returns.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/60 p-3 rounded-lg">
                      <div className="text-sm font-medium text-brand-dark">Minimum Investment: $5,000</div>
                      <div className="text-sm text-brand-gray">Factor rate range: 1.15x–1.49x (you choose preferences)</div>
                      <div className="text-sm text-brand-gray">Deal terms: 25 days to 18 months (full MCA range available)</div>
                      <div className="text-sm text-brand-gray">Funding amounts: $2,000–$2,000,000 per deal</div>
                    </div>
                    <div className="text-sm text-brand-gray">
                      <strong>MCA Deal Control Features:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Manual deal approval via investor dashboard</li>
                        <li>Set factor rate preferences (1.15x-1.49x range)</li>
                        <li>Choose term length limits (25 days to 18 months)</li>
                        <li>Industry filtering (retail, restaurants, healthcare, etc.)</li>
                        <li>Risk level selection control and merchant type filtering</li>
                        <li>Re-advance eligibility tracking and same-day funding</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-2 rounded text-sm font-medium text-green-800">
                      You receive 50% of net profits - up to 20.8% returns per deal
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <CardTitle className="text-brand-dark">Portfolio Blend (Diversified Participation)</CardTitle>
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
                      <div className="text-sm text-brand-gray">Auto-allocated across 8-12 MCA deals (e.g., $2,500 × 10 deals)</div>
                      <div className="text-sm text-brand-gray">Factor rates: 1.15x–1.49x across diversified deal portfolio</div>
                      <div className="text-sm text-brand-gray">Deal terms: 25 days to 18 months (auto-balanced distribution)</div>
                    </div>
                    <div className="text-sm text-brand-gray">
                      <strong>MCA Portfolio Features:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Multi-industry spread (retail, healthcare, restaurants, e-commerce)</li>
                        <li>Risk-balanced credit grades (A-D) with professional monitoring</li>
                        <li>Mixed payment schedules (daily, weekly, bi-weekly, monthly)</li>
                        <li>Both ACH and credit card holdback funding types</li>
                        <li>Professional deal curation and consolidated reporting</li>
                        <li>18.7% target returns after 10% management fee</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded text-sm font-medium text-yellow-800">
                      Moderate risk through automated MCA diversification and professional management
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-brand-gray text-sm pt-[10px] pb-[10px]">
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
                    <div className="text-sm text-brand-gray">Term Range</div>
                    <div className="text-2xl font-bold text-brand-dark">25 Days-18 Months</div>
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
      <section id="start-investing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">
              Start Your Investment Journey
            </h2>
            <p className="text-center text-brand-gray mb-12">
              Choose your investment approach and begin the onboarding process
            </p>
            
            {/* Quick Option Selection */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    Direct Deal Participation
                  </h3>
                  <p className="text-brand-gray text-sm mb-4">
                    Invest in a single, fully-underwritten MCA deal with factor rates 1.15x-1.49x
                  </p>
                  <div className="text-green-700 font-medium">
                    Minimum: $5,000
                  </div>
                  <div className="text-xs text-brand-gray mt-2">
                    Terms: 25 days to 18 months • Higher risk, higher control
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    Portfolio Blend (Diversified)
                  </h3>
                  <p className="text-brand-gray text-sm mb-4">
                    Diversify across multiple MCA deals with auto-balanced risk management
                  </p>
                  <div className="text-yellow-700 font-medium">
                    Minimum: $25,000
                  </div>
                  <div className="text-xs text-brand-gray mt-2">
                    Mixed terms: 25 days to 18 months • Moderate risk, professional management
                  </div>
                </CardContent>
              </Card>
            </div>

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
