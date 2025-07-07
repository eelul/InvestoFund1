import { CheckCircle, Clock, ArrowRight, FileText, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TermLoansDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Teal Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-700 to-cyan-800"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-teal-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500/30 text-teal-100 border border-teal-400/40 mb-4">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                Fixed Payment Solution
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent">
                Business Term Loans
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-white bg-clip-text text-transparent">
                Plan. Fund. Succeed.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-100 leading-relaxed max-w-3xl mx-auto">
              Secure a lump sum with fixed payments and terms. Ideal for planned projects, expansion, or refinancing high-interest debt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Term Loan
              </Button>
              <Button 
                size="lg" 
                className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/merchants'}
              >
                Compare All Options
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1-5 Years</div>
                <div className="text-teal-200 text-sm">Terms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">7.9%</div>
                <div className="text-teal-200 text-sm">Starting Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Fixed</div>
                <div className="text-teal-200 text-sm">Payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Monthly</div>
                <div className="text-teal-200 text-sm">Schedule</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Ready for Predictable Financing?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Get fixed payments and terms that work for your business planning and cash flow management.
            </p>
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/merchants#apply-funding'}
            >
              Apply for Term Loan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}