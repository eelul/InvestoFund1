import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Target, Download, Calculator, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function BrokerResources() {
  const handleResourceDownload = (resource: string) => {
    window.open(`/resources/${resource}`, "_blank");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              ISO & Broker Resources
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Essential tools, training materials, and support resources to help you succeed as an InvestoFund partner and maximize your deal flow.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Getting Started Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-brand-teal" />
                  Getting Started as an ISO Partner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Step 1</div>
                    <h4 className="font-semibold text-brand-dark mb-2">Application & Approval</h4>
                    <p className="text-brand-gray text-sm mb-4">
                      Complete ISO application, submit required documentation, and pass background verification.
                    </p>
                    <Button variant="outline" size="sm">Start Application</Button>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">Step 2</div>
                    <h4 className="font-semibold text-brand-dark mb-2">Training & Certification</h4>
                    <p className="text-brand-gray text-sm mb-4">
                      Complete comprehensive training program covering MCA fundamentals and sales techniques.
                    </p>
                    <Button variant="outline" size="sm">View Training</Button>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">Step 3</div>
                    <h4 className="font-semibold text-brand-dark mb-2">Start Submitting Deals</h4>
                    <p className="text-brand-gray text-sm mb-4">
                      Access partner portal, submit qualified merchants, and start earning commissions.
                    </p>
                    <Button variant="outline" size="sm">Submit Deal</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commission Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-brand-teal" />
                  Commission Structure & Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Commission Tiers</h4>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-brand-dark">Bronze Partner</span>
                          <span className="text-brand-teal font-bold">3-5%</span>
                        </div>
                        <p className="text-sm text-brand-gray">$0 - $500K monthly volume</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-yellow-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-brand-dark">Silver Partner</span>
                          <span className="text-brand-teal font-bold">5-7%</span>
                        </div>
                        <p className="text-sm text-brand-gray">$500K - $1M monthly volume</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-brand-dark">Gold Partner</span>
                          <span className="text-brand-teal font-bold">7-10%</span>
                        </div>
                        <p className="text-sm text-brand-gray">$1M+ monthly volume</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-dark mb-4">Bonus Opportunities</h4>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-2">Volume Bonuses</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• 1% bonus for 10+ deals/month</li>
                          <li>• 2% bonus for 25+ deals/month</li>
                          <li>• 3% bonus for 50+ deals/month</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Quality Bonuses</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• 0.5% for 95%+ approval rate</li>
                          <li>• $500 for zero default deals</li>
                          <li>• Quarterly performance rewards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deal Submission Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-brand-teal" />
                  Deal Submission Tools & Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Merchant Application</h4>
                    <p className="text-xs text-brand-gray mb-3">Standard application form for new merchants</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("merchant-application.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Pre-Qualification Checklist</h4>
                    <p className="text-xs text-brand-gray mb-3">Quality checklist for deal evaluation</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("prequalification-checklist.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Sales Scripts</h4>
                    <p className="text-xs text-brand-gray mb-3">Proven scripts for merchant outreach</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("sales-scripts.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Document Requirements</h4>
                    <p className="text-xs text-brand-gray mb-3">Complete list of required documentation</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("document-requirements.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commission Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-brand-teal" />
                  Commission Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-brand-teal/10 to-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-4">Calculate Your Earnings</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-brand-gray">Deal Amount</label>
                          <input 
                            type="number" 
                            placeholder="$100,000" 
                            className="w-full p-2 border rounded text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-brand-gray">Commission %</label>
                          <select className="w-full p-2 border rounded text-sm">
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-brand-gray">Monthly Volume</label>
                          <input 
                            type="number" 
                            placeholder="$500,000" 
                            className="w-full p-2 border rounded text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-brand-gray">Quality Bonus</label>
                          <select className="w-full p-2 border rounded text-sm">
                            <option>None</option>
                            <option>0.5%</option>
                            <option>1%</option>
                          </select>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-sm text-brand-gray">Total Commission</div>
                        <div className="text-2xl font-bold text-brand-teal">$5,500</div>
                        <div className="text-xs text-brand-gray">Including bonuses</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark">Monthly Earning Examples</h4>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-brand-dark">5 Deals @ $50K avg</span>
                          <span className="font-bold text-green-600">$12,500</span>
                        </div>
                        <p className="text-xs text-brand-gray">Bronze tier + volume bonus</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-brand-dark">15 Deals @ $75K avg</span>
                          <span className="font-bold text-green-600">$78,750</span>
                        </div>
                        <p className="text-xs text-brand-gray">Silver tier + quality bonus</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-yellow-50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-brand-dark">30 Deals @ $100K avg</span>
                          <span className="font-bold text-green-600">$315,000</span>
                        </div>
                        <p className="text-xs text-brand-gray">Gold tier + all bonuses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-teal" />
                  Performance Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">47</div>
                    <div className="text-sm text-brand-gray">Deals This Month</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">$1.2M</div>
                    <div className="text-sm text-brand-gray">Volume This Month</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
                    <div className="text-sm text-brand-gray">Approval Rate</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">$84K</div>
                    <div className="text-sm text-brand-gray">Monthly Earnings</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-dark mb-3">Recent Activity</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Deal #2547 - Restaurant Group LLC</span>
                      <span className="text-green-600 font-medium">Approved - $75K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Deal #2546 - Auto Repair Services</span>
                      <span className="text-blue-600 font-medium">Under Review - $45K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-gray">Deal #2545 - Medical Practice</span>
                      <span className="text-green-600 font-medium">Funded - $125K</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training & Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-teal" />
                  Training & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-brand-dark mb-2">Live Training Sessions</h4>
                    <p className="text-sm text-brand-gray mb-3">
                      Weekly live training covering sales techniques, objection handling, and industry updates.
                    </p>
                    <Button variant="outline" size="sm">Join Next Session</Button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-brand-dark mb-2">Dedicated Support</h4>
                    <p className="text-sm text-brand-gray mb-3">
                      Direct access to underwriting team and dedicated ISO support representatives.
                    </p>
                    <Button variant="outline" size="sm">Contact Support</Button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-brand-dark mb-2">Partner Community</h4>
                    <p className="text-sm text-brand-gray mb-3">
                      Exclusive forum for sharing best practices and networking with top performers.
                    </p>
                    <Button variant="outline" size="sm">Join Community</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}