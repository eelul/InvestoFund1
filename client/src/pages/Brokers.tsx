import { useState } from "react";
import { CheckCircle, Star, Upload, Calculator, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BrokerSubmissionForm from "@/components/forms/BrokerSubmissionForm";
import { Link } from "wouter";
import DownloadPacket from "@/components/DownloadPacket";

export default function Brokers() {
  const [showDownloadPacket, setShowDownloadPacket] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white pt-[40px] pb-[40px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">
              Partner with InvestoFund - Your Superior MCA Solution
            </h1>
            <p className="text-xl text-brand-gray mb-8">
              Tired of narrow funder criteria and shared commissions? Join InvestoFund's ISO program for 
              better terms, faster funding, and full deal control.
            </p>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Submit Deals with Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal mt-1" />
                      <span className="text-brand-gray">Direct funding with transparent offers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal mt-1" />
                      <span className="text-brand-gray">Fast turnaround on submissions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal mt-1" />
                      <span className="text-brand-gray">Competitive commission structure</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal mt-1" />
                      <span className="text-brand-gray">Compliance-first approach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-brand-blue/5">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Why ISOs Choose InvestoFund</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Fund deals others reject - broad acceptance criteria</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Up to 15% commission + 100% renewal commissions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Next-day payouts - no waiting months to get paid</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Zero deal leakage - your deals stay yours</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Streamlined submission process</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Commission Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Commission Structure
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-2">12-15%</div>
                  <div className="text-sm text-brand-gray mb-4">Base Commission</div>
                  <p className="text-xs text-brand-gray">
                    Industry-leading commission on all funded deals with next-day payout
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-2">2-4%</div>
                  <div className="text-sm text-brand-gray mb-4">Volume Bonuses</div>
                  <p className="text-xs text-brand-gray">
                    Monthly bonuses for hitting funding thresholds and performance targets
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-dark mb-2">100%</div>
                  <div className="text-sm text-brand-gray mb-4">Renewal Commission</div>
                  <p className="text-xs text-brand-gray">
                    Full commission payout when merchants re-fund or refinance
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-brand-teal/5 border-brand-teal/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-dark mb-4">Enhanced Rewards & Payment Terms</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-3">Commission Structure</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">12-15% on all funded deals</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">2-4% monthly volume bonuses</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">100% renewal commissions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-3">Payment Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">Next business day payouts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">No waiting months to get paid</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm text-brand-gray">Deal exclusivity guaranteed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-brand-teal/10">
                  <h4 className="font-semibold text-brand-dark mb-2">Commission Example</h4>
                  <p className="text-sm text-brand-gray mb-2">Deal Amount: $50,000 | Factor Rate: 1.3x | Total Repayment: $65,000</p>
                  <p className="text-sm text-brand-gray mb-1">Gross Profit: $15,000</p>
                  <p className="text-sm font-semibold text-brand-teal">Your Commission (15%): $2,250 - Paid Next Day</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* ISO Pain Points & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              InvestoFund vs. Typical MCA Funders
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-brand-dark">Feature</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-brand-teal">InvestoFund</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Typical MCA Funders</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Deal Flexibility</td>
                    <td className="px-6 py-4 text-sm text-brand-teal">Fund deals others reject</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Narrow funder criteria</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Commission %</td>
                    <td className="px-6 py-4 text-sm text-brand-teal font-semibold">Up to 15% + renewals</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Often ~10% or less</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Payout Speed</td>
                    <td className="px-6 py-4 text-sm text-brand-teal font-semibold">Next business day</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Monthly or delayed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Underwriting</td>
                    <td className="px-6 py-4 text-sm text-brand-teal">Decisions in 2-4 hours</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Days or weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Deal Control for ISO</td>
                    <td className="px-6 py-4 text-sm text-brand-teal font-semibold">Full ownership</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Shared or bypassed deals</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Pipeline Visibility</td>
                    <td className="px-6 py-4 text-sm text-brand-teal">Real-time portal</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Limited updates</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">Bonus Structure</td>
                    <td className="px-6 py-4 text-sm text-brand-teal">Volume and performance bonuses</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Rare or opaque</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 bg-brand-teal/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Common ISO Frustrations We Solve:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">❌ Problem: Deals rejected due to funder preferences</h4>
                  <p className="text-sm text-brand-gray">✅ Solution: InvestoFund's flexible underwriting criteria allows a wider range of deals to succeed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">❌ Problem: "Cutting-in" by other brokers eats commissions</h4>
                  <p className="text-sm text-brand-gray">✅ Solution: We honor ISO ownership—no secondary broker can override your deal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">❌ Problem: Payouts are slow and confusing</h4>
                  <p className="text-sm text-brand-gray">✅ Solution: Next-day funding model with transparent reporting ensures you're paid fast and clearly</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">❌ Problem: Limited relationships and narrow criteria</h4>
                  <p className="text-sm text-brand-gray">✅ Solution: Direct funding source with consistent approval criteria across diverse industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Submission Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Streamlined Submission Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">1. Submit Deal</h3>
                <p className="text-sm text-brand-gray">
                  Upload complete package with all required documentation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">2. Instant Preview</h3>
                <p className="text-sm text-brand-gray">
                  Get instant commission calculation and deal assessment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">3. Quick Review</h3>
                <p className="text-sm text-brand-gray">
                  Our team reviews and responds within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">4. Get Paid</h3>
                <p className="text-sm text-brand-gray">
                  Commission paid upon successful deal funding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Deal Submission Form */}
      <section id="deal-submission-portal" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Deal Submission Portal
            </h2>
            <BrokerSubmissionForm />
          </div>
        </div>
      </section>
      {/* Join Network CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="brand-gradient text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our ISO Network</h2>
                <p className="text-xl mb-8">
                  Get access to exclusive resources, white-label tools, and priority support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-brand-blue hover:bg-gray-100">
                    Sign Up for ISO Updates
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue">
                      Contact Partnership Team
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              ISO Resources & Tools
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-4">ISO Information Packet</h3>
                  <p className="text-sm text-brand-gray mb-4">
                    Complete guide to our commission structure, submission requirements, and partnership terms.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                    onClick={() => setShowDownloadPacket(true)}
                  >
                    Download Packet
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-4">White-Label Tools</h3>
                  <p className="text-sm text-brand-gray mb-4">
                    Branded materials and marketing tools to help you promote merchant funding solutions.
                  </p>
                  <Link href="/iso-tools">
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                      Access Tools
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-4">Training Materials</h3>
                  <p className="text-sm text-brand-gray mb-4">
                    Educational resources on MCA industry best practices and compliance requirements.
                  </p>
                  <Link href="/iso-training">
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                      Start Training
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Packet Modal */}
      <DownloadPacket 
        isOpen={showDownloadPacket} 
        onClose={() => setShowDownloadPacket(false)} 
      />
    </div>
  );
}
