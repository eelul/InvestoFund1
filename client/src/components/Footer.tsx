import { Link } from "wouter";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import logoPath from "@assets/InvestoFund long transparant_1751612531131.png";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img 
                src={logoPath} 
                alt="InvestoFund" 
                className="h-10 w-auto max-w-[200px]"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional alternative investment opportunities with transparent 
              profit-sharing and rigorous risk management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Investors */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For Investors</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-white transition-colors">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="/profit-sharing-agreement" className="text-gray-300 hover:text-white transition-colors">
                  Profit Sharing Agreement
                </Link>
              </li>
              <li>
                <Link href="/risk-disclosure" className="text-gray-300 hover:text-white transition-colors">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/investor-resources" className="text-gray-300 hover:text-white transition-colors">
                  Investor Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For Partners</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/brokers" className="text-gray-300 hover:text-white transition-colors">
                  ISO Partnership
                </Link>
              </li>
              <li>
                <Link href="/broker-resources" className="text-gray-300 hover:text-white transition-colors">
                  Broker Resources
                </Link>
              </li>
              <li>
                <Link href="/commission-structure" className="text-gray-300 hover:text-white transition-colors">
                  Commission Structure
                </Link>
              </li>
              <li>
                <Link href="/brokers#deal-submission-portal" className="text-gray-300 hover:text-white transition-colors">
                  Submit a Deal
                </Link>
              </li>
            </ul>
          </div>

          {/* For Merchants */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For Merchants</h4>
            <div className="mb-4">
              <Link href="/merchants#apply-funding" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                Apply Now
              </Link>
            </div>
            <div className="mb-3">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Financing Solutions</span>
            </div>
            <ul className="space-y-1.5">
              <li>
                <Link href="/merchants/mca-details" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Merchant Cash Advance
                </Link>
              </li>
              <li>
                <Link href="/merchants/line-of-credit-details" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Business Line of Credit
                </Link>
              </li>
              <li>
                <Link href="/merchants/equipment-financing-details" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Equipment Financing
                </Link>
              </li>
              <li>
                <Link href="/merchants/commercial-mortgage-details" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Commercial Mortgage
                </Link>
              </li>
              <li>
                <Link href="/merchants/term-loans-details" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Term Loans
                </Link>
              </li>
              <li>
                <Link href="/merchants/invoice-factoring-details" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Invoice Factoring
                </Link>
              </li>
              <li>
                <Link href="/merchants/po-financing-details" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  P.O. Financing
                </Link>
              </li>
              <li>
                <Link href="/merchants/sba-loans-details" className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                  SBA 7(a) Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-300 hover:text-white transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 InvestoFund LLC. All rights reserved. Investment opportunities subject to accredited investor requirements.
          </p>
        </div>
      </div>
    </footer>
  );
}
