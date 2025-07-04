import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, TrendingUp, Download, Play, FileText, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InvestorResources() {
  const handleResourceDownload = (resource: string) => {
    window.open(`/resources/${resource}`, "_blank");
  };

  return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Investor Resources
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Comprehensive tools, guides, and educational materials to help you make informed investment decisions in the alternative lending space.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Educational Materials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-brand-teal" />
                  Educational Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <h4 className="font-semibold text-brand-dark">MCA Investment Guide</h4>
                    </div>
                    <p className="text-brand-gray text-sm mb-4">
                      Comprehensive guide to understanding merchant cash advances, risk factors, and investment strategies.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleResourceDownload("mca-investment-guide.pdf")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <Play className="w-8 h-8 text-green-600" />
                      <h4 className="font-semibold text-brand-dark">Video Tutorials</h4>
                    </div>
                    <p className="text-brand-gray text-sm mb-4">
                      Step-by-step video series covering investment process, due diligence, and portfolio management.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open("https://vimeo.com/investofund", "_blank")}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Videos
                    </Button>
                  </div>

                  <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart className="w-8 h-8 text-purple-600" />
                      <h4 className="font-semibold text-brand-dark">Market Analysis</h4>
                    </div>
                    <p className="text-brand-gray text-sm mb-4">
                      Quarterly market reports and industry analysis to keep you informed of trends and opportunities.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleResourceDownload("market-analysis-q1-2025.pdf")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Latest Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Calculators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-brand-teal" />
                  Investment Calculators & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-brand-teal/10 to-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-3">ROI Calculator</h4>
                    <p className="text-brand-gray text-sm mb-4">
                      Calculate potential returns for different investment amounts and deal structures.
                    </p>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-brand-gray">Investment Amount</label>
                          <input 
                            type="number" 
                            placeholder="$50,000" 
                            className="w-full p-2 border rounded text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-brand-gray">Target Return %</label>
                          <input 
                            type="number" 
                            placeholder="18" 
                            className="w-full p-2 border rounded text-sm"
                          />
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <div className="text-sm text-brand-gray">Projected Annual Return</div>
                        <div className="text-xl font-bold text-brand-teal">$9,000</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-3">Risk Assessment Tool</h4>
                    <p className="text-brand-gray text-sm mb-4">
                      Evaluate your risk tolerance and recommended allocation strategies.
                    </p>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="text-xs text-brand-gray">Investment Experience</label>
                        <select className="w-full p-2 border rounded text-sm">
                          <option>Conservative (0-2 years)</option>
                          <option>Moderate (3-5 years)</option>
                          <option>Aggressive (5+ years)</option>
                        </select>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <div className="text-sm text-brand-gray">Recommended Allocation</div>
                        <div className="text-xl font-bold text-green-600">15% Alternative</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-teal" />
                  Performance Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">18.5%</div>
                    <div className="text-sm text-brand-gray">Average Annual Return</div>
                    <div className="text-xs text-blue-600 mt-1">Last 24 months</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                    <div className="text-sm text-brand-gray">Deal Success Rate</div>
                    <div className="text-xs text-green-600 mt-1">2024 Performance</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">287</div>
                    <div className="text-sm text-brand-gray">Total Deals Funded</div>
                    <div className="text-xs text-purple-600 mt-1">Since inception</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-dark mb-3">Recent Performance Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="space-y-2 text-brand-gray">
                        <li>• Q4 2024: 19.2% average return across portfolio</li>
                        <li>• 12-month rolling default rate: 6.1%</li>
                        <li>• Average deal term: 14.3 months</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-brand-gray">
                        <li>• Top performing sector: Healthcare (22.1%)</li>
                        <li>• Fastest repayment: 8.5 months</li>
                        <li>• Portfolio diversification: 15 industries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Documents & Forms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Investment Agreement</h4>
                    <p className="text-xs text-brand-gray mb-3">Standard investment terms and conditions</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("investment-agreement.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Accreditation Form</h4>
                    <p className="text-xs text-brand-gray mb-3">Investor accreditation verification</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("accreditation-form.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Tax Forms</h4>
                    <p className="text-xs text-brand-gray mb-3">K-1s and other tax documentation</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("tax-forms.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-brand-dark mb-2">Wire Instructions</h4>
                    <p className="text-xs text-brand-gray mb-3">Banking details for fund transfers</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleResourceDownload("wire-instructions.pdf")}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Support */}
            <Card>
              <CardHeader>
                <CardTitle>Investor Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-brand-dark mb-2">Knowledge Base</h4>
                    <p className="text-sm text-brand-gray mb-3">
                      Comprehensive FAQs and detailed guides covering common investor questions.
                    </p>
                    <Button variant="outline" size="sm">View Articles</Button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-brand-dark mb-2">Investment Advisor</h4>
                    <p className="text-sm text-brand-gray mb-3">
                      Schedule a consultation with our investment team for personalized guidance.
                    </p>
                    <Button variant="outline" size="sm">Schedule Call</Button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-brand-dark mb-2">Portfolio Review</h4>
                    <p className="text-sm text-brand-gray mb-3">
                      Quarterly portfolio reviews and performance analysis with our team.
                    </p>
                    <Button variant="outline" size="sm">Request Review</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
  );
}