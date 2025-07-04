import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Landing from "@/pages/Landing";
import { useAuth } from "@/hooks/useAuth";
import Investors from "@/pages/Investors";
import Brokers from "@/pages/Brokers";
import Merchants from "@/pages/Merchants";
import Contact from "@/pages/Contact";
import ISOTools from "@/pages/ISOTools";
import ISOTraining from "@/pages/ISOTraining";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <Layout>
          <Route path="/" component={Home} />
          <Route path="/investors" component={Investors} />
          <Route path="/brokers" component={Brokers} />
          <Route path="/merchants" component={Merchants} />
          <Route path="/contact" component={Contact} />
          <Route path="/iso-tools" component={ISOTools} />
          <Route path="/iso-training" component={ISOTraining} />
          <Route path="/admin" component={Admin} />
        </Layout>
      )}
      <Route component={NotFound} />
    </Switch>
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
