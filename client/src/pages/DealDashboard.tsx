import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  Eye, 
  EyeOff, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  BarChart3, 
  Users, 
  Clock, 
  Target, 
  Briefcase, 
  Settings, 
  Zap,
  Play,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  X,
  HelpCircle,
  AlertCircle
} from "lucide-react";
import FactorRateRiskSlider from "@/components/FactorRateRiskSlider";

interface Deal {
  deal_id: number;
  merchant: string;
  amount: number;
  investo_score: number;
  factor_rate: number;
  term_days: number;
  industry: string;
  status: string;
  monthly_revenue: number;
  time_in_business: number;
  daily_payment: number;
  remaining_balance: number;
  progress: number;
  investors_joined?: number;
  time_left?: string;
  estimated_return?: number;
  risk_rating?: string;
}

// Mock data for enhanced deals - combining real deal data with demo features
const mockEnhancedDeals = [
  {
    deal_id: 1,
    merchant: "ABC Retail Solutions",
    amount: 75000,
    investo_score: 785,
    factor_rate: 1.28,
    term_days: 120,
    industry: "Retail",
    status: "Active",
    monthly_revenue: 45000,
    time_in_business: 36,
    daily_payment: 425,
    remaining_balance: 32750,
    progress: 65,
    investors_joined: 8,
    time_left: "2d 14h",
    estimated_return: 28.5,
    risk_rating: "Medium"
  },
  {
    deal_id: 2,
    merchant: "Downtown Diner LLC",
    amount: 50000,
    investo_score: 720,
    factor_rate: 1.35,
    term_days: 90,
    industry: "Restaurant",
    status: "Active",
    monthly_revenue: 28000,
    time_in_business: 24,
    daily_payment: 315,
    remaining_balance: 18500,
    progress: 82,
    investors_joined: 12,
    time_left: "4d 8h",
    estimated_return: 35.2,
    risk_rating: "Medium"
  },
  {
    deal_id: 3,
    merchant: "Tech Solutions Pro",
    amount: 125000,
    investo_score: 825,
    factor_rate: 1.22,
    term_days: 180,
    industry: "Technology",
    status: "Pending",
    monthly_revenue: 85000,
    time_in_business: 48,
    daily_payment: 0,
    remaining_balance: 125000,
    progress: 0,
    investors_joined: 15,
    time_left: "1d 6h",
    estimated_return: 22.5,
    risk_rating: "Low"
  },
  {
    deal_id: 4,
    merchant: "Wellness Center Plus",
    amount: 60000,
    investo_score: 695,
    factor_rate: 1.42,
    term_days: 150,
    industry: "Healthcare",
    status: "Active",
    monthly_revenue: 32000,
    time_in_business: 18,
    daily_payment: 385,
    remaining_balance: 28200,
    progress: 58,
    investors_joined: 18,
    time_left: "6d 12h",
    estimated_return: 42.8,
    risk_rating: "High"
  },
  {
    deal_id: 5,
    merchant: "Automotive Excellence",
    amount: 95000,
    investo_score: 750,
    factor_rate: 1.31,
    term_days: 200,
    industry: "Automotive",
    status: "Completed",
    monthly_revenue: 58000,
    time_in_business: 42,
    daily_payment: 0,
    remaining_balance: 0,
    progress: 100,
    investors_joined: 11,
    time_left: "3d 22h",
    estimated_return: 31.2,
    risk_rating: "Medium"
  }
];

const blendOptions = [
  {
    id: "conservative",
    name: "Conservative Blend",
    avgReturn: 18.7,
    avgTerm: 42,
    riskLevel: "Low",
    description: "Lower risk, steady returns",
    dealCount: 12,
    minInvestment: 25000
  },
  {
    id: "balanced",
    name: "Balanced Blend",
    avgReturn: 20.8,
    avgTerm: 58,
    riskLevel: "Medium",
    description: "Balanced risk-reward ratio",
    dealCount: 18,
    minInvestment: 25000
  },
  {
    id: "aggressive",
    name: "Aggressive Blend",
    avgReturn: 25.2,
    avgTerm: 75,
    riskLevel: "High",
    description: "Higher returns, increased risk",
    dealCount: 8,
    minInvestment: 50000
  }
];

