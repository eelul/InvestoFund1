import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfitSharingAgreement() {
  const handleDownload = () => {
    // In a real implementation, this would trigger document download
    window.open("/documents/profit-sharing-agreement.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Profit/Revenue Sharing Agreement
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Simple, transparent 50/50 profit sharing on Merchant Cash Advance investments. Partner with InvestoFund for direct MCA funding opportunities.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Overview Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-teal" />
                  Agreement Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  The InvestoFund Profit/Revenue Sharing Agreement establishes a simple partnership where Capital Providers fund specific Merchant Cash Advances in exchange for 50% of the Net Receivable Profit. InvestoFund handles all operations while you earn passive returns.
                </p>
                <div className="bg-brand-teal/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-dark mb-2">Partnership Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray">
                    <li>50% profit sharing on each funded MCA</li>
                    <li>Minimum $5,000 investment per opportunity</li>
                    <li>Passive investment - no management required</li>
                    <li>Direct funding of specific MCAs</li>
                    <li>Regular reporting and transparency</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Capital Contribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-brand-teal" />
                  Capital Contribution & Purpose
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  Capital Providers contribute a minimum of $5,000 per specific MCA opportunity. The contributed capital is used solely for funding Merchant Cash Advances originated and underwritten by InvestoFund.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-brand-blue mb-2">Investment Terms</h5>
                    <ul className="text-sm text-brand-gray space-y-1">
                      <li>• Minimum investment: $5,000 per MCA</li>
                      <li>• Direct funding of specific MCAs</li>
                      <li>• Capital returned upon full collection</li>
                      <li>• Unused capital returned immediately</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-600 mb-2">50% Profit Sharing</h5>
                    <p className="text-sm text-brand-gray mb-2">
                      Capital Provider receives 50% of the Net Receivable Profit from each MCA directly funded by their contributed capital.
                    </p>
                    <p className="text-xs text-brand-gray">
                      Net Receivable Profit = Total Repayment - Advance Amount - Operating Expenses
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Distribution Process */}
            <Card>
              <CardHeader>
                <CardTitle>Distribution Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">Distribution Event</h4>
                    <p className="text-brand-gray">
                      Payments to Capital Providers occur upon full collection of the Total Repayment from the Merchant for the specific MCA funded by the Capital Provider's contributed capital.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">Distribution Timeline</h4>
                    <p className="text-brand-gray">
                      InvestoFund disburses the Capital Provider's share of Net Receivable Profit within 5 business days following each distribution event.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">Reporting & Transparency</h4>
                    <p className="text-brand-gray">
                      InvestoFund provides regular updates (monthly) on the status of MCAs funded by the Capital Provider's contributed capital, including repayment progress and upcoming distributions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passive Investment & Exit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-teal" />
                  Passive Investment & Exit Provisions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-2">Passive Role</h4>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      Capital Providers have no right, power, or authority to manage, direct, control, or participate in InvestoFund's operations, including underwriting, funding decisions, or collections.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-2">Exit Flexibility</h4>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      Capital Providers may request return of contributed capital (minus outstanding MCA balances) with 30 days written notice. Capital returned promptly upon MCA completion.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-brand-blue mb-2">Investment Understanding</h4>
                  <p className="text-blue-700 text-sm">
                    This is a high-risk investment where return of capital and profits depends on successful collection from merchants. Capital Providers understand the inherent risks including potential merchant default.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Legal Framework */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Framework & Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  This agreement is governed by New York State law. Disputes are resolved through good faith negotiation, followed by binding arbitration if necessary. The agreement constitutes the entire understanding between parties.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Simple Structure</h4>
                  <p className="text-green-700 text-sm">
                    This is a straightforward profit-sharing arrangement with no hidden fees, management charges, or complex fee structures. Capital Providers receive 50% of net profits from their funded MCAs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card>
              <CardContent className="text-center py-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Download Profit/Revenue Sharing Agreement
                </h3>
                <p className="text-brand-gray mb-6">
                  Access the complete agreement template with all terms, legal provisions, and signature pages for Capital Provider partnerships.
                </p>
                <Button 
                  onClick={handleDownload}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Agreement
                </Button>
                <p className="text-sm text-brand-gray mt-4">
                  By downloading this document, you acknowledge that you are an accredited investor and understand the risks involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}