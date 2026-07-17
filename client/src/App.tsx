import React from "react";
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
import DentalMarketingAttributionSoftware from "./pages/DentalMarketingAttributionSoftware";
import { useLocation } from "wouter";
import { useEffect } from "react";
import DentalAnalyticsDashboard from "./pages/DentalAnalyticsDashboard";
import ForDentalMarketingAgencies from "./pages/ForDentalMarketingAgencies";
import TreatmentTrackingRevenuePipelineIntelligence from "./pages/TreatmentTrackingRevenuePipelineIntelligence";
import DentalPMSIntegrations from "./pages/DentalPMSIntegrations";
import HowSmartSyncWorks from "./pages/HowSmartSyncWorks";
import DentrixCRMIntegration from "./pages/DentrixCRMIntegration";
import OpenDentalCRMIntegration from "./pages/OpenDentalCRMIntegration";
import EaglesoftCRMIntegration from "./pages/EaglesoftCRMIntegration";
import GoHighLevelDentalIntegration from "./pages/GoHighLevelDentalIntegration";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const DownloadPage = () => {
  const [, setLocation] = useLocation();
 
  useEffect(() => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/pdfs/SmartSync-Synchronizer.exe"; // Path in public folder
    link.download = "SmartSync-Synchronizer.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
 
    // Redirect after short delay
    setTimeout(() => {
      setLocation("/"); // Redirect to home page
    }, 500); // 0.5s delay
  }, [setLocation]);
 
  return <h2>Your download should start shortly...</h2>;
};

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
        <Route path="/SmartSync-Synchronizer.exe" component={DownloadPage} />
        <Route path="/dentrix-gohighlevel-integration" component={DentrixIntegration} />
        <Route path="/open-dental-gohighlevel-integration" component={AgencyOpenDental} />
        <Route path="/dental-marketing-attribution" component={DentalMarketingAttributionSoftware} />
        <Route path="/dental-analytics-dashboard" component={DentalAnalyticsDashboard} />
        <Route path="/for-dental-marketing-agencies" component={ForDentalMarketingAgencies} />
        <Route path="/treatment-tracking-software" component={TreatmentTrackingRevenuePipelineIntelligence} />
        <Route path="/dental-pms-integrations" component={DentalPMSIntegrations} />
        <Route path="/how-smartsync-works" component={HowSmartSyncWorks} />
        <Route path="/dentrix-crm-integration" component={DentrixCRMIntegration} />
        <Route path="/open-dental-crm-integration" component={OpenDentalCRMIntegration} />
        <Route path="/eaglesoft-crm-integration" component={EaglesoftCRMIntegration} />
        <Route path="/gohighlevel-dental-integration" component={GoHighLevelDentalIntegration} />
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
