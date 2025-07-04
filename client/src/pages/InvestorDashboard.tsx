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
  Target
} from "lucide-react";
import { Link } from "wouter";

// Mock data - would come from API in real app
const mockInvestorData = {
  user: {
    name: "John Smith",
    email: "john.smith@email.com",
    accountStatus: "Active",
    joinDate: "2024-01-15"
  },
  portfolio: {
    totalInvested: 125000,
    totalReturns: 23750,
    activeDeals: 8,
    completedDeals: 12,
    averageReturn: 19.2,
    currentYieldRate: 18.5
  },
  activeInvestments: [
    {
      id: 1,
      merchantName: "ABC Restaurant Group",
      amount: 25000,
      expectedReturn: 31250,
      progress: 65,
      startDate: "2024-10-01",
      expectedCompletion: "2025-04-01",
      status: "performing"
    },
    {
      id: 2,
      merchantName: "Tech Solutions LLC",
      amount: 15000,
      expectedReturn: 18750,
      progress: 45,
      startDate: "2024-11-15",
      expectedCompletion: "2025-05-15",
      status: "performing"
    },
    {
      id: 3,
      merchantName: "Retail Fashion Co",
      amount: 20000,
      expectedReturn: 24000,
      progress: 30,
      startDate: "2024-12-01",
      expectedCompletion: "2025-06-01",
      status: "new"
    }
  ]
};

export default function InvestorDashboard() {
  const [userData, setUserData] = useState(mockInvestorData);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'performing': return 'bg-green-100 text-green-800 border-green-200';
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-2">
            Welcome back, {userData.user.name}
          </h1>
          <p className="text-brand-gray">
            Investor Portal - Track your MCA investments and returns
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Total Invested</p>
                  <p className="text-2xl font-bold text-brand-dark">
                    ${userData.portfolio.totalInvested.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-brand-teal/10 rounded-full">
                  <DollarSign className="w-6 h-6 text-brand-teal" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Total Returns</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${userData.portfolio.totalReturns.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Active Deals</p>
                  <p className="text-2xl font-bold text-brand-blue">
                    {userData.portfolio.activeDeals}
                  </p>
                </div>
                <div className="p-3 bg-brand-blue/10 rounded-full">
                  <BarChart3 className="w-6 h-6 text-brand-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Avg Return</p>
                  <p className="text-2xl font-bold text-brand-dark">
                    {userData.portfolio.averageReturn}%
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Target className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Investments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Investments</CardTitle>
                <Link href="/investors">
                  <Button className="bg-brand-teal hover:bg-brand-teal/90">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    New Investment
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.activeInvestments.map((investment) => (
                    <div key={investment.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-brand-dark">
                          {investment.merchantName}
                        </h4>
                        <Badge className={getStatusColor(investment.status)}>
                          {investment.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-brand-gray">Invested</p>
                          <p className="font-semibold">${investment.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-brand-gray">Expected Return</p>
                          <p className="font-semibold text-green-600">
                            ${investment.expectedReturn.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-brand-gray">Progress</p>
                          <p className="font-semibold">{investment.progress}%</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-brand-gray">Collection Progress</span>
                          <span className="text-brand-dark">{investment.progress}%</span>
                        </div>
                        <Progress value={investment.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between text-xs text-brand-gray">
                        <span>Started: {investment.startDate}</span>
                        <span>Expected: {investment.expectedCompletion}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/investors" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    New Investment
                  </Button>
                </Link>
                <Link href="/profit-sharing-agreement" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    View Agreement
                  </Button>
                </Link>
                <Link href="/investor-resources" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Resources & Tools
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Current Yield</span>
                    <span className="font-semibold text-green-600 flex items-center">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      {userData.portfolio.currentYieldRate}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Total ROI</span>
                    <span className="font-semibold text-green-600">
                      {((userData.portfolio.totalReturns / userData.portfolio.totalInvested) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Completed Deals</span>
                    <span className="font-semibold text-brand-dark">
                      {userData.portfolio.completedDeals}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investor Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Investor Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/investor-resources" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Investment Calculator
                  </Button>
                </Link>
                <Link href="/risk-disclosure" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Risk Information
                  </Button>
                </Link>
                <Link href="/faqs" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Investor FAQs
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}