import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnRouteChange } from "./components/ScrollToTopOnRouteChange";
import { useEffect } from "react";
import PreloadScreen from "./components/PreloadScreen";

// Import pages
import Home from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Import service pages
import AWS from "./pages/services/AWS";
import Azure from "./pages/services/Azure";
import GoogleWorkspace from "./pages/services/GoogleWorkspace";
import Microsoft365 from "./pages/services/Microsoft365";
import Specialized from "./pages/services/Specialized";

const queryClient = new QueryClient();

// AppLayout component that wraps all routes with the Layout
const AppLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTopOnRouteChange />
        <PreloadScreen />
        <Routes>
          {/* Routes with layout */}
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about.tsx" element={<Navigate to="/about" replace />} />
            <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<Quote />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            
            {/* Service pages */}
            <Route path="services/aws" element={<AWS />} />
            <Route path="services/azure" element={<Azure />} />
            <Route path="services/google-workspace" element={<GoogleWorkspace />} />
            <Route path="services/microsoft-365" element={<Microsoft365 />} />
            <Route path="services/specialized" element={<Specialized />} />
            
            {/* 404 - Keep this as the last route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
