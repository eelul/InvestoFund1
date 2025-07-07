import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Investors from "@/pages/Investors";
import Brokers from "@/pages/Brokers";
import Merchants from "@/pages/Merchants";
import Contact from "@/pages/Contact";
import ISOTools from "@/pages/ISOTools";
import ISOTraining from "@/pages/ISOTraining";
import Admin from "@/pages/Admin";
import InvestorDashboard from "@/pages/InvestorDashboard";
import BrokerDashboard from "@/pages/BrokerDashboard";
import MerchantDashboard from "@/pages/MerchantDashboard";
import ProfitSharingAgreement from "@/pages/ProfitSharingAgreement";
import RiskDisclosure from "@/pages/RiskDisclosure";
import InvestorResources from "@/pages/InvestorResources";
import BrokerResources from "@/pages/BrokerResources";
import CommissionStructure from "@/pages/CommissionStructure";
import FAQs from "@/pages/FAQs";
import Legal from "@/pages/Legal";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

// New V2 Pages
import MerchantApply from "@/pages/merchants/MerchantApply";
import MerchantHowItWorks from "@/pages/merchants/MerchantHowItWorks";
import MerchantFAQ from "@/pages/merchants/MerchantFAQ";
import BrokerSubmitDeal from "@/pages/brokers/BrokerSubmitDeal";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        
        {/* V2 Navigation Structure */}
        {/* Merchants */}
        <Route path="/merchants" component={Merchants} />
        <Route path="/merchants/apply" component={MerchantApply} />
        <Route path="/merchants/how-it-works" component={MerchantHowItWorks} />
        <Route path="/merchants/faq" component={MerchantFAQ} />
        
        {/* Brokers */}
        <Route path="/brokers" component={Brokers} />
        <Route path="/brokers/submit-deal" component={BrokerSubmitDeal} />
        <Route path="/brokers/requirements" component={BrokerResources} />
        <Route path="/brokers/iso-faq" component={FAQs} />
        
        {/* Investors */}
        <Route path="/investors" component={Investors} />
        <Route path="/investors/why-investofund" component={InvestorResources} />
        <Route path="/investors/example-returns" component={CommissionStructure} />
        <Route path="/investors/request-info" component={Investors} />
        
        {/* About Us - will create later */}
        <Route path="/about" component={Contact} />
        
        <Route path="/contact" component={Contact} />
        
        {/* Legacy routes for backward compatibility */}
        <Route path="/iso-tools" component={ISOTools} />
        <Route path="/iso-training" component={ISOTraining} />
        <Route path="/admin" component={Admin} />
        
        {/* User Dashboards */}
        <Route path="/investor-dashboard" component={InvestorDashboard} />
        <Route path="/dashboard/investor" component={InvestorDashboard} />
        <Route path="/dashboard/broker" component={BrokerDashboard} />
        <Route path="/dashboard/merchant" component={MerchantDashboard} />
        
        {/* Footer Pages */}
        <Route path="/profit-sharing-agreement" component={ProfitSharingAgreement} />
        <Route path="/risk-disclosure" component={RiskDisclosure} />
        <Route path="/investor-resources" component={InvestorResources} />
        <Route path="/broker-resources" component={BrokerResources} />
        <Route path="/commission-structure" component={CommissionStructure} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/legal" component={Legal} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
