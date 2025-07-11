import { useState, useMemo } from "react";
import { Building2, CreditCard, Calendar, TrendingUp, Eye, EyeOff, CheckCircle, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";

export default function MerchantDashboardPreview() {
  const [isBlurred, setIsBlurred] = useState(true);

  // Sample preview data for demonstration
  const previewData = {
    advanceAmount: 85000,
    dailyPayment: 425,
    remainingBalance: 32750,
    payoffProgress: 62,
    nextPayment: "Tomorrow",
    totalPaid: 52250,
    monthlyRevenue: 28500,
    timeInBusiness: 36, // months
    creditScore: 680,
    bankStatementsProvided: true,
    taxReturnsProvided: true,
    recentTransactions: [
      { date: "Jan 15", amount: 425, type: "Daily Payment", status: "Processed" },
      { date: "Jan 14", amount: 425, type: "Daily Payment", status: "Processed" },
      { date: "Jan 13", amount: 425, type: "Daily Payment", status: "Processed" }
    ]
  };

  // Calculate InvestoScore based on merchant metrics
  const investoScore = useMemo(() => {
    if (isBlurred) return "Not Assigned";
    
    let baseScore = 650; // Starting score
    
    // Revenue factor (28,500 monthly revenue)
    if (previewData.monthlyRevenue >= 25000) baseScore += 50;
    else if (previewData.monthlyRevenue >= 15000) baseScore += 30;
    else if (previewData.monthlyRevenue >= 10000) baseScore += 10;
    
    // Time in business factor
    if (previewData.timeInBusiness >= 24) baseScore += 40;
    else if (previewData.timeInBusiness >= 12) baseScore += 20;
    
    // Credit score factor
    if (previewData.creditScore >= 650) baseScore += 30;
    else if (previewData.creditScore >= 600) baseScore += 15;
    
    // Payment history (based on payoff progress)
    if (previewData.payoffProgress >= 50) baseScore += 25;
    else if (previewData.payoffProgress >= 25) baseScore += 15;
    
    // Documentation completeness
    if (previewData.bankStatementsProvided) baseScore += 20;
    if (previewData.taxReturnsProvided) baseScore += 15;
    
    return Math.min(baseScore, 850); // Cap at 850
  }, [isBlurred, previewData]);

  const getScoreColor = (score: number | string) => {
    if (score === "Not Assigned") return "text-gray-500";
    if (typeof score === "number") {
      if (score >= 750) return "text-green-600";
      if (score >= 700) return "text-blue-600";
      if (score >= 650) return "text-yellow-600";
      return "text-red-600";
    }
    return "text-gray-500";
  };

  const getScoreBadgeColor = (score: number | string) => {
    if (score === "Not Assigned") return "bg-gray-100 text-gray-600";
    if (typeof score === "number") {
      if (score >= 750) return "bg-green-100 text-green-700";
      if (score >= 700) return "bg-blue-100 text-blue-700";
      if (score >= 650) return "bg-yellow-100 text-yellow-700";
      return "bg-red-100 text-red-700";
    }
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-brand-teal" />
              <div>
                <h1 className="text-xl font-bold text-brand-dark">InvestoFund Merchant Portal</h1>
                <p className="text-sm text-gray-600">Business Funding Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Preview Mode
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBlurred(!isBlurred)}
              >
                {isBlurred ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
                {isBlurred ? "Show Details" : "Hide Details"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* InvestoScore Indicator */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-start">
          <Card className="inline-flex items-center space-x-3 p-3 bg-white border shadow-sm">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">InvestoScore™:</span>
            </div>
            <Badge className={getScoreBadgeColor(investoScore)}>
              {investoScore === "Not Assigned" ? "Not Assigned" : `${investoScore}/850`}
            </Badge>
            {investoScore !== "Not Assigned" && typeof investoScore === "number" && (
              <div className="text-xs text-gray-500">
                {investoScore >= 750 ? "Excellent" : 
                 investoScore >= 700 ? "Good" : 
                 investoScore >= 650 ? "Fair" : "Needs Improvement"}
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 p-8 rounded-xl shadow-sm mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Merchant Dashboard Preview</h2>
            <p className="text-gray-600 mb-6">Manage your business funding with real-time payment tracking and financial insights</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200/30 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">Active Funding</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-green-200/30 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-800">Business Growth</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-purple-200/30 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">Flexible Terms</span>
                </div>
              </div>
            </div>

            <Link href="/merchants#apply-funding">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md mr-4">
                Apply for Funding
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={() => window.location.href = '/merchant-dashboard-learn-more'}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Funding Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Current Advance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Total Advance</span>
                    <span className="font-semibold">${previewData.advanceAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Remaining Balance</span>
                    <span className="font-semibold text-blue-600">${previewData.remainingBalance.toLocaleString()}</span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Payoff Progress</span>
                      <span className="text-sm font-semibold">{previewData.payoffProgress}%</span>
                    </div>
                    <Progress value={previewData.payoffProgress} className="h-3" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Payment Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Daily Payment</span>
                  <span className="font-semibold">${previewData.dailyPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Next Payment</span>
                  <span className="font-semibold text-green-600">{previewData.nextPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Paid</span>
                  <span className="font-semibold">${previewData.totalPaid.toLocaleString()}</span>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">On Track - Payments Current</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-blue-600">${previewData.monthlyRevenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Days Remaining</p>
                  <p className="text-2xl font-bold text-green-600">77</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Re-advance Eligible</p>
                  <p className="text-lg font-bold text-purple-600">Available</p>
                </div>
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className={isBlurred ? "blur-sm" : ""}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Payment Activity
              <Badge variant="secondary">Live Preview</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previewData.recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div>
                    <h4 className="font-semibold">{transaction.type}</h4>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${transaction.amount}</p>
                    <Badge variant="default" className="bg-green-100 text-green-700">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-white p-8 rounded-lg border">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Need Additional Funding?</h3>
          <p className="text-gray-600 mb-6">Apply for a re-advance or explore other funding options for your business growth</p>
          <div className="flex gap-4 justify-center">
            <Link href="/merchants#apply-funding">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Apply for Re-advance
              </Button>
            </Link>
            <Link href="/merchants">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Explore Funding Options
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}