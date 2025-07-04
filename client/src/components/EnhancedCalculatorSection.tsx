import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, PieChart, BarChart3, DollarSign, Clock, Target, AlertCircle } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { Link } from 'wouter';

export default function EnhancedCalculatorSection() {
  const [investmentAmount, setInvestmentAmount] = useState([25000]);
  const [timeHorizon, setTimeHorizon] = useState([12]);
  const [selectedOption, setSelectedOption] = useState<'option1' | 'option2'>('option1');

  const investmentOptions = {
    option1: {
      name: "Option 1: Direct Deal Participation",
      description: "Higher risk, direct control over individual MCA deals",
      targetFactorRate: 1.49,
      factorRateRange: "1.35x - 1.65x",
      termRange: "10-180 days",
      avgTerm: 45,
      profitSplit: 0.50,
      targetROI: 0.208,
      minInvestment: 5000,
      riskLevel: "Higher Risk",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    option2: {
      name: "Option 2: Diversified Portfolio",
      description: "Lower risk through automated diversification",
      targetFactorRate: 1.49,
      factorRateRange: "1.35x - 1.65x",
      termRange: "10-180 days",
      avgTerm: 45,
      profitSplit: 0.45,
      targetROI: 0.187,
      minInvestment: 25000,
      riskLevel: "Moderate Risk",
      color: "text-brand-blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  };

  const calculateReturns = (investment: number, months: number, option: 'option1' | 'option2') => {
    const optionData = investmentOptions[option];
    const dealsPerYear = Math.floor(365 / optionData.avgTerm);
    const totalDeals = Math.floor((months / 12) * dealsPerYear);
    
    let currentValue = investment;
    
    for (let deal = 1; deal <= totalDeals; deal++) {
      const repayment = currentValue * optionData.targetFactorRate;
      const grossProfit = repayment - currentValue;
      const isoCommission = grossProfit * 0.15;
      const netProfit = grossProfit - isoCommission;
      const investorShare = netProfit * optionData.profitSplit;
      currentValue += investorShare;
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
      perDealROI: optionData.targetROI * 100
    };
  };

  const results = calculateReturns(investmentAmount[0], timeHorizon[0], selectedOption);
  const currentOption = investmentOptions[selectedOption];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-brand-teal mr-3" />
            <h2 className="text-4xl font-bold text-brand-dark">
              Calculate Your Investment Returns
            </h2>
          </div>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            See how your investment could grow with our two distinct MCA investment strategies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Controls */}
            <Card className="shadow-2xl border-2 border-brand-teal/20">
              <CardHeader className="bg-gradient-to-r from-brand-blue/5 to-brand-teal/5">
                <CardTitle className="text-center text-brand-dark flex items-center justify-center gap-2">
                  <Target className="w-5 h-5" />
                  Investment Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-medium text-brand-dark">Investment Amount</label>
                      <Badge variant="outline" className="text-brand-teal">
                        {formatCurrency(investmentAmount[0])}
                      </Badge>
                    </div>
                    <Slider
                      value={investmentAmount}
                      onValueChange={setInvestmentAmount}
                      max={500000}
                      min={5000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-brand-gray mt-1">
                      <span>$5K</span>
                      <span>$500K</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-medium text-brand-dark">Time Horizon</label>
                      <Badge variant="outline" className="text-brand-blue">
                        {timeHorizon[0]} months
                      </Badge>
                    </div>
                    <Slider
                      value={timeHorizon}
                      onValueChange={setTimeHorizon}
                      max={36}
                      min={6}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-brand-gray mt-1">
                      <span>6 months</span>
                      <span>3 years</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-brand-dark mb-3 block">Investment Strategy</label>
                    <Tabs value={selectedOption} onValueChange={(value) => setSelectedOption(value as 'option1' | 'option2')}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="option1">Direct Deals</TabsTrigger>
                        <TabsTrigger value="option2">Portfolio</TabsTrigger>
                      </TabsList>
                      <TabsContent value="option1" className="mt-4">
                        <div className={`p-4 rounded-lg ${currentOption.bgColor} ${currentOption.borderColor} border-2`}>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-brand-dark">Option 1: Direct Deal Participation</h4>
                            <Badge className={`${currentOption.color} bg-white`}>
                              {currentOption.riskLevel}
                            </Badge>
                          </div>
                          <p className="text-sm text-brand-gray mb-3">{currentOption.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-brand-gray">Target ROI:</span>
                              <span className="font-semibold text-brand-dark ml-2">{formatPercentage(currentOption.targetROI * 100)}</span>
                            </div>
                            <div>
                              <span className="text-brand-gray">Min Investment:</span>
                              <span className="font-semibold text-brand-dark ml-2">{formatCurrency(currentOption.minInvestment)}</span>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="option2" className="mt-4">
                        <div className={`p-4 rounded-lg ${currentOption.bgColor} ${currentOption.borderColor} border-2`}>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-brand-dark">Option 2: Diversified Portfolio</h4>
                            <Badge className={`${currentOption.color} bg-white`}>
                              {currentOption.riskLevel}
                            </Badge>
                          </div>
                          <p className="text-sm text-brand-gray mb-3">{currentOption.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-brand-gray">Target ROI:</span>
                              <span className="font-semibold text-brand-dark ml-2">{formatPercentage(currentOption.targetROI * 100)}</span>
                            </div>
                            <div>
                              <span className="text-brand-gray">Min Investment:</span>
                              <span className="font-semibold text-brand-dark ml-2">{formatCurrency(currentOption.minInvestment)}</span>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-2xl border-2 border-brand-blue/20">
              <CardHeader className="bg-gradient-to-r from-brand-teal/5 to-brand-blue/5">
                <CardTitle className="text-center text-brand-dark flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Projected Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 rounded-lg">
                    <DollarSign className="w-6 h-6 text-brand-teal mx-auto mb-2" />
                    <div className="text-2xl font-bold text-brand-dark">
                      <AnimatedCounter end={results.totalReturn} prefix="$" />
                    </div>
                    <div className="text-sm text-brand-gray">Total Value</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-brand-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-brand-dark">
                      <AnimatedCounter end={results.totalProfit} prefix="$" />
                    </div>
                    <div className="text-sm text-brand-gray">Total Profit</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-brand-gray">Total ROI</span>
                    <span className="font-bold text-brand-dark">{formatPercentage(results.totalROI)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-brand-gray">Annualized ROI</span>
                    <span className="font-bold text-brand-teal">{formatPercentage(results.annualizedROI)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-brand-gray">Total Deals</span>
                    <span className="font-bold text-brand-blue">{results.totalDeals}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-brand-gray">Per Deal ROI</span>
                    <span className="font-bold text-brand-dark">{formatPercentage(results.perDealROI)}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Important Disclaimer</h4>
                      <p className="text-sm text-yellow-700">
                        Returns are projections based on target scenarios and are not guaranteed. 
                        Factor rates vary from 1.35x to 1.65x based on deal quality and market conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link href="/investors">
                    <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-dark hover:to-brand-blue text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <PieChart className="w-4 h-4 mr-2" />
                      Start Investing Today
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Learn More About MCA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}