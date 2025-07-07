import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PlusCircle, 
  FileText, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Lock,
  Users,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "wouter";

// Sample data for the blurred preview
const previewData = {
  user: {
    name: "Sample Investor",
    email: "investor@example.com",
    accountStatus: "Preview Mode",
    joinDate: "2024-07-01"
  },
  portfolio: {
    totalInvested: 25000,
    totalReturns: 5200,
    activeDeals: 4,
    completedDeals: 12,
    averageReturn: 20.8,
    currentYieldRate: 94,
    totalCommissions: 3850
  },
  activeInvestments: [
    {
      id: 1,
      merchantName: "Tech Retail Solutions",
      amount: 8500,
      factorRate: 1.45,
      daysRemaining: 28,
      expectedReturn: 1768,
      status: "performing",
      industry: "Retail Technology"
    },
    {
      id: 2,
      merchantName: "Urban Food Distribution",
      amount: 6200,
      factorRate: 1.42,
      daysRemaining: 15,
      expectedReturn: 1290,
      status: "performing",
      industry: "Food & Beverage"
    },
    {
      id: 3,
      merchantName: "Professional Services LLC",
      amount: 7800,
      factorRate: 1.38,
      daysRemaining: 42,
      expectedReturn: 1624,
      status: "new",
      industry: "Professional Services"
    },
    {
      id: 4,
      merchantName: "Healthcare Equipment Co",
      amount: 2500,
      factorRate: 1.49,
      daysRemaining: 8,
      expectedReturn: 520,
      status: "performing",
      industry: "Healthcare"
    }
  ]
};

export default function InvestorDashboard() {
  const [userData, setUserData] = useState(previewData);
  const [isPartner, setIsPartner] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'performing': return 'bg-green-100 text-green-800 border-green-200';
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-brand-dark mb-2">
                Investment Dashboard
              </h1>
              <p className="text-brand-gray">
                {!isPartner ? "Preview of Active Investment Opportunities" : "Manage your portfolio and track performance"}
              </p>
            </div>
            <Badge 
              variant="outline" 
              className={`px-3 py-1 ${!isPartner ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-green-50 text-green-700 border-green-200'}`}
            >
              {userData.user.accountStatus}
            </Badge>
          </div>
        </div>

        {/* Partner Access Overlay */}
        {!isPartner && (
          <div className="relative">
            {/* Blurred Background Content */}
            <div className="filter blur-[2px] pointer-events-none">
              {/* Portfolio Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-brand-gray">Total Invested</p>
                        <p className="text-2xl font-bold text-brand-dark">
                          ${userData.portfolio.totalInvested.toLocaleString()}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-green-600">This month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-brand-gray">Total Returns</p>
                        <p className="text-2xl font-bold text-brand-dark">
                          ${userData.portfolio.totalReturns.toLocaleString()}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <span className="text-green-600">
                        {userData.portfolio.averageReturn}% avg return
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-brand-gray">Active Deals</p>
                        <p className="text-2xl font-bold text-brand-dark">
                          {userData.portfolio.activeDeals}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <span className="text-brand-gray">
                        {userData.portfolio.completedDeals} completed
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-brand-gray">Approval Rate</p>
                        <p className="text-2xl font-bold text-brand-dark">
                          {userData.portfolio.currentYieldRate}%
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-green-600">High success rate</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Active Investments */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">Active Investments</CardTitle>
                    <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">
                      <PlusCircle className="w-4 h-4 mr-2" />
                      New Investment
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.activeInvestments.map((investment) => (
                      <div key={investment.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {investment.merchantName.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-brand-dark">{investment.merchantName}</h3>
                              <p className="text-sm text-brand-gray">{investment.industry}</p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(investment.status)}>
                            {investment.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-brand-gray">Investment</p>
                            <p className="font-semibold">${investment.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-brand-gray">Factor Rate</p>
                            <p className="font-semibold">{investment.factorRate}x</p>
                          </div>
                          <div>
                            <p className="text-brand-gray">Days Remaining</p>
                            <p className="font-semibold">{investment.daysRemaining} days</p>
                          </div>
                          <div>
                            <p className="text-brand-gray">Expected Return</p>
                            <p className="font-semibold text-green-600">+${investment.expectedReturn.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-brand-gray">Progress</span>
                            <span className="text-xs text-brand-gray">
                              {Math.round(((45 - investment.daysRemaining) / 45) * 100)}%
                            </span>
                          </div>
                          <Progress 
                            value={((45 - investment.daysRemaining) / 45) * 100} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Charts Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Monthly Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-brand-blue mx-auto mb-2" />
                        <p className="text-brand-gray">Performance Analytics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { action: "Investment completed", merchant: "Tech Retail Solutions", amount: "+$1,768", time: "2 hours ago" },
                        { action: "New investment", merchant: "Healthcare Equipment Co", amount: "$2,500", time: "1 day ago" },
                        { action: "Payment received", merchant: "Urban Food Distribution", amount: "+$1,290", time: "3 days ago" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{activity.action}</p>
                            <p className="text-xs text-brand-gray">{activity.merchant}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-sm">{activity.amount}</p>
                            <p className="text-xs text-brand-gray">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Overlay with Call to Action */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
              <div className="text-center max-w-lg mx-auto p-8">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-brand-dark mb-4">
                  Become an Investing Partner
                </h2>
                
                <p className="text-lg text-brand-gray mb-6">
                  Unlock access to exclusive high-yield investment opportunities. 
                  Join our community of successful investors earning 20.8%+ returns.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-brand-blue text-xl">$3,850</div>
                      <div className="text-brand-gray">Total Commissions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-brand-blue text-xl">94%</div>
                      <div className="text-brand-gray">Approval Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-brand-blue text-xl">$25k</div>
                      <div className="text-brand-gray">Invested This Month</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-brand-blue text-xl">4</div>
                      <div className="text-brand-gray">Active Deals</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/investors#start-investing">
                    <Button 
                      size="lg" 
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Become an Investing Partner
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-gray-300 text-gray-500 cursor-not-allowed py-4 text-lg"
                    disabled
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Access Dashboard (After Approval)
                  </Button>
                </div>

                <p className="text-xs text-brand-gray mt-4">
                  * Dashboard preview shows sample investment opportunities. Actual returns may vary.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Full Dashboard for Partners */}
        {isPartner && (
          <div>
            {/* Portfolio Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-gray">Total Invested</p>
                      <p className="text-2xl font-bold text-brand-dark">
                        ${userData.portfolio.totalInvested.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600">This month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-gray">Total Returns</p>
                      <p className="text-2xl font-bold text-brand-dark">
                        ${userData.portfolio.totalReturns.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-green-600">
                      {userData.portfolio.averageReturn}% avg return
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-gray">Active Deals</p>
                      <p className="text-2xl font-bold text-brand-dark">
                        {userData.portfolio.activeDeals}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-brand-gray">
                      {userData.portfolio.completedDeals} completed
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-gray">Approval Rate</p>
                      <p className="text-2xl font-bold text-brand-dark">
                        {userData.portfolio.currentYieldRate}%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600">High success rate</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rest of dashboard content for actual partners */}
            <div className="text-center py-12">
              <p className="text-brand-gray">Full dashboard functionality will be available once you become an investing partner.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}