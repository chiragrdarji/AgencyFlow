import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import SupportedPlatforms from "@/pages/SupportedPlatforms";
import Onboarding from "@/pages/Onboarding";
import EducationMaterials from "@/pages/EducationMaterials";
import Contact from "@/pages/Contact";
import DentrixIntegration from "@/pages/agency-dentrix";
import AgencyOpenDental from "@/pages/agency-open-dental";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/supported-platforms" component={SupportedPlatforms} />
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/education" component={EducationMaterials} />
        <Route path="/contact" component={Contact} />
        <Route path="/dentrix-gohighlevel-integration" component={DentrixIntegration} />
        <Route path="/open-dental-gohighlevel-integration" component={AgencyOpenDental} />
       
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


