import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { CALCULATOR_DEFAULTS } from "@/lib/constants";

export default function PortfolioBlendCalculator() {
  const [investment, setInvestment] = useState(CALCULATOR_DEFAULTS.portfolio.investment);
  const [dealCount, setDealCount] = useState(CALCULATOR_DEFAULTS.portfolio.dealCount);
  const [avgFactorRate, setAvgFactorRate] = useState(CALCULATOR_DEFAULTS.portfolio.avgFactorRate);

  const calculatePortfolioROI = () => {
    const perDeal = investment / dealCount;
    const repayment = perDeal * avgFactorRate;
    const grossProfit = repayment - perDeal;
    const isoCommission = grossProfit * 0.15;
    const netProfit = grossProfit - isoCommission;
    const investorShare = netProfit * 0.45; // 45% for managed portfolio (10% management fee)
    const totalReturn = investorShare * dealCount;
    const returnPct = (totalReturn / investment) * 100;

    return {
      perDeal,
      repayment,
      grossProfit,
      isoCommission,
      netProfit,
      investorShare,
      totalReturn,
      returnPct,
      managementFee: netProfit * 0.05 * dealCount, // 5% management fee
    };
  };

  const results = calculatePortfolioROI();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-brand-dark">Portfolio Blend Optimizer</CardTitle>
        <p className="text-sm text-brand-gray">
          Diversify across multiple deals for risk reduction
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-gray mb-2">
                Total Investment
              </label>
              <Slider
                value={[investment]}
                onValueChange={(value) => setInvestment(value[0])}
                min={25000}
                max={1000000}
                step={5000}
                className="calculator-slider"
              />
              <div className="text-center mt-1">
                <span className="font-bold text-brand-blue">
                  {formatCurrency(investment)}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-gray mb-2">
                Number of Deals
              </label>
              <Slider
                value={[dealCount]}
                onValueChange={(value) => setDealCount(value[0])}
                min={2}
                max={12}
                step={1}
                className="calculator-slider"
              />
              <div className="text-center mt-1">
                <span className="font-bold text-brand-blue">
                  {dealCount} Deals
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-gray mb-2">
                Average Factor Rate
              </label>
              <Slider
                value={[avgFactorRate]}
                onValueChange={(value) => setAvgFactorRate(value[0])}
                min={1.35}
                max={1.49}
                step={0.01}
                className="calculator-slider"
              />
              <div className="text-center mt-1">
                <span className="font-bold text-brand-blue">
                  {avgFactorRate.toFixed(2)}
                </span>
              </div>
            </div>
            
            <div className="text-sm text-brand-gray bg-yellow-50 p-3 rounded-lg">
              <p className="font-medium">Portfolio Management Note:</p>
              <p>Portfolio diversification includes a 10% management fee (investor share reduced to 45%).</p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-brand-dark mb-3">Blended Returns</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-brand-gray">Per Deal Average</span>
                <span className="font-medium">{formatCurrency(results.perDeal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray">Management Fee (10%)</span>
                <span className="font-medium">{formatCurrency(results.managementFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray">Your Share (45%)</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray">Total Return</span>
                <span className="font-medium text-brand-teal">
                  {formatCurrency(results.totalReturn)}
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <span className="text-brand-gray">Blended Return</span>
                <span className="font-bold text-green-600">
                  {results.returnPct.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Investor Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Investor Notice:</span> Our underwritten, quality merchants are selected for mutual success and consistent returns. InvestoFund's diversified portfolio approach ensures continuous deployment across vetted opportunities, maximizing your earning potential while maintaining steady cash flow through our proven profit-sharing model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
