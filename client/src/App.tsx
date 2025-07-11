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
import MCADetails from "@/pages/merchants/MCADetails";
import LineOfCreditDetails from "@/pages/merchants/LineOfCreditDetails";
import EquipmentFinancingDetails from "@/pages/merchants/EquipmentFinancingDetails";
import CommercialMortgageDetails from "@/pages/merchants/CommercialMortgageDetails";
import TermLoansDetails from "@/pages/merchants/TermLoansDetails";
import InvoiceFactoringDetails from "@/pages/merchants/InvoiceFactoringDetails";
import POFinancingDetails from "@/pages/merchants/POFinancingDetails";
import SBALoansDetails from "@/pages/merchants/SBALoansDetails";
import BrokerLogin from "@/pages/dashboard/BrokerLogin";
import BrokerPortal from "@/pages/dashboard/BrokerPortal";
import BrokerDashboardPreview from "@/pages/dashboard/BrokerDashboardPreview";
import MerchantDashboardPreview from "@/pages/dashboard/MerchantDashboardPreview";
import InvestorV1Demo from "@/pages/dashboard/InvestorV1Demo";
import LegalDocuments from "@/pages/LegalDocuments";
import MerchantDashboardLearnMore from "@/pages/MerchantDashboardLearnMore";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/investors" component={Investors} />
        <Route path="/brokers" component={Brokers} />
        <Route path="/merchants" component={Merchants} />
        <Route path="/merchants/mca-details" component={MCADetails} />
        <Route path="/merchants/line-of-credit-details" component={LineOfCreditDetails} />
        <Route path="/merchants/equipment-financing-details" component={EquipmentFinancingDetails} />
        <Route path="/merchants/commercial-mortgage-details" component={CommercialMortgageDetails} />
        <Route path="/merchants/term-loans-details" component={TermLoansDetails} />
        <Route path="/merchants/invoice-factoring-details" component={InvoiceFactoringDetails} />
        <Route path="/merchants/po-financing-details" component={POFinancingDetails} />
        <Route path="/merchants/sba-loans-details" component={SBALoansDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/broker-login" component={BrokerLogin} />
        <Route path="/dashboard/broker" component={BrokerPortal} />
        <Route path="/dashboard/broker-preview" component={BrokerDashboardPreview} />
        <Route path="/dashboard/merchant-preview" component={MerchantDashboardPreview} />
        <Route path="/dashboard/investor-v1-demo" component={InvestorV1Demo} />
        <Route path="/legal-documents" component={LegalDocuments} />
        <Route path="/merchant-dashboard-learn-more" component={MerchantDashboardLearnMore} />
        <Route path="/iso-tools" component={ISOTools} />
        <Route path="/iso-training" component={ISOTraining} />
        <Route path="/admin" component={Admin} />
        
        {/* User Dashboards */}
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
