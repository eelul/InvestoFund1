import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CreditCard, 
  Download, 
  FileText, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Building, 
  Copy, 
  ExternalLink,
  AlertCircle,
  Star,
  Users,
  TrendingUp
} from "lucide-react";

export default function FundNow() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedDeal, setSelectedDeal] = useState({
    name: "Metro Restaurant Group",
    industry: "Food & Beverage",
    amount: 25000,
    factorRate: 1.18,
    term: 45,
    estimatedReturn: 18.5
  });

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const wireInstructions = {
    bankName: "JPMorgan Chase Bank, N.A.",
    routingNumber: "021000021",
    accountNumber: "4567890123456789",
    accountName: "InvestoFund Investment LLC",
    swiftCode: "CHASUS33",
    reference: `INV-${Date.now().toString().slice(-6)}-${selectedDeal.name.replace(/\s+/g, '').slice(0, 4).toUpperCase()}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/20 to-blue-600/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-green-500/30 text-green-100 border border-green-400/40 mb-4">
                Secure Payment Portal
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Fund Your Investment
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Complete your investment in {selectedDeal.name} with multiple secure payment options
            </p>
            
            {/* Deal Summary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">${selectedDeal.amount.toLocaleString()}</div>
                  <div className="text-blue-200 text-sm">Investment Amount</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{selectedDeal.factorRate}x</div>
                  <div className="text-blue-200 text-sm">Factor Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{selectedDeal.term} days</div>
                  <div className="text-blue-200 text-sm">Term</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{selectedDeal.estimatedReturn}%</div>
                  <div className="text-blue-200 text-sm">Expected Return</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Payment Methods */}
          <Tabs defaultValue="dwello" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="dwello" className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Dwello Portal</span>
                <Badge variant="secondary" className="ml-1 bg-green-100 text-green-800">Recommended</Badge>
              </TabsTrigger>
              <TabsTrigger value="wire">
                <Building className="w-4 h-4 mr-2" />
                Wire Transfer
              </TabsTrigger>
              <TabsTrigger value="instructions">
                <FileText className="w-4 h-4 mr-2" />
                Instructions
              </TabsTrigger>
            </TabsList>

            {/* Dwello Payment Portal */}
            <TabsContent value="dwello" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span>Dwello Payment Portal</span>
                        <div className="text-sm font-normal text-gray-600">Fastest & Most Secure</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border border-green-200">
                      <h3 className="text-lg font-semibold mb-4 text-brand-dark">
                        Complete Your Investment in 3 Simple Steps
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-brand-dark">Access Dwello Portal</h4>
                            <p className="text-sm text-gray-600">Click the button below to securely access our payment portal</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-brand-dark">Choose Payment Method</h4>
                            <p className="text-sm text-gray-600">ACH, wire transfer, or bank connection options available</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-brand-dark">Confirm & Fund</h4>
                            <p className="text-sm text-gray-600">Review details and complete your investment funding</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-4">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://dwello.co/investofund-portal', '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Access Dwello Payment Portal
                      </Button>
                      
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span>Bank-Level Security</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span>Instant Processing</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>FDIC Protected</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits Sidebar */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Why Choose Dwello?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Instant Confirmation</h4>
                          <p className="text-xs text-gray-600">Immediate payment confirmation and deal activation</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Lower Fees</h4>
                          <p className="text-xs text-gray-600">Reduced processing costs compared to wire transfers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Multiple Options</h4>
                          <p className="text-xs text-gray-600">ACH, wire, or direct bank connection</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">24/7 Support</h4>
                          <p className="text-xs text-gray-600">Dedicated support team for payment issues</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <p className="text-xs text-gray-600">Investor satisfaction rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Wire Transfer */}
            <TabsContent value="wire" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      <span>Wire Transfer Instructions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Wire transfers typically take 1-2 business days to process. Include the reference number for faster processing.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700">Bank Name</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 p-2 bg-gray-50 rounded border text-sm">
                              {wireInstructions.bankName}
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(wireInstructions.bankName, 'bankName')}
                            >
                              {copiedField === 'bankName' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700">Routing Number</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 p-2 bg-gray-50 rounded border text-sm font-mono">
                              {wireInstructions.routingNumber}
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(wireInstructions.routingNumber, 'routing')}
                            >
                              {copiedField === 'routing' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Account Number</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 p-2 bg-gray-50 rounded border text-sm font-mono">
                            {wireInstructions.accountNumber}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(wireInstructions.accountNumber, 'account')}
                          >
                            {copiedField === 'account' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Account Name</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 p-2 bg-gray-50 rounded border text-sm">
                            {wireInstructions.accountName}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(wireInstructions.accountName, 'accountName')}
                          >
                            {copiedField === 'accountName' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700">SWIFT Code</label>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 p-2 bg-gray-50 rounded border text-sm font-mono">
                              {wireInstructions.swiftCode}
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(wireInstructions.swiftCode, 'swift')}
                            >
                              {copiedField === 'swift' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-sm font-medium text-gray-700">Wire Amount</label>
                          <div className="p-2 bg-green-50 rounded border text-sm font-bold text-green-800">
                            ${selectedDeal.amount.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Reference Number (REQUIRED)</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 p-2 bg-yellow-50 rounded border text-sm font-mono border-yellow-300">
                            {wireInstructions.reference}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(wireInstructions.reference, 'reference')}
                          >
                            {copiedField === 'reference' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                        <p className="text-xs text-orange-600">
                          ⚠️ Include this reference number in your wire transfer to ensure proper allocation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Wire Transfer Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span>Wire Transfer Timeline</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Send Wire Transfer</h4>
                          <p className="text-sm text-gray-600">Contact your bank to initiate the wire transfer using the details above</p>
                          <p className="text-xs text-gray-500 mt-1">Processing time: Same day</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Wire Processing</h4>
                          <p className="text-sm text-gray-600">Banks process the wire transfer and funds are sent to InvestoFund</p>
                          <p className="text-xs text-gray-500 mt-1">Processing time: 1-2 business days</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Investment Confirmation</h4>
                          <p className="text-sm text-gray-600">You'll receive confirmation and your investment will be activated</p>
                          <p className="text-xs text-gray-500 mt-1">Processing time: Same day upon receipt</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-2">Important Notes</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Wire transfer fees may apply from your bank ($25-50 typical)</li>
                        <li>• International wires may take 3-5 business days</li>
                        <li>• Contact us immediately if you encounter any issues</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Payment Instructions */}
            <TabsContent value="instructions" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      <span>Download Payment Instructions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Download comprehensive payment instructions with all the details you need for your investment.
                    </p>

                    <div className="space-y-3">
                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => {
                          // Create and download PDF instructions
                          const element = document.createElement('a');
                          element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`
InvestoFund Payment Instructions
Investment: ${selectedDeal.name}
Amount: $${selectedDeal.amount.toLocaleString()}
Reference: ${wireInstructions.reference}

WIRE TRANSFER DETAILS:
Bank Name: ${wireInstructions.bankName}
Routing Number: ${wireInstructions.routingNumber}
Account Number: ${wireInstructions.accountNumber}
Account Name: ${wireInstructions.accountName}
SWIFT Code: ${wireInstructions.swiftCode}

DWELLO PORTAL:
Visit: https://dwello.co/investofund-portal
                          `);
                          element.download = `InvestoFund-Payment-Instructions-${wireInstructions.reference}.txt`;
                          element.click();
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Wire Transfer Instructions (PDF)
                      </Button>

                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => {
                          const element = document.createElement('a');
                          element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`
DWELLO PAYMENT PORTAL ACCESS

Step 1: Visit https://dwello.co/investofund-portal
Step 2: Use reference code: ${wireInstructions.reference}
Step 3: Complete your investment funding

Benefits:
- Instant confirmation
- Lower fees
- Bank-level security
- 24/7 support
                          `);
                          element.download = `Dwello-Instructions-${wireInstructions.reference}.txt`;
                          element.click();
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Dwello Portal Instructions (PDF)
                      </Button>

                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => {
                          const mailtoLink = `mailto:?subject=InvestoFund Payment Instructions&body=Here are your payment instructions for InvestoFund investment:%0D%0A%0D%0ADeal: ${selectedDeal.name}%0D%0AAmount: $${selectedDeal.amount.toLocaleString()}%0D%0AReference: ${wireInstructions.reference}%0D%0A%0D%0AWire Transfer Details:%0D%0ABank: ${wireInstructions.bankName}%0D%0ARouting: ${wireInstructions.routingNumber}%0D%0AAccount: ${wireInstructions.accountNumber}%0D%0A%0D%0ADwello Portal: https://dwello.co/investofund-portal`;
                          window.location.href = mailtoLink;
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Email Instructions to Myself
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span>Need Help?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-800 mb-2">Investment Support</h4>
                        <p className="text-sm text-blue-700 mb-3">
                          Our dedicated investment team is here to help with any payment questions.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Phone:</span>
                            <span>(555) 123-4567</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Email:</span>
                            <span>investments@investofund.com</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Hours:</span>
                            <span>9 AM - 6 PM EST</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-800 mb-2">Dwello Support</h4>
                        <p className="text-sm text-green-700 mb-3">
                          24/7 technical support for Dwello payment portal issues.
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-green-300 text-green-700 hover:bg-green-100"
                          onClick={() => window.open('https://support.dwello.co', '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Dwello Support Center
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Security Footer */}
          <Card className="mt-8 bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>FDIC Protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>A+ Security Rating</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}