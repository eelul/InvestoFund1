import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Target, 
  Eye, 
  EyeOff, 
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  ArrowRight,
  Briefcase,
  BarChart3,
  Shield,
  Zap,
  Settings,
  AlertCircle
} from "lucide-react";
import FactorRateRiskSlider from "@/components/FactorRateRiskSlider";

// Mock data for demo deals
const mockDeals = [
  {
    id: 1,
    name: "Metro Restaurant Group",
    industry: "Food & Beverage",
    riskRating: "Low",
    estimatedReturn: 18.5,
    termDuration: 45,
    amountLeft: 85000,
    totalAmount: 125000,
    investorsJoined: 8,
    timeLeft: "2d 14h",
    factorRate: 1.28,
    merchantRevenue: 95000,
    underwritingScore: 92
  },
  {
    id: 2,
    name: "TechStart Solutions",
    industry: "Technology",
    riskRating: "Medium",
    estimatedReturn: 22.3,
    termDuration: 65,
    amountLeft: 142000,
    totalAmount: 180000,
    investorsJoined: 12,
    timeLeft: "4d 8h",
    factorRate: 1.35,
    merchantRevenue: 120000,
    underwritingScore: 87
  },
  {
    id: 3,
    name: "Elite Auto Repair",
    industry: "Automotive",
    riskRating: "Low",
    estimatedReturn: 16.8,
    termDuration: 38,
    amountLeft: 32000,
    totalAmount: 75000,
    investorsJoined: 15,
    timeLeft: "1d 6h",
    factorRate: 1.25,
    merchantRevenue: 85000,
    underwritingScore: 94
  },
  {
    id: 4,
    name: "Urban Fitness Center",
    industry: "Health & Fitness",
    riskRating: "Medium",
    estimatedReturn: 24.1,
    termDuration: 72,
    amountLeft: 198000,
    totalAmount: 250000,
    investorsJoined: 18,
    timeLeft: "6d 12h",
    factorRate: 1.42,
    merchantRevenue: 140000,
    underwritingScore: 89
  }
];

const blendOptions = [
  {
    id: "conservative",
    name: "Conservative Blend",
    avgReturn: 16.5,
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
    title: "Welcome to InvestoFund",
    content: "This is your investor dashboard where you can browse and fund merchant cash advance deals.",
    target: "welcome-banner"
  },
  {
    id: 2,
    title: "Set Your Investment Range",
    content: "Choose your investment amount to unlock platform features. $25K+ gives you access to multiple deals and blended options.",
    target: "investment-range"
  },
  {
    id: 3,
    title: "Browse Live Deals",
    content: "Each deal shows key metrics like return rate, term duration, and funding progress. Click for detailed information.",
    target: "deals-grid"
  },
  {
    id: 4,
    title: "InvestoBlend™ Options",
    content: "For $25K+ investors: diversified portfolios that spread your investment across multiple deals automatically.",
    target: "blend-section"
  },
  {
    id: 5,
    title: "Advanced Dashboard",
    content: "Toggle between standard and advanced views for deeper analytics and risk metrics.",
    target: "dashboard-toggle"
  }
];

