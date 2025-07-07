import { useState } from "react";
import { 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Clock, 
  Users, 
  Upload,
  MessageCircle,
  Calculator,
  Star,
  Bell,
  CheckCircle,
  AlertCircle,
  Eye
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function BrokerPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data - will be replaced with real API calls
  const brokerData = {
    name: "John Smith",
    tier: "Gold",
    commissionRate: "12%",
    manager: {
      name: "Jessica Rivera",
      email: "jessica@investofund.com"
    },
    monthlyStats: {
      dealsSubmitted: 7,
      fundedAmount: 173000,
      commissionPaid: 14610,
      nextPayout: "July 15th"
    },
    recentDeals: [
      {
        id: 1,
        merchantName: "Jane's Cafe",
        requestedAmount: 45000,
        product: "MCA",
        status: "In Review",
        lastUpdate: "1h ago",
        commission: 2700,
        timeline: 60
      },
      {
        id: 2,
        merchantName: "Tom's Auto Shop",
        requestedAmount: 75000,
        product: "Equipment",
        status: "Approved",
        lastUpdate: "3h ago",
        commission: 4500,
        timeline: 90
      },
      {
        id: 3,
        merchantName: "Maria's Restaurant",
        requestedAmount: 35000,
        product: "MCA",
        status: "Funded",
        lastUpdate: "1d ago",
        commission: 2100,
        timeline: 100
      }
    ],
    renewalOpportunities: [
      {
        merchant: "Tom's Tires",
        paidPercentage: 65,
        eligibleDate: "Now",
        estimatedRenewal: 30000
      },
      {
        merchant: "Sarah's Salon",
        paidPercentage: 70,
        eligibleDate: "2 days",
        estimatedRenewal: 25000
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted": return "bg-blue-100 text-blue-800";
      case "In Review": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-green-100 text-green-800";
      case "Funded": return "bg-emerald-100 text-emerald-800";
      case "Declined": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Funded": return <CheckCircle className="w-4 h-4" />;
      case "Approved": return <CheckCircle className="w-4 h-4" />;
      case "In Review": return <Clock className="w-4 h-4" />;
      case "Declined": return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
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
                <p className="text-sm text-gray-600">Welcome back, {brokerData.name}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal">
                {brokerData.tier} Partner
              </Badge>
              <Button size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b-0 h-auto p-0">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="deals" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                My Deals
              </TabsTrigger>
              <TabsTrigger value="submit" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                Submit Deal
              </TabsTrigger>
              <TabsTrigger value="commissions" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                Commissions
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                Resources
              </TabsTrigger>
              <TabsTrigger value="renewals" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                Renewals
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brand-teal rounded-none">
                Support
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-blue text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">👋 Welcome, {brokerData.name}!</h2>
              <p className="text-brand-teal-light mb-4">You're in the driver's seat. Submit deals, track commissions, and access resources 24/7.</p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-sm opacity-90">🔹 Approved ISO Partner</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-sm opacity-90">🔹 Commission Tier: {brokerData.tier} ({brokerData.commissionRate})</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-sm opacity-90">🔹 Funding Manager: {brokerData.manager.name}</p>
                </div>
              </div>

              <Button className="bg-white text-brand-teal hover:bg-gray-100">
                <Upload className="w-4 h-4 mr-2" />
                Submit a New Deal
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Deals This Month</p>
                      <p className="text-2xl font-bold text-brand-dark">{brokerData.monthlyStats.dealsSubmitted}</p>
                    </div>
                    <FileText className="w-8 h-8 text-brand-teal" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Funded Amount</p>
                      <p className="text-2xl font-bold text-brand-dark">${brokerData.monthlyStats.fundedAmount.toLocaleString()}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-brand-teal" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Commission Paid</p>
                      <p className="text-2xl font-bold text-brand-dark">${brokerData.monthlyStats.commissionPaid.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-brand-teal" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Next Payout</p>
                      <p className="text-lg font-bold text-brand-dark">{brokerData.monthlyStats.nextPayout}</p>
                      <p className="text-xs text-gray-500">via ACH</p>
                    </div>
                    <Clock className="w-8 h-8 text-brand-teal" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Deals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Deals
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("deals")}>
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brokerData.recentDeals.map((deal) => (
                    <div key={deal.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(deal.status)}
                        <div>
                          <h4 className="font-semibold">{deal.merchantName}</h4>
                          <p className="text-sm text-gray-600">${deal.requestedAmount.toLocaleString()} • {deal.product}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(deal.status)}>
                          {deal.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">Est. ${deal.commission.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab("submit")}>
                <CardContent className="p-6 text-center">
                  <Upload className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Submit New Deal</h3>
                  <p className="text-sm text-gray-600">Upload merchant docs in 60 seconds</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab("commissions")}>
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">View Commissions</h3>
                  <p className="text-sm text-gray-600">See what you've earned and what's pending</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab("resources")}>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Marketing Tools</h3>
                  <p className="text-sm text-gray-600">Flyers, pitch decks, and merchant links</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Deals Tab */}
          <TabsContent value="deals" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-brand-dark">My Deals</h2>
              <Button onClick={() => setActiveTab("submit")}>
                <Upload className="w-4 h-4 mr-2" />
                Submit New Deal
              </Button>
            </div>

            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm">All Status</Button>
                  <Button variant="outline" size="sm">In Review</Button>
                  <Button variant="outline" size="sm">Approved</Button>
                  <Button variant="outline" size="sm">Funded</Button>
                  <Button variant="outline" size="sm">This Month</Button>
                </div>
              </CardContent>
            </Card>

            {/* Deals Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Merchant</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Product</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Commission</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {brokerData.recentDeals.map((deal) => (
                        <tr key={deal.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold">{deal.merchantName}</p>
                              <p className="text-sm text-gray-600">{deal.lastUpdate}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">${deal.requestedAmount.toLocaleString()}</td>
                          <td className="px-6 py-4">{deal.product}</td>
                          <td className="px-6 py-4">
                            <Badge className={getStatusColor(deal.status)}>
                              {deal.status}
                            </Badge>
                            <div className="mt-1">
                              <Progress value={deal.timeline} className="w-20 h-2" />
                            </div>
                          </td>
                          <td className="px-6 py-4">${deal.commission.toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submit Deal Tab */}
          <TabsContent value="submit" className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Submit New Deal</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Merchant Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Name</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter business name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Requested Amount</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="$50,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Monthly Revenue</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="$25,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time in Business</label>
                    <select className="w-full p-2 border rounded">
                      <option>Select timeframe</option>
                      <option>Less than 1 year</option>
                      <option>1-2 years</option>
                      <option>2-5 years</option>
                      <option>5+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Credit Score (Estimated)</label>
                    <select className="w-full p-2 border rounded">
                      <option>Select range</option>
                      <option>300-549 (Poor)</option>
                      <option>550-649 (Fair)</option>
                      <option>650-749 (Good)</option>
                      <option>750+ (Excellent)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Type</label>
                    <select className="w-full p-2 border rounded">
                      <option>Merchant Cash Advance</option>
                      <option>Business Line of Credit</option>
                      <option>Equipment Financing</option>
                      <option>Term Loan</option>
                      <option>SBA Loan</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Upload Documents</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Drag and drop files here or click to browse</p>
                    <p className="text-xs text-gray-500 mt-1">Application, Bank Statements, ID, Voided Check</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Notes for Underwriter (Optional)</label>
                  <textarea className="w-full p-2 border rounded h-24" placeholder="Any additional information..."></textarea>
                </div>

                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  Submit Deal for Review
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Commissions Tab */}
          <TabsContent value="commissions" className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Commission Center</h2>
            
            {/* Commission Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">This Month</h3>
                  <p className="text-2xl font-bold text-brand-teal">${brokerData.monthlyStats.commissionPaid.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">7 deals funded</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Pending</h3>
                  <p className="text-2xl font-bold text-yellow-600">$8,250</p>
                  <p className="text-sm text-gray-600">3 deals in pipeline</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Lifetime</h3>
                  <p className="text-2xl font-bold text-brand-dark">$127,450</p>
                  <p className="text-sm text-gray-600">62 deals total</p>
                </CardContent>
              </Card>
            </div>

            {/* Volume Bonus Tracker */}
            <Card>
              <CardHeader>
                <CardTitle>Volume Bonus Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Progress to next bonus tier</span>
                      <span className="text-sm font-semibold">$27,000 / $100,000</span>
                    </div>
                    <Progress value={27} className="h-3" />
                    <p className="text-sm text-gray-600 mt-2">Fund $73,000 more this month to unlock 2% bonus!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commission Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Commission Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brokerData.recentDeals.filter(deal => deal.status === "Funded").map((deal) => (
                    <div key={deal.id} className="flex items-center justify-between p-4 border rounded">
                      <div>
                        <p className="font-semibold">{deal.merchantName}</p>
                        <p className="text-sm text-gray-600">Funded ${deal.requestedAmount.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-brand-teal">${deal.commission.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Paid {deal.lastUpdate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Resources & Sales Tools</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Co-Branded Pitch Decks</h3>
                  <p className="text-sm text-gray-600 mb-4">Professional presentations for client meetings</p>
                  <Button variant="outline" size="sm">Download</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calculator className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Deal Calculator</h3>
                  <p className="text-sm text-gray-600 mb-4">Estimate merchant offers and your commission</p>
                  <Button variant="outline" size="sm">Open Tool</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Templates</h3>
                  <p className="text-sm text-gray-600 mb-4">Cold email, follow-ups, and renewal scripts</p>
                  <Button variant="outline" size="sm">View Templates</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Case Studies</h3>
                  <p className="text-sm text-gray-600 mb-4">Success stories from funded deals</p>
                  <Button variant="outline" size="sm">Read Stories</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Industry Guides</h3>
                  <p className="text-sm text-gray-600 mb-4">Sector-specific funding requirements</p>
                  <Button variant="outline" size="sm">Download</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Upload className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Merchant Application</h3>
                  <p className="text-sm text-gray-600 mb-4">Direct link for merchant submissions</p>
                  <Button variant="outline" size="sm">Get Link</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Renewals Tab */}
          <TabsContent value="renewals" className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Renewal Opportunities</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Eligible Renewals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brokerData.renewalOpportunities.map((renewal, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{renewal.merchant}</h4>
                        <p className="text-sm text-gray-600">{renewal.paidPercentage}% paid off</p>
                        <div className="mt-2">
                          <Progress value={renewal.paidPercentage} className="w-32 h-2" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Next Eligible</p>
                        <p className="font-semibold">{renewal.eligibleDate}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Est. Renewal</p>
                        <p className="font-semibold">${renewal.estimatedRenewal.toLocaleString()}</p>
                      </div>
                      <Button variant="outline">Request Offer</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">Support & Help</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your ISO Manager</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{brokerData.manager.name}</h3>
                      <p className="text-sm text-gray-600">{brokerData.manager.email}</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Support Ticket
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Request Callback
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">How quickly are commissions paid?</h4>
                    <p className="text-sm text-gray-600">Commissions are paid the next business day after deal funding via ACH transfer.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">What documents are required for deal submission?</h4>
                    <p className="text-sm text-gray-600">We require a completed application, 3-6 months of bank statements, driver's license, and voided check.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold mb-2">How do renewal commissions work?</h4>
                    <p className="text-sm text-gray-600">You receive 100% of the original commission rate when a merchant renews or refinances their advance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}