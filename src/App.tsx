import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import AboutCMDD from "./pages/AboutCMDD";
import CaseStudies from "./pages/CaseStudies";
import Quiz from "./pages/Quiz";
import HallOfDogMoms from "./pages/HallOfDogMoms";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/about-cmdd" element={<AboutCMDD />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/hall-of-dog-moms" element={<HallOfDogMoms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