export default function InvestorV1Demo() {
  const [investmentAmount, setInvestmentAmount] = useState([15000]);
  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [factorRateRange, setFactorRateRange] = useState<[number, number]>([1.25, 1.40]);
  const [riskData, setRiskData] = useState({
    selectedRange: [1.25, 1.40] as [number, number],
    riskBand: "Medium",
    color: "orange",
    notes: "Balanced Risk Strategy"
  });
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [completedOnboarding, setCompletedOnboarding] = useState(false);

  const isEligibleForAdvanced = investmentAmount[0] >= 25000;
  const maxDealsAllowed = investmentAmount[0] >= 25000 ? "unlimited" : 1;

  useEffect(() => {
    // Simulate checking if user has been here before
    const hasVisited = localStorage.getItem('investofund-visited');
    if (hasVisited) {
      setIsFirstLogin(false);
      setShowWelcome(false);
    }

    // Auto-hide welcome banner after 4 seconds
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        if (isFirstLogin) {
          setShowOnboarding(true);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, isFirstLogin]);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setCompletedOnboarding(true);
    localStorage.setItem('investofund-visited', 'true');
    localStorage.setItem('investofund-investment-amount', investmentAmount[0].toString());
  };

  const startTutorial = () => {
    setShowTutorial(true);
    setCurrentTutorialStep(0);
  };

  const nextTutorialStep = () => {
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1);
    } else {
      setShowTutorial(false);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      "Food & Beverage": "bg-blue-100 text-blue-800",
      "Technology": "bg-purple-100 text-purple-800",
      "Automotive": "bg-orange-100 text-orange-800",
      "Health & Fitness": "bg-green-100 text-green-800",
      "Retail": "bg-pink-100 text-pink-800"
    };
    return colors[industry as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tutorial Bar */}
      {(completedOnboarding || !isFirstLogin) && (
        <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-medium">🚀 Soft Testing Phase</span>
            <span className="text-blue-100">Learn how each section works</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={startTutorial}
              className="text-white hover:bg-blue-700"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              How It Works
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDemoMode(!demoMode)}
              className="text-white hover:bg-blue-700 border border-blue-400"
            >
              <Settings className="w-4 h-4 mr-2" />
              {demoMode ? 'Exit Demo' : 'Demo'}
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-brand-dark">InvestoFund</h1>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-brand-blue font-medium">
                  Dashboard
                </Button>
                <Button variant="ghost">Legal & Terms</Button>
                <Button variant="ghost">FAQs</Button>
                <Button variant="ghost">Contact</Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {isEligibleForAdvanced && (
                <div id="dashboard-toggle" className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Standard</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={advancedMode}
                      onChange={(e) => setAdvancedMode(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
              )}
              <Button variant="outline" size="sm">
                My Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      {showWelcome && (
        <div id="welcome-banner" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Welcome! Ready to fund your first deal? Let's go 🚀
            </h2>
            <p className="text-blue-100">
              Your gateway to high-yield merchant cash advance investments
            </p>
          </div>
        </div>
      )}

      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">
                {completedOnboarding ? "Edit Investment Amount" : "Set Up Your Investment Preference"}
              </CardTitle>
              <p className="text-sm text-center text-gray-600 mt-2">
                {completedOnboarding 
                  ? "Adjust your available balance for demo testing (up to $500,000)"
                  : "Choose your investment amount to unlock platform features"
                }
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div id="investment-range">
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
                  aria-label="Close tutorial"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Interactive walkthrough of your investor dashboard
              </p>
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
                <div className="flex space-x-1">
                  {tutorialSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index <= currentTutorialStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
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
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                  <p className="text-2xl font-bold">0</p>
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
                  <p className="text-2xl font-bold">--</p>
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

        {/* Demo Investment Configuration */}
        {demoMode && (
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-blue-600" />
                <span>Demo Investment Configuration</span>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  Live Preview
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Investment Amount Adjuster */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adjust Investment Amount
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

              {/* Factor Rate Range Selector */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">
                  Set Your Factor Rate Range Preference
                </h3>
                <p className="text-sm text-gray-600">
                  Select your preferred factor rate range to filter deals. Only deals within your range will be shown.
                </p>
                <FactorRateRiskSlider
                  value={factorRateRange}
                  onChange={(range) => {
                    setFactorRateRange(range);
                    const midpoint = (range[0] + range[1]) / 2;
                    const newRiskData = {
                      selectedRange: range,
                      riskBand: midpoint <= 1.24 ? "Low" : midpoint <= 1.38 ? "Medium" : "High",
                      color: midpoint <= 1.24 ? "green" : midpoint <= 1.38 ? "orange" : "red",
                      notes: `${midpoint <= 1.24 ? "Conservative" : midpoint <= 1.38 ? "Balanced" : "Aggressive"} Risk Strategy (${range[0].toFixed(2)}x - ${range[1].toFixed(2)}x)`
                    };
                    setRiskData(newRiskData);
                  }}
                  onRiskDataChange={(data) => setRiskData(data)}
                />
              </div>

              {/* Current Configuration Summary */}
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-brand-dark mb-2">Current Demo Configuration</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Investment Amount:</span>
                    <div className="font-medium">${investmentAmount[0].toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Factor Rate Range:</span>
                    <div className="font-medium">{factorRateRange[0].toFixed(2)}x - {factorRateRange[1].toFixed(2)}x</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Risk Level:</span>
                    <div className="font-medium">{riskData.riskBand} Risk</div>
                  </div>
                </div>
                
                {/* Expected Yield Calculation */}
                <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Expected Yield Range: {((factorRateRange[0] - 1) * 100).toFixed(1)}% - {((factorRateRange[1] - 1) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Based on your selected factor rate range. Actual returns may vary.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Live Deals Section */}
        <div id="deals-grid">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-brand-dark">Live Investment Opportunities</h2>
            <div className="flex items-center space-x-3">
              {demoMode && (
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                  Filtered by Range: {factorRateRange[0].toFixed(2)}x - {factorRateRange[1].toFixed(2)}x
                </Badge>
              )}
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {(() => {
                  const filteredDeals = demoMode 
                    ? mockDeals.filter(deal => deal.factorRate >= factorRateRange[0] && deal.factorRate <= factorRateRange[1])
                    : (completedOnboarding ? mockDeals : []);
                  return filteredDeals.length;
                })()} Active Deals
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(() => {
              const filteredDeals = demoMode 
                ? mockDeals.filter(deal => deal.factorRate >= factorRateRange[0] && deal.factorRate <= factorRateRange[1])
                : (completedOnboarding ? mockDeals : []);
              
              // Empty state for non-demo mode when onboarding not completed
              if (!demoMode && !completedOnboarding) {
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
                          Your dashboard is ready! Complete the onboarding process to access live deals and investment opportunities.
                        </p>
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-gray-700">Available Investment Options:</p>
                          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto text-sm">
                            <div className="bg-white p-4 rounded-lg border">
                              <h4 className="font-medium text-brand-dark mb-2">Direct Deal Participation</h4>
                              <p className="text-gray-600">Choose specific deals with full control over your investments</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border">
                              <h4 className="font-medium text-brand-dark mb-2">InvestoBlend™ Portfolio</h4>
                              <p className="text-gray-600">Diversified portfolios managed by our expert team ($25K+)</p>
                            </div>
                          </div>
                        </div>
                        <Button 
                          onClick={() => setShowOnboarding(true)}
                          className="mt-6 bg-brand-blue hover:bg-blue-600"
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
                        <p className="text-sm text-orange-600">
                          Try adjusting your factor rate range in the Demo Configuration above to see more deals.
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
                  key={deal.id} 
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
                        <Button size="sm" variant="outline">
                          Upgrade Investment
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{deal.name}</CardTitle>
                        <div className="flex space-x-2 mt-2">
                          <Badge className={getIndustryColor(deal.industry)}>
                            {deal.industry}
                          </Badge>
                          <Badge className={getRiskColor(deal.riskRating)}>
                            {deal.riskRating} Risk
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Estimated Return</p>
                        <p className="text-xl font-bold text-green-600">
                          {deal.estimatedReturn}%
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Term Duration</p>
                        <p className="font-medium">{deal.termDuration} days</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Time Remaining</p>
                        <p className="font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {deal.timeLeft}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Funding Progress</span>
                        <span>
                          ${(deal.totalAmount - deal.amountLeft).toLocaleString()} / ${deal.totalAmount.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={((deal.totalAmount - deal.amountLeft) / deal.totalAmount) * 100} 
                        className="h-2"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{deal.investorsJoined} investors joined</span>
                      </div>
                      {advancedMode && (
                        <div className="text-xs text-gray-500">
                          Factor: {deal.factorRate}x | Score: {deal.underwritingScore}
                        </div>
                      )}
                    </div>

                    {advancedMode && (
                      <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Monthly Revenue:</span>
                          <span>${deal.merchantRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Underwriting Score:</span>
                          <span className="font-medium">{deal.underwritingScore}/100</span>
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full bg-brand-blue hover:bg-blue-600"
                      disabled={isLocked}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Fund Now
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
                    Prefer simplicity? Try our professionally managed blends that spread your investment across multiple deals.
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
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
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
            <Button variant="link" size="sm">Terms & Conditions</Button>
            <Button variant="link" size="sm">Risk Disclosures</Button>
            <Button variant="link" size="sm">Accredited Investor Form</Button>
            <Button variant="link" size="sm">Payment Processing</Button>
            <Button variant="link" size="sm">Withdrawal Policy</Button>
            <Button variant="link" size="sm">FAQs</Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            InvestoFund is not a bank or licensed financial advisor. All investments carry risk.
          </p>
        </div>
      </main>
    </div>
  );
}