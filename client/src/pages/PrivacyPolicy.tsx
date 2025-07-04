import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, Shield, Database, Globe } from "lucide-react";


export default function PrivacyPolicy() {
  return (
    
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, protect, and handle your personal information when you use InvestoFund's services.
            </p>
            <p className="text-sm text-brand-gray mt-4">
              Last updated: January 2025
            </p>
          </div>

          <div className="grid gap-8">
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-brand-teal" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Personal Information</h4>
                  <p className="text-brand-gray leading-relaxed mb-3">
                    We collect personal information you provide when using our services, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>Name, address, phone number, and email address</li>
                    <li>Social Security number and tax identification numbers</li>
                    <li>Financial information (income, net worth, bank account details)</li>
                    <li>Investment experience and risk tolerance information</li>
                    <li>Employment information and professional credentials</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Financial Information</h4>
                  <p className="text-brand-gray leading-relaxed mb-3">
                    To verify accredited investor status and process investments, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>Tax returns and W-2 forms</li>
                    <li>Bank statements and investment account statements</li>
                    <li>Credit reports and financial statements</li>
                    <li>Wire transfer and banking information</li>
                    <li>Investment history and portfolio information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Technical Information</h4>
                  <p className="text-brand-gray leading-relaxed mb-3">
                    We automatically collect certain technical information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited, time spent, and navigation patterns</li>
                    <li>Referring websites and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-brand-teal" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Investment Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>Verify accredited investor status and eligibility</li>
                    <li>Process investment applications and fund transfers</li>
                    <li>Provide ongoing investment reporting and communication</li>
                    <li>Manage investor relations and customer service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Legal and Regulatory Compliance</h4>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>Comply with securities laws and regulations</li>
                    <li>Conduct anti-money laundering and know-your-customer checks</li>
                    <li>Prepare tax documentation and regulatory filings</li>
                    <li>Respond to legal requests and investigations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Business Operations</h4>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>Improve our services and website functionality</li>
                    <li>Conduct market research and business analysis</li>
                    <li>Prevent fraud and maintain security</li>
                    <li>Communicate updates and marketing materials (with consent)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-brand-teal" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Service Providers</h4>
                  <p className="text-brand-gray leading-relaxed">
                    We may share information with trusted third-party service providers who assist us in operating our business, including legal counsel, accountants, compliance consultants, technology providers, and administrative services.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Legal Requirements</h4>
                  <p className="text-brand-gray leading-relaxed">
                    We may disclose information when required by law, court order, subpoena, or regulatory request. We may also share information to protect our rights, prevent fraud, or ensure the safety of our users and business.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Business Transfers</h4>
                  <p className="text-brand-gray leading-relaxed">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections outlined in this policy.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">We Do Not Sell Your Information</h4>
                  <p className="text-blue-700 text-sm">
                    InvestoFund does not sell, rent, or trade your personal information to third parties for marketing purposes. Your financial information is kept strictly confidential.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-teal" />
                  Data Security and Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Security Measures</h4>
                  <p className="text-brand-gray leading-relaxed mb-3">
                    We implement comprehensive security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray ml-4">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure data centers with physical access controls</li>
                    <li>Multi-factor authentication for account access</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on data protection and privacy</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Data Retention</h4>
                  <p className="text-brand-gray leading-relaxed">
                    We retain your information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Investment-related records are maintained for at least seven years as required by securities regulations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">International Transfers</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Your information is primarily stored and processed in the United States. If we transfer information internationally, we ensure appropriate safeguards are in place to protect your privacy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-teal" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Access and Correction</h4>
                  <p className="text-brand-gray leading-relaxed">
                    You have the right to access, review, and request correction of your personal information. You may also request a copy of the information we maintain about you.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Marketing Communications</h4>
                  <p className="text-brand-gray leading-relaxed">
                    You may opt out of marketing communications at any time by clicking the unsubscribe link in emails or contacting us directly. Note that you will continue to receive transaction-related communications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Account Closure</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Upon account closure, we will delete or anonymize your personal information, except as required for legal compliance, regulatory requirements, or dispute resolution.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">State-Specific Rights</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Residents of certain states (including California, Virginia, and Connecticut) may have additional privacy rights under state law, including the right to know, delete, and opt-out of certain data practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Types of Cookies</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-brand-dark mb-2">Essential Cookies</h5>
                      <p className="text-sm text-brand-gray">
                        Required for website functionality, security, and user authentication. These cannot be disabled.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-dark mb-2">Analytics Cookies</h5>
                      <p className="text-sm text-brand-gray">
                        Help us understand website usage patterns to improve user experience and service quality.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-dark mb-2">Preference Cookies</h5>
                      <p className="text-sm text-brand-gray">
                        Remember your settings and preferences to provide a personalized experience.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-dark mb-2">Marketing Cookies</h5>
                      <p className="text-sm text-brand-gray">
                        Used to deliver relevant advertisements and measure campaign effectiveness (with consent).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Managing Cookies</h4>
                  <p className="text-brand-gray leading-relaxed">
                    You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Consent and Authorization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-brand-blue" />
                  Consent to Electronic Communications and Authorization to Obtain Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Electronic Communications Consent</h4>
                  <p className="text-brand-gray leading-relaxed">
                    By providing your contact information and proceeding with this application, you expressly authorize InvestoFund LLC and its representatives, successors, assigns, and designees ("InvestoFund") to communicate with you for informational, marketing, or transactional purposes. This communication may be conducted via phone calls, text messages (including through automated technology), and emails. You understand that standard message and data rates may apply. You may opt-out of these communications at any time by replying "STOP" to any text message, clicking "unsubscribe" in any email, or by contacting us directly.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Authorization to Obtain Information</h4>
                  <p className="text-brand-gray leading-relaxed mb-4">
                    Furthermore, you authorize InvestoFund and its third-party designees to obtain consumer, personal, business, and investigative reports about you from consumer reporting agencies (including, but not limited to, TransUnion, Experian, Equifax, and Identity IQ), as well as from banks, creditors, government agencies, and other sources (collectively, the "Recipients").
                  </p>
                  <p className="text-brand-gray leading-relaxed mb-4">
                    InvestoFund is authorized to transmit this application form, along with any other information obtained in connection with your submission, to any or all of the Recipients. This information will be used for purposes related to the purchase of future receivables or other forms of commercial financing (collectively, "Transactions").
                  </p>
                  <p className="text-brand-gray leading-relaxed">
                    You also consent to the release, by any creditor or financial institution, of any information related to you or your business, to InvestoFund and to each of the Recipients. InvestoFund is authorized to communicate with the Recipients on your behalf and to represent you in matters directly related to the evaluation and processing of the Transactions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Policy Updates and Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Policy Changes</h4>
                  <p className="text-brand-gray leading-relaxed">
                    We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via email or website notice before they take effect.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-brand-dark mb-3">Contact Us</h4>
                  <p className="text-brand-gray leading-relaxed mb-4">
                    If you have questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Privacy Officer</strong><br/>
                        InvestoFund LLC<br/>
                        123 Financial District<br/>
                        New York, NY 10005
                      </div>
                      <div>
                        <strong>Email:</strong> privacy@investofund.com<br/>
                        <strong>Phone:</strong> (555) 123-4567<br/>
                        <strong>Business Hours:</strong> Mon-Fri 9AM-6PM EST
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Effective Date</h4>
                  <p className="text-blue-700 text-sm">
                    This privacy policy is effective as of January 1, 2025. Your continued use of our services after this date constitutes acceptance of the updated policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
  );
}