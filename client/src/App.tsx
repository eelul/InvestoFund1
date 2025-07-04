import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Investors from "@/pages/Investors";
import Brokers from "@/pages/Brokers";
import Merchants from "@/pages/Merchants";
import Contact from "@/pages/Contact";
import ISOTools from "@/pages/ISOTools";
import ISOTraining from "@/pages/ISOTraining";
import Admin from "@/pages/Admin";
import ProfitSharingAgreement from "@/pages/ProfitSharingAgreement";
import RiskDisclosure from "@/pages/RiskDisclosure";
import InvestorResources from "@/pages/InvestorResources";
import BrokerResources from "@/pages/BrokerResources";
import CommissionStructure from "@/pages/CommissionStructure";
import FAQs from "@/pages/FAQs";
import Legal from "@/pages/Legal";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/investors" component={Investors} />
        <Route path="/brokers" component={Brokers} />
        <Route path="/merchants" component={Merchants} />
        <Route path="/contact" component={Contact} />
        <Route path="/iso-tools" component={ISOTools} />
        <Route path="/iso-training" component={ISOTraining} />
        <Route path="/admin" component={Admin} />
        
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
