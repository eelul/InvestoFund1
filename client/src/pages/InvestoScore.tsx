import { useState, useEffect } from "react";
import { CheckCircle, TrendingUp, Shield, Target, BarChart3, Clock, Award, Star, ArrowRight, Users, Calculator, FileText, BookOpen, Zap, DollarSign, AlertCircle, Eye, EyeOff, ChevronRight, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/scrollUtils";

export default function InvestoScore() {
  const [activeTab, setActiveTab] = useState("instant");
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [instantScore, setInstantScore] = useState(0);
  const [detailedScore, setDetailedScore] = useState(0);
  const [animatingScore, setAnimatingScore] = useState(0);

  // Instant Assessment State
  const [monthlyRevenue, setMonthlyRevenue] = useState([50000]);
  const [timeInBusiness, setTimeInBusiness] = useState([24]);
  const [creditScore, setCreditScore] = useState([650]);

  // Detailed Assessment State
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [detailedRevenue, setDetailedRevenue] = useState([100000]);
  const [detailedTime, setDetailedTime] = useState([36]);
  const [detailedCredit, setDetailedCredit] = useState([700]);
  const [bankBalance, setBankBalance] = useState([25000]);
  const [paymentHistory, setPaymentHistory] = useState("excellent");
  const [documentation, setDocumentation] = useState(3);

  // Calculate instant score
  useEffect(() => {
    const revenue = monthlyRevenue[0];
    const time = timeInBusiness[0];
    const credit = creditScore[0];

    let score = 300; // Base score

    // Revenue scoring (0-250 points)
    if (revenue >= 100000) score += 250;
    else if (revenue >= 75000) score += 200;
    else if (revenue >= 50000) score += 150;
    else if (revenue >= 25000) score += 100;
    else if (revenue >= 10000) score += 50;

    // Time in business (0-150 points)
    if (time >= 36) score += 150;
    else if (time >= 24) score += 120;
    else if (time >= 12) score += 80;
    else if (time >= 6) score += 40;

    // Credit score (0-150 points)
    if (credit >= 750) score += 150;
    else if (credit >= 700) score += 120;
    else if (credit >= 650) score += 90;
    else if (credit >= 600) score += 60;
    else if (credit >= 550) score += 30;

    setInstantScore(Math.min(850, score));
  }, [monthlyRevenue, timeInBusiness, creditScore]);

  // Calculate detailed score
  useEffect(() => {
    const revenue = detailedRevenue[0];
    const time = detailedTime[0];
    const credit = detailedCredit[0];
    const balance = bankBalance[0];

    let score = 350; // Higher base for detailed

    // Revenue scoring (0-250 points)
    if (revenue >= 200000) score += 250;
    else if (revenue >= 150000) score += 220;
    else if (revenue >= 100000) score += 180;
    else if (revenue >= 50000) score += 120;
    else if (revenue >= 25000) score += 80;

    // Time in business (0-150 points)
    if (time >= 60) score += 150;
    else if (time >= 36) score += 130;
    else if (time >= 24) score += 100;
    else if (time >= 12) score += 60;

    // Credit score (0-100 points)
    if (credit >= 750) score += 100;
    else if (credit >= 700) score += 80;
    else if (credit >= 650) score += 60;
    else if (credit >= 600) score += 40;

    // Bank balance (0-50 points)
    if (balance >= 50000) score += 50;
    else if (balance >= 25000) score += 40;
    else if (balance >= 10000) score += 25;
    else if (balance >= 5000) score += 15;

    // Payment history (0-50 points)
    if (paymentHistory === "excellent") score += 50;
    else if (paymentHistory === "good") score += 35;
    else if (paymentHistory === "fair") score += 20;
    else score += 5;

    // Documentation (0-50 points)
    score += documentation * 10;

    setDetailedScore(Math.min(850, score));
  }, [detailedRevenue, detailedTime, detailedCredit, bankBalance, paymentHistory, documentation]);

  // Animate score display
  useEffect(() => {
    const targetScore = activeTab === "instant" ? instantScore : detailedScore;
    const duration = 1000;
    const steps = 50;
    const increment = targetScore / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setAnimatingScore(targetScore);
        clearInterval(timer);
      } else {
        setAnimatingScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [instantScore, detailedScore, activeTab]);

  const getScoreColor = (score: number) => {
    if (score >= 750) return "text-green-600";
    if (score >= 650) return "text-blue-600";
    if (score >= 550) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 750) return { text: "Excellent", color: "bg-green-100 text-green-800" };
    if (score >= 650) return { text: "Good", color: "bg-blue-100 text-blue-800" };
    if (score >= 550) return { text: "Fair", color: "bg-yellow-100 text-yellow-800" };
    return { text: "Needs Improvement", color: "bg-red-100 text-red-800" };
  };

  const currentScore = activeTab === "instant" ? instantScore : detailedScore;
  const scoreBadge = getScoreBadge(currentScore);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-indigo-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/30 text-purple-100 border border-purple-400/40 mb-4">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              The Decision Metric Everyone Uses
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
              Understanding Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-white bg-clip-text text-transparent">
              InvestoScore™
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed max-w-4xl mx-auto">
            The primary metric that investors, brokers, and InvestoFund use to evaluate 
            your business creditworthiness and funding eligibility. Get your score instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToElement('assessment-tools')}
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Your Score Now
            </Button>
            <Button 
              size="lg" 
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToElement('why-it-matters')}
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Why It Matters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  For Merchants
                </span>
              </div>
              <div className="text-purple-200 text-sm">Unlock better terms and faster approvals</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  For Brokers
                </span>
              </div>
              <div className="text-purple-200 text-sm">Help clients improve and win more deals</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  For Investors
                </span>
              </div>
              <div className="text-purple-200 text-sm">Make confident investment decisions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Assessment Tools */}
      <section id="assessment-tools" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            Get Your InvestoScore™ Assessment
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="instant" className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Instant Assessment</span>
              </TabsTrigger>
              <TabsTrigger value="detailed" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Detailed Assessment</span>
              </TabsTrigger>
            </TabsList>

            {/* Score Display */}
            <div className="text-center mb-8">
              <Card className="max-w-md mx-auto bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold mb-2 transition-all duration-1000">
                    <span className={getScoreColor(currentScore)}>
                      {animatingScore}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">InvestoScore™ / 850</div>
                  <Progress value={(currentScore / 850) * 100} className="mb-4" />
                  <Badge className={scoreBadge.color}>
                    {scoreBadge.text}
                  </Badge>
                  <p className="text-sm text-gray-600 mt-4">
                    {currentScore >= 750 ? "Excellent funding eligibility" :
                     currentScore >= 650 ? "Good funding options available" :
                     currentScore >= 550 ? "Standard funding terms" :
                     "Focus on score improvement for better terms"}
                  </p>
                </CardContent>
              </Card>
            </div>

            <TabsContent value="instant">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-600" />
                    Instant Assessment
                  </CardTitle>
                  <p className="text-gray-600">Get your score in 30 seconds with basic business information</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Monthly Revenue: ${monthlyRevenue[0].toLocaleString()}
                    </Label>
                    <Slider
                      value={monthlyRevenue}
                      onValueChange={setMonthlyRevenue}
                      max={200000}
                      min={5000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$5K</span>
                      <span>$200K</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Time in Business: {timeInBusiness[0]} months
                    </Label>
                    <Slider
                      value={timeInBusiness}
                      onValueChange={setTimeInBusiness}
                      max={120}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 month</span>
                      <span>10 years</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Credit Score: {creditScore[0]}
                    </Label>
                    <Slider
                      value={creditScore}
                      onValueChange={setCreditScore}
                      max={850}
                      min={300}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>300</span>
                      <span>850</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-800 mb-2">What This Score Means:</h3>
                    <p className="text-sm text-purple-700">
                      {currentScore >= 750 ? "Excellent! You qualify for premium funding terms with factor rates starting at 1.15x and amounts up to $2M." :
                       currentScore >= 650 ? "Good standing! You have access to competitive rates and standard funding options." :
                       currentScore >= 550 ? "Fair eligibility. Consider improving documentation and payment history." :
                       "Focus on increasing revenue and establishing payment history to improve your score."}
                    </p>
                  </div>

                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => setActiveTab("detailed")}
                  >
                    Get More Accurate Score
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detailed">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    Detailed Assessment
                  </CardTitle>
                  <p className="text-gray-600">Complete assessment for the most accurate score and personalized recommendations</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input 
                        id="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Enter your business name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Input 
                        id="industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        placeholder="e.g., Restaurant, Manufacturing"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Monthly Revenue: ${detailedRevenue[0].toLocaleString()}
                    </Label>
                    <Slider
                      value={detailedRevenue}
                      onValueChange={setDetailedRevenue}
                      max={500000}
                      min={5000}
                      step={5000}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Time in Business: {detailedTime[0]} months
                    </Label>
                    <Slider
                      value={detailedTime}
                      onValueChange={setDetailedTime}
                      max={240}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Credit Score: {detailedCredit[0]}
                    </Label>
                    <Slider
                      value={detailedCredit}
                      onValueChange={setDetailedCredit}
                      max={850}
                      min={300}
                      step={10}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Average Bank Balance: ${bankBalance[0].toLocaleString()}
                    </Label>
                    <Slider
                      value={bankBalance}
                      onValueChange={setBankBalance}
                      max={100000}
                      min={1000}
                      step={1000}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Payment History
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {["excellent", "good", "fair", "poor"].map((option) => (
                        <Button
                          key={option}
                          variant={paymentHistory === option ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPaymentHistory(option)}
                          className="capitalize"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Documentation Completeness: {documentation}/5 documents
                    </Label>
                    <Slider
                      value={[documentation]}
                      onValueChange={(value) => setDocumentation(value[0])}
                      max={5}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      Bank statements, tax returns, financial statements, etc.
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Detailed Score Analysis:</h3>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div className="flex justify-between">
                        <span>Revenue Strength:</span>
                        <span className="font-medium">
                          {detailedRevenue[0] >= 100000 ? "Excellent" : 
                           detailedRevenue[0] >= 50000 ? "Good" : "Fair"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Business Maturity:</span>
                        <span className="font-medium">
                          {detailedTime[0] >= 36 ? "Established" : 
                           detailedTime[0] >= 12 ? "Growing" : "New"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Documentation:</span>
                        <span className="font-medium">
                          {documentation >= 4 ? "Complete" : 
                           documentation >= 2 ? "Partial" : "Minimal"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.location.href = '/merchant-application'}
                  >
                    Apply for Funding with This Score
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-it-matters" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            Why Your InvestoScore™ Matters
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* For Merchants */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <DollarSign className="w-6 h-6 mr-2" />
                  For Merchants
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">Better funding terms and lower factor rates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">Faster approval and funding decisions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">Access to larger funding amounts</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm">Priority for re-advance opportunities</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Higher scores = Better business relationships</strong> with repeat funding cycles
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* For Brokers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-600">
                  <Users className="w-6 h-6 mr-2" />
                  For Brokers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <span className="text-sm">Help clients qualify for better terms</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <span className="text-sm">Win more deals with score improvement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <span className="text-sm">Build long-term client relationships</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <span className="text-sm">Increase commission on higher-value deals</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Coach your clients</strong> to improve scores and increase your success rate
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* For Investors */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  For Investors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm">Confidence to participate or pass on deals</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm">Risk-tier clarity without deep due diligence</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm">Insight into merchant behavior beyond numbers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm">Build diversified portfolios by score tiers</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Higher scores = Repeatable income</strong> from trusted merchants
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Score is Calculated */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            How Your Score is Calculated
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Repayment Behavior",
                description: "Consistency and early repayment improve score",
                weight: "30%",
                color: "text-green-600",
                bgColor: "bg-green-100"
              },
              {
                icon: FileText,
                title: "Document Completeness", 
                description: "More verified financials = lower risk",
                weight: "25%",
                color: "text-blue-600",
                bgColor: "bg-blue-100"
              },
              {
                icon: Users,
                title: "Communication History",
                description: "Responsiveness, clarity, professionalism",
                weight: "20%",
                color: "text-purple-600",
                bgColor: "bg-purple-100"
              },
              {
                icon: BarChart3,
                title: "Cash Flow Trends",
                description: "Monthly revenue, deposit frequency, seasonality",
                weight: "15%",
                color: "text-orange-600",
                bgColor: "bg-orange-100"
              },
              {
                icon: Award,
                title: "Deal Performance",
                description: "Previous funding through InvestoFund and outcomes",
                weight: "10%",
                color: "text-red-600",
                bgColor: "bg-red-100"
              }
            ].map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">{metric.title}</h3>
                  <p className="text-sm text-brand-gray mb-3">{metric.description}</p>
                  <Badge variant="outline" className="bg-gray-50">
                    {metric.weight} Weight
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 text-center">
            <AlertCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-dark mb-4">
              Scores Update in Real Time
            </h3>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Your InvestoScore™ automatically updates as new data is submitted or your business behavior evolves. 
              Regular funding cycles and positive repayment history continuously improve your score.
            </p>
          </div>
        </div>
      </section>

      {/* Score Impact Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            What Your Score Gets You
          </h2>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Score Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Rating</th>
                      <th className="px-6 py-4 text-left font-semibold">Factor Rate</th>
                      <th className="px-6 py-4 text-left font-semibold">Max Amount</th>
                      <th className="px-6 py-4 text-left font-semibold">Approval Time</th>
                      <th className="px-6 py-4 text-left font-semibold">Special Benefits</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 font-medium text-green-800">750-850</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                      </td>
                      <td className="px-6 py-4">1.15x - 1.25x</td>
                      <td className="px-6 py-4">Up to $2,000,000</td>
                      <td className="px-6 py-4">Same day</td>
                      <td className="px-6 py-4 text-sm">Priority funding, re-advance at 50%</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 font-medium text-blue-800">650-749</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-blue-100 text-blue-800">Good</Badge>
                      </td>
                      <td className="px-6 py-4">1.20x - 1.35x</td>
                      <td className="px-6 py-4">Up to $1,000,000</td>
                      <td className="px-6 py-4">24 hours</td>
                      <td className="px-6 py-4 text-sm">Standard terms, re-advance eligible</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-6 py-4 font-medium text-yellow-800">550-649</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-yellow-100 text-yellow-800">Fair</Badge>
                      </td>
                      <td className="px-6 py-4">1.30x - 1.45x</td>
                      <td className="px-6 py-4">Up to $500,000</td>
                      <td className="px-6 py-4">48 hours</td>
                      <td className="px-6 py-4 text-sm">Score improvement programs</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 font-medium text-red-800">300-549</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-red-100 text-red-800">Needs Work</Badge>
                      </td>
                      <td className="px-6 py-4">1.40x - 1.49x</td>
                      <td className="px-6 py-4">Up to $100,000</td>
                      <td className="px-6 py-4">3-5 days</td>
                      <td className="px-6 py-4 text-sm">Consultation required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Get Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-brand-dark">
            Need Help Improving Your Score?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Work with a Broker</h3>
                <p className="text-gray-600 mb-6">
                  Partner with an experienced broker who can help you optimize your application 
                  and improve your score through proper documentation and strategy.
                </p>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.location.href = '/brokers'}
                >
                  Find a Broker Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Direct InvestoFund Support</h3>
                <p className="text-gray-600 mb-6">
                  Get personalized guidance from our team to understand your score factors 
                  and receive recommendations for improvement.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-indigo-600/30"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Use Your Score?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Apply for funding, connect with brokers, or start investing based on your InvestoScore™.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/merchant-application'}
            >
              Apply for Funding
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToElement('assessment-tools')}
            >
              Retake Assessment
              <Calculator className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}