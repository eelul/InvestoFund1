import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, TrendingDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RiskDisclosure() {
  const handleDownload = () => {
    window.open("/documents/risk-disclosure.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Investment Risk Overview
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Understanding our calculated approach to risk management in merchant cash advance investments and the quality measures we implement.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Calculated Risk Approach */}
            <Card className="border-brand-teal bg-brand-teal/5">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-brand-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      Our Calculated Risk Approach
                    </h3>
                    <p className="text-brand-gray">
                      While all investments carry risk, InvestoFund employs rigorous quality control measures and proven risk mitigation strategies to maximize success rates. We work exclusively with verified ISOs and pre-qualified merchants to ensure deal quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Mitigation Measures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-teal" />
                  Our Risk Mitigation Measures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="border-l-4 border-brand-teal pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Verified ISO Network</h4>
                    <p className="text-brand-gray">
                      We work exclusively with verified, experienced ISOs who have proven track records and established relationships with quality merchants. This ensures better deal sourcing and reduced risk exposure.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-brand-blue pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Merchant Quality Standards</h4>
                    <p className="text-brand-gray">
                      All merchants undergo rigorous pre-qualification including credit checks, business verification, and cash flow analysis. We focus on established businesses with stable revenue streams.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Conservative Underwriting</h4>
                    <p className="text-brand-gray">
                      We employ conservative lending ratios and careful deal structuring to minimize risk. Advance amounts are calculated based on historical cash flow patterns and conservative repayment factors.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Ongoing Monitoring</h4>
                    <p className="text-brand-gray">
                      Our team continuously monitors merchant performance and payment patterns to identify potential issues early and take proactive measures to protect investor capital.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Characteristics */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Characteristics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  InvestoFund's direct MCA funding model offers Capital Providers transparent, direct participation in merchant funding opportunities with clear risk-return profiles.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark">Investment Benefits</h4>
                    <ul className="space-y-2 text-brand-gray">
                      <li>• Direct funding of specific MCAs</li>
                      <li>• 50% profit sharing on successful deals</li>
                      <li>• Transparent deal selection process</li>
                      <li>• Professional underwriting and monitoring</li>
                      <li>• Passive investment structure</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark">Quality Assurance</h4>
                    <ul className="space-y-2 text-brand-gray">
                      <li>• Verified ISO network partnerships</li>
                      <li>• Pre-qualified merchant screening</li>
                      <li>• Conservative underwriting standards</li>
                      <li>• Ongoing performance monitoring</li>
                      <li>• Experienced management team</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mitigation Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-teal" />
                  Risk Mitigation Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  While risks cannot be eliminated, InvestoFund employs several strategies to minimize investor exposure:
                </p>
                <div className="grid gap-4">
                  <div className="bg-brand-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-2">Due Diligence Process</h4>
                    <p className="text-brand-gray text-sm">
                      Comprehensive merchant evaluation including financial analysis, business verification, 
                      credit assessment, and industry risk evaluation.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-2">Portfolio Diversification</h4>
                    <p className="text-brand-gray text-sm">
                      Spreading investments across multiple merchants, industries, and deal structures 
                      to reduce concentration risk.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-2">Active Monitoring</h4>
                    <p className="text-brand-gray text-sm">
                      Continuous monitoring of merchant performance, payment patterns, and early warning 
                      systems for potential defaults.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  InvestoFund Capital Providers participate in a calculated risk investment model with professional management and proven risk mitigation strategies.
                </p>
                <div className="bg-brand-teal/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-dark mb-3">Key Investment Features</h4>
                  <ul className="space-y-2 text-brand-gray">
                    <li>• Minimum $5,000 investment per MCA opportunity</li>
                    <li>• 50% profit sharing on successful collections</li>
                    <li>• Professional underwriting and monitoring</li>
                    <li>• Verified ISO network partnerships</li>
                    <li>• Regular reporting and transparency</li>
                    <li>• Passive investment structure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-teal" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Investment Understanding:</strong> Capital Providers understand this is a calculated risk investment in merchant funding opportunities. InvestoFund employs proven risk mitigation strategies and works exclusively with verified partners.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Professional Management:</strong> All investments are professionally managed with conservative underwriting, ongoing monitoring, and transparent reporting to maximize success rates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card>
              <CardContent className="text-center py-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Investment Information Package
                </h3>
                <p className="text-brand-gray mb-6">
                  Download complete investment details including our risk management approach, quality measures, and partnership terms.
                </p>
                <Button 
                  onClick={handleDownload}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download Investment Guide
                </Button>
                <p className="text-sm text-brand-gray mt-4">
                  Comprehensive information to help you understand our calculated risk approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}