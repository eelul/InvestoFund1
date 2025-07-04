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
              We're Your Trusted Direct Funder
            </h1>
            <p className="text-xl text-brand-gray mb-8">
              Join Green Harvest Funding's network of ISOs and brokers. Submit deals with confidence 
              and earn competitive commissions.
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
                  <CardTitle className="text-brand-dark">Why Work with Green Harvest?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">15% standard commission on full packages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Volume bonuses for consistent producers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">White-label tools and resources</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-brand-blue mt-1" />
                      <span className="text-brand-gray">Dedicated support team</span>
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
                  <div className="text-3xl font-bold text-brand-blue mb-2">15%</div>
                  <div className="text-sm text-brand-gray mb-4">Standard Commission</div>
                  <p className="text-xs text-brand-gray">
                    Full packages with complete documentation and verified information
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-2">20%</div>
                  <div className="text-sm text-brand-gray mb-4">Premium Commission</div>
                  <p className="text-xs text-brand-gray">
                    High-quality deals with exceptional documentation and merchant verification
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-dark mb-2">25%</div>
                  <div className="text-sm text-brand-gray mb-4">Volume Bonus</div>
                  <p className="text-xs text-brand-gray">
                    Consistent producers with 10+ successful deals per month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-dark mb-4">Commission Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Full packages: 15% base commission</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Quality bonus: Additional 5% for verified deals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-brand-gray">Volume bonus: Additional 10% for high producers</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                      <span className="text-sm text-brand-gray">Incomplete packages: Reduced commission</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full" />
                      <span className="text-sm text-brand-gray">Unverified deals: Commission subject to review</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Submit Your Deal
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
