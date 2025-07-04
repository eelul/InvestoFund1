import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Award, Calculator, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function CommissionStructure() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Commission Structure
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Competitive commission rates, performance bonuses, and transparent payment terms designed to maximize your earning potential as an InvestoFund partner.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Commission Tiers Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-brand-teal" />
                  Partner Tier System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-6 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-800">Bronze Partner</h3>
                        <p className="text-amber-700 text-sm">Entry Level</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <div className="text-2xl font-bold text-amber-600">3-5%</div>
                        <div className="text-sm text-gray-600">Base Commission</div>
                      </div>
                      <div className="space-y-2 text-sm text-amber-800">
                        <div>• $0 - $500K monthly volume</div>
                        <div>• Basic support level</div>
                        <div>• Standard documentation</div>
                        <div>• Monthly payouts</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg border border-gray-300 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">MOST POPULAR</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Silver Partner</h3>
                        <p className="text-gray-700 text-sm">Experienced</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <div className="text-2xl font-bold text-gray-600">5-7%</div>
                        <div className="text-sm text-gray-600">Base Commission</div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-800">
                        <div>• $500K - $1M monthly volume</div>
                        <div>• Priority support</div>
                        <div>• Enhanced marketing materials</div>
                        <div>• Bi-weekly payouts</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg border border-yellow-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-yellow-800">Gold Partner</h3>
                        <p className="text-yellow-700 text-sm">Elite Level</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <div className="text-2xl font-bold text-yellow-600">7-10%</div>
                        <div className="text-sm text-gray-600">Base Commission</div>
                      </div>
                      <div className="space-y-2 text-sm text-yellow-800">
                        <div>• $1M+ monthly volume</div>
                        <div>• Dedicated account manager</div>
                        <div>• Custom marketing support</div>
                        <div>• Weekly payouts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Commission Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-brand-teal" />
                  Detailed Commission Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-brand-teal">
                        <th className="text-left p-3 font-semibold text-brand-dark">Monthly Volume</th>
                        <th className="text-left p-3 font-semibold text-brand-dark">Partner Tier</th>
                        <th className="text-left p-3 font-semibold text-brand-dark">Base Rate</th>
                        <th className="text-left p-3 font-semibold text-brand-dark">Volume Bonus</th>
                        <th className="text-left p-3 font-semibold text-brand-dark">Max Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 text-brand-gray">$0 - $250K</td>
                        <td className="p-3"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm">Bronze</span></td>
                        <td className="p-3 font-medium">3.0%</td>
                        <td className="p-3 text-brand-gray">-</td>
                        <td className="p-3 font-bold text-green-600">3.0%</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 text-brand-gray">$250K - $500K</td>
                        <td className="p-3"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm">Bronze</span></td>
                        <td className="p-3 font-medium">4.0%</td>
                        <td className="p-3 text-green-600">+0.5%</td>
                        <td className="p-3 font-bold text-green-600">4.5%</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 text-brand-gray">$500K - $750K</td>
                        <td className="p-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">Silver</span></td>
                        <td className="p-3 font-medium">5.0%</td>
                        <td className="p-3 text-green-600">+1.0%</td>
                        <td className="p-3 font-bold text-green-600">6.0%</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 text-brand-gray">$750K - $1M</td>
                        <td className="p-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">Silver</span></td>
                        <td className="p-3 font-medium">6.0%</td>
                        <td className="p-3 text-green-600">+1.0%</td>
                        <td className="p-3 font-bold text-green-600">7.0%</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 text-brand-gray">$1M - $2M</td>
                        <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Gold</span></td>
                        <td className="p-3 font-medium">7.0%</td>
                        <td className="p-3 text-green-600">+1.5%</td>
                        <td className="p-3 font-bold text-green-600">8.5%</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 text-brand-gray">$2M+</td>
                        <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Gold</span></td>
                        <td className="p-3 font-medium">8.0%</td>
                        <td className="p-3 text-green-600">+2.0%</td>
                        <td className="p-3 font-bold text-green-600">10.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Performance Bonuses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-teal" />
                  Performance Bonuses & Incentives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Volume-Based Bonuses</h4>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-green-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-green-800">10+ Deals/Month</span>
                          <span className="text-green-600 font-bold">+1% Bonus</span>
                        </div>
                        <p className="text-sm text-green-700">Consistent deal flow reward</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-blue-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-blue-800">25+ Deals/Month</span>
                          <span className="text-blue-600 font-bold">+2% Bonus</span>
                        </div>
                        <p className="text-sm text-blue-700">High-volume producer bonus</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-purple-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-purple-800">50+ Deals/Month</span>
                          <span className="text-purple-600 font-bold">+3% Bonus</span>
                        </div>
                        <p className="text-sm text-purple-700">Elite performer recognition</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Quality-Based Bonuses</h4>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-yellow-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-yellow-800">95%+ Approval Rate</span>
                          <span className="text-yellow-600 font-bold">+0.5% Bonus</span>
                        </div>
                        <p className="text-sm text-yellow-700">Quality submission reward</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-red-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-red-800">Zero Defaults</span>
                          <span className="text-red-600 font-bold">$500/Month</span>
                        </div>
                        <p className="text-sm text-red-700">Perfect performance bonus</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-teal-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-teal-800">Same-Day Funding</span>
                          <span className="text-teal-600 font-bold">$100/Deal</span>
                        </div>
                        <p className="text-sm text-teal-700">Speed-to-market incentive</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-brand-teal" />
                  Payment Terms & Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Payment Schedule</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-brand-gray">Bronze Partners</span>
                        <span className="font-semibold text-brand-dark">Monthly</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-brand-gray">Silver Partners</span>
                        <span className="font-semibold text-brand-dark">Bi-weekly</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-brand-gray">Gold Partners</span>
                        <span className="font-semibold text-brand-dark">Weekly</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-2">Payment Methods</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• ACH Direct Deposit (Standard)</li>
                        <li>• Wire Transfer (Gold Partners)</li>
                        <li>• Check (Upon Request)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Commission Calculation</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="text-sm">
                        <span className="font-semibold text-brand-dark">Base Commission:</span>
                        <div className="text-brand-gray">Funded Amount × Commission Rate</div>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-brand-dark">Volume Bonus:</span>
                        <div className="text-brand-gray">Monthly Volume × Bonus Rate</div>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-brand-dark">Quality Bonus:</span>
                        <div className="text-brand-gray">Fixed Amount or Percentage</div>
                      </div>
                      <div className="border-t pt-3">
                        <span className="font-semibold text-brand-dark">Total Commission:</span>
                        <div className="text-lg font-bold text-green-600">Base + Volume + Quality</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">Important Notes</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Commissions paid on funded deals only</li>
                        <li>• Chargebacks deducted from future payments</li>
                        <li>• 1099 issued annually for tax purposes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Earnings Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-brand-teal" />
                  Real-World Earnings Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-brand-dark">New Partner</h4>
                      <p className="text-sm text-brand-gray">Bronze Tier</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Monthly Volume:</span>
                        <span className="font-medium">$200K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Deals Closed:</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Commission Rate:</span>
                        <span className="font-medium">3.5%</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">Monthly Earnings:</span>
                          <span className="font-bold text-green-600">$7,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-blue-50">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-brand-dark">Experienced Partner</h4>
                      <p className="text-sm text-brand-gray">Silver Tier</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Monthly Volume:</span>
                        <span className="font-medium">$800K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Deals Closed:</span>
                        <span className="font-medium">20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Commission Rate:</span>
                        <span className="font-medium">7.0%</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">Monthly Earnings:</span>
                          <span className="font-bold text-green-600">$56,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-yellow-50">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-brand-dark">Top Performer</h4>
                      <p className="text-sm text-brand-gray">Gold Tier</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Monthly Volume:</span>
                        <span className="font-medium">$2.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Deals Closed:</span>
                        <span className="font-medium">45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Commission Rate:</span>
                        <span className="font-medium">10.0%</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">Monthly Earnings:</span>
                          <span className="font-bold text-green-600">$250,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card>
              <CardContent className="text-center py-8">
                <h3 className="text-2xl font-semibold text-brand-dark mb-4">
                  Ready to Start Earning?
                </h3>
                <p className="text-brand-gray mb-6 max-w-2xl mx-auto">
                  Join our partner network and start earning industry-leading commissions with transparent terms, 
                  reliable payments, and comprehensive support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                    Apply as Partner
                  </Button>
                  <Button variant="outline">
                    Download Commission Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}