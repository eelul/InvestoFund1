import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, EyeOff, TrendingUp, DollarSign, Calendar, BarChart3 } from "lucide-react";

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
}

export default function DealDashboard() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch('/src/data/deals.json');
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.error('Error loading deals:', error);
        // Fallback to mock data for demo
        setDeals([
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
            progress: 65
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const totalInvested = deals.reduce((sum, deal) => sum + deal.amount, 0);
  const activeDeals = deals.filter(deal => deal.status === 'Active').length;
  const avgScore = deals.length > 0 ? Math.round(deals.reduce((sum, deal) => sum + deal.investo_score, 0) / deals.length) : 0;

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
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-dark mb-2">Deal Dashboard</h1>
            <p className="text-brand-gray">Track your investments with real-time deal stats</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="bg-brand-teal text-white">
              Grok v1 Enhanced
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center space-x-2"
            >
              {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showDetails ? 'Hide Details' : 'Show Details'}</span>
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-gray">Total Invested</p>
                  <p className="text-2xl font-bold text-brand-dark">{formatCurrency(totalInvested)}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-gray">Active Deals</p>
                  <p className="text-2xl font-bold text-brand-dark">{activeDeals}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-gray">Avg InvestoScore™</p>
                  <p className={`text-2xl font-bold ${getScoreColor(avgScore)}`}>{avgScore}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-gray">Total Deals</p>
                  <p className="text-2xl font-bold text-brand-dark">{deals.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.deal_id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-brand-dark">{deal.merchant}</CardTitle>
                    <p className="text-sm text-brand-gray">{deal.industry}</p>
                  </div>
                  <Badge className={getStatusColor(deal.status)}>
                    {deal.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-gray">Deal Amount</span>
                  <span className="font-bold text-brand-dark">{formatCurrency(deal.amount)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-gray">InvestoScore™</span>
                  <span className={`font-bold ${getScoreColor(deal.investo_score)}`}>
                    {deal.investo_score}/850
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-gray">Factor Rate</span>
                  <span className="font-bold text-brand-dark">{deal.factor_rate}x</span>
                </div>

                {showDetails && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">Term</span>
                      <span className="font-bold text-brand-dark">{deal.term_days} days</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">Monthly Revenue</span>
                      <span className="font-bold text-brand-dark">{formatCurrency(deal.monthly_revenue)}</span>
                    </div>

                    {deal.status === 'Active' && (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-brand-gray">Progress</span>
                            <span className="text-sm font-medium">{deal.progress}%</span>
                          </div>
                          <Progress value={deal.progress} className="h-2" />
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-brand-gray">Daily Payment</span>
                          <span className="font-bold text-green-600">{formatCurrency(deal.daily_payment)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-brand-gray">Remaining</span>
                          <span className="font-bold text-brand-dark">{formatCurrency(deal.remaining_balance)}</span>
                        </div>
                      </>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {deals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brand-gray">No deals available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}