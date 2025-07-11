import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, TrendingUp, Percent } from "lucide-react";

export default function BrokerCommissionCalculator() {
  const [dealCount, setDealCount] = useState(10);
  const [averageDealSize, setAverageDealSize] = useState(50000);
  const [factorRate, setFactorRate] = useState(1.35);
  const [commissionRate, setCommissionRate] = useState(5.5);

  const calculateCommissions = () => {
    const grossProfit = averageDealSize * (factorRate - 1);
    const commissionPerDeal = grossProfit * (commissionRate / 100);
    const totalCommissions = commissionPerDeal * dealCount;
    
    // Compare with traditional 4% commission
    const traditionalCommission = (averageDealSize * 0.04) * dealCount;
    const increase = ((totalCommissions - traditionalCommission) / traditionalCommission) * 100;
    
    return {
      commissionPerDeal,
      totalCommissions,
      traditionalCommission,
      increase,
      grossProfit
    };
  };

  const results = calculateCommissions();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-2">Broker Commission Calculator</h1>
          <p className="text-brand-gray">Boost your earnings by 37.5% with InvestoFund's deal flow</p>
          <Badge variant="secondary" className="mt-2 bg-brand-teal text-white">
            Grok v1 Enhanced
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-dark flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-brand-teal" />
                Commission Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="dealCount" className="text-sm font-medium text-brand-gray">
                  Number of Deals per Month
                </Label>
                <Input
                  id="dealCount"
                  type="number"
                  value={dealCount}
                  onChange={(e) => setDealCount(Number(e.target.value))}
                  className="mt-1"
                  min="1"
                  max="100"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-brand-gray mb-3 block">
                  Average Deal Size: {formatCurrency(averageDealSize)}
                </Label>
                <Slider
                  value={[averageDealSize]}
                  onValueChange={(value) => setAverageDealSize(value[0])}
                  min={10000}
                  max={500000}
                  step={5000}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-brand-gray mt-1">
                  <span>$10K</span>
                  <span>$500K</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-brand-gray mb-3 block">
                  Factor Rate: {factorRate.toFixed(2)}x
                </Label>
                <Slider
                  value={[factorRate]}
                  onValueChange={(value) => setFactorRate(value[0])}
                  min={1.15}
                  max={1.49}
                  step={0.01}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-brand-gray mt-1">
                  <span>1.15x</span>
                  <span>1.49x</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-brand-gray mb-3 block">
                  Commission Rate: {commissionRate.toFixed(1)}%
                </Label>
                <Slider
                  value={[commissionRate]}
                  onValueChange={(value) => setCommissionRate(value[0])}
                  min={4.0}
                  max={8.0}
                  step={0.1}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-brand-gray mt-1">
                  <span>4.0%</span>
                  <span>8.0%</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">InvestoFund Advantage</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Base 4% commission + 1.5% bonus = 5.5% total</li>
                  <li>• Higher factor rates = bigger gross profits</li>
                  <li>• More deals = consistent volume bonuses</li>
                  <li>• Same-day funding for faster closes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-dark flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                Your Earnings Potential
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Commission Per Deal */}
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-700">Commission Per Deal</p>
                    <p className="text-2xl font-bold text-green-800">
                      {formatCurrency(results.commissionPerDeal)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-xs text-green-600 mt-2">
                  Based on {formatCurrency(results.grossProfit)} gross profit × {commissionRate}%
                </p>
              </div>

              {/* Total Monthly Commissions */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-700">Total Monthly Commissions</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {formatCurrency(results.totalCommissions)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-2">
                  {dealCount} deals × {formatCurrency(results.commissionPerDeal)} per deal
                </p>
              </div>

              {/* Comparison */}
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-yellow-700">Traditional 4% Commission</p>
                    <p className="text-2xl font-bold text-yellow-800">
                      {formatCurrency(results.traditionalCommission)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <p className="text-xs text-yellow-600 mt-2">
                  Standard industry commission structure
                </p>
              </div>

              {/* Increase */}
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-purple-700 mb-2">Your Earnings Increase</p>
                  <p className="text-3xl font-bold text-purple-800">
                    +{results.increase.toFixed(1)}%
                  </p>
                  <p className="text-sm text-purple-600 mt-2">
                    Extra {formatCurrency(results.totalCommissions - results.traditionalCommission)} per month
                  </p>
                </div>
              </div>

              {/* Annual Projection */}
              <div className="p-4 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg text-white">
                <div className="text-center">
                  <p className="text-sm mb-2 opacity-90">Annual Projection</p>
                  <p className="text-3xl font-bold">
                    {formatCurrency(results.totalCommissions * 12)}
                  </p>
                  <p className="text-sm mt-2 opacity-90">
                    Based on consistent {dealCount} deals per month
                  </p>
                </div>
              </div>

              <Button 
                className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white"
                onClick={() => window.location.href = '/brokers'}
              >
                Start Earning More - Join InvestoFund
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Higher Commission Rates</h3>
                <p className="text-sm text-brand-gray">
                  Earn 5.5% average commission vs. industry standard 4%
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Volume Bonuses</h3>
                <p className="text-sm text-brand-gray">
                  Additional bonuses for consistent monthly deal flow
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Same-Day Funding</h3>
                <p className="text-sm text-brand-gray">
                  Faster closings mean more deals and higher earnings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}