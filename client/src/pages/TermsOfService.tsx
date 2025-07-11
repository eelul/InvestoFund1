import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Shield, AlertCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-brand-dark">Terms of Service</h1>
              <p className="text-brand-gray">InvestoFund LLC - Transparent Funding Terms</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-brand-teal text-white">
            Grok v1 Enhanced
          </Badge>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-brand-dark flex items-center">
              <FileText className="w-6 h-6 mr-2 text-brand-teal" />
              Quick Navigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                onClick={() => document.getElementById('investment-terms')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left justify-start"
              >
                Investment Terms
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('merchant-terms')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left justify-start"
              >
                Merchant Terms
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('broker-terms')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left justify-start"
              >
                Broker Terms
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Investment Terms */}
        <Card id="investment-terms" className="mb-8 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-brand-dark flex items-center">
              <Shield className="w-6 h-6 mr-2 text-green-600" />
              Investment Terms & Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Investment Structure</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Minimum investment: $5,000 for Direct Deal Participation</li>
                <li>• Minimum investment: $25,000 for Portfolio Blend (InvestoBlend™)</li>
                <li>• Factor rates: 1.15x to 1.49x of advance amount</li>
                <li>• Deal terms: 25 days to 18 months</li>
                <li>• Profit sharing: 50% of net profits after broker commission</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Risk Disclosures</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• MCA investments carry substantial risk of loss</li>
                <li>• Past performance does not guarantee future results</li>
                <li>• No FDIC insurance or government protection</li>
                <li>• Merchant default may result in partial or total loss</li>
                <li>• Economic conditions may affect collection rates</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">InvestoBlend™ Portfolio Terms</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 10% management fee deducted from gross profits</li>
                <li>• Target returns: 18.7% annually</li>
                <li>• Professional deal diversification across 8-12 deals</li>
                <li>• Multi-industry risk distribution</li>
                <li>• Automated deal curation and monitoring</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Merchant Terms */}
        <Card id="merchant-terms" className="mb-8 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-brand-dark flex items-center">
              <FileText className="w-6 h-6 mr-2 text-blue-600" />
              Merchant Cash Advance Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Funding Structure</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Advance amounts: $2,000 to $2,000,000</li>
                <li>• Factor rates: 1.15x to 1.49x based on risk assessment</li>
                <li>• Repayment terms: 25 days to 18 months</li>
                <li>• Payment frequencies: Daily, weekly, bi-weekly, or monthly</li>
                <li>• Same-day approval and funding available</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Qualification Requirements</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Minimum 3 months in business (some exceptions for under 1 year)</li>
                <li>• Minimum $5,000 monthly revenue</li>
                <li>• Business bank account required</li>
                <li>• Valid business license and registration</li>
                <li>• Credit scores from 500+ accepted (A-D grades)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Repayment Options</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• ACH holdback from business checking account</li>
                <li>• Credit card holdback from processing volume</li>
                <li>• Re-advance eligibility at 50% payoff</li>
                <li>• Consolidation options available</li>
                <li>• Early payoff discounts may apply</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Broker Terms */}
        <Card id="broker-terms" className="mb-8 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-brand-dark flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
              ISO/Broker Partnership Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Commission Structure</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Base commission: 4% of gross profits</li>
                <li>• Volume bonus: Up to 1.5% additional</li>
                <li>• Average total commission: 5.5%</li>
                <li>• Monthly commission caps: None</li>
                <li>• Same-day commission processing available</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Deal Submission Requirements</h3>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Complete merchant application required</li>
                <li>• 3-6 months bank statements</li>
                <li>• Voided check and business license</li>
                <li>• Credit authorization form</li>
                <li>• Quality checklist completion mandatory</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-2">Partnership Benefits</h3>
              <ul className="text-sm text-teal-700 space-y-1">
                <li>• Exclusive deal flow access</li>
                <li>• Marketing support and resources</li>
                <li>• Dedicated ISO manager assigned</li>
                <li>• Real-time deal tracking dashboard</li>
                <li>• Volume bonus opportunities</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Legal Notice */}
        <Card className="mb-8 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Important Legal Notice</h3>
              <p className="text-sm text-gray-700 mb-4">
                By using InvestoFund's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and InvestoFund LLC.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                This agreement is governed by the laws of the State of [State] and any disputes will be resolved through binding arbitration. InvestoFund reserves the right to modify these terms at any time with 30 days written notice.
              </p>
              <p className="text-sm text-gray-700">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Previous Page</span>
          </Button>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/privacy-policy'}
            >
              Privacy Policy
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              className="bg-brand-teal hover:bg-brand-teal/90"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}