import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  PlusCircle, 
  FileText, 
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { Link } from "wouter";

// Empty data - will populate as deals are submitted
const mockBrokerData = {
  user: {
    name: "Sarah Johnson",
    email: "sarah.johnson@brokerpartner.com",
    companyName: "Premier Funding Solutions",
    isoId: "ISO-001234",
    partnerSince: "2023-06-01",
    status: "Verified Partner"
  },
  performance: {
    totalCommissions: 0,
    monthlyCommissions: 0,
    totalDealsSubmitted: 0,
    approvedDeals: 0,
    approvalRate: 0,
    averageCommission: 0,
    thisMonthDeals: 0
  },
  activeDeals: []
};

export default function BrokerDashboard() {
  const [userData, setUserData] = useState(mockBrokerData);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'funded': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'under_review': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending_documents': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'funded': return <CheckCircle className="w-4 h-4" />;
      case 'under_review': return <Clock className="w-4 h-4" />;
      case 'pending_documents': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleSubmitNewDeal = () => {
    window.location.href = '/brokers#deal-submission-portal';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-2">
            Welcome back, {userData.user.name}
          </h1>
          <p className="text-brand-gray mb-2">
            ISO/Broker Portal - {userData.user.companyName}
          </p>
          <div className="flex items-center space-x-4 text-sm text-brand-gray">
            <span>Partner ID: {userData.user.isoId}</span>
            <span>•</span>
            <span>Status: {userData.user.status}</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Total Commissions</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${userData.performance.totalCommissions.toLocaleString()}
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
                  <p className="text-sm font-medium text-brand-gray">This Month</p>
                  <p className="text-2xl font-bold text-brand-teal">
                    ${userData.performance.monthlyCommissions.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-brand-teal/10 rounded-full">
                  <TrendingUp className="w-6 h-6 text-brand-teal" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Approval Rate</p>
                  <p className="text-2xl font-bold text-brand-blue">
                    {userData.performance.approvalRate}%
                  </p>
                </div>
                <div className="p-3 bg-brand-blue/10 rounded-full">
                  <CheckCircle className="w-6 h-6 text-brand-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-brand-gray">Total Deals</p>
                  <p className="text-2xl font-bold text-brand-dark">
                    {userData.performance.totalDealsSubmitted}
                  </p>
                </div>
                <div className="p-3 bg-gray-100 rounded-full">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit New Deal - Prominent Center Button */}
        <div className="mb-8">
          <Card className="border-2 border-brand-blue bg-gradient-to-r from-brand-blue/5 to-brand-teal/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">
                Ready to Submit a New Deal?
              </h2>
              <p className="text-brand-gray mb-6">
                Submit new merchant applications and earn competitive commissions
              </p>
              <Button 
                onClick={handleSubmitNewDeal}
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg"
              >
                <PlusCircle className="w-6 h-6 mr-2" />
                Submit New Deal
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Deals */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Submitted Deals</CardTitle>
              </CardHeader>
              <CardContent>
                {userData.activeDeals.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-brand-dark mb-2">No Deals Submitted Yet</h3>
                    <p className="text-brand-gray mb-6">
                      Your submitted deals will appear here once you start partnering with merchants.
                    </p>
                    <Button 
                      onClick={handleSubmitNewDeal}
                      className="bg-brand-blue hover:bg-brand-blue/90"
                    >
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Submit Your First Deal
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userData.activeDeals.map((deal) => (
                      <div key={deal.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-brand-dark">
                            {deal.merchantName}
                          </h4>
                          <Badge className={`${getStatusColor(deal.status)} flex items-center gap-1`}>
                            {getStatusIcon(deal.status)}
                            {deal.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-brand-gray">Requested Amount</p>
                            <p className="font-semibold">${deal.requestedAmount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-brand-gray">Est. Commission</p>
                            <p className="font-semibold text-green-600">
                              ${deal.estimatedCommission.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-brand-gray">Stage</p>
                            <p className="font-semibold capitalize">{deal.stage}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-xs text-brand-gray">
                          <span>Submitted: {deal.submittedDate}</span>
                          <span className="font-medium">Deal #{deal.id}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                  onClick={handleSubmitNewDeal}
                  className="w-full justify-start bg-brand-blue hover:bg-brand-blue/90"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Submit New Deal
                </Button>
                <Link href="/commission-structure" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Calculator className="w-4 h-4 mr-2" />
                    Commission Calculator
                  </Button>
                </Link>
                <Link href="/broker-resources" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Resources & Tools
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle>This Month Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Deals Submitted</span>
                    <span className="font-semibold text-brand-dark">
                      {userData.performance.thisMonthDeals}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Avg Commission</span>
                    <span className="font-semibold text-green-600">
                      ${userData.performance.averageCommission.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Success Rate</span>
                    <span className="font-semibold text-brand-teal">
                      {userData.performance.approvalRate}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ISO/Broker Resources */}
            <Card>
              <CardHeader>
                <CardTitle>ISO/Broker Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/broker-resources" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Marketing Materials
                  </Button>
                </Link>
                <Link href="/commission-structure" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Commission Structure
                  </Button>
                </Link>
                <Link href="/iso-training" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Training Materials
                  </Button>
                </Link>
                <Link href="/iso-tools" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    ISO Tools & Forms
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Partner Support
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