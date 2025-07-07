import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { CALCULATOR_DEFAULTS } from "@/lib/constants";

export default function ISOCommissionCalculator() {
  const [dealAmount, setDealAmount] = useState(CALCULATOR_DEFAULTS.iso.dealAmount);
  const [factorRate, setFactorRate] = useState(CALCULATOR_DEFAULTS.iso.factorRate);
  const [showWarning, setShowWarning] = useState(false);

  const calculateCommission = () => {
    const repayment = dealAmount * factorRate;
    const grossProfit = repayment - dealAmount;
    const commission = grossProfit * 0.15; // 15% standard commission

    return {
      repayment,
      grossProfit,
      commission,
    };
  };

  const results = calculateCommission();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card className="bg-gray-50">
      <CardHeader>
        <CardTitle className="text-brand-dark">Commission Estimator</CardTitle>
        <p className="text-sm text-brand-gray">
          Calculate your estimated commission for deal submissions
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-gray mb-2">
                Deal Amount
              </label>
              <Slider
                value={[dealAmount]}
                onValueChange={(value) => setDealAmount(value[0])}
                min={5000}
                max={1000000}
                step={1000}
                className="calculator-slider"
              />
              <div className="text-center mt-1">
                <span className="font-bold text-brand-blue">
                  {formatCurrency(dealAmount)}
                </span>
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
              <div className="text-center mt-1">
                <span className="font-bold text-brand-blue">
                  {factorRate.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-medium text-brand-dark mb-2">Commission Structure</h5>
              <ul className="text-sm text-brand-gray space-y-1">
                <li>• 15% standard commission on full packages</li>
                <li>• Reduced rates for incomplete submissions</li>
                <li>• Volume bonuses for consistent producers</li>
                <li>• Quality bonuses for verified deals</li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-brand-dark mb-3">Estimated Commission</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-brand-gray">Total Repayment</span>
                <span className="font-medium">{formatCurrency(results.repayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray">Gross Profit</span>
                <span className="font-medium">{formatCurrency(results.grossProfit)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray">Commission Rate</span>
                <span className="font-medium">15%</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between">
                <span className="text-brand-gray">Your Commission</span>
                <span className="font-bold text-brand-teal text-lg">
                  {formatCurrency(results.commission)}
                </span>
              </div>
            </div>

            {showWarning && (
              <Alert className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Commission rates may vary based on deal quality, completeness, and submission terms.
                  Contact us for specific rate negotiations.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
