import { Link } from "wouter";
import { CheckCircle, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">InvestoFund</span>
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
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Profit Sharing Agreement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Investor Resources
                </a>
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
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Broker Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Commission Structure
                </a>
              </li>
              <li>
                <Link href="/brokers" className="text-gray-300 hover:text-white transition-colors">
                  Submit a Deal
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
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 InvestoFund. All rights reserved. Investment opportunities subject to accredited investor requirements.
          </p>
        </div>
      </div>
    </footer>
  );
}
