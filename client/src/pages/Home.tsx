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

  // InvestoFund Business Logic - Two Investment Options
  const investmentOptions = {
    option1: {
      name: "Option 1: Direct Deal Participation", 
      description: "Higher risk, direct control over individual MCA deals with approval options",
      targetFactorRate: 1.49, // Target rate - actual rates vary
      factorRateRange: "1.35x - 1.65x",
      termRange: "10-180 days", // Variable terms based on deal type
      avgTerm: 45, // Average for calculations
      profitSplit: 0.50, // 50% to investor after ISO commission
      targetROI: 0.208, // ~20.8% target per deal
      minInvestment: 5000,
      riskLevel: "Higher Risk",
      color: "text-orange-600",
      features: [
        "Manual deal approval via dashboard",
        "Set factor rate preferences",
        "Choose term length limits", 
        "Risk level selection control",
        "Quick approval timeframes"
      ]
    },
    option2: {
      name: "Option 2: Diversified Portfolio",
      description: "Lower risk through automated diversification across multiple deal terms and types", 
      targetFactorRate: 1.49, // Target rate - actual rates vary
      factorRateRange: "1.35x - 1.65x",
      termRange: "10-180 days", // Diversified across all terms
      avgTerm: 45, // Average for calculations
      profitSplit: 0.45, // 45% to investor (Fund takes 55% including 10% management fee)
      targetROI: 0.187, // ~18.7% target per deal
      minInvestment: 25000,
      riskLevel: "Moderate Risk", 
      color: "text-brand-blue",
      features: [
        "Auto-approval within set parameters",
        "Diversified across deal terms",
        "Risk-balanced deal selection",
        "Automated portfolio management",
        "Professional deal curation"
      ]
    }
  };

  // Calculate returns based on InvestoFund business logic (using target scenarios)
  const calculateInvestoFundReturns = (investment: number, months: number, option: 'option1' | 'option2') => {
    const optionData = investmentOptions[option];
    const dealsPerYear = Math.floor(365 / optionData.avgTerm); // ~8 deals per year
    const totalDeals = Math.floor((months / 12) * dealsPerYear);
    
    let currentValue = investment;
    const dealBreakdown = [];
    
    for (let deal = 1; deal <= totalDeals; deal++) {
      // Using target factor rate for projections
      const repayment = currentValue * optionData.targetFactorRate;
      const grossProfit = repayment - currentValue;
      
      // ISO Commission (15% of gross profit)
      const isoCommission = grossProfit * 0.15;
      const netProfit = grossProfit - isoCommission;
      
      // Investor share based on profit split
      const investorShare = netProfit * optionData.profitSplit;
      currentValue += investorShare;
      
      dealBreakdown.push({
        deal,
        investorShare,
        total: currentValue,
        roi: (investorShare / (currentValue - investorShare)) * 100
      });
    }
    
    const totalProfit = currentValue - investment;
    const totalROI = (totalProfit / investment) * 100;
    const annualizedROI = totalDeals > 0 ? (totalROI / totalDeals) * dealsPerYear : 0;
    
    return {
      totalProfit,
      totalReturn: currentValue,
      totalROI,
      annualizedROI,
      totalDeals,
      dealBreakdown,
      perDealROI: optionData.targetROI * 100 // Per deal target ROI percentage
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
              exclusive Merchant Cash Advance opportunities. Join successful investors targeting 
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold mx-1">
                up to 20.8% per deal (45 days)*
              </span>
              through our proven profit-sharing model.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-8">
              *Returns vary based on available deal opportunities. Factor rates typically range from 1.35x to 1.65x. 
              Projections shown are based on target scenarios and are not guaranteed.
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

              {/* Two Investment Options Comparison */}
              <Tabs defaultValue="option2" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="option1" className="text-sm">
                    Option 1: Direct Deal
                  </TabsTrigger>
                  <TabsTrigger value="option2" className="text-sm">
                    Option 2: Diversified Portfolio
                  </TabsTrigger>
                </TabsList>

                {Object.entries(investmentOptions).map(([key, option]) => {
                  // Only show calculators for investments above minimum
                  if (investmentAmount[0] < option.minInvestment) {
                    return (
                      <TabsContent key={key} value={key} className="space-y-6">
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                          <h3 className="text-2xl font-bold text-brand-dark mb-2">
                            {option.name}
                          </h3>
                          <p className="text-brand-gray mb-4">{option.description}</p>
                          <div className="text-lg text-orange-600 font-semibold">
                            Minimum investment: ${option.minInvestment.toLocaleString()}
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Please adjust the investment amount above to see projections.
                          </p>
                        </div>
                      </TabsContent>
                    );
                  }

                  const returns = calculateInvestoFundReturns(
                    investmentAmount[0], 
                    timeHorizon[0], 
                    key as 'option1' | 'option2'
                  );

                  return (
                    <TabsContent key={key} value={key} className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">
                          {option.name}
                        </h3>
                        <p className="text-brand-gray mb-4">{option.description}</p>
                        <div className="flex items-center justify-center space-x-6 text-sm">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${option.color.replace('text-', 'bg-')}`}></div>
                            <span className="text-brand-gray">{option.riskLevel}</span>
                          </div>
                          <div className="text-brand-gray">
                            Target Rate: {option.targetFactorRate}x
                          </div>
                          <div className="text-brand-gray">
                            Range: {option.factorRateRange}
                          </div>
                          <div className="text-brand-gray">
                            Term Range: {option.termRange}
                          </div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <Card className="bg-gray-50 border-gray-200">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-brand-dark mb-3">Key Features</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {option.features?.map((feature, index) => (
                              <div key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Reinvestment Strategy Explanation */}
                      <Card className="bg-orange-50 border-orange-200">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-orange-700 mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            How Big Returns Are Really Made
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Single Deal Limits:</h5>
                              <div className="text-sm text-gray-700 space-y-1">
                                <p>• Maximum factor rate: <strong>1.49x</strong></p>
                                <p>• Maximum single deal profit: <strong>49%</strong></p>
                                <p>• One-time return only</p>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Reinvestment Power:</h5>
                              <div className="text-sm text-gray-700 space-y-1">
                                <p>• Each deal's profits reinvested</p>
                                <p>• Compound growth over time</p>
                                <p>• <strong>This is where massive returns come from</strong></p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Results Grid */}
                      <div className="grid md:grid-cols-4 gap-6">
                        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                          <CardContent className="p-4 text-center">
                            <div className="text-lg sm:text-xl font-bold text-green-600 mb-1 break-words">
                              ${Math.round(returns.totalProfit).toLocaleString()}
                            </div>
                            <div className="text-xs sm:text-sm text-green-700">Total Profit</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                          <CardContent className="p-4 text-center">
                            <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1 break-words">
                              ${Math.round(returns.totalReturn).toLocaleString()}
                            </div>
                            <div className="text-xs sm:text-sm text-blue-700">Total Value</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                          <CardContent className="p-4 text-center">
                            <div className="text-lg sm:text-xl font-bold text-purple-600 mb-1">
                              {returns.perDealROI.toFixed(1)}%
                            </div>
                            <div className="text-xs sm:text-sm text-purple-700">Per Deal ROI</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                          <CardContent className="p-4 text-center">
                            <div className="text-lg sm:text-xl font-bold text-orange-600 mb-1">
                              {returns.totalDeals}
                            </div>
                            <div className="text-xs sm:text-sm text-orange-700">Total Deals</div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Deal Breakdown Visualization */}
                      <Card className="bg-gray-50">
                        <CardHeader>
                          <CardTitle className="flex items-center text-lg">
                            <BarChart3 className="w-5 h-5 mr-2 text-brand-blue" />
                            Deal-by-Deal Breakdown: The Reinvestment Advantage
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {/* Key Explanation */}
                          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                            <div className="text-sm">
                              <p className="font-semibold text-blue-800 mb-2">Why Reinvestment Creates Massive Returns:</p>
                              <p className="text-blue-700 mb-1">• Individual deal maximum: <strong>1.49x factor rate</strong></p>
                              <p className="text-blue-700 mb-1">• Single deal profit: <strong>49% return maximum</strong></p>
                              <p className="text-blue-700">• Reinvestment strategy: <strong>Profits from each deal become investment capital for the next</strong></p>
                            </div>
                          </div>

                          {returns.totalDeals > 0 ? (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {returns.dealBreakdown.slice(0, 8).map((deal, index) => (
                                  <div key={index} className="text-center p-3 bg-white rounded-lg border">
                                    <div className="text-sm text-brand-gray mb-1">
                                      Deal {deal.deal}
                                      {index > 0 && <div className="text-xs text-green-600">+ reinvested profits</div>}
                                    </div>
                                    <div className="text-lg font-semibold text-brand-dark">
                                      ${deal.total.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-green-600">
                                      +${deal.investorShare.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      1.49x max factor
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                <div className="text-sm text-green-800">
                                  <strong>Compound Effect:</strong> Starting with ${investmentAmount[0].toLocaleString()}, each 49% profit gets reinvested. 
                                  After {returns.totalDeals} deals, your total grows to ${Math.round(returns.totalReturn).toLocaleString()} - 
                                  that's {((returns.totalReturn / investmentAmount[0] - 1) * 100).toFixed(0)}% total return through reinvestment!
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center text-gray-500">
                              No deals would complete in this timeframe. Try extending the time horizon.
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* Business Logic Details */}
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-brand-dark mb-3">InvestoFund Business Logic</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-brand-gray">• Target Factor Rate: {option.targetFactorRate}x</div>
                              <div className="text-brand-gray">• Factor Range: {option.factorRateRange}</div>
                              <div className="text-brand-gray">• ISO Commission: 15% of gross profit</div>
                              <div className="text-brand-gray">• Investor Share: {(option.profitSplit * 100).toFixed(0)}% of net profit</div>
                            </div>
                            <div>
                              <div className="text-brand-gray">• Term Range: {option.termRange}</div>
                              <div className="text-brand-gray">• Deal Frequency: Variable based on market</div>
                              <div className="text-brand-gray">• Target Per Deal ROI: {(option.targetROI * 100).toFixed(1)}%</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Deal Management Features */}
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-brand-dark mb-3 flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            How InvestoFund Manages Your Deals
                          </h4>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>• <strong>Variable Terms:</strong> Deal terms range from 10 days to 6 months based on merchant needs and market conditions.</p>
                            <p>• <strong>Dashboard Control:</strong> Receive deal notifications via your investor dashboard with short approval timeframes.</p>
                            <p>• <strong>Auto-Settings:</strong> Set preferences for factor rate ranges, term limits, and risk levels for automatic deal matching.</p>
                            <p>• <strong>Deal Prioritization:</strong> InvestoFund curates deals to match your selected risk level and investment goals.</p>
                            <p>• <strong>Quick Deployment:</strong> Deals can close in as little as 10-15 days when terms align with market conditions.</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Important Disclaimer */}
                      <Card className="bg-yellow-50 border-yellow-200">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-orange-600 mb-3 flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Important Disclaimer
                          </h4>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>• <strong>Variable Deal Terms:</strong> Deal terms range from 10 days to 6 months with factor rates from 1.35x to 1.65x based on market conditions.</p>
                            <p>• <strong>Target Scenarios:</strong> Calculations shown use target factor rates of 1.49x. Actual deals vary based on merchant negotiations.</p>
                            <p>• <strong>Deal Approval:</strong> Investors control deal participation through dashboard settings or manual approval for each opportunity.</p>
                            <p>• <strong>Timeline Variability:</strong> While some deals close in 10-15 days, others may take months - InvestoFund manages this based on your preferences.</p>
                            <p>• <strong>Risk Notice:</strong> All investments carry risk. Past performance does not guarantee future results.</p>
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
            <h2 className="text-3xl font-bold text-brand-dark mb-12">Per Deal Performance Example</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6 text-center">
                <div className="text-lg text-brand-gray mb-2">Target Scenario - Direct Deal Participation</div>
                <div className="text-sm text-gray-500">
                  *Actual results vary based on deal terms and market conditions
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-brand-gray mb-1">Initial Investment</div>
                  <div className="text-2xl font-bold text-brand-dark">$25,000</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Merchant Repayment (1.49x)</div>
                  <div className="text-2xl font-bold text-brand-dark">$37,250</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Your Share (50% after ISO comm.)</div>
                  <div className="text-2xl font-bold text-brand-teal">$5,206.25</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Return on Investment</div>
                  <div className="text-2xl font-bold text-green-600">20.8%</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="text-sm text-brand-gray">
                  45-day term • Target factor rate 1.49x • Range: 1.35x - 1.65x
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  We share the same incentive to maximize factor rates, but final terms depend on merchant negotiations
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
