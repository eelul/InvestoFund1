import { scrollToElement } from '@/lib/scrollUtils';
import { CheckCircle, Clock, ArrowRight, Receipt, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InvoiceFactoringDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Yellow Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-yellow-600 to-amber-700"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-amber-600/20 to-yellow-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-amber-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/30 text-yellow-100 border border-yellow-400/40 mb-4">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                No Debt Incurred
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent">
                Invoice Factoring
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-white bg-clip-text text-transparent">
                Cash Now. No Wait.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 leading-relaxed max-w-3xl mx-auto">
              Convert unpaid invoices into immediate working capital. Eliminate the wait and stay cash-flow positive with B2B invoice factoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToElement('apply-now')}
              >
                Start Factoring Invoices
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
                <div className="text-2xl font-bold text-white mb-1">No Debt</div>
                <div className="text-yellow-200 text-sm">Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">B2B</div>
                <div className="text-yellow-200 text-sm">Invoices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Immediate</div>
                <div className="text-yellow-200 text-sm">Cash</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Cash Flow</div>
                <div className="text-yellow-200 text-sm">Positive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Turn Invoices Into Instant Cash
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Stop waiting 30-90 days for payments. Get cash for your outstanding B2B invoices today.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/merchants#apply-funding'}
            >
              Apply for Invoice Factoring
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}