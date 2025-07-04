import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function ProfitSharingAgreement() {
  const handleDownload = () => {
    // In a real implementation, this would trigger document download
    window.open("/documents/profit-sharing-agreement.pdf", "_blank");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Profit Sharing Agreement
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Transparent partnership terms that align investor interests with superior returns through our proven MCA investment model.
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
                  The InvestoFund Profit Sharing Agreement establishes a clear framework for investor participation in our alternative investment opportunities. This document outlines the terms, conditions, and profit distribution mechanisms for both single deal participation and portfolio blend investments.
                </p>
                <div className="bg-brand-teal/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-dark mb-2">Key Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-brand-gray">
                    <li>Transparent profit distribution methodology</li>
                    <li>Risk-adjusted returns through diversified MCA portfolio</li>
                    <li>Clear exit strategies and liquidity provisions</li>
                    <li>Professional fund management and oversight</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Investment Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-brand-teal" />
                  Investment Structure & Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-3">Option 1: Direct Deal Participation</h4>
                    <ul className="space-y-2 text-brand-gray">
                      <li>• Minimum investment: $25,000</li>
                      <li>• Target returns: 15-25% annually</li>
                      <li>• Deal-specific profit sharing</li>
                      <li>• 12-18 month investment terms</li>
                      <li>• Direct merchant relationship</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-brand-dark mb-3">Option 2: Portfolio Blend</h4>
                    <ul className="space-y-2 text-brand-gray">
                      <li>• Minimum investment: $50,000</li>
                      <li>• Target returns: 12-20% annually</li>
                      <li>• Diversified risk exposure</li>
                      <li>• Quarterly distribution cycles</li>
                      <li>• Professional portfolio management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profit Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Profit Distribution Methodology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">Distribution Schedule</h4>
                    <p className="text-brand-gray">
                      Profits are distributed according to the following schedule: Direct Deal participants receive distributions as merchant payments are collected. Portfolio Blend investors receive quarterly distributions based on overall portfolio performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">Fee Structure</h4>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <ul className="space-y-1 text-brand-gray">
                        <li>• Management Fee: 2% annually on committed capital</li>
                        <li>• Performance Fee: 20% of profits above 8% hurdle rate</li>
                        <li>• Administrative Fee: 0.5% annually for operational costs</li>
                        <li>• No hidden fees or additional charges</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Framework */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-teal" />
                  Legal Framework & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  This agreement is structured in compliance with federal securities regulations and is available exclusively to accredited investors as defined by SEC Rule 501. All investments are subject to thorough due diligence and risk assessment protocols.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Important Disclosure</h4>
                  <p className="text-red-700 text-sm">
                    Investment in merchant cash advances involves substantial risk and may result in total loss of principal. Past performance does not guarantee future results. This agreement constitutes a private offering and has not been registered with the SEC.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card>
              <CardContent className="text-center py-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  Download Complete Agreement
                </h3>
                <p className="text-brand-gray mb-6">
                  Access the full Profit Sharing Agreement with detailed terms, conditions, and legal provisions.
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
    </Layout>
  );
}