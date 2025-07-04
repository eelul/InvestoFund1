import { useState } from "react";
import { Link } from "wouter";
import { TrendingUp, Target, Users, Shield, DollarSign, Clock, Calculator, ArrowRight, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StandardROICalculator from "@/components/calculators/StandardROICalculator";

export default function Home() {
  const [investmentAmount, setInvestmentAmount] = useState([25000]);
  const [timeHorizon, setTimeHorizon] = useState([12]);

  // Portfolio types with different return profiles
  const portfolioTypes = {
    aggressive: {
      name: "Aggressive Portfolio",
      description: "High-yield, shorter-term deals",
      monthlyReturn: 0.032, // 3.2% per month
      riskLevel: "Higher Risk",
      avgDealLength: "35 days",
      color: "text-red-500"
    },
    balanced: {
      name: "Balanced Portfolio", 
      description: "Mixed deal types and terms",
      monthlyReturn: 0.028, // 2.8% per month
      riskLevel: "Moderate Risk",
      avgDealLength: "45 days", 
      color: "text-brand-blue"
    },
    conservative: {
      name: "Conservative Portfolio",
      description: "Lower risk, established merchants",
      monthlyReturn: 0.024, // 2.4% per month
      riskLevel: "Lower Risk",
      avgDealLength: "60 days",
      color: "text-green-500"
    }
  };

  const calculateReturns = (amount: number, months: number, monthlyRate: number) => {
    let total = amount;
    const monthlyBreakdown = [];
    
    for (let i = 1; i <= months; i++) {
      const monthlyProfit = total * monthlyRate;
      total += monthlyProfit;
      monthlyBreakdown.push({
        month: i,
        profit: monthlyProfit,
        total: total,
        cumulative: total - amount
      });
    }
    
    return {
      totalReturn: total,
      totalProfit: total - amount,
      annualizedReturn: Math.pow(total / amount, 12 / months) - 1,
      monthlyBreakdown
    };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">
              <span className="relative">
                Unlock Extraordinary
                <div className="absolute -top-2 -right-12 bg-brand-teal text-white text-sm px-3 py-1 rounded-full transform rotate-12 animate-pulse hidden md:block">
                  20.8%+ Returns!
                </div>
              </span>
              <span className="brand-text-gradient block">
                Investment Returns
              </span>
            </h1>
            <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
              <span className="font-semibold text-brand-dark">Transform your portfolio</span> with InvestoFund's 
              exclusive Merchant Cash Advance opportunities. Join successful investors earning 
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold mx-1">
                2.4% - 3.2% monthly returns
              </span>
              through our proven profit-sharing model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/investors">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-dark hover:to-brand-blue text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Earning 20.8%+ Returns
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate My Returns
                <BarChart3 className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Excitement Bar */}
            <div className="bg-white rounded-full shadow-lg p-4 max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-brand-gray">Live: <strong className="text-brand-dark">$2.3M</strong> invested this month</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-brand-blue mr-2" />
                  <span className="text-brand-gray">Avg Deal Term: <strong className="text-brand-dark">45 days</strong></span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-brand-teal mr-2" />
                  <span className="text-brand-gray">Success Rate: <strong className="text-brand-dark">94.7%</strong></span>
                </div>
              </div>
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

      {/* Interactive Profit Potential Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-brand-teal mr-3" />
                <h2 className="text-4xl font-bold text-brand-dark">
                  Discover Your Profit Potential
                </h2>
              </div>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                See how your investment could grow with our three portfolio strategies. 
                Adjust the sliders to explore different scenarios and timeframes.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                {/* Investment Amount Slider */}
                <div>
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-5 h-5 text-brand-blue mr-2" />
                    <label className="text-lg font-semibold text-brand-dark">
                      Investment Amount
                    </label>
                  </div>
                  <div className="space-y-4">
                    <Slider
                      value={investmentAmount}
                      onValueChange={setInvestmentAmount}
                      max={500000}
                      min={5000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-brand-gray">
                      <span>$5,000</span>
                      <span className="text-2xl font-bold text-brand-dark">
                        ${investmentAmount[0].toLocaleString()}
                      </span>
                      <span>$500,000</span>
                    </div>
                  </div>
                </div>

                {/* Time Horizon Slider */}
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-brand-teal mr-2" />
                    <label className="text-lg font-semibold text-brand-dark">
                      Time Horizon
                    </label>
                  </div>
                  <div className="space-y-4">
                    <Slider
                      value={timeHorizon}
                      onValueChange={setTimeHorizon}
                      max={36}
                      min={3}
                      step={3}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-brand-gray">
                      <span>3 months</span>
                      <span className="text-2xl font-bold text-brand-dark">
                        {timeHorizon[0]} months
                      </span>
                      <span>36 months</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Comparison */}
              <Tabs defaultValue="balanced" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="conservative" className="text-sm">
                    Conservative
                  </TabsTrigger>
                  <TabsTrigger value="balanced" className="text-sm">
                    Balanced
                  </TabsTrigger>
                  <TabsTrigger value="aggressive" className="text-sm">
                    Aggressive
                  </TabsTrigger>
                </TabsList>

                {Object.entries(portfolioTypes).map(([key, portfolio]) => {
                  const returns = calculateReturns(
                    investmentAmount[0], 
                    timeHorizon[0], 
                    portfolio.monthlyReturn
                  );

                  return (
                    <TabsContent key={key} value={key} className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">
                          {portfolio.name}
                        </h3>
                        <p className="text-brand-gray mb-4">{portfolio.description}</p>
                        <div className="flex items-center justify-center space-x-6 text-sm">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${
                              key === 'aggressive' ? 'bg-red-500' : 
                              key === 'balanced' ? 'bg-brand-blue' : 'bg-green-500'
                            }`}></div>
                            <span className="text-brand-gray">{portfolio.riskLevel}</span>
                          </div>
                          <div className="text-brand-gray">
                            Avg Deal: {portfolio.avgDealLength}
                          </div>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid md:grid-cols-4 gap-6">
                        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">
                              ${returns.totalProfit.toLocaleString()}
                            </div>
                            <div className="text-sm text-green-700">Total Profit</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                              ${returns.totalReturn.toLocaleString()}
                            </div>
                            <div className="text-sm text-blue-700">Total Value</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">
                              {(returns.annualizedReturn * 100).toFixed(1)}%
                            </div>
                            <div className="text-sm text-purple-700">Annualized Return</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-1">
                              {((returns.totalProfit / investmentAmount[0]) * 100).toFixed(1)}%
                            </div>
                            <div className="text-sm text-orange-700">Total Return</div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Growth Visualization */}
                      <Card className="bg-gray-50">
                        <CardHeader>
                          <CardTitle className="flex items-center text-lg">
                            <BarChart3 className="w-5 h-5 mr-2 text-brand-blue" />
                            Growth Timeline
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {returns.monthlyBreakdown.slice(0, 8).map((month, index) => (
                              <div key={index} className="text-center">
                                <div className="text-sm text-brand-gray mb-1">
                                  Month {month.month}
                                </div>
                                <div className="text-lg font-semibold text-brand-dark">
                                  ${month.total.toLocaleString()}
                                </div>
                                <div className="text-xs text-green-600">
                                  +${month.profit.toLocaleString()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  );
                })}
              </Tabs>

              {/* Call to Action */}
              <div className="text-center mt-8 p-6 bg-gradient-to-r from-brand-blue to-brand-teal rounded-xl text-white">
                <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                <p className="mb-4 opacity-90">
                  Join thousands of investors already earning exceptional returns
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/investors">
                    <Button className="bg-white text-brand-blue hover:bg-gray-100">
                      Start Investing Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-brand-blue"
                    onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Try Advanced Calculator
                  </Button>
                </div>
              </div>
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
