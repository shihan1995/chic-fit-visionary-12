
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create SimplePages component for routes that don't need special functionality
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StyleProfile from "./components/ui/StyleProfile";
import SizeRecommendation from "./components/ui/SizeRecommendation";
import ColorAnalysis from "./components/ui/ColorAnalysis";

const SimplePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const StyleProfilePage = () => (
  <SimplePage>
    <div className="pt-24">
      <StyleProfile />
    </div>
  </SimplePage>
);

const SizeGuidePage = () => (
  <SimplePage>
    <div className="pt-24">
      <SizeRecommendation />
    </div>
  </SimplePage>
);

const ColorAnalysisPage = () => (
  <SimplePage>
    <div className="pt-24">
      <ColorAnalysis />
    </div>
  </SimplePage>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/style-profile" element={<StyleProfilePage />} />
          <Route path="/size-guide" element={<SizeGuidePage />} />
          <Route path="/color-analysis" element={<ColorAnalysisPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
