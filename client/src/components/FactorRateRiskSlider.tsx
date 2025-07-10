import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, TrendingUp, Shield, Target } from 'lucide-react';

interface FactorRateRiskSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  onRiskDataChange?: (riskData: RiskData) => void;
}

interface RiskData {
  selectedRange: [number, number];
  riskBand: string;
  color: string;
  notes: string;
}

export default function FactorRateRiskSlider({ 
  value, 
  onChange, 
  onRiskDataChange 
}: FactorRateRiskSliderProps) {
  const [currentRange, setCurrentRange] = useState(value);
  const [animationClass, setAnimationClass] = useState('');

  // Determine risk zone based on factor rate range (using midpoint)
  const getRiskZone = (range: [number, number]) => {
    const midpoint = (range[0] + range[1]) / 2;
    if (midpoint >= 1.15 && midpoint <= 1.24) {
      return {
        level: 'Low',
        color: 'green',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-800',
        sliderColor: 'slider-green',
        icon: Shield,
        animation: 'animate-pulse'
      };
    } else if (midpoint >= 1.25 && midpoint <= 1.38) {
      return {
        level: 'Medium',
        color: 'orange',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-800',
        sliderColor: 'slider-orange',
        icon: Target,
        animation: 'animate-bounce'
      };
    } else {
      return {
        level: 'High',
        color: 'red',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-800',
        sliderColor: 'slider-red',
        icon: TrendingUp,
        animation: 'animate-shake'
      };
    }
  };

  const zone = getRiskZone(currentRange);

  // Get risk prompt content
  const getRiskPrompt = (range: [number, number]) => {
    const midpoint = (range[0] + range[1]) / 2;
    if (midpoint >= 1.15 && midpoint <= 1.24) {
      return {
        title: "🟢 You've selected a Conservative Risk Strategy",
        subtitle: "Expect lower yield, slower deal flow, but more stable merchant profiles.",
        pros: [
          "Lower merchant default risk",
          "Ideal for longer-term investors",
          "Good for portfolio anchoring",
          "Predictable returns"
        ],
        cons: [
          "Lower ROI (under 15% average)",
          "Slower capital deployment",
          "Fewer deal opportunities",
          "Limited growth potential"
        ]
      };
    } else if (midpoint >= 1.25 && midpoint <= 1.38) {
      return {
        title: "🟠 You've selected a Balanced Risk Strategy",
        subtitle: "This tier aims to deliver stronger returns while maintaining underwriting standards.",
        pros: [
          "Moderate ROI (15–18%)",
          "More deal flow than low risk",
          "Well-diversified merchant pool",
          "Balanced risk/reward profile"
        ],
        cons: [
          "Slightly increased default possibility",
          "May require slightly longer underwriting",
          "Moderate volatility",
          "Requires active monitoring"
        ]
      };
    } else {
      return {
        title: "🔴 You've selected an Aggressive Growth Strategy",
        subtitle: "Expect the fastest capital use and highest possible returns—but higher volatility.",
        pros: [
          "Highest ROI (18–21%)",
          "Fastest deal allocation",
          "Ideal for short-term, high-volume investors",
          "Maximum growth potential"
        ],
        cons: [
          "Increased merchant volatility",
          "More underwriting oversight",
          "Cashflow may be lumpy",
          "Higher risk of losses"
        ]
      };
    }
  };

  const prompt = getRiskPrompt(currentRange);
  const IconComponent = zone.icon;

  // Handle value change
  const handleValueChange = (newValue: number[]) => {
    const range: [number, number] = [newValue[0], newValue[1]];
    setCurrentRange(range);
    onChange(range);
    
    // Trigger animation
    setAnimationClass(zone.animation);
    setTimeout(() => setAnimationClass(''), 1000);

    // Send risk data to parent if callback provided
    if (onRiskDataChange) {
      onRiskDataChange({
        selectedRange: range,
        riskBand: zone.level,
        color: zone.color,
        notes: `${zone.level} Risk Strategy (${range[0].toFixed(2)}x - ${range[1].toFixed(2)}x)`
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Slider Section */}
      <Card className={`${zone.bgColor} ${zone.borderColor} border-2 transition-all duration-300`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconComponent className={`w-5 h-5 ${zone.textColor} ${animationClass}`} />
            <span className="text-brand-dark">Factor Rate Risk Preference</span>
            <Badge variant="outline" className={`${zone.textColor} ${zone.borderColor}`}>
              {zone.level} Risk
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-brand-gray">Factor Rate Range</span>
              <span className="text-lg font-bold text-brand-dark">
                {currentRange[0].toFixed(2)}x - {currentRange[1].toFixed(2)}x
              </span>
            </div>
            <Slider
              value={currentRange}
              onValueChange={handleValueChange}
              min={1.15}
              max={1.49}
              step={0.01}
              className={`w-full dual-range-slider ${zone.sliderColor}`}
            />
            <div className="flex justify-between text-xs text-brand-gray">
              <span>1.15x (Conservative)</span>
              <span>1.32x (Balanced)</span>
              <span>1.49x (Aggressive)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Prompt Section */}
      <Card className={`${zone.bgColor} ${zone.borderColor} border transition-all duration-500`}>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className={`text-lg font-semibold ${zone.textColor} mb-2`}>
                {prompt.title}
              </h3>
              <p className="text-brand-gray text-sm">
                {prompt.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Pros */}
              <div className="space-y-2">
                <h4 className="font-medium text-brand-dark flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Pros
                </h4>
                <ul className="space-y-1">
                  {prompt.pros.map((pro, index) => (
                    <li key={index} className="text-sm text-brand-gray flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2">
                <h4 className="font-medium text-brand-dark flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Cons
                </h4>
                <ul className="space-y-1">
                  {prompt.cons.map((con, index) => (
                    <li key={index} className="text-sm text-brand-gray flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${zone.bgColor} p-3 rounded-lg border ${zone.borderColor} mt-4`}>
              <div className="flex items-center space-x-2">
                <AlertCircle className={`w-4 h-4 ${zone.textColor}`} />
                <span className={`text-sm font-medium ${zone.textColor}`}>
                  Selected Strategy: {zone.level} Risk ({currentRange[0].toFixed(2)}x - {currentRange[1].toFixed(2)}x factor rate range)
                </span>
              </div>
              <p className="text-xs text-brand-gray mt-1">
                You can update this preference anytime via your investor dashboard.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}