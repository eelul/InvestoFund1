import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-background to-brand-light">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">IF</span>
              </div>
              <span className="text-2xl font-bold text-brand-dark">InvestoFund</span>
            </div>
            <Button onClick={handleLogin} className="bg-brand-primary hover:bg-brand-secondary">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">
            Alternative Investment <span className="text-brand-primary">Platform</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-8">
            Access high-yield Merchant Cash Advance opportunities with transparent terms, 
            streamlined processes, and institutional-grade due diligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleLogin}
              size="lg" 
              className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3"
            >
              Start Investing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
            Why Choose InvestoFund?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <CardTitle className="text-brand-dark">High Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray">
                  Target returns of 18-24% annually through carefully vetted merchant cash advance opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <CardTitle className="text-brand-dark">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray">
                  Comprehensive underwriting and diversification strategies to protect your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <CardTitle className="text-brand-dark">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray">
                  Streamlined onboarding and fast deployment of capital into profitable opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-brand-light mb-8">
            Join our platform and access exclusive investment opportunities with institutional-grade due diligence.
          </p>
          <Button 
            onClick={handleLogin}
            size="lg" 
            className="bg-white text-brand-primary hover:bg-brand-light px-8 py-3"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">IF</span>
            </div>
            <span className="text-2xl font-bold text-white">InvestoFund</span>
          </div>
          <p className="text-brand-gray">
            © 2025 InvestoFund LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}