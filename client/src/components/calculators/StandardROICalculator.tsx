import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { CALCULATOR_DEFAULTS } from "@/lib/constants";

export default function StandardROICalculator() {
  const [investment, setInvestment] = useState<number>(CALCULATOR_DEFAULTS.standard.investment);
  const [factorRate, setFactorRate] = useState<number>(CALCULATOR_DEFAULTS.standard.factorRate);
  const [termDays, setTermDays] = useState<number>(CALCULATOR_DEFAULTS.standard.termDays);

  const calculateROI = () => {
    const repayment = investment * factorRate;
    const grossProfit = repayment - investment;
    const isoCommission = grossProfit * 0.15;
    const netProfit = grossProfit - isoCommission;
    const investorShare = netProfit * 0.5;
    const returnPct = (investorShare / investment) * 100;
    const annualizedReturn = (returnPct * 365) / termDays;

    return {
      repayment,
      grossProfit,
      isoCommission,
      netProfit,
      investorShare,
      returnPct,
      annualizedReturn,
    };
  };

  const results = calculateROI();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-center text-brand-dark">
            Calculate Your Potential Returns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-gray mb-2">
                  Investment Amount
                </label>
                <Slider
                  value={[investment]}
                  onValueChange={(value) => setInvestment(value[0])}
                  min={5000}
                  max={1000000}
                  step={1000}
                  className="calculator-slider"
                />
                <div className="flex justify-between items-center text-sm text-brand-gray mt-2">
                  <span>$5K</span>
                  <Input
                    type="number"
                    value={investment}
                    onChange={(e) => {
                      const value = Math.max(5000, Math.min(1000000, Number(e.target.value) || 5000));
                      setInvestment(value);
                    }}
                    className="w-24 h-8 text-center font-bold text-brand-blue border-brand-blue/20"
                  />
                  <span>$1M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-gray mb-2">
                  Factor Rate
                </label>
                <Slider
                  value={[factorRate]}
                  onValueChange={(value) => setFactorRate(value[0])}
                  min={1.25}
                  max={1.49}
                  step={0.01}
                  className="calculator-slider"
                />
                <div className="flex justify-between text-sm text-brand-gray mt-1">
                  <span>1.25</span>
                  <span className="font-bold text-brand-blue">
                    {factorRate.toFixed(2)}
                  </span>
                  <span>1.49</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-gray mb-2">
                  Average Term (Days)
                </label>
                <Slider
                  value={[termDays]}
                  onValueChange={(value) => setTermDays(value[0])}
                  min={25}
                  max={540}
                  step={5}
                  className="calculator-slider"
                />
                <div className="flex justify-between text-sm text-brand-gray mt-1">
                  <span>25</span>
                  <span className="font-bold text-brand-blue">{termDays}</span>
                  <span>540</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-brand-dark">
                  Projected Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-brand-gray">Total Repayment</span>
                  <span className="font-bold">{formatCurrency(results.repayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Gross Profit</span>
                  <span className="font-bold">{formatCurrency(results.grossProfit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">ISO Commission</span>
                  <span className="font-bold">{formatCurrency(results.isoCommission)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Net Profit Pool</span>
                  <span className="font-bold">{formatCurrency(results.netProfit)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <span className="text-brand-gray">Your Share (50%)</span>
                  <span className="font-bold text-brand-teal">
                    {formatCurrency(results.investorShare)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Return Percentage</span>
                  <span className="font-bold text-green-600">
                    {results.returnPct.toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Potential Annualized Return*</span>
                  <span className="font-bold text-green-600">
                    {results.annualizedReturn.toFixed(1)}%
                  </span>
                </div>
                <p className="text-xs text-brand-gray mt-2">
                  *Based on continuous reinvestment, actual results may vary
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
