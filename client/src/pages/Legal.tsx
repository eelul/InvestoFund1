import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, FileText, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";

export default function Legal() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Legal Information
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Important legal terms, conditions, and regulatory information governing your relationship with InvestoFund LLC and our investment opportunities.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Terms of Service */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-6 h-6 text-brand-teal" />
                  Terms of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">1. Acceptance of Terms</h4>
                  <p className="text-brand-gray leading-relaxed">
                    By accessing or using InvestoFund's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our services.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">2. Investment Services</h4>
                  <p className="text-brand-gray leading-relaxed">
                    InvestoFund LLC provides alternative investment opportunities in merchant cash advances and business funding. All investments are subject to substantial risk and are suitable only for accredited investors who can afford to lose their entire investment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">3. Accredited Investor Verification</h4>
                  <p className="text-brand-gray leading-relaxed">
                    You represent and warrant that you meet the definition of an "accredited investor" as defined in Rule 501 of Regulation D under the Securities Act of 1933. You agree to provide documentation verifying your accredited status upon request.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">4. Investment Risks</h4>
                  <p className="text-brand-gray leading-relaxed">
                    You acknowledge that investment in merchant cash advances involves substantial risk, including but not limited to: default risk, liquidity risk, regulatory risk, and the potential for total loss of principal. Past performance does not guarantee future results.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">5. Use License</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Permission is granted to temporarily access the materials on InvestoFund's website for personal, non-commercial transitory viewing only. This license does not include the right to modify, distribute, or create derivative works of the materials.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">6. Disclaimer</h4>
                  <p className="text-brand-gray leading-relaxed">
                    The materials on InvestoFund's website are provided on an 'as is' basis. InvestoFund makes no warranties, expressed or implied, and hereby disclaims all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">7. Limitations</h4>
                  <p className="text-brand-gray leading-relaxed">
                    In no event shall InvestoFund or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use materials on InvestoFund's website.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">8. Revisions and Errata</h4>
                  <p className="text-brand-gray leading-relaxed">
                    The materials appearing on InvestoFund's website could include technical, typographical, or photographic errors. InvestoFund does not warrant that any of the materials on its website are accurate, complete, or current. InvestoFund may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">9. Governing Law</h4>
                  <p className="text-brand-gray leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of Delaware, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-teal" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Securities Law Compliance</h4>
                  <p className="text-brand-gray leading-relaxed">
                    InvestoFund's investment offerings are private placements conducted under exemptions from registration provided by federal and state securities laws. These exemptions limit the availability of these offerings to accredited investors and restrict the manner in which they may be offered and sold.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Anti-Money Laundering (AML)</h4>
                  <p className="text-brand-gray leading-relaxed">
                    InvestoFund maintains robust anti-money laundering procedures and customer identification programs in compliance with the Bank Secrecy Act and USA PATRIOT Act. All investors are subject to identity verification and ongoing monitoring.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">State Regulatory Requirements</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Our investment offerings comply with applicable state securities laws and regulations. Some states may have additional requirements or restrictions that affect the availability of certain investment opportunities to residents of those states.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">FINRA and SEC Oversight</h4>
                  <p className="text-brand-gray leading-relaxed">
                    While InvestoFund is not a registered investment advisor or broker-dealer, we comply with applicable securities regulations and maintain appropriate registrations and licenses as required for our business activities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Investor Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-teal" />
                  Investor Protection & Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Right to Information</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Investors have the right to receive complete and accurate information about investment opportunities, including risk factors, financial projections, and material terms. We provide comprehensive offering materials and ongoing reporting.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Cooling-Off Period</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Investors have a limited right to cancel their investment commitment within 48 hours of signing the investment agreement, provided funds have not yet been transferred and deployed.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Ongoing Reporting</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Investors receive quarterly reports detailing investment performance, deal status, and financial information. Annual tax reporting is provided as required by law.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Complaint Resolution</h4>
                  <p className="text-brand-gray leading-relaxed">
                    InvestoFund maintains formal procedures for addressing investor complaints and disputes. Investors may also file complaints with appropriate regulatory authorities including state securities regulators and the SEC.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Important Disclosures */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="w-6 h-6" />
                  Important Disclosures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Investment Risk Warning</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Investment in merchant cash advances involves substantial risk and may result in total loss of principal. These investments are illiquid and unsuitable for investors who may need access to their funds. Invest only funds you can afford to lose completely.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">No Government Guarantee</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    These investments are not FDIC insured, are not guaranteed by any government agency, and may lose value. No federal or state securities regulator has confirmed the accuracy or determined the adequacy of this information.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Accredited Investor Requirement</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    These investment opportunities are available only to accredited investors as defined by federal securities regulations. Misrepresentation of investor status is a federal crime and may result in criminal prosecution.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">No Investment Advice</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    InvestoFund does not provide investment advice. The information provided is for informational purposes only and should not be construed as investment advice. Consult with qualified financial professionals before making investment decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Legal Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-3">General Legal Inquiries</h4>
                    <div className="space-y-2 text-sm text-brand-gray">
                      <div>InvestoFund LLC</div>
                      <div>123 Financial District</div>
                      <div>New York, NY 10005</div>
                      <div>Email: legal@investofund.com</div>
                      <div>Phone: (555) 123-4567</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-3">Regulatory Compliance</h4>
                    <div className="space-y-2 text-sm text-brand-gray">
                      <div>Compliance Department</div>
                      <div>Email: compliance@investofund.com</div>
                      <div>Phone: (555) 123-4568</div>
                      <div>Business Hours: Mon-Fri 9AM-6PM EST</div>
                      <div>Emergency: (555) 123-4569</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-brand-gray">
                    <strong>Last Updated:</strong> January 2025. These terms may be updated periodically. 
                    Continued use of our services constitutes acceptance of any modifications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}