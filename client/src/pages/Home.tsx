import { useState } from "react";
import { Link } from "wouter";
import { TrendingUp, Target, Users, Shield, DollarSign, Clock, Calculator, ArrowRight, Zap, BarChart3, CheckCircle, PieChart, Star, Award, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StandardROICalculator from "@/components/calculators/StandardROICalculator";
import EnhancedCalculatorSection from "@/components/EnhancedCalculatorSection";
import FeatureCard from "@/components/FeatureCard";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const [investmentAmount, setInvestmentAmount] = useState([25000]);
  const [timeHorizon, setTimeHorizon] = useState([12]);

  // InvestoFund Business Logic - Two Investment Options
  const investmentOptions = {
    option1: {
      name: "Option 1: Direct Deal Participation", 
      description: "Higher risk, direct control over individual MCA deals with approval options",
      targetFactorRate: 1.49, // Target rate - actual rates vary
      factorRateRange: "1.35x - 1.49x",
      termRange: "25-540 days", // Variable terms based on deal type
      avgTerm: 90, // Average for calculations
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
      factorRateRange: "1.35x - 1.49x",
      termRange: "25-540 days", // Diversified across all terms
      avgTerm: 90, // Average for calculations
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
              *Returns vary based on available deal opportunities. Factor rates typically range from 1.35x to 1.49x. 
              Projections shown are based on target scenarios and are not guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/investors#start-investing">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-dark hover:to-brand-blue text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Investing Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Try Advanced Calculator
                <BarChart3 className="w-5 h-5 ml-2" />
              </Button>
            </div>


          </div>
        </div>
      </section>
      {/* Enhanced Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-brand-teal mb-2">
                <AnimatedCounter end={20.8} suffix="%" decimals={1} />
              </div>
              <div className="text-brand-gray">Return Per Deal</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-brand-blue mb-2">
                <AnimatedCounter end={5000} prefix="$" />
              </div>
              <div className="text-brand-gray">Minimum Investment</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-brand-dark mb-2">
                <AnimatedCounter end={45} />
              </div>
              <div className="text-brand-gray">Days Avg. Term</div>
            </div>
          </div>
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
      {/* How InvestoFund Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">
                How InvestoFund Works
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Our proven 4-step process turns your investment into compound returns
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">You Invest</h3>
                <p className="text-sm text-brand-gray">Choose your investment amount and strategy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-green-600">2</div>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">We Fund Merchants</h3>
                <p className="text-sm text-brand-gray">Your capital helps businesses grow through MCAs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-purple-600">3</div>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Merchants Repay</h3>
                <p className="text-sm text-brand-gray">Daily payments generate 20.8% returns per deal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-orange-600">4</div>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Automatic Reinvestment</h3>
                <p className="text-sm text-brand-gray">Profits compound into exponential growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Risk Mitigation & Transparency */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">
                Risk Mitigation & Transparency
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                We protect your investment through rigorous due diligence and transparent processes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="text-center mb-4">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-brand-dark">Due Diligence</h3>
                </div>
                <ul className="text-sm text-brand-gray space-y-2">
                  <li>• Credit checks on all merchants</li>
                  <li>• Bank statement verification</li>
                  <li>• Revenue analysis & projections</li>
                  <li>• Industry risk assessment</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-center mb-4">
                  <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-brand-dark">Performance Tracking</h3>
                </div>
                <ul className="text-sm text-brand-gray space-y-2">
                  <li>• Real-time deal monitoring</li>
                  <li>• Daily payment tracking</li>
                  <li>• Automated alerts for issues</li>
                  <li>• Transparent reporting dashboard</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-center mb-4">
                  <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-brand-dark">Legal Protection</h3>
                </div>
                <ul className="text-sm text-brand-gray space-y-2">
                  <li>• UCC filings on all advances</li>
                  <li>• Personal guarantees from owners</li>
                  <li>• Collection agency partnerships</li>
                  <li>• Legal recovery procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 1. Discover Your Profit Potential */}
      <section id="discover" className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5">
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
                See how your investment could grow with our proven MCA strategies. 
                Real returns from real merchant cash advance deals.
              </p>
            </div>
            
            {/* Quick Profit Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">20.8%</div>
                <div className="text-brand-gray">Per Deal Return</div>
                <div className="text-sm text-gray-500 mt-1">After all fees</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
                <div className="text-brand-gray">Days Average</div>
                <div className="text-sm text-gray-500 mt-1">Deal duration</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
                <div className="text-brand-gray">Deals Per Year</div>
                <div className="text-sm text-gray-500 mt-1">Compound potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2. Deal-by-Deal Breakdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">
                Deal-by-Deal Breakdown: The Reinvestment Advantage
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Individual deals are limited to 20.8% returns, but reinvestment creates exponential growth
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              {/* Key Explanation */}
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <div className="text-sm">
                  <p className="font-semibold text-blue-800 mb-2">Why Reinvestment Creates Massive Returns:</p>
                  <p className="text-blue-700 mb-1">• Individual deal maximum: <strong>1.49x factor rate (49% gross profit)</strong></p>
                  <p className="text-blue-700 mb-1">• Your net share per deal: <strong>~20.8% return maximum</strong></p>
                  <p className="text-blue-700">• Reinvestment strategy: <strong>Each deal's profits become investment capital for the next</strong></p>
                </div>
              </div>

              {/* Sample Deal Progression */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-sm text-brand-gray mb-1">Deal 1</div>
                  <div className="text-lg font-semibold text-brand-dark">$10,000</div>
                  <div className="text-xs text-green-600">+$2,083 profit</div>
                  <div className="text-xs text-gray-500">20.8% return</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-sm text-brand-gray mb-1">Deal 2</div>
                  <div className="text-lg font-semibold text-brand-dark">$12,083</div>
                  <div className="text-xs text-green-600">+$2,515 profit</div>
                  <div className="text-xs text-gray-500">+ reinvested profits</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-sm text-brand-gray mb-1">Deal 3</div>
                  <div className="text-lg font-semibold text-brand-dark">$14,598</div>
                  <div className="text-xs text-green-600">+$3,037 profit</div>
                  <div className="text-xs text-gray-500">Growing principal</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-sm text-brand-gray mb-1">Deal 8</div>
                  <div className="text-lg font-semibold text-brand-dark">$25,000+</div>
                  <div className="text-xs text-green-600">+$5,200+ profit</div>
                  <div className="text-xs text-gray-500">Compound power</div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-sm text-green-800 text-center">
                  <strong>Compound Effect:</strong> Starting with ${investmentAmount[0].toLocaleString()}, reinvestment creates exponential growth. 
                  After {Math.min(8, timeHorizon[0] * 2)} deals, your investment could exceed ${(investmentAmount[0] * Math.pow(1.208, Math.min(8, timeHorizon[0] * 2))).toLocaleString()} - that's {(((Math.pow(1.208, Math.min(8, timeHorizon[0] * 2))) - 1) * 100).toFixed(0)}%+ total return through compound reinvestment!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. How Big Returns Are Really Made */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">
                How Big Returns Are Really Made
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                The secret isn't in individual deal profits - it's in the reinvestment strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-red-600 mb-2">❌ Traditional Approach</div>
                  <div className="text-lg text-gray-600">Take Profits Out</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Deal 1: $10,000</span>
                    <span className="text-green-600">+$2,083</span>
                  </div>
                  <div className="text-center text-orange-600 font-semibold">
                    💸 Withdraw $2,083 profit
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>Deal 2: $10,000</span>
                    <span className="text-green-600">+$2,083</span>
                  </div>
                  <div className="text-center text-orange-600 font-semibold">
                    💸 Withdraw $2,083 profit
                  </div>
                  <div className="text-center pt-2 border-t">
                    <div className="text-lg font-bold text-gray-700">After 8 deals: $26,664 profit</div>
                    <div className="text-sm text-gray-500">Linear growth only</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">✅ InvestoFund Strategy</div>
                  <div className="text-lg text-gray-600">Reinvest Everything</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Deal 1: ${investmentAmount[0].toLocaleString()}</span>
                    <span className="text-green-600">+${(investmentAmount[0] * 0.208).toLocaleString()}</span>
                  </div>
                  <div className="text-center text-green-600 font-semibold">
                    🔄 Reinvest all profits
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Deal 2: ${(investmentAmount[0] * 1.208).toLocaleString()}</span>
                    <span className="text-green-600">+${(investmentAmount[0] * 1.208 * 0.208).toLocaleString()}</span>
                  </div>
                  <div className="text-center text-green-600 font-semibold">
                    🔄 Reinvest all profits
                  </div>
                  <div className="text-center pt-2 border-t">
                    <div className="text-lg font-bold text-green-700">After {Math.min(8, timeHorizon[0] * 2)} deals: ${(investmentAmount[0] * Math.pow(1.208, Math.min(8, timeHorizon[0] * 2))).toLocaleString()}+ total</div>
                    <div className="text-sm text-green-600">Exponential compound growth!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Per Deal Performance Example */}
      {/* 6. Per Deal Performance Example */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">
                How Your Investment Generates Returns
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                See exactly how your ${investmentAmount[0].toLocaleString()} investment generates profits per deal
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Deal Structure</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Your Investment:</span>
                      <span className="font-semibold text-brand-dark">${investmentAmount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Factor Rate:</span>
                      <span className="font-semibold text-brand-dark">1.49x</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Total Repayment:</span>
                      <span className="font-semibold text-brand-dark">${(investmentAmount[0] * 1.49).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Gross Profit:</span>
                      <span className="font-semibold text-green-600">${(investmentAmount[0] * 0.49).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Deal Duration:</span>
                      <span className="font-semibold text-brand-dark">25-540 days</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Profit Distribution</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Gross Profit:</span>
                      <span className="font-semibold text-brand-dark">${(investmentAmount[0] * 0.49).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-100 rounded-lg">
                      <span className="text-orange-700">ISO Commission (15%):</span>
                      <span className="font-semibold text-orange-700">-${(investmentAmount[0] * 0.49 * 0.15).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                      <span className="text-blue-700">Net Profit:</span>
                      <span className="font-semibold text-blue-700">${(investmentAmount[0] * 0.49 * 0.85).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                      <span className="text-gray-700">InvestoFund Share (50%):</span>
                      <span className="font-semibold text-gray-700">${(investmentAmount[0] * 0.49 * 0.85 * 0.5).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-300">
                      <span className="text-green-700 font-semibold">Your Return:</span>
                      <span className="font-bold text-green-700">${(investmentAmount[0] * 0.208).toLocaleString()} (20.8%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7. Calculate Your Potential Returns */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-brand-teal mr-3" />
                <h2 className="text-4xl font-bold text-brand-dark">
                  Calculate Your Potential Returns
                </h2>
              </div>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Adjust the sliders to see how reinvestment creates exponential growth
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
                      max={18}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-brand-gray">
                      <span>1 month</span>
                      <span className="text-2xl font-bold text-brand-dark">
                        {timeHorizon[0]} months
                      </span>
                      <span>18 months</span>
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
                        
                        {/* Value Proposition Highlight */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                          <div className="text-lg font-semibold text-green-700 mb-2">
                            {key === 'option1' 
                              ? '🚀 Maximum Growth Through Reinvestment' 
                              : '🛡️ Stability Through Diversification'
                            }
                          </div>
                          <p className="text-sm text-gray-600">
                            {key === 'option1' 
                              ? 'Each deal\'s 20.8% profits get reinvested automatically, creating compound exponential growth over time.'
                              : 'Spread risk across multiple merchant types while maintaining steady 20.8% per-deal returns.'
                            }
                          </p>
                        </div>
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

                      {/* Profit Distribution Reality */}
                      <Card className="bg-orange-50 border-orange-200">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-orange-700 mb-3 flex items-center">
                            <Calculator className="w-4 h-4 mr-2" />
                            How Deal Profits Actually Work
                          </h4>
                          <div className="space-y-4">
                            {/* Real Deal Example */}
                            <div className="p-4 bg-white rounded-lg border">
                              <h5 className="font-medium text-gray-800 mb-3">Example: $10,000 Deal at 1.49x Factor</h5>
                              <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                  <div className="text-gray-600">Merchant Pays Back:</div>
                                  <div className="font-semibold text-lg">$14,900</div>
                                  <div className="text-xs text-gray-500">($10,000 × 1.49)</div>
                                </div>
                                <div>
                                  <div className="text-gray-600">Gross Profit:</div>
                                  <div className="font-semibold text-lg text-green-600">$4,900</div>
                                  <div className="text-xs text-gray-500">(49% return)</div>
                                </div>
                                <div>
                                  <div className="text-gray-600">After ISO Commission:</div>
                                  <div className="font-semibold text-lg">$4,165</div>
                                  <div className="text-xs text-gray-500">($4,900 - $735 = 15%)</div>
                                </div>
                              </div>
                              <div className="mt-4 pt-4 border-t">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="text-center p-3 bg-blue-50 rounded">
                                    <div className="text-sm text-gray-600">InvestoFund Share (50%)</div>
                                    <div className="font-bold text-lg text-blue-600">$2,083</div>
                                    <div className="text-xs text-gray-500">20.8% return</div>
                                  </div>
                                  <div className="text-center p-3 bg-green-50 rounded">
                                    <div className="text-sm text-gray-600">Your Share (50%)</div>
                                    <div className="font-bold text-lg text-green-600">$2,083</div>
                                    <div className="text-xs text-gray-500">20.8% return per deal</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Compound Power Explanation */}
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                              <h5 className="font-medium text-blue-800 mb-2">The Compound Reinvestment Strategy</h5>
                              <p className="text-sm text-gray-700 mb-3">
                                While individual deals max at ~21% profit, <strong>reinvesting those profits</strong> creates exponential growth:
                              </p>
                              <div className="grid md:grid-cols-3 gap-3 text-xs">
                                <div className="text-center">
                                  <div className="font-medium">Deal 1: ${investmentAmount[0].toLocaleString()}</div>
                                  <div className="text-green-600">+${(investmentAmount[0] * 0.208).toLocaleString()} profit</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-medium">Deal 2: ${(investmentAmount[0] * 1.208).toLocaleString()}</div>
                                  <div className="text-green-600">+${(investmentAmount[0] * 1.208 * 0.208).toLocaleString()} profit</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-medium">Deal 3: ${(investmentAmount[0] * 1.208 * 1.208).toLocaleString()}</div>
                                  <div className="text-green-600">+${(investmentAmount[0] * 1.208 * 1.208 * 0.208).toLocaleString()} profit</div>
                                </div>
                              </div>
                              <div className="mt-3 text-center text-sm font-semibold text-blue-700">
                                This is how $10,000 becomes $100,000+ over multiple deals
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
                              <p className="text-blue-700 mb-1">• Individual deal maximum: <strong>1.49x factor rate (49% gross profit)</strong></p>
                              <p className="text-blue-700 mb-1">• Your net share per deal: <strong>~20.8% return maximum</strong></p>
                              <p className="text-blue-700">• Reinvestment strategy: <strong>Each deal's profits become investment capital for the next</strong></p>
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
                              <div className="text-brand-gray">• Target Factor Rate: {option.targetFactorRate}x (49% gross)</div>
                              <div className="text-brand-gray">• Factor Range: {option.factorRateRange}</div>
                              <div className="text-brand-gray">• ISO Commission: 15% of gross profit</div>
                              <div className="text-brand-gray">• Your Net Return: ~20.8% max per deal</div>
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
                            <p>• <strong>Variable Terms:</strong> Deal terms range from 25 days to 18 months based on merchant needs and market conditions.</p>
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
                            <p>• <strong>Variable Deal Terms:</strong> Deal terms range from 25 days to 18 months with factor rates from 1.35x to 1.49x based on market conditions.</p>
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
                  <Link href="/investors#start-investing">
                    <Button className="bg-white text-brand-blue hover:bg-gray-100">
                      Start Investing Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-brand-blue transform hover:scale-105 transition-all duration-300"
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
                  <div className="text-2xl font-bold text-brand-dark">${investmentAmount[0].toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Merchant Repayment (1.49x)</div>
                  <div className="text-2xl font-bold text-brand-dark">${(investmentAmount[0] * 1.49).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Your Share (50% after ISO comm.)</div>
                  <div className="text-2xl font-bold text-brand-teal">${(investmentAmount[0] * 0.208).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Return on Investment</div>
                  <div className="text-2xl font-bold text-green-600">20.8%</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="text-sm text-brand-gray">
                  25-540 day terms • Target factor rate 1.49x • Range: 1.35x - 1.49x
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  We share the same incentive to maximize factor rates, but final terms depend on merchant negotiations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 8. How Deal Profits Actually Work */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">
                How Deal Profits Actually Work
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Complete transparency in our profit-sharing model - see exactly where every dollar goes
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Step 1: Merchant Repayment */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">1. Merchant Repays</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">${(investmentAmount[0] * 1.49).toLocaleString()}</div>
                  <p className="text-sm text-brand-gray">From ${investmentAmount[0].toLocaleString()} advance at 1.49x factor rate</p>
                </div>

                {/* Step 2: ISO Commission */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">2. ISO Commission</h3>
                  <div className="text-2xl font-bold text-orange-600 mb-2">-${(investmentAmount[0] * 0.49 * 0.15).toLocaleString()}</div>
                  <p className="text-sm text-brand-gray">15% of ${(investmentAmount[0] * 0.49).toLocaleString()} gross profit goes to ISO partner</p>
                </div>

                {/* Step 3: Profit Split */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PieChart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">3. 50/50 Split</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">${(investmentAmount[0] * 0.208).toLocaleString()}</div>
                  <p className="text-sm text-brand-gray">Your 50% share of ${(investmentAmount[0] * 0.49 * 0.85).toLocaleString()} net profit</p>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-brand-dark mb-4 text-center">
                  Complete Financial Breakdown
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Merchant Advance:</span>
                      <span className="font-semibold text-brand-dark">${investmentAmount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-brand-gray">Factor Rate:</span>
                      <span className="font-semibold text-brand-dark">1.49x</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                      <span className="text-blue-700 font-semibold">Total Repayment:</span>
                      <span className="font-bold text-blue-700">${(investmentAmount[0] * 1.49).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
                      <span className="text-green-700 font-semibold">Gross Profit:</span>
                      <span className="font-bold text-green-700">${(investmentAmount[0] * 0.49).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-orange-100 rounded-lg">
                      <span className="text-orange-700">ISO Commission (15%):</span>
                      <span className="font-semibold text-orange-700">-${(investmentAmount[0] * 0.49 * 0.15).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                      <span className="text-blue-700">Net Profit Available:</span>
                      <span className="font-semibold text-blue-700">${(investmentAmount[0] * 0.49 * 0.85).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                      <span className="text-gray-700">InvestoFund Share (50%):</span>
                      <span className="font-semibold text-gray-700">${(investmentAmount[0] * 0.49 * 0.85 * 0.5).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-200 rounded-lg border-2 border-green-400">
                      <span className="text-green-800 font-bold">Your Return:</span>
                      <span className="font-bold text-green-800">${(investmentAmount[0] * 0.208).toLocaleString()} (20.8%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h5 className="font-semibold text-yellow-800 mb-2">Why This Model Works:</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• ISOs are incentivized to bring quality deals (their commission depends on repayment)</li>
                    <li>• InvestoFund shares the same profit incentive as investors</li>
                    <li>• Transparent fee structure with no hidden costs</li>
                    <li>• All parties benefit when merchants succeed</li>
                  </ul>
                </div>
              </div>
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
      {/* 9. Investment Amount Options */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#050404]">Choose Your Investment Level</h2>
              <p className="text-xl max-w-3xl mx-auto text-white">
                Start with as little as $5,000 or diversify with our premium portfolio options
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* $5,000 Minimum */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2 text-white">$5,000</div>
                  <div className="text-lg opacity-90 text-white">Starting Investment</div>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-white">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Access to all deal opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">20.8% maximum returns per deal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Automatic reinvestment strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Direct deal participation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Monthly performance reports</span>
                  </li>
                </ul>
                <Link href="/investors">
                  <Button className="w-full bg-white text-brand-blue hover:bg-gray-100">
                    Start with $5,000
                  </Button>
                </Link>
              </div>

              {/* $25,000 Portfolio */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-300/50 relative text-white">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-brand-dark px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2 text-white">$25,000</div>
                  <div className="text-lg opacity-90 text-white">Diversified Portfolio</div>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-white">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Everything in $5,000 plan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Risk diversification across sectors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Priority deal access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Weekly strategy calls</span>
                  </li>
                </ul>
                <Link href="/investors">
                  <Button className="w-full bg-yellow-400 text-brand-dark hover:bg-yellow-300">
                    Start with $25,000
                  </Button>
                </Link>
              </div>

              {/* $500,000 Premium */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2 text-white">$500,000</div>
                  <div className="text-lg opacity-90 text-white">Premium Access</div>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-white">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Everything in lower tiers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Exclusive high-value deals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Custom investment strategies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Direct CEO access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span className="text-white">Quarterly strategy reviews</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-white text-brand-blue hover:bg-gray-100">
                    Contact for $500K+
                  </Button>
                </Link>
              </div>
            </div>

            {/* Time Horizon Options */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-8 text-white">Choose Your Time Horizon</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <div className="text-2xl font-bold mb-2 text-white">3 months</div>
                  <div className="text-sm opacity-90 text-white">Short-term gains</div>
                  <div className="text-xs mt-2 text-white">~2-3 deals</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 text-white">
                  <div className="text-2xl font-bold mb-2 text-white">12 months</div>
                  <div className="text-sm opacity-90 text-white">Optimal compounding</div>
                  <div className="text-xs mt-2 text-white">~8-10 deals</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <div className="text-2xl font-bold mb-2 text-white">36 months</div>
                  <div className="text-sm opacity-90 text-white">Maximum growth</div>
                  <div className="text-xs mt-2 text-white">~24-30 deals</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto text-white">
                <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Investing?</h3>
                <p className="text-xl mb-8 opacity-90 text-white">
                  Join InvestoFund and access high-yield alternative investments with our proven profit-sharing model.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/investors#start-investing">
                    <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3 text-lg">
                      <Calculator className="w-5 h-5 mr-2" />
                      Start Investing Today
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3 text-lg font-medium">
                      <Users className="w-5 h-5 mr-2" />
                      Schedule a Call
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6 text-sm opacity-75">
                  <div className="flex items-center justify-center space-x-6">
                    <span>✓ SEC-compliant operations</span>
                    <span>✓ Transparent fee structure</span>
                    <span>✓ 94.7% success rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Calculator Section */}
      <EnhancedCalculatorSection />
      {/* Feature Highlights */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Why Choose InvestoFund?
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Built by investors, for investors. Every feature designed to maximize your returns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Rocket}
              title="Fast Deal Deployment"
              description="Get your capital working within 10-15 days"
              badge="Speed"
              badgeVariant="outline"
              features={[
                "Streamlined underwriting process",
                "Direct ISO partnerships",
                "Automated deal matching",
                "Real-time notifications"
              ]}
              primaryAction={{
                label: "View Active Deals",
                onClick: () => window.location.href = "/investors"
              }}
            />
            
            <FeatureCard
              icon={Shield}
              title="Risk Management"
              description="Comprehensive protection for your investments"
              badge="Security"
              badgeVariant="outline"
              features={[
                "Rigorous merchant screening",
                "Diversification options",
                "Real-time monitoring",
                "Transparent reporting"
              ]}
              primaryAction={{
                label: "Learn More",
                onClick: () => window.location.href = "/risk-disclosure"
              }}
            />
            

          </div>
        </div>
      </section>
      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-dark to-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Earning 20.8%+ Returns?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join successful investors who've already discovered the power of MCA investments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/investors">
                <Button className="bg-white text-brand-dark hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Investing Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Speak with an Expert
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Transparent process</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Quick deployment</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                <span>Proven returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
