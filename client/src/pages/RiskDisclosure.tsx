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
              Risk Disclosure Statement
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Understanding the risks associated with alternative investments in merchant cash advances and business funding opportunities.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Warning Banner */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      Important Risk Warning
                    </h3>
                    <p className="text-red-700">
                      Investment in merchant cash advances and alternative funding involves substantial risk of loss. 
                      These investments are suitable only for sophisticated investors who can afford to lose their entire investment. 
                      Past performance does not guarantee future results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Primary Risk Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                  Primary Risk Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Default Risk</h4>
                    <p className="text-brand-gray">
                      Merchants may fail to meet their payment obligations due to business failure, economic downturns, 
                      or other unforeseen circumstances. Default rates in the MCA industry can range from 10-30% depending on market conditions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Liquidity Risk</h4>
                    <p className="text-brand-gray">
                      MCA investments are illiquid by nature. Investors cannot easily exit their positions and must wait 
                      for the full repayment term (typically 12-18 months) to recover their principal and returns.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Regulatory Risk</h4>
                    <p className="text-brand-gray">
                      The alternative lending industry is subject to evolving federal and state regulations. 
                      Changes in law could impact the enforceability of agreements or the viability of the business model.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Economic Risk</h4>
                    <p className="text-brand-gray">
                      Economic recessions, market volatility, and changes in consumer spending patterns can significantly 
                      impact merchant performance and ability to repay advances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment-Specific Risks */}
            <Card>
              <CardHeader>
                <CardTitle>Investment-Specific Risk Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark">Direct Deal Participation Risks</h4>
                    <ul className="space-y-2 text-brand-gray">
                      <li>• Concentration risk in single merchant</li>
                      <li>• No diversification benefits</li>
                      <li>• Higher potential for total loss</li>
                      <li>• Limited due diligence compared to institutional deals</li>
                      <li>• Dependence on individual merchant performance</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark">Portfolio Blend Risks</h4>
                    <ul className="space-y-2 text-brand-gray">
                      <li>• Correlation risk during economic downturns</li>
                      <li>• Manager risk and selection bias</li>
                      <li>• Fee drag on overall returns</li>
                      <li>• Potential for systematic industry-wide defaults</li>
                      <li>• Limited control over individual investments</li>
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

            {/* Investor Suitability */}
            <Card>
              <CardHeader>
                <CardTitle>Investor Suitability Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  These investment opportunities are suitable only for investors who meet the following criteria:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-brand-gray">
                    <li>• Accredited investor status as defined by SEC regulations</li>
                    <li>• Ability to bear the economic risk of total loss</li>
                    <li>• Understanding of alternative investment risks and illiquidity</li>
                    <li>• Sophisticated investment experience or professional guidance</li>
                    <li>• Long-term investment horizon (12-18 months minimum)</li>
                    <li>• Adequate diversification in overall portfolio</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Legal Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-teal" />
                  Legal Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>No Investment Advice:</strong> This disclosure does not constitute investment advice. 
                    Investors should consult with qualified financial professionals before making any investment decisions.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Forward-Looking Statements:</strong> Any projections or estimates are forward-looking 
                    statements based on current expectations and involve risks and uncertainties.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>No Guarantee:</strong> There is no guarantee that investment objectives will be achieved. 
                    Investors may lose some or all of their investment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card>
              <CardContent className="text-center py-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Download Complete Risk Disclosure
                </h3>
                <p className="text-brand-gray mb-6">
                  Access the comprehensive risk disclosure document with detailed legal terms and additional risk factors.
                </p>
                <Button 
                  onClick={handleDownload}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download Full Disclosure
                </Button>
                <p className="text-sm text-brand-gray mt-4">
                  This document must be reviewed and acknowledged before making any investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}