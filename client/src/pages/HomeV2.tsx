import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Clock, 
  Shield, 
  DollarSign, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Building, 
  CreditCard, 
  FileText, 
  Zap,
  Target,
  Users,
  Calendar,
  Award,
  BarChart3,
  Banknote,
  Factory,
  Truck,
  Wrench,
  BookOpen,
  Calculator,
  Eye,
  PieChart,
  Settings,
  Lock,
  RefreshCw,
  AlertTriangle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CounterAnimation = ({ target, duration = 2000, suffix = "", prefix = "" }: CounterAnimationProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{prefix}{count}{suffix}</span>;
};

export default function HomeV2() {
  const [investmentAmount, setInvestmentAmount] = useState(25000);
  const [timeHorizon, setTimeHorizon] = useState(12);
  const [selectedStrategy, setSelectedStrategy] = useState("direct");

  // Calculate dynamic returns based on investment amount and time horizon
  const calculateReturns = () => {
    const avgFactorRate = 1.32;
    const avgDealTerm = 90; // days
    const dealCyclesPerYear = 365 / avgDealTerm;
    const returnPerDeal = (avgFactorRate - 1) * 100;
    const annualizedReturn = returnPerDeal * dealCyclesPerYear;
    
    return {
      perDeal: returnPerDeal,
      annualized: annualizedReturn,
      totalReturn: (investmentAmount * (annualizedReturn / 100) * (timeHorizon / 12)),
      projectedValue: investmentAmount + (investmentAmount * (annualizedReturn / 100) * (timeHorizon / 12))
    };
  };

  const returns = calculateReturns();

  const handleGetStarted = () => {
    window.location.href = '/dashboard/investor-v1-demo';
  };

  const handleCalculator = () => {
    scrollToElement('investment-calculator');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Learning Focused */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn About Alternative Investing
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-gray-800">
            Understanding Merchant Cash Advances
            <br />
            <span className="text-blue-600">A Learning Journey</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover how businesses get funded, how investors earn returns, and what makes 
            this alternative investment approach different from traditional options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => scrollToElement('how-it-works')}
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Start Learning
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              onClick={handleCalculator}
            >
              <Calculator className="mr-2 w-5 h-5" />
              Try Calculator
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-800 mb-1">Learn</div>
              <div className="text-gray-600 text-sm">How It Works</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-800 mb-1">Explore</div>
              <div className="text-gray-600 text-sm">Real Examples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-800 mb-1">Calculate</div>
              <div className="text-gray-600 text-sm">Potential Returns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-800 mb-1">Decide</div>
              <div className="text-gray-600 text-sm">Your Next Step</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Merchant Cash Advance? */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              What is a Merchant Cash Advance?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple way for businesses to get funding based on their future sales, 
              and how investors can participate in this growing market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">For Business Owners</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Quick Access to Capital</p>
                    <p className="text-gray-600 text-sm">Get funding in 24-48 hours instead of waiting weeks for bank loans</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Flexible Repayment</p>
                    <p className="text-gray-600 text-sm">Repay based on daily sales - slower sales mean smaller payments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No Collateral Required</p>
                    <p className="text-gray-600 text-sm">Based on business performance, not personal assets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">For Investors</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Steady Returns</p>
                    <p className="text-gray-600 text-sm">Earn returns as businesses repay their advances over time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Direct Business Impact</p>
                    <p className="text-gray-600 text-sm">Your investment directly helps real businesses grow and succeed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Alternative to Traditional Markets</p>
                    <p className="text-gray-600 text-sm">Diversify beyond stocks and bonds with business-backed investments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works (Visual Timeline) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              How It Works: From Investment to Return
            </h2>
            <p className="text-xl text-brand-gray">
              A simple 4-step process that puts you in control of your investment journey
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-blue hidden md:block"></div>
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: DollarSign,
                  title: "Choose Your Investment",
                  description: "Select deals that match your risk preferences and investment timeline. Start with $5,000 or more.",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  step: 2,
                  icon: CheckCircle,
                  title: "We Fund the Business",
                  description: "Your capital goes directly to verified businesses with strong cash flow and proven track records.",
                  color: "bg-green-100 text-green-600"
                },
                {
                  step: 3,
                  icon: RefreshCw,
                  title: "Business Repays with Factor",
                  description: "Merchants repay based on agreed factor rates (1.15x-1.49x) over 25 days to 18 months terms through daily/weekly payments.",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  step: 4,
                  icon: TrendingUp,
                  title: "You Receive Returns",
                  description: "Earn your share of profits as repayments come in. Reinvest or withdraw - your choice.",
                  color: "bg-orange-100 text-orange-600"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mr-4`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-brand-gray mt-2">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg hidden md:flex z-10">
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Returns Overview */}
      <section id="investment-calculator" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              Transparent Returns, Real Numbers
            </h2>
            <p className="text-xl text-brand-gray">
              See exactly how much you can earn with our interactive calculator
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-brand-dark">Investment Calculator</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">
                        Investment Amount: ${investmentAmount.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        min="5000"
                        max="500000"
                        step="5000"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$5K</span>
                        <span>$500K</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-2">
                        Time Horizon: {timeHorizon} months
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="24"
                        value={timeHorizon}
                        onChange={(e) => setTimeHorizon(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>1 month</span>
                        <span>24 months</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold mb-4 text-brand-dark">Projected Returns</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Investment Amount:</span>
                      <span className="font-semibold text-brand-dark">${investmentAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Per Deal Return:</span>
                      <span className="font-semibold text-green-600">{returns.perDeal.toFixed(1)}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Annualized Return:</span>
                      <span className="font-semibold text-green-600">{returns.annualized.toFixed(1)}%</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold text-brand-dark">Total Projected Profit:</span>
                        <span className="font-bold text-green-600">${returns.totalReturn.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-lg mt-2">
                        <span className="font-semibold text-brand-dark">Final Value:</span>
                        <span className="font-bold text-brand-blue">${returns.projectedValue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Disclaimer:</strong> Past performance does not guarantee future results. 
                      All investments carry risk. Factor rates range from 1.15x-1.49x.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Reinvestment Strategy */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              Why Reinvestment Is the Real Power
            </h2>
            <p className="text-xl text-brand-gray">
              See how compound growth accelerates your wealth over time
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">
                  One-Time Investment vs. Reinvestment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Without Reinvestment</h4>
                    <p className="text-red-600">$25,000 → Returns withdrawn each cycle</p>
                    <p className="text-lg font-bold text-red-700">Year 1: $30,200 total earned</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">With Reinvestment</h4>
                    <p className="text-green-600">$25,000 → Returns reinvested each cycle</p>
                    <p className="text-lg font-bold text-green-700">Year 1: $77,000 total value</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">154% More Wealth</p>
                    <p className="text-sm text-blue-600">through strategic reinvestment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">
                  The Compound Effect Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "Month 3", value: 28300, deals: 1 },
                    { month: "Month 6", value: 32100, deals: 2 },
                    { month: "Month 9", value: 36400, deals: 3 },
                    { month: "Month 12", value: 41300, deals: 4 },
                    { month: "Month 18", value: 52800, deals: 6 },
                    { month: "Month 24", value: 67500, deals: 8 }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium text-brand-dark">{item.month}</span>
                        <span className="text-sm text-brand-gray ml-2">({item.deals} deals)</span>
                      </div>
                      <span className="font-bold text-green-600">${item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <p className="text-center text-purple-700 font-semibold">
                    Smart investors reinvest profits to maximize compound growth
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Choose Your Investment Strategy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              Choose Your Path: Direct or Diversified
            </h2>
            <p className="text-xl text-brand-gray">
              Select the investment approach that matches your goals and risk tolerance
            </p>
          </div>
          
          <Tabs value={selectedStrategy} onValueChange={setSelectedStrategy} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="direct" className="text-lg py-3">Direct Deal Participation</TabsTrigger>
              <TabsTrigger value="diversified" className="text-lg py-3">InvestoBlend™ Portfolio</TabsTrigger>
            </TabsList>
            
            <TabsContent value="direct">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-800">Direct Deal Participation</h3>
                      <p className="text-lg text-blue-700 mb-6">
                        Choose specific deals, control your portfolio, and maximize returns through active management.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-blue-700">20.8% average annual returns</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-blue-700">Full control over deal selection</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-blue-700">Real-time deal tracking</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-blue-700">No management fees</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <h4 className="text-xl font-semibold mb-4 text-brand-dark">Perfect For:</h4>
                      <ul className="space-y-2 text-brand-gray">
                        <li>• Active investors who want control</li>
                        <li>• Those comfortable with due diligence</li>
                        <li>• Investors seeking maximum returns</li>
                        <li>• Portfolio diversification seekers</li>
                      </ul>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded border">
                        <p className="text-sm text-blue-700">
                          <strong>Minimum:</strong> $5,000 per deal<br />
                          <strong>Risk Level:</strong> Medium to High<br />
                          <strong>Time Commitment:</strong> Active monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="diversified">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-800">InvestoBlend™ Portfolio</h3>
                      <p className="text-lg text-purple-700 mb-6">
                        Professional management spreads your investment across multiple deals for balanced risk and returns.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-purple-700">18.7% target annual returns</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-purple-700">Professional deal selection</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-purple-700">Automatic diversification</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-purple-700">Hands-off management</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-purple-200">
                      <h4 className="text-xl font-semibold mb-4 text-brand-dark">Perfect For:</h4>
                      <ul className="space-y-2 text-brand-gray">
                        <li>• Passive investors preferring simplicity</li>
                        <li>• Those wanting professional management</li>
                        <li>• Risk-conscious investors</li>
                        <li>• Set-and-forget approach seekers</li>
                      </ul>
                      
                      <div className="mt-6 p-4 bg-purple-50 rounded border">
                        <p className="text-sm text-purple-700">
                          <strong>Minimum:</strong> $25,000<br />
                          <strong>Risk Level:</strong> Low to Medium<br />
                          <strong>Management Fee:</strong> 10% of profits
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 7. Deal Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              What Happens in a Deal?
            </h2>
            <p className="text-xl text-brand-gray">
              Complete transparency - see exactly where every dollar goes
            </p>
          </div>
          
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-brand-dark">Sample Deal: TechCorp Solutions</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Deal Structure</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Funding Amount:</span>
                          <span className="font-medium">$100,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Factor Rate:</span>
                          <span className="font-medium">1.25x</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Repayment Amount:</span>
                          <span className="font-medium">$125,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Term:</span>
                          <span className="font-medium">90 days</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Your Investment: $25,000</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Your Share:</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Expected Return:</span>
                          <span className="font-medium">$6,250</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Back to You:</span>
                          <span className="font-medium font-bold">$31,250</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROI:</span>
                          <span className="font-medium text-green-600">25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-brand-dark">Payment Flow</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-800 mb-2">Merchant Repays Daily</h5>
                      <p className="text-sm text-gray-600">
                        TechCorp pays $1,389 daily (1.25% of daily sales) for 90 days
                      </p>
                      <Progress value={75} className="mt-2" />
                      <p className="text-xs text-gray-500 mt-1">Day 67 of 90 • 75% Complete</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium text-yellow-800 mb-2">Broker Commission</h5>
                      <p className="text-sm text-yellow-700">
                        ISO receives 15% of profit ($3,750) for sourcing the deal
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Your Profit Share</h5>
                      <p className="text-sm text-blue-700">
                        You receive 50% of remaining profit ($21,250 ÷ 2 = $10,625)
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">Final Return</h5>
                      <p className="text-sm text-green-700">
                        Principal ($25,000) + Profit ($6,250) = <strong>$31,250</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Risk Management */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              How We Protect Your Investment
            </h2>
            <p className="text-xl text-brand-gray">
              Multi-layered protection strategies minimize risk and maximize security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Due Diligence",
                description: "Comprehensive business verification, credit analysis, and cash flow validation before funding",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: BarChart3,
                title: "InvestoScore™",
                description: "Proprietary scoring system rates merchant creditworthiness and payment probability",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Eye,
                title: "Real-Time Monitoring",
                description: "Daily payment tracking and business performance monitoring throughout deal lifecycle",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: AlertTriangle,
                title: "Early Warning System",
                description: "Automated alerts for payment delays or business changes requiring attention",
                color: "bg-orange-100 text-orange-600"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">{item.title}</h3>
                  <p className="text-sm text-brand-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-brand-dark">Risk Mitigation Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-sm text-brand-gray">Successful Deal Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">72hrs</div>
                <div className="text-sm text-brand-gray">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-brand-gray">Verification Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-brand-gray">Monitoring Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Control & Automation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              Your Dashboard, Your Preferences
            </h2>
            <p className="text-xl text-brand-gray">
              Stay in complete control with powerful automation and real-time insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-brand-blue" />
                  Automation Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark">Auto-Reinvestment</h4>
                      <p className="text-sm text-brand-gray">Set rules to automatically reinvest returns into new deals matching your criteria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark">Smart Alerts</h4>
                      <p className="text-sm text-brand-gray">Customize notifications for new opportunities, payment updates, and portfolio changes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark">Risk Preferences</h4>
                      <p className="text-sm text-brand-gray">Set factor rate ranges and risk tolerance to filter deals automatically</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-brand-dark">Portfolio Balancing</h4>
                      <p className="text-sm text-brand-gray">Automatic diversification across industries and risk levels</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-brand-blue" />
                  Real-Time Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Live Portfolio Tracking</h4>
                    <p className="text-sm text-blue-700">Monitor all active deals, payment schedules, and projected returns in real-time</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Performance Analytics</h4>
                    <p className="text-sm text-green-700">Detailed breakdowns of ROI, deal success rates, and earnings history</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Market Insights</h4>
                    <p className="text-sm text-purple-700">Industry trends, deal flow patterns, and opportunity alerts</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Tax Reporting</h4>
                    <p className="text-sm text-orange-700">Automated tax document generation and earnings summaries</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              Built by Experts, Backed by Results
            </h2>
            <p className="text-xl text-brand-gray">
              Our experienced team brings decades of alternative investment and fintech expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                title: "Chief Investment Officer",
                experience: "15+ years in alternative investments",
                background: "Former Goldman Sachs VP, specialized in structured products and risk management",
                image: "bg-gradient-to-br from-blue-400 to-purple-500"
              },
              {
                name: "Michael Rodriguez",
                title: "Head of Merchant Relations",
                experience: "12+ years in commercial lending",
                background: "Ex-CEO of regional MCA fund, originated $200M+ in small business funding",
                image: "bg-gradient-to-br from-green-400 to-blue-500"
              },
              {
                name: "Jennifer Walsh",
                title: "Technology & Compliance",
                experience: "10+ years in fintech and regulatory",
                background: "Former compliance director at Lending Club, built investor protection systems",
                image: "bg-gradient-to-br from-purple-400 to-pink-500"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-24 h-24 ${member.image} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-brand-dark">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-brand-gray mb-3">{member.experience}</p>
                  <p className="text-xs text-brand-gray leading-relaxed">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Our Track Record</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">$47M+</div>
                    <div className="text-sm text-brand-gray">Total Funded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">850+</div>
                    <div className="text-sm text-brand-gray">Deals Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                    <div className="text-sm text-brand-gray">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">3.2yrs</div>
                    <div className="text-sm text-brand-gray">Average Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join successful investors earning 20.8%+ returns through verified merchant cash advances. 
            Start with as little as $5,000 and watch your wealth grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={handleGetStarted}
            >
              Start Investing Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleCalculator}
            >
              <Calculator className="mr-2 w-5 h-5" />
              Try Calculator
            </Button>
            <Button 
              size="lg" 
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Us
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">Quick Start</div>
              <div className="text-blue-200 text-sm">Setup in 5 minutes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">No Lock-ups</div>
              <div className="text-blue-200 text-sm">Withdraw anytime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">Full Support</div>
              <div className="text-blue-200 text-sm">Dedicated assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Smart Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InvestoFund</h3>
              <p className="text-gray-400 text-sm mb-4">
                The premier platform for alternative MCA investments. 
                Earn consistent returns through verified business funding.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-sm font-bold">IF</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Investors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/dashboard/investor-v1-demo" className="hover:text-white">Investment Dashboard</a></li>
                <li><a href="#investment-calculator" className="hover:text-white">Return Calculator</a></li>
                <li><a href="/legal-documents" className="hover:text-white">Legal Documents</a></li>
                <li><a href="/fund-now" className="hover:text-white">Fund Deals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Partners</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/merchants" className="hover:text-white">Merchant Funding</a></li>
                <li><a href="/brokers" className="hover:text-white">ISO/Broker Portal</a></li>
                <li><a href="/dashboard/broker" className="hover:text-white">Broker Dashboard</a></li>
                <li><a href="/merchant-dashboard-learn-more" className="hover:text-white">Learn More</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white">Contact Support</a></li>
                <li><a href="/legal-documents" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/legal-documents" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/legal-documents" className="hover:text-white">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 InvestoFund LLC. All rights reserved. Securities offered through licensed professionals. 
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}