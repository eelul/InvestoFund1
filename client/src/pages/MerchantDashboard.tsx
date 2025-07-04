import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building, 
  DollarSign, 
  Calendar, 
  PlusCircle, 
  FileText, 
  CreditCard,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";
import { Link } from "wouter";

// Mock data - would come from API in real app
const mockMerchantData = {
  user: {
    businessName: "Downtown Coffee Co",
    ownerName: "Michael Chen",
    email: "michael@downtowncoffee.com",
    businessType: "Restaurant & Food Service",
    established: "2019",
    status: "Active Customer"
  },
  business: {
    monthlyRevenue: 85000,
    averageTransaction: 45,
    processingVolume: 95000,
    creditScore: 720,
    yearsInBusiness: 5
  },
  advances: [
    {
      id: 1,
      amount: 50000,
      received: 45000, // After factor
      factorRate: 1.11,
      dailyPayment: 2250,
      totalRepayment: 55500,
      remainingBalance: 32500,
      startDate: "2024-11-01",
      estimatedCompletion: "2025-03-15",
      status: "active",
      progress: 41
    },
    {
      id: 2,
      amount: 30000,
      received: 27000,
      factorRate: 1.10,
      dailyPayment: 1500,
      totalRepayment: 33000,
      remainingBalance: 0,
      startDate: "2024-06-01",
      completedDate: "2024-10-20",
      status: "completed",
      progress: 100
    }
  ],
  paymentHistory: [
    { date: "2025-01-03", amount: 2250, status: "paid" },
    { date: "2025-01-02", amount: 2250, status: "paid" },
    { date: "2025-01-01", amount: 0, status: "holiday" },
    { date: "2024-12-31", amount: 2250, status: "paid" },
    { date: "2024-12-30", amount: 2250, status: "paid" }
  ]
};

export default function MerchantDashboard() {
  const [userData, setUserData] = useState(mockMerchantData);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'overdue': return 'text-red-600';
      case 'holiday': return 'text-gray-500';
      default: return 'text-gray-600';
    }
  };

  const handleApplyForFunding = () => {
    window.location.href = '/merchants#merchant-application';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-2">
            Welcome, {userData.user.businessName}
          </h1>
          <p className="text-brand-gray mb-2">
            Business Owner Portal - {userData.user.ownerName}
          </p>
          <div className="flex items-center space-x-4 text-sm text-brand-gray">
            <span>Business Type: {userData.user.businessType}</span>
            <span>•</span>
            <span>Est. {userData.user.established}</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${userData.business.monthlyRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Processing Volume</p>
                  <p className="text-2xl font-bold text-brand-teal">
                    ${userData.business.processingVolume.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-brand-teal/10 rounded-full">
                  <CreditCard className="w-6 h-6 text-brand-teal" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Credit Score</p>
                  <p className="text-2xl font-bold text-brand-blue">
                    {userData.business.creditScore}
                  </p>
                </div>
                <div className="p-3 bg-brand-blue/10 rounded-full">
                  <TrendingUp className="w-6 h-6 text-brand-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Years in Business</p>
                  <p className="text-2xl font-bold text-brand-dark">
                    {userData.business.yearsInBusiness}
                  </p>
                </div>
                <div className="p-3 bg-gray-100 rounded-full">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Apply for Additional Funding - Prominent Center Button */}
        <div className="mb-8">
          <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-brand-teal/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">
                Need Additional Working Capital?
              </h2>
              <p className="text-brand-gray mb-6">
                Apply for fast business funding to grow your operations
              </p>
              <Button 
                onClick={handleApplyForFunding}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                <PlusCircle className="w-6 h-6 mr-2" />
                Apply for Funding
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Advances */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Merchant Cash Advances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {userData.advances.map((advance) => (
                    <div key={advance.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-brand-dark">
                          Advance #{advance.id}
                        </h4>
                        <Badge className={getStatusColor(advance.status)}>
                          {advance.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-brand-gray">Amount Received</p>
                          <p className="font-semibold text-green-600">
                            ${advance.received.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-brand-gray">Daily Payment</p>
                          <p className="font-semibold">
                            ${advance.dailyPayment.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-brand-gray">Remaining Balance</p>
                          <p className="font-semibold text-brand-dark">
                            ${advance.remainingBalance.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {advance.status === 'active' && (
                        <>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-brand-gray">Repayment Progress</span>
                              <span className="text-brand-dark">{advance.progress}%</span>
                            </div>
                            <Progress value={advance.progress} className="h-2" />
                          </div>
                          
                          <div className="flex justify-between text-xs text-brand-gray">
                            <span>Started: {advance.startDate}</span>
                            <span>Est. Completion: {advance.estimatedCompletion}</span>
                          </div>
                        </>
                      )}

                      {advance.status === 'completed' && (
                        <div className="text-xs text-brand-gray">
                          <span>Completed: {advance.completedDate}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Payment History */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userData.paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center space-x-3">
                        {payment.status === 'paid' && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {payment.status === 'pending' && <Clock className="w-4 h-4 text-yellow-600" />}
                        {payment.status === 'holiday' && <Calendar className="w-4 h-4 text-gray-500" />}
                        <span className="text-sm text-brand-gray">{payment.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`font-semibold ${getPaymentStatusColor(payment.status)}`}>
                          {payment.amount > 0 ? `$${payment.amount.toLocaleString()}` : 'Holiday'}
                        </span>
                        <span className={`text-xs capitalize ${getPaymentStatusColor(payment.status)}`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleApplyForFunding}
                  className="w-full justify-start bg-green-600 hover:bg-green-700"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Apply for Funding
                </Button>
                <Link href="/merchants" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Funding Options
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Health */}
            <Card>
              <CardHeader>
                <CardTitle>Business Health Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">A-</div>
                    <p className="text-sm text-brand-gray">Excellent</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray text-sm">Revenue Stability</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray text-sm">Payment History</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray text-sm">Credit Score</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Merchant Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Business Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/merchants" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Funding Calculator
                  </Button>
                </Link>
                <Link href="/faqs" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Business FAQs
                  </Button>
                </Link>
                <Link href="/legal" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Terms & Agreements
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Business Support
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