import { useState } from "react";
import { DollarSign, TrendingUp, Users, FileText, Eye, EyeOff, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function BrokerDashboardPreview() {
  const [isBlurred, setIsBlurred] = useState(true);

  // Sample preview data for demonstration
  const previewData = {
    monthlyCommissions: 12450,
    totalDeals: 8,
    approvalRate: 92,
    avgCommission: 1556,
    recentDeals: [
      { merchant: "Tony's Pizza", amount: 45000, status: "Funded", commission: 2700 },
      { merchant: "Sarah's Salon", amount: 35000, status: "Approved", commission: 2100 },
      { merchant: "Mike's Auto", amount: 65000, status: "In Review", commission: 3900 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-brand-teal" />
              <div>
                <h1 className="text-xl font-bold text-brand-dark">InvestoFund ISO Portal</h1>
                <p className="text-sm text-gray-600">Deal Management Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-200/50 p-8 rounded-xl shadow-sm mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">ISO Dashboard Preview</h2>
            <p className="text-gray-600 mb-6">Experience the power of real-time deal tracking and commission management</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-200/30 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-gray-800">Gold Partner Status</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-sky-200/30 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-sky-600" />
                  <span className="font-semibold text-gray-800">15% Commission Rate</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-purple-200/30 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">Dedicated Manager</span>
                </div>
              </div>
            </div>

            <Link href="/broker-login">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md mr-4">
                Access Full Dashboard
              </Button>
            </Link>
            <Link href="/brokers#apply">
              <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                Become an ISO Partner
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Commissions</p>
                  <p className="text-2xl font-bold text-emerald-600">${previewData.monthlyCommissions.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Deals Submitted</p>
                  <p className="text-2xl font-bold text-sky-600">{previewData.totalDeals}</p>
                </div>
                <FileText className="w-8 h-8 text-sky-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approval Rate</p>
                  <p className="text-2xl font-bold text-purple-600">{previewData.approvalRate}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className={isBlurred ? "blur-sm" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Commission</p>
                  <p className="text-2xl font-bold text-amber-600">${previewData.avgCommission.toLocaleString()}</p>
                </div>
                <Star className="w-8 h-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Deals */}
        <Card className={isBlurred ? "blur-sm" : ""}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Deal Activity
              <Badge variant="secondary">Live Preview</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previewData.recentDeals.map((deal, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div>
                    <h4 className="font-semibold">{deal.merchant}</h4>
                    <p className="text-sm text-gray-600">${deal.amount.toLocaleString()} funding request</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={deal.status === "Funded" ? "default" : deal.status === "Approved" ? "secondary" : "outline"}
                      className={deal.status === "Funded" ? "bg-emerald-100 text-emerald-700" : 
                                 deal.status === "Approved" ? "bg-sky-100 text-sky-700" : 
                                 "bg-amber-100 text-amber-700"}
                    >
                      {deal.status}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-1">${deal.commission.toLocaleString()} commission</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-white p-8 rounded-lg border">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Start Earning?</h3>
          <p className="text-gray-600 mb-6">Join our network of successful ISOs and start earning industry-leading commissions</p>
          <div className="flex gap-4 justify-center">
            <Link href="/broker-login">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Login to Dashboard
              </Button>
            </Link>
            <Link href="/brokers#apply">
              <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                Apply to Join
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}