const tutorialSteps = [
  {
    id: 1,
    title: "Welcome to Your Deal Dashboard",
    content: "This is your comprehensive investor dashboard where you can track investments and browse new MCA opportunities.",
    target: "welcome-banner"
  },
  {
    id: 2,
    title: "Portfolio Summary",
    content: "Monitor your total investments, active deals, and projected returns at a glance.",
    target: "portfolio-summary"
  },
  {
    id: 3,
    title: "Live Deal Tracking",
    content: "Each deal shows real-time progress, payments, and key metrics. Use filters to find opportunities that match your criteria.",
    target: "deals-grid"
  },
  {
    id: 4,
    title: "InvestoBlend™ Options",
    content: "For $25K+ investors: diversified portfolios that spread your investment across multiple deals automatically.",
    target: "blend-section"
  }
];

export default function DealDashboard() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState([25000]);
  const [demoMode, setDemoMode] = useState(false);
  const [factorRateRange, setFactorRateRange] = useState<[number, number]>([1.15, 1.49]);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [completedOnboarding, setCompletedOnboarding] = useState(false);

  const isEligibleForAdvanced = investmentAmount[0] >= 25000;
  const maxDealsAllowed = investmentAmount[0] >= 25000 ? "unlimited" : 1;

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch('/src/data/deals.json');
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.error('Error loading deals:', error);
        // Use enhanced mock data for demo
        setDeals(mockEnhancedDeals);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  const nextTutorialStep = () => {
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1);
    } else {
      setShowTutorial(false);
    }
  };

  const handleOnboardingComplete = () => {
    setCompletedOnboarding(true);
    setShowOnboarding(false);
    localStorage.setItem('investofund-visited', 'true');
  };

  const filteredDeals = demoMode 
    ? deals.filter(deal => deal.factor_rate >= factorRateRange[0] && deal.factor_rate <= factorRateRange[1])
    : deals;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 700) return 'text-blue-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      'Retail': 'bg-blue-100 text-blue-800',
      'Restaurant': 'bg-orange-100 text-orange-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-green-100 text-green-800',
      'Automotive': 'bg-gray-100 text-gray-800',
      'Food & Beverage': 'bg-orange-100 text-orange-800',
      'Health & Fitness': 'bg-green-100 text-green-800',
      'Transportation': 'bg-blue-100 text-blue-800',
      'Manufacturing': 'bg-purple-100 text-purple-800'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const totalInvested = filteredDeals.reduce((sum, deal) => sum + deal.amount, 0);
  const activeDeals = filteredDeals.filter(deal => deal.status === 'Active').length;
  const avgScore = filteredDeals.length > 0 ? Math.round(filteredDeals.reduce((sum, deal) => sum + deal.investo_score, 0) / filteredDeals.length) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="container mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-teal mx-auto"></div>
            <p className="mt-4 text-brand-gray">Loading your deals...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Tutorial Bar */}
      <div className="bg-white border-b border-gray-200 p-4 mb-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-brand-dark">Deal Dashboard</h1>
            <Badge variant="secondary" className="bg-brand-teal text-white">
              Grok v1 Enhanced
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTutorial(true)}
              className="flex items-center space-x-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>How it works</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDemoMode(!demoMode)}
              className="flex items-center space-x-2"
            >
              {demoMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{demoMode ? 'Exit Demo' : 'Demo'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Investment Amount Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-xl text-brand-dark">
                {completedOnboarding ? "Update Investment Amount" : "Set Your Investment Range"}
              </CardTitle>
              <p className="text-sm text-gray-600">
                {completedOnboarding 
                  ? "Adjust your available investment amount"
                  : "Choose your investment amount to unlock platform features"
                }
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount
                </label>
                <Slider
                  value={investmentAmount}
                  onValueChange={setInvestmentAmount}
                  max={500000}
                  min={5000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$5,000</span>
                  <span className="font-medium text-lg text-brand-dark">
                    ${investmentAmount[0].toLocaleString()}
                  </span>
                  <span>$500,000</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  {investmentAmount[0] < 25000 
                    ? "This amount gives access to 1 live deal."
                    : "Full platform access unlocked! Multiple deals and InvestoBlend™ available."
                  }
                </p>
              </div>

              <div className="text-center space-y-3">
                <p className="text-sm text-gray-600">
                  Choose from live deals or InvestoBlend™ options
                  {investmentAmount[0] < 25000 && " (upgrade to $25K+ for blend access)"}
                </p>
                <Button 
                  onClick={handleOnboardingComplete}
                  className="w-full bg-brand-blue hover:bg-blue-600"
                >
                  {completedOnboarding ? "Update Balance" : "Continue to Dashboard"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tutorial Overlay */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  Step {currentTutorialStep + 1} of {tutorialSteps.length}
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowTutorial(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-brand-dark">
                {tutorialSteps[currentTutorialStep].title}
              </h3>
              <p className="text-gray-600">
                {tutorialSteps[currentTutorialStep].content}
              </p>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentTutorialStep(Math.max(0, currentTutorialStep - 1))}
                  disabled={currentTutorialStep === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button
                  size="sm"
                  onClick={nextTutorialStep}
                  className="bg-brand-blue hover:bg-blue-600"
                >
                  {currentTutorialStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Dashboard Content */}
      <div className="container mx-auto space-y-8">
        {/* Portfolio Summary */}
        <div id="portfolio-summary" className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-2 border-transparent hover:border-blue-200"
            onClick={() => setShowOnboarding(true)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Available Balance</p>
                    <p className="text-2xl font-bold">${investmentAmount[0].toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Settings className="w-3 h-3" />
                  <span>Edit</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Active Investments</p>
                  <p className="text-2xl font-bold">{activeDeals}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Projected Returns</p>
                  <p className="text-2xl font-bold">
                    {filteredDeals.length > 0 ? 
                      `${(filteredDeals.reduce((sum, deal) => sum + (deal.estimated_return || 0), 0) / filteredDeals.length).toFixed(1)}%` 
                      : '--'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Deal Access</p>
                  <p className="text-lg font-bold">
                    {maxDealsAllowed === "unlimited" ? "Unlimited" : `${maxDealsAllowed} Deal`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Configuration */}
        {demoMode && (
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Demo Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">
                    Factor Rate Range: {factorRateRange[0].toFixed(2)}x - {factorRateRange[1].toFixed(2)}x
                  </label>
                  <FactorRateRiskSlider 
                    value={factorRateRange}
                    onChange={setFactorRateRange}
                  />
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Risk/Yield Notice:</strong> Expected yields range from 
                    {factorRateRange[0] <= 1.25 ? ' 15-25%' : factorRateRange[0] <= 1.35 ? ' 25-35%' : ' 35-45%'} 
                    based on your selected factor rate range.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Live Deals Section */}
        <div id="deals-grid">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">Live Investment Opportunities</h2>
                <p className="text-gray-600">
                  {demoMode ? `Filtered by factor rate: ${factorRateRange[0].toFixed(2)}x - ${factorRateRange[1].toFixed(2)}x` : 
                   "Browse merchant cash advance deals with verified metrics"}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdvancedMode(!advancedMode)}
                className="flex items-center space-x-2"
              >
                <BarChart3 className="w-4 h-4" />
                <span>{advancedMode ? 'Standard' : 'Advanced'} View</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              if (!completedOnboarding && !demoMode) {
                return (
                  <div className="col-span-full">
                    <Card className="border-2 border-gray-200 bg-gray-50">
                      <CardContent className="p-12 text-center">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Briefcase className="w-8 h-8 text-brand-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-4">
                          Welcome to InvestoFund
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                          Set your investment amount to access live deals and investment opportunities.
                        </p>
                        <Button 
                          onClick={() => setShowOnboarding(true)}
                          className="bg-brand-blue hover:bg-blue-600"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Start Investing
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              }
              
              if (demoMode && filteredDeals.length === 0) {
                return (
                  <div className="col-span-full">
                    <Card className="border-2 border-orange-200 bg-orange-50">
                      <CardContent className="p-8 text-center">
                        <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-orange-800 mb-2">
                          No Deals Match Your Factor Rate Range
                        </h3>
                        <p className="text-orange-700 mb-4">
                          There are currently no deals available within your selected range of {factorRateRange[0].toFixed(2)}x - {factorRateRange[1].toFixed(2)}x.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              }
              
              return filteredDeals.map((deal, index) => {
                const isLocked = maxDealsAllowed !== "unlimited" && index > 0;
                
                return (
                  <Card 
                    key={deal.deal_id} 
                    className={`relative transition-all duration-300 hover:shadow-lg ${
                      isLocked ? 'opacity-50 blur-sm' : ''
                    }`}
                  >
                    {isLocked && (
                      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-lg">
                        <div className="text-center p-4">
                          <p className="font-medium text-gray-700 mb-2">
                            Add $25,000+ to unlock multiple deal access
                          </p>
                          <Button size="sm" variant="outline" onClick={() => setShowOnboarding(true)}>
                            Upgrade Investment
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{deal.merchant}</CardTitle>
                          <div className="flex space-x-2 mt-2">
                            <Badge className={getIndustryColor(deal.industry)}>
                              {deal.industry}
                            </Badge>
                            {deal.risk_rating && (
                              <Badge className={getRiskColor(deal.risk_rating)}>
                                {deal.risk_rating} Risk
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Estimated Return</p>
                          <p className="text-xl font-bold text-green-600">
                            {deal.estimated_return?.toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Term Duration</p>
                          <p className="font-medium">{deal.term_days} days</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Time Remaining</p>
                          <p className="font-medium flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {deal.time_left}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Funding Progress</span>
                          <span>
                            {deal.status === 'Active' ? 
                              `${formatCurrency(deal.amount - deal.remaining_balance)} / ${formatCurrency(deal.amount)}` :
                              `${formatCurrency(deal.amount)} needed`
                            }
                          </span>
                        </div>
                        <Progress 
                          value={deal.progress} 
                          className="h-2"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{deal.investors_joined} investors joined</span>
                        </div>
                        {advancedMode && (
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>Factor: {deal.factor_rate}x</span>
                          </div>
                        )}
                      </div>

                      {advancedMode && (
                        <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                          <div className="flex justify-between">
                            <span>Monthly Revenue:</span>
                            <span>${deal.monthly_revenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>InvestoScore™:</span>
                            <span className="font-medium">{deal.investo_score}/850</span>
                          </div>
                        </div>
                      )}

                      <Button 
                        className="w-full bg-brand-blue hover:bg-blue-600"
                        disabled={isLocked}
                        onClick={() => !isLocked && (window.location.href = '/fund-now')}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Fund This Deal
                      </Button>
                    </CardContent>
                  </Card>
                );
              });
            })()}
          </div>
        </div>

        {/* InvestoBlend Section */}
        {(isEligibleForAdvanced || demoMode) && (
          <div id="blend-section">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">
                    InvestoBlend™ Diversified Options
                  </h2>
                  <p className="text-gray-600">
                    Professionally managed portfolios that spread your investment across multiple deals.
                  </p>
                </div>
                {demoMode && (
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
                    Demo Mode Active
                  </Badge>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blendOptions.map((blend) => (
                <Card key={blend.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {blend.name}
                      <Badge className={getRiskColor(blend.riskLevel)}>
                        {blend.riskLevel}
                      </Badge>
                    </CardTitle>
                    <p className="text-sm text-gray-600">{blend.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">
                        {blend.avgReturn}%
                      </p>
                      <p className="text-sm text-gray-600">Average Return</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Avg Term</p>
                        <p className="font-medium">{blend.avgTerm} days</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Deal Count</p>
                        <p className="font-medium">{blend.dealCount} deals</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => window.location.href = '/fund-now'}
                      >
                        Invest Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Legal Footer */}
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <p className="text-sm text-gray-600 mb-4">
            <em>Returns are not guaranteed. Read full disclosures before investing.</em>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Button 
              variant="link" 
              size="sm" 
              onClick={() => window.location.href = '/terms-of-service'}
            >
              Terms & Conditions
            </Button>
            <Button 
              variant="link" 
              size="sm" 
              onClick={() => window.location.href = '/risk-disclosure'}
            >
              Risk Disclosure
            </Button>
            <Button 
              variant="link" 
              size="sm" 
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